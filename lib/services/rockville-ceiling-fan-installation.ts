import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville ceiling-fan-installation landing page, built verbatim from
// the approved SEO content package (Maven-DMV-Ceiling-Fan-Installation-Page.docx).
// Copy, headings, and link targets are the client's — edit only against an
// updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/ceiling-fan-installation-rockville/,
// and adding the slug to subcategoryData would make generateStaticParams emit a
// path that already exists as a static page, which aborts `next build`.
export const rockvilleCeilingFanInstallationData: ServicePageData = {
  slug: "electrical/ceiling-fan-installation-rockville",
  title: "Ceiling Fan Installation in Rockville, MD",
  seoTitle: "Ceiling Fan Installation in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed electricians for ceiling fan installation, replacement, and new wiring in Rockville, MD. Fan rated boxes and clean work. Call (240) 255 4794.",
  heroImage: "/images/electrical/electrical.jpeg",
  heroTitle: "Ceiling Fan Installation in Rockville, MD",
  heroDescription:
    "A ceiling fan keeps a room more comfortable, helps air move, and can ease the load on your cooling and heating system. But a fan is heavy and it spins, so it must be wired and mounted correctly. Maven DMV installs and replaces ceiling fans for homes and businesses in Rockville, MD and across Montgomery County, Maryland. Our licensed electricians check the wiring and the ceiling box first, install the fan securely, and test it before we leave.",
  overviewTitle: "Quick Answer",
  overview: [
    "Ceiling fan installation means mounting a fan to a fan rated ceiling box, connecting it to power and controls, and balancing it so it runs quietly. If a fan is replacing a light, the box and wiring must be checked, because a standard light box may not safely support a moving fan.",
  ],
  offeredServicesTitle: "What Our Ceiling Fan Service Includes",
  offeredServicesSubtitle:
    "You can buy the fan yourself or ask us for guidance on what fits your room. We install most major fan types, and we tell you honestly if a fan you bought is a poor match for the space.",
  offeredServices: [
    { icon: "swap_horiz", name: "Light to fan", desc: "Replacing an existing ceiling light with a new fan." },
    { icon: "autorenew", name: "Fan replacement", desc: "Replacing an old fan with a new one." },
    { icon: "cable", name: "New fan locations", desc: "Installing a fan where there is no fixture, including new wiring." },
    { icon: "inventory_2", name: "Fan rated boxes", desc: "Upgrading or adding a fan rated ceiling box and bracing." },
    { icon: "settings_remote", name: "Controls", desc: "Wall switch, dimmer, or remote control setup." },
    { icon: "light", name: "Light kits", desc: "Fans with light kits, and separate switches for fan and light." },
    { icon: "deck", name: "Outdoor and porch fans", desc: "Outdoor and covered porch fans rated for damp or wet locations." },
    { icon: "construction", name: "Full installation", desc: "Assembly, mounting, balancing, and testing." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "How We Install Your Ceiling Fan",
  steps: [
    { num: "01", icon: "search", title: "Inspect", desc: "We look at the ceiling, the existing wiring, the box, and where the switch is located." },
    { num: "02", icon: "design_services", title: "Plan", desc: "We confirm fan size, mounting height, and control options with you." },
    { num: "03", icon: "power_off", title: "Power off and prepare", desc: "We shut off the circuit, then remove the old fixture if there is one." },
    { num: "04", icon: "hardware", title: "Secure the mount", desc: "We install a fan rated box or bracing if needed." },
    { num: "05", icon: "electrical_services", title: "Wire and assemble", desc: "We connect the wiring, mount the motor, and attach blades and light kit." },
    { num: "06", icon: "fact_check", title: "Balance and test", desc: "We test every speed, the light, the reverse switch, and the wall control, and we check for wobble." },
  ],
  detailSections: [
    {
      id: "the-ceiling-box",
      heading: "The Most Important Detail: The Ceiling Box",
      description:
        "The biggest installation risk is a ceiling box that is not built for a fan. A standard light box holds a fixture that hangs still. A fan adds weight and constant motion, and a weak box can loosen over time or fall. Safe fan installation uses a box and support that are rated for fans. If the existing box is not, we replace it or add bracing between the joists.",
      closing:
        "**Pro tip:** If your fan wobbles, hums, or the ceiling plate looks loose, turn it off and have it checked. A wobbling fan can work its mounting loose over time.",
      ctaText: "Check My Ceiling Box",
    },
    {
      id: "choosing-the-right-fan-size",
      heading: "Choosing the Right Fan Size",
      description:
        "A fan that is too small will not move enough air, and one that is too large can feel overpowering. These general guidelines help you choose.",
      table: {
        columns: ["Room Size", "Typical Fan Blade Span", "Good To Know"],
        rows: [
          ["Up to about 75 square feet", "29 to 36 inches", "Small bedrooms and offices"],
          ["76 to 144 square feet", "36 to 44 inches", "Standard bedrooms"],
          ["145 to 225 square feet", "44 to 50 inches", "Living rooms and larger bedrooms"],
          ["226 to 400 square feet", "50 to 54 inches or larger", "Great rooms and open spaces"],
        ],
      },
      closing:
        "Ceiling height matters too. For safety, blades should be at least 7 feet above the floor, and 8 to 9 feet is ideal. On higher or sloped ceilings, a longer downrod or a sloped ceiling adapter may be needed.",
      ctaText: "Get Help Choosing a Fan",
    },
    {
      id: "fan-direction-and-everyday-use",
      heading: "Fan Direction and Everyday Use",
      description:
        "Most fans have a reverse switch. In warm weather, run the fan so it pushes air down, which creates a cooling breeze for people in the room. Many manufacturers suggest running it counterclockwise when viewed from below in summer. In cold weather, a low speed in the opposite direction can pull air up gently and help mix warm air near the ceiling. A fan cools people, not rooms, so turn it off when you leave. If you notice your cooling system running constantly, read our guide to [24 hour AC repair in Rockville](/hvac/central-air-conditioning-rockville-md) to learn when to call for help.",
      ctaText: "Schedule Service",
    },
    {
      id: "planning-your-installation",
      heading: "Planning Your Installation",
      description:
        "A few decisions before installation day make the result better. Pick the control style you want, such as pull chains, a wall control, or a remote. Decide whether the light and fan should work on separate switches, which often requires an extra wire in the wall. Think about where the fan sits compared with furniture, beds, and lights, so airflow feels pleasant and not like a draft. If you are using a fan from a different room or an older one, tell us, and we will check the mounting hardware and blades for wear before reinstalling it.",
      ctaText: "Plan My Installation",
    },
    {
      id: "common-ceiling-fan-problems-we-fix",
      heading: "Common Ceiling Fan Problems We Fix",
      benefitsHeading: "",
      benefits: [
        "Fan wobbles or makes clicking, humming, or grinding noises",
        "Fan or light does not turn on",
        "Remote or wall control no longer responds",
        "Fan speeds that do not change",
        "A loose canopy or ceiling plate",
        "Breaker trips when the fan starts",
      ],
      closing:
        "Sometimes a repair is simple, such as tightening hardware or replacing a capacitor. In other cases, replacement is the better choice, and we tell you which makes sense.",
      ctaText: "Schedule a Fan Repair",
    },
    {
      id: "safety-and-standards",
      heading: "Safety and Standards",
      description:
        "Fan installation involves electrical connections and overhead weight, so it is best left to licensed professionals. Some projects, especially those with new wiring, may require permits or inspections, and we explain what applies before work starts. For independent safety guidance, see the [Electrical Safety Foundation International](https://www.esfi.org/) and the [National Fire Protection Association](https://www.nfpa.org/).",
      ctaText: "Ask About Your Project",
    },
    {
      id: "related-services",
      heading: "Related Services",
      benefitsHeading: "",
      benefits: [
        "[Electrical repair and installation](/electrical/repair-installation-rockville) for lighting, switches, and new circuits",
        "[Electrical inspections](/electrical/inspections-rockville) to check the whole system",
        "[Outlet replacement](/electrical/outlet-replacement-rockville) for worn or damaged outlets",
        "Our full range of [electrical services](/electrical)",
      ],
      ctaText: "Schedule Service",
    },
    {
      id: "why-customers-choose-maven-dmv",
      heading: "Why Customers Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians for residential and commercial electrical work",
        "Plain language advice and no unnecessary upsells",
        "Clean, careful work with a tested result",
        "24/7 availability for urgent issues",
        "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Read customer feedback on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML), or visit our [home page](/). Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.",
      ctaText: "Schedule Service",
    },
    {
      id: "schedule-your-ceiling-fan-installation",
      heading: "Schedule Your Ceiling Fan Installation",
      benefitsHeading: "",
      benefits: [
        "Phone: [(240) 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Address: 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Hours: Open 24 hours a day, 7 days a week, with 24/7 emergency service",
        "Service area: Within 30 miles of Rockville, across Maryland and Northern Virginia",
      ],
      closing: "Visit our [contact page](/contact).",
      ctaText: "Schedule Service",
    },
  ],
  faqs: [
    { q: "Can you install a ceiling fan where I only have a light?", a: "Often yes. We check that the box is fan rated and the wiring can support a fan, and we upgrade the box if needed." },
    { q: "Can you install a fan where there is no ceiling light?", a: "Yes, in many cases. It requires new wiring and a switch, and the work depends on attic or ceiling access." },
    { q: "Do I need a special box for a ceiling fan?", a: "Yes. A fan needs a box and support rated for the weight and movement of a fan." },
    { q: "Can I use a dimmer to control my fan speed?", a: "Usually not. Standard light dimmers can damage fan motors. We install the correct fan control." },
    { q: "Do you install outdoor ceiling fans?", a: "Yes. Outdoor and porch fans need damp or wet rated models, and we help match the fan to the location." },
    { q: "Why does my ceiling fan wobble?", a: "Common causes include loose screws, unbalanced blades, or a mount that is not secure. We diagnose and fix it." },
  ],
  ctaTitle: "Schedule Your Ceiling Fan Installation in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. Licensed electricians, fan rated boxes, and a tested result.",
};
