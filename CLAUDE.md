# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # dev server on :3000
npm run build   # production build — the only real correctness gate (typecheck + static generation)
npm run start   # serve the production build
npm run lint    # eslint (flat config, next/core-web-vitals + next/typescript)
```

**Never start a second dev server.** Before running `npm run dev`, check whether this project is already serving on port 3000 — if it is, use that instance (open `http://localhost:3000`, rely on hot reload to pick up your edits) instead of launching another one. Next.js silently falls back to 3001/3002 when 3000 is taken, which leaves stale duplicate servers running and means you may be checking a port the user isn't looking at.

```bash
netstat -ano | findstr :3000        # PowerShell/cmd — any LISTENING line means a server is up
```

Only start a server if nothing is listening, and don't kill the user's running one without asking.

There is no test suite, no test runner, and no CI config. `npm run build` is what catches breakage: TypeScript is `strict`, and every dynamic route is statically generated at build time, so a bad data key or a `ServicePageData` field mismatch fails the build rather than showing up at runtime.

## What this is

Marketing site for Maven Home Services (HVAC / plumbing / electrical contractor, Rockville MD). Next.js 16 App Router + React 19 + Tailwind v4 + shadcn/ui.

There is **no database, no CMS, and no server actions**, and exactly one API route. Every page is statically rendered from TypeScript data modules in `lib/`; the only dynamic (`ƒ`) entry in the build output is `/api/leads`.

### Lead capture

`ScheduleForm` (rendered on `/contact`, in `ContactSection`, and at the bottom of every service page) POSTs JSON to `app/api/leads/route.ts`, which emails the lead via [Resend](https://resend.com).

| File | Role |
|---|---|
| `lib/leads.ts` | Shared contract — `serviceOptions`, `LeadInput`, `validateLead()`. Imported by **both** client and server, so it must never read `process.env` or import Node modules. |
| `lib/email/leadEmails.ts` | Server-only HTML/text bodies for the two emails. Inline-styled tables with hardcoded brand hexes — email clients strip `<style>` and have no flex/grid, so Tailwind is unusable here. |
| `app/api/leads/route.ts` | Revalidates, screens for bots, sends. `runtime = "nodejs"` + `dynamic = "force-dynamic"`. |

Two emails go out per submission: the **notification** to `LEAD_TO_EMAIL` (with `replyTo` set to the customer, so replying reaches them directly) and an **auto-reply** to the customer. The notification is the lead — if it fails the request returns 502. The auto-reply is a courtesy: a failure there is logged but still reports success, because the lead was already captured.

Spam screening is a hidden honeypot field plus a `MIN_FILL_MS` timing check. Both return `{ok: true}` without sending — a bot that learns which submissions were rejected can tune around the filter, so rejections are deliberately indistinguishable from successes.

Env vars live in `.env.local` (gitignored); `.env.example` documents them and **is** committed via a `!.env.example` negation in `.gitignore`. Missing env vars fail at request time, not build time — the build succeeds without them, and the route returns a "please call us" message instead.

## Architecture: content lives in `lib/`, layout lives in `components/`

The central idea: **all page copy is data, and one layout component renders it.** Editing site content almost always means editing a file in `lib/`, not a `.tsx` page.

### The `ServicePageData` contract

`lib/services/types.ts` defines `ServicePageData` — hero, overview paragraphs, offered services, benefits, whyChoose, steps, FAQs, CTA, and optional `detailSections`. `components/service/ServicePageLayout.tsx` renders that shape into the full page (hero → overview → detail sections → offerings → benefits → why-choose → process → CTA → FAQ → schedule form). Every service page in the site is a thin wrapper:

```tsx
export default function HvacPage() {
  return <ServicePageLayout data={hvacData} />;
}
```

Adding a section to a service page means changing `ServicePageData` + `ServicePageLayout` once; adding *content* means only touching the data file.

### Two tiers of service pages

| Tier | Route | Data source |
|---|---|---|
| Category | `/hvac`, `/plumbing`, `/electrical`, `/commercial` | `lib/services/<category>.ts` (one exported `ServicePageData`), with long-form anchor sections split into `lib/services/<category>-sections.ts` (`ServiceDetailSection[]`) |
| Subcategory | `/hvac/[subcategory]`, `/plumbing/[subcategory]`, `/electrical/[subcategory]` | `lib/services/subcategories.ts` — one flat `Record<string, ServicePageData>` keyed `"hvac/air-conditioners"`, `"plumbing/water-heaters"`, … |

Subcategory routes call `getSubcategorySlugs(parent)` in `generateStaticParams` and `getSubcategoryData(parent, slug)` in the page; both derive purely from the `"parent/slug"` key prefix, so **adding a subcategory page = adding one entry to the record** — no new route file. `/commercial` deliberately has no `[subcategory]` route.

### Navigation and anchors are separately maintained — keep them in sync

`lib/site.ts` `serviceCategories` drives the header mega-menu, the mobile sheet, and `/services`. Its `anchorLinks` / `groups` entries are built with `serviceAnchor("/plumbing", "water-heaters")` → `/plumbing#water-heaters`. **The fragment must match a `ServiceDetailSection.id` in the corresponding `*-sections.ts` file**; nothing validates this, so a typo silently produces a link that scrolls nowhere. `subcategories` entries in the same object point at real `[subcategory]` routes and must match keys in `subcategories.ts`.

Anchor scrolling is handled in two places: `SiteHeader` intercepts same-page anchor clicks, and `components/service/HashScrollHandler.tsx` (mounted by `ServicePageLayout`) scrolls on load and on `hashchange` for cross-page navigation. Detail sections carry `scroll-mt-48 lg:scroll-mt-44` to clear the sticky header.

### Blog

`lib/blog.ts` is a single `posts: BlogPost[]` array plus `getAllPosts` / `getPostBySlug` / `getRecentPosts` / `getRelatedPosts`. Post bodies are **structured blocks**, not markdown: `{type: "p" | "h2" | "h3" | "ul" | "cta"}`. `components/blog/BlogPostBody.tsx` renders them and additionally parses markdown-style inline links inside `p` and `ul` text — but only internal paths (`[text](/hvac/air-conditioners)`); the regex requires a leading `/`, so external URLs will render as literal text.

### Shared layout primitives

`lib/site.ts` also exports `company`, `address`, `serviceCities`, `certifications`, and the two layout constants used site-wide: `containerClass` (max-width + responsive padding) and `sectionClass` (vertical rhythm). Use them instead of re-writing spacing utilities. `PageHero` / `SectionHeader` (`components/shared/PageHero.tsx`) are the standard heading blocks.

## Conventions

**SEO titles.** The root layout sets `template: "%s | Maven Home Services"`. Pages whose title already contains the brand must opt out with `title: { absolute: "..." }` — that's what `ServicePageData.seoTitle` exists for, and why `app/page.tsx` and `app/hvac/page.tsx` use the `absolute` form. Returning a plain string there double-brands the tag.

**Icons.** Two systems coexist. Data files store **Material Icons Round ligature names** (`"ac_unit"`, `"electric_bolt"`) rendered as `<span className="material-icons-round">{icon}</span>`; the font is loaded via a `<link>` in `app/layout.tsx`. `lucide-react` is used for chrome (header, UI components). Icon strings in `lib/` are always Material names.

**Styling.** Tailwind v4 with CSS-first config — there is no `tailwind.config.*`. Theme tokens live in `@theme inline` in `app/globals.css`: shadcn semantic tokens (`primary` = navy `#0b2d5b`, `muted`, `card`, …) plus brand colors `maven-navy`, `maven-red`, `maven-gold`, `maven-slate`, `maven-light`, `maven-deep`. Custom utilities `.eyebrow`, `.section-heading`, `.section-subheading`, `.animate-marquee` are defined there too. Light mode only in practice — the `dark` variant is declared but no dark palette exists.

**shadcn/ui.** `components/ui/*` is generated (new-york style, slate base, CSS variables — see `components.json`). Prefer `npx shadcn@latest add <component>` over hand-writing new primitives.

**Server-first.** Only five app components are `"use client"` (`SiteHeader`, `UtilityBar`, `HashScrollHandler`, `ScheduleForm`, plus Radix-backed `components/ui/*`). Keep new components server components unless they need state or effects.

**Content voice.** The marketing copy was deliberately audited to avoid unqualified promises: availability claims are hedged ("same-day appointments available, subject to technician availability"), and there are no warranty/guarantee absolutes or invented review counts. Match that hedging when writing or editing copy — it's a compliance choice, not stylistic drift.

## Paths

`@/*` maps to the repo root, so imports read `@/lib/site`, `@/components/ui/button`. Images live in `public/images/` — the tree contains some legacy/duplicate files (e.g. both `hvac-hero.jpg` at root and `hvac/hvac-hero.png`); check which path the data file actually references before replacing an asset.
