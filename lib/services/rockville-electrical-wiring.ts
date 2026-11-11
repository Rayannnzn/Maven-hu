import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville wiring & rewiring landing page, built verbatim from the
// approved SEO content package (Maven-DMV-Electrical-Wiring-and-Rewiring-Page.docx).
// Copy, headings, and link targets are the client's — edit only against an
// updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/wiring-rewiring-rockville/, and adding
// the slug to subcategoryData would make generateStaticParams emit a path that
// already exists as a static page, which aborts `next build`.
export const rockvilleElectricalWiringData: ServicePageData = {
  slug: "electrical/wiring-rewiring-rockville",
  title: "Electrical Wiring and Rewiring in Rockville, MD",
  seoTitle: "Electrical Wiring and Rewiring in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed electricians for electrical wiring, rewiring, and safety inspections in Rockville, MD. Older home wiring upgrades and 24/7 emergency help. Call (240) 255 4794.",
  heroImage: "/images/electrical/electrical-hero.jpg",
  heroImageFit: "cover",
  heroTitle: "Electrical Wiring and Rewiring in Rockville, MD",
  heroDescription:
    "The wiring inside your walls carries every bit of power your home or business uses. When it is damaged, outdated, or overloaded, it can cause tripping breakers, dead outlets, and in serious cases a fire. Maven DMV provides new wiring, partial rewiring, and whole building rewiring for homes and businesses in Rockville, MD and across Montgomery County, Maryland. Our licensed electricians inspect first, explain what they find, and recommend only the work your property needs.",
  overviewTitle: "Quick Answer",
  overview: [
    "Rewiring means replacing old or unsafe electrical wiring with new wiring that meets current code. You may need it if your home has knob and tube or aluminum branch wiring, frequent breaker trips, two prong outlets, burning smells, or wiring that has been damaged by pests, water, or age.",
  ],
  offeredServicesTitle: "Electrical Wiring Services We Provide",
  offeredServices: [
    { icon: "add_home", name: "New wiring", desc: "New wiring for additions, finished basements, garages, and remodels." },
    { icon: "cable", name: "Partial rewiring", desc: "Partial rewiring of rooms or circuits with known problems." },
    { icon: "apartment", name: "Whole home and whole building rewiring", desc: "Whole home and whole building rewiring brought up to current standards." },
    { icon: "autorenew", name: "Replacement of outdated or damaged wiring", desc: "Replacement of outdated or damaged wiring runs." },
    { icon: "electrical_services", name: "Grounding upgrades and added circuits", desc: "Grounding upgrades and added circuits for kitchens, offices, and equipment." },
    { icon: "outlet", name: "Outlet, switch, and lighting circuit wiring", desc: "Outlet, switch, and lighting circuit wiring." },
    { icon: "power", name: "Electrical panel upgrades", desc: "Electrical panel upgrades when the load requires it." },
    { icon: "storefront", name: "Commercial wiring", desc: "Commercial wiring for restaurants, offices, and retail spaces." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "What Happens During a Rewiring Project",
  steps: [
    { num: "01", icon: "manage_search", title: "Inspect and test", desc: "We examine the panel, circuits, outlets, and accessible wiring, and test for faults." },
    { num: "02", icon: "record_voice_over", title: "Explain the findings", desc: "You see what we found and why, in plain language." },
    { num: "03", icon: "architecture", title: "Plan the scope", desc: "We agree on what to replace, in what order, and how to limit disruption." },
    { num: "04", icon: "fact_check", title: "Handle permits and inspections", desc: "We explain the permit and inspection steps that apply to your project." },
    { num: "05", icon: "cable", title: "Install new wiring", desc: "We run new cable, make secure connections, and protect it properly." },
    { num: "06", icon: "description", title: "Test and document", desc: "We test every circuit, label the panel, and record the work completed." },
  ],
  detailSections: [
    {
      id: "signs-your-wiring-may-need-attention",
      heading: "Signs Your Wiring May Need Attention",
      description:
        "Wiring problems often show up as small annoyances before they become serious. Use this table to match what you notice with what it may mean.",
      table: {
        columns: ["What You Notice", "What It May Mean", "Recommended Step"],
        rows: [
          ["Breakers trip often", "Overloaded circuit, loose connection, or worn wiring", "Inspection and circuit testing"],
          ["Flickering or dimming lights", "Loose connection or voltage problem", "Tighten or replace connections, test the circuit"],
          ["Warm outlets or switch plates", "Loose terminals or overheating wire", "Call promptly for repair"],
          ["Burning smell or discolored outlets", "Arcing or overheated wiring", "Turn off the circuit and call us right away"],
          ["Only two prong outlets", "Older wiring with no ground wire", "Grounding upgrade or rewiring"],
          ["Buzzing or crackling sounds", "Arcing at a connection", "Urgent inspection"],
          ["Rodent or water damage", "Damaged insulation or exposed conductors", "Repair or replace affected wiring"],
        ],
      },
      closing:
        "If you see smoke or flames, or someone has been shocked, call 911 first. For other urgent wiring problems, our emergency line is open 24 hours a day, 7 days a week.",
      ctaText: "Schedule a Wiring Inspection",
    },
    {
      id: "older-wiring-types-and-their-concerns",
      heading: "Older Wiring Types and Their Concerns",
      description:
        "Wiring materials and methods have changed over the decades. Many older homes in the Rockville area still have some original wiring, and not all of it meets modern needs.",
      table: {
        columns: ["Wiring Type", "Typical Era", "Main Concern", "Common Solution"],
        rows: [
          ["Knob and tube", "Before the 1950s", "Cloth covered wires that become brittle, with no ground wire, and often buried in insulation", "Replace with modern cable"],
          ["Cloth or rubber covered cable", "Early to mid 1900s", "Insulation cracks and crumbles with age", "Replace affected runs"],
          ["Aluminum branch wiring", "Mid 1960s to mid 1970s", "Connections can loosen and overheat over time", "Approved repair methods or replacement"],
          ["Ungrounded two wire cable", "Mid 1900s", "No equipment ground, so surge and shock protection is limited", "Add grounding or rewire"],
          ["Overloaded older circuits", "Any era", "Too few circuits for modern appliances and electronics", "Add circuits or upgrade the panel"],
        ],
      },
      closing:
        "An age range does not mean your wiring is unsafe. We confirm the actual condition by inspecting it, so you do not pay for work you do not need.",
      ctaText: "Check My Wiring",
    },
    {
      id: "partial-rewiring-or-whole-building-rewiring",
      heading: "Partial Rewiring or Whole Building Rewiring?",
      table: {
        columns: ["Factor", "Partial Rewiring", "Whole Building Rewiring"],
        rows: [
          ["Best for", "One room, one floor, or a few bad circuits", "Homes with widespread old or unsafe wiring"],
          ["Walls and ceilings", "Limited access and patching", "More access and patching needed"],
          ["Disruption", "Lower", "Higher, often done in phases"],
          ["Long term value", "Fixes a known problem", "Brings the entire system up to current standards"],
        ],
      },
      closing:
        "We often recommend a phased approach, such as the kitchen and panel first, then bedrooms and living areas. That lets you spread out the work while keeping your highest risks under control. Rewiring can involve opening walls or ceilings. We protect your space, keep the work area as clean as we can, and explain what patching or finishing will remain for you or another trade.",
      ctaText: "Plan a Rewiring Project",
    },
    {
      id: "safety-standards-and-trusted-resources",
      heading: "Safety Standards and Trusted Resources",
      description:
        "Electrical work must follow the code adopted in your area, and many projects require permits and inspections. We explain what applies before work begins. For independent safety information, the [Electrical Safety Foundation International](https://www.esfi.org/) and the [National Fire Protection Association](https://www.nfpa.org/) offer helpful consumer guidance. Some insurance companies also ask about older wiring types, so ask your insurer if you are unsure about your policy.",
      ctaText: "Ask About Permits",
    },
    {
      id: "planning-wiring-before-a-remodel",
      heading: "Planning Wiring Before a Remodel",
      description:
        "Remodels are the best time to update wiring, because the walls are already open. If you are finishing a basement, renovating a kitchen, or adding a room, tell us early. We can plan circuits for appliances, lighting, and future needs, so you avoid opening finished walls again later. Good planning also helps you stay within what your panel can safely support, and it keeps the project schedule predictable for everyone involved.",
      ctaText: "Plan Remodel Wiring",
    },
    {
      id: "wiring-for-businesses",
      heading: "Wiring for Businesses",
      description:
        "Restaurants, offices, and retail stores often need new circuits for equipment, lighting, and refrigeration. Because our team also works on HVAC and commercial equipment, we plan wiring that fits real equipment loads. You can learn more about our related work on our [electrical services page](/electrical), or read how electrical issues affect cooling in our guide to [24 hour AC repair in Rockville](/blog/24-hour-ac-repair-rockville).",
      ctaText: "Schedule Commercial Wiring",
    },
    {
      id: "why-choose-maven-dmv",
      heading: "Why Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians for residential and commercial electrical work",
        "Plain language advice and no unnecessary upsells",
        "Tested and documented work on every circuit we touch",
        "24/7 availability for urgent issues",
        "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Read customer feedback on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML), or visit our [home page](/) to see our other services. Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.",
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
    { q: "How do I know if my house needs rewiring?", a: "Frequent breaker trips, two prong outlets, warm outlets, burning smells, and wiring from before the 1970s are common reasons to get an inspection. An electrician can confirm the real condition." },
    { q: "Is knob and tube wiring dangerous?", a: "It can be. The insulation becomes brittle with age, and it is often covered by insulation material that traps heat. Modifying it also needs care." },
    { q: "How long does rewiring take?", a: "It depends on the size of the property, how much wall access is available, and the scope. We give you a clear plan before work starts." },
    { q: "Do I need permits for rewiring?", a: "Often yes. We explain which permits and inspections apply to your project." },
    { q: "Can you rewire only part of my home?", a: "Yes. Partial rewiring is common, especially for kitchens, basements, additions, and problem circuits." },
    { q: "Will you have to cut into my walls?", a: "Sometimes. We use existing access when possible and tell you in advance where openings may be needed." },
  ],
  ctaTitle: "Schedule Wiring or Rewiring Service in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. We inspect first and recommend only the work your property needs.",
};
