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

The downloadable CV at `public/cv.pdf` is generated from [`scripts/cv_source.docx`](scripts/cv_source.docx) — that `.docx` is the editable source of truth.

**To update the CV:**

1. Open `scripts/cv_source.docx` in Word, Pages, or Google Docs and edit it directly.
2. Regenerate the PDF:

   ```bash
   python3 scripts/docx_to_pdf.py
   ```

   This requires [LibreOffice](https://www.libreoffice.org) for headless conversion (`brew install --cask libreoffice`) and overwrites `public/cv.pdf`.
3. Commit both the updated `cv_source.docx` and the regenerated `public/cv.pdf`.

`scripts/generate_cv_docx.py` is only needed if you want to rebuild `cv_source.docx` from scratch (e.g. to reset formatting) — it regenerates the `.docx` from Python instead of from hand-edits, using the headshot at `scripts/assets/profile.jpg`.

## Deploy

Deployed on [Vercel](https://vercel.com). Pushing to `main` triggers a production deployment once the repo is connected to a Vercel project.
