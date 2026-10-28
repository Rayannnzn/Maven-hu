import type { ServicePageData } from "@/lib/services/types";

// Communities named in the page's "Serving Potomac and Neighboring Communities"
// section; feeds the JSON-LD areaServed list.
export const potomacAreaServed = [
  "Potomac",
  "Bethesda",
  "Cabin John",
  "North Potomac",
  "Travilah",
  "Darnestown",
  "Rockville",
];

// Standalone Potomac tankless water heater landing page, built verbatim from the
// approved SEO content package (primary keyword "tankless water heater repair
// Potomac MD"). Copy, headings, and link targets are the client's — edit only
// against an updated package. The package brands this page "Maven DMV"; keep
// that wording. This page leads with repair and maintenance so it does not
// compete with the service-led Montgomery Village and Olney pages; never copy
// text between the city pages.
//
// Served under /plumbing by its own static route at
// app/plumbing/tankless-water-heater-repair-potomac-md/. Deliberately NOT an
// entry in lib/services/subcategories.ts — that would make generateStaticParams
// emit a path that already exists and abort `next build`.
export const potomacTanklessData: ServicePageData = {
  slug: "plumbing/tankless-water-heater-repair-potomac-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Tankless Water Heater Repair in Potomac, MD",
  seoTitle: "Tankless Water Heater Repair in Potomac, MD | Maven DMV",
  metaDescription:
    "Need tankless water heater repair or maintenance in Potomac, MD? Licensed, insured technicians and written estimates. Call Maven DMV at 240.255.4794.",
  heroImage: "/images/plumbing/water-heaters.jpeg",
  heroTitle: "Tankless Water Heater Repair in Potomac, MD",
  heroDescription:
    "Larger homes ask a lot of a water heater. Several bathrooms, a busy kitchen, a laundry room, and guests all pulling hot water at once can expose weak points in a tankless system fast. Maven DMV repairs and maintains tankless water heaters for homes and businesses in Potomac, Maryland. Our technicians are MHIC licensed, background checked, and fully insured, and the technician who prices your job is the one who completes it. Cold water where hot should be? Call 240.255.4794 for emergency service or book online.",
  overviewTitle: "What Usually Goes Wrong With a Tankless Unit",
  overview: [
    "A tankless water heater heats water on the way through, so every part of the path has to work at the same moment. When one piece falters, you notice it right away. In our experience, the problems come down to a short list, covered just below.",
  ],
  offeredServicesTitle: "Our Repair and Maintenance Work in Potomac",
  offeredServices: [
    { icon: "build", name: "Diagnostic and repair", desc: "We read error codes, test temperature and flow, and trace the fault. You get a clear explanation and a written price before we start." },
    { icon: "water_drop", name: "Descaling flush", desc: "We circulate an approved solution through the unit using the service valves, then rinse it clean. This restores heat transfer and often clears recurring faults." },
    { icon: "event_available", name: "Preventive maintenance", desc: "Regular visits keep small wear items from becoming emergencies and help protect your manufacturer warranty." },
    { icon: "speed", name: "Flow and demand reviews", desc: "If your household has grown or you added fixtures, we check whether the current unit still matches your demand, and we say so honestly if it does not." },
    { icon: "construction", name: "Replacement", desc: "When repair is no longer the smart choice, we recommend a properly sized replacement and install it to code." },
    { icon: "business", name: "Commercial hot water", desc: "We also service tankless systems for offices, restaurants, and other businesses that rely on steady hot water." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "How We Work",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Tell us what is happening", desc: "Call or book online with the brand, symptoms, and any error code." },
    { num: "02", icon: "search", title: "We inspect", desc: "A technician arrives on schedule and diagnoses the unit." },
    { num: "03", icon: "request_quote", title: "You approve", desc: "We present the scope and cost in writing." },
    { num: "04", icon: "build", title: "We fix it", desc: "The repair or service is completed and tested." },
    { num: "05", icon: "task_alt", title: "We explain", desc: "You hear what we found and how to keep the unit healthy." },
  ],
  detailSections: [
    {
      // The package's bolded problem list under "What Usually Goes Wrong";
      // overview holds paragraphs only, so the list lives here.
      id: "common-problems",
      heading: "The Short List of Tankless Problems",
      benefitsHeading: "",
      benefits: [
        "**Mineral scale.** Deposits build up on the heat exchanger and cut heat output.",
        "**Blocked filters.** A clogged inlet screen limits flow and can set off a fault.",
        "**Gas or ignition trouble.** The burner may fail to light, or it may shut off early.",
        "**Venting problems.** Restricted exhaust makes the unit stop for safety.",
        "**Sensor and valve wear.** Aging parts report the wrong temperature or leak at the fittings.",
      ],
      closing:
        "Because several of these look alike from the faucet, we confirm the cause with a proper inspection before recommending any repair.",
      ctaText: "Schedule a Diagnosis",
    },
    {
      id: "inside-a-maven-visit",
      heading: "Inside a Maven Visit",
      description: "Each appointment follows the same written checklist:",
      benefitsHeading: "",
      benefits: [
        "Check the display and any stored error codes",
        "Measure hot water temperature at the unit and at a fixture",
        "Inspect the isolation valves on the inlet and outlet",
        "Test the pressure relief valve",
        "Look for leaks, corrosion, and wear on gas and water connections",
        "Examine the venting and exhaust path",
        "Descale the heat exchanger when it is needed",
        "Go over the findings with you and provide a written recommendation",
      ],
      ctaText: "Schedule Tankless Repair",
    },
    {
      id: "time-to-call",
      heading: "How to Tell It Is Time to Call",
      description: "Do not wait for a complete failure. Call us if you see any of these:",
      benefitsHeading: "",
      benefits: [
        "Hot water cuts out when a second fixture opens",
        "The unit shuts off during a shower and restarts later",
        "An error code keeps returning after you reset the unit",
        "Water takes noticeably longer to warm up",
        "You hear banging or rumbling from the heater",
        "You spot drips, crust, or discoloration near the valves",
      ],
      ctaText: "Schedule a Visit",
    },
    {
      id: "recent-job-rinnai-rl94",
      heading: "A Recent Rinnai RL94 Job",
      description:
        "Our team recently serviced a Rinnai RL94 gas tankless water heater that feeds a commercial kitchen. The panel showed 140°F with the In Use light active. We went through the isolation valves, the pressure relief valve, and the gas and water connections, then verified hot water delivery at the three compartment sink. Steady temperature matters there because sanitizing depends on it. Whether the heater serves a restaurant or a Potomac family home, we apply the same level of care.",
      ctaText: "Book Tankless Repair",
    },
    {
      id: "why-choose-maven",
      heading: "What Sets Maven DMV Apart",
      benefitsHeading: "",
      benefits: [
        "**Credentials you can verify.** We hold MHIC licensing, and our technicians carry EPA Section 608, OSHA, and Haag inspection credentials. Check any contractor through the [Maryland Home Improvement Commission](https://labor.maryland.gov/license/mhic/).",
        "**Screened and insured.** Every technician is background checked and covered by liability insurance.",
        "**No surprises on price.** You receive an upfront written estimate and approve every cost before work starts.",
        "**Same day options.** Same day appointments are available depending on technician availability.",
        "**Emergency help.** Urgent plumbing problems get priority scheduling. Response times depend on technician availability and your location.",
        "**Accountability.** If something is not right after we leave, tell us and we will make every reasonable effort to make it right.",
        "**[Savings for service members](/contact).** Veterans, active duty military, and first responders get 10% off all services with valid ID at the time of service.",
      ],
      ctaText: "Request Tankless Repair",
    },
    {
      id: "routine-care",
      heading: "The Case for Routine Care",
      description:
        "The [U.S. Department of Energy](https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters) reports that tankless water heaters can last more than 20 years, which is longer than most storage tank models. That lifespan depends on maintenance. Scale and neglected filters are the usual reasons a good unit starts to struggle. Regular service is far cheaper than replacing a heat exchanger, and it keeps hot water consistent for your household. Rinnai owners can find additional product guidance on the [Rinnai website](https://www.rinnai.us/).",
      ctaText: "Schedule Maintenance",
    },
    {
      id: "areas-we-serve",
      heading: "Serving Potomac and Neighboring Communities",
      description:
        "We take service calls in Potomac and the nearby areas of Bethesda, Cabin John, North Potomac, Travilah, Darnestown, and Rockville, along with the rest of Montgomery County and the wider Maryland and Northern Virginia region. Our office is at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850.",
      // Cross-links to other city pages must use a plain phrase, never the
      // target page's keyword, and only in this section (per the package).
      closing:
        "Explore our full range of [plumbing services](/plumbing), call for [emergency service](/plumbing/emergency-plumbing-rockville-md) when the hot water stops, or visit [our Bethesda service area](/plumbing/commercial-tankless-water-heater-service-bethesda-md).",
      ctaText: "Book Tankless Repair",
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
      ctaText: "Schedule Tankless Repair",
    },
  ],
  faqs: [
    { q: "How do I know if my tankless water heater needs repair or just a flush?", a: "If the problem is lukewarm water, slow heating, or a scale related error code, a flush often solves it. If the unit will not ignite, leaks, or keeps faulting after a flush, it likely needs a repair. An inspection tells you which." },
    { q: "What does tankless water heater repair cost in Potomac?", a: "The price depends on the part, the brand, and the labor involved. We always provide a written estimate before starting, so you can decide with the full picture." },
    { q: "Can a tankless water heater keep up with a large home?", a: "Often yes, if it is sized for your fixtures and flow. If hot water fades when several outlets run together, we can review the demand and suggest the best fix." },
    { q: "Do you repair Rinnai tankless water heaters?", a: "Yes. We repair and maintain Rinnai units, including the RL94, as well as other major brands." },
    { q: "Can you handle an emergency with no hot water?", a: "Yes. Emergency service is available for urgent plumbing issues, and response times depend on technician availability and your location." },
    { q: "Is yearly maintenance worth it?", a: "Yes. A yearly visit keeps scale in check, catches worn parts early, and helps protect your warranty." },
    { q: "Do you service business water heaters in Potomac?", a: "Yes. We work on tankless systems for restaurants, offices, and other commercial properties." },
  ],
  ctaTitle: "Get Your Hot Water Back",
  ctaDescription:
    "Whether you need a quick diagnosis or a full descaling, Maven DMV is ready to help your Potomac home or business. We are licensed, certified, and insured, and we put every estimate in writing.",
};
