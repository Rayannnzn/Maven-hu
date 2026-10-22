import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville emergency-plumbing landing page, built verbatim from the
// approved SEO content package (primary keyword "emergency plumber Rockville MD").
// Copy, headings, and link targets are the client's — edit only against an
// updated package. Per the package, do not add 24/7 or arrival-time promises.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/plumbing/emergency-plumbing-rockville-md/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`.
export const rockvilleEmergencyPlumbingData: ServicePageData = {
  slug: "plumbing/emergency-plumbing-rockville-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Emergency Plumbing in Rockville, MD",
  seoTitle: "Emergency Plumbing Services in Rockville MD | Maven",
  metaDescription:
    "Burst pipe, major leak, or no water in Rockville MD? Maven Home Services offers emergency plumbing for urgent issues. Call 240 255 4794 for help now.",
  heroImage: "/images/plumbing-hero.jpg",
  heroTitle: "Emergency Plumbing Services in Rockville, MD",
  heroDescription:
    "A plumbing emergency never waits for a good time. A burst pipe can flood a floor in minutes, and a failed water heater or sewage backup can turn a normal evening into a stressful one. Maven Home Services provides emergency plumbing for homes and small businesses across Rockville, MD. Our plumbers stop the damage first, find the cause, and explain your repair options in plain English with a clear price before the work begins. Plumbing emergency? Call 240 255 4794 now. Our emergency line is available for urgent issues. You can also contact us online.",
  overviewTitle: "Our Emergency Plumbing Process",
  overview: [
    "When you call, we ask a few quick questions about what is happening so we can prepare the right tools and parts. On arrival, our technician stops the source of the water, protects the area, and inspects the system. We then explain what failed, what your options are, and what each costs, in writing, before starting the repair. After the work is done, we test pressure and flow, check for hidden leaks, and clean the work area. If water has already spread, we can advise you on next steps for drying and for your insurance company.",
  ],
  offeredServicesTitle: "Emergency Plumbing Problems We Handle",
  offeredServices: [
    { icon: "water_damage", name: "Burst and leaking pipes", desc: "We locate the break, stop the leak, and repair or replace the damaged section." },
    { icon: "ac_unit", name: "Frozen pipe services", desc: "We thaw frozen lines safely and check for cracks before water pressure returns." },
    { icon: "plumbing", name: "Main water line repair", desc: "If you have no water or low pressure, a damaged main line may be the cause. See our [main water line repair](/plumbing/water-main-repair) service." },
    { icon: "water_heater", name: "Water heater leaks and failures", desc: "A leaking tank can cause serious damage fast. Learn more about our [water heater repair in Rockville](/plumbing/water-heaters-rockville-md)." },
    { icon: "water", name: "Clogged drains and sewer backups", desc: "We clear blockages and inspect lines to find out why the backup happened." },
    { icon: "wc", name: "Toilet, faucet, and fixture overflows", desc: "We stop active leaks and repair or replace failed valves and supply lines." },
    { icon: "speed", name: "Backflow and pressure problems", desc: "Our team can inspect and repair [backflow](/plumbing/backflow) devices and pressure related failures." },
  ],
  benefits: [],
  whyChoose: [],
  steps: [],
  detailSections: [
    {
      id: "before-the-plumber-arrives",
      heading: "What to Do Before the Plumber Arrives",
      description: "A few quick steps can reduce damage while you wait for help:",
      benefitsHeading: "",
      benefits: [
        "**Shut off the main water valve.** Turn it clockwise. Know where it is before an emergency happens.",
        "**Turn off your water heater.** Switch off the electric breaker or set the gas control to off if water is leaking from the unit.",
        "**Stay away from electricity near water.** If water is near outlets, appliances, or the panel, do not touch them. Shut off power at the breaker only if it is safe to reach.",
        "**Open faucets to drain the lines.** This can lower pressure and reduce leaking after the main is closed.",
        "**Protect your belongings.** Move rugs, furniture, and electronics away from the water and take photos for your insurance claim.",
      ],
      closing:
        "**Smell gas?** Leave the home immediately and call 911 or your gas utility from outside. Do not use switches or open flames.",
      ctaText: "Request Emergency Help",
    },
    {
      id: "why-rockville-homeowners-trust-maven",
      heading: "Why Rockville Homeowners Trust Maven Home Services",
      benefitsHeading: "",
      benefits: [
        "Licensed and insured plumbing professionals",
        "Upfront pricing with no surprise fees",
        "Technicians trained on pipes, drains, water heaters, and main water lines",
        "Emergency line available for urgent issues",
        "Office hours: Monday to Friday 7:00 AM to 7:00 PM, Saturday and Sunday 8:00 AM to 5:00 PM",
        "Local team based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Not an emergency? Our regular [plumbing services](/plumbing) cover repairs, installs, and maintenance to help you avoid the next surprise.",
      ctaText: "Request Help Online",
    },
    {
      id: "prevent-the-next-plumbing-emergency",
      heading: "Prevent the Next Plumbing Emergency",
      description:
        "Many emergencies start small. Watch for drips under sinks, low water pressure, stained walls or ceilings, and water bills that suddenly rise. Insulate exposed pipes before winter, replace old supply hoses, and have your water heater inspected as it ages. For cold weather preparation tips, see the [Ready.gov winter weather guide](https://www.ready.gov/winter-weather). For water service and outage information in our area, visit [WSSC Water](https://www.wsscwater.com/).",
      ctaText: "Schedule an Inspection",
    },
    {
      id: "areas-we-serve",
      heading: "Areas We Serve Near Rockville",
      description:
        "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood. You can also review city information on the [City of Rockville website](https://www.rockvillemd.gov/).",
      ctaText: "Request Emergency Help",
    },
    {
      id: "find-us-on-google",
      heading: "Find Us on Google",
      description:
        "See our location, photos, hours, and customer reviews on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML). Read what Rockville neighbors say about us, then call [240 255 4794](tel:+12402554794) if you need emergency plumbing help.",
      benefitsHeading: "Maven Home Services",
      benefits: [
        "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [240 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Google Business Profile: [https://share.google/KJudab7Ho272ukUML](https://share.google/KJudab7Ho272ukUML)",
      ],
      ctaText: "Request Emergency Help",
    },
  ],
  faqs: [
    { q: "What counts as a plumbing emergency?", a: "A burst or frozen pipe, a major leak, sewage backup, no water at all, a failed water heater that is leaking, or a broken main water line. If water is damaging your property, treat it as an emergency." },
    { q: "What should I do first when a pipe bursts?", a: "Shut off your main water valve, turn off your water heater, and move valuables away from the water. Then call 240 255 4794 and tell us what you see." },
    { q: "Where is my main water shutoff valve?", a: "It is usually near the water meter, in a basement, utility room, or crawl space, or on an exterior wall where the line enters the home. Turn it clockwise to close it." },
    { q: "Do you offer emergency plumbing service in Rockville, MD?", a: "Yes. Call 240 255 4794 and use our emergency line for urgent issues. Our regular office hours are Monday to Friday 7:00 AM to 7:00 PM and Saturday and Sunday 8:00 AM to 5:00 PM." },
    { q: "How much does emergency plumbing cost?", a: "Cost depends on the problem, the parts, and the time needed. We explain the issue and give you a clear price before the repair begins." },
    { q: "What should I do if I smell gas?", a: "Leave the home right away and call 911 or your gas utility from outside. Do not use switches, phones, or flames inside. Call us after the area is declared safe." },
    { q: "How do I prevent frozen pipes in winter?", a: "Keep indoor heat on, open cabinet doors under sinks on very cold nights, insulate exposed pipes, and disconnect outdoor hoses before freezing weather arrives." },
    { q: "What areas near Rockville do you serve?", a: "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood." },
  ],
  ctaTitle: "Plumbing Emergency? Call Maven Home Services Now",
  ctaDescription:
    "Call 240 255 4794 or request help online. Stop the damage fast, and let us handle the rest.",
};
