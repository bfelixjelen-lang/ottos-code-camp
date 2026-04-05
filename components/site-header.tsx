import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { UserSession } from "@/types/domain";

export function SiteHeader({ user }: { user?: UserSession | null }) {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--brand),#ffd48b)] text-lg font-black text-white shadow-lg">
          O
        </div>
        <div>
          <div className="font-black tracking-tight text-[var(--foreground)]">
            Otto&apos;s Code Camp
          </div>
          <div className="text-sm text-[var(--muted)]">
            Georgia Milestones 5th Grade Prep
          </div>
        </div>
      </Link>

      <nav className="flex items-center gap-3">
        <Link
          href={user ? "/dashboard" : "/login"}
          className={cn(buttonStyles({ variant: "secondary" }), "hidden sm:inline-flex")}
        >
          {user ? "Dashboard" : "Login"}
        </Link>
        <Link href={user ? "/subjects" : "/signup"} className={buttonStyles({})}>
          {user ? "Practice" : "Get Started"}
        </Link>
      </nav>
    </header>
  );
}
