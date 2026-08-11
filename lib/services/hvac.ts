import type { ServicePageData } from "./types";
import { hvacDetailSections } from "./hvac-sections";
import { company } from "@/lib/site";

export const hvacData: ServicePageData = {
  slug: "hvac",
  title: "HVAC Services",
  seoTitle: "HVAC Services in Maryland | AC & Heating Repair, Install | Maven",
  metaDescription: `Licensed HVAC contractors serving Maryland — AC repair, furnace repair, heat pump & geothermal installation, duct cleaning. Same-day service. Call ${company.phone}.`,
  heroImage: "/images/hvac/hvac-hero.png",
  heroTitle: "Professional HVAC Services in Maryland",
  heroDescription:
    "From emergency AC repairs to full system replacements, Maven's experienced HVAC technicians keep your home comfortable through humid Mid-Atlantic summers and winter freezes. Upfront pricing, same-day appointments, and quality workmanship you can trust.",
  overviewTitle: "About Our HVAC Services in Maryland",
  overview: [
    "Your heating and cooling system is the backbone of home comfort — especially here in Maryland, where humid summers, temperature swings, and occasional winter freezes push equipment to its limits. When your HVAC system struggles, every room in your home feels it.",
    "Maven Home Services provides complete HVAC solutions for homeowners and property managers throughout Montgomery County, Frederick, and communities within a 30-mile radius of our Rockville headquarters. Our experienced technicians diagnose problems accurately, recommend honest solutions, and complete repairs that last.",
    "Whether you need a seasonal tune-up, emergency repair, ductwork service, or a full HVAC installation, we arrive on time with the tools and parts to deliver quality workmanship on every visit.",
  ],
  offeredServicesSubtitle:
    "Comprehensive HVAC solutions from experienced Maryland technicians.",
  offeredServices: [
    {
      icon: "ac_unit",
      name: "Air Conditioning Repair",
      desc: "Fast diagnosis and repair for refrigerant leaks, compressor failures, frozen coils, and thermostat issues. Same-day AC repair available across Montgomery County.",
    },
    {
      icon: "local_fire_department",
      name: "Heating System Repair",
      desc: "Furnace, heat pump, and boiler repair for no-heat emergencies, ignition failures, blower motor issues, and uneven heating.",
    },
    {
      icon: "hvac",
      name: "HVAC Installation in Maryland",
      desc: "Professional installation of central air, heat pumps, geothermal systems, ductless mini-splits, and complete system replacements sized for your home.",
    },
    {
      icon: "build",
      name: "Preventive Maintenance",
      desc: "Seasonal tune-ups that extend equipment life, improve efficiency, and catch small problems before they become expensive repairs.",
    },
    {
      icon: "air",
      name: "Duct Cleaning & Ductwork Services",
      desc: "Air duct cleaning, sealing, repair, and replacement to improve airflow, indoor air quality, and overall system performance for Maryland homes.",
    },
    {
      icon: "thermostat",
      name: "Thermostat Installation",
      desc: "Smart and programmable thermostat setup, wiring, and integration with your existing HVAC system for better comfort control.",
    },
    {
      icon: "airware",
      name: "Indoor Air Quality",
      desc: "Air purifiers, humidifiers, dehumidifiers, and UV light systems to reduce allergens, mold, and airborne contaminants.",
    },
    {
      icon: "emergency",
      name: "Emergency HVAC Service",
      desc: "Emergency dispatch for no-heat and no-cool situations across our Maryland service area. Response times depend on technician availability and your location.",
    },
  ],
  benefitsTitle: "Why Maryland Homeowners Choose Maven",
  benefits: [
    {
      title: "Experienced HVAC Technicians",
      desc: "Our experienced, highly trained HVAC technicians work on residential systems of all makes and models.",
    },
    {
      title: "Energy-Efficient Solutions",
      desc: "We recommend high-SEER equipment and system upgrades that lower monthly utility bills while improving whole-home comfort.",
    },
    {
      title: "Upfront Written Estimates",
      desc: "You receive a clear, itemized estimate before any work begins. No surprise charges, no pressure to approve unnecessary repairs.",
    },
    {
      title: "Manufacturer-Backed Warranties",
      desc: "Installations include the applicable manufacturer parts warranty, and we stand behind our workmanship on every repair and installation.",
    },
  ],
  whyChoose: [
    {
      title: "Mid-Atlantic Climate Expertise",
      desc: "We understand how humid summers, winter freezes, and seasonal humidity swings affect HVAC systems in Maryland homes — and we service accordingly.",
    },
    {
      title: "Fully Stocked Service Vans",
      desc: "Our technicians carry common parts and tools on every truck, resolving most repairs in a single visit without return trips.",
    },
    {
      title: "Honest System Recommendations",
      desc: "We repair when repair makes sense and recommend replacement only when it's the most cost-effective long-term solution for your home.",
    },
  ],
  steps: [
    {
      num: "01",
      icon: "calendar_month",
      title: "Schedule Your Service",
      desc: "Book online or call our dispatch line. We will contact you promptly to confirm your appointment and share your technician's name.",
    },
    {
      num: "02",
      icon: "manage_search",
      title: "Thorough System Diagnosis",
      desc: "Your technician inspects the full system — indoor unit, outdoor unit, ductwork, and thermostat — before recommending any work.",
    },
    {
      num: "03",
      icon: "construction",
      title: "Expert Repair or Install",
      desc: "We complete the work using quality OEM and aftermarket parts, following all local codes and manufacturer specifications.",
    },
    {
      num: "04",
      icon: "task_alt",
      title: "Performance Verification",
      desc: "Before we leave, we test system performance, review maintenance tips, and ensure you're satisfied with the results.",
    },
  ],
  faqs: [
    {
      q: "How often should I schedule HVAC maintenance in Maryland?",
      a: "Most Maryland homes should schedule HVAC maintenance twice a year — once in spring for the AC system and once in fall for the furnace or heat pump — to catch problems before peak-season breakdowns.",
    },
    {
      q: "How long does an HVAC system typically last?",
      a: "A well-maintained HVAC system typically lasts 15 to 20 years, while furnaces can last 15 to 25 years depending on usage, maintenance, and equipment quality.",
    },
    {
      q: "Do you offer financing for new HVAC systems?",
      a: "Yes, Maven works with third-party lending partners who may offer promotional financing for qualified customers on HVAC installations. Terms and eligibility are set by the lender.",
    },
    {
      q: "What size AC unit does my home need?",
      a: "The right AC size depends on square footage, insulation, ductwork, and sun exposure. Maven performs a load calculation during your estimate to recommend the correctly sized system for your Maryland home.",
    },
    {
      q: "Can you service all HVAC brands?",
      a: "Yes, our technicians are experienced with all major residential and light commercial HVAC brands, including Carrier, Trane, Lennox, Goodman, and Rheem.",
    },
    {
      q: "What should I do if my AC stops working?",
      a: `Check your thermostat settings and circuit breaker first. If the unit still won't run, call Maven at ${company.phone} — same-day AC repair is available across our Maryland service area, subject to technician availability.`,
    },
  ],
  ctaTitle: "Ready for Reliable Heating & Cooling?",
  ctaDescription:
    "Schedule your service today or call our team to request an estimate. Same-day appointments available across Maryland, subject to technician availability.",
  detailSections: hvacDetailSections,
};
