import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Database,
  BarChart3,
  GitBranch,
  Layers,
} from "lucide-react";

const steps = [
  { label: "Business Process", icon: Layers },
  { label: "BPMN Workflow", icon: GitBranch },
  { label: "API Integration", icon: ArrowRight },
  { label: "Data Control", icon: Database },
  { label: "Operational Reporting", icon: BarChart3 },
];

interface WorkflowVisualProps {
  compact?: boolean;
  className?: string;
}

export function WorkflowVisual({ compact = false, className }: WorkflowVisualProps) {
  if (compact) {
    return (
      <div
        className={cn(
          "min-w-0 max-w-full overflow-hidden rounded-xl border border-border bg-card/90 p-3 shadow-card",
          className
        )}
        aria-label="Automation workflow: Business Process to Operational Reporting"
      >
        <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex shrink-0 items-center gap-1.5">
                <div className="flex items-center gap-1.5 rounded-md border border-border bg-background/70 px-2.5 py-1.5">
                  <Icon
                    className="h-3.5 w-3.5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="whitespace-nowrap font-mono text-[11px] text-text-secondary">
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="h-3 w-3 shrink-0 text-primary/50"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card/80 p-5 shadow-card backdrop-blur-sm",
        className
      )}
      aria-label="Automation workflow: Business Process to Operational Reporting"
    >
      <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm transition-colors hover:border-primary/40">
                <Icon
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="font-mono text-text-secondary">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-primary/60 sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
