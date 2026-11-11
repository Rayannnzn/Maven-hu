import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville sump-pump landing page, built verbatim from the approved
// SEO content package (Maven-DMV-Sump-Pump-Page.docx). Copy, headings, and link
// targets are the client's — edit only against an updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/plumbing/sump-pump-repair-installation-rockville/,
// and adding the slug to subcategoryData would make generateStaticParams emit a
// path that already exists as a static page, which aborts `next build`.
export const rockvilleSumpPumpData: ServicePageData = {
  slug: "plumbing/sump-pump-repair-installation-rockville",
  title: "Sump Pump Repair and Installation in Rockville, MD",
  seoTitle: "Sump Pump Repair and Installation in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed plumbers for sump pump repair, replacement, and installation in Rockville, MD. Battery backup options and 24/7 emergency help. Call (240) 255 4794.",
  heroImage: "/images/plumbing-service-repair.jpg",
  heroTitle: "Sump Pump Repair and Installation in Rockville, MD",
  heroDescription:
    "A sump pump is the device that keeps groundwater out of your basement or crawl space. When it fails during a storm, water can damage floors, walls, stored belongings, and electrical equipment within hours. Maven DMV repairs, replaces, and installs sump pumps for homes and businesses in Rockville, MD and across Montgomery County, Maryland. Call us at the first sign of trouble, and we will help you decide whether a repair or a new pump makes more sense.",
  overviewTitle: "Quick Answer",
  overview: [
    "A sump pump collects water in a pit below your floor and pumps it out and away from your foundation. Most pumps last about 7 to 10 years. If yours is noisy, runs nonstop, will not turn on, or is more than 10 years old, have it checked before the next heavy rain.",
  ],
  offeredServicesTitle: "Simple Maintenance Between Visits",
  offeredServices: [
    { icon: "water_drop", name: "Test with a bucket of water", desc: "Pour a bucket of water into the pit every few months, and confirm the pump starts and empties it." },
    { icon: "swap_vert", name: "Check the float", desc: "Check that the float moves freely and does not touch the pit wall." },
    { icon: "cleaning_services", name: "Clear the pit", desc: "Clear dirt and debris from the pit." },
    { icon: "trending_flat", name: "Check the discharge line", desc: "Make sure the discharge line sends water well away from your foundation and is not blocked or frozen." },
    { icon: "outlet", name: "Use a GFCI outlet", desc: "Plug the pump into a working GFCI protected outlet." },
    { icon: "battery_charging_full", name: "Test the backup battery", desc: "Test your backup battery on a regular schedule." },
  ],
  offeredServicesSubtitle:
    "For general flood preparedness, [Ready.gov](https://www.ready.gov/floods) offers practical guidance. For safety around water and electrical outlets, see the [Electrical Safety Foundation International](https://www.esfi.org/).",
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Sump Pump Repair and Installation Process",
  steps: [
    { num: "01", icon: "manage_search", title: "Inspect", desc: "We check the pit, pump, float switch, check valve, discharge line, and power supply." },
    { num: "02", icon: "water", title: "Test", desc: "We run the pump with water, listen for problems, and confirm it clears the pit fully." },
    { num: "03", icon: "record_voice_over", title: "Explain", desc: "You hear the cause, your options, and the price in plain language." },
    { num: "04", icon: "task_alt", title: "Approve", desc: "Work begins only after you agree to the plan." },
    { num: "05", icon: "plumbing", title: "Repair or install", desc: "We fix the issue or install the new pump, valve, and discharge line." },
    { num: "06", icon: "description", title: "Retest and document", desc: "We test again under real conditions and record the work we completed." },
  ],
  detailSections: [
    {
      id: "sump-pump-problems-we-repair",
      heading: "Sump Pump Problems We Repair",
      description: "The table below shows common symptoms, what usually causes them, and how we fix them.",
      table: {
        columns: ["Symptom", "Likely Cause", "What We Do"],
        rows: [
          ["Pump will not turn on", "Tripped breaker or GFCI, failed switch, dead motor, or unplugged cord", "Restore power, test the circuit, replace the switch or pump"],
          ["Pump runs nonstop", "Stuck float switch, failed check valve, or a very high water table", "Free or replace the float, replace the check valve, check pit size"],
          ["Pump runs but moves little water", "Clogged intake, worn impeller, or a blocked discharge line", "Clean the pump, clear the line, replace worn parts"],
          ["Loud grinding or rattling", "Worn bearings, debris in the pump, or a loose fitting", "Remove debris, replace the pump if the motor is failing"],
          ["Pump cycles on and off rapidly", "Pit too small, bad check valve, or water flowing back into the pit", "Replace the check valve, adjust the float, or resize the pit"],
          ["Water around the pit or basement floor", "Pump failure, frozen or blocked discharge, or overwhelmed capacity", "Emergency repair, discharge fix, or a higher capacity pump"],
        ],
      },
      closing:
        "We test before we replace anything. Many sump pump problems come from a small part, such as a float switch or check valve, and not from the pump itself.",
      ctaText: "Schedule a Sump Pump Repair",
    },
    {
      id: "sump-pump-installation-options",
      heading: "Sump Pump Installation Options",
      description:
        "A new installation starts with the right pump for your basement, your water table, and your budget. Here is how the two main types compare.",
      table: {
        columns: ["Feature", "Pedestal Pump", "Submersible Pump"],
        rows: [
          ["Where it sits", "Motor above the pit, intake in the pit", "Fully inside the pit, underwater"],
          ["Noise", "Louder", "Quieter"],
          ["Lifespan", "Often longer when well maintained", "Generally 7 to 10 years"],
          ["Best for", "Narrow pits and easy access", "Most homes and finished basements"],
          ["Service access", "Easy to see and reach", "Must be lifted out of the pit"],
        ],
      },
      closing:
        "We also install check valves, discharge lines, and sealed pit covers, which reduce moisture, odors, and noise. If you do not have a pit yet, we can discuss creating one.",
      ctaText: "Plan a New Installation",
    },
    {
      id: "battery-backup-and-water-alarms",
      heading: "Battery Backup and Water Alarms",
      description:
        "Heavy storms often cause power outages, which is exactly when your pump is needed most. A battery backup pump takes over when the main pump or the power fails. A water level alarm alerts you before water reaches the floor. We recommend both for finished basements and for homes where flooding would be costly. Backup systems need periodic battery checks, and we explain how to maintain yours.",
      ctaText: "Add Battery Backup",
    },
    {
      id: "repair-or-replace",
      heading: "Repair or Replace?",
      table: {
        columns: ["A Repair Usually Makes Sense When", "Replacement Usually Makes Sense When"],
        rows: [
          ["The pump is under 7 years old", "The pump is 10 years old or older"],
          ["A single part has failed, such as the float switch", "The motor is noisy, overheating, or running constantly"],
          ["The pit and discharge line are in good shape", "The pump has failed more than once recently"],
          ["The pump cleared water well until now", "Your basement has flooded or you plan to finish it"],
        ],
      },
      ctaText: "Get an Honest Recommendation",
    },
    {
      id: "why-sump-pumps-fail-when-you-need-them-most",
      heading: "Why Sump Pumps Fail When You Need Them Most",
      description:
        "Most failures happen during heavy rain, because that is when the pump works hardest. A pump that sat idle for months can have a stuck float or a seized motor. Power outages stop a pump that has no backup. Debris, silt, and small stones can clog the intake, and a frozen or blocked discharge line forces water back into the pit. Regular testing and a yearly inspection catch most of these problems before a storm does.",
      ctaText: "Schedule a Yearly Inspection",
    },
    {
      id: "when-to-call-right-away",
      heading: "When to Call Right Away",
      benefitsHeading: "",
      benefits: [
        "Water is rising in the pit and the pump is silent",
        "You smell mold or see standing water near the pit",
        "The pump is running constantly during dry weather",
        "You hear grinding, rattling, or a burning smell from the motor",
        "The breaker or GFCI outlet for the pump keeps tripping",
      ],
      closing:
        "If water is near electrical outlets or panels, stay away and do not touch the water. Turn off power only if you can reach the breaker safely and dry, and call 911 if anyone is in danger. For other urgent sump pump problems, our emergency line is open 24 hours a day, 7 days a week.",
      ctaText: "Get Urgent Help",
    },
    {
      id: "commercial-sump-pump-service",
      heading: "Commercial Sump Pump Service",
      description:
        "Businesses with basements, mechanical rooms, or lower level storage also depend on dependable pumps. We service commercial sump systems and can inspect them before the rainy season. Standing water can also reach electrical panels and equipment, so our team can coordinate with our [electrical services](/electrical) when needed.",
      ctaText: "Schedule Commercial Service",
    },
    {
      id: "why-choose-maven-dmv",
      heading: "Why Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians for plumbing and electrical work",
        "Plain language advice with no unnecessary upsells",
        "Tested and documented work on every job",
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
    { q: "How do I know if my sump pump is working?", a: "Pour water into the pit. The float should rise, the pump should start, and the water should drain quickly." },
    { q: "How long does a sump pump last?", a: "Most last about 7 to 10 years, depending on use and water conditions." },
    { q: "Do I need a battery backup?", a: "It is a smart addition if power outages are common in your area or if your basement is finished." },
    { q: "Why is my sump pump running when it is not raining?", a: "A stuck float, a failed check valve, or a high water table are the usual causes." },
    { q: "Can you install a sump pump in a crawl space?", a: "In many cases yes. We inspect the space and recommend the right setup." },
  ],
  ctaTitle: "Schedule Sump Pump Service in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. We test before we replace anything and help you decide between repair and a new pump.",
};
