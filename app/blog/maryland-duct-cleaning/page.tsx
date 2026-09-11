// app/blog/maryland-duct-cleaning/page.tsx
// Next.js 13+ App Router — Server Component

import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://mavendmv.com";
const PAGE_PATH = "/blog/maryland-duct-cleaning";

// -----------------------------
// SEO METADATA
// -----------------------------
export const metadata: Metadata = {
  // `absolute` because the title already carries the brand — the root layout's
  // "%s | Maven Home Services" template would otherwise double-brand it.
  title: {
    absolute: "Air Duct Cleaning in Maryland: Do You Need It? | Maven",
  },
  description:
    "Wondering if you need air duct cleaning in Maryland? Learn the real signs, EPA guidance, and what Maven's licensed HVAC team checks before recommending service.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Air Duct Cleaning in Maryland: Do You Need It? | Maven",
    description:
      "EPA guidance says duct cleaning is an as-needed service, not routine maintenance. Here's what actually justifies it in a Maryland home — and what doesn't.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "Maven Home Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Air Duct Cleaning in Maryland: Do You Need It? | Maven",
    description:
      "The real signs your ducts need cleaning, what EPA guidance actually says, and what an honest inspection looks like.",
  },
};

// -----------------------------
// FAQ DATA (drives both the UI and the FAQPage schema — single source of truth)
// -----------------------------
const faqs = [
  {
    q: "How often should air ducts be cleaned in Maryland?",
    a: "There's no fixed schedule that applies to every home. The EPA recommends cleaning only when there's a documented reason — visible mold, pest infestation, or heavy debris blowing into rooms — rather than on a routine interval.",
  },
  {
    q: "Does duct cleaning actually improve air quality?",
    a: "It can help in homes with a genuine contamination issue like mold or pest infestation. For homes without a documented problem, the EPA notes there's no conclusive evidence that duct cleaning meaningfully changes indoor dust levels or air quality.",
  },
  {
    q: "How much does duct cleaning cost in Maryland?",
    a: "Cost varies by home size, system complexity, and number of vents and returns. Maven provides a written estimate after an inspection — never a flat quote over the phone without seeing the system first.",
  },
  {
    q: "Can dirty ducts raise my energy bill?",
    a: "Airflow restriction from heavily clogged ducts can affect efficiency, but in most homes, filter condition, duct sealing, and overall system maintenance have a bigger impact on energy costs than duct cleanliness alone.",
  },
  {
    q: "Is duct cleaning worth it before selling or buying a home?",
    a: "It can be a reasonable step if an inspection reveals mold, pest activity, or heavy debris — but it's worth having an HVAC technician confirm an actual issue rather than cleaning as a routine pre-sale checklist item.",
  },
];

// -----------------------------
// JSON-LD: Article + FAQPage schema
// -----------------------------
function JsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Air Duct Cleaning in Maryland: Do You Actually Need It?",
    description:
      "A homeowner's guide to when air duct cleaning is actually warranted in Maryland, what EPA guidance says about routine cleaning, and what a legitimate inspection looks like before the service is recommended.",
    author: {
      "@type": "Organization",
      name: "Maven Home Services",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Maven Home Services",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${PAGE_PATH}`,
    },
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

// -----------------------------
// PAGE
// -----------------------------
export default function MarylandDuctCleaningPage() {
  return (
    <>
      <JsonLd />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Air Duct Cleaning in Maryland: Do You Actually Need It?
          </h1>
        </header>

        {/* Quick-answer block — written to be pulled by Google AI Overview / voice assistants */}
        <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <p className="text-slate-800">
            <strong>Quick answer:</strong> The EPA does not recommend duct
            cleaning on a routine schedule. It&apos;s worth doing only when
            there&apos;s a real, visible reason — substantial mold growth
            inside the ducts, a rodent or insect infestation, or heavy dust
            and debris that&apos;s actually blowing into your rooms from the
            vents. If none of those apply, cleaning your ducts probably
            won&apos;t change your air quality or your energy bill in any
            noticeable way.
          </p>
        </div>

        <p className="mb-6 leading-relaxed text-slate-700">
          Air duct cleaning is one of the most heavily marketed home services
          around — and also one of the most misunderstood. If you&apos;ve
          searched &quot;duct cleaning Maryland&quot; because of a postcard
          offer, a musty smell near your vents, or dust that keeps coming back
          no matter how often you clean, this guide walks through what actually
          justifies duct cleaning, what doesn&apos;t, and what a legitimate
          inspection looks like before{" "}
          <Link
            href="/hvac"
            className="font-medium text-teal-700 underline underline-offset-2"
          >
            Maven Home Services
          </Link>{" "}
          ever recommends the service.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          Why This Keyword Gets So Much Bad Advice
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700">
          Search &quot;duct cleaning&quot; and you&apos;ll find companies
          claiming it cuts allergy symptoms, slashes energy bills, and should
          happen every year like an oil change. Most of that isn&apos;t backed
          by evidence. The U.S. Environmental Protection Agency has published
          guidance specifically because the industry has a history of
          overselling the service, and its position is worth reading directly:
          duct cleaning should be done on an as-needed basis, not a routine
          one, and health claims tied to duct cleaning are largely
          unsubstantiated (
          <a
            href="https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            EPA
          </a>
          ).
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          That doesn&apos;t mean duct cleaning is a scam — it means it&apos;s a
          condition-based service. Some Maryland homes genuinely need it. Most
          don&apos;t, at least not on the schedule a sales call will suggest.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          Signs Your Maryland Home Might Actually Need Duct Cleaning
        </h2>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>
            <strong>Visible mold inside the ductwork</strong> — not a musty
            smell alone, but actual visible mold on hard duct surfaces or on
            other HVAC components. This is the clearest trigger the EPA points
            to, and it should be confirmed visually, not assumed from odor.
          </li>
          <li>
            <strong>Rodents or insects in the system</strong> — droppings,
            nesting material, or dead pests inside ducts are a legitimate
            health and hygiene issue that cleaning addresses directly.
          </li>
          <li>
            <strong>Dust or debris visibly blowing out of the vents</strong> —
            some dust around a return grille is completely normal, since that
            grille pulls air through constantly. The real signal is debris
            actively coming out of supply vents into the room, not just a dusty
            grate.
          </li>
          <li>
            <strong>Recent renovation work</strong> — drywall dust, insulation
            debris, or construction dust from a remodel can genuinely load up a
            duct system in a way that didn&apos;t build up naturally over
            years.
          </li>
          <li>
            <strong>A system that&apos;s never been inspected</strong> — if
            ductwork is decades old, was exposed during a past pest issue, or
            the home was purchased without HVAC history, an inspection — not an
            automatic cleaning — is the right first step.
          </li>
        </ul>
        <p className="mb-4 leading-relaxed text-slate-700">
          If none of these apply to your home, and someone is recommending duct
          cleaning as routine maintenance &quot;every year or two,&quot;
          that&apos;s a sales pitch, not a documented need.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          What a Legitimate Inspection and Service Call Looks Like
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700">
          A trustworthy technician starts with a visual inspection, not a sales
          pitch. That means opening supply and return vents, using a camera
          where ducts aren&apos;t directly visible, and showing you — not just
          describing — any mold, pest activity, or debris that would justify
          cleaning. If a provider can&apos;t show you evidence, there
          isn&apos;t a documented reason to move forward.
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          If cleaning is genuinely warranted, the process should cover the full
          system: supply and return ducts, registers and grilles, the air
          handler, and the coil — cleaning only part of the system
          doesn&apos;t solve a contamination problem. Equally important is what
          happens afterward: a poorly executed cleaning with weak vacuum
          extraction can actually stir up more dust and debris than it removes,
          so the quality of the equipment and the technician&apos;s process
          matters as much as whether cleaning happens at all.
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          Maven&apos;s{" "}
          <Link
            href="/hvac"
            className="font-medium text-teal-700 underline underline-offset-2"
          >
            HVAC technicians
          </Link>{" "}
          inspect before recommending, and explain exactly what they find —
          photos included — so you&apos;re deciding based on the actual
          condition of your system, not a generic sales script. This is the
          same upfront-estimate approach used across Maven&apos;s{" "}
          <Link
            href="/plumbing"
            className="text-teal-700 underline underline-offset-2"
          >
            plumbing
          </Link>{" "}
          and{" "}
          <Link
            href="/electrical"
            className="text-teal-700 underline underline-offset-2"
          >
            electrical
          </Link>{" "}
          work: diagnose first, explain clearly, then quote before any work
          begins.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          What Duct Cleaning Won&apos;t Fix
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700">
          It&apos;s worth being direct about this: if the real issue is
          allergies, general dustiness, or high energy bills, duct cleaning is
          rarely the actual fix. Filter quality and replacement schedule matter
          far more for air quality day to day. Sealing and insulating ducts,
          especially in unconditioned spaces like attics and crawlspaces common
          in older Maryland homes, has a much bigger effect on both comfort and
          energy costs than cleaning does. And routine HVAC maintenance — coil
          cleaning, refrigerant checks, filter changes — addresses efficiency
          issues that duct cleaning doesn&apos;t touch.
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          If you&apos;re chasing lower bills or better air quality, a full HVAC
          system check is usually the more useful starting point. Maven&apos;s{" "}
          <Link
            href="/blog/maryland-hvac-guide-homeowners"
            className="text-teal-700 underline underline-offset-2"
          >
            Maryland HVAC guide for homeowners
          </Link>{" "}
          and{" "}
          <Link
            href="/blog/hvac-services-in-maryland"
            className="text-teal-700 underline underline-offset-2"
          >
            HVAC services overview
          </Link>{" "}
          go into seasonal maintenance that actually moves the needle on both.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          Commercial Properties and Duct Cleaning
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700">
          For commercial buildings, the calculus shifts a bit — higher
          occupancy, larger systems, and different code and insurance
          requirements can make scheduled inspections more justifiable than
          they are for a single-family home. Property managers and business
          owners can find more on Maven&apos;s{" "}
          <Link
            href="/commercial"
            className="text-teal-700 underline underline-offset-2"
          >
            commercial HVAC services
          </Link>
          , including rooftop unit and system maintenance programs suited to
          multi-tenant buildings.
        </p>

        {/* FAQ section — rendered from the same data used in the JSON-LD above */}
        <h2 className="mb-4 mt-12 text-2xl font-semibold text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="mb-10 divide-y divide-slate-200 rounded-lg border border-slate-200">
          {faqs.map((item) => (
            <div key={item.q} className="p-5">
              <h3 className="mb-2 font-semibold text-slate-900">
                {item.q}
              </h3>
              <p className="text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="rounded-xl bg-teal-800 p-8 text-white">
          <h2 className="mb-2 text-2xl font-semibold">
            Not Sure If You Need It? Get an Honest Inspection
          </h2>
          <p className="mb-6 text-teal-50">
            Maven Home Services inspects before recommending — no pressure, no
            routine upsell. If your Maryland home shows real signs of a duct
            issue, we&apos;ll show you exactly what we find and walk you
            through the options.
          </p>
          <div className="mb-6 grid gap-2 text-sm text-teal-50 sm:grid-cols-2">
            <p>
              <strong>Call:</strong>{" "}
              <a href="tel:+12402554794" className="underline">
                240-255-4794
              </a>{" "}
              (emergency line available)
            </p>
            <p>
              <strong>Email:</strong> service@mavenhomeservices.com
            </p>
            <p>
              <strong>Office:</strong> Suite 470, 9200 Corporate Blvd,
              Rockville, MD 20850
            </p>
            <p>
              <strong>Hours:</strong> Mon–Fri 7AM–7PM, Sat–Sun 8AM–5PM
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-teal-800 hover:bg-teal-50"
          >
            Schedule an HVAC Inspection →
          </Link>
        </div>
      </article>
    </>
  );
}
