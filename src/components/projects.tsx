import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="04 — Projects" title="AI-assisted testing & automation" />

      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold">{project.name}</h3>
              <ArrowUpRight
                size={18}
                className="flex-none text-muted transition-colors group-hover:text-accent"
              />
            </div>
            <p className="mt-1 font-mono text-xs text-accent">{project.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <h3 className="mt-14 mb-5 font-mono text-sm text-muted">More on GitHub</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {other.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-sm font-semibold">{project.name}</h4>
              <ArrowUpRight
                size={16}
                className="flex-none text-muted transition-colors group-hover:text-accent"
              />
            </div>
            <p className="mt-1 text-xs text-muted">{project.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
