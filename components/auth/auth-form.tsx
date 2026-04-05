"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { AuthFormState } from "@/app/actions/auth";

const initialState: AuthFormState = {};

export function AuthForm({
  title,
  description,
  mode,
  action
}: {
  title: string;
  description: string;
  mode: "login" | "signup";
  action: (
    previousState: AuthFormState,
    formData: FormData
  ) => Promise<AuthFormState>;
}) {
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <Card className="w-full max-w-md p-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
          Student Access
        </p>
        <h1 className="text-3xl font-black tracking-tight">{title}</h1>
        <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
      </div>

      <form action={formAction} className="mt-8 space-y-4">
        {mode === "signup" ? (
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-[var(--foreground)]">
              Student name
            </span>
            <input
              className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none ring-0 transition focus:border-[var(--brand)]"
              name="fullName"
              placeholder="Otto Learner"
              type="text"
            />
          </label>
        ) : null}

        <label className="block space-y-2">
          <span className="text-sm font-semibold text-[var(--foreground)]">
            Email
          </span>
          <input
            required
            className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none ring-0 transition focus:border-[var(--brand)]"
            name="email"
            placeholder="student@example.com"
            type="email"
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-semibold text-[var(--foreground)]">
            Password
          </span>
          <input
            required
            className="w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3 outline-none ring-0 transition focus:border-[var(--brand)]"
            name="password"
            placeholder="At least 6 characters"
            type="password"
          />
        </label>

        {state.error ? (
          <p className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
            {state.error}
          </p>
        ) : null}

        {state.success ? (
          <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {state.success}
          </p>
        ) : null}

        <Button className="w-full" disabled={pending} size="lg" type="submit">
          {pending
            ? "Working..."
            : mode === "login"
              ? "Log in"
              : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-sm text-[var(--muted)]">
        {mode === "login" ? "Need an account?" : "Already have an account?"}{" "}
        <Link
          href={mode === "login" ? "/signup" : "/login"}
          className="font-semibold text-[var(--blue)]"
        >
          {mode === "login" ? "Sign up" : "Log in"}
        </Link>
      </p>
    </Card>
  );
}
