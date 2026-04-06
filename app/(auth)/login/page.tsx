import { AuthForm } from "@/components/auth/auth-form";
import { SiteHeader } from "@/components/site-header";
import { getCurrentUser } from "@/lib/auth/session";

export default async function LoginPage({
  searchParams
}: {
  searchParams?: Promise<{ confirmed?: string }>;
}) {
  const user = await getCurrentUser();
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const successMessage =
    resolvedSearchParams?.confirmed === "1"
      ? "Email confirmed. You can log in now."
      : undefined;

  return (
    <main className="min-h-screen">
      <SiteHeader user={user} />
      <section className="mx-auto flex max-w-7xl justify-center px-6 pb-16 pt-10 lg:px-8">
        <AuthForm
          description="Log in to open the dashboard, start practice sets, and track progress by competency."
          endpoint="/api/auth/login"
          mode="login"
          successMessage={successMessage}
          title="Welcome back"
        />
      </section>
    </main>
  );
}
