import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville walk-in cooler and freezer landing page, built verbatim
// from the approved SEO content package (primary keyword "walk in cooler repair
// Rockville MD"). Copy, headings, and link targets are the client's — edit only
// against an updated package.
//
// Served at the root-level URL the package specifies, by its own static route at
// app/walk-in-cooler-freezer-service-rockville-md/. It is separate from the
// general /hvac/walk-in-coolers-freezers subcategory page.
export const rockvilleWalkInCoolerData: ServicePageData = {
  slug: "walk-in-cooler-freezer-service-rockville-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Walk In Cooler and Freezer Service in Rockville, MD",
  seoTitle: "Walk In Cooler and Freezer Service in Rockville MD | Maven",
  metaDescription:
    "Walk in cooler or freezer down in Rockville MD? Maven Home Services offers installation, repair, and maintenance. Call 240 255 4794 to protect your stock.",
  heroImage: "/images/hvac/walkin.png",
  heroTitle: "Walk In Cooler and Freezer Service in Rockville, MD",
  heroDescription:
    "When a walk in cooler or freezer fails, every hour puts your inventory, your reputation, and your revenue at risk. Maven Home Services provides installation, repair, and preventive maintenance for walk in coolers and freezers for restaurants, grocers, caterers, bakeries, and other businesses across Rockville, MD. Our technicians find the real cause, explain it in plain English, and give you a clear price before the work begins. Cooler or freezer down? Call 240 255 4794 now. Our emergency line is available for urgent issues. You can also contact us online.",
  overviewTitle: "Signs Your Walk In Cooler or Freezer Needs Service",
  overview: [
    "Watch for rising temperatures, food that spoils faster than usual, ice on the evaporator or floor, water pooling inside or outside the box, loud rattling or grinding, a compressor that runs nonstop, or a sudden jump in your electric bill. Condensation on walls and doors can point to a failing seal. Calling early often turns a major breakdown into a minor repair.",
  ],
  offeredServicesTitle: "Walk In Cooler and Freezer Services We Offer",
  offeredServices: [
    { icon: "ac_unit", name: "Walk in cooler repair", desc: "We fix temperature problems, failed fans, noisy compressors, bad thermostats, and worn components." },
    { icon: "kitchen", name: "Walk in freezer repair", desc: "We solve defrost failures, heavy ice buildup, and freezers that cannot reach temperature." },
    { icon: "event_available", name: "Preventive maintenance", desc: "We clean coils, inspect fans and motors, check door seals, test controls, and look for early warning signs." },
    { icon: "construction", name: "New installation and replacement", desc: "We help you plan, install, and start up a walk in cooler or freezer built for your space and workload." },
    { icon: "door_front", name: "Door, gasket, and hinge service", desc: "A poor seal wastes energy and strains your system. We repair or replace worn parts." },
    { icon: "search", name: "Refrigerant leak diagnosis", desc: "We locate leaks and recommend a repair plan that follows federal rules." },
    { icon: "thermostat", name: "Temperature and control troubleshooting", desc: "We calibrate sensors, thermostats, and defrost controls." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Service Process",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Call or book online", desc: "We ask about the symptoms, the temperature readings, and the equipment type." },
    { num: "02", icon: "manage_search", title: "Diagnosis", desc: "Our technician checks the compressor, condenser, evaporator, fans, defrost system, and controls." },
    { num: "03", icon: "request_quote", title: "Written estimate", desc: "You approve the price before repairs start." },
    { num: "04", icon: "build", title: "Repair or installation", desc: "We use quality parts and complete the work to code." },
    { num: "05", icon: "task_alt", title: "Testing and follow up", desc: "We confirm the unit reaches and holds temperature and share tips to prevent repeat problems." },
  ],
  detailSections: [
    {
      id: "food-safety-and-uptime",
      heading: "Why Food Safety and Uptime Matter",
      description:
        "Cold storage is the backbone of any food business. The [FDA Food Code](https://www.fda.gov/food/retail-food-protection/fda-food-code) sets guidance for keeping cold food at safe temperatures, and a failing unit can force you to discard expensive stock. Regular maintenance keeps your equipment running efficiently, protects your inventory, and reduces the chance of a failure during your busiest hours.",
      ctaText: "Schedule Maintenance",
    },
    {
      id: "repair-maintain-or-replace",
      heading: "Repair, Maintain, or Replace?",
      description:
        "A single failed fan motor or relay is usually a straightforward repair. If your system breaks down often, uses a lot of energy, or has a major compressor failure, replacement may cost less over time. Our technician reviews the age, condition, and repair history of your equipment, then lays out each option with its cost so you can decide with confidence. Refrigerant work must follow [EPA Section 608 rules](https://www.epa.gov/section608).",
      ctaText: "Request a Diagnosis",
    },
    {
      id: "why-rockville-businesses-choose-maven",
      heading: "Why Rockville Businesses Choose Maven Home Services",
      benefitsHeading: "",
      benefits: [
        "Licensed and insured professionals",
        "Upfront pricing with no surprise fees",
        "Technicians trained on commercial cooler and freezer systems",
        "Convenient hours: Monday to Friday 7:00 AM to 7:00 PM, Saturday and Sunday 8:00 AM to 5:00 PM",
        "Local team based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Need help with related systems? Explore our [HVAC services](/hvac), our [plumbing services](/plumbing), or [contact our team](/contact) to bundle maintenance for your whole building.",
      ctaText: "Request Service",
    },
    {
      id: "preventive-tips",
      heading: "Preventive Tips Between Service Visits",
      benefitsHeading: "",
      benefits: [
        "Keep the door closed and make sure it latches fully.",
        "Do not block the evaporator fan or the air flow with boxes.",
        "Check the door gasket for tears and gaps each month.",
        "Keep the area around the condensing unit clean and clear.",
        "Log temperatures daily so you spot changes early.",
      ],
      ctaText: "Schedule Maintenance",
    },
    {
      id: "areas-we-serve",
      heading: "Areas We Serve Near Rockville",
      description:
        "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood. You can also review city information on the [City of Rockville website](https://www.rockvillemd.gov/).",
      ctaText: "Book Cooler Service",
    },
    {
      id: "find-us-on-google",
      heading: "Find Us on Google",
      description:
        "See our location, photos, hours, and customer reviews on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML). Read what Rockville neighbors say about us, then call [240 255 4794](tel:+12402554794) to book your walk in cooler or freezer service.",
      benefitsHeading: "Maven Home Services",
      benefits: [
        "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [240 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Google Business Profile: [https://share.google/KJudab7Ho272ukUML](https://share.google/KJudab7Ho272ukUML)",
      ],
      ctaText: "Request Service",
    },
  ],
  faqs: [
    { q: "How much does walk in cooler repair cost in Rockville, MD?", a: "Cost depends on the failed part, the refrigeration system, and the time needed. Our technician diagnoses the problem and gives you a clear price before the repair begins." },
    { q: "Why is my walk in cooler not cooling?", a: "Common causes include a dirty condenser coil, a failed evaporator fan, a bad compressor or relay, a refrigerant leak, a faulty thermostat, or a door that does not seal. A technician finds the cause." },
    { q: "Why is ice building up in my walk in freezer?", a: "Ice often comes from a failed defrost heater, a bad defrost timer or sensor, a worn door gasket, or a door left open. Ice can block airflow and strain the system." },
    { q: "What temperature should a walk in cooler be?", a: "Food safety rules call for cold food to be held at 41 degrees Fahrenheit or below. Walk in freezers are typically kept at 0 degrees Fahrenheit or lower." },
    { q: "How often should a walk in cooler be serviced?", a: "Most commercial units benefit from preventive maintenance at least twice a year. Heavy use locations may need more frequent visits to keep coils, fans, and seals in good shape." },
    { q: "Do you install new walk in coolers and freezers?", a: "Yes. We help with new installations and replacements, including planning the layout, electrical needs, and refrigeration equipment for your space." },
    { q: "Do you offer emergency walk in cooler service?", a: "Yes. If your cooler or freezer stops working, call 240 255 4794 and use our emergency line for urgent issues so you can protect your inventory." },
    { q: "What areas near Rockville do you serve?", a: "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood." },
  ],
  ctaTitle: "Protect Your Inventory. Call Maven Home Services",
  ctaDescription:
    "Call 240 255 4794 or request service online. Keep it cold, keep it open.",
};
