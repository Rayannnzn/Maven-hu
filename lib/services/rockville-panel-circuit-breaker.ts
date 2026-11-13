import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville electrical panel and circuit breaker landing page, built
// verbatim from the approved SEO content package
// (Maven-DMV-Electrical-Panel-and-Circuit-Breaker-Page.docx). Copy, headings, and
// link targets are the client's — edit only against an updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/panel-circuit-breaker-rockville/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`.
export const rockvillePanelCircuitBreakerData: ServicePageData = {
  slug: "electrical/panel-circuit-breaker-rockville",
  title: "Electrical Panel and Circuit Breaker Services in Rockville, MD",
  seoTitle: "Electrical Panel and Breaker Services, Rockville | Maven DMV",
  metaDescription:
    "Licensed electricians for electrical panel upgrades, circuit breaker replacement, and tripping breaker repair in Rockville, MD. Call (240) 255 4794.",
  heroImage: "/images/electrical/electrical.jpeg",
  heroTitle: "Electrical Panel and Circuit Breaker Services in Rockville, MD",
  heroDescription:
    "Your electrical panel is the control center for every circuit in your building. It receives power from the utility, divides it into circuits, and protects each one with a breaker. When a panel is outdated, overloaded, or damaged, you may see tripping breakers, flickering lights, or warm components, and in serious cases a fire risk. Maven DMV repairs, replaces, and upgrades electrical panels and circuit breakers for homes and businesses in Rockville, MD and across Montgomery County, Maryland. Our licensed electricians inspect first, explain what they find, and recommend only what your system needs.",
  overviewTitle: "Quick Answer",
  overview: [
    "An electrical panel, also called a breaker box, distributes power to your circuits, and each circuit breaker shuts off power automatically if the circuit is overloaded or faulty. If your panel is old, crowded, noisy, warm, or keeps tripping, have it inspected by a licensed electrician.",
  ],
  offeredServicesTitle: "Electrical Panel Services We Provide",
  offeredServices: [
    { icon: "fact_check", name: "Inspections and load checks", desc: "Electrical panel inspections and load checks." },
    { icon: "upgrade", name: "Panel upgrades", desc: "Panel upgrades for added capacity and modern needs." },
    { icon: "autorenew", name: "Full panel replacement", desc: "Full panel replacement for worn, damaged, or outdated equipment." },
    { icon: "toggle_on", name: "Breaker replacement and repair", desc: "Circuit breaker replacement and repair." },
    { icon: "account_tree", name: "Subpanel installation", desc: "Subpanel installation for additions, garages, and workshops." },
    { icon: "add_circle", name: "New circuits", desc: "Adding new circuits for appliances, equipment, and remodels." },
    { icon: "label", name: "Labeling and circuit mapping", desc: "Panel labeling and circuit mapping." },
    { icon: "shield", name: "Whole home surge protection", desc: "Whole home surge protection, where it fits your system." },
    { icon: "store", name: "Commercial panel service", desc: "Commercial panel and equipment power service." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Panel and Breaker Service Process",
  steps: [
    { num: "01", icon: "search", title: "Inspect", desc: "We check the panel, breakers, wiring connections, grounding, and signs of heat or moisture." },
    { num: "02", icon: "speed", title: "Test the load", desc: "We measure how much power your circuits draw and look for overloads." },
    { num: "03", icon: "forum", title: "Explain", desc: "You hear the findings and options in plain language." },
    { num: "04", icon: "thumb_up", title: "Approve", desc: "We begin only after you agree to the plan." },
    { num: "05", icon: "construction", title: "Install or repair", desc: "We shut off power safely, replace or upgrade the equipment, and secure all connections." },
    { num: "06", icon: "label", title: "Label, test, and document", desc: "We label each circuit, test the system, and record what we completed." },
  ],
  detailSections: [
    {
      id: "signs-your-panel-or-breakers-need-attention",
      heading: "Signs Your Panel or Breakers Need Attention",
      table: {
        columns: ["What You Notice", "Likely Cause", "Next Step"],
        rows: [
          ["Breakers trip often", "Overloaded circuit, faulty appliance, or worn breaker", "Test the circuit and breaker"],
          ["Breaker will not reset", "Short circuit, ground fault, or failed breaker", "Stop resetting and call for service"],
          ["Buzzing, crackling, or humming from the panel", "Loose connection or failing breaker", "Urgent inspection"],
          ["Warm panel door or breakers", "Overheating from load or loose terminals", "Call promptly"],
          ["Burning smell, scorch marks, or rust", "Heat damage or moisture inside the panel", "Turn off what you can and call right away"],
          ["Lights dim when appliances start", "Overloaded system or loose connection", "Load check and inspection"],
          ["No open breaker slots", "Panel is out of room for new circuits", "Add a subpanel or upgrade the panel"],
          ["Panel is 25 to 40 years old or more", "Aging parts and outdated capacity", "Inspection and upgrade planning"],
        ],
      },
      closing:
        "If you see smoke or flames, or smell strong burning, leave the area and call 911. Do not open a panel that shows signs of heat or water damage.",
      ctaText: "Schedule a Panel Inspection",
    },
    {
      id: "types-of-circuit-breakers",
      heading: "Types of Circuit Breakers",
      table: {
        columns: ["Breaker Type", "Common Use", "What It Does"],
        rows: [
          ["Standard breaker", "General lighting and outlet circuits", "Shuts off power during overload or short circuit"],
          ["GFCI breaker", "Kitchens, bathrooms, garages, and outdoor circuits", "Protects against ground faults and shock hazards"],
          ["AFCI breaker", "Bedrooms, living areas, and other required circuits", "Detects dangerous arcing that can start fires"],
          ["Dual function breaker", "Circuits needing both protections", "Combines AFCI and GFCI protection"],
          ["Double pole breaker", "Dryers, ranges, water heaters, and HVAC equipment", "Handles larger 240 volt loads"],
        ],
      },
      closing:
        "The right breaker depends on the circuit, the wire size, and local code. Installing the wrong size or type can create a hazard, so this is work for a licensed electrician.",
      ctaText: "Replace a Breaker",
    },
    {
      id: "panel-repair-upgrade-or-replacement",
      heading: "Panel Repair, Panel Upgrade, or Full Replacement?",
      table: {
        columns: ["Option", "Best When", "What It Involves"],
        rows: [
          ["Breaker replacement", "One breaker is worn, tripping, or damaged", "Test the circuit and replace the breaker"],
          ["Panel upgrade", "You need more capacity or circuits", "Larger or modernized panel, and sometimes a service upgrade"],
          ["Full panel replacement", "The panel is damaged, corroded, or outdated", "New panel, new breakers, and reconnected circuits"],
          ["Subpanel installation", "You need circuits far from the main panel", "A second panel fed from the main panel"],
        ],
      },
      closing:
        "We explain which option fits your situation. Sometimes a single breaker is the fix. In other cases, repeated problems point to a panel that cannot support what your property now uses.",
      ctaText: "Get a Recommendation",
    },
    {
      id: "when-do-you-need-a-panel-upgrade",
      heading: "When Do You Need a Panel Upgrade?",
      description:
        "Modern homes and businesses use more power than older buildings were designed for. Central air, electric ranges, home offices, finished basements, heat pumps, and commercial equipment all add load. A panel upgrade makes sense if you are adding a major appliance, finishing a basement, building an addition, running out of breaker spaces, or using many extension cords and power strips. It also makes sense when an inspection shows corrosion, damage, or parts that are no longer reliable. A larger service may require coordination with your utility, and we explain that step before work begins.",
      ctaText: "Plan a Panel Upgrade",
    },
    {
      id: "safety-permits-and-inspections",
      heading: "Safety, Permits, and Inspections",
      description:
        "Panel work is among the most hazardous electrical work, because the service wires stay live even when the main breaker is off. This is why it should never be a do it yourself project. Panel replacements and upgrades usually require permits and inspections, and we explain what applies to your property. For independent guidance, visit the [Electrical Safety Foundation International](https://www.esfi.org/) or the [National Fire Protection Association](https://www.nfpa.org/).",
      ctaText: "Ask About Your Project",
    },
    {
      id: "panel-services-for-businesses",
      heading: "Panel Services for Businesses",
      description:
        "Restaurants, offices, and retail stores often outgrow their original panels as equipment is added. We check load balance, add dedicated circuits for kitchen equipment and refrigeration, and plan upgrades with minimal downtime. Because our team also services HVAC and commercial equipment, we can confirm that the panel and breakers properly support your cooling and heating units. See our main [electrical services](/electrical) page for more.",
      ctaText: "Schedule Commercial Service",
    },
    {
      id: "related-electrical-services",
      heading: "Related Electrical Services",
      benefitsHeading: "",
      benefits: [
        "[Electrical inspections](/electrical/inspections-rockville) to check the whole system",
        "[Wiring and rewiring](/electrical/wiring-rewiring-rockville) when older wiring is the root problem",
        "[Outlet replacement](/electrical/outlet-replacement-rockville) for worn or damaged outlets",
        "[Electrical repair and installation](/electrical/repair-installation-rockville) for fixtures, fans, and new circuits",
      ],
      ctaText: "Schedule Service",
    },
    {
      id: "why-choose-maven-dmv",
      heading: "Why Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians for residential and commercial electrical work",
        "Plain language advice and no unnecessary upsells",
        "Tested and documented work on every panel and circuit",
        "24/7 availability for urgent issues",
        "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Read customer feedback on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML), or visit our [home page](/). Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.",
      ctaText: "Schedule Service",
    },
    {
      id: "contact-maven-dmv",
      heading: "Contact Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Address: 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [(240) 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Hours: Open 24 hours a day, 7 days a week, with 24/7 emergency service",
        "Service area: Within 30 miles of Rockville, across Maryland and Northern Virginia",
        "Schedule: Visit our [contact page](/contact)",
      ],
      ctaText: "Schedule Service",
    },
  ],
  faqs: [
    { q: "Why does my circuit breaker keep tripping?", a: "Common causes include an overloaded circuit, a faulty appliance, a short circuit, a ground fault, or a worn breaker. Repeated tripping is a warning sign and should be checked." },
    { q: "Is it safe to keep resetting a breaker?", a: "Resetting once after turning off devices is usually fine. If it trips again, stop and call an electrician, because there may be a hazard." },
    { q: "How long does an electrical panel last?", a: "Many panels last several decades, but age, heat, moisture, and load all matter. An inspection shows the real condition." },
    { q: "Do I need a bigger panel for a new appliance or addition?", a: "Sometimes. We perform a load check and tell you whether your current panel can support it." },
    { q: "Can you replace just one breaker?", a: "Yes, when the panel is in good condition. We make sure the breaker type and size match the circuit." },
    { q: "Do panel upgrades need permits?", a: "Usually yes. We explain the permit and inspection steps that apply to your project." },
    { q: "Do you offer emergency panel service?", a: "Yes. Our emergency line is available 24/7 for urgent electrical issues." },
  ],
  ctaTitle: "Schedule Panel and Breaker Service in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. Licensed electricians inspect first, explain what they find, and recommend only what your system needs.",
};
