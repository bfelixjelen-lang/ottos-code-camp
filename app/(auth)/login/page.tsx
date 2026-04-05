import { loginAction } from "@/app/actions/auth";
import { AuthForm } from "@/components/auth/auth-form";
import { SiteHeader } from "@/components/site-header";
import { getCurrentUser } from "@/lib/auth/session";

export default async function LoginPage() {
  const user = await getCurrentUser();

  return (
    <main className="min-h-screen">
      <SiteHeader user={user} />
      <section className="mx-auto flex max-w-7xl justify-center px-6 pb-16 pt-10 lg:px-8">
        <AuthForm
          action={loginAction}
          description="Log in to open the dashboard, start practice sets, and track progress by competency."
          mode="login"
          title="Welcome back"
        />
      </section>
    </main>
  );
}
