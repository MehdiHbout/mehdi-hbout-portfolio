import { Mail, MapPin, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contactEmail, contactMailto, cvPath, linkedInUrl } from "@/lib/data/navigation";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-block"
      aria-labelledby="contact-heading"
    >
      <div className="section-shell">
        <div className="gradient-border relative overflow-hidden rounded-2xl shadow-glow">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.08)_0%,_transparent_60%)]" />
          <div className="relative rounded-2xl bg-card p-6 sm:p-10">
            <SectionHeader
              id="contact-heading"
              eyebrow="Contact"
              title="Let's build reliable automation for complex business processes."
              description="Whether you need workflow automation, API integration, data automation or AI-assisted process design, I can help transform your operational needs into structured IT solutions."
              align="center"
              className="mx-auto max-w-prose-wide"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button
                href={contactMailto}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </Button>
              <Button
                href={cvPath}
                variant="outline"
                size="lg"
                download
                className="w-full sm:w-auto"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </Button>
            </div>

            <div
              className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-3"
              aria-label="Contact information"
            >
              <div className="text-sm text-text-secondary">
                <span className="font-medium text-text-primary">Mehdi HBOUT</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                Morocco
              </div>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
                linkedin.com/in/mehdi-hbout
              </a>
              <a
                href={contactMailto}
                className="flex min-h-11 items-center gap-2 rounded-lg px-1 text-sm text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
