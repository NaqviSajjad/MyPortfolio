import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind.
        </p>
        <p className="font-mono">Deployed on Vercel</p>
      </div>
    </footer>
  );
}
