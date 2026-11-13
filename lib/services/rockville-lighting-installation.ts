import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville lighting-installation landing page, built verbatim from the
// approved SEO content package (Maven-DMV-Lighting-Installation-Page.docx). Copy,
// headings, and link targets are the client's — edit only against an updated
// package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/lighting-installation-rockville/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`.
export const rockvilleLightingInstallationData: ServicePageData = {
  slug: "electrical/lighting-installation-rockville",
  title: "Lighting Installation in Rockville, MD",
  seoTitle: "Lighting Installation in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed electricians for indoor and outdoor lighting installation in Rockville, MD. Recessed, pendant, porch, landscape, and commercial lighting. Call (240) 255 4794.",
  heroImage: "/images/electrical/electrical.jpeg",
  heroTitle: "Indoor and Outdoor Lighting Installation in Rockville, MD",
  heroDescription:
    "Good lighting changes how a space looks, feels, and functions. It helps you see clearly while you cook or work, makes entrances welcoming, and makes walkways safer after dark. Maven DMV installs indoor and outdoor lighting for homes and businesses in Rockville, MD and across Montgomery County, Maryland. Our licensed electricians plan the wiring, choose fixtures that suit the location, install them securely, and test everything before we leave.",
  overviewTitle: "Quick Answer",
  overview: [
    "Lighting installation means planning, wiring, mounting, and testing new fixtures, switches, and controls so they work safely and look the way you intended. Indoor lighting focuses on comfort and function, while outdoor lighting must also handle moisture, temperature changes, and ground fault protection.",
  ],
  offeredServicesTitle: "Indoor Lighting We Install",
  offeredServicesSubtitle:
    "Many indoor projects need new wiring or a new switch location, not just a fixture swap. We check the existing circuit, the ceiling space, and the load before we start.",
  offeredServices: [
    { icon: "light", name: "Recessed lights", desc: "Recessed lights, also called can lights, in ceilings." },
    { icon: "emoji_objects", name: "Pendant lights", desc: "Pendant lights over kitchen islands, dining tables, and entries." },
    { icon: "auto_awesome", name: "Chandeliers and statement fixtures", desc: "Chandeliers and statement fixtures, including help with safe support." },
    { icon: "linear_scale", name: "Track and rail lighting", desc: "Track lighting and rail lighting." },
    { icon: "kitchen", name: "Under cabinet lighting", desc: "Under cabinet lighting for kitchens and workspaces." },
    { icon: "wb_iridescent", name: "Wall sconces", desc: "Wall sconces for hallways, bathrooms, and bedrooms." },
    { icon: "bathtub", name: "Vanity and bathroom lighting", desc: "Vanity and bathroom lighting." },
    { icon: "inventory_2", name: "Closet, pantry, and basement lighting", desc: "Closet, pantry, and basement lighting." },
    { icon: "tune", name: "Dimmers and smart controls", desc: "Dimmers, smart switches, and multi location controls." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "How We Install Your Lighting",
  steps: [
    { num: "01", icon: "directions_walk", title: "Walk the space", desc: "We look at the room or property, the ceiling and wall conditions, and the existing wiring." },
    { num: "02", icon: "design_services", title: "Plan the layout", desc: "We discuss fixture types, placement, brightness, and switch locations with you." },
    { num: "03", icon: "electrical_services", title: "Check the circuit", desc: "We confirm that the circuit can handle the load and that protection is correct." },
    { num: "04", icon: "construction", title: "Install safely", desc: "We shut off power, run wiring, mount fixtures securely, and seal outdoor connections." },
    { num: "05", icon: "toggle_on", title: "Set up controls", desc: "We install switches, dimmers, timers, or sensors as planned." },
    { num: "06", icon: "fact_check", title: "Test and explain", desc: "We test every fixture and show you how the controls work." },
  ],
  detailSections: [
    {
      id: "outdoor-lighting-we-install",
      heading: "Outdoor Lighting We Install",
      benefitsHeading: "",
      benefits: [
        "Porch, entry, and garage lights",
        "Post lights and lamp posts",
        "Wall mounted lights and lanterns",
        "Landscape and pathway lighting",
        "Deck, patio, and stair lighting",
        "Soffit and eave lighting",
        "Floodlights and area lights",
        "Commercial building lighting for entrances, signs, and parking areas",
      ],
      closing:
        "Outdoor fixtures face rain, heat, cold, and moisture every day, so they must be rated for the location. We use weather rated materials, sealed connections, and ground fault protection where required. If your main goal is safety and visibility around your property, see our page on [security lighting installation](/electrical/security-lighting-rockville).",
      ctaText: "Plan My Outdoor Lighting",
    },
    {
      id: "which-light-fits-which-space",
      heading: "Which Light Fits Which Space?",
      table: {
        columns: ["Space", "Common Options", "Good To Know"],
        rows: [
          ["Kitchen", "Recessed lights, pendants, under cabinet lights", "Layer task lighting for counters and softer lighting for the room"],
          ["Living room and bedroom", "Recessed lights, sconces, ceiling fixtures", "Dimmers let you adjust the mood"],
          ["Bathroom", "Vanity lights, moisture rated fixtures", "Use fixtures rated for damp areas"],
          ["Basement", "Recessed lights, surface mounts", "Check ceiling height and moisture"],
          ["Front entry and porch", "Wall lanterns, hanging fixtures", "Match scale to the door and wall"],
          ["Backyard and patio", "Wall lights, string or deck lights, path lights", "Plan power sources before landscaping"],
          ["Driveway and parking", "Floodlights, wall packs, post lights", "Aim to reduce glare and shadows"],
        ],
      },
      ctaText: "Get a Lighting Plan",
    },
    {
      id: "choosing-brightness-and-color",
      heading: "Choosing Brightness and Color",
      description:
        "Brightness is measured in lumens, not watts. A kitchen or workspace usually needs more light than a bedroom. Color temperature is measured in kelvins. Warm light around 2700 to 3000 kelvins feels cozy and suits living rooms, bedrooms, and most home exteriors. Cooler light around 3500 to 4000 kelvins or more feels crisp and is common in kitchens, garages, offices, and commercial spaces. Mixing very different colors in one room can look uneven, so we recommend choosing one color temperature per space.",
      closing:
        "**Pro tip:** Not every LED bulb works with every dimmer. If lights buzz, flicker, or will not dim smoothly, the dimmer and the fixture may not be compatible. We match them during installation.",
      ctaText: "Ask About Fixtures",
    },
    {
      id: "why-led-lighting-is-worth-considering",
      heading: "Why LED Lighting Is Worth Considering",
      description:
        "LED fixtures use much less electricity than older incandescent and halogen lighting, last far longer, and give off less heat. That matters in recessed ceilings and outdoor fixtures that stay on for hours. For general information on efficient lighting, the [U.S. Department of Energy](https://www.energy.gov/energysaver/lighting-choices-save-you-money) offers helpful guidance. We can retrofit existing fixtures to LED or install new LED fixtures, and we tell you honestly when a simple bulb swap is enough.",
      ctaText: "Upgrade to LED",
    },
    {
      id: "recessed-lighting-details",
      heading: "Recessed Lighting Details",
      description:
        "Recessed lights are popular because they sit flush with the ceiling, but they need careful planning. Spacing affects how even the light looks, and fixtures in insulated ceilings must be rated for contact with insulation. Cutting into a ceiling also means avoiding joists, pipes, ducts, and existing wiring. We plan the layout, check what is above the ceiling, and patch or coordinate finishing as agreed.",
      ctaText: "Plan Recessed Lighting",
    },
    {
      id: "commercial-lighting-for-businesses",
      heading: "Commercial Lighting for Businesses",
      description:
        "Restaurants, offices, and retail stores rely on lighting for safety, customer experience, and productivity. We install and repair interior lighting, exterior entrances, and parking area lighting, and we aim to keep disruption low. Because our team also works on HVAC and commercial equipment, we can handle electrical needs around kitchens, rooftops, and mechanical spaces in the same visit.",
      ctaText: "Light My Business",
    },
    {
      id: "safety-and-standards",
      heading: "Safety and Standards",
      description:
        "Lighting work involves live wiring, ladders, and overhead mounting, and mistakes can cause shock, fire, or falling fixtures. Some installations need permits or inspections, and we explain what applies before work begins. For independent safety information, see the [Electrical Safety Foundation International](https://www.esfi.org/) and the [National Fire Protection Association](https://www.nfpa.org/).",
      ctaText: "Ask About Your Project",
    },
    {
      id: "related-services",
      heading: "Related Services",
      benefitsHeading: "",
      benefits: [
        "[Security lighting installation and repair](/electrical/security-lighting-rockville) for sensors, floodlights, and parking areas",
        "[Ceiling fan installation](/electrical/ceiling-fan-installation-rockville) for rooms that need airflow and light",
        "[Electrical repair and installation](/electrical/repair-installation-rockville) for switches, outlets, and new circuits",
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
      id: "schedule-your-lighting-installation",
      heading: "Schedule Your Lighting Installation",
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
    { q: "Can you add recessed lights where there are none?", a: "Often yes. We check the ceiling space, the wiring route, and the circuit load before recommending a layout." },
    { q: "Do outdoor lights need special fixtures?", a: "Yes. Outdoor fixtures should be rated for damp or wet locations, and outdoor circuits usually need ground fault protection." },
    { q: "Can you replace my old fixtures with LED?", a: "Yes. We can retrofit or replace fixtures and confirm that dimmers and controls work with them." },
    { q: "How many recessed lights do I need in a room?", a: "It depends on the ceiling height, the room size, and how you use the space. We recommend a layout during the visit." },
    { q: "Can you install landscape lighting?", a: "We install pathway and landscape lighting on suitable power sources. We discuss the layout and power during your visit." },
    { q: "Can you install lighting for a business?", a: "Yes. We handle interior, exterior, and parking area lighting for commercial properties." },
    { q: "Why do my new LED lights flicker?", a: "The cause is often dimmer compatibility, a loose connection, or a fixture issue. We diagnose and fix it." },
  ],
  ctaTitle: "Schedule Your Lighting Installation in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. Licensed electricians, 24/7 for urgent issues, serving Rockville and 30 miles around.",
};
