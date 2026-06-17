import { experience } from "@/lib/data/experience";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-block"
      aria-labelledby="experience-heading"
    >
      <div className="section-shell">
        <SectionHeader
          id="experience-heading"
          eyebrow="Experience"
          title="Professional background"
          description="Delivering automation and IT solutions across financial and telecom sectors."
        />
        <div className="space-y-section-gap">
          {experience.map((item) => (
            <Card key={item.company}>
              <div className="flex gap-4">
                <div className="icon-box">
                  <Briefcase
                    className="h-5 w-5 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs text-primary">{item.period}</p>
                  <h3 className="mt-1 text-heading-lg font-semibold text-text-primary">
                    {item.company}
                  </h3>
                  <p className="text-sm font-medium text-text-secondary">
                    {item.role}
                  </p>
                  <p className="mt-3 font-mono text-xs text-secondary">
                    {item.highlights}
                  </p>
                  <p className="mt-3 max-w-prose-wide text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
