"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Sparkles, Timer, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { getRecommendedPractice } from "@/lib/assessment/engine";
import { loadAttempts } from "@/lib/assessment/storage";
import { buildDashboardSnapshot } from "@/lib/assessment/engine";
import { getCompetencyById } from "@/lib/seed/question-bank";
import { formatMinutes, formatPercent } from "@/lib/utils";
import type { AssessmentAttempt, UserSession } from "@/types/domain";

export function DashboardView({ user }: { user: UserSession }) {
  const [attempts, setAttempts] = useState<AssessmentAttempt[]>([]);

  useEffect(() => {
    let active = true;

    void loadAttempts().then((nextAttempts) => {
      if (active) {
        setAttempts(nextAttempts);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  const snapshot = useMemo(() => buildDashboardSnapshot(attempts), [attempts]);
  const recommendation = useMemo(
    () => getRecommendedPractice(attempts),
    [attempts]
  );

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="bg-[linear-gradient(135deg,rgba(240,143,54,0.18),rgba(255,255,255,0.88))]">
          <Badge>Student dashboard</Badge>
          <h1 className="mt-4 text-4xl font-black tracking-tight">
            Hi, {user.fullName}.
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
            This is your command center for practice, simulation sessions, and
            progress by standard. Start with the next recommended set or review
            your latest work.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/subjects" className={buttonStyles({ size: "lg" })}>
              Browse subjects
            </Link>
            <Link
              href={`/quiz/${recommendation.subjectSlug}-recommended?subject=${recommendation.subjectSlug}${recommendation.competencyId ? `&competency=${recommendation.competencyId}` : ""}`}
              className={buttonStyles({ variant: "secondary", size: "lg" })}
            >
              Resume growth area
            </Link>
          </div>
        </Card>

        <Card>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">
                Recommended next set
              </p>
              <h2 className="mt-2 text-2xl font-black">{recommendation.label}</h2>
            </div>
            <Sparkles className="h-10 w-10 rounded-2xl bg-[rgba(29,141,122,0.12)] p-2 text-[var(--teal)]" />
          </div>

          <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
            Built from your recent attempt history and weakest competency areas.
          </p>

          <div className="mt-6 rounded-3xl bg-[var(--surface-muted)] p-4">
            <p className="text-sm text-[var(--muted)]">Priority focus</p>
            <p className="mt-1 text-lg font-black">{recommendation.label}</p>
          </div>

          <Link
            href={`/quiz/${recommendation.subjectSlug}-recommended?subject=${recommendation.subjectSlug}${recommendation.competencyId ? `&competency=${recommendation.competencyId}` : ""}`}
            className={`${buttonStyles({ className: "mt-6 w-full", size: "lg" })}`}
          >
            Start recommended practice
          </Link>
        </Card>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Overall accuracy",
            value: formatPercent(snapshot.overallAccuracy),
            helper: "Across all submitted questions",
            icon: TrendingUp
          },
          {
            label: "Completed attempts",
            value: String(snapshot.totalAttempts),
            helper: "Practice sets and simulations",
            icon: ArrowRight
          },
          {
            label: "Study time",
            value: formatMinutes(snapshot.totalMinutesStudied * 60),
            helper: "Total time spent in sessions",
            icon: Timer
          },
          {
            label: "Mastery trend",
            value: `${snapshot.masteryTrend >= 0 ? "+" : ""}${Math.round(snapshot.masteryTrend)} pts`,
            helper: "Change across recent submissions",
            icon: Sparkles
          }
        ].map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label}>
              <Icon className="h-8 w-8 text-[var(--brand-strong)]" />
              <p className="mt-5 text-sm text-[var(--muted)]">{metric.label}</p>
              <p className="mt-2 text-3xl font-black">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                {metric.helper}
              </p>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--blue)]">
                Progress by subject
              </p>
              <h2 className="mt-2 text-2xl font-black">Mastery overview</h2>
            </div>
            <Link href="/subjects" className="text-sm font-semibold text-[var(--blue)]">
              Open all subjects
            </Link>
          </div>

          <div className="mt-6 space-y-5">
            {snapshot.subjectProgress.map((subject) => (
              <div key={subject.subjectSlug}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold">{subject.subjectName}</p>
                    <p className="text-[var(--muted)]">
                      {subject.attempts} attempt{subject.attempts === 1 ? "" : "s"}
                    </p>
                  </div>
                  <span className="font-black">{formatPercent(subject.accuracy)}</span>
                </div>
                <ProgressBar value={subject.accuracy} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--violet)]">
            Competency focus
          </p>
          <h2 className="mt-2 text-2xl font-black">Areas to strengthen</h2>

          <div className="mt-6 space-y-4">
            {snapshot.weakestCompetencies.length ? (
              snapshot.weakestCompetencies.map((entry) => {
                const competency = getCompetencyById(entry.competencyId);
                return (
                  <div
                    key={entry.competencyId}
                    className="rounded-3xl border border-[var(--line)] bg-white/80 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-[var(--muted)]">
                          {entry.competencyCode}
                        </p>
                        <h3 className="mt-1 text-lg font-black">
                          {entry.competencyTitle}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                          {competency?.description}
                        </p>
                      </div>
                      <span className="rounded-full bg-[rgba(127,88,190,0.12)] px-3 py-1 text-sm font-bold text-[var(--violet)]">
                        {formatPercent(entry.accuracy)}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-3xl bg-[var(--surface-muted)] p-5 text-sm leading-6 text-[var(--muted)]">
                No progress data yet. Complete a practice set to unlock
                competency-based recommendations.
              </div>
            )}
          </div>
        </Card>
      </section>

      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
          Recent activity
        </p>
        <h2 className="mt-2 text-2xl font-black">Latest attempts</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {snapshot.recentAttempts.length ? (
            snapshot.recentAttempts.map((attempt) => (
              <Link
                key={attempt.id}
                href={`/results/${attempt.id}`}
                className="rounded-3xl border border-[var(--line)] bg-white/80 p-5 transition hover:-translate-y-0.5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                  {attempt.mode}
                </p>
                <h3 className="mt-2 text-xl font-black">{attempt.sessionTitle}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  {formatPercent(attempt.scorePercent)} · {attempt.correctCount}/
                  {attempt.totalQuestions} correct
                </p>
              </Link>
            ))
          ) : (
            <div className="rounded-3xl bg-[var(--surface-muted)] p-5 text-sm leading-6 text-[var(--muted)]">
              No practice history yet. Start with a subject page to generate your
              first score report.
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
