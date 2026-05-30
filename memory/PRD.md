# PRD — Faisal Saifi Portfolio

## Original Problem Statement
Single-page portfolio for Faisal Saifi — Graphic Designer & Digital Marketing Executive (5+ yrs, Healthcare Marketing, Brand, Social). Dark futuristic theme (navy/indigo gradient + bold orange #FF4D00 accent), custom cursor, scroll reveals, mobile responsive. All CTAs route to WhatsApp `wa.me/918307399295`. Email `fs561788@gmail.com`. Sections (in order): Navbar, Hero, About, Services, Work, Process, Pricing, Contact, Footer.

## Stack
- Frontend only: React 19, Tailwind, shadcn/ui (Toaster via sonner), lucide-react icons.
- Backend: none used (no MongoDB writes, no APIs).
- Fonts: Bebas Neue (headings), Syne (subheads/nav/eyebrows), DM Sans (body).

## User Personas
1. **Healthcare clinics & hospitals** — looking for OPD growth, doctor branding, exhibition design.
2. **Local SMBs / startups** — need full social rebrand or paid ad management.
3. **Recruiters / agencies** — evaluating Faisal's portfolio for hire / collab.

## Core Static Requirements
- Dark navy → indigo gradient bg with corner radial glows.
- 80px white grid overlay (3–4% opacity), film grain overlay.
- Custom orange cursor (dot + lagging ring, desktop only).
- Smooth scroll for nav, scroll-reveal animations.
- Mobile hamburger with slide-in panel.
- All Hire/Get Started/Submit → opens wa.me + toast "Opening WhatsApp — talk to you soon!".

## What's been implemented (2026-12-11)
- ✅ Navbar (sticky, glass on scroll, 6 links + Hire Me CTA, mobile slide-in)
- ✅ Hero (Bebas Neue 120px+, dual CTAs, 4 stat cards, floating blobs)
- ✅ About (FS profile block, 6 skill tags, bio, 3-item timeline)
- ✅ Services (6 cards w/ icons + hover glow)
- ✅ Work (5 tabs, 9 placeholder cards, lightbox via React portal)
- ✅ Process (4-step horizontal flow)
- ✅ Pricing (3 cards, Growth POPULAR, WhatsApp redirect + toast)
- ✅ Contact (4 contact cards + form, WhatsApp pre-filled redirect)
- ✅ Footer (logo, copyright, 3 social icons)
- ✅ Custom cursor, scroll reveal, grain + grid overlays
- ✅ Responsive (mobile slide-in nav, stacked layouts at sm/lg breakpoints)
- ✅ data-testid on all interactive elements

## Backlog (P1)
- Replace placeholder work cards with real project imagery + case study modals
- Add a downloadable CV PDF (currently Download CV scrolls to contact)
- Real Instagram URL in footer (currently links to instagram.com root)

## Backlog (P2)
- Testimonial / clients section with logos
- Blog / case study sub-pages (currently SPA)
- Performance: lazy-load section gradients, prefers-reduced-motion handling
- SEO meta tags + Open Graph image + structured data (Person schema)
- Light theme toggle
