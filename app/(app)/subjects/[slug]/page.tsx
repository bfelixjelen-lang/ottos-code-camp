import { notFound } from "next/navigation";
import { SubjectDetailView } from "@/components/subjects/subject-detail-view";
import { getCompetenciesBySubject, getSubjectBySlug } from "@/lib/seed/question-bank";
import type { SubjectSlug } from "@/types/domain";

export default async function SubjectDetailPage({
  params
}: {
  params: Promise<{ slug: SubjectSlug }>;
}) {
  const { slug } = await params;
  const subject = getSubjectBySlug(slug);

  if (!subject) {
    notFound();
  }

  return (
    <SubjectDetailView
      competencies={getCompetenciesBySubject(slug)}
      subject={subject}
    />
  );
}
