export type Role = "student" | "parent" | "admin";

export type SubjectSlug =
  | "math"
  | "ela"
  | "science"
  | "social-studies";

export type Difficulty = "foundation" | "on-track" | "challenge";

export type AssessmentMode = "practice" | "simulation";

export type ChoiceId = "A" | "B" | "C" | "D";

export interface Subject {
  id: string;
  slug: SubjectSlug;
  name: string;
  description: string;
  accent: string;
}

export interface Competency {
  id: string;
  subjectSlug: SubjectSlug;
  code: string;
  title: string;
  description: string;
}

export interface QuestionChoice {
  id: ChoiceId;
  text: string;
}

export interface Question {
  id: string;
  subjectSlug: SubjectSlug;
  competencyIds: string[];
  grade: number;
  assessment: string;
  itemType: "multiple_choice";
  standardCode: string;
  reportingCategory: string;
  learningTarget: string;
  dok: 1 | 2 | 3 | 4;
  stem: string;
  choices: QuestionChoice[];
  correctChoiceId: ChoiceId;
  explanation: string;
  difficulty: Difficulty;
  tags: string[];
  alignmentNote: string;
  sourceMetadata: {
    source: string;
    note: string;
  };
}

export interface AssessmentSession {
  id: string;
  title: string;
  description: string;
  mode: AssessmentMode;
  subjectSlug: SubjectSlug;
  competencyId?: string;
  timed: boolean;
  timeLimitMinutes?: number;
  questions: Question[];
}

export interface AttemptResponse {
  questionId: string;
  selectedChoiceId?: ChoiceId;
  isCorrect: boolean;
  flagged: boolean;
}

export interface CompetencyBreakdown {
  competencyId: string;
  competencyCode: string;
  competencyTitle: string;
  correctCount: number;
  totalQuestions: number;
  accuracy: number;
}

export interface AssessmentAttempt {
  id: string;
  sessionId: string;
  sessionTitle: string;
  mode: AssessmentMode;
  subjectSlug: SubjectSlug;
  competencyId?: string;
  submittedAt: string;
  elapsedSeconds: number;
  timed: boolean;
  timeLimitMinutes?: number;
  correctCount: number;
  totalQuestions: number;
  scorePercent: number;
  flaggedCount: number;
  questions: Question[];
  responses: AttemptResponse[];
  competencyBreakdown: CompetencyBreakdown[];
}

export interface UserSession {
  id: string;
  email: string;
  fullName: string;
  role: Role;
  provider: "demo" | "supabase";
}

export interface SubjectProgress {
  subjectSlug: SubjectSlug;
  subjectName: string;
  accuracy: number;
  attempts: number;
}

export interface DashboardSnapshot {
  overallAccuracy: number;
  totalAttempts: number;
  totalQuestionsAnswered: number;
  totalMinutesStudied: number;
  masteryTrend: number;
  subjectProgress: SubjectProgress[];
  weakestCompetencies: CompetencyBreakdown[];
  recentAttempts: AssessmentAttempt[];
}
