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
  password: z.string().min(6, "Use at least 6 characters for the password."),
  fullName: z.string().optional()
});

const DEMO_COOKIE_NAME = "otto_demo_user";

function buildCookieValue(data: { email: string; fullName?: string }) {
  return JSON.stringify({
    id: `demo-${data.email}`,
    email: data.email,
    fullName: data.fullName || data.email.split("@")[0] || "Student",
    role: "student",
    provider: "demo"
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    fullName: formData.get("fullName")
  });

  if (!parsed.success) {
    return NextResponse.json(
      {
        error:
          parsed.error.issues[0]?.message ?? "Please check your signup details."
      },
      { status: 400 }
    );
  }

  if (hasSupabaseEnv()) {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback?next=/dashboard`,
        data: {
          full_name: parsed.data.fullName || "Student",
          role: "student"
        }
      }
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    if (data.session) {
      return NextResponse.json({ redirectTo: "/dashboard" });
    }

    return NextResponse.json({
      success:
        "Account created. Check your email if confirmation is enabled in Supabase."
    });
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
