import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export function buttonStyles({
  variant = "primary",
  size = "md",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition-transform duration-150 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[var(--brand)] text-white hover:bg-[var(--brand-strong)]",
    secondary:
      "border border-[var(--line)] bg-white/80 text-[var(--foreground)] hover:bg-[var(--surface-muted)]",
    ghost: "text-[var(--foreground)] hover:bg-white/60"
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3 text-base"
  };

  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}
