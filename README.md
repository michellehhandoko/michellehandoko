# michellehandoko

Source for my personal site — **[michellehandoko.vercel.app](https://michellehandoko.vercel.app)**.

A single-page portfolio at the intersection of AI and operations: AI-powered tools
I've built (Atlas, PersonalLib, an AI Operations Agent in progress) alongside the
operational systems work behind them.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- Built with [Claude Code](https://claude.com/claude-code)
- Deployed on [Vercel](https://vercel.com), auto-deploying from `main`

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
├── layout.tsx           # Root layout, fonts, site metadata
├── page.tsx             # The homepage — all sections and project cards
├── site-chrome.tsx      # Shared header + footer
├── globals.css          # Theme tokens and base styles
├── icon.svg             # Favicon
├── opengraph-image.tsx  # Generated social preview card
└── projects/            # One page per case study + shared layout components
```

Homepage content (projects, tags, links, copy) lives in `app/page.tsx`;
each case study is its own page under `app/projects/`.

## Deploying

Push to `main` and Vercel builds and deploys automatically. To build locally:

```bash
npm run build
```
