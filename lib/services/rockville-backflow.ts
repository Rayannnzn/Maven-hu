import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville backflow landing page, built verbatim from the approved
// SEO content package (primary keyword "backflow services Rockville MD"). Copy,
// headings, and link targets are the client's — edit only against an updated
// package. The URL is fixed by the package: other pages already link to it.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/plumbing/backflow/, and adding the slug to
// subcategoryData would make generateStaticParams emit a path that already exists
// as a static page, which aborts `next build`.
export const rockvilleBackflowData: ServicePageData = {
  slug: "plumbing/backflow",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Backflow Services in Rockville, MD",
  seoTitle: "Backflow Services in Rockville MD: Testing, Repair | Maven",
  metaDescription:
    "Need backflow testing, repair, or installation in Rockville MD? Maven Home Services protects your drinking water. Call 240 255 4794 to schedule.",
  heroImage: "/images/plumbing-service-repair.jpg",
  heroTitle: "Backflow Services in Rockville, MD",
  heroDescription:
    "The water you drink should only flow one way: from the public supply into your building. A backflow preventer makes sure it stays that way. When the device fails, dirty water from irrigation, equipment, or plumbing connections can flow backward and contaminate your clean water. Maven Home Services provides backflow testing, repair, and installation for homes and businesses across Rockville, MD. We keep your device working, your paperwork current, and your water safe. Need backflow testing or repair? Call 240 255 4794 or request service online. Emergency line available for urgent issues.",
  overviewTitle: "What Is Backflow and Why Does It Matter?",
  overview: [
    "Backflow happens when water pressure drops or reverses and pulls water backward through your pipes. A main break, heavy fire hydrant use, or a pressure change can trigger it. If your plumbing is connected to a hose, boiler, irrigation system, or other source of contamination, that water can enter the clean supply. Backflow preventers are the safeguard, and like any mechanical device they wear out and need regular testing.",
  ],
  offeredServicesTitle: "Backflow Services We Offer in Rockville",
  offeredServices: [
    { icon: "fact_check", name: "Backflow testing", desc: "We test your device, record the results, and give you the documentation that local rules may require." },
    { icon: "build", name: "Backflow repair", desc: "We replace worn seals, springs, check valves, and relief valves to restore proper protection." },
    { icon: "construction", name: "Backflow preventer installation", desc: "We install new devices that match your property, water use, and local requirements." },
    { icon: "handyman", name: "Backflow device replacement", desc: "If your device is damaged, outdated, or failing repeatedly, we replace it." },
    { icon: "water_drop", name: "Irrigation and sprinkler backflow service", desc: "We test and repair devices that protect your water from lawn irrigation systems." },
    { icon: "business", name: "Commercial backflow service", desc: "We support restaurants, offices, and other businesses with testing and repair programs." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Backflow Service Process",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Call or book online", desc: "We ask about the device type, the location, and any notice you received." },
    { num: "02", icon: "manage_search", title: "Testing and inspection", desc: "Our technician checks the device and records pressure and valve readings." },
    { num: "03", icon: "fact_check", title: "Clear explanation", desc: "You see the results and learn what passed, what failed, and what it means." },
    { num: "04", icon: "build", title: "Repair or replacement", desc: "We fix or replace the device and retest it to confirm it works." },
    { num: "05", icon: "receipt_long", title: "Documentation", desc: "We provide the test report you need for your records or for the utility." },
  ],
  detailSections: [
    {
      id: "signs-backflow-device-needs-attention",
      heading: "Signs Your Backflow Device Needs Attention",
      description:
        "Watch for water dripping or spraying from the device, a visible crack or damage, frozen parts in winter, unusual drops in pressure, or a failed annual test. If you are not sure whether your property has a device, our plumber can inspect your system and tell you what you have. Never ignore a leaking device, because it may no longer protect your water.",
      ctaText: "Schedule Backflow Service",
    },
    {
      id: "backflow-testing-requirements",
      heading: "Backflow Testing and Local Requirements",
      description:
        "Many water utilities require certain devices to be tested every year by a qualified tester. Requirements vary by property type and device. You can learn more about water service rules from [WSSC Water](https://www.wsscwater.com/) and the [EPA drinking water resources](https://www.epa.gov/ground-water-and-drinking-water). If you received a notice to test your device, call us and we will help you meet the deadline.",
      ctaText: "Schedule Backflow Testing",
    },
    {
      id: "why-rockville-property-owners-choose-maven",
      heading: "Why Rockville Property Owners Choose Maven Home Services",
      benefitsHeading: "",
      benefits: [
        "Licensed and insured plumbing professionals",
        "Upfront pricing with no surprise fees",
        "Technicians trained on backflow devices and complete plumbing systems",
        "Convenient hours: Monday to Friday 7:00 AM to 7:00 PM, Saturday and Sunday 8:00 AM to 5:00 PM",
        "Local team based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Backflow protection often connects to other plumbing work. Learn about our [main water line repair](/plumbing/water-main-repair), [plumbing repair](/plumbing/plumbing-repair-rockville-md), and [emergency plumbing services](/plumbing/emergency-plumbing-rockville-md). You can also browse all of our [plumbing services](/plumbing).",
      ctaText: "Request Backflow Service",
    },
    {
      id: "protect-your-water-supply",
      heading: "Tips to Protect Your Water Supply",
      benefitsHeading: "",
      benefits: [
        "Know where your backflow device is located and keep the area clear.",
        "Schedule testing before your annual deadline, not after.",
        "Insulate or protect outdoor devices before freezing weather.",
        "Never connect a hose to a chemical sprayer or pool without a vacuum breaker.",
        "Keep test reports in a safe place for inspections.",
      ],
      ctaText: "Schedule Backflow Testing",
    },
    {
      id: "areas-we-serve",
      heading: "Areas We Serve Near Rockville",
      description:
        "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood. You can also review city information on the [City of Rockville website](https://www.rockvillemd.gov/).",
      ctaText: "Book Backflow Service",
    },
    {
      id: "find-us-on-google",
      heading: "Find Us on Google",
      description:
        "See our location, photos, hours, and customer reviews on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML). Read what Rockville neighbors say about us, then call [240 255 4794](tel:+12402554794) to schedule backflow service.",
      benefitsHeading: "Maven Home Services",
      benefits: [
        "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [240 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Google Business Profile: [https://share.google/KJudab7Ho272ukUML](https://share.google/KJudab7Ho272ukUML)",
      ],
      ctaText: "Schedule Backflow Service",
    },
  ],
  faqs: [
    { q: "What is a backflow preventer?", a: "A backflow preventer is a device that stops water from flowing backward into your clean drinking water supply. It protects your home, your neighbors, and the public water system." },
    { q: "How much does backflow testing cost in Rockville, MD?", a: "Cost depends on the device type, size, and how many devices you have. We give you a clear price before testing begins and explain any repairs that are needed." },
    { q: "How often does a backflow device need testing?", a: "Many utilities and local rules require testing at least once a year for certain devices. Check your requirements with WSSC Water or ask our team to confirm for your property." },
    { q: "What happens if my backflow device fails the test?", a: "We explain why it failed and repair it if possible. If the device is worn out, we recommend replacement, then retest and prepare the paperwork you need." },
    { q: "Which properties need a backflow preventer?", a: "Commercial buildings, restaurants, fire sprinkler systems, irrigation systems, and many homes with lawn sprinklers or pools need them. Local rules decide which devices are required." },
    { q: "What causes backflow?", a: "Backflow happens when pressure changes force dirty water backward into clean pipes. Causes include a main break, heavy water use nearby, or a connection to a hose or irrigation system." },
    { q: "Do you offer emergency backflow repair?", a: "Yes. If a device is leaking or a water supply may be contaminated, call 240 255 4794 and use our emergency line for urgent issues." },
    { q: "What areas near Rockville do you serve?", a: "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood." },
  ],
  ctaTitle: "Schedule Your Backflow Service Today",
  ctaDescription:
    "Call 240 255 4794 or schedule backflow testing online. Protect your water, protect your people.",
};
