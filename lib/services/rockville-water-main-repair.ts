import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville main-water-line landing page, built verbatim from the
// approved SEO content package (primary keyword "main water line repair
// Rockville MD"). Copy, headings, and link targets are the client's — edit only
// against an updated package. The URL is fixed by the package: other pages link
// to it and it appears in Search Console data.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/plumbing/water-main-repair/, and adding the slug
// to subcategoryData would make generateStaticParams emit a path that already
// exists as a static page, which aborts `next build`.
//
// /plumbing/water-heaters-rockville-md is linked as the package specifies; that
// page does not exist yet.
export const rockvilleWaterMainRepairData: ServicePageData = {
  slug: "plumbing/water-main-repair",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Main Water Line Repair in Rockville, MD",
  seoTitle: "Water Main and Water Line Repair in Rockville MD | Maven",
  metaDescription:
    "No water or low pressure in Rockville MD? Maven Home Services repairs and replaces main water lines. Call 240 255 4794 for a clear estimate.",
  heroImage: "/images/plumbing/plumbingcom.jpg",
  heroTitle: "Water Main and Water Line Repair in Rockville, MD",
  heroDescription:
    "Your main water line is the single pipe that brings clean water from the street into your home. When it leaks or breaks, you may see low pressure, no water at all, a surprise water bill, or a soggy spot in your yard. Maven Home Services repairs and replaces main water lines for homes and small businesses across Rockville, MD. We find the real cause, explain your options in plain English, and give you a clear price before work begins. Lost water or see a leak? Call 240 255 4794 now. Emergency line available for urgent issues. You can also request service online.",
  overviewTitle: "Signs of a Main Water Line Problem",
  overview: [
    "Look for a sudden jump in your water bill, weak pressure at every fixture, discolored or muddy water, the sound of running water when nothing is on, wet or sunken areas in the yard, cracks in the foundation, or a water meter that keeps spinning when all fixtures are off. A leak that runs underground can waste thousands of gallons and wash out the soil around your home. Early repair limits damage and cost.",
  ],
  offeredServicesTitle: "Main Water Line Services We Offer in Rockville",
  offeredServices: [
    { icon: "search", name: "Main water line leak detection", desc: "We locate the source of the leak so we repair only what is needed." },
    { icon: "plumbing", name: "Main water line repair", desc: "We repair cracked, corroded, or damaged sections and restore normal pressure." },
    { icon: "construction", name: "Full water line replacement", desc: "When the pipe is old or failing in many places, we replace it with durable, code approved material." },
    { icon: "valve", name: "Main shutoff valve replacement", desc: "A reliable shutoff valve lets you stop water fast in an emergency." },
    { icon: "speed", name: "Pressure regulator service", desc: "We check and replace regulators that cause high or unstable pressure." },
    { icon: "handyman", name: "Connection and fitting repair", desc: "We repair failed joints and fittings where the line enters your home." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Main Water Line Repair Process",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Call or book online", desc: "We ask about pressure, leaks, and where the line enters your home." },
    { num: "02", icon: "manage_search", title: "Inspection and leak location", desc: "We confirm the problem and mark the likely repair area." },
    { num: "03", icon: "assignment_turned_in", title: "Utility marking and permits", desc: "We plan around underground utilities and arrange permits where local rules require them." },
    { num: "04", icon: "build", title: "Repair or replacement", desc: "We work efficiently to limit digging and restore your water as quickly as safely possible." },
    { num: "05", icon: "task_alt", title: "Testing and cleanup", desc: "We test pressure and flow, check for remaining leaks, and clean up the work area." },
  ],
  detailSections: [
    {
      id: "who-is-responsible",
      heading: "Who Is Responsible: You or the Utility?",
      description:
        "In many areas, the utility maintains the main in the street and the equipment up to the meter, while the property owner maintains the line from there to the house. Rules can vary by property, so confirm with [WSSC Water](https://www.wsscwater.com/) if you are unsure where your responsibility begins. If the break is on your side, call us. If it is in the street, notify the utility. Our plumber can help you tell the difference.",
      ctaText: "Schedule Water Line Repair",
    },
    {
      id: "repair-or-replace",
      heading: "Repair or Replace? How We Help You Decide",
      description:
        "A single leak in an otherwise healthy line can often be repaired. If the pipe is old, corroded, has repeated leaks, or runs under tree roots that keep causing damage, replacement may be the smarter long term choice. Our plumber shows you what we found, explains each option and its cost, and lets you decide. We never push work you do not need.",
      ctaText: "Get a Clear Estimate",
    },
    {
      id: "why-rockville-homeowners-choose-maven",
      heading: "Why Rockville Homeowners Choose Maven Home Services",
      benefitsHeading: "",
      benefits: [
        "Licensed and insured plumbing professionals",
        "Upfront pricing with no surprise fees",
        "Technicians trained on water service lines, valves, and full plumbing systems",
        "Convenient hours: Monday to Friday 7:00 AM to 7:00 PM, Saturday and Sunday 8:00 AM to 5:00 PM",
        "Local team based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "If water is flooding your property, see our [emergency plumbing services](/plumbing/emergency-plumbing-rockville-md). For smaller leaks, visit our [plumbing repair](/plumbing/plumbing-repair-rockville-md) page. You may also need [water heater service](/plumbing/water-heaters-rockville-md), [drain cleaning](/plumbing/drain-cleaning-rockville-md), or [backflow services](/plumbing/backflow). Browse all [plumbing services](/plumbing).",
      ctaText: "Request Water Line Service",
    },
    {
      id: "protect-your-water-line",
      heading: "Protect Your Water Line",
      benefitsHeading: "",
      benefits: [
        "Know where your main shutoff valve is and test it once a year.",
        "Call 811 before any digging, planting, or fence work. See [Call 811](https://www.call811.com/).",
        "Watch your water bill and meter for unexplained changes.",
        "Keep large tree roots away from the water line path.",
        "Insulate exposed pipes and the entry point before freezing weather.",
      ],
      ctaText: "Schedule an Inspection",
    },
    {
      id: "areas-we-serve",
      heading: "Areas We Serve Near Rockville",
      description:
        "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood. You can also review city information on the [City of Rockville website](https://www.rockvillemd.gov/).",
      ctaText: "Book Water Line Repair",
    },
    {
      id: "find-us-on-google",
      heading: "Find Us on Google",
      description:
        "See our location, photos, hours, and customer reviews on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML). Read what Rockville neighbors say about us, then call [240 255 4794](tel:+12402554794) to book main water line repair.",
      benefitsHeading: "Maven Home Services",
      benefits: [
        "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [240 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Google Business Profile: [https://share.google/KJudab7Ho272ukUML](https://share.google/KJudab7Ho272ukUML)",
      ],
      ctaText: "Schedule Water Line Repair",
    },
  ],
  faqs: [
    { q: "How much does main water line repair cost in Rockville, MD?", a: "Cost depends on the pipe length, depth, material, and access. Our plumber inspects the line and gives you a clear written estimate before any digging or repair begins." },
    { q: "How do I know if my main water line is leaking?", a: "Signs include a high water bill, low pressure, wet or sunken spots in the yard, the sound of running water when everything is off, and a meter that keeps moving." },
    { q: "Who is responsible for a broken water line, me or the utility?", a: "Usually the utility maintains the main in the street, and the property owner maintains the line from the meter to the home. Check with WSSC Water, then call us." },
    { q: "How long does a main water line repair take?", a: "A spot repair can take a few hours. A full replacement often takes one day or more, depending on length, depth, soil, and any permits required." },
    { q: "Can I use water while the line is being repaired?", a: "Water to the home is shut off during the repair. We work quickly and tell you in advance how long you should plan to be without water." },
    { q: "What should I do if I suspect a main line break?", a: "Shut off the main water valve, avoid digging near the area, and call 240 255 4794. If water is flooding the street, also notify your water utility." },
    { q: "Do I need to call 811 before digging?", a: "Yes. Always call 811 before any digging so underground utilities are marked. Our team plans excavation with safety and utility locations in mind." },
    { q: "What areas near Rockville do you serve?", a: "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood." },
  ],
  ctaTitle: "Water Line Problem? Call Maven Home Services",
  ctaDescription:
    "Call 240 255 4794 or schedule water line repair online. Restore your water, protect your property.",
};
