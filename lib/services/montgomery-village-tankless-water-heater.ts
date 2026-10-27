import type { ServicePageData } from "@/lib/services/types";

// Communities named in the page's "Where We Work" section; feeds the JSON-LD
// areaServed list.
export const montgomeryVillageAreaServed = [
  "Montgomery Village",
  "Gaithersburg",
  "Rockville",
  "Germantown",
  "Derwood",
  "Olney",
];

// Standalone Montgomery Village tankless water heater landing page, built
// verbatim from the approved SEO content package (primary keyword "tankless
// water heater service Montgomery Village MD"). Copy, headings, and link targets
// are the client's — edit only against an updated package. The package brands
// this page "Maven DMV"; keep that wording.
//
// Served under /plumbing by its own static route at
// app/plumbing/tankless-water-heater-service-montgomery-village-md/. Deliberately
// NOT an entry in lib/services/subcategories.ts — that would make
// generateStaticParams emit a path that already exists and abort `next build`.
export const montgomeryVillageTanklessData: ServicePageData = {
  slug: "plumbing/tankless-water-heater-service-montgomery-village-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Tankless Water Heater Service in Montgomery Village, MD",
  seoTitle: "Tankless Water Heater Service in Montgomery Village, MD | Maven DMV",
  metaDescription:
    "Licensed tankless water heater repair, flushing, and maintenance in Montgomery Village, MD. Upfront pricing, insured techs. Call Maven DMV at 240.255.4794.",
  heroImage: "/images/plumbing/water-heaters.jpeg",
  heroTitle: "Tankless Water Heater Service in Montgomery Village, MD",
  heroDescription:
    "If your hot water has gone lukewarm, cuts out halfway through a shower, or your tankless unit is showing an error code, you want an answer today, not next week. Maven DMV provides tankless water heater repair, flushing, maintenance, and replacement for homes and businesses in Montgomery Village, Maryland. Our technicians are MHIC licensed, background checked, and fully insured. The technician who writes your estimate is the same person who does the work. No hot water right now? Call 240.255.4794 for emergency service or book online.",
  overviewTitle: "What Does Tankless Water Heater Service Include?",
  overview: [
    "Tankless water heater service is the inspection, cleaning, and repair of a water heater that heats water as it flows through the unit instead of storing it in a tank. A full service covers flushing mineral scale out of the heat exchanger, checking gas and venting connections, testing the valves, and confirming the unit reaches the temperature it is set to. Most manufacturers recommend service once a year, and homes with hard water often need it sooner.",
  ],
  offeredServicesTitle: "Tankless Water Heater Services We Offer",
  offeredServices: [
    { icon: "build", name: "Repair", desc: "We diagnose error codes, lukewarm water, temperature swings, ignition trouble, and weak flow. You hear what is wrong and what it will cost before we pick up a tool." },
    { icon: "water_drop", name: "Flushing and descaling", desc: "Minerals in the water collect inside the heat exchanger and make the unit work harder for less heat. We flush it through the service valves with an approved descaling solution to bring performance back." },
    { icon: "event_available", name: "Annual maintenance", desc: "A yearly visit catches small problems early, such as worn connections, a clogged inlet filter, venting issues, and valve wear. It also helps protect your warranty and extends the life of the unit." },
    { icon: "construction", name: "Replacement and installation", desc: "When a unit is past saving, we size a new one to your fixtures and daily demand, then install it to code." },
    { icon: "restaurant", name: "Commercial kitchen hot water", desc: "Restaurants and food businesses depend on steady hot water at the sink for washing and sanitizing. We service tankless systems that feed three compartment sinks and prep areas." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "How Our Service Process Works",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Call or book online", desc: "Tell us the brand, the symptoms, and any error code you see." },
    { num: "02", icon: "search", title: "We arrive and diagnose", desc: "Your technician inspects the unit and finds the cause." },
    { num: "03", icon: "request_quote", title: "You approve the estimate", desc: "We explain the scope and price before starting." },
    { num: "04", icon: "build", title: "We complete the work", desc: "Repair or service is finished and the system is tested." },
    { num: "05", icon: "task_alt", title: "We review it with you", desc: "You hear what we found and what to watch for next." },
  ],
  detailSections: [
    {
      id: "service-visit-checklist",
      heading: "What Happens During a Maven Service Visit",
      description: "Every visit follows a written checklist, so nothing gets skipped:",
      benefitsHeading: "",
      benefits: [
        "Check the control panel and display for error codes",
        "Measure output temperature at the unit and at the fixture",
        "Inspect the inlet and outlet isolation valves",
        "Test the pressure relief valve",
        "Look over gas and water connections for leaks, corrosion, and wear",
        "Inspect the venting and exhaust path",
        "Flush and descale the heat exchanger when it is needed",
        "Walk you through the results and give a written recommendation",
      ],
      ctaText: "Schedule Tankless Service",
    },
    {
      id: "warning-signs",
      heading: "Signs Your Tankless Water Heater Needs Attention",
      benefitsHeading: "",
      benefits: [
        "Water turns lukewarm or runs cold in the middle of use",
        "An error code appears on the display",
        "Hot water takes longer to reach the tap than it used to",
        "You hear popping, rumbling, or banging from the unit",
        "You see mineral crust or small drips around the valves and fittings",
        "Your gas bill climbs with no change in how much hot water you use",
      ],
      closing:
        "If any of these sound familiar, schedule a visit before a small issue turns into a full replacement.",
      ctaText: "Schedule a Visit",
    },
    {
      id: "recent-job-rinnai-rl94",
      heading: "Recent Job: Rinnai RL94 Service",
      description:
        "Our team recently serviced a Rinnai RL94 gas tankless water heater that supplies a commercial kitchen. The control panel read 140°F with the In Use light on. We inspected the isolation valves, the pressure relief valve, and the gas and water connections, then confirmed steady hot water at the three compartment sink, where the sanitizing rinse depends on a consistent temperature. That is the level of detail we bring to every property in Montgomery Village.",
      ctaText: "Book Tankless Service",
    },
    {
      id: "why-choose-maven",
      heading: "Why Montgomery Village Customers Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "**Licensed and certified.** We hold MHIC licensing, and our technicians carry EPA Section 608, OSHA, and Haag inspection credentials. You can confirm a contractor license through the [Maryland Home Improvement Commission](https://labor.maryland.gov/license/mhic/).",
        "**Insured and background checked.** Every technician is screened and covered by liability insurance before entering your home or business.",
        "**Clear pricing.** You get an upfront written estimate before work begins. No surprise fees, and you approve every cost.",
        "**Same day appointments.** Available depending on technician schedules, and we arrive when we say we will.",
        "**Emergency service.** Urgent plumbing problems get priority scheduling. Response times depend on technician availability and your location.",
        "**Workmanship we stand behind.** If something is not right after a visit, tell us and we will make every reasonable effort to fix it.",
        "**[Veteran and first responder savings](/contact).** Veterans, active duty military, and first responders get 10% off all services with valid ID at the time of service.",
      ],
      ctaText: "Request Tankless Service",
    },
    {
      id: "maintenance-pays-off",
      heading: "Why Regular Tankless Maintenance Pays Off",
      description:
        "The [U.S. Department of Energy](https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters) notes that tankless water heaters can last more than 20 years and often use less energy than storage tank models. That long life depends on upkeep. Scale buildup is the most common reason performance drops, and it puts stress on the heat exchanger, which is the most expensive part of the unit. A regular flush keeps the heater efficient and cuts down on repair calls. If you own a Rinnai, the manufacturer also publishes care guidance at [Rinnai](https://www.rinnai.us/).",
      ctaText: "Schedule a Flush",
    },
    {
      id: "where-we-work",
      heading: "Where We Work",
      description:
        "We service tankless water heaters in Montgomery Village and nearby Gaithersburg, Rockville, Germantown, Derwood, and Olney, along with the rest of Montgomery County and the wider Maryland and Northern Virginia area. Our office is at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850.",
      closing:
        "Explore our full range of [plumbing services](/plumbing), or call for [emergency service](/plumbing/emergency-plumbing-rockville-md) when the hot water stops.",
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
    { q: "How often should a tankless water heater be serviced?", a: "Once a year is the standard recommendation. If your water is hard, or the unit supplies a busy household or commercial kitchen, every six months is a safer schedule." },
    { q: "How much does tankless water heater service cost in Montgomery Village?", a: "The cost depends on the brand, the condition of the unit, and whether you need a flush or a repair. Maven gives you a written estimate before any work starts, so you know the price in advance." },
    { q: "Why is my tankless water heater not producing hot water?", a: "Common causes include mineral buildup, a clogged filter, a gas supply problem, a failed sensor, or a venting issue. A technician needs to inspect the unit to confirm which one it is." },
    { q: "Do you service Rinnai tankless water heaters?", a: "Yes. We work on Rinnai models, including the RL94, and on other major tankless brands." },
    { q: "Do you offer emergency water heater service?", a: "Yes. Emergency service is available for urgent plumbing issues. Response times depend on technician availability and your location." },
    { q: "Can you service water heaters in commercial kitchens?", a: "Yes. We service tankless systems that supply commercial sinks, dishwashing stations, and prep areas for restaurants and food businesses." },
    { q: "Is flushing a tankless water heater really necessary?", a: "Yes. Without regular flushing, scale lowers heating efficiency, can trigger error codes, and shortens the life of the unit." },
  ],
  ctaTitle: "Schedule Tankless Water Heater Service Today",
  ctaDescription:
    "Do not wait for the next cold shower. Maven DMV is licensed, certified, and insured, and we are ready to get reliable hot water back in your Montgomery Village home or business.",
};
