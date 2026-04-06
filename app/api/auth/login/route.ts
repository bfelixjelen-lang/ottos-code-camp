import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
  createSupabaseServerClient,
  hasSupabaseEnv,
  isDemoAuthEnabled
} from "@/lib/supabase/server";

const authSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(6, "Use at least 6 characters for the password.")
});

const DEMO_COOKIE_NAME = "otto_demo_user";

function buildCookieValue(data: { email: string }) {
  return JSON.stringify({
    id: `demo-${data.email}`,
    email: data.email,
    fullName: data.email.split("@")[0] || "Student",
    role: "student",
    provider: "demo"
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          parsed.error.issues[0]?.message ?? "Please check your login details."
      },
      { status: 400 }
    );
  }

  if (hasSupabaseEnv()) {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ redirectTo: "/dashboard" });
  }

  if (isDemoAuthEnabled()) {
    const cookieStore = await cookies();
    cookieStore.set(DEMO_COOKIE_NAME, buildCookieValue(parsed.data), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/"
    });

    return NextResponse.json({ redirectTo: "/dashboard" });
  }

  return NextResponse.json(
    {
      error:
        "Supabase is not configured yet. Add environment variables or enable demo auth."
    },
    { status: 400 }
  );
}
