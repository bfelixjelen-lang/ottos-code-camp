import { signupAction } from "@/app/actions/auth";
import { AuthForm } from "@/components/auth/auth-form";
import { SiteHeader } from "@/components/site-header";
import { getCurrentUser } from "@/lib/auth/session";

export default async function SignupPage() {
  const user = await getCurrentUser();

  return (
    <main className="min-h-screen">
      <SiteHeader user={user} />
      <section className="mx-auto flex max-w-7xl justify-center px-6 pb-16 pt-10 lg:px-8">
        <AuthForm
          action={signupAction}
          description="Create a student account for progress tracking, guided practice, and future family features."
          mode="signup"
          title="Create your account"
        />
      </section>
    </main>
  );
}
