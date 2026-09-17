import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="03 — Experience" title="Where I've worked" />

      <div className="relative border-l border-border pl-8">
        {experience.map((job) => (
          <div key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold">{job.role}</h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-muted">
              {job.company} · {job.location}
            </p>

            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 flex-none rounded-full bg-muted" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
