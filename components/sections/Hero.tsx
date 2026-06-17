import { Button } from "@/components/ui/Button";
import { WorkflowVisual } from "@/components/ui/WorkflowVisual";
import { contactMailto } from "@/lib/data/navigation";

export function Hero() {
  return (
    <section
      id="home"
      className="section-block relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(56,189,248,0.1)_0%,_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-shell relative min-w-0 max-w-full">
        <div className="grid min-w-0 max-w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-1 min-w-0 max-w-full lg:order-none">
            <span className="section-eyebrow">
              IT Tech Lead & Automation Consultant
            </span>
            <h1
              id="hero-heading"
              className="mt-3 break-words text-balance text-2xl font-bold leading-tight tracking-tight text-text-primary sm:text-3xl lg:text-display-lg"
            >
              I help businesses automate complex workflows with BPMN, Python, REST
              APIs and AI-powered integrations.
            </h1>

            <div className="order-3 mt-6 min-w-0 max-w-full lg:hidden">
              <WorkflowVisual compact />
            </div>

            <p className="mt-5 max-w-prose text-lg text-text-secondary leading-relaxed">
              With 6+ years of experience across financial systems and telecom
              environments, I bridge business needs and technical delivery to build
              reliable automation solutions.
            </p>
            <p className="mt-4 max-w-prose text-text-secondary leading-relaxed">
              My work combines business analysis, technical architecture and
              hands-on implementation — from BPMN workflow design to API
              integration, data automation and production support.
            </p>

            <div className="mt-8 flex min-w-0 max-w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#case-studies" variant="primary" size="lg" className="w-full max-w-full sm:w-auto">
                View Case Studies
              </Button>
              <Button href={contactMailto} variant="outline" size="lg" className="w-full max-w-full sm:w-auto">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="order-2 hidden lg:block">
            <WorkflowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
