"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import type { AssessmentAttempt } from "@/types/domain";

const ATTEMPT_STORAGE_KEY = "otto-code-camp.attempts";

function loadLocalAttempts(): AssessmentAttempt[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const rawValue = window.localStorage.getItem(ATTEMPT_STORAGE_KEY);
    if (!rawValue) {
      return [];
    }

    return JSON.parse(rawValue) as AssessmentAttempt[];
  } catch {
    return [];
  }
}

function saveLocalAttempt(attempt: AssessmentAttempt) {
  if (typeof window === "undefined") {
    return;
  }

  const currentAttempts = loadLocalAttempts();
  const nextAttempts = [attempt, ...currentAttempts];
  window.localStorage.setItem(ATTEMPT_STORAGE_KEY, JSON.stringify(nextAttempts));
}

export async function loadAttempts(): Promise<AssessmentAttempt[]> {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return loadLocalAttempts();
  }

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return loadLocalAttempts();
  }

  const { data, error } = await supabase
    .from("assessment_attempts")
    .select("client_attempt_id, summary, completed_at")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: false });

  if (error || !data) {
    return loadLocalAttempts();
  }

  return data
    .map((row) => row.summary as AssessmentAttempt)
    .filter(Boolean);
}

export async function saveAttempt(attempt: AssessmentAttempt) {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    saveLocalAttempt(attempt);
    return;
  }

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    saveLocalAttempt(attempt);
    return;
  }

  const { error } = await supabase.from("assessment_attempts").insert({
    client_attempt_id: attempt.id,
    user_id: user.id,
    mode: attempt.mode,
    subject_slug: attempt.subjectSlug,
    competency_key: attempt.competencyId ?? null,
    score_percent: attempt.scorePercent,
    correct_count: attempt.correctCount,
    total_questions: attempt.totalQuestions,
    elapsed_seconds: attempt.elapsedSeconds,
    is_timed: attempt.timed,
    started_at: new Date(
      new Date(attempt.submittedAt).getTime() - attempt.elapsedSeconds * 1000
    ).toISOString(),
    completed_at: attempt.submittedAt,
    summary: attempt
  });

  if (error) {
    saveLocalAttempt(attempt);
  }
}

export async function getAttempt(attemptId: string) {
  const supabase = createSupabaseBrowserClient();

  if (!supabase) {
    return loadLocalAttempts().find((attempt) => attempt.id === attemptId) ?? null;
  }

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    return loadLocalAttempts().find((attempt) => attempt.id === attemptId) ?? null;
  }

  const { data, error } = await supabase
    .from("assessment_attempts")
    .select("summary")
    .eq("user_id", user.id)
    .eq("client_attempt_id", attemptId)
    .maybeSingle();

  if (error || !data) {
    return loadLocalAttempts().find((attempt) => attempt.id === attemptId) ?? null;
  }

  return data.summary as AssessmentAttempt;
}
