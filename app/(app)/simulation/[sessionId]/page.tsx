import { notFound } from "next/navigation";
import { AssessmentPlayer } from "@/components/quiz/assessment-player";
import { buildAssessmentSession } from "@/lib/assessment/engine";
import { getSubjectBySlug } from "@/lib/seed/question-bank";
import type { SubjectSlug } from "@/types/domain";

function normalizeSubject(subject: string | string[] | undefined): SubjectSlug {
  const value = Array.isArray(subject) ? subject[0] : subject;

  if (
    value === "math" ||
    value === "ela" ||
    value === "science" ||
    value === "social-studies"
  ) {
    return value;
  }

  return "math";
}

export default async function SimulationPage({
  params,
  searchParams
}: {
  params: Promise<{ sessionId: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { sessionId } = await params;
  const query = await searchParams;
  const subjectSlug = normalizeSubject(query.subject);

  const session = buildAssessmentSession({
    sessionId,
    mode: "simulation",
    subjectSlug,
    questionCount: 4,
    timed: true,
    timeLimitMinutes: 15
  });

  if (!session) {
    notFound();
  }

  const subject = getSubjectBySlug(subjectSlug);

  return (
    <AssessmentPlayer
      backHref={`/subjects/${subject?.slug ?? "math"}`}
      session={session}
    />
  );
}
