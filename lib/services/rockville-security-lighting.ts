import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville security-lighting landing page, built verbatim from the
// approved SEO content package (Maven-DMV-Security-Lighting-Page.docx). Copy,
// headings, and link targets are the client's — edit only against an updated
// package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/security-lighting-rockville/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`.
export const rockvilleSecurityLightingData: ServicePageData = {
  slug: "electrical/security-lighting-rockville",
  title: "Security Lighting in Rockville, MD",
  seoTitle: "Security Lighting Installation in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed electricians install and repair security lighting for homes and businesses in Rockville, MD. Motion sensors, floodlights, and parking lot lighting. Call (240) 255 4794.",
  heroImage: "/images/electrical/electrical.jpeg",
  heroTitle: "Security Lighting Installation and Repair in Rockville, MD",
  heroDescription:
    "Good lighting helps you see who is at your door, move safely at night, and discourage unwanted activity around your property. Maven DMV designs, installs, and repairs security lighting for homes and businesses in Rockville, MD and across Montgomery County, Maryland. Our licensed electricians focus on safe wiring, weather rated fixtures, and coverage that fits your property. Security lighting is one part of our full range of [electrical services](/electrical).",
  overviewTitle: "What Is Security Lighting?",
  overview: [
    "Security lighting is outdoor or perimeter lighting placed to improve visibility around entrances, walkways, driveways, parking areas, and building sides. It can run on a switch, a timer, a dusk to dawn sensor, or a motion sensor. The goal is to remove dark spots where people can hide or trip, and to make activity easier to notice. Lighting alone does not guarantee protection, but it is one of the simplest and most useful layers of property safety.",
  ],
  offeredServicesTitle: "Types of Security Lighting We Install",
  offeredServices: [
    { icon: "sensors", name: "Motion sensor lights", desc: "They turn on when movement is detected, which saves energy and draws attention to anyone approaching." },
    { icon: "flare", name: "Floodlights", desc: "They cover wide areas such as driveways, yards, loading docks, and building sides." },
    { icon: "nights_stay", name: "Dusk to dawn lights", desc: "A photocell turns them on at sunset and off at sunrise, with no one needing to remember a switch." },
    { icon: "door_front", name: "Entry and porch lighting", desc: "Bright, well placed fixtures help you see visitors and deliveries clearly." },
    { icon: "stairs", name: "Pathway and step lighting", desc: "Low glare lighting reduces trip and fall risks." },
    { icon: "local_parking", name: "Wall pack and parking lot lighting", desc: "Commercial fixtures that light lots, rear entrances, and service areas." },
    { icon: "lightbulb", name: "LED upgrades", desc: "Efficient LED fixtures replace older bulbs, last longer, and cost less to run." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "How We Plan and Install Security Lighting",
  steps: [
    { num: "01", icon: "directions_walk", title: "Walk the property", desc: "We check entrances, dark areas, existing wiring, and mounting surfaces, ideally at dusk so we see real conditions." },
    { num: "02", icon: "light", title: "Choose the right fixtures", desc: "We match brightness, beam spread, and color temperature to the space." },
    { num: "03", icon: "settings_remote", title: "Plan power and controls", desc: "We decide between sensors, timers, and photocells, and confirm the circuit can handle the load." },
    { num: "04", icon: "construction", title: "Install safely", desc: "We use weather rated fixtures, sealed connections, and proper support for each mounting location." },
    { num: "05", icon: "tune", title: "Aim and test", desc: "We adjust sensor range and light direction, then test everything after dark when possible." },
    { num: "06", icon: "school", title: "Show you how it works", desc: "You learn the settings, so you can adjust them later." },
  ],
  detailSections: [
    {
      id: "security-lighting-for-homes",
      heading: "Security Lighting for Homes",
      description:
        "Homeowners in Rockville often ask us to light the front door, garage, driveway, side yards, and the back of the house. We look at how you use the property, where shadows fall, and which areas are hardest to see from inside. Then we recommend fixture types and placement that give useful coverage without blasting light into your neighbors windows or your own bedrooms. We can also repair existing lights that flicker, stay on all day, or no longer respond to motion.",
      ctaText: "Light My Home",
    },
    {
      id: "security-lighting-for-businesses",
      heading: "Security Lighting for Businesses",
      description:
        "Restaurants, offices, retail stores, and warehouses need lighting that protects employees, customers, and inventory after dark. We install and service lighting at entrances, rear doors, dumpster areas, loading zones, and parking lots. Reliable lighting helps staff close up safely and helps customers feel comfortable arriving after sunset. Because our team also services HVAC and commercial equipment, we can often handle rooftop and exterior electrical needs in one visit.",
      ctaText: "Light My Business",
    },
    {
      id: "why-placement-and-brightness-matter",
      heading: "Why Placement and Brightness Matter",
      description:
        "More light is not always better. Glare can make it harder to see, and a light aimed the wrong way can create deeper shadows nearby. Fixtures mounted too low are easy to tamper with, while fixtures mounted too high may miss entry points. We aim for even coverage, shielded fixtures that point downward, and sensor settings that avoid false triggers from passing cars, trees, or small animals. Warmer or neutral color temperatures are often more comfortable around homes, while cooler white light is common in commercial lots.",
      ctaText: "Get a Lighting Plan",
    },
    {
      id: "repair-when-security-lights-stop-working",
      heading: "Repair: When Security Lights Stop Working",
      description: "Outdoor fixtures face rain, heat, cold, and moisture every day. Common problems include:",
      benefitsHeading: "",
      benefits: [
        "Lights that will not turn on or flicker at night",
        "Motion sensors that never trigger or trigger constantly",
        "Lights that stay on during the day because of a failed photocell",
        "Water inside a fixture or a corroded connection",
        "A tripped breaker or GFCI outlet that cuts power to outdoor circuits",
        "Loose or damaged fixtures that have pulled away from the wall",
      ],
      closing:
        "We find the cause, repair or replace what is needed, and test the circuit before we leave. For guidance on outdoor lighting efficiency, the [U.S. Department of Energy](https://www.energy.gov/energysaver) offers helpful information, and the [Electrical Safety Foundation International](https://www.esfi.org/) provides outdoor electrical safety tips.",
      ctaText: "Schedule a Lighting Repair",
    },
    {
      id: "safety-permits-and-code",
      heading: "Safety, Permits, and Code",
      description:
        "Outdoor electrical work has added risks from moisture and exposure. We use weather rated materials, ground fault protection where required, and sealed connections. Some installations require permits or inspections, and we explain what applies before work begins. If you notice sparks, burning smells, or water around a fixture, turn off power at the breaker and call us. If anyone has been shocked or you see flames, call 911 first.",
      ctaText: "Ask About Your Project",
    },
    {
      id: "why-choose-maven-dmv-for-security-lighting",
      heading: "Why Choose Maven DMV for Security Lighting",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians for residential and commercial electrical work",
        "Plain language advice on fixtures, placement, and cost",
        "Honest recommendations with no unnecessary upsells",
        "Tested and documented work on every install and repair",
        "24/7 availability for urgent electrical issues",
        "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "See what customers say on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML), or visit our [home page](/) to explore our other services.",
      ctaText: "Schedule Service",
    },
    {
      id: "veterans-military-and-first-responder-discount",
      heading: "Veterans, Military, and First Responder Discount",
      description:
        "Maven Home Services offers 10% off all HVAC, plumbing, and electrical services for veterans, active duty military, and first responders. Mention your eligibility when you schedule. A valid military or first responder ID is required at the time of service.",
      ctaText: "Schedule and Mention Your Discount",
    },
    {
      id: "schedule-security-lighting-service",
      heading: "Schedule Security Lighting Service",
      description:
        "Ready to improve visibility and safety around your property? Visit our [contact page](/contact) or reach us directly:",
      benefitsHeading: "",
      benefits: [
        "Address: 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [(240) 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Hours: Open 24 hours a day, 7 days a week, with 24/7 emergency service for urgent issues",
        "Service area: Within 30 miles of Rockville, across Maryland and Northern Virginia",
      ],
      ctaText: "Schedule Service",
    },
  ],
  faqs: [
    { q: "What is the best type of security lighting for a home?", a: "Most homes do well with a mix of motion sensor floodlights at dark side areas and dusk to dawn lighting at the front door and garage. The best setup depends on your layout." },
    { q: "Do motion sensor lights use a lot of electricity?", a: "No. They stay off until movement is detected, and LED fixtures use far less power than older halogen floodlights." },
    { q: "Will security lighting stop break ins?", a: "Lighting can help discourage unwanted activity because it makes people easier to see. It works best alongside locks, cameras, and good habits." },
    { q: "Can you replace my old floodlights with LED?", a: "Yes. We can swap older fixtures for LED models and check the wiring and sensors at the same time." },
    { q: "Can you light a business parking lot?", a: "Yes. We install and repair commercial exterior lighting. Larger lots may need planning, permits, or equipment, and we explain that during the visit." },
    { q: "Why does my outdoor light keep turning on and off?", a: "Common causes are a failing sensor, a loose connection, moisture in the fixture, or a worn bulb or driver. We diagnose the cause and repair it." },
  ],
  ctaTitle: "Schedule Security Lighting Service in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. Safe wiring, weather rated fixtures, and coverage that fits your property.",
};
