import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const availableForItems = [
  "Workflow automation missions",
  "API integration projects",
  "Data automation & reporting",
  "IT delivery / Tech Lead roles",
  "AI-assisted business process automation",
];

export function AvailableFor() {
  return (
    <section
      id="available-for"
      className="section-block"
      aria-labelledby="available-for-heading"
    >
      <div className="section-shell">
        <SectionHeader
          id="available-for-heading"
          eyebrow="Available for"
          title="Engagement types"
          description="Focused missions where I can add immediate value across automation, integration and delivery."
          align="center"
          className="mx-auto"
        />

        <Card hover={false} className="mx-auto max-w-3xl">
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {availableForItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-text-secondary"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
