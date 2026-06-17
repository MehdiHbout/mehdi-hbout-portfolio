import { Linkedin } from "lucide-react";
import { contactMailto, linkedInUrl } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="section-divider border-t border-border bg-card/30">
      <div className="section-shell py-10">
        <div className="text-center">
          <p className="text-sm font-medium text-text-primary">
            Mehdi HBOUT — IT Tech Lead & Automation Consultant
          </p>
          <p className="mt-2 font-mono text-xs text-text-secondary">
            Workflow Automation · Camunda BPMN · Python · REST APIs ·
            AI-assisted Automation
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4 w-4 text-primary" aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={contactMailto}
              className="inline-flex min-h-11 items-center text-sm text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}