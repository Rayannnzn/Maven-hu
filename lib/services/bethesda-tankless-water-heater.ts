import type { ServicePageData } from "@/lib/services/types";

// Communities named in the page's "Bethesda and Surrounding Areas" section;
// feeds the JSON-LD areaServed list.
export const bethesdaAreaServed = [
  "Bethesda",
  "Chevy Chase",
  "North Bethesda",
  "Kensington",
  "Garrett Park",
  "Cabin John",
  "Silver Spring",
  "Rockville",
];

// Standalone Bethesda tankless water heater landing page, built verbatim from
// the approved SEO content package (primary keyword "commercial tankless water
// heater service Bethesda MD"). Copy, headings, and link targets are the
// client's — edit only against an updated package. The package brands this page
// "Maven DMV"; keep that wording. This page leads with commercial and restaurant
// hot water so it does not compete with the other city pages; never copy text
// between them.
//
// Served under /plumbing by its own static route at
// app/plumbing/commercial-tankless-water-heater-service-bethesda-md/.
// Deliberately NOT an entry in lib/services/subcategories.ts — that would make
// generateStaticParams emit a path that already exists and abort `next build`.
export const bethesdaTanklessData: ServicePageData = {
  slug: "plumbing/commercial-tankless-water-heater-service-bethesda-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Commercial and Residential Tankless Water Heater Service in Bethesda, MD",
  seoTitle: "Commercial Tankless Water Heater Service, Bethesda MD",
  metaDescription:
    "Commercial and residential tankless water heater service in Bethesda, MD. Licensed, insured technicians and written estimates. Call Maven DMV: 240.255.4794.",
  heroImage: "/images/plumbing/plumbingcom.jpg",
  heroTitle: "Commercial and Residential Tankless Water Heater Service in Bethesda, MD",
  heroDescription:
    "Bethesda runs on busy kitchens, offices, medical suites, condos, and townhomes, and every one of them depends on hot water that shows up on time. Maven DMV services tankless water heaters for Bethesda businesses and households, from a restaurant dish station to a single family bathroom. Our technicians are MHIC licensed, background checked, and fully insured, and the technician who writes your estimate performs the work. Lost hot water in the middle of business? Call 240.255.4794 for emergency service or book online.",
  overviewTitle: "Why Commercial Kitchens Need Dependable Tankless Service",
  overview: [
    "In a food business, hot water is not a comfort feature. Staff use it for handwashing, dishwashing, and the rinse step at a three compartment sink, and inspectors expect it to be available during service. When a tankless unit loses output, the kitchen slows down or stops. Scale inside the heat exchanger, a clogged inlet filter, or a worn valve can all cause that, and each one is easier and cheaper to fix when caught early. We plan visits around your service hours whenever we can, so downtime stays short.",
  ],
  offeredServicesTitle: "What We Service in Bethesda",
  offeredServices: [
    { icon: "restaurant", name: "Restaurants and food service", desc: "We maintain and repair tankless systems feeding prep sinks, dish stations, and handwashing sinks." },
    { icon: "business", name: "Offices and medical suites", desc: "Steady hot water for restrooms, break rooms, and cleaning needs." },
    { icon: "apartment", name: "Condos and townhomes", desc: "Compact tankless units are common in tighter spaces, and they need the same care as larger systems. We service the unit, the venting, and the shutoff valves." },
    { icon: "home", name: "Single family homes", desc: "Repairs, flushing, and maintenance for gas tankless units, including popular Rinnai models." },
    { icon: "construction", name: "Replacement and installation", desc: "When a unit has reached the end of its life, we help you pick the right size and install it to code." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Process",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Reach out", desc: "Call or book online and describe the symptoms, brand, and any error code." },
    { num: "02", icon: "search", title: "Inspection", desc: "A technician arrives on schedule and diagnoses the system." },
    { num: "03", icon: "request_quote", title: "Estimate", desc: "You receive the scope and cost in writing before we start." },
    { num: "04", icon: "build", title: "Work", desc: "We complete the service or repair and test the results." },
    { num: "05", icon: "task_alt", title: "Report", desc: "We explain what we found and recommend next steps." },
  ],
  detailSections: [
    {
      id: "how-a-visit-works",
      heading: "How a Maven Visit Works for Your Business",
      description: "We follow a written checklist so every system gets the same thorough review:",
      benefitsHeading: "",
      benefits: [
        "Check the display and stored error codes",
        "Test temperature at the unit and at the sink or fixture it supplies",
        "Inspect inlet and outlet isolation valves",
        "Test the pressure relief valve",
        "Examine gas and water connections for leaks, corrosion, and wear",
        "Review the venting and exhaust path",
        "Flush and descale the heat exchanger when needed",
        "Give you a written summary and recommendation",
      ],
      ctaText: "Schedule Tankless Service",
    },
    {
      id: "warning-signs",
      heading: "Warning Signs to Watch For",
      benefitsHeading: "",
      benefits: [
        "Water at the sink never gets as hot as it used to",
        "Hot water fades when more than one fixture runs",
        "The display shows an error code or the unit shuts itself off",
        "You hear rumbling or popping from the heater",
        "You see crust, moisture, or drips around the valves",
        "Your gas costs climb with no change in use",
      ],
      closing:
        "For a business, the cost of waiting is lost time and unhappy customers. A quick inspection is usually the smarter move.",
      ctaText: "Schedule an Inspection",
    },
    {
      id: "featured-job-rinnai-rl94",
      heading: "Featured Job: Rinnai RL94 in a Commercial Kitchen",
      description:
        "We recently serviced a Rinnai RL94 gas tankless water heater that supplies a commercial kitchen. The control panel read 140°F with the In Use light on. Our technician inspected the isolation valves, pressure relief valve, and the gas and water connections, and then checked hot water delivery at the three compartment sink where the sanitizing rinse takes place. Reliable temperature at that sink keeps the kitchen running smoothly, and it is the exact kind of detail we check for every Bethesda client.",
      ctaText: "Book Commercial Service",
    },
    {
      id: "why-choose-maven",
      heading: "Why Bethesda Clients Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "**Licensed and certified.** We hold MHIC licensing, and our technicians carry EPA Section 608, OSHA, and Haag inspection credentials. You can confirm licensing with the [Maryland Home Improvement Commission](https://labor.maryland.gov/license/mhic/).",
        "**Insured and screened.** Each technician is background checked and covered by liability insurance before entering your property.",
        "**Upfront written pricing.** You see the estimate before we begin, and you approve every cost.",
        "**Same day appointments.** Available depending on technician availability.",
        "**Emergency service.** Urgent plumbing issues receive priority scheduling. Response times depend on technician availability and your location.",
        "**We stand behind our work.** If something is not right, let us know and we will make every reasonable effort to correct it.",
        "**[Discount for veterans and first responders](/contact).** Veterans, active duty military, and first responders receive 10% off all services with valid ID at the time of service.",
      ],
      ctaText: "Request Tankless Service",
    },
    {
      id: "preventive-maintenance",
      heading: "Preventive Maintenance Costs Less Than Downtime",
      description:
        "The [U.S. Department of Energy](https://www.energy.gov/energysaver/tankless-or-demand-type-water-heaters) says tankless water heaters can last more than 20 years and often use less energy than storage tank models. Units that run all day, like those in restaurants, build scale faster, so they tend to benefit from more frequent flushing. A scheduled maintenance plan helps you avoid emergency calls and protects the heat exchanger, the most expensive part of the unit. Rinnai owners can find manufacturer information on the [Rinnai website](https://www.rinnai.us/).",
      ctaText: "Schedule Maintenance",
    },
    {
      id: "areas-we-serve",
      heading: "Bethesda and Surrounding Areas",
      description:
        "We serve Bethesda and nearby Chevy Chase, North Bethesda, Kensington, Garrett Park, Cabin John, Silver Spring, and Rockville, along with the rest of Montgomery County and the wider Maryland and Northern Virginia area. Our office is at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850.",
      // Cross-links to other city pages must use a plain phrase, never the
      // target page's keyword, and only in this section (per the package).
      closing:
        "Explore our [commercial services](/commercial) and full range of [plumbing services](/plumbing), call for [emergency service](/plumbing/emergency-plumbing-rockville-md) when the hot water stops, or visit [our Potomac service area](/plumbing/tankless-water-heater-repair-potomac-md).",
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
    { q: "How often should a restaurant tankless water heater be serviced?", a: "Units that run all day typically benefit from service every six months, or more often if your water is hard. A technician can set a schedule after inspecting your unit." },
    { q: "Can you work around my business hours?", a: "We plan visits around your hours whenever we can. Tell us when you are open and we will do our best to limit disruption." },
    { q: "How much does commercial tankless service cost in Bethesda?", a: "The price depends on the unit, how many fixtures it supplies, and whether you need a flush or a repair. We provide a written estimate before work begins." },
    { q: "Do you service Rinnai tankless water heaters?", a: "Yes. We service Rinnai units, including the RL94, and other major brands." },
    { q: "What if my hot water fails in the middle of the day?", a: "Call us right away. Emergency service is available for urgent plumbing issues, and response times depend on technician availability and your location." },
    { q: "Do you also help homeowners and condo owners?", a: "Yes. We service tankless units in single family homes, condos, and townhomes across Bethesda." },
    { q: "Why does my tankless unit throw an error code?", a: "Codes often point to scale, flow restrictions, ignition problems, or venting issues. A technician reads the code, inspects the unit, and confirms the real cause." },
  ],
  ctaTitle: "Schedule Service in Bethesda",
  ctaDescription:
    "Keep your kitchen, office, or home running with dependable hot water. Maven DMV is licensed, certified, and insured, and we put every estimate in writing.",
};
