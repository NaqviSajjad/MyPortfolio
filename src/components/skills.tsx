import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="02 — Skills" title="Technical toolbox" />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="text-sm font-semibold">{group.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
