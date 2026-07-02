import type { ServicePageData } from "./types";

export const hvacData: ServicePageData = {
  slug: "hvac",
  title: "HVAC Services",
  metaDescription:
    "Expert HVAC repair, installation, and maintenance in Maryland and Virginia. Licensed technicians for heating, cooling, and ventilation — same-day service available.",
  heroImage: "/images/hvac-hero.jpg",
  heroTitle: "Professional HVAC Services in Maryland & Virginia",
  heroDescription:
    "From emergency AC repairs to full system replacements, Maven's licensed HVAC technicians keep your home comfortable through humid Mid-Atlantic summers and winter freezes. Upfront pricing, same-day availability, and workmanship you can trust.",
  overview: [
    "Your heating and cooling system is the backbone of home comfort — especially in the DMV, where humid summers, temperature swings, and occasional winter freezes push equipment to its limits. When your HVAC system struggles, every room in your home feels it.",
    "Maven Home Services provides complete HVAC solutions for homeowners and property managers throughout Montgomery County, Northern Virginia, and communities within a 30-mile radius of our Rockville headquarters. Our NATE-certified technicians diagnose problems accurately, recommend honest solutions, and complete repairs that last.",
    "Whether you need a seasonal tune-up, emergency repair, ductwork service, or a full system upgrade, we arrive on time with the tools and parts to get the job done right the first time.",
  ],
  offeredServices: [
    {
      icon: "ac_unit",
      name: "Air Conditioning Repair",
      desc: "Fast diagnosis and repair for refrigerant leaks, compressor failures, frozen coils, and thermostat issues. Same-day AC repair available.",
    },
    {
      icon: "local_fire_department",
      name: "Heating System Repair",
      desc: "Furnace, heat pump, and boiler repair for no-heat emergencies, ignition failures, blower motor issues, and uneven heating.",
    },
    {
      icon: "hvac",
      name: "HVAC Installation",
      desc: "Professional installation of central air, heat pumps, ductless mini-splits, and complete system replacements sized for your home.",
    },
    {
      icon: "build",
      name: "Preventive Maintenance",
      desc: "Seasonal tune-ups that extend equipment life, improve efficiency, and catch small problems before they become expensive repairs.",
    },
    {
      icon: "air",
      name: "Ductwork Services",
      desc: "Duct cleaning, sealing, repair, and replacement to improve airflow, indoor air quality, and overall system performance.",
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
      name: "24/7 Emergency HVAC",
      desc: "Round-the-clock emergency dispatch for no-heat and no-cool situations. Real technicians, not voicemail.",
    },
  ],
  benefits: [
    {
      title: "NATE-Certified Technicians",
      desc: "Our HVAC team holds North American Technician Excellence certifications and averages 12+ years of field experience on residential systems.",
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
      desc: "All installations include manufacturer parts warranties plus our 30-day workmanship guarantee on every repair and installation.",
    },
  ],
  whyChoose: [
    {
      title: "Mid-Atlantic Climate Expertise",
      desc: "We understand how humid summers, winter freezes, and seasonal humidity swings affect HVAC systems in Maryland and Virginia homes — and we service accordingly.",
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
      desc: "Book online or call our dispatch line. We confirm your appointment within minutes and send your technician's name and ETA.",
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
      q: "How often should I schedule HVAC maintenance?",
      a: "We recommend professional tune-ups twice per year — once before cooling season and once before heating season. Regular maintenance can extend equipment life by 5–10 years and prevent up to 95% of unexpected breakdowns.",
    },
    {
      q: "How long does an HVAC system typically last?",
      a: "Central air conditioners and heat pumps generally last 12–15 years with proper maintenance. Gas furnaces can last 15–20 years. If your system is over 12 years old and requiring frequent repairs, a replacement evaluation may save money long-term.",
    },
    {
      q: "Do you offer financing for new HVAC systems?",
      a: "Yes. Maven partners with leading financing providers to offer flexible payment plans, including 0% interest options on qualifying equipment purchases. Ask your technician or our office for current programs.",
    },
    {
      q: "What size AC unit does my home need?",
      a: "Proper sizing requires a Manual J load calculation based on your home's square footage, insulation, windows, and ductwork. Oversized or undersized units waste energy and reduce comfort — we size every installation correctly.",
    },
    {
      q: "Can you service all HVAC brands?",
      a: "Yes. Our technicians are trained on all major brands including Carrier, Trane, Lennox, Rheem, Goodman, York, and more. We service systems we didn't install and honor existing manufacturer warranties where applicable.",
    },
    {
      q: "What should I do if my AC stops working?",
      a: "Check your thermostat settings and circuit breaker first. If the system still won't run, call Maven's emergency line. Running a struggling AC can cause compressor damage — turn it off and wait for a professional diagnosis.",
    },
  ],
  ctaTitle: "Ready for Reliable Heating & Cooling?",
};
