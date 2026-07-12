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
    desc: "Electricians for panel upgrades, outlet installation, wiring repairs, and electrical safety inspections.",
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
    name: "Preventive Maintenance Plans",
    desc: "Scheduled preventive maintenance plans to protect your home systems and help avoid costly emergency repairs.",
  },
];

export const features: Feature[] = [
  {
    icon: "verified",
    title: "Insured Professionals",
    desc: "Our technicians are insured and background-checked. We carry liability coverage and treat your home with care.",
  },
  {
    icon: "speed",
    title: "Same-Day Appointments",
    desc: "Same-day appointments available, subject to technician availability. We arrive on schedule and deliver quality workmanship on every visit.",
  },
  {
    icon: "receipt_long",
    title: "Transparent Pricing",
    desc: "Upfront written estimates before work begins. No hidden fees — you approve every cost before we start.",
  },
  {
    icon: "support_agent",
    title: "Emergency Service",
    desc: "Emergency service is available for urgent HVAC, plumbing, and electrical issues. Response times depend on technician availability and your location.",
  },
  {
    icon: "engineering",
    title: "Experienced Technicians",
    desc: "Experienced, highly trained technicians work across HVAC, plumbing, and electrical trades.",
  },
  {
    icon: "thumb_up_alt",
    title: "Professional Workmanship",
    desc: "We stand behind our work. If something isn't right, let us know and we'll make every reasonable effort to correct it.",
  },
];

export const steps: Step[] = [
  {
    num: "01",
    icon: "calendar_month",
    title: "Book Appointment",
    desc: "Schedule online or call us. We will contact you promptly to confirm your appointment and share your technician's name.",
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

export const faqs: Faq[] = [
  {
    q: "Do you offer same-day service?",
    a: "Same-day appointments are available for many HVAC, plumbing, and electrical needs, subject to technician availability and your location. Calling earlier in the day generally gives you the best chance of same-day scheduling. When you book, we will contact you promptly to confirm your appointment and share your technician's details.",
  },
  {
    q: "Are your technicians insured?",
    a: "Yes. Our technicians are insured and background-checked, and we carry liability coverage on the work we perform. We invest in ongoing training so every team member stays current on best practices across the HVAC, plumbing, and electrical trades.",
  },
  {
    q: "Do you provide estimates before work begins?",
    a: "Yes. We provide an upfront written estimate before any work begins, so you can approve the cost in advance with no hidden fees. A diagnostic fee may apply for complex system evaluations, and we'll explain any such fee before we start.",
  },
  {
    q: "What areas do you serve?",
    a: "We are based in Rockville, Maryland and serve homeowners and businesses across Maryland and Northern Virginia — including Montgomery County, Arlington, Fairfax, Alexandria, Bethesda, Silver Spring, and surrounding communities. Contact us to confirm service availability in your ZIP code.",
  },
  {
    q: "Do you offer financing options?",
    a: "Promotional financing may be available for qualified customers on qualifying equipment and major installations. Terms, rates, and eligibility are determined by third-party lenders. Contact our office for current options and details on how to apply.",
  },
  {
    q: "What if I'm not satisfied with the work?",
    a: "We stand behind our work. If something isn't right, let us know and we'll make every reasonable effort to correct it. Parts are covered by the applicable manufacturer's warranty, which varies by component and brand.",
  },
];
