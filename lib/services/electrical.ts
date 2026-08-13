import type { ServicePageData } from "./types";
import { electricalDetailSections } from "./electrical-sections";
import { company } from "@/lib/site";

export const electricalData: ServicePageData = {
  slug: "electrical",
  title: "Electrical Services",
  seoTitle:
    "Electrical Services in Maryland | Panel Upgrades, EV Chargers | Maven",
  metaDescription: `Licensed Maryland electricians — panel upgrades, wiring, outlet installation & Level 2 EV charger installation. Code-compliant, same-day service. Call ${company.phone}.`,
  heroImage: "/images/electrical/electrical-hero.png",
  heroTitle: "Professional Electrical Services for Maryland Homes",
  heroDescription:
    "Electrical work demands precision and code compliance. Maven's experienced electricians handle everything from outlet installs to full panel upgrades — safely, cleanly, and on schedule.",
  overviewTitle: "About Our Electrical Services in Maryland",
  overview: [
    "Faulty wiring isn't just inconvenient — it's a serious safety hazard. Flickering lights, warm outlets, and tripping breakers are warning signs that deserve immediate professional attention.",
    "Maven Home Services provides full-service residential electrical work across Maryland. Our experienced electricians handle new installations, troubleshooting, panel upgrades, and safety inspections with meticulous attention to NEC code and local Maryland amendments.",
    "Whether you're renovating, adding circuits for new appliances, or upgrading an outdated electrical panel, we deliver work that passes inspection and protects your family for years to come.",
  ],
  offeredServicesSubtitle:
    "Comprehensive electrical solutions from experienced Maryland professionals.",
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
      desc: "Level 2 home EV charger installation across Maryland with dedicated circuits, permit handling, and utility coordination.",
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
  benefitsTitle: "Why Maryland Homeowners Choose Maven",
  benefits: [
    {
      title: "Code-Compliant Work",
      desc: "All work meets National Electrical Code standards and local Maryland amendments. Permits pulled and inspections scheduled when required.",
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
      a: "Signs your panel needs upgrading include frequent breaker trips, a fuse box instead of breakers, flickering lights when appliances turn on, or a panel rated below 100 amps. Maven can assess your panel's condition and actual load needs during a free estimate.",
    },
    {
      q: "What is GFCI protection and do I need it?",
      a: "GFCI (Ground Fault Circuit Interrupter) outlets shut off power instantly if they detect a current leak, preventing shock. Current code requires them in kitchens, bathrooms, garages, and outdoor areas — most Maryland homes built before the 2000s need them added.",
    },
    {
      q: "Can I install an EV charger with my current electrical panel?",
      a: "It depends on your panel's available capacity. Many homes need a panel upgrade to safely support a Level 2 EV charger's 240-volt circuit — Maven performs a load calculation during your estimate to confirm what your panel can handle.",
    },
    {
      q: "Why does my circuit breaker keep tripping?",
      a: "A breaker that trips repeatedly usually signals an overloaded circuit, a short circuit, or a ground fault. Continuing to reset it without diagnosis can be a fire risk, so it's best to have an electrician identify the root cause.",
    },
    {
      q: "Do you handle permits and inspections?",
      a: "Yes, Maven pulls permits and coordinates inspections for panel upgrades, rewiring, and other work that requires it under Maryland electrical code.",
    },
    {
      q: "Is aluminum wiring in my home dangerous?",
      a: "Aluminum wiring installed in the 1960s and 70s can be a fire hazard if connections loosen over time. Maven remediates aluminum wiring with COPALUM connectors or targeted rewiring to bring it up to a safe, modern standard.",
    },
  ],
  ctaTitle: "Power Your Home Safely & Reliably",
  ctaDescription:
    "Schedule your service today or call our team to request an estimate. Same-day appointments available across Maryland, subject to technician availability.",
  detailSections: electricalDetailSections,
};
