import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  stack?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
  stack = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-card-padding shadow-card",
        stack && "flex h-full flex-col",
        hover &&
          "transition-all duration-200 hover:border-primary/25 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
