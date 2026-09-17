# Sajjad Naqvi — Portfolio

Personal portfolio site showcasing SDET / QA Automation / CI/CD & DevOps experience, built with Next.js (App Router) and Tailwind CSS v4.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, static export via `next build`)
- [Tailwind CSS v4](https://tailwindcss.com)
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- [lucide-react](https://lucide.dev) for icons

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All resume/profile content lives in [`src/lib/data.ts`](src/lib/data.ts) — edit that file to update experience, skills, or projects rather than the components.

The downloadable CV at `public/cv.pdf` is generated from the source CV; regenerate it after editing content by re-running the export script used to build it.

## Deploy

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production deployment once the repo is connected to a Vercel project.
