import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className
}: {
  value: number;
  className?: string;
}) {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <div
      className={cn(
        "h-3 w-full overflow-hidden rounded-full bg-[rgba(24,33,43,0.08)]",
        className
      )}
    >
      <div
        className="h-full rounded-full bg-[linear-gradient(90deg,var(--teal),var(--brand))] transition-all duration-300"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
