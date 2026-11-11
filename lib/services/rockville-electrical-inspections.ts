import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville electrical-inspections landing page, built verbatim from
// the approved SEO content package (Maven-DMV-Electrical-Inspections-Page.docx).
// Copy, headings, and link targets are the client's — edit only against an
// updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/inspections-rockville/, and adding the
// slug to subcategoryData would make generateStaticParams emit a path that
// already exists as a static page, which aborts `next build`.
export const rockvilleElectricalInspectionsData: ServicePageData = {
  slug: "electrical/inspections-rockville",
  title: "Electrical Inspections in Rockville, MD",
  seoTitle: "Electrical Inspections in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed electricians for home and commercial electrical safety inspections in Rockville, MD. Panels, wiring, outlets, and clear reports. Call (240) 255 4794.",
  heroImage: "/images/electrical/electrical.jpeg",
  heroTitle: "Electrical Inspections in Rockville, MD",
  heroDescription:
    "Most electrical problems stay hidden until something stops working or, worse, overheats. An electrical inspection finds those problems early, while they are still simple to fix. Maven DMV performs electrical safety inspections for homes and businesses in Rockville, MD and across Montgomery County, Maryland. Our licensed electricians check your panel, wiring, outlets, and equipment connections, then give you clear findings in plain language.",
  overviewTitle: "Quick Answer",
  overview: [
    "An electrical inspection is a professional check of your electrical system for safety, wear, and code concerns. It covers the panel, breakers, wiring, outlets, switches, grounding, and visible connections, and it ends with a written summary of what is fine, what needs attention, and what is urgent.",
  ],
  offeredServicesTitle: "What You Receive After the Inspection",
  offeredServicesSubtitle: "We do not push unneeded work. If your system is in good shape, we tell you so.",
  offeredServices: [
    { icon: "fact_check", name: "A clear explanation", desc: "A clear explanation of the system condition." },
    { icon: "warning", name: "Urgent safety items", desc: "A list of urgent safety items, if any." },
    { icon: "format_list_numbered", name: "Ranked recommendations", desc: "Recommended repairs and upgrades, ranked by priority." },
    { icon: "check_circle", name: "What is in good condition", desc: "Items that are in good condition and need no action." },
    { icon: "schedule", name: "Honest guidance", desc: "Honest guidance on what can wait and what cannot." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "What Happens During Your Inspection",
  steps: [
    { num: "01", icon: "forum", title: "Talk with you", desc: "We ask about past problems, tripped breakers, remodels, and anything that concerns you." },
    { num: "02", icon: "electrical_services", title: "Inspect the panel and main service", desc: "We look at breakers, labeling, wiring connections, and signs of heat." },
    { num: "03", icon: "outlet", title: "Test outlets, switches, and fixtures", desc: "We check power, grounding, and protection devices." },
    { num: "04", icon: "settings_input_component", title: "Review equipment and special circuits", desc: "We check major appliances, HVAC units, and commercial equipment connections." },
    { num: "05", icon: "record_voice_over", title: "Explain findings", desc: "We show you what we found and why it matters." },
    { num: "06", icon: "assignment_turned_in", title: "Provide recommendations", desc: "You receive clear next steps, ranked by urgency." },
  ],
  detailSections: [
    {
      id: "when-to-schedule-an-electrical-inspection",
      heading: "When to Schedule an Electrical Inspection",
      table: {
        columns: ["Situation", "Why an Inspection Helps"],
        rows: [
          ["Buying or selling a property", "Reveals hidden problems before closing and supports fair negotiation"],
          ["Home is 30 years old or older", "Older wiring, devices, and panels may no longer meet current needs"],
          ["Frequent breaker trips or flickering lights", "Helps find overloads, loose connections, or failing parts"],
          ["Before a remodel or addition", "Confirms the system can support the new load"],
          ["After a storm, flood, or fire", "Checks for damage that may not be visible"],
          ["Adding major equipment or appliances", "Confirms the circuit and panel can handle it"],
          ["Opening or leasing a business space", "Identifies repairs needed before you move in"],
          ["Insurance or safety review", "Provides a record of the system condition"],
        ],
      },
      ctaText: "Schedule an Inspection",
    },
    {
      id: "what-we-inspect",
      heading: "What We Inspect",
      table: {
        columns: ["Area", "What We Look For"],
        rows: [
          ["Electrical panel", "Breaker condition, labeling, signs of heat or corrosion, loose connections, and capacity"],
          ["Wiring", "Visible wiring type and condition, damaged insulation, and unsafe splices"],
          ["Outlets and switches", "Secure mounting, wear, polarity, grounding, and GFCI protection where needed"],
          ["Lighting and fixtures", "Secure mounting, correct connections, and signs of overheating"],
          ["Grounding and bonding", "Whether the system has proper protection against faults"],
          ["Smoke and safety devices", "Whether required alarms are present and working, where they are part of the visit"],
          ["Equipment connections", "Power supply for HVAC units, kitchen equipment, and other major loads"],
          ["Exterior and outdoor circuits", "Weather protection, outdoor outlets, and exposed wiring"],
        ],
      },
      closing:
        "We inspect what is accessible and safe to reach. If a hidden problem is suspected behind a wall or ceiling, we tell you what additional steps would be needed to confirm it.",
      ctaText: "Book an Inspection",
    },
    {
      id: "residential-electrical-inspections",
      heading: "Residential Electrical Inspections",
      description:
        "Homeowners often schedule an inspection when they buy a house, notice warning signs, or plan a renovation. We test outlets, check the panel, look for common older home issues, and give you a prioritized list. That list separates urgent safety items from items that can wait, so you can plan your budget with confidence. If the inspection points to bigger work, we can discuss options such as [electrical repair and installation](/electrical/repair-installation-rockville), [outlet replacement](/electrical/outlet-replacement-rockville), or [rewiring](/electrical/wiring-rewiring-rockville).",
      ctaText: "Schedule a Home Inspection",
    },
    {
      id: "commercial-electrical-inspections",
      heading: "Commercial Electrical Inspections",
      description:
        "Restaurants, offices, and retail stores run equipment for long hours, which puts steady stress on circuits, outlets, and panels. We check load balance, equipment power connections, lighting circuits, and signs of overheating. Our team also works on HVAC and commercial equipment, so we can spot electrical issues that affect cooling, heating, and refrigeration. Catching a loose connection before it shuts down a walk in cooler or kitchen line can save inventory and business hours.",
      ctaText: "Schedule a Commercial Inspection",
    },
    {
      id: "how-to-prepare-for-your-inspection",
      heading: "How to Prepare for Your Inspection",
      description:
        "A little preparation makes the visit faster and more useful. Please clear access to your electrical panel, including any boxes or furniture in front of it. Make a note of outlets, lights, or breakers that have caused problems, and when they happened. Let us know about past repairs, remodels, or additions, since those can change how the system was wired. If you are a tenant or business owner, tell us when equipment can be safely powered down, so we can test circuits without disrupting your day. Bring any earlier inspection reports if you have them, because they help us compare conditions over time.",
      ctaText: "Schedule an Inspection",
    },
    {
      id: "safety-inspection-or-county-permit-inspection",
      heading: "Safety Inspection or County Permit Inspection?",
      description:
        "These are different. A safety inspection from a licensed electrician is a private review of your system. A permit inspection is done by the local authority after certain electrical work to confirm it meets code. We explain which steps apply to your project and what to expect. For independent safety resources, visit the [Electrical Safety Foundation International](https://www.esfi.org/) or the [National Fire Protection Association](https://www.nfpa.org/).",
      ctaText: "Ask About Your Project",
    },
    {
      id: "warning-signs-that-should-not-wait",
      heading: "Warning Signs That Should Not Wait",
      benefitsHeading: "",
      benefits: [
        "A burning smell from an outlet, switch, or panel",
        "Warm or discolored outlets and switch plates",
        "Sparks, buzzing, or crackling sounds",
        "Breakers that will not reset or trip repeatedly",
        "Lights that dim when appliances start",
      ],
      closing:
        "If you see smoke or flames, or someone has been shocked, call 911 first. For other urgent electrical problems, our emergency line is available 24 hours a day, 7 days a week.",
      ctaText: "Get Urgent Help",
    },
    {
      id: "why-choose-maven-dmv",
      heading: "Why Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians for residential and commercial electrical work",
        "Plain language reports without technical confusion",
        "Honest recommendations with no unnecessary upsells",
        "Documented findings you can keep for your records",
        "24/7 availability for urgent issues",
        "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Read customer feedback on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML), or visit our [home page](/). Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.",
      ctaText: "Schedule an Inspection",
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
      ctaText: "Schedule an Inspection",
    },
  ],
  faqs: [
    { q: "How often should I get an electrical inspection?", a: "Many homeowners schedule one when buying a home, before major renovations, or every few years for older properties. Businesses benefit from regular checks too." },
    { q: "How long does an inspection take?", a: "It depends on the size of the property and the number of circuits. We explain the expected time before we begin." },
    { q: "Will you find every hidden problem?", a: "We inspect what is accessible and test what we can. If we suspect a hidden issue, we explain how to confirm it." },
    { q: "Do I need an inspection before buying a house?", a: "It is strongly worth considering, especially for older homes, because electrical repairs can be costly." },
    { q: "Can you fix problems you find during the inspection?", a: "Yes. You decide whether to have us do the repairs, and we start only after you approve." },
    { q: "Do you inspect commercial buildings?", a: "Yes. We inspect restaurants, offices, retail spaces, and other commercial properties." },
  ],
  ctaTitle: "Schedule an Electrical Inspection in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. Clear findings, ranked by urgency, with no unnecessary upsells.",
};
