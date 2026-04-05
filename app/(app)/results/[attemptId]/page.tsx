import { ResultsView } from "@/components/quiz/results-view";

export default async function ResultsPage({
  params
}: {
  params: Promise<{ attemptId: string }>;
}) {
  const { attemptId } = await params;

  return <ResultsView attemptId={attemptId} />;
}
