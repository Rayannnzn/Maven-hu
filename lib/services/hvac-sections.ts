import type { ServiceDetailSection } from "./types";

export const hvacDetailSections: ServiceDetailSection[] = [
  {
    id: "ac-repair",
    group: "Air Conditioning",
    heading: "AC Repair",
    description:
      "When your air conditioner stops cooling on a humid Maryland or Virginia afternoon, you need a fast, accurate diagnosis — not guesswork. Maven's HVAC technicians troubleshoot refrigerant leaks, compressor failures, frozen evaporator coils, capacitor burnout, and electrical faults using professional-grade diagnostic tools. We repair all major brands and explain your options clearly before any work begins.",
    benefits: [
      "Same-day AC repair appointments available across our service area",
      "Upfront written estimates with no hidden fees",
      "Experienced technicians trained on all major AC brands and models",
      "Repairs backed by Maven workmanship guarantee",
    ],
    ctaText: "Schedule AC Repair",
  },
  {
    id: "ac-maintenance",
    group: "Air Conditioning",
    heading: "AC Maintenance",
    description:
      "Annual air conditioning maintenance is the single best investment you can make in your cooling system's longevity and efficiency. Our comprehensive tune-ups include coil cleaning, refrigerant level checks, electrical connection tightening, condensate drain clearing, and full system performance testing — keeping your AC running efficiently through the Mid-Atlantic's demanding summer season.",
    benefits: [
      "Lower monthly energy bills through improved system efficiency",
      "Fewer emergency breakdowns during peak summer heat",
      "Extended equipment lifespan with preventive care",
      "Priority scheduling for maintenance plan members",
    ],
    ctaText: "Book AC Maintenance",
  },
  {
    id: "ac-installation",
    group: "Air Conditioning",
    heading: "AC Installation",
    description:
      "Replacing an aging or undersized air conditioner with a properly sized, high-efficiency unit transforms your home's comfort and energy costs. Maven handles complete AC installations — from load calculations and equipment selection to ductwork assessment, permit coordination, and final commissioning. We install central air systems, ductless mini-splits, and heat pump cooling configurations tailored to your home's layout and budget.",
    benefits: [
      "Proper sizing prevents short-cycling and uneven cooling",
      "High-SEER equipment options that qualify for energy rebates",
      "Professional installation with manufacturer warranty registration",
      "Old equipment removal and responsible disposal included",
    ],
    ctaText: "Get an Installation Quote",
  },
  {
    id: "central-air-conditioning",
    group: "Air Conditioning",
    heading: "Central Air Conditioning",
    description:
      "Central air conditioning delivers whole-home comfort through a network of supply and return ducts connected to a single outdoor condenser unit. Maven designs, installs, and services central AC systems for homes throughout Montgomery County and Northern Virginia — including ductwork modifications, zoning solutions, and integration with existing heating equipment for year-round climate control.",
    benefits: [
      "Consistent temperature control in every room",
      "Improved indoor air quality with proper filtration options",
      "Quiet operation with modern variable-speed equipment",
      "Seamless integration with existing furnace and ductwork systems",
    ],
    ctaText: "Explore Central AC Options",
  },
  {
    id: "ac-thermostats",
    group: "Air Conditioning",
    heading: "Thermostats",
    description:
      "The right thermostat makes a measurable difference in comfort and energy savings. Maven installs and configures programmable, Wi-Fi, and smart thermostats — including Nest, Ecobee, and Honeywell models — with proper wiring, compatibility checks, and system integration. We also troubleshoot thermostat communication errors, inaccurate temperature readings, and short-cycling caused by improper calibration.",
    benefits: [
      "Remote temperature control from your smartphone",
      "Automated scheduling reduces energy waste when you're away",
      "Compatibility verification before installation",
      "Professional wiring ensures reliable system communication",
    ],
    ctaText: "Upgrade Your Thermostat",
  },
  {
    id: "rooftop-units",
    group: "Air Conditioning",
    heading: "Rooftop Units",
    description:
      "Rooftop HVAC units (RTUs) are the workhorses of commercial and multi-unit buildings, delivering packaged heating and cooling from a single rooftop installation. Maven services, repairs, and replaces rooftop units for small businesses, retail spaces, and light commercial properties — handling refrigerant work, economizer repairs, belt and motor replacements, and full unit changeouts with crane coordination when needed.",
    benefits: [
      "Minimized business downtime with efficient repair scheduling",
      "Experienced with major RTU brands including Carrier, Trane, and Lennox",
      "Preventive maintenance programs to avoid costly mid-season failures",
      "Energy-efficient replacement options with improved SEER ratings",
    ],
    ctaText: "Request Rooftop Unit Service",
  },
  {
    id: "furnace-installation",
    group: "Heating",
    heading: "Furnace Installation",
    description:
      "A properly installed furnace keeps your family warm through Maryland and Virginia winters while operating safely and efficiently. Maven installs gas and electric furnaces with correct sizing, ductwork connections, gas line work, venting, and combustion safety testing. We help you choose between single-stage, two-stage, and modulating furnaces based on your home's heating load, budget, and efficiency goals.",
    benefits: [
      "AFUE ratings up to 98% for maximum fuel efficiency",
      "Correct sizing eliminates short-cycling and cold spots",
      "Full permit and inspection coordination included",
      "Manufacturer warranty registration handled on your behalf",
    ],
    ctaText: "Get a Furnace Installation Quote",
  },
  {
    id: "furnace-maintenance",
    group: "Heating",
    heading: "Furnace Maintenance",
    description:
      "Annual furnace maintenance catches worn components, dirty burners, and cracked heat exchangers before they become safety hazards or no-heat emergencies. Our heating tune-up includes combustion analysis, blower motor inspection, filter replacement, thermostat calibration, flue and vent checking, and a complete safety inspection — giving you confidence that your furnace is ready for winter.",
    benefits: [
      "Carbon monoxide and combustion safety verification",
      "Improved heating efficiency and lower gas bills",
      "Extended furnace lifespan with preventive component replacement",
      "Peace of mind before the first cold snap hits",
    ],
    ctaText: "Schedule Furnace Maintenance",
  },
  {
    id: "furnace-repair",
    group: "Heating",
    heading: "Furnace Repair",
    description:
      "A furnace that won't ignite, cycles constantly, or blows cold air needs professional attention — especially during freezing weather. Maven's heating technicians diagnose and repair ignition failures, blower motor problems, limit switch faults, gas valve issues, and cracked heat exchangers. We carry common replacement parts on our trucks and provide upfront pricing before starting any repair.",
    benefits: [
      "Emergency no-heat response available for urgent situations",
      "Accurate diagnosis prevents unnecessary part replacements",
      "All major furnace brands serviced by experienced technicians",
      "Safety inspection included with every repair visit",
    ],
    ctaText: "Schedule Furnace Repair",
  },
  {
    id: "heat-pumps",
    group: "Heating",
    heading: "Heat Pumps",
    description:
      "Heat pumps provide efficient heating and cooling in a single system — ideal for the Mid-Atlantic climate where winters are moderate and summers are hot. Maven installs, repairs, and maintains air-source and ductless heat pump systems, handling refrigerant charging, defrost cycle troubleshooting, auxiliary heat integration, and dual-fuel configurations that pair a heat pump with a backup furnace for extreme cold.",
    benefits: [
      "Year-round comfort from a single energy-efficient system",
      "Lower heating costs compared to electric resistance heat",
      "Ductless options for homes without existing ductwork",
      "Eligible for federal and utility energy efficiency incentives",
    ],
    ctaText: "Learn About Heat Pumps",
  },
  {
    id: "heating-thermostats",
    group: "Heating",
    heading: "Thermostats",
    description:
      "Heating performance depends heavily on accurate thermostat control. Maven installs smart and programmable thermostats optimized for furnace and heat pump systems — configuring heat pump balance points, auxiliary heat lockout temperatures, and multi-stage heating schedules. We also repair wiring faults, replace failing thermostats, and integrate zoning controls for multi-level homes.",
    benefits: [
      "Optimized heating schedules reduce energy consumption",
      "Heat pump-specific settings maximize efficiency",
      "Zoning controls for independent temperature management",
      "Smart home integration with voice assistant compatibility",
    ],
    ctaText: "Schedule Thermostat Service",
  },
];
