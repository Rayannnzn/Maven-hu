import type { ServicePageData } from "./types";
import { electricalDetailSections } from "./electrical-sections";

export const electricalData: ServicePageData = {
  slug: "electrical",
  title: "Electrical Services",
  metaDescription:
    "Experienced electricians in Maryland and Virginia for panel upgrades, wiring, outlets, and safety inspections. Code-compliant electrical work with upfront estimates.",
  heroImage: "/images/electrical/electrical-hero.png",
  heroTitle: "Professional Electrical Services for Maryland & Virginia Homes",
  heroDescription:
    "Electrical work demands precision and code compliance. Maven's experienced electricians handle everything from outlet installs to full panel upgrades — safely, cleanly, and on schedule.",
  overview: [
    "Faulty wiring isn't just inconvenient — it's a serious safety hazard. Flickering lights, warm outlets, and tripping breakers are warning signs that deserve immediate professional attention.",
    "Maven Home Services provides full-service residential electrical work across Maryland and Northern Virginia. Our experienced electricians handle new installations, troubleshooting, panel upgrades, and safety inspections with meticulous attention to NEC code and local Maryland and Virginia amendments.",
    "Whether you're renovating, adding circuits for new appliances, or upgrading an outdated electrical panel, we deliver work that passes inspection and protects your family for years to come.",
  ],
  offeredServices: [
    {
      icon: "electrical_services",
      name: "Electrical Panel Upgrades",
      desc: "Upgrade outdated fuse boxes and 100-amp panels to modern 200-amp service for today's power demands and EV charging needs.",
    },
    {
      icon: "outlet",
      name: "Outlet & Switch Installation",
      desc: "New outlets, GFCI and AFCI protection, USB outlets, dimmer switches, and three-way switch wiring installed to code.",
    },
    {
      icon: "cable",
      name: "Wiring & Rewiring",
      desc: "New circuit installation, aluminum wire remediation, knob-and-tube replacement, and whole-home rewiring for older properties.",
    },
    {
      icon: "lightbulb",
      name: "Lighting Installation",
      desc: "Recessed lighting, ceiling fans, chandeliers, under-cabinet lighting, and outdoor security lighting professionally wired.",
    },
    {
      icon: "ev_station",
      name: "EV Charger Installation",
      desc: "Level 2 home EV charger installation with dedicated circuits, permit handling, and utility coordination.",
    },
    {
      icon: "bolt",
      name: "Surge Protection",
      desc: "Whole-home surge protectors and dedicated circuits to safeguard electronics, HVAC equipment, and appliances.",
    },
    {
      icon: "fact_check",
      name: "Electrical Safety Inspections",
      desc: "Comprehensive home electrical audits for home buyers, sellers, and insurance requirements. Detailed written reports provided.",
    },
    {
      icon: "emergency",
      name: "Emergency Electrical Repair",
      desc: "Emergency response for power outages, sparking outlets, burning smells, and other urgent electrical hazards. Response times depend on technician availability and your location.",
    },
  ],
  benefits: [
    {
      title: "Code-Compliant Work",
      desc: "All work meets National Electrical Code standards and local Maryland and Virginia amendments. Permits pulled and inspections scheduled when required.",
    },
    {
      title: "Safety-First Approach",
      desc: "We never cut corners on grounding, bonding, or circuit protection. Your family's safety is non-negotiable on every job.",
    },
    {
      title: "Modern Home Ready",
      desc: "From smart home wiring to EV chargers and solar interconnection, we equip your electrical system for today's technology demands.",
    },
    {
      title: "Detailed Written Estimates",
      desc: "Every project starts with a clear scope of work and pricing breakdown. You approve the plan before we turn off a single breaker.",
    },
  ],
  whyChoose: [
    {
      title: "Residential Specialists",
      desc: "We focus exclusively on homes — not commercial jobs squeezed in between. That means faster scheduling and technicians who know residential systems inside out.",
    },
    {
      title: "Clean Installation Standards",
      desc: "Neat wire routing, properly labeled panels, and protected work areas. Our electricians take pride in work that's as clean as it is safe.",
    },
    {
      title: "Honest Capacity Assessments",
      desc: "Not every home needs a panel upgrade. We evaluate your actual load requirements and recommend only what's necessary for safe, reliable power.",
    },
  ],
  steps: [
    {
      num: "01",
      icon: "event_available",
      title: "Request an Estimate",
      desc: "Describe your project online or by phone. We schedule a convenient time for an on-site evaluation with an experienced electrician.",
    },
    {
      num: "02",
      icon: "electrical_services",
      title: "On-Site Evaluation",
      desc: "Your electrician assesses your panel, wiring, and load requirements, then provides a detailed written estimate and timeline.",
    },
    {
      num: "03",
      icon: "engineering",
      title: "Professional Installation",
      desc: "Work is completed to NEC code with quality materials. Permits are filed and inspections coordinated when applicable.",
    },
    {
      num: "04",
      icon: "assignment_turned_in",
      title: "Inspection & Walkthrough",
      desc: "We verify all circuits, test GFCI/AFCI protection, label your panel, and walk you through everything before signing off.",
    },
  ],
  faqs: [
    {
      q: "How do I know if my electrical panel needs upgrading?",
      a: "Signs include frequent breaker trips, flickering lights when appliances run, a panel that's warm to the touch, rust or corrosion, or a fuse box instead of breakers. Homes built before 1990 with 100-amp service often need upgrades for modern loads.",
    },
    {
      q: "What is GFCI protection and do I need it?",
      a: "GFCI (Ground Fault Circuit Interrupter) outlets prevent shock in wet areas like kitchens, bathrooms, garages, and outdoors. Maryland and Virginia code requires GFCI protection in these locations. We install and test GFCI outlets and breakers to keep your home compliant and safe.",
    },
    {
      q: "Can I install an EV charger with my current electrical panel?",
      a: "It depends on your panel capacity and existing load. A Level 2 charger typically needs a dedicated 40–50 amp circuit. We perform a load calculation to determine if your panel can support it or if an upgrade is recommended.",
    },
    {
      q: "Why does my circuit breaker keep tripping?",
      a: "Common causes include overloaded circuits, short circuits, ground faults, or a failing breaker. If a breaker trips repeatedly, don't keep resetting it — call a licensed electrician to diagnose the underlying issue safely.",
    },
    {
      q: "Do you handle permits and inspections?",
      a: "Yes. For work requiring permits under local code — panel upgrades, new circuits, service changes — we handle permit applications and coordinate inspections. Permit fees are included in your estimate.",
    },
    {
      q: "Is aluminum wiring in my home dangerous?",
      a: "Aluminum wiring installed in the 1960s–70s can pose fire risks at connections. COPALUM crimp connections or complete rewiring are proven remediation methods. We inspect aluminum wiring systems and recommend the safest, most cost-effective solution.",
    },
  ],
  ctaTitle: "Power Your Home Safely & Reliably",
  detailSections: electricalDetailSections,
};
