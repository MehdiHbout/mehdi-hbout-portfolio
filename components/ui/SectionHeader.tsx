import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-section-gap max-w-prose-wide",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="section-eyebrow">{eyebrow}</span>
      <h2
        id={id}
        className="text-display-md font-semibold tracking-tight text-text-primary sm:text-3xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-secondary leading-relaxed">{description}</p>
      )}
    </header>
  );
}
