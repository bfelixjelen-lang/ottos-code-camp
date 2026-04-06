import {
  competencies,
  getCompetenciesBySubject,
  getCompetencyById,
  getQuestionsByCompetency,
  getQuestionsBySubject,
  getSubjectBySlug,
  subjects
} from "@/lib/seed/question-bank";
import { createId } from "@/lib/utils";
import type {
  AssessmentAttempt,
  AssessmentMode,
  AssessmentSession,
  ChoiceId,
  CompetencyBreakdown,
  SubjectSlug
} from "@/types/domain";

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

export interface SessionBuilderInput {
  sessionId: string;
  mode: AssessmentMode;
  subjectSlug: SubjectSlug;
  competencyId?: string;
  questionCount?: number;
  timed?: boolean;
  timeLimitMinutes?: number;
}

export function buildAssessmentSession({
  sessionId,
  mode,
  subjectSlug,
  competencyId,
  questionCount,
  timed = false,
  timeLimitMinutes
}: SessionBuilderInput): AssessmentSession | null {
  const subject = getSubjectBySlug(subjectSlug);

  if (!subject) {
    return null;
  }

  const competency = competencyId ? getCompetencyById(competencyId) : undefined;
  const sourceQuestions = competencyId
    ? getQuestionsByCompetency(competencyId)
    : getQuestionsBySubject(subjectSlug);

  const questions = shuffle(sourceQuestions).slice(
    0,
    Math.min(questionCount ?? sourceQuestions.length, sourceQuestions.length)
  );

  if (questions.length === 0) {
    return null;
  }

  const title =
    mode === "simulation"
      ? `${subject.name} Milestones Simulation`
      : competency
        ? `${subject.name}: ${competency.title}`
        : `${subject.name} Practice Set`;

  const description =
    mode === "simulation"
      ? "A timed exam-style practice session with one question at a time."
      : competency
        ? `Targeted practice for ${competency.code}.`
        : `Mixed practice across ${subject.name}.`;

  return {
    id: sessionId,
    title,
    description,
    mode,
    subjectSlug,
    competencyId,
    timed,
    timeLimitMinutes,
    questions
  };
}

export function scoreAssessmentSession(
  session: AssessmentSession,
  answers: Record<string, ChoiceId | undefined>,
  flaggedIds: string[],
  elapsedSeconds: number
): AssessmentAttempt {
  const responses = session.questions.map((question) => {
    const selectedChoiceId = answers[question.id];
    return {
      questionId: question.id,
      selectedChoiceId,
      flagged: flaggedIds.includes(question.id),
      isCorrect: selectedChoiceId === question.correctChoiceId
    };
  });

  const correctCount = responses.filter((response) => response.isCorrect).length;
  const totalQuestions = session.questions.length;
  const scorePercent = totalQuestions === 0 ? 0 : (correctCount / totalQuestions) * 100;

  return {
    id: createId("attempt"),
    sessionId: session.id,
    sessionTitle: session.title,
    mode: session.mode,
    subjectSlug: session.subjectSlug,
    competencyId: session.competencyId,
    submittedAt: new Date().toISOString(),
    elapsedSeconds,
    timed: session.timed,
    timeLimitMinutes: session.timeLimitMinutes,
    correctCount,
    totalQuestions,
    scorePercent,
    flaggedCount: responses.filter((response) => response.flagged).length,
    questions: session.questions,
    responses,
    competencyBreakdown: buildCompetencyBreakdown(session.questions, responses)
  };
}

function buildCompetencyBreakdown(
  questions: AssessmentSession["questions"],
  responses: AssessmentAttempt["responses"]
): CompetencyBreakdown[] {
  const breakdownMap = new Map<string, CompetencyBreakdown>();

  questions.forEach((question) => {
    question.competencyIds.forEach((competencyId) => {
      const competency = getCompetencyById(competencyId);
      if (!competency) {
        return;
      }

      const existing =
        breakdownMap.get(competencyId) ??
        {
          competencyId,
          competencyCode: competency.code,
          competencyTitle: competency.title,
          correctCount: 0,
          totalQuestions: 0,
          accuracy: 0
        };

      const response = responses.find((item) => item.questionId === question.id);

      existing.totalQuestions += 1;
      if (response?.isCorrect) {
        existing.correctCount += 1;
      }
      existing.accuracy =
        existing.totalQuestions === 0
          ? 0
          : (existing.correctCount / existing.totalQuestions) * 100;

      breakdownMap.set(competencyId, existing);
    });
  });

  return [...breakdownMap.values()].sort((left, right) => left.accuracy - right.accuracy);
}

export function buildDashboardSnapshot(attempts: AssessmentAttempt[]) {
  const totalAttempts = attempts.length;
  const totalQuestionsAnswered = attempts.reduce(
    (sum, attempt) => sum + attempt.totalQuestions,
    0
  );
  const overallAccuracy =
    totalQuestionsAnswered === 0
      ? 0
      : (attempts.reduce((sum, attempt) => sum + attempt.correctCount, 0) /
          totalQuestionsAnswered) *
        100;

  const totalMinutesStudied = Math.round(
    attempts.reduce((sum, attempt) => sum + attempt.elapsedSeconds, 0) / 60
  );

  const sortedAttempts = [...attempts].sort(
    (left, right) =>
      new Date(right.submittedAt).getTime() - new Date(left.submittedAt).getTime()
  );

  const masteryTrend =
    totalAttempts < 2
      ? overallAccuracy
      : sortedAttempts[0]!.scorePercent -
        sortedAttempts[Math.min(2, totalAttempts - 1)]!.scorePercent;

  const subjectProgress = subjects.map((subject) => {
    const subjectAttempts = attempts.filter(
      (attempt) => attempt.subjectSlug === subject.slug
    );
    const subjectQuestions = subjectAttempts.reduce(
      (sum, attempt) => sum + attempt.totalQuestions,
      0
    );
    const subjectCorrect = subjectAttempts.reduce(
      (sum, attempt) => sum + attempt.correctCount,
      0
    );

    return {
      subjectSlug: subject.slug,
      subjectName: subject.name,
      attempts: subjectAttempts.length,
      accuracy: subjectQuestions === 0 ? 0 : (subjectCorrect / subjectQuestions) * 100
    };
  });

  const competencyMap = new Map<string, CompetencyBreakdown>();

  attempts.forEach((attempt) => {
    attempt.competencyBreakdown.forEach((entry) => {
      const existing =
        competencyMap.get(entry.competencyId) ??
        {
          ...entry,
          correctCount: 0,
          totalQuestions: 0,
          accuracy: 0
        };

      existing.correctCount += entry.correctCount;
      existing.totalQuestions += entry.totalQuestions;
      existing.accuracy =
        existing.totalQuestions === 0
          ? 0
          : (existing.correctCount / existing.totalQuestions) * 100;

      competencyMap.set(entry.competencyId, existing);
    });
  });

  const weakestCompetencies = [...competencyMap.values()]
    .sort((left, right) => left.accuracy - right.accuracy)
    .slice(0, 4);

  return {
    overallAccuracy,
    totalAttempts,
    totalQuestionsAnswered,
    totalMinutesStudied,
    masteryTrend,
    subjectProgress,
    weakestCompetencies,
    recentAttempts: sortedAttempts.slice(0, 5)
  };
}

export function getRecommendedPractice(attempts: AssessmentAttempt[]) {
  const snapshot = buildDashboardSnapshot(attempts);
  const weakest = snapshot.weakestCompetencies[0];

  if (weakest) {
    const competency = competencies.find((item) => item.id === weakest.competencyId);
    if (competency) {
      return {
        subjectSlug: competency.subjectSlug,
        competencyId: competency.id,
        label: `${competency.code} - ${competency.title}`
      };
    }
  }

  const firstSubject = subjects[0];
  const firstCompetency = getCompetenciesBySubject(firstSubject.slug)[0];

  return {
    subjectSlug: firstSubject.slug,
    competencyId: firstCompetency?.id,
    label: `${firstSubject.name} mixed practice`
  };
}

export function getSubjectQuestionCount(subjectSlug: SubjectSlug) {
  return getQuestionsBySubject(subjectSlug).length;
}

export function getSubjectCompetencyCount(subjectSlug: SubjectSlug) {
  return getCompetenciesBySubject(subjectSlug).length;
}
