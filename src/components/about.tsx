import { SectionHeading } from "@/components/section-heading";
import { education, certifications, languages } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="01 — About" title="Background" />

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-mono text-sm text-muted">Education</h3>
          <ul className="mt-4 space-y-5">
            {education.map((item) => (
              <li key={item.degree}>
                <p className="text-sm font-medium">{item.degree}</p>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-1 text-xs text-muted">
                  {item.period}
                  {item.note ? ` · ${item.note}` : ""}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-mono text-sm text-muted">Languages</h3>
          <ul className="mt-4 space-y-2">
            {languages.map((lang) => (
              <li key={lang.name} className="text-sm">
                <span className="font-medium">{lang.name}</span>
                <span className="text-muted"> — {lang.level}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-sm text-muted">Certifications & Training</h3>
          <ul className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
