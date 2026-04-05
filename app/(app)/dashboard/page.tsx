import { DashboardView } from "@/components/dashboard/dashboard-view";
import { requireUser } from "@/lib/auth/session";

export default async function DashboardPage() {
  const user = await requireUser();

  return <DashboardView user={user} />;
}
