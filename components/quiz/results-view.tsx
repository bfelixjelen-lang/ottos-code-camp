"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { buttonStyles } from "@/components/ui/button";
import { getAttempt } from "@/lib/assessment/storage";
import { getSubjectBySlug } from "@/lib/seed/question-bank";
import { formatMinutes, formatPercent } from "@/lib/utils";
import type { AssessmentAttempt } from "@/types/domain";

export function ResultsView({ attemptId }: { attemptId: string }) {
  const [attempt, setAttempt] = useState<AssessmentAttempt | null>(null);

  useEffect(() => {
    let active = true;

    void getAttempt(attemptId).then((nextAttempt) => {
      if (active) {
        setAttempt(nextAttempt);
      }
    });

    return () => {
      active = false;
    };
  }, [attemptId]);

  if (!attempt) {
    return (
      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Result not found
        </p>
        <h1 className="mt-2 text-3xl font-black">No saved attempt yet</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">
          Start a practice set or simulation, then submit it to generate a score
          report here.
        </p>
        <div className="mt-6">
          <Link href="/subjects" className={buttonStyles({ size: "lg" })}>
            Go to subjects
          </Link>
        </div>
      </Card>
    );
  }

  const subject = getSubjectBySlug(attempt.subjectSlug);

  return (
    <div className="space-y-8">
      <Card className="bg-[linear-gradient(135deg,rgba(41,94,170,0.12),rgba(255,255,255,0.92))]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--blue)]">
          Session results
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight">
          {attempt.sessionTitle}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">
          Review the score summary, competency breakdown, and question-by-question
          explanations.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-3xl bg-white/85 p-4">
            <p className="text-sm text-[var(--muted)]">Score</p>
            <p className="mt-1 text-3xl font-black">
              {formatPercent(attempt.scorePercent)}
            </p>
          </div>
          <div className="rounded-3xl bg-white/85 p-4">
            <p className="text-sm text-[var(--muted)]">Correct</p>
            <p className="mt-1 text-3xl font-black">
              {attempt.correctCount}/{attempt.totalQuestions}
            </p>
          </div>
          <div className="rounded-3xl bg-white/85 p-4">
            <p className="text-sm text-[var(--muted)]">Time spent</p>
            <p className="mt-1 text-3xl font-black">
              {formatMinutes(attempt.elapsedSeconds)}
            </p>
          </div>
          <div className="rounded-3xl bg-white/85 p-4">
            <p className="text-sm text-[var(--muted)]">Flagged</p>
            <p className="mt-1 text-3xl font-black">{attempt.flaggedCount}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/dashboard" className={buttonStyles({ size: "lg" })}>
            Back to dashboard
          </Link>
          <Link
            href={`/subjects/${attempt.subjectSlug}`}
            className={buttonStyles({ variant: "secondary", size: "lg" })}
          >
            Keep practicing {subject?.name}
          </Link>
        </div>
      </Card>

      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">
          Competency breakdown
        </p>
        <div className="mt-6 space-y-5">
          {attempt.competencyBreakdown.map((entry) => (
            <div key={entry.competencyId}>
              <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                <div>
                  <p className="font-bold">{entry.competencyCode}</p>
                  <p className="text-[var(--muted)]">{entry.competencyTitle}</p>
                </div>
                <span className="font-black">{formatPercent(entry.accuracy)}</span>
              </div>
              <ProgressBar value={entry.accuracy} />
            </div>
          ))}
        </div>
      </Card>

      <section className="space-y-4">
        {attempt.questions.map((question, index) => {
          const response = attempt.responses.find(
            (entry) => entry.questionId === question.id
          );
          const selectedChoice = question.choices.find(
            (choice) => choice.id === response?.selectedChoiceId
          );
          const correctChoice = question.choices.find(
            (choice) => choice.id === question.correctChoiceId
          );

          return (
            <Card key={question.id}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Review item {index + 1}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1">
                  {question.standardCode}
                </span>
                <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1">
                  {question.reportingCategory}
                </span>
                {question.skill ? (
                  <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1">
                    {question.skill.replaceAll("_", " ")}
                  </span>
                ) : null}
                <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1">
                  DOK {question.dok}
                </span>
              </div>
              {question.passage ? (
                <div className="mt-4 rounded-3xl border border-[var(--line)] bg-[var(--surface-muted)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    {question.passage.genre} passage
                  </p>
                  <h2 className="mt-2 text-xl font-black leading-tight">
                    {question.passage.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                    {question.passage.text}
                  </p>
                </div>
              ) : null}
              <h2 className="mt-3 text-2xl font-black leading-tight">
                {question.stem}
              </h2>

              <div className="mt-5 grid gap-3">
                {question.choices.map((choice) => {
                  const isCorrect = choice.id === question.correctChoiceId;
                  const isSelected = choice.id === response?.selectedChoiceId;

                  return (
                    <div
                      key={choice.id}
                      className={`rounded-3xl border px-5 py-4 ${
                        isCorrect
                          ? "border-emerald-300 bg-emerald-50"
                          : isSelected
                            ? "border-rose-300 bg-rose-50"
                            : "border-[var(--line)] bg-white"
                      }`}
                    >
                      <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white font-black">
                        {choice.id}
                      </span>
                      {choice.text}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl bg-[var(--surface-muted)] p-4">
                  <p className="text-sm text-[var(--muted)]">Your answer</p>
                  <p className="mt-2 text-base font-bold">
                    {selectedChoice
                      ? `${selectedChoice.id}. ${selectedChoice.text}`
                      : "No answer selected"}
                  </p>
                </div>
                <div className="rounded-3xl bg-[rgba(29,141,122,0.08)] p-4">
                  <p className="text-sm text-[var(--muted)]">Correct answer</p>
                  <p className="mt-2 text-base font-bold">
                    {correctChoice
                      ? `${correctChoice.id}. ${correctChoice.text}`
                      : "Answer key unavailable"}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-[var(--line)] bg-white/80 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-strong)]">
                  Rationale
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                  {question.explanation}
                </p>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
