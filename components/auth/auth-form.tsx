"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface AuthFormState {
  error?: string;
  success?: string;
}

export function AuthForm({
  title,
  description,
  mode,
  endpoint
}: {
  title: string;
  description: string;
  mode: "login" | "signup";
  endpoint: "/api/auth/login" | "/api/auth/signup";
}) {
  const router = useRouter();
  const [state, setState] = useState<AuthFormState>({});
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setState({});

    const formData = new FormData(event.currentTarget);
    const response = await fetch(endpoint, {
      method: "POST",
      body: formData
    });

    const result = (await response.json()) as AuthFormState & {
      redirectTo?: string;
    };

    if (!response.ok) {
      setState({
        error: result.error ?? "Something went wrong. Please try again."
      });
      setPending(false);
      return;
    }

    if (result.redirectTo) {
      router.push(result.redirectTo);
      router.refresh();
      return;
    }

    setState(result);
    setPending(false);
  }

  return (
    <Card className="w-full max-w-md p-8">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-strong)]">
          Student Access
        </p>
        <h1 className="text-3xl font-black tracking-tight">{title}</h1>
        <p className="text-sm leading-6 text-[var(--muted)]">{description}</p>
      </div>

      <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
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
