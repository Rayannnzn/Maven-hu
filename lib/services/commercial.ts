import type { ServicePageData } from "./types";
import { commercialDetailSections } from "./commercial-sections";

export const commercialData: ServicePageData = {
  slug: "commercial",
  title: "Commercial Services",
  metaDescription:
    "Commercial HVAC and refrigeration services in Maryland and Virginia. Rooftop units, walk-in coolers, walk-in freezers, maintenance programs, and new installations for businesses.",
  heroImage: "/images/commercial/commercial-hvac-refrigeration.png",
  heroTitle: "Commercial HVAC & Refrigeration Services",
  heroDescription:
    "Keep your business running with reliable commercial heating, cooling, and refrigeration. Maven services rooftop package units, walk-in coolers and freezers, and complete commercial HVAC systems — with maintenance programs designed to prevent costly downtime.",
  overview: [
    "Commercial HVAC and refrigeration equipment works harder and longer than residential systems — and when it fails, the impact on your business is immediate. Lost inventory, uncomfortable customers, and emergency repair premiums add up fast.",
    "Maven Home Services provides commercial HVAC and refrigeration solutions for restaurants, retail spaces, offices, and light industrial properties throughout Maryland and Northern Virginia. Our experienced technicians understand the urgency of commercial service calls and work efficiently to restore your equipment.",
    "From scheduled preventive maintenance to emergency repairs and new installations, we partner with business owners to keep equipment running reliably, energy costs manageable, and compliance requirements met.",
  ],
  offeredServices: [
    {
      icon: "roofing",
      name: "Rooftop Package Units",
      desc: "Service, repair, and replacement of commercial rooftop HVAC units for retail, restaurant, and office spaces.",
    },
    {
      icon: "kitchen",
      name: "Walk-in Coolers",
      desc: "Installation, repair, and maintenance of commercial walk-in coolers for food service and retail applications.",
    },
    {
      icon: "ac_unit",
      name: "Walk-in Freezers",
      desc: "Refrigeration system service for walk-in freezers — protecting inventory and meeting food safety standards.",
    },
    {
      icon: "build",
      name: "Preventive Maintenance",
      desc: "Scheduled maintenance programs that reduce emergency breakdowns and extend commercial equipment life.",
    },
    {
      icon: "hvac",
      name: "New Installations",
      desc: "Complete commercial HVAC and refrigeration installations with permit coordination and commissioning.",
    },
    {
      icon: "thermostat",
      name: "Temperature Controls",
      desc: "Commercial thermostat and control system installation, calibration, and troubleshooting.",
    },
    {
      icon: "emergency",
      name: "Emergency Service",
      desc: "Priority emergency dispatch for commercial refrigeration and HVAC failures that threaten business operations.",
    },
    {
      icon: "fact_check",
      name: "System Assessments",
      desc: "Comprehensive equipment evaluations with written reports and prioritized upgrade recommendations.",
    },
  ],
  benefits: [
    {
      title: "Minimized Business Downtime",
      desc: "We schedule service around your operating hours and prioritize emergency calls to get your business back online fast.",
    },
    {
      title: "Experienced Commercial Technicians",
      desc: "Our team services rooftop units, refrigeration systems, and commercial HVAC equipment from all major manufacturers.",
    },
    {
      title: "Transparent Commercial Pricing",
      desc: "Written estimates with clear scope of work before any repair or installation begins. No surprise invoices.",
    },
    {
      title: "Maintenance Programs",
      desc: "Customized preventive maintenance plans that catch problems early, reduce energy costs, and extend equipment lifespan.",
    },
  ],
  whyChoose: [
    {
      title: "Business-First Scheduling",
      desc: "We understand that commercial service calls can't wait. Flexible scheduling and emergency response keep your operations running.",
    },
    {
      title: "Multi-System Expertise",
      desc: "One call covers rooftop HVAC, walk-in refrigeration, and temperature controls — simplifying vendor management for business owners.",
    },
    {
      title: "Local Commercial Experience",
      desc: "Years of serving Maryland and Virginia businesses means we know local codes, permit requirements, and common equipment configurations.",
    },
  ],
  steps: [
    {
      num: "01",
      icon: "phone",
      title: "Contact Us",
      desc: "Call or submit a service request describing your equipment and issue. We respond promptly with scheduling options.",
    },
    {
      num: "02",
      icon: "search",
      title: "On-Site Assessment",
      desc: "A technician inspects your equipment, diagnoses the problem, and provides a clear written estimate.",
    },
    {
      num: "03",
      icon: "build",
      title: "Expert Service",
      desc: "Approved repairs or installations are completed efficiently with quality parts and professional workmanship.",
    },
    {
      num: "04",
      icon: "verified",
      title: "Follow-Up Support",
      desc: "We verify proper operation, explain maintenance recommendations, and remain available for ongoing support.",
    },
  ],
  faqs: [
    {
      q: "Do you offer commercial maintenance contracts?",
      a: "Yes. We create customized maintenance programs based on your equipment portfolio, operating hours, and budget. Regular maintenance reduces emergency breakdowns and extends equipment life significantly.",
    },
    {
      q: "How quickly can you respond to commercial emergencies?",
      a: "We prioritize commercial refrigeration and HVAC emergencies that threaten inventory or business operations. Response times depend on technician availability and your location within our service area.",
    },
    {
      q: "What commercial equipment brands do you service?",
      a: "We service all major commercial HVAC and refrigeration brands including Carrier, Trane, Lennox, Heatcraft, Hussmann, and others. Our technicians carry common commercial parts on service trucks.",
    },
    {
      q: "Can you handle new commercial installations?",
      a: "Yes. We manage equipment selection, permit coordination, rigging, installation, startup, and commissioning for new commercial HVAC and refrigeration systems.",
    },
  ],
  ctaTitle: "Keep Your Business Running Smoothly",
  detailSections: commercialDetailSections,
};
