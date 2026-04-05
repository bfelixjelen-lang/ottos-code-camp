import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, LineChart, Target } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonStyles } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth/session";
import { subjects } from "@/lib/seed/question-bank";

const featureCards = [
  {
    title: "Practice by subject and standard",
    description:
      "Students can focus on Math, ELA, Science, and Social Studies, then narrow into the exact competency that needs work.",
    icon: BookOpen
  },
  {
    title: "Timed Milestones simulation",
    description:
      "A reusable exam shell supports timed sections, question flags, pacing, and review just like a real test session.",
    icon: Clock3
  },
  {
    title: "Progress families can understand",
    description:
      "See accuracy, recent activity, mastery trends, and the next best practice set without digging through spreadsheets.",
    icon: LineChart
  }
];

export default async function HomePage() {
  const user = await getCurrentUser();

  return (
    <main className="pb-16">
      <SiteHeader user={user} />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-12 pt-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="space-y-8">
          <Badge>Warm, focused, and future-ready</Badge>
          <div className="space-y-5">
            <h1 className="max-w-3xl font-[var(--font-display)] text-5xl leading-tight text-balance text-[var(--foreground)] md:text-6xl">
              Otto&apos;s Code Camp helps 5th graders prepare with confidence.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
              This MVP gives you a strong real-app foundation: secure sign-in,
              subject practice, competency tracking, and a reusable assessment
              engine built for Georgia Milestones growth.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href={user ? "/dashboard" : "/signup"}
              className={buttonStyles({ size: "lg" })}
            >
              {user ? "Open student dashboard" : "Start the MVP"}
            </Link>
            <Link
              href="/subjects"
              className={buttonStyles({ variant: "secondary", size: "lg" })}
            >
              Preview the subject structure
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="min-h-[190px]">
                  <Icon className="h-8 w-8 text-[var(--brand-strong)]" />
                  <h2 className="mt-5 text-xl font-black">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="grid-glow overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,240,228,0.94))]">
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">
                  MVP route map
                </p>
                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  Practice, simulate, review, improve
                </h2>
              </div>
              <Target className="h-11 w-11 rounded-2xl bg-white/80 p-2 text-[var(--blue)] shadow-sm" />
            </div>

            <div className="space-y-4">
              {subjects.map((subject, index) => (
                <div
                  key={subject.id}
                  className="flex items-start justify-between rounded-3xl border border-white/70 bg-white/70 p-4"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-black">{subject.name}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
                      {subject.description}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 text-[var(--brand-strong)]" />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
