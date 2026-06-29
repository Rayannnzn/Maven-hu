export type Service = {
  icon: string;
  name: string;
  desc: string;
};

export type Feature = {
  icon: string;
  title: string;
  desc: string;
};

export type Step = {
  num: string;
  icon: string;
  title: string;
  desc: string;
};

export type Review = {
  name: string;
  loc: string;
  stars: string;
  text: string;
};

export type Faq = {
  q: string;
  a: string;
};

export const services: Service[] = [
  {
    icon: "hvac",
    name: "HVAC",
    desc: "Complete heating and ventilation system installation, repair, and seasonal tune-ups for year-round indoor comfort.",
  },
  {
    icon: "plumbing",
    name: "Plumbing",
    desc: "Expert plumbing for leaks, drain cleaning, water heater installation, and full pipe replacement services.",
  },
  {
    icon: "electrical_services",
    name: "Electrical",
    desc: "Licensed electricians for panel upgrades, outlet installation, wiring repairs, and electrical safety inspections.",
  },
  {
    icon: "ac_unit",
    name: "Air Conditioning",
    desc: "AC installation, repair, refrigerant recharge, and annual tune-ups to maximize system efficiency and lifespan.",
  },
  {
    icon: "thermostat",
    name: "Cooling Systems",
    desc: "Full-service cooling solutions including ductwork design, zone control systems, and refrigerant leak detection.",
  },
  {
    icon: "home_repair_service",
    name: "Residential Maintenance",
    desc: "Scheduled preventive maintenance plans to protect your home systems and avoid costly emergency repairs.",
  },
];

export const features: Feature[] = [
  {
    icon: "verified",
    title: "Licensed & Insured",
    desc: "Every technician is fully licensed, bonded, and insured. We carry full liability coverage on every single job.",
  },
  {
    icon: "speed",
    title: "Same-Day Response",
    desc: "Fast dispatch and same-day service available. We arrive on schedule and complete the work right the first time.",
  },
  {
    icon: "receipt_long",
    title: "Transparent Pricing",
    desc: "Upfront written estimates before work begins. No hidden fees — you approve every cost before we start.",
  },
  {
    icon: "support_agent",
    title: "24/7 Emergency Service",
    desc: "Our emergency line is staffed around the clock by real dispatchers, not voicemail or automated answering services.",
  },
  {
    icon: "engineering",
    title: "Experienced Technicians",
    desc: "Our team averages 12+ years of hands-on field experience across HVAC, plumbing, and electrical trades.",
  },
  {
    icon: "thumb_up_alt",
    title: "Satisfaction Guaranteed",
    desc: "100% satisfaction on every job. We return at no charge if any issue arises within 30 days of service completion.",
  },
];

export const steps: Step[] = [
  {
    num: "01",
    icon: "calendar_month",
    title: "Book Appointment",
    desc: "Schedule online or call us. We confirm within minutes and send your technician's name and ETA by text.",
  },
  {
    num: "02",
    icon: "manage_search",
    title: "System Inspection",
    desc: "Your technician arrives on time and performs a thorough diagnostic inspection before any work begins.",
  },
  {
    num: "03",
    icon: "construction",
    title: "Repair & Installation",
    desc: "We complete the work using quality parts, following all local codes. All labor and parts are fully warranted.",
  },
  {
    num: "04",
    icon: "task_alt",
    title: "Quality Walkthrough",
    desc: "We review the completed work with you before we leave and answer any questions about ongoing maintenance.",
  },
];

export const reviews: Review[] = [
  {
    name: "Jennifer K.",
    loc: "Bethesda, MD",
    stars: "★★★★★",
    text: "Maven sent a technician within 2 hours of my call. The AC was diagnosed and fixed the same day, and the price matched the estimate exactly. I will not use anyone else for home services.",
  },
  {
    name: "Marcus T.",
    loc: "Arlington, VA",
    stars: "★★★★★",
    text: "Best home service company I've ever worked with. They fixed a serious plumbing issue two other companies failed to solve. Professional, clean, and completely honest about pricing.",
  },
  {
    name: "Sandra R.",
    loc: "Silver Spring, MD",
    stars: "★★★★★",
    text: "Called Maven for an electrical emergency at 10 PM on a Sunday. A technician arrived by 11 PM. Truly 24/7 — not just a marketing claim. Incredibly professional team throughout.",
  },
];

export const faqs: Faq[] = [
  {
    q: "Do you offer same-day service?",
    a: "Yes. Maven offers same-day service for most HVAC, plumbing, and electrical needs. Call before noon for the best availability. We confirm all appointments within minutes and send technician details by text.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "All Maven technicians are fully licensed, bonded, and insured in the states they operate. We conduct rigorous background checks and require ongoing certification and continued education for every team member.",
  },
  {
    q: "Do you provide free estimates?",
    a: "We provide upfront written estimates before any work begins. For most standard repairs, the estimate is free. A diagnostic fee may apply for complex system evaluations and is waived if you proceed with the recommended service.",
  },
  {
    q: "What areas do you serve?",
    a: "Maven is headquartered in Rockville, Maryland and serves homeowners and businesses within a 30-mile radius across Maryland and Northern Virginia — including Montgomery County, Arlington, Fairfax, Alexandria, Bethesda, Silver Spring, and surrounding communities. Contact us to confirm service availability in your ZIP code.",
  },
  {
    q: "Do you offer financing options?",
    a: "Yes. Maven partners with leading financing providers to offer 0% interest plans on qualifying HVAC equipment and major installations. Ask your technician or contact our office for current financing options and qualification requirements.",
  },
  {
    q: "What warranty do you offer on repairs?",
    a: "All labor carries a 30-day workmanship guarantee. Parts are covered by the manufacturer's warranty, which ranges from 1 to 10 years depending on the component and brand installed.",
  },
];
