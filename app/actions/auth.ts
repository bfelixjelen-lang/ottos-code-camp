"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  createSupabaseServerClient,
  hasSupabaseEnv,
  isDemoAuthEnabled
} from "@/lib/supabase/server";

const authSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z
    .string()
    .min(6, "Use at least 6 characters for the password."),
  fullName: z.string().optional()
});

const DEMO_COOKIE_NAME = "otto_demo_user";

export interface AuthFormState {
  error?: string;
  success?: string;
}

function buildCookieValue(data: { email: string; fullName?: string }) {
  return JSON.stringify({
    id: `demo-${data.email}`,
    email: data.email,
    fullName: data.fullName || data.email.split("@")[0] || "Student",
    role: "student",
    provider: "demo"
  });
}

export async function loginAction(
  _previousState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const parsed = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Please check your login details."
    };
  }

  if (hasSupabaseEnv()) {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password
    });

    if (error) {
      return { error: error.message };
    }

    redirect("/dashboard");
  }

  if (isDemoAuthEnabled()) {
    const cookieStore = await cookies();
    cookieStore.set(DEMO_COOKIE_NAME, buildCookieValue(parsed.data), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/"
    });

    redirect("/dashboard");
  }

  return {
    error:
      "Supabase is not configured yet. Add environment variables or enable demo auth."
  };
}

export async function signupAction(
  _previousState: AuthFormState,
  formData: FormData
): Promise<AuthFormState> {
  const parsed = authSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    fullName: formData.get("fullName")
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Please check your signup details."
    };
  }

  if (hasSupabaseEnv()) {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/dashboard`,
        data: {
          full_name: parsed.data.fullName || "Student",
          role: "student"
        }
      }
    });

    if (error) {
      return { error: error.message };
    }

    if (data.session) {
      redirect("/dashboard");
    }

    return {
      success:
        "Account created. Check your email if confirmation is enabled in Supabase."
    };
  }

  if (isDemoAuthEnabled()) {
    const cookieStore = await cookies();
    cookieStore.set(DEMO_COOKIE_NAME, buildCookieValue(parsed.data), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/"
    });

    redirect("/dashboard");
  }

  return {
    error:
      "Supabase is not configured yet. Add environment variables or enable demo auth."
  };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(DEMO_COOKIE_NAME);

  if (hasSupabaseEnv()) {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  }

  redirect("/login");
}
