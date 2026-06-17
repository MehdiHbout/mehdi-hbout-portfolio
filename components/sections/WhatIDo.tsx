import {
  Workflow,
  Plug,
  Database,
  Rocket,
} from "lucide-react";
import { whatIDoItems } from "@/lib/data/what-i-do";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

const iconMap = {
  workflow: Workflow,
  api: Plug,
  data: Database,
  delivery: Rocket,
};

export function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="section-block"
      aria-labelledby="what-i-do-heading"
    >
      <div className="section-shell">
        <SectionHeader
          id="what-i-do-heading"
          eyebrow="What I Do"
          title="End-to-end automation expertise"
          description="From workflow design to production delivery, I help organizations automate complex business processes with structured, reliable IT solutions."
        />
        <div className="grid gap-section-gap sm:grid-cols-2">
          {whatIDoItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Card key={item.title} stack>
                <div className="icon-box mb-4">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-heading-lg font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
