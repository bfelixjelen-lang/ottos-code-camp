"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpenCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { buttonStyles } from "@/components/ui/button";
import { buildDashboardSnapshot } from "@/lib/assessment/engine";
import { loadAttempts } from "@/lib/assessment/storage";
import { formatPercent } from "@/lib/utils";
import type { AssessmentAttempt, Subject } from "@/types/domain";

export function SubjectCatalog({ subjects }: { subjects: Subject[] }) {
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

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {subjects.map((subject) => {
        const progress = snapshot.subjectProgress.find(
          (entry) => entry.subjectSlug === subject.slug
        );

        return (
          <Card key={subject.id} className="overflow-hidden">
            <div
              className={`rounded-3xl bg-gradient-to-r ${subject.accent} p-5 text-white`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
                    Subject path
                  </p>
                  <h2 className="mt-2 text-3xl font-black">{subject.name}</h2>
                </div>
                <BookOpenCheck className="h-10 w-10 rounded-2xl bg-white/15 p-2" />
              </div>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/85">
                {subject.description}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">Current mastery</span>
                <span className="font-black">
                  {formatPercent(progress?.accuracy ?? 0)}
                </span>
              </div>
              <ProgressBar value={progress?.accuracy ?? 0} />
              <p className="text-sm text-[var(--muted)]">
                {progress?.attempts ?? 0} attempt
                {progress?.attempts === 1 ? "" : "s"} completed
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/subjects/${subject.slug}`}
                className={buttonStyles({ size: "lg" })}
              >
                Open subject
              </Link>
              <Link
                href={`/simulation/${subject.slug}-simulation?subject=${subject.slug}`}
                className={buttonStyles({ variant: "secondary", size: "lg" })}
              >
                Run simulation
              </Link>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
