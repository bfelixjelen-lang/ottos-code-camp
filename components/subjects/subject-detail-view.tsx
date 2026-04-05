"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { buttonStyles } from "@/components/ui/button";
import { buildDashboardSnapshot } from "@/lib/assessment/engine";
import { loadAttempts } from "@/lib/assessment/storage";
import { formatPercent } from "@/lib/utils";
import type { AssessmentAttempt, Competency, Subject } from "@/types/domain";

export function SubjectDetailView({
  subject,
  competencies
}: {
  subject: Subject;
  competencies: Competency[];
}) {
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

  const snapshot = buildDashboardSnapshot(attempts);
  const subjectProgress = snapshot.subjectProgress.find(
    (entry) => entry.subjectSlug === subject.slug
  );

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden p-0">
        <div className={`bg-gradient-to-r ${subject.accent} p-8 text-white`}>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
            Subject overview
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight">
            {subject.name}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-white/85">
            {subject.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/quiz/${subject.slug}-practice?subject=${subject.slug}`}
              className={buttonStyles({
                variant: "secondary",
                size: "lg",
                className: "border-white/60 bg-white/90"
              })}
            >
              Start mixed practice
            </Link>
            <Link
              href={`/simulation/${subject.slug}-simulation?subject=${subject.slug}`}
              className={buttonStyles({
                size: "lg",
                className: "bg-[rgba(24,33,43,0.18)] hover:bg-[rgba(24,33,43,0.28)]"
              })}
            >
              Start timed simulation
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">
              Subject progress
            </p>
            <h2 className="mt-2 text-2xl font-black">Current standing</h2>
          </div>
          <span className="rounded-full bg-[rgba(29,141,122,0.12)] px-4 py-2 text-sm font-black text-[var(--teal)]">
            {formatPercent(subjectProgress?.accuracy ?? 0)}
          </span>
        </div>
        <div className="mt-5">
          <ProgressBar value={subjectProgress?.accuracy ?? 0} />
        </div>
      </Card>

      <section className="space-y-4">
        {competencies.map((competency) => {
          const progress = snapshot.weakestCompetencies.find(
            (entry) => entry.competencyId === competency.id
          );

          return (
            <Card key={competency.id}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    {competency.code}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{competency.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {competency.description}
                  </p>
                </div>

                <div className="min-w-[240px] space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">Accuracy</span>
                    <span className="font-black">
                      {formatPercent(progress?.accuracy ?? 0)}
                    </span>
                  </div>
                  <ProgressBar value={progress?.accuracy ?? 0} />
                  <Link
                    href={`/quiz/${subject.slug}-${competency.id}?subject=${subject.slug}&competency=${competency.id}`}
                    className={`${buttonStyles({ className: "w-full" })}`}
                  >
                    Practice this competency
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
