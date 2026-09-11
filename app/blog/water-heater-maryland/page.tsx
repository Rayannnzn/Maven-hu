// app/blog/water-heater-maryland/page.tsx
// Next.js 13+ App Router — Server Component

import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://mavendmv.com";
const PAGE_PATH = "/blog/water-heater-maryland";

// -----------------------------
// SEO METADATA
// -----------------------------
export const metadata: Metadata = {
  // `absolute` because the title already carries the brand — the root layout's
  // "%s | Maven Home Services" template would otherwise double-brand it.
  title: {
    absolute: "Water Heater Repair & Installation in Maryland | Maven",
  },
  description:
    "Need water heater repair, replacement, or installation in Maryland? Maven Home Services offers licensed, same-day water heater service across MD. Call now.",
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Water Heater Repair & Installation in Maryland | Maven",
    description:
      "Licensed, same-day water heater repair, replacement, and installation across Maryland. Upfront estimates, background-checked technicians.",
    url: `${SITE_URL}${PAGE_PATH}`,
    type: "article",
    siteName: "Maven Home Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Water Heater Repair & Installation in Maryland | Maven",
    description:
      "Licensed, same-day water heater repair, replacement, and installation across Maryland.",
  },
};

// -----------------------------
// FAQ DATA (drives both the UI and the FAQPage schema — single source of truth)
// -----------------------------
const faqs = [
  {
    q: "How much does water heater replacement cost in Maryland?",
    a: "Cost depends on unit type (tank vs. tankless), fuel source, and installation complexity. Maven provides a written estimate after a brief inspection, before any work begins — no cost is finalized over the phone.",
  },
  {
    q: "How long does a water heater installation take?",
    a: "A standard tank replacement is typically completed same-day. Tankless installations can take longer depending on whether new gas or electrical lines are needed.",
  },
  {
    q: "Do I need a permit to replace a water heater in Maryland?",
    a: "In most Maryland jurisdictions, yes. Maven handles permit coordination as part of the replacement process.",
  },
  {
    q: "Is it worth repairing an old water heater instead of replacing it?",
    a: "If the unit is under 8 years old with a single, clearly identified issue, repair is usually worth it. Past 10 years, or with a tank leak, replacement is almost always the better long-term choice.",
  },
  {
    q: "Does Maven offer emergency water heater service?",
    a: "Yes. Maven's emergency line is available for urgent issues like active leaks or complete loss of hot water.",
  },
];

// -----------------------------
// JSON-LD: Article + FAQPage schema
// -----------------------------
function JsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Water Heater Problems in Maryland: What Homeowners Need to Know Before Calling a Plumber",
    description:
      "A homeowner's guide to diagnosing water heater problems, deciding between repair and replacement, and what to expect from a professional water heater service call in Maryland.",
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
export default function WaterHeaterMarylandPage() {
  return (
    <>
      <JsonLd />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Water Heater Problems in Maryland: What Homeowners Need to Know
            Before Calling a Plumber
          </h1>
        </header>

        {/* Quick-answer block — written to be pulled by Google AI Overview / voice assistants */}
        <div className="mb-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
          <p className="text-slate-800">
            <strong>Quick answer:</strong> Most residential water heaters
            last 10–15 years for tank models and up to 20 years for tankless
            units. If your unit is leaking, over 10 years old, or no longer
            keeping up with hot water demand, replacement is usually more
            cost-effective than another repair. For anything under 8 years
            old with a single clear issue — a bad heating element, a faulty
            thermostat, or sediment buildup — repair is typically the right
            call.
          </p>
        </div>

        <p className="mb-6 leading-relaxed text-slate-700">
          If your shower just turned cold halfway through, or your water
          heater is making popping and rumbling noises, you&apos;re not
          alone. Maryland homes deal with a specific mix of hard water,
          older housing stock, and seasonal temperature swings that put
          extra strain on water heaters — which is why water heater repairs
          and replacements are one of the most common plumbing calls Maven
          Home Services gets across{" "}
          <Link
            href="/plumbing"
            className="font-medium text-teal-700 underline underline-offset-2"
          >
            Rockville, Bethesda, Silver Spring, and the rest of Maryland
          </Link>
          .
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          Why Water Heaters Struggle in Maryland Homes
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700">
          Maryland&apos;s water is harder than average in many counties,
          meaning it carries more dissolved calcium and magnesium. Over
          time, that mineral content settles at the bottom of a tank water
          heater as sediment. This layer acts like insulation between the
          burner or heating element and the water itself, forcing the unit
          to work harder to reach the same temperature. The result is
          higher energy bills, longer wait times for hot water, and —
          eventually — a shortened lifespan for the tank itself.
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          Older homes throughout Montgomery County and the surrounding
          areas also tend to have water heaters original to the house or
          installed decades ago, often undersized for the way families
          actually use hot water today between dishwashers, washing
          machines, and multiple bathrooms running at once.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          Common Water Heater Issues We See Across Maryland
        </h2>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>
            <strong>No hot water or lukewarm water</strong> — usually a
            failed heating element (electric units) or a pilot
            light/gas valve issue (gas units).
          </li>
          <li>
            <strong>Rumbling or popping noises</strong> — almost always
            sediment buildup hardening at the bottom of the tank.
          </li>
          <li>
            <strong>Water pooling around the unit</strong> — a leaking tank
            usually means the inner tank has corroded and failed; only
            replacement resolves it.
          </li>
          <li>
            <strong>Rusty or discolored hot water</strong> — often points to
            a corroding anode rod or a rusting tank interior.
          </li>
          <li>
            <strong>Unit is over 10 years old</strong> — higher risk of
            sudden failure and flooding, even without obvious symptoms.
          </li>
        </ul>
        <p className="mb-4 leading-relaxed text-slate-700">
          According to the U.S. Department of Energy, standard storage tank
          water heaters typically last 10 to 15 years, while tankless
          systems can last closer to 20 years with proper maintenance — a
          useful benchmark when deciding between repair and replacement (
          <a
            href="https://www.energy.gov/cmei/femp/purchasing-energy-efficient-residential-water-heaters"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 underline underline-offset-2"
          >
            energy.gov
          </a>
          ).
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          Repair or Replace? A Simple Way to Decide
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700">
          A good rule of thumb plumbers use: multiply the age of the unit
          by the estimated repair cost. If that number is close to or
          higher than the cost of a new unit, replacement is the smarter
          long-term investment. A young water heater with one isolated
          problem is almost always worth repairing. A ten-plus-year-old
          unit with a leak, inconsistent heating, or repeated service calls
          is usually past the point where repair makes financial sense.
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          Homeowners weighing a full replacement often also ask about
          switching from a tank to a tankless system. Tankless units cost
          more upfront but take up less space, last longer, and heat water
          on demand rather than storing it — which cuts down on standby
          energy loss. It&apos;s worth discussing with a licensed plumber
          whether your home&apos;s gas line or electrical panel can support
          the switch before committing.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          What to Expect From a Professional Water Heater Service Call
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700">
          A proper diagnostic visit should include checking the thermostat
          and heating elements (electric) or the gas valve, thermocouple,
          and pilot assembly (gas), inspecting the anode rod, checking for
          tank corrosion or leaks, and testing water pressure and
          temperature output. A technician should walk you through
          what&apos;s actually wrong in plain language, give you an upfront
          written estimate before any work starts, and explain whether
          repair or replacement makes more sense for your specific unit and
          household size.
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          Maven&apos;s plumbing technicians handle both tank and tankless{" "}
          <Link
            href="/plumbing"
            className="font-medium text-teal-700 underline underline-offset-2"
          >
            water heater installation, replacement, and repair
          </Link>{" "}
          throughout Maryland, working on all major brands and both gas and
          electric systems. Every technician is licensed, insured, and
          background-checked, and every job comes with an upfront estimate
          before work begins — the same standard covered across
          Maven&apos;s full range of{" "}
          <Link href="/hvac" className="text-teal-700 underline underline-offset-2">
            HVAC
          </Link>
          ,{" "}
          <Link href="/plumbing" className="text-teal-700 underline underline-offset-2">
            plumbing
          </Link>
          , and{" "}
          <Link href="/electrical" className="text-teal-700 underline underline-offset-2">
            electrical
          </Link>{" "}
          services. Electric water heater work that involves panel or
          circuit changes is coordinated with Maven&apos;s licensed
          electricians to keep everything up to code.
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          Business and property owners dealing with larger-capacity units
          or commercial-grade systems can find more detail on{" "}
          <Link
            href="/commercial"
            className="text-teal-700 underline underline-offset-2"
          >
            Maven&apos;s commercial services page
          </Link>
          .
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-slate-900">
          Preventing Water Heater Problems Before They Start
        </h2>
        <p className="mb-4 leading-relaxed text-slate-700">
          A little routine maintenance goes a long way. Flushing the tank
          annually clears out sediment before it hardens. Checking the
          anode rod every couple of years catches corrosion before it
          reaches the tank itself. Keeping the thermostat around 120°F
          balances safety, efficiency, and mineral buildup — going much
          higher speeds up sediment formation and scalding risk. Homeowners
          further along in their water heater&apos;s lifespan should also
          keep an eye out for the early signs listed above rather than
          waiting for a full failure, which tends to happen without warning
          and often causes water damage.
        </p>
        <p className="mb-4 leading-relaxed text-slate-700">
          For more Maryland-specific HVAC and home maintenance guidance,
          see Maven&apos;s{" "}
          <Link
            href="/blog/hvac-services-in-maryland"
            className="text-teal-700 underline underline-offset-2"
          >
            HVAC services overview
          </Link>{" "}
          and{" "}
          <Link
            href="/blog/maryland-hvac-guide-homeowners"
            className="text-teal-700 underline underline-offset-2"
          >
            Maryland HVAC guide for homeowners
          </Link>
          .
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
            Schedule Water Heater Service in Maryland
          </h2>
          <p className="mb-6 text-teal-50">
            Whether it&apos;s a slow leak, no hot water, or a unit
            that&apos;s simply reached the end of its life, Maven Home
            Services is available across Rockville, Bethesda, Silver
            Spring, Gaithersburg, Frederick, and the surrounding Maryland
            service area.
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
            Schedule a Service Call →
          </Link>
        </div>
      </article>
    </>
  );
}
