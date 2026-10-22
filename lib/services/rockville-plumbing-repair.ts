import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville plumbing-repair landing page, built verbatim from the
// approved SEO content package (primary keyword "plumbing repair Rockville MD").
// Copy, headings, and link targets are the client's — edit only against an
// updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/plumbing/plumbing-repair-rockville-md/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`.
export const rockvillePlumbingRepairData: ServicePageData = {
  slug: "plumbing/plumbing-repair-rockville-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Plumbing Repair in Rockville, MD",
  seoTitle: "Plumbing Repair Services in Rockville MD | Maven",
  metaDescription:
    "Leaky pipe, running toilet, or low water pressure in Rockville MD? Maven Home Services provides reliable plumbing repair. Call 240 255 4794 today.",
  heroImage: "/images/plumbing-service-repair.jpg",
  heroTitle: "Plumbing Repair Services in Rockville, MD",
  heroDescription:
    "A small plumbing problem rarely stays small. A dripping faucet wastes water, a slow leak can damage your walls, and weak water pressure can make daily routines frustrating. Maven Home Services provides dependable plumbing repair for homes and small businesses across Rockville, MD. Our plumbers find the real cause, explain your options in plain English, and give you a clear price before the work starts. Call 240 255 4794 or request plumbing repair online. Emergency line available for urgent issues.",
  overviewTitle: "Common Signs You Need Plumbing Repair",
  overview: [
    "Pay attention to dripping sounds, water stains on ceilings or walls, a sudden rise in your water bill, low pressure at one or many fixtures, discolored water, or damp cabinets under sinks. A musty smell can also point to a hidden leak. Acting early protects your floors, drywall, and budget. The EPA WaterSense program explains how much water a household can lose to leaks. See the [EPA Fix a Leak Week resources](https://www.epa.gov/watersense/fix-leak-week) for helpful tips.",
  ],
  offeredServicesTitle: "Plumbing Repair Services We Offer in Rockville",
  offeredServices: [
    { icon: "plumbing", name: "Leaky pipe repair", desc: "We locate hidden and visible leaks, then repair or replace the damaged section." },
    { icon: "faucet", name: "Faucet and fixture repair", desc: "We fix drips, worn cartridges, loose handles, and failing supply lines for sinks, tubs, and showers." },
    { icon: "wc", name: "Toilet repair", desc: "We repair running toilets, weak flushes, leaks at the base, and failed fill valves and flappers." },
    { icon: "speed", name: "Low water pressure diagnosis", desc: "We check valves, regulators, fixtures, and supply lines to restore steady flow." },
    { icon: "construction", name: "Pipe replacement", desc: "We replace corroded, damaged, or aging pipes, including older materials such as polybutylene." },
    { icon: "valve", name: "Shutoff valve and supply line replacement", desc: "New valves make future repairs faster and help you control water in an emergency." },
    { icon: "water_heater", name: "Water heater and drain issues", desc: "We also handle [water heater repair](/plumbing/water-heaters-rockville-md) and [drain cleaning](/plumbing/drain-cleaning-rockville-md)." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Plumbing Repair Process",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Call or book online", desc: "We ask about the problem, its location, and any recent changes." },
    { num: "02", icon: "manage_search", title: "Inspection and diagnosis", desc: "Our plumber finds the source, not just the symptom." },
    { num: "03", icon: "request_quote", title: "Written estimate", desc: "You approve the price before work starts." },
    { num: "04", icon: "build", title: "Repair", desc: "We use quality parts and follow current plumbing code, and we arrange permits where local rules require them." },
    { num: "05", icon: "task_alt", title: "Testing and cleanup", desc: "We test pressure and flow, check for remaining leaks, and clean the work area." },
  ],
  detailSections: [
    {
      id: "repair-or-replace",
      heading: "Repair or Replace? How We Help You Decide",
      description:
        "Not every problem needs a big project. A worn washer or a failed valve is usually a simple repair. If the same pipe leaks again and again, shows heavy corrosion, or is made from a material known for failure, replacement may protect you from repeated bills. Our plumber shows you what we found, explains each option, and lets you decide. We never push work that you do not need.",
      ctaText: "Schedule Plumbing Repair",
    },
    {
      id: "why-rockville-homeowners-choose-maven",
      heading: "Why Rockville Homeowners Choose Maven Home Services",
      benefitsHeading: "",
      benefits: [
        "Licensed and insured plumbing professionals",
        "Upfront pricing with no surprise fees",
        "Technicians trained on pipes, fixtures, water heaters, and drains",
        "Convenient hours: Monday to Friday 7:00 AM to 7:00 PM, Saturday and Sunday 8:00 AM to 5:00 PM",
        "Local team based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "If water is flooding your home right now, see our [emergency plumbing services](/plumbing/emergency-plumbing-rockville-md). To explore everything we do, visit our [plumbing services](/plumbing) page, including [main water line repair](/plumbing/water-main-repair) and [backflow services](/plumbing/backflow).",
      ctaText: "Request Plumbing Repair",
    },
    {
      id: "prevent-plumbing-problems",
      heading: "Simple Ways to Prevent Plumbing Problems",
      benefitsHeading: "",
      benefits: [
        "Know where your main water shutoff valve is and test it once a year.",
        "Check under sinks and around toilets for moisture every few months.",
        "Replace old supply hoses before they fail.",
        "Insulate exposed pipes before cold weather.",
        "Schedule a plumbing inspection if your home has older pipes.",
      ],
      closing:
        "For local water service information, visit [WSSC Water](https://www.wsscwater.com/).",
      ctaText: "Schedule an Inspection",
    },
    {
      id: "areas-we-serve",
      heading: "Areas We Serve Near Rockville",
      description:
        "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood. You can also review city information on the [City of Rockville website](https://www.rockvillemd.gov/).",
      ctaText: "Book Plumbing Repair",
    },
    {
      id: "find-us-on-google",
      heading: "Find Us on Google",
      description:
        "See our location, photos, hours, and customer reviews on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML). Read what Rockville neighbors say about us, then call [240 255 4794](tel:+12402554794) to book your plumbing repair.",
      benefitsHeading: "Maven Home Services",
      benefits: [
        "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [240 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Google Business Profile: [https://share.google/KJudab7Ho272ukUML](https://share.google/KJudab7Ho272ukUML)",
      ],
      ctaText: "Schedule Plumbing Repair",
    },
  ],
  faqs: [
    { q: "How much does plumbing repair cost in Rockville, MD?", a: "Cost depends on the problem, parts, and time required. Our plumber inspects the issue and gives you a clear price before any repair begins." },
    { q: "How do I know if I have a hidden water leak?", a: "Common signs include a rising water bill, damp spots on walls or ceilings, musty smells, and the sound of running water when everything is off. A plumber can locate the leak." },
    { q: "Why is my water pressure low?", a: "Causes include a partly closed valve, mineral buildup in pipes or fixtures, a leak, a failing pressure regulator, or a problem with the main water line. An inspection finds the cause." },
    { q: "Why does my toilet keep running?", a: "A worn flapper, a faulty fill valve, or a bad float setting is the usual cause. These parts are inexpensive to replace and can waste a lot of water if ignored." },
    { q: "Should I repair or replace old pipes?", a: "A single leak in otherwise healthy pipe can be repaired. Repeated leaks, corrosion, or pipe materials known for failure usually mean replacement is the better long term choice." },
    { q: "Can a small leak cause big damage?", a: "Yes. Even a slow drip can rot cabinets, damage floors, and encourage mold over time. Fixing small leaks early costs far less than repairing water damage." },
    { q: "Do you offer emergency plumbing repair?", a: "Yes. For burst pipes and active leaks, call 240 255 4794 and use our emergency line for urgent issues." },
    { q: "What areas near Rockville do you serve?", a: "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood." },
  ],
  ctaTitle: "Need a Plumber in Rockville? Call Maven Home Services",
  ctaDescription:
    "Call 240 255 4794 or schedule plumbing repair online. Fix it right, fix it once.",
};
