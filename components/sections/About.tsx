import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <section
      id="about"
      className="section-block section-alt"
      aria-labelledby="about-heading"
    >
      <div className="section-shell">
        <SectionHeader
          id="about-heading"
          eyebrow="About"
          title="Automation consultant with a delivery mindset"
        />
        <Card hover={false} className="max-w-prose-wide">
          <div className="space-y-4 leading-relaxed text-text-secondary">
            <p>
              I specialize in turning complex business processes into automated,
              reliable and scalable IT solutions.
            </p>
            <p>
              Over the past 6+ years, I have worked across financial systems and
              telecom environments, designing BPMN workflows, building API
              integrations and delivering data automation solutions that support
              critical business operations.
            </p>
            <p>
              My background combines technical leadership, business analysis and
              hands-on implementation. I work closely with business stakeholders,
              development teams and operations to ensure automation projects are
              delivered with clarity, traceability and production readiness.
            </p>
            <p>
              Beyond traditional automation, I am actively exploring AI-powered
              workflows, structured prompt engineering and API-based integrations
              to help teams prototype smarter, more efficient operational
              solutions.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
