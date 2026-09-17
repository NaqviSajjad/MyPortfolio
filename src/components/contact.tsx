import { Mail } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="05 — Contact" title="Let's talk" />

      <div className="rounded-2xl border border-border bg-surface p-8 sm:p-10">
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          Open to SDET, QA automation, and CI/CD / DevOps roles across Germany. If you&apos;re
          hiring or just want to talk shop about test architecture, Playwright agents, or
          AI-assisted QA, reach out below.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <LinkedinIcon width={16} height={16} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon width={16} height={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
