import { caseStudies, confidentialityNote } from "@/lib/data/case-studies";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { Info } from "lucide-react";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="section-block section-alt"
      aria-labelledby="case-studies-heading"
    >
      <div className="section-shell">
        <SectionHeader
          id="case-studies-heading"
          eyebrow="Case Studies"
          title="Enterprise delivery experience"
          description="Anonymized snapshots of real workflow automation, data and integration projects."
        />

        <div
          className="mb-section-gap flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4"
          role="note"
        >
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-text-secondary">
            {confidentialityNote}
          </p>
        </div>

        <div className="grid gap-section-gap sm:grid-cols-2">
          {caseStudies.map((study) => (
            <Card key={study.slug} stack>
              <h3 className="text-heading-lg font-semibold text-text-primary">
                {study.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
                {study.short}
              </p>
              <p className="mt-3 text-sm leading-snug text-text-secondary/90">
                <span className="font-medium text-text-primary">Impact: </span>
                <span className="italic">{study.impact}</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border/60 pt-4">
                {study.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
