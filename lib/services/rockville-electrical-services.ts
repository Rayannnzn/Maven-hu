import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville commercial & residential electrical services landing page,
// built verbatim from the approved SEO content package
// (Maven-DMV-Electrical-Services-Page.docx). The package's URL line was a
// copy-paste of the inspections URL; the client supplied this slug instead.
// Copy, headings, and link targets are the client's — edit only against an
// updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/commercial-residential-rockville/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`. Note the
// existing "electrical/commercial-residential" subcategory is a different page.
export const rockvilleElectricalServicesData: ServicePageData = {
  slug: "electrical/commercial-residential-rockville",
  title: "Electrical Services in Rockville, MD",
  seoTitle: "Electrical Services in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed electricians for homes and businesses in Rockville, MD and Northern Virginia. Repairs, lighting, inspections, and 24/7 emergency help. Call (240) 255 4794.",
  heroImage: "/images/electrical-commercial-residential.jpg",
  heroTitle: "Commercial and Residential Electrical Services in Rockville, MD",
  heroDescription:
    "Maven Home Services, known locally as Maven DMV, provides electrical repair, installation, and safety inspections for homes and businesses. We are based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850, and we serve customers within a 30 mile radius across Maryland and Northern Virginia. Our licensed electricians find the real cause of a problem, explain it in plain language, and fix it safely.",
  overviewTitle: "What Does an Electrician Do?",
  overview: [
    "An electrician installs, tests, and repairs the wiring and equipment that carry power through a building. That includes outlets, switches, lighting, circuit breakers, panels, and the power connections for appliances and commercial equipment. Electrical work carries real fire and shock risks, so it should be handled by a trained professional and not as a weekend project.",
  ],
  offeredServicesTitle: "Electrical Repair for Homes and Businesses",
  offeredServicesSubtitle:
    "Electrical problems rarely fix themselves, and small warning signs often point to a bigger issue behind the wall. Our team diagnoses and repairs:",
  offeredServices: [
    { icon: "outlet", name: "Outlets and switches", desc: "Outlets and switches that are dead, loose, or warm to the touch." },
    { icon: "electrical_services", name: "Circuit breakers", desc: "Circuit breakers that trip repeatedly." },
    { icon: "lightbulb", name: "Flickering or dimming lights", desc: "Flickering or dimming lights." },
    { icon: "power_off", name: "Power loss", desc: "Partial or complete power loss." },
    { icon: "cable", name: "Wiring faults", desc: "Wiring faults and damaged connections." },
  ],
  benefits: [],
  whyChoose: [],
  steps: [],
  detailSections: [
    {
      id: "commercial-electrical-services",
      heading: "Commercial Electrical Services",
      description:
        "Restaurants, offices, retail stores, and service businesses depend on steady power. When something fails, you lose sales, and sometimes inventory. We support commercial customers with:",
      benefitsHeading: "",
      benefits: [
        "Power connections for kitchen and refrigeration equipment",
        "Lighting repair and replacement",
        "Electrical troubleshooting for equipment that will not start or keeps shutting off",
        "Safety checks for older buildings and busy workspaces",
      ],
      closing:
        "Because our technicians also work on HVAC and commercial equipment every week, we understand how electrical supply, controls, and heavy duty machines interact. A walk in cooler that will not hold temperature, for example, is sometimes a power or control problem and not a refrigeration problem. Knowing the difference saves time and money.",
      ctaText: "Schedule Commercial Service",
    },
    {
      id: "residential-electrical-services",
      heading: "Residential Electrical Services",
      description: "Homeowners in Rockville and nearby communities call us for:",
      benefitsHeading: "",
      benefits: [
        "Ceiling light repair and installation",
        "Ceiling fan installation",
        "Outlet, switch, and dimmer replacement",
        "Electrical panel inspections and upgrades",
        "Whole home safety checks for older properties",
      ],
      closing:
        "Older homes often have worn insulation, outdated breakers, or too few circuits for modern appliances. We check what is there, tell you what is safe to keep, and recommend only what the home actually needs.",
      ctaText: "Schedule a Home Visit",
    },
    {
      id: "lighting-repair-and-installation",
      heading: "Lighting Repair and Installation",
      description:
        "A fixture that hangs loose or flickers is more than an annoyance. Fallen or poorly secured lights can cause injury, damage ceilings, and expose live wiring. We inspect the mounting points, repair or replace the fixture, secure it properly, and test it before we leave. We also install new indoor and outdoor lighting for homes and commercial spaces.",
      ctaText: "Schedule Lighting Service",
    },
    {
      id: "electrical-safety-inspections",
      heading: "Electrical Safety Inspections",
      description:
        "A professional inspection finds problems before they become emergencies. We look for overloaded circuits, worn wiring, loose connections, and failing breakers. You receive clear findings and a prioritized list of recommendations, so you can decide what to fix now and what can wait.",
      closing:
        "For independent guidance on home electrical safety, the [Electrical Safety Foundation International](https://www.esfi.org/) offers helpful consumer resources, and the [National Fire Protection Association](https://www.nfpa.org/) publishes widely used electrical fire safety information.",
      ctaText: "Schedule an Inspection",
    },
    {
      id: "signs-you-should-call-an-electrician-right-away",
      heading: "Signs You Should Call an Electrician Right Away",
      description: "Call us promptly if you notice any of these:",
      benefitsHeading: "",
      benefits: [
        "A burning smell near outlets, panels, or appliances",
        "Sparks, buzzing, or crackling sounds",
        "Outlets or switch plates that feel hot",
        "Breakers that will not reset",
        "Lights that dim when an appliance turns on",
      ],
      closing:
        "If you see smoke, flames, or anyone has been shocked, call 911 first. For urgent electrical issues that are not an immediate life safety emergency, our emergency line is open 24 hours a day, 7 days a week.",
      ctaText: "Get Urgent Help",
    },
    {
      id: "electrical-and-hvac-under-one-roof",
      heading: "Electrical and HVAC Under One Roof",
      description:
        "Many cooling and heating failures start with an electrical cause, such as a failed capacitor, a loose connection, or a tripped breaker. Because Maven DMV handles both trades, we can trace the problem without sending you to a second company. If your air conditioner stopped on a hot day, read our guide to [24 hour AC repair in Rockville](/blog/24-hour-ac-repair-rockville) to learn what to check and when to call for help. You can also visit our [home page](/) to see everything we offer.",
      ctaText: "Schedule Service",
    },
    {
      id: "why-customers-choose-maven-dmv",
      heading: "Why Customers Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians with hands on experience in both residential and commercial systems",
        "**Clear communication:** we explain the problem and the options in plain language",
        "**Honest recommendations:** no unnecessary upsells",
        "**Documented work:** we record what we find and what we fix",
        "**Reliable availability:** open 24 hours a day, 7 days a week, with emergency service for urgent issues",
        "**Local roots:** our office is in Rockville, and we know the area's older homes, newer developments, and busy commercial corridors",
      ],
      closing:
        "You can see our reviews and photos on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML).",
      ctaText: "Schedule Service",
    },
    {
      id: "discounts-for-veterans-military-and-first-responders",
      heading: "Discounts for Veterans, Military, and First Responders",
      description:
        "Maven Home Services offers 10% off all HVAC, plumbing, and electrical services for veterans, active duty military, and first responders. Please mention your eligibility when you schedule. A valid military or first responder ID is required at the time of service.",
      ctaText: "Schedule and Mention Your Discount",
    },
    {
      id: "contact-maven-dmv",
      heading: "Contact Maven DMV",
      description: "Ready to schedule an inspection or repair? Visit our [contact page](/contact) or reach us directly:",
      benefitsHeading: "",
      benefits: [
        "Address: 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [(240) 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Hours: Open 24 hours a day, 7 days a week",
      ],
      closing: "Return to our [main electrical services page](/electrical) anytime to review what we offer.",
      ctaText: "Schedule Service",
    },
  ],
  faqs: [
    { q: "How do I know if I need an electrician?", a: "Frequent breaker trips, flickering lights, warm outlets, burning smells, or sparks are all signs you need a professional." },
    { q: "Do you work on both homes and businesses?", a: "Yes. We handle residential and commercial electrical work throughout Rockville, Montgomery County, and surrounding areas in Maryland and Northern Virginia." },
    { q: "Can you fix electrical problems that affect my HVAC equipment?", a: "Yes. Our team understands how power and controls connect to air conditioning, heating, and commercial equipment, so we can find the true source of the failure." },
    { q: "Do you offer emergency electrical service?", a: "Yes. Our emergency line is available 24/7 for urgent issues." },
    { q: "Will I get a quote before work starts?", a: "Yes. We explain the problem and the recommended repair first, and work begins only after you approve it." },
  ],
  ctaTitle: "Schedule Electrical Service in Rockville",
  ctaDescription:
    "Before any work begins, we explain what we found, what it will take to fix it, and why. You approve the plan first, so there are no surprises and no pressure. Call (240) 255 4794 or visit our contact page.",
};
