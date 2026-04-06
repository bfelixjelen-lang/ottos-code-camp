"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Flag, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonStyles } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { scoreAssessmentSession } from "@/lib/assessment/engine";
import { saveAttempt } from "@/lib/assessment/storage";
import { formatClock } from "@/lib/utils";
import type { AssessmentSession, ChoiceId } from "@/types/domain";

export function AssessmentPlayer({
  session,
  backHref
}: {
  session: AssessmentSession;
  backHref: string;
}) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, ChoiceId | undefined>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [remainingSeconds, setRemainingSeconds] = useState(
    session.timed ? (session.timeLimitMinutes ?? 0) * 60 : 0
  );
  const [startedAt] = useState(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = session.questions[currentIndex];
  const answeredCount = useMemo(
    () => Object.values(answers).filter(Boolean).length,
    [answers]
  );

  useEffect(() => {
    if (!session.timed || remainingSeconds <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setRemainingSeconds((value) => value - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [remainingSeconds, session.timed]);

  useEffect(() => {
    if (session.timed && remainingSeconds === 0) {
      void handleSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingSeconds, session.timed]);

  function handleAnswer(choiceId: ChoiceId) {
    setAnswers((current) => ({
      ...current,
      [currentQuestion.id]: choiceId
    }));
  }

  function toggleFlag(questionId: string) {
    setFlaggedIds((current) =>
      current.includes(questionId)
        ? current.filter((value) => value !== questionId)
        : [...current, questionId]
    );
  }

  async function handleSubmit() {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    const elapsedSeconds = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
    const attempt = scoreAssessmentSession(
      session,
      answers,
      flaggedIds,
      session.timed && session.timeLimitMinutes
        ? Math.min(elapsedSeconds, session.timeLimitMinutes * 60)
        : elapsedSeconds
    );

    await saveAttempt(attempt);
    router.push(`/results/${attempt.id}`);
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Badge>{session.mode}</Badge>
            <h1 className="mt-4 text-3xl font-black tracking-tight">
              {session.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
              {session.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {session.timed ? (
              <div className="inline-flex items-center rounded-full bg-[rgba(41,94,170,0.12)] px-4 py-2 font-black text-[var(--blue)]">
                <Timer className="mr-2 h-4 w-4" />
                {formatClock(remainingSeconds)}
              </div>
            ) : (
              <div className="inline-flex items-center rounded-full bg-[rgba(29,141,122,0.12)] px-4 py-2 font-black text-[var(--teal)]">
                Untimed practice
              </div>
            )}
            <Link href={backHref} className={buttonStyles({ variant: "secondary" })}>
              Exit session
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-[var(--surface-muted)] p-4">
            <p className="text-sm text-[var(--muted)]">Progress</p>
            <p className="mt-1 text-xl font-black">
              {currentIndex + 1} of {session.questions.length}
            </p>
          </div>
          <div className="rounded-3xl bg-[var(--surface-muted)] p-4">
            <p className="text-sm text-[var(--muted)]">Answered</p>
            <p className="mt-1 text-xl font-black">{answeredCount}</p>
          </div>
          <div className="rounded-3xl bg-[var(--surface-muted)] p-4">
            <p className="text-sm text-[var(--muted)]">Flagged</p>
            <p className="mt-1 text-xl font-black">{flaggedIds.length}</p>
          </div>
        </div>

        <div className="mt-6">
          <ProgressBar
            value={((currentIndex + 1) / session.questions.length) * 100}
          />
        </div>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[0.3fr_0.7fr]">
        <Card className="h-fit">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
            Question map
          </p>
          <div className="mt-5 grid grid-cols-5 gap-2">
            {session.questions.map((question, index) => {
              const isAnswered = Boolean(answers[question.id]);
              const isCurrent = index === currentIndex;
              const isFlagged = flaggedIds.includes(question.id);

              return (
                <button
                  key={question.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-2xl border px-3 py-3 text-sm font-bold transition ${
                    isCurrent
                      ? "border-[var(--brand)] bg-[rgba(240,143,54,0.14)]"
                      : isAnswered
                        ? "border-[rgba(29,141,122,0.24)] bg-[rgba(29,141,122,0.08)]"
                        : "border-[var(--line)] bg-white"
                  }`}
                >
                  <span className="flex items-center justify-center gap-1">
                    {index + 1}
                    {isFlagged ? <Flag className="h-3.5 w-3.5" /> : null}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>

        <Card>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                Question {currentIndex + 1}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge>{currentQuestion.standardCode}</Badge>
                <Badge>{currentQuestion.reportingCategory}</Badge>
                {currentQuestion.skill ? (
                  <Badge>
                    {currentQuestion.skill.replaceAll("_", " ")}
                  </Badge>
                ) : null}
                <Badge>DOK {currentQuestion.dok}</Badge>
              </div>
              {currentQuestion.passage ? (
                <div className="mt-4 rounded-3xl border border-[var(--line)] bg-[var(--surface-muted)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    {currentQuestion.passage.genre} passage
                  </p>
                  <h2 className="mt-2 text-xl font-black leading-tight">
                    {currentQuestion.passage.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--foreground)]">
                    {currentQuestion.passage.text}
                  </p>
                </div>
              ) : null}
              <h2 className="mt-3 text-2xl font-black leading-tight">
                {currentQuestion.stem}
              </h2>
            </div>
            <Button
              onClick={() => toggleFlag(currentQuestion.id)}
              type="button"
              variant="secondary"
            >
              <Flag className="mr-2 h-4 w-4" />
              {flaggedIds.includes(currentQuestion.id) ? "Unflag" : "Flag review"}
            </Button>
          </div>

          <div className="mt-6 space-y-3">
            {currentQuestion.choices.map((choice) => {
              const isSelected = answers[currentQuestion.id] === choice.id;

              return (
                <button
                  key={choice.id}
                  type="button"
                  onClick={() => handleAnswer(choice.id)}
                  className={`w-full rounded-3xl border px-5 py-4 text-left transition ${
                    isSelected
                      ? "border-[var(--brand)] bg-[rgba(240,143,54,0.12)]"
                      : "border-[var(--line)] bg-white hover:bg-[var(--surface-muted)]"
                  }`}
                >
                  <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-muted)] font-black">
                    {choice.id}
                  </span>
                  <span className="text-base leading-7">{choice.text}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <Button
              onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}
              type="button"
              variant="secondary"
            >
              Previous
            </Button>

            <div className="flex flex-wrap gap-3">
              {currentIndex < session.questions.length - 1 ? (
                <Button
                  onClick={() =>
                    setCurrentIndex((value) =>
                      Math.min(session.questions.length - 1, value + 1)
                    )
                  }
                  type="button"
                >
                  Next question
                </Button>
              ) : (
                <Button
                  disabled={isSubmitting}
                  onClick={() => void handleSubmit()}
                  type="button"
                >
                  {isSubmitting ? "Saving..." : "Submit session"}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
