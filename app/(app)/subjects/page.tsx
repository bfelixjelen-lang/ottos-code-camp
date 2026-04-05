import { SubjectCatalog } from "@/components/subjects/subject-catalog";
import { Card } from "@/components/ui/card";
import { subjects } from "@/lib/seed/question-bank";

export default function SubjectsPage() {
  return (
    <div className="space-y-8">
      <Card>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--blue)]">
          Practice paths
        </p>
        <h1 className="mt-2 text-4xl font-black tracking-tight">
          Choose a subject to build mastery
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">
          Each subject includes competency-specific practice, mixed review sets,
          and a timed simulation path.
        </p>
      </Card>

      <SubjectCatalog subjects={subjects} />
    </div>
  );
}
