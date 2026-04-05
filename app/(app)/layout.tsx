import Link from "next/link";
import { LayoutDashboard, LibraryBig, LogOut } from "lucide-react";
import { logoutAction } from "@/app/actions/auth";
import { Button, buttonStyles } from "@/components/ui/button";
import { requireUser } from "@/lib/auth/session";

export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const user = await requireUser();

  return (
    <main className="min-h-screen">
      <header className="border-b border-[var(--line)] bg-white/55 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
              Otto&apos;s Code Camp
            </p>
            <h1 className="mt-1 text-xl font-black tracking-tight">
              Georgia Milestones 5th Grade Prep
            </h1>
          </div>

          <nav className="hidden items-center gap-3 md:flex">
            <Link href="/dashboard" className={buttonStyles({ variant: "ghost" })}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
            <Link href="/subjects" className={buttonStyles({ variant: "ghost" })}>
              <LibraryBig className="mr-2 h-4 w-4" />
              Subjects
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold">{user.fullName}</p>
              <p className="text-xs text-[var(--muted)]">{user.email}</p>
            </div>
            <form action={logoutAction}>
              <Button type="submit" variant="secondary">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </form>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">{children}</section>
    </main>
  );
}
