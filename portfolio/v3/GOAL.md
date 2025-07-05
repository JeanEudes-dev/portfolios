Design a pixel-perfect, full-featured software engineer portfolio using React + TailwindCSS + TypeScript.

This portfolio must be visually stunning, highly performant, professionally branded, and security-conscious, with smooth UX that appeals to both technical HRs and non-technical recruiters. It should convey excellence, reliability, and readiness for production-level work.

🔍 General Requirements:
Use React (functional components, hooks).

Use TailwindCSS for styling.

Use TypeScript with strict typing.

Code must be clean, modular, and production-grade.

Full dark/light mode support.

Use accessible components (a11y).

Fully responsive: mobile-first, optimized for all screen sizes.

No external CMS — content driven by local .ts files or Markdown for blog.

🎯 Purpose:
To help a talented software engineer stand out instantly in a crowded market. This is not a generic portfolio — it's designed to impress at first glance and hold attention through polish, clarity, and subtle innovation.

🏠 Pages:
1. Home (Landing)
Hero section with:

Full name: Jean-Eudes Assogba

Brief sentence: “I design and build modern web applications that are fast, secure, and beautiful — from idea to deployment.”

CTA buttons: View Projects, Contact Me

Animated subtle background (noise, waves, or gradient)

Tech stack preview:

Small interactive icons for: React, Next.js, Django, Python, TypeScript, TailwindCSS, PostgreSQL, LangChain, GPT-4, AWS

Social links (GitHub, LinkedIn, Email) with hover animations

2. Projects
Dynamic grid layout

Each card:

Project name, description, tech used, GitHub link, live demo

Tags (e.g., #AI, #FullStack, #OpenSource)

Expandable details (modal or drawer)

Filters (stack, type, year)

Featured projects at top with more attention-grabbing layout

SEO optimized with structured data

3. About Me
Profile image (styled, minimal)

Detailed but focused bio (timeline format)

Key highlights:

Years of experience

Main expertise areas

Core values: clean code, speed, UX, security

Carousel of certificates (IBM Full Stack, etc.)

Tech stack (visual + text breakdown)

Personal values section (e.g., resilience, curiosity)

4. Blog (Optional but impactful)
Markdown-powered posts

Minimalist layout (like Guillermo Rauch)

Table-style list: date, title, optional views

SEO and OG tags per post

Tags and reading time

5. Contact
Clean, minimal form:

Name, email, message

Validations + success message

Optionally: copy email button or mailto

Optionally embed Calendly link

🌈 Theme & Aesthetics
Font: Inter or Geist, sharp and modern

Animations:

Subtle fade-in, scale on hover, scroll-based transitions

No annoying parallax or gimmicks

Color theme:

Dark mode by default, light mode toggle

Accent color: subtle blue hue

Neutral base: black/white/gray scales

Shadow & spacing:

Use shadow-2xl, rounded-2xl, and generous padding

Consistency: single theme file in Tailwind config

⚙️ Functionality
Optimized for Lighthouse scores 95+ on all axes

Fully SEO-optimized (title, meta tags, OG, Twitter cards)

Lazy-loaded images with blur-up

Minimal JS bundle size (tree-shaken, code-split)

Type-safe forms and props

Route-based code splitting with React.lazy/Suspense

Preload critical fonts, use next/font if Next.js

🔐 Security & Privacy
Sanitize all inputs

Use helmet and CSP headers if SSR

Avoid any unnecessary trackers or analytics

GDPR-compliant (cookie-free preferred)

Email obfuscation to avoid scraping

🚀 Deployment & Extras
Deploy statically to Vercel

Clean /public assets structure

Use favicon, touch icons, manifest.json

Optional: sitemap.xml, robots.txt

💡 Bonus Features (Optional but Impressive)
/uses page for dev setup

/now page for current status

/cv page or downloadable PDF

Language switcher (EN/FR)

Motion using framer-motion (delicate, not overdone)

