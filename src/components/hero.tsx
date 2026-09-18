import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="relative flex-none">
          <div className="absolute inset-0 -z-10 rounded-full bg-accent opacity-20 blur-2xl" />
          <Image
            src="/images/sajjad.jpg"
            alt="Sajjad Naqvi"
            width={176}
            height={176}
            priority
            className="h-28 w-28 rounded-full border-2 border-accent/40 object-cover sm:h-36 sm:w-36 md:h-44 md:w-44"
          />
        </div>

        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-4 text-lg text-muted sm:text-xl">{profile.title}</h2>

          <p className="mt-6 text-base leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted">
            <span>{profile.location}</span>
            <span className="text-border">·</span>
            <span>{profile.relocate}</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={16} />
              Download CV
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
              >
                <GithubIcon width={18} height={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
              >
                <LinkedinIcon width={18} height={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
