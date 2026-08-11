import { company } from "@/lib/site";

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
    desc: "AC repair, heat pump installation, geothermal systems, and duct cleaning across Montgomery County and Frederick, MD.",
  },
  {
    icon: "plumbing",
    name: "Plumbing",
    desc: "Water heater installation, replacement and repair, drain cleaning, and leak repair in Silver Spring, Frederick, and Northern Virginia.",
  },
  {
    icon: "electrical_services",
    name: "Electrical",
    desc: "Panel upgrades, wiring, safety inspections, and Level 2 EV charger installation in Maryland.",
  },
  {
    icon: "apartment",
    name: "Commercial",
    desc: "Commercial HVAC and plumbing contractors serving Maryland and Northern Virginia businesses.",
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
    desc: "Our technicians bring years of hands-on field experience across HVAC, plumbing, and electrical trades — not call-center dispatch. Every estimate is written by the technician who will do the work.",
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
    q: "Do you offer same-day HVAC, plumbing, or electrical service?",
    a: `Yes, Maven offers same-day appointments for urgent HVAC, plumbing, and electrical issues in Maryland and Northern Virginia, subject to technician availability and your location. Call ${company.phone} to check availability in your area.`,
  },
  {
    q: "Are Maven technicians licensed and insured?",
    a: "Yes. Maven technicians are MHIC licensed, background-checked, and fully insured, with EPA 608 and OSHA certifications for HVAC and safety work.",
  },
  {
    q: "Do you provide a written estimate before starting work?",
    a: "Yes, every job includes an upfront written estimate before any work begins, so you approve the cost in advance with no hidden fees.",
  },
  {
    q: "What areas does Maven serve?",
    a: "Maven serves homeowners and businesses within about 30 miles of Rockville, Maryland, including Bethesda, Silver Spring, Frederick, and Northern Virginia cities like Arlington, Alexandria, and Fairfax.",
  },
  {
    q: "Does Maven offer financing for HVAC or plumbing projects?",
    a: "Yes, Maven works with third-party lending partners who may offer promotional financing for qualified customers on major HVAC, plumbing, and electrical projects. Terms are set by the lender.",
  },
  {
    q: "What if I'm not satisfied with the work?",
    a: "Maven stands behind every job. If something isn't right, contact us and we will make every reasonable effort to correct it at no additional cost.",
  },
];
