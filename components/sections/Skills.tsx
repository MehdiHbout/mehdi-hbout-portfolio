import { skillGroups } from "@/lib/data/skills";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-block"
      aria-labelledby="skills-heading"
    >
      <div className="section-shell">
        <SectionHeader
          id="skills-heading"
          eyebrow="Skills"
          title="Technical toolkit"
          description="A comprehensive set of skills spanning workflow automation, integration, data, DevOps and IT delivery."
        />
        <div className="grid gap-section-gap sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.title} stack>
              <h3 className="text-heading-md font-semibold text-text-primary">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
