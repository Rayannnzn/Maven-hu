import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville water-heater landing page, built verbatim from the
// approved SEO content package (primary keyword "water heater repair Rockville
// MD"). Copy, headings, and link targets are the client's — edit only against an
// updated package. The URL is fixed by the package: other Rockville pages link
// to it.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/plumbing/water-heaters-rockville-md/, and adding
// the slug to subcategoryData would make generateStaticParams emit a path that
// already exists as a static page, which aborts `next build`.
export const rockvilleWaterHeaterData: ServicePageData = {
  slug: "plumbing/water-heaters-rockville-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Water Heater Repair in Rockville, MD",
  seoTitle: "Water Heater Repair and Installation in Rockville MD | Maven",
  metaDescription:
    "Need water heater repair or replacement in Rockville MD? Maven Home Services fixes and installs tank and tankless units. Call 240 255 4794 for fast service.",
  heroImage: "/images/plumbing/water-heaters.jpeg",
  heroTitle: "Water Heater Repair and Installation in Rockville, MD",
  heroDescription:
    "When the hot water stops, your whole day stops. Maven Home Services repairs, replaces, and installs water heaters for homes and small businesses across Rockville, MD. Maybe your tank is leaking, your shower runs lukewarm, or you are ready to upgrade to a tankless system. Either way, our plumbers find the cause, explain your options in plain English, and give you a clear price before any work begins. Call 240 255 4794 or request service online. Emergency line available for urgent issues.",
  overviewTitle: "Signs Your Water Heater Needs Attention",
  overview: [
    "Watch for water that never gets hot, rusty or cloudy hot water, rumbling or popping sounds from the tank, moisture around the base, or a sudden jump in your energy bill. Sediment buildup is a common cause of noise and lost efficiency. A leak from the tank itself usually means replacement. Small leaks at a valve or fitting can often be repaired.",
  ],
  offeredServicesTitle: "Water Heater Services We Offer in Rockville",
  offeredServices: [
    { icon: "build", name: "Water heater repair", desc: "We fix failed heating elements, bad thermostats, faulty gas valves, pilot and igniter problems, leaking fittings, and noisy tanks." },
    { icon: "water_heater", name: "Water heater replacement", desc: "If your unit is past saving, we remove the old heater, haul it away, and set up a properly sized replacement." },
    { icon: "construction", name: "New water heater installation", desc: "We install conventional tank models, tankless units, and brands such as A. O. Smith, matched to your household hot water demand." },
    { icon: "local_fire_department", name: "Tankless water heater repair and maintenance", desc: "We descale heat exchangers, clear error codes, and restore steady hot water." },
    { icon: "valve", name: "Expansion tanks and thermostatic mixing valves", desc: "These protect your plumbing from pressure spikes and scalding water." },
    { icon: "water_drop", name: "Water conditioner service", desc: "Hard water shortens a heater life, so we can help you manage mineral buildup." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "What to Expect When You Call",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Call or book online", desc: "We confirm your address, your heater type, and the symptoms." },
    { num: "02", icon: "request_quote", title: "Inspection and written estimate", desc: "You approve the price before work starts." },
    { num: "03", icon: "build", title: "Repair or installation", desc: "We follow current plumbing code, install new shutoff valves, relief valves, and discharge piping as needed, and arrange permits where local rules require them." },
    { num: "04", icon: "task_alt", title: "Testing and cleanup", desc: "We check temperature, pressure, and venting, then leave your space clean." },
  ],
  detailSections: [
    {
      id: "repair-or-replace",
      heading: "Repair or Replace? How We Help You Decide",
      description:
        "Most tank water heaters last about 8 to 12 years. If yours is under that age and the problem is a part, such as a thermostat or element, repair is usually the smart move. If the tank is leaking, the unit is over 10 years old, or repairs keep repeating, replacement often costs less over time. Our technician checks the anode rod, the temperature and pressure relief valve, the burner or elements, and the tank condition, then shows you the findings before recommending anything.",
      ctaText: "Schedule Water Heater Service",
    },
    {
      id: "tank-vs-tankless",
      heading: "Tank vs Tankless: Which Fits Your Home?",
      description:
        "A conventional tank heater costs less upfront and is simple to service. It stores heated water, so it can run out during heavy use. A tankless heater heats water on demand, takes up less space, and can lower energy use for many households. It costs more to install and needs regular descaling in areas with hard water. For efficiency guidance, see the [U.S. Department of Energy water heating guide](https://www.energy.gov/energysaver/water-heating) and [ENERGY STAR water heater information](https://www.energystar.gov/products/water_heaters).",
      ctaText: "Ask About Tankless",
    },
    {
      id: "why-rockville-homeowners-choose-maven",
      heading: "Why Rockville Homeowners Choose Maven Home Services",
      benefitsHeading: "",
      benefits: [
        "Licensed and insured plumbing professionals",
        "Upfront pricing with no surprise fees",
        "Technicians trained on gas, electric, and tankless systems",
        "Convenient hours: Monday to Friday 7:00 AM to 7:00 PM, Saturday and Sunday 8:00 AM to 5:00 PM",
        "Local team based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Looking for more than water heaters? Explore our full range of [plumbing services](/plumbing), including [water main repair](/plumbing/water-main-repair), [backflow services](/plumbing/backflow), and [HVAC maintenance](/hvac).",
      ctaText: "Request Water Heater Service",
    },
    {
      id: "areas-we-serve",
      heading: "Areas We Serve Near Rockville",
      description:
        "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood. You can also review city information on the [City of Rockville website](https://www.rockvillemd.gov/).",
      ctaText: "Book Water Heater Service",
    },
    {
      id: "find-us-on-google",
      heading: "Find Us on Google",
      description:
        "See our location, photos, hours, and customer reviews on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML). Read what Rockville neighbors say about us, then call [240 255 4794](tel:+12402554794) to book your water heater service.",
      benefitsHeading: "Maven Home Services",
      benefits: [
        "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [240 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Google Business Profile: [https://share.google/KJudab7Ho272ukUML](https://share.google/KJudab7Ho272ukUML)",
      ],
      ctaText: "Schedule Water Heater Service",
    },
  ],
  faqs: [
    { q: "How much does water heater repair cost in Rockville, MD?", a: "Cost depends on the part and the labor involved. Our technician inspects your unit and gives you a written estimate before any work starts, so you always know the price first." },
    { q: "How long does a water heater replacement take?", a: "Most standard tank replacements take about 2 to 4 hours. Tankless installations can take longer because of venting, gas line, or electrical needs." },
    { q: "Why is my water heater not making hot water?", a: "Common causes include a tripped breaker, a failed heating element, a bad thermostat, or a pilot light that has gone out. A technician can find the exact cause quickly." },
    { q: "How long does a water heater last?", a: "Most tank water heaters last about 8 to 12 years. Tankless models often last 15 to 20 years with regular descaling and maintenance." },
    { q: "Should I repair or replace my water heater?", a: "If the unit is under 10 years old and the problem is a part, repair usually makes sense. A leaking tank or repeated breakdowns usually mean replacement is the better value." },
    { q: "Do you install tankless water heaters in Rockville?", a: "Yes. We size, install, and service tankless water heaters, and we can also repair or descale an existing unit." },
    { q: "Do you offer emergency water heater service?", a: "Yes. Call 240 255 4794 and ask for our emergency line for urgent issues such as active leaks or no hot water." },
    { q: "What areas near Rockville do you serve?", a: "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood." },
  ],
  ctaTitle: "Need a Water Heater Fixed or Replaced Today?",
  ctaDescription:
    "Call 240 255 4794 or schedule your service online. Hot water back, worry gone.",
};
