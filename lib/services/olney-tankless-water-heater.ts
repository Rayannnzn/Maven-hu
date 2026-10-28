import type { ServicePageData } from "@/lib/services/types";

// Communities named in the page's "Olney and Nearby Areas We Serve" section;
// feeds the JSON-LD areaServed list.
export const olneyAreaServed = [
  "Olney",
  "Brookeville",
  "Sandy Spring",
  "Ashton",
  "Derwood",
  "Rockville",
  "Silver Spring",
  "Laytonsville",
];

// Standalone Olney tankless water heater landing page, built verbatim from the
// approved SEO content package (primary keyword "tankless water heater service
// Olney MD"). Copy, headings, and link targets are the client's — edit only
// against an updated package. The package brands this page "Maven DMV"; keep
// that wording. It is written to differ from the Montgomery Village page on
// purpose, so never copy text between the city pages.
//
// Served under /plumbing by its own static route at
// app/plumbing/tankless-water-heater-service-olney-md/. Deliberately NOT an
// entry in lib/services/subcategories.ts — that would make generateStaticParams
// emit a path that already exists and abort `next build`.
export const olneyTanklessData: ServicePageData = {
  slug: "plumbing/tankless-water-heater-service-olney-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Tankless Water Heater Service in Olney, MD",
  seoTitle: "Tankless Water Heater Service in Olney, MD | Maven DMV",
  metaDescription:
    "Licensed tankless water heater repair, flushing, and maintenance in Olney, MD. Upfront written estimates and insured techs. Call Maven DMV at 240.255.4794.",
  heroImage: "/images/plumbing/water-heaters.jpeg",
  heroTitle: "Tankless Water Heater Service in Olney, MD",
  heroDescription:
    "A tankless water heater is supposed to give you hot water the moment you ask for it. When it starts delivering lukewarm water, shuts off mid shower, or flashes an error code, it needs a professional look. Maven DMV provides tankless water heater repair, flushing, maintenance, and replacement for homes and businesses in Olney, Maryland. Our technicians are MHIC licensed, background checked, and fully insured, and the person who writes your estimate is the person who does the work. Hot water stopped working? Call 240.255.4794 for emergency service or book online.",
  overviewTitle: "What Is Included in Tankless Water Heater Service?",
  overview: [
    "Tankless service is a hands on inspection and cleaning of a water heater that warms water as it passes through the unit rather than holding it in a tank. We flush mineral scale from the heat exchanger, test the valves, check the gas and venting connections, and confirm the unit reaches its set temperature. Manufacturers generally recommend service once a year, and units that run daily in busy homes or kitchens may need it more often.",
  ],
  offeredServicesTitle: "Tankless Services Available in Olney",
  offeredServices: [
    { icon: "build", name: "Repair", desc: "We trace the cause of error codes, temperature swings, ignition problems, and low flow, then explain the fix and the cost before work begins." },
    { icon: "water_drop", name: "Flushing and descaling", desc: "Scale slowly coats the inside of the heat exchanger and cuts heating performance. A proper flush through the service valves clears it out and helps the unit run the way it was built to." },
    { icon: "event_available", name: "Yearly maintenance", desc: "A scheduled visit catches worn fittings, a clogged inlet filter, venting problems, and valve wear before they turn into a no hot water call. It also supports your warranty." },
    { icon: "construction", name: "Replacement and installation", desc: "If repair no longer makes sense, we size a new unit to your fixtures and household demand and install it to code." },
    { icon: "restaurant", name: "Commercial kitchen hot water", desc: "Restaurants, cafes, and food businesses need reliable hot water at the sink for washing and sanitizing. We service tankless systems that supply three compartment sinks and prep stations." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Process",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Contact us", desc: "Call or book online and share the brand, symptoms, and any error code." },
    { num: "02", icon: "search", title: "Inspection", desc: "Your technician arrives on schedule and diagnoses the unit." },
    { num: "03", icon: "request_quote", title: "Estimate", desc: "You receive the scope and price in writing before we begin." },
    { num: "04", icon: "build", title: "Service", desc: "We complete the repair or maintenance and test the system." },
    { num: "05", icon: "task_alt", title: "Follow up", desc: "We explain our findings and what to keep an eye on." },
  ],
  detailSections: [
    {
      id: "what-to-expect",
      heading: "What to Expect When We Arrive",
      description: "We work from a written checklist on every visit:",
      benefitsHeading: "",
      benefits: [
        "Read the display and check for stored error codes",
        "Test the water temperature at the unit and at the fixture",
        "Inspect the inlet and outlet isolation valves",
        "Test the pressure relief valve",
        "Check gas and water connections for leaks, corrosion, and wear",
        "Inspect the venting and exhaust path",
        "Flush and descale the heat exchanger if it needs it",
        "Review what we found and give you a written recommendation",
      ],
      ctaText: "Schedule Tankless Service",
    },
    {
      id: "warning-signs",
      heading: "Warning Signs Worth Acting On",
      benefitsHeading: "",
      benefits: [
        "Hot water fades to lukewarm or turns cold while in use",
        "The display shows an error code",
        "Hot water takes longer to arrive than before",
        "The unit makes popping, rumbling, or banging sounds",
        "You notice white or green mineral crust or small drips at the fittings",
        "Your gas bill rises without any change in your routine",
      ],
      closing: "Catching these early usually means a simpler and less expensive fix.",
      ctaText: "Schedule a Visit",
    },
    {
      id: "recent-job-rinnai-rl94",
      heading: "Recent Job: Rinnai RL94 Service",
      description:
        "We recently serviced a Rinnai RL94 gas tankless water heater supplying a commercial kitchen. Its display showed 140°F with the In Use light on. Our technician inspected the isolation valves, pressure relief valve, and the gas and water connections, then checked the hot water at the three compartment sink to make sure the sanitizing rinse had a steady supply. We bring the same careful approach to every home and business in Olney.",
      ctaText: "Book Tankless Service",
    },
    {
      id: "why-choose-maven",
      heading: "Why Olney Property Owners Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "**Licensed and certified.** Maven holds MHIC licensing, and our technicians carry EPA Section 608, OSHA, and Haag inspection credentials. You can verify any Maryland contractor through the [Maryland Home Improvement Commission](https://labor.maryland.gov/license/mhic/).",
        "**Insured and background checked.** Every technician is screened and carries liability coverage before stepping into your property.",
        "**Written estimates.** You see the price before work starts. There are no hidden fees, and you approve every cost.",
        "**Same day appointments.** Offered based on technician availability. We show up on schedule.",
        "**Emergency service.** Urgent plumbing issues receive priority scheduling, with response times that depend on technician availability and your location.",
        "**Support after the visit.** If something is not right, let us know and we will make every reasonable effort to correct it.",
        "**[Discount for those who serve](/contact).** Veterans, active duty military, and first responders receive 10% off all services with valid ID at the time of service.",
      ],
      ctaText: "Request Tankless Service",
    },
    {
      id: "maintenance-protects-your-investment",
      heading: "Why Maintenance Protects Your Investment",
      description:
        "According to the [U.S. Department of Energy](https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters), tankless water heaters can last more than 20 years and often use less energy than storage tank models. Getting that lifespan takes regular care. Mineral scale is the leading cause of lost performance, and it strains the heat exchanger, the costliest part of the system. Routine flushing keeps your unit efficient and lowers the chance of a sudden breakdown. Rinnai owners can also find manufacturer guidance on the [Rinnai website](https://www.rinnai.us/).",
      ctaText: "Schedule a Flush",
    },
    {
      id: "areas-we-serve",
      heading: "Olney and Nearby Areas We Serve",
      description:
        "Maven DMV provides tankless water heater service in Olney and the surrounding communities, including Brookeville, Sandy Spring, Ashton, Derwood, Rockville, Silver Spring, and Laytonsville, as well as the rest of Montgomery County and the wider Maryland and Northern Virginia area. Our office is at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850.",
      // The package allows one plain-anchor link to the Montgomery Village page,
      // placed only in this section.
      closing:
        "Explore our full range of [plumbing services](/plumbing), call for [emergency service](/plumbing/emergency-plumbing-rockville-md) when the hot water stops, or see our work in nearby [Montgomery Village](/plumbing/tankless-water-heater-service-montgomery-village-md).",
      ctaText: "Book Tankless Service",
    },
    {
      id: "find-us-on-google",
      heading: "Find Us on Google",
      description:
        "See our location, photos, hours, and customer reviews on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML), and [read our Google reviews](https://share.google/KJudab7Ho272ukUML) before you book.",
      benefitsHeading: "Maven DMV",
      benefits: [
        "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [240.255.4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Google Business Profile: [https://share.google/KJudab7Ho272ukUML](https://share.google/KJudab7Ho272ukUML)",
      ],
      ctaText: "Schedule Tankless Service",
    },
  ],
  faqs: [
    { q: "How often should I have my tankless water heater serviced in Olney?", a: "Once a year is the usual guideline. If you notice hard water spots or your unit supplies a large household or a commercial kitchen, every six months can be a better fit." },
    { q: "How much does tankless water heater service cost in Olney?", a: "Pricing depends on the brand, the unit condition, and whether you need a flush, a repair, or both. We give you a written estimate before any work begins." },
    { q: "Why is my tankless water heater not heating?", a: "The usual causes are scale buildup, a blocked inlet filter, a gas supply issue, a faulty sensor, or a venting problem. A technician has to inspect the unit to pinpoint it." },
    { q: "Can you work on Rinnai units?", a: "Yes. We service Rinnai tankless water heaters, including the RL94, along with other major brands." },
    { q: "Do you provide emergency water heater service in Olney?", a: "Yes. Emergency service is available for urgent plumbing problems. Response times depend on technician availability and your location." },
    { q: "Do you service commercial kitchen water heaters?", a: "Yes. We service tankless systems that feed commercial sinks, dishwashing areas, and prep stations for restaurants and food businesses." },
    { q: "Do I really need to flush my tankless water heater?", a: "Yes. Flushing removes scale that lowers efficiency, triggers error codes, and shortens the life of the heat exchanger." },
  ],
  ctaTitle: "Book Tankless Water Heater Service in Olney",
  ctaDescription:
    "Reliable hot water should not be a guessing game. Maven DMV is licensed, certified, and insured, and we are ready to help your Olney home or business get back to steady hot water.",
};
