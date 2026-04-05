import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient, hasSupabaseEnv } from "@/lib/supabase/server";
import type { UserSession } from "@/types/domain";

const DEMO_COOKIE_NAME = "otto_demo_user";

export async function getCurrentUser(): Promise<UserSession | null> {
  const cookieStore = await cookies();
  const demoCookie = cookieStore.get(DEMO_COOKIE_NAME);

  if (demoCookie?.value) {
    try {
      return JSON.parse(demoCookie.value) as UserSession;
    } catch {
      // fall through to Supabase
    }
  }

  if (!hasSupabaseEnv()) {
    return null;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  return {
    id: user.id,
    email: user.email ?? "student@example.com",
    fullName:
      (typeof user.user_metadata.full_name === "string"
        ? user.user_metadata.full_name
        : undefined) ?? "Student",
    role:
      (typeof user.user_metadata.role === "string"
        ? user.user_metadata.role
        : "student") as UserSession["role"],
    provider: "supabase"
  };
}

export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return user;
}
