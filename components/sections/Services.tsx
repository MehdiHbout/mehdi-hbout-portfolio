import { services } from "@/lib/data/services";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section
      id="services"
      className="section-block section-alt"
      aria-labelledby="services-heading"
    >
      <div className="section-shell">
        <SectionHeader
          id="services-heading"
          eyebrow="Services"
          title="How I can help"
          description="Structured services to transform operational needs into reliable, automated IT solutions."
        />
        <div className="grid gap-section-gap sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.title}
              stack
              className={index === 4 ? "sm:col-span-2 lg:col-span-1" : undefined}
            >
              <h3 className="text-heading-lg font-semibold text-text-primary">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <ul className="mt-4 space-y-2.5" role="list">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
