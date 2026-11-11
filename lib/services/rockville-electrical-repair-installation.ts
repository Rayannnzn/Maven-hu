import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville electrical repair & installation landing page, built
// verbatim from the approved SEO content package
// (Maven-DMV-Electrical-Repair-and-Installation-Page.docx). Copy, headings, and
// link targets are the client's — edit only against an updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/repair-installation-rockville/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`. Note the
// existing "electrical/repair-installation" subcategory is a different page.
export const rockvilleElectricalRepairInstallationData: ServicePageData = {
  slug: "electrical/repair-installation-rockville",
  title: "Electrical Repair and Installation in Rockville, MD",
  seoTitle: "Electrical Repair and Installation in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed electricians for electrical repair and installation in Rockville, MD. Outlets, lighting, fans, panels, and 24/7 emergency help. Call (240) 255 4794.",
  heroImage: "/images/electrical-repair-installation.jpg",
  heroTitle: "Electrical Repair and Installation in Rockville, MD",
  heroDescription:
    "When an outlet stops working, a breaker keeps tripping, or you need a new fixture or fan installed, you want a licensed electrician who does the job safely and explains it clearly. Maven DMV provides electrical repair and installation for homes and businesses in Rockville, MD and across Montgomery County, Maryland. This page covers what we repair, what we install, and how we work. For the full list of what we offer, visit our [main electrical services page](/electrical).",
  overviewTitle: "What Is Included in Electrical Repair and Installation?",
  overview: [
    "Electrical repair means finding and fixing a fault in existing wiring, devices, or equipment, such as a dead outlet, a failed switch, or a breaker that will not stay on. Electrical installation means adding new wiring, devices, or fixtures, such as a ceiling fan, new lighting, or an upgraded panel. Both types of work must meet electrical code, and both should end with testing so you know the circuit is safe to use.",
  ],
  offeredServicesTitle: "Electrical Installation Services",
  offeredServicesSubtitle:
    "New installations should match your electrical load, your space, and your safety needs. Our team installs:",
  offeredServices: [
    { icon: "mode_fan", name: "Ceiling fans and ceiling lights", desc: "Ceiling fans and ceiling lights, with the box and wiring checked first." },
    { icon: "lightbulb", name: "Indoor and outdoor lighting", desc: "Indoor and outdoor lighting for homes and commercial spaces." },
    { icon: "outlet", name: "Outlets, switches, and dimmers", desc: "Outlets, switches, and dimmers installed to code." },
    { icon: "electrical_services", name: "GFCI outlets", desc: "GFCI outlets for kitchens, bathrooms, garages, and outdoor areas." },
    { icon: "thermostat", name: "Thermostat wiring", desc: "Thermostat wiring and related control connections." },
    { icon: "restaurant", name: "Commercial equipment power", desc: "Power connections for commercial and kitchen equipment." },
    { icon: "power", name: "Electrical panel upgrades", desc: "Electrical panel upgrades, when an inspection shows your panel cannot support your needs." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "How Our Repair Process Works",
  steps: [
    { num: "01", icon: "hearing", title: "Listen and ask", desc: "We start with what you saw, heard, or smelled, and when the problem began." },
    { num: "02", icon: "manage_search", title: "Inspect and test", desc: "We check the device, the circuit, and the panel, and we measure instead of assuming." },
    { num: "03", icon: "record_voice_over", title: "Explain the findings", desc: "You hear what we found, why it happened, and what your options are, in plain language." },
    { num: "04", icon: "task_alt", title: "Approve before work starts", desc: "We begin only after you agree to the plan and the price." },
    { num: "05", icon: "build", title: "Repair and test", desc: "We fix the problem, then test the circuit and the device under normal use." },
    { num: "06", icon: "description", title: "Document the work", desc: "We record what we found and what we changed, so you have a clear service history." },
  ],
  detailSections: [
    {
      id: "electrical-repair-services",
      heading: "Electrical Repair Services",
      description:
        "Most electrical problems start small. A warm outlet or a light that flickers can point to a loose connection, a worn device, or an overloaded circuit. We diagnose and repair:",
      benefitsHeading: "",
      benefits: [
        "Outlets and switches that are dead, loose, cracked, or hot to the touch",
        "Circuit breakers that trip or will not reset",
        "Flickering, dimming, or buzzing lights",
        "Ceiling lights that have come loose or fallen",
        "Partial power loss in one room or one side of a building",
        "Damaged wiring and loose connections",
        "Power supply faults on commercial and HVAC equipment",
      ],
      closing:
        "We trace the cause first and do not replace parts by guesswork. That saves you money and prevents the same problem from coming back. If you have a project that is not listed here, call us and describe it. We will tell you honestly whether we can handle it and what it will involve.",
      ctaText: "Schedule a Repair",
    },
    {
      id: "repair-or-replace-how-we-decide",
      heading: "Repair or Replace? How We Decide",
      description:
        "Not every electrical problem needs a big project. A single failed switch is a simple replacement. Repeated breaker trips across several rooms may mean overloaded circuits or an aging panel, which calls for a deeper look. In older homes, brittle insulation or outdated devices can make repeated spot repairs a poor use of your money. We will tell you when a small repair is enough and when replacement is the safer and more economical choice.",
      ctaText: "Get an Honest Assessment",
    },
    {
      id: "installation-done-safely-permits-code-and-testing",
      heading: "Installation Done Safely: Permits, Code, and Testing",
      description:
        "Many electrical installations in Maryland require permits and inspections, and local rules can vary by project and jurisdiction. We explain what applies to your job before work starts. Every installation is tested before we leave, and we show you how the new fixture or device works. For general homeowner guidance, the [Electrical Safety Foundation International](https://www.esfi.org/) and the [National Fire Protection Association](https://www.nfpa.org/) offer trusted safety resources. Working on live circuits without training is dangerous, so we recommend leaving panel, wiring, and fixture work to licensed professionals.",
      ctaText: "Plan an Installation",
    },
    {
      id: "repair-and-installation-for-businesses",
      heading: "Repair and Installation for Businesses",
      description:
        "Restaurants, offices, and retail stores cannot afford long outages. We repair lighting, outlets, and equipment power supply issues, and we install new connections for kitchen equipment, refrigeration, and workspace lighting. Because our technicians also service HVAC and commercial equipment, we can tell whether a failing unit has an electrical cause or a mechanical one. You can read how that works in our guide to [24 hour AC repair in Rockville](/blog/24-hour-ac-repair-rockville).",
      ctaText: "Schedule Commercial Service",
    },
    {
      id: "signs-you-need-electrical-repair-now",
      heading: "Signs You Need Electrical Repair Now",
      benefitsHeading: "",
      benefits: [
        "A burning smell near an outlet, panel, or appliance",
        "Sparks, crackling, or buzzing sounds",
        "Outlets or switch plates that feel warm or hot",
        "Breakers that trip often or will not reset",
        "Lights that dim when a large appliance starts",
      ],
      closing:
        "If you see smoke or flames, or someone has been shocked, call 911 first. For other urgent electrical problems, our emergency line is available 24 hours a day, 7 days a week.",
      ctaText: "Get Urgent Help",
    },
    {
      id: "why-homeowners-and-businesses-choose-maven-dmv",
      heading: "Why Homeowners and Businesses Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians who work on both residential and commercial systems",
        "Plain language explanations before and after every job",
        "Honest recommendations with no unnecessary upsells",
        "Tested and documented work on every repair and installation",
        "24/7 availability for urgent issues",
        "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "You can read feedback from customers on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML), or return to our [home page](/) to see our other services.",
      ctaText: "Schedule Service",
    },
    {
      id: "veterans-military-and-first-responder-discount",
      heading: "Veterans, Military, and First Responder Discount",
      description:
        "Maven Home Services offers 10% off all HVAC, plumbing, and electrical services for veterans, active duty military, and first responders. Mention your eligibility when you schedule. A valid military or first responder ID is required at the time of service.",
      ctaText: "Schedule and Mention Your Discount",
    },
    {
      id: "schedule-electrical-repair-or-installation",
      heading: "Schedule Electrical Repair or Installation",
      description: "Ready to get started? Visit our [contact page](/contact) or reach us directly:",
      benefitsHeading: "",
      benefits: [
        "Address: 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [(240) 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Hours: Open 24 hours a day, 7 days a week, with 24/7 emergency service for urgent issues",
        "Service area: Within 30 miles of Rockville, across Maryland and Northern Virginia",
      ],
      ctaText: "Schedule Service",
    },
  ],
  faqs: [
    { q: "What is the difference between electrical repair and electrical installation?", a: "Repair fixes something that is broken or unsafe in your existing system. Installation adds something new, such as a ceiling fan, a light fixture, or an upgraded panel." },
    { q: "Can you install a ceiling fan where there is only a light?", a: "Often yes, but the ceiling box must be rated to hold a moving fan. We check the box and the wiring first, and we upgrade the support if needed." },
    { q: "Why does my breaker keep tripping?", a: "The usual causes are an overloaded circuit, a faulty appliance, a loose connection, or a worn breaker. Repeated tripping is a warning sign, so it is best to have it checked." },
    { q: "Do I need a permit for electrical work?", a: "Some projects do and some do not. We explain what applies to your job before work begins." },
    { q: "Do you serve businesses as well as homes?", a: "Yes. We handle residential and commercial electrical repair and installation in Rockville and surrounding areas of Maryland and Northern Virginia." },
    { q: "Will I know the cost before you start?", a: "Yes. We explain the problem, the recommended repair, and the price first, and we start only after you approve." },
  ],
  ctaTitle: "Schedule Electrical Repair or Installation in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. You approve the plan and the price before any work begins.",
};
