<div align="center">

<h1>🌐 Personal Portfolio (Multi-Version)</h1>

<p>Modern, fast, and accessible developer portfolio built with <b>Next.js</b>, <b>React</b>, <b>TypeScript</b>, <b>Tailwind CSS</b>, and deployed to <b>GitHub Pages</b>. This repository hosts two iterations (v1 & v2) to showcase evolution in architecture, performance, i18n, and UI/UX polish.</p>

<p>
  <a href="https://JeanEudes-dev.github.io/portfolios"><img src="https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge" alt="Live Demo" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" /></a>
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge" alt="Next.js" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=for-the-badge" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178c6?style=for-the-badge" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Deployed-GitHub%20Pages-181717?style=for-the-badge" alt="GitHub Pages" />
</p>

</div>

---

## 📑 Table of Contents

1. [Overview](#-overview)
2. [Version Comparison](#-version-comparison)
3. [Features](#-features)
4. [Tech Stack](#-tech-stack)
5. [Architecture](#-architecture)
6. [Project Structure](#-project-structure)
7. [Getting Started](#-getting-started)
8. [Development](#-development)
9. [Environment Variables](#-environment-variables)
10. [Deployment (GitHub Pages)](#-deployment-github-pages)
11. [Performance & SEO](#-performance--seo)
12. [Accessibility](#-accessibility)
13. [Internationalization (i18n)](#-internationalization-i18n)
14. [Roadmap](#-roadmap)
15. [Contributing](#-contributing)
16. [License](#-license)
17. [Contact](#-contact)
18. [Acknowledgments](#-acknowledgments)

---

## 🔍 Overview

This repository contains two portfolio implementations:

- `v1/` – Initial portfolio focusing on core sections (hero, skills, projects, contact) with a classic component structure.
- `v2/` – Refined version featuring improved semantics, modular architecture, better performance, dynamic modals, language switching (EN/FR), SEO meta component, scroll progress, and enhanced accessibility.

The site is deployed at: https://JeanEudes-dev.github.io/portfolios

---

## 🆚 Version Comparison

| Aspect                    | v1                 | v2                                |
| ------------------------- | ------------------ | --------------------------------- |
| Stack                     | Next.js + Tailwind | Next.js + Tailwind + i18n         |
| TypeScript Discipline     | Basic              | Stricter typings                  |
| Internationalization      | ❌                 | ✅ (EN/FR via JSON locale files)  |
| SEO Component             | Basic defaults     | Dedicated `SEO` component         |
| Performance Optimizations | Limited            | Lazy images, reduced layout shift |
| Scroll Interaction        | None               | Progress indicator                |
| Modal for Projects        | ❌                 | ✅ `ProjectModal`                 |
| Code Organization         | Flat               | Segmented (hooks, lib, locales)   |

---

## ✨ Features

- Responsive mobile-first design.
- Accessible component patterns (semantic HTML, alt text, focus handling).
- Dark-friendly neutral palette (Tailwind customizable).
- Language switcher with detection hook.
- Project modal with richer descriptions.
- Optimized images & assets (manual for now; could integrate `next/image`).
- SEO meta component for structured metadata, sitemap & robots integration.
- Scroll progress indicator for reading feedback.
- GitHub Pages-friendly configuration with optional `basePath`.

---

## 🛠 Tech Stack

| Category   | Tools                           |
| ---------- | ------------------------------- |
| Framework  | Next.js (App Router)            |
| Language   | TypeScript                      |
| Styling    | Tailwind CSS                    |
| Deployment | GitHub Pages                    |
| i18n (v2)  | JSON locale files + custom hook |
| Forms      | Native HTML + basic validation  |
| Assets     | Static `/public` resources      |

---

## 🧱 Architecture

High-level concepts:

```
User ─▶ App Router (layout.tsx, page.tsx)
       ├─ Components (UI + Sections)
       ├─ Hooks (stateful logic e.g. language detection)
       ├─ Lib (i18n config, constants)
       ├─ Locales (EN/FR JSON dictionaries)
       └─ Public (images, PDFs, sitemap, robots)
```

Potential future enhancements: integrate `next/image`, add analytics, adopt CMS for project data.

---

## 🗂 Project Structure

```
root
├── portfolio/v1
│   ├── src/app
│   ├── src/components
│   ├── public
│   └── tailwind.config.ts
└── portfolio/v2
    ├── app
    ├── components
    ├── hooks
    ├── lib
    ├── locales
    ├── public
    └── tailwind.config.ts
```

Each version is self-contained and can be developed independently.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/JeanEudes-dev/portfolios.git
cd portfolios
```

Install dependencies for a specific version (example v2):

```bash
cd portfolio/v2
npm install
```

Start development server:

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 🧪 Development

Common scripts (run inside `v1` or `v2`):

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run start     # Start production server (if applicable)
npm run lint      # Lint code (if configured)
```

Tip: Use separate terminals when switching between versions.

---

## 🔐 Environment Variables

For GitHub Pages deployments using a subpath you may define:

```
NEXT_PUBLIC_BASE_PATH=/portfolios
```

Place this in a `.env.local` inside the chosen version directory if needed. Ensure `next.config.ts` reads and applies it to `basePath` & `assetPrefix` in production.

---

## 📤 Deployment (GitHub Pages)

General approach:

1. Build the selected version:
   ```bash
   npm run build
   ```
2. Export or adapt for static hosting (optional if using a static export strategy).
3. Push the output (commonly via a `gh-pages` branch) using a script such as:
   ```bash
   npm run deploy
   ```
4. Configure repository Pages settings: Source = `gh-pages` (or `docs/` on main).
5. Verify CSS & assets load under `/portfolios` path.

Troubleshooting:

- CSS 404s → Check `assetPrefix` & `basePath`.
- Blank screen → Open devtools network tab for blocked resources.
- Image paths → Ensure they start with `/` (Next.js will apply base path).

---

## ⚡ Performance & SEO

Current techniques:

- Lean component tree & minimal blocking scripts.
- Pre-optimized static assets.
- Declarative metadata via dedicated SEO component (v2).
- Sitemap (`sitemap.xml`) & robots (`robots.txt`).

Ideas to add:

- Lighthouse CI in GitHub Actions.
- `next/image` responsive optimization.
- Prefetch critical project modal data.
- Open Graph + Twitter cards (extend SEO component).

---

## ♿ Accessibility

- Semantic landmarks (header, main, footer).
- Alt text on images.
- Color contrast mindful palette.
- Focusable interactive elements.
- Reduced motion preference could be respected in future.

Planned: Keyboard trap tests for modals, aria-live for dynamic content.

---

## 🌍 Internationalization (i18n)

Implemented in `v2` using:

- `locales/en.json`, `locales/fr.json` for dictionaries.
- `useLanguageDetection` hook for browser language inference.
- `LanguageSwitcher` component for manual toggle.

Potential upgrades: Persist preference in `localStorage`, add more locales, integrate ICU formatting for dates/numbers.

---

## 🗺 Roadmap

- [ ] Add automated Lighthouse CI badge
- [ ] Integrate analytics (e.g., Plausible or Umami)
- [ ] Add `next/image` & blur placeholders
- [ ] Add unit tests (React Testing Library) for key components
- [ ] Add dark mode toggle
- [ ] Add blog section (MDX)
- [ ] Add CI workflow (lint, type-check, build)
- [ ] Deploy v2 as primary, archive v1

---

## 🤝 Contributing

Contributions are welcome. For significant changes:

1. Fork repository
2. Create feature branch: `git checkout -b feat/awesome-thing`
3. Commit: `git commit -m "feat: add awesome thing"`
4. Push: `git push origin feat/awesome-thing`
5. Open Pull Request with context & screenshots

Coding style: Keep components small & typed. Prefer descriptive prop names & semantic HTML.

---

## 📄 License

Licensed under the MIT License – see [`LICENSE`](LICENSE).

---

## 📫 Contact

Portfolio: https://JeanEudes-dev.github.io/portfolios
LinkedIn: (add link)
Email: (add contact email or form)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Inspiration from modern developer portfolio patterns

---

> If this project inspires you, consider starring the repo ⭐
