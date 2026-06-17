import { metrics } from "@/lib/data/metrics";
import { Card } from "@/components/ui/Card";

export function Metrics() {
  return (
    <section className="section-block section-alt" aria-label="Key metrics">
      <div className="section-shell">
        <div className="grid gap-section-gap sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.value} hover={false}>
              <p className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {metric.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
