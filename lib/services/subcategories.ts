import type { ServicePageData } from "./types";

const subcategoryData: Record<string, ServicePageData> = {
  // ── HVAC ──────────────────────────────────────────────────────────────────

  "hvac/residential-commercial": {
    slug: "hvac/residential-commercial",
    title: "Residential & Commercial HVAC",
    metaDescription:
      "Expert HVAC services for homes and businesses in Maryland and Virginia. Comfort solutions tailored to residential and commercial properties of every size.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Residential & Commercial HVAC Solutions",
    heroDescription:
      "Whether you're a homeowner needing a seasonal tune-up or a facility manager overseeing multiple systems, Maven delivers dependable HVAC service sized for your property.",
    overview: [
      "Residential and commercial HVAC systems share the same fundamentals but differ significantly in scale, complexity, and uptime demands. Our team is equipped to handle both — from single-family homes to multi-unit buildings, retail spaces, and office facilities.",
      "We tailor every recommendation to the specific needs of the property: load calculations, zoning, energy efficiency targets, and local code compliance all factor into our proposals.",
    ],
    offeredServices: [
      { icon: "home", name: "Home HVAC Service", desc: "Repair, maintenance, and installation for central air, heat pumps, and furnaces in single-family and multi-family residences." },
      { icon: "business", name: "Commercial HVAC", desc: "Rooftop units, split systems, and VRF installations for offices, retail, and light-commercial buildings." },
      { icon: "build", name: "Preventive Maintenance Plans", desc: "Scheduled maintenance contracts that keep residential and commercial systems running at peak efficiency year-round." },
      { icon: "emergency", name: "24/7 Emergency Service", desc: "Round-the-clock dispatch for critical no-heat and no-cool situations — residential or commercial." },
    ],
    benefits: [
      { title: "Licensed for Both Markets", desc: "Our technicians hold residential and commercial HVAC certifications, covering all property types without switching contractors." },
      { title: "Scalable Maintenance Agreements", desc: "Custom service agreements for property managers covering multiple units or locations under a single contract." },
      { title: "Code-Compliant Installations", desc: "Every installation meets Maryland and Virginia building codes with required permits and inspections." },
      { title: "Upfront Pricing", desc: "Clear written estimates before any work begins — no surprises for homeowners or business owners." },
    ],
    whyChoose: [
      { title: "One Contractor, All Property Types", desc: "Stop managing separate contractors. Maven handles residential and commercial HVAC under one roof, with consistent service standards." },
      { title: "Flexible Scheduling", desc: "After-hours and weekend appointments available to minimize disruption to your business operations or household." },
      { title: "Energy Efficiency Focus", desc: "We recommend high-efficiency upgrades that reduce operating costs for both residential and commercial clients." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Schedule Your Assessment", desc: "Book a site visit for residential or commercial evaluation. We confirm within minutes." },
      { num: "02", icon: "manage_search", title: "Property Evaluation", desc: "We assess your system, space, load requirements, and energy usage before making any recommendations." },
      { num: "03", icon: "construction", title: "Service or Installation", desc: "Repairs, tune-ups, or full system installs completed to code with quality parts." },
      { num: "04", icon: "task_alt", title: "Follow-Up & Support", desc: "We verify performance, provide documentation, and are available for any follow-up questions." },
    ],
    faqs: [
      { q: "Do you service commercial properties?", a: "Yes. We handle light-commercial buildings including offices, retail spaces, restaurants, and multi-unit residential properties." },
      { q: "Can I get a maintenance agreement for multiple units?", a: "Absolutely. We offer custom maintenance contracts for property managers and commercial clients covering any number of units." },
      { q: "Do commercial HVAC systems require more frequent maintenance?", a: "Typically yes — commercial systems run longer hours under heavier loads. We recommend quarterly inspections for most commercial applications." },
    ],
    ctaTitle: "Serving Homes & Businesses Across Maryland & Virginia",
  },

  "hvac/air-conditioners": {
    slug: "hvac/air-conditioners",
    title: "Air Conditioner Services",
    metaDescription:
      "AC repair, installation, and maintenance in Maryland and Virginia. Same-day air conditioner service from NATE-certified technicians.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Air Conditioner Repair & Installation",
    heroDescription:
      "Fast, reliable air conditioning service for homes and businesses across the DMV. From emergency repairs to new system installs, Maven keeps you cool.",
    overview: [
      "Mid-Atlantic summers push air conditioning systems hard — high humidity, extended run times, and heat spikes can strain even well-maintained equipment. When your AC struggles, comfort drops and energy bills climb.",
      "Maven's NATE-certified technicians diagnose and repair all brands of central air conditioners, ductless mini-splits, and heat pumps. We carry common parts on every truck for same-visit repairs in most cases.",
    ],
    offeredServices: [
      { icon: "ac_unit", name: "AC Repair", desc: "Diagnosis and repair of refrigerant leaks, compressor failures, frozen coils, blower motor issues, and thermostat faults." },
      { icon: "hvac", name: "AC Installation", desc: "New central air systems, ductless mini-splits, and heat pump installations sized with Manual J load calculations." },
      { icon: "build", name: "AC Tune-Up", desc: "Pre-season maintenance including coil cleaning, refrigerant check, electrical testing, and filter replacement." },
      { icon: "air", name: "Ductless Mini-Split Service", desc: "Installation, repair, and maintenance for ductless systems in additions, garages, and older homes without ductwork." },
      { icon: "thermostat", name: "Thermostat Upgrade", desc: "Smart thermostat installation for better comfort control and energy savings connected to your AC system." },
      { icon: "emergency", name: "Emergency AC Repair", desc: "Same-day and 24/7 emergency service for no-cool situations during peak summer heat." },
    ],
    benefits: [
      { title: "Same-Day Availability", desc: "Most AC repairs are completed same-day with parts on our service vans." },
      { title: "All Brands Serviced", desc: "Carrier, Trane, Lennox, Rheem, Goodman, York, and all other major manufacturers." },
      { title: "NATE-Certified Technicians", desc: "Our techs average 12+ years of field experience and hold industry-leading certifications." },
      { title: "Workmanship Guarantee", desc: "30-day workmanship guarantee on every repair." },
    ],
    whyChoose: [
      { title: "Accurate First Diagnosis", desc: "We test the full system before recommending repairs — no unnecessary parts replacement." },
      { title: "Honest Repair vs. Replace Advice", desc: "We give you an honest assessment of whether repair or replacement makes better financial sense for your situation." },
      { title: "High-SEER Replacements", desc: "When it's time for a new system, we install energy-efficient equipment that lowers your monthly utility costs." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Book Service", desc: "Call or book online. We'll confirm your appointment and send your technician's ETA." },
      { num: "02", icon: "manage_search", title: "Full System Diagnosis", desc: "We inspect the indoor unit, outdoor unit, refrigerant charge, ductwork, and thermostat." },
      { num: "03", icon: "construction", title: "Repair or Replace", desc: "We complete repairs on the spot or schedule an installation with zero-pressure guidance." },
      { num: "04", icon: "task_alt", title: "Performance Test", desc: "We verify cooling output and system efficiency before leaving your home." },
    ],
    faqs: [
      { q: "Why is my AC not cooling properly?", a: "Common causes include low refrigerant, dirty coils, a failing compressor, restricted airflow, or thermostat issues. A technician diagnosis is the fastest way to pinpoint the problem." },
      { q: "How long does an AC system last?", a: "Central air conditioners typically last 12–15 years with proper maintenance. Systems over 12 years old that require frequent repairs are often better replaced than repeatedly repaired." },
      { q: "What size AC do I need?", a: "Proper sizing requires a Manual J load calculation. An oversized unit short-cycles and leaves humidity behind; an undersized one runs constantly. We size every installation correctly." },
      { q: "Is same-day AC repair available?", a: "Yes — we offer same-day service on most repairs and 24/7 emergency dispatch during summer months." },
    ],
    ctaTitle: "Stay Cool All Summer — Book AC Service Today",
  },

  "hvac/refrigerators": {
    slug: "hvac/refrigerators",
    title: "Refrigerator Services",
    metaDescription:
      "Professional refrigerator repair and installation in Maryland and Virginia. Commercial and residential refrigeration service from licensed technicians.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Refrigerator Repair & Service",
    heroDescription:
      "Reliable refrigerator repair for homes and commercial kitchens across Maryland and Virginia. Fast diagnostics, quality parts, and lasting repairs.",
    overview: [
      "A failing refrigerator puts food safety at risk and can cost hundreds in spoiled inventory for commercial operations. Maven's refrigeration technicians diagnose problems accurately and carry common parts to complete most repairs in a single visit.",
      "We service all major residential refrigerator brands as well as commercial reach-in and undercounter refrigerators used in restaurants, delis, and food service operations.",
    ],
    offeredServices: [
      { icon: "kitchen", name: "Residential Refrigerator Repair", desc: "Repair of cooling failures, ice maker issues, water leaks, compressor problems, and thermostat faults for all major brands." },
      { icon: "business", name: "Commercial Refrigerator Service", desc: "Reach-in coolers, undercounter units, and display cases for restaurants, delis, and commercial kitchens." },
      { icon: "build", name: "Preventive Maintenance", desc: "Coil cleaning, gasket inspection, and refrigerant checks to extend equipment life and maintain food safety standards." },
      { icon: "emergency", name: "Emergency Refrigeration Repair", desc: "Priority response for commercial refrigeration failures where food inventory is at stake." },
    ],
    benefits: [
      { title: "Fast Parts Availability", desc: "We stock common compressors, thermostats, and gaskets to complete most repairs same-day." },
      { title: "All Brands Serviced", desc: "Samsung, LG, Whirlpool, GE, Sub-Zero, True, Turbo Air, and all other residential and commercial brands." },
      { title: "Food Safety Priority", desc: "We understand the urgency of refrigeration failures and prioritize emergency commercial calls." },
      { title: "Licensed & Insured", desc: "Fully licensed refrigeration technicians certified for EPA-regulated refrigerant handling." },
    ],
    whyChoose: [
      { title: "Commercial & Residential Expertise", desc: "Our techs work on home refrigerators and commercial units — you don't need a separate contractor." },
      { title: "Refrigerant Certified", desc: "EPA Section 608 certified for safe refrigerant handling on all refrigeration systems." },
      { title: "Upfront Pricing", desc: "Written estimates before any work begins. No hidden fees after the repair." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Call or Book Online", desc: "Describe your refrigerator issue and we'll schedule a technician — same-day for commercial emergencies." },
      { num: "02", icon: "manage_search", title: "Accurate Diagnosis", desc: "We test the compressor, refrigerant charge, thermostat, and cooling system before recommending repairs." },
      { num: "03", icon: "construction", title: "Quality Repair", desc: "Most repairs completed in one visit using OEM or quality aftermarket parts." },
      { num: "04", icon: "task_alt", title: "Temperature Verification", desc: "We verify the unit reaches and holds proper temperature before leaving." },
    ],
    faqs: [
      { q: "Why is my refrigerator not cooling?", a: "Common causes include a dirty condenser coil, faulty evaporator fan, compressor failure, or low refrigerant. A technician can diagnose the root cause quickly." },
      { q: "Is it worth repairing an older refrigerator?", a: "Generally, if the appliance is under 10 years old and the repair cost is less than half the replacement cost, repair makes sense. We'll give you an honest recommendation." },
      { q: "Do you service commercial refrigerators?", a: "Yes — we service commercial reach-ins, undercounters, and display cases for restaurants and food service operations." },
    ],
    ctaTitle: "Refrigerator Not Cooling? We're On It.",
  },

  "hvac/ice-makers": {
    slug: "hvac/ice-makers",
    title: "Ice Maker Services",
    metaDescription:
      "Ice maker repair and installation in Maryland and Virginia. Commercial and residential ice machine service from certified technicians.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Ice Maker Repair & Installation",
    heroDescription:
      "Fast ice maker repair for homes and commercial operations across Maryland and Virginia. We service all brands of built-in, undercounter, and commercial ice machines.",
    overview: [
      "Ice makers — whether built into a refrigerator or freestanding commercial units — require regular maintenance and prompt repair to deliver clean, consistent ice production. Mineral scale, water line issues, and compressor wear are the most common failure points.",
      "Maven services residential ice makers, undercounter ice machines, and commercial modular ice systems for restaurants, bars, hotels, and healthcare facilities.",
    ],
    offeredServices: [
      { icon: "ac_unit", name: "Ice Maker Repair", desc: "Diagnosis and repair of ice production failures, water supply issues, ice dispenser faults, and freezing problems." },
      { icon: "build", name: "Ice Machine Cleaning & Descaling", desc: "Deep cleaning and descaling to maintain ice quality, meet health code requirements, and extend machine life." },
      { icon: "hvac", name: "Commercial Ice Machine Service", desc: "Modular and self-contained ice machines for restaurants, bars, healthcare facilities, and hotels." },
      { icon: "plumbing", name: "Water Line Installation", desc: "Supply line installation, filter changes, and water treatment solutions for better ice quality." },
    ],
    benefits: [
      { title: "All Ice Machine Types", desc: "Modular, self-contained, undercounter, and refrigerator-integrated ice makers." },
      { title: "NSF-Compliant Cleaning", desc: "Commercial ice machine cleaning following NSF/ANSI 12 sanitation standards." },
      { title: "Fast Response", desc: "Priority scheduling for commercial operations where ice production directly affects business." },
      { title: "Water Quality Solutions", desc: "We recommend filtration systems that reduce scale buildup and improve ice taste." },
    ],
    whyChoose: [
      { title: "Commercial & Residential", desc: "From a built-in fridge ice maker to a 500-lb/day commercial machine — we service both." },
      { title: "Sanitation-First Approach", desc: "Ice hygiene matters. We follow manufacturer and health department guidelines on every cleaning visit." },
      { title: "Preventive Programs", desc: "Scheduled cleaning and maintenance contracts available for commercial operators." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Book Service", desc: "Call or schedule online. We prioritize commercial ice machine calls." },
      { num: "02", icon: "manage_search", title: "Diagnose the Issue", desc: "We inspect water supply, ice-making cycle, compressor, and dispenser system." },
      { num: "03", icon: "construction", title: "Repair & Clean", desc: "We complete repairs and a full sanitation cleaning in the same visit where possible." },
      { num: "04", icon: "task_alt", title: "Verify Ice Production", desc: "We confirm the machine produces clean ice at rated capacity before leaving." },
    ],
    faqs: [
      { q: "Why is my ice maker not making ice?", a: "Common causes include a clogged water filter, frozen water line, faulty water inlet valve, or ice maker assembly failure. Most are repairable same-day." },
      { q: "How often should a commercial ice machine be cleaned?", a: "Every 6 months minimum per NSF guidelines — or more frequently in high-mineral or high-use environments." },
      { q: "Can you install a new undercounter ice machine?", a: "Yes — we handle water line connections, electrical hookup, and installation of undercounter and freestanding ice machines." },
    ],
    ctaTitle: "Ice Maker Down? Get It Fixed Fast.",
  },

  "hvac/furnace-heating": {
    slug: "hvac/furnace-heating",
    title: "Furnace & Heating Services",
    metaDescription:
      "Furnace repair, heating system installation, and maintenance in Maryland and Virginia. Emergency heating service available 24/7.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Furnace & Heating System Service",
    heroDescription:
      "Don't let a heating failure leave your home cold. Maven's technicians repair and install furnaces, heat pumps, and boilers across Maryland and Virginia — with 24/7 emergency service.",
    overview: [
      "Maryland winters demand reliable heating. Whether your home runs on a gas furnace, heat pump, oil boiler, or electric system, a breakdown during cold weather is an emergency — not an inconvenience.",
      "Maven provides same-day furnace repair, seasonal tune-ups, and full system replacements for homeowners and property managers throughout the DMV. Our technicians diagnose heating problems accurately and carry common parts for same-visit repairs.",
    ],
    offeredServices: [
      { icon: "local_fire_department", name: "Furnace Repair", desc: "Diagnosis and repair of ignition failures, heat exchanger cracks, blower motor issues, and control board faults." },
      { icon: "hvac", name: "Furnace Installation", desc: "High-efficiency gas and electric furnace installation with proper sizing and duct balancing." },
      { icon: "build", name: "Heating Tune-Up", desc: "Pre-season maintenance to ensure safe, efficient furnace operation before cold weather arrives." },
      { icon: "heat_pump", name: "Heat Pump Service", desc: "Repair and maintenance for heat pumps in heating mode, including defrost cycle and reversing valve issues." },
      { icon: "water_heater", name: "Boiler Service", desc: "Repair and maintenance for hot-water boiler systems in older homes." },
      { icon: "emergency", name: "Emergency Heating Repair", desc: "24/7 emergency dispatch for no-heat situations during cold weather." },
    ],
    benefits: [
      { title: "24/7 Emergency Response", desc: "Real technicians available around the clock — not an answering service — for heating emergencies." },
      { title: "Carbon Monoxide Safety", desc: "Every furnace service includes a combustion analysis and CO check for your family's safety." },
      { title: "High-Efficiency Upgrades", desc: "We install 96%+ AFUE furnaces that significantly reduce heating costs compared to older equipment." },
      { title: "All Fuel Types", desc: "Gas, oil, electric, and heat pump systems — one contractor for all your heating needs." },
    ],
    whyChoose: [
      { title: "No-Heat Priority Scheduling", desc: "Heating emergencies jump the queue. We dispatch same-day for no-heat calls during winter." },
      { title: "Safety First", desc: "We test heat exchangers for cracks and combustion for CO risk on every furnace visit." },
      { title: "Honest Replacement Guidance", desc: "If your furnace is beyond economic repair, we'll tell you plainly and help you choose a right-sized replacement." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Call for Service", desc: "For no-heat emergencies, call our line directly for priority dispatch." },
      { num: "02", icon: "manage_search", title: "Safety & System Check", desc: "We test for CO, inspect the heat exchanger, and diagnose the root cause of the heating failure." },
      { num: "03", icon: "construction", title: "Repair or Replace", desc: "Same-day repairs on most furnace issues, or guided replacement options for aging systems." },
      { num: "04", icon: "task_alt", title: "Heat Confirmed", desc: "We verify safe, proper heat output before leaving your home." },
    ],
    faqs: [
      { q: "Why is my furnace not heating?", a: "Common causes include a failed ignitor, clogged filter, faulty thermostat, tripped limit switch, or blower motor failure. Call us for a fast diagnosis." },
      { q: "Is a cracked heat exchanger dangerous?", a: "Yes — a cracked heat exchanger can leak carbon monoxide into your living space. If we find a crack, we'll explain your options and recommend immediate action." },
      { q: "How long do furnaces last?", a: "Well-maintained gas furnaces typically last 15–20 years. If yours is over 15 years old and needing repairs, a replacement evaluation makes sense." },
      { q: "Do you offer 24/7 heating repair?", a: "Yes. We dispatch technicians around the clock for no-heat emergencies during cold weather." },
    ],
    ctaTitle: "No Heat? We'll Get You Warm Today.",
  },

  "hvac/walk-in-coolers-freezers": {
    slug: "hvac/walk-in-coolers-freezers",
    title: "Walk-in Cooler & Freezer Services",
    metaDescription:
      "Walk-in cooler and freezer repair, installation, and maintenance in Maryland and Virginia. Commercial refrigeration service with fast emergency response.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Walk-in Cooler & Freezer Service",
    heroDescription:
      "Expert walk-in cooler and freezer repair for restaurants, grocery stores, and food service operations across Maryland and Virginia. Fast response to protect your inventory.",
    overview: [
      "Walk-in cooler and freezer failures threaten inventory, food safety compliance, and your bottom line. Maven's commercial refrigeration technicians respond quickly to minimize downtime and prevent costly product loss.",
      "We service walk-in boxes of all sizes — from small restaurant coolers to large grocery store freezers — covering refrigeration systems, evaporator coils, condensing units, door hardware, and floor drains.",
    ],
    offeredServices: [
      { icon: "ac_unit", name: "Walk-in Cooler Repair", desc: "Emergency and scheduled repair for temperature failures, refrigerant leaks, compressor issues, and evaporator problems." },
      { icon: "hvac", name: "Walk-in Freezer Repair", desc: "Freezer-specific service including defrost system repair, door gasket replacement, and condensing unit service." },
      { icon: "build", name: "Preventive Maintenance", desc: "Scheduled maintenance contracts to reduce breakdowns and maintain food safety temperatures year-round." },
      { icon: "construction", name: "Walk-in Installation", desc: "New walk-in cooler and freezer installation including refrigeration system, panels, doors, and floor." },
      { icon: "door_front", name: "Door & Gasket Service", desc: "Door closer, hinge, gasket, and strip curtain repair to maintain proper temperature and reduce energy waste." },
      { icon: "emergency", name: "Emergency Service", desc: "Priority dispatch for walk-in failures where food inventory is at immediate risk." },
    ],
    benefits: [
      { title: "Commercial Refrigeration Certified", desc: "EPA Section 608 certified technicians for safe refrigerant handling on commercial systems." },
      { title: "Inventory Protection Priority", desc: "We understand the urgency and dispatch emergency calls faster than routine service." },
      { title: "All Brands & Manufacturers", desc: "Heatcraft, Bohn, Hussmann, Tyler, and all other commercial refrigeration brands." },
      { title: "Maintenance Contracts", desc: "Scheduled service agreements for operators with multiple walk-in units." },
    ],
    whyChoose: [
      { title: "Fast Emergency Response", desc: "Walk-in failures get priority — we respond faster when your inventory is on the line." },
      { title: "Full System Coverage", desc: "We handle the refrigeration system, panels, doors, drains, and defrost — not just the compressor." },
      { title: "Health Code Compliance", desc: "We document service visits to support your health inspection records." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Call for Emergency or Schedule", desc: "Emergency walk-in calls are prioritized. Routine maintenance can be scheduled in advance." },
      { num: "02", icon: "manage_search", title: "System Diagnosis", desc: "We check refrigerant charge, evaporator, condenser, defrost system, and door seals." },
      { num: "03", icon: "construction", title: "Repair & Restore", desc: "We complete repairs and verify temperature recovery before leaving." },
      { num: "04", icon: "task_alt", title: "Documentation", desc: "We provide a service report for your health department compliance records." },
    ],
    faqs: [
      { q: "My walk-in cooler is not holding temperature — is this an emergency?", a: "Yes. If temperatures rise above safe food storage levels, call us immediately for priority dispatch." },
      { q: "How often should walk-in coolers be serviced?", a: "We recommend quarterly preventive maintenance for most commercial walk-in units — more frequently in heavy-use environments." },
      { q: "Do you install new walk-in coolers?", a: "Yes — we handle full walk-in installations including refrigeration system, panels, doors, and floor for new or replacement builds." },
    ],
    ctaTitle: "Walk-in Down? Call for Emergency Service Now.",
  },

  // ── PLUMBING ──────────────────────────────────────────────────────────────

  "plumbing/service-repair-installation": {
    slug: "plumbing/service-repair-installation",
    title: "Plumbing Service, Repair & Installation",
    metaDescription:
      "Full-service plumbing repair and installation in Maryland and Virginia. Licensed plumbers for residential and commercial plumbing needs.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Plumbing Service, Repair & Installation",
    heroDescription:
      "From leaky faucets to full plumbing installations, Maven's licensed plumbers handle every plumbing need for homes and businesses across Maryland and Virginia.",
    overview: [
      "Plumbing problems range from minor inconveniences to urgent emergencies that can cause significant water damage. Maven's licensed plumbers respond quickly, diagnose accurately, and complete lasting repairs.",
      "We handle the full spectrum of plumbing work — routine repairs, fixture installations, pipe replacements, and emergency leak response — for residential and commercial customers throughout the DMV.",
    ],
    offeredServices: [
      { icon: "plumbing", name: "Leak Repair", desc: "Detection and repair of pipe leaks, fixture leaks, and hidden leaks behind walls and under slabs." },
      { icon: "build", name: "Fixture Installation", desc: "Faucets, toilets, showers, tubs, and garbage disposals — supply and install or install customer-supplied fixtures." },
      { icon: "water", name: "Pipe Repair & Replacement", desc: "Copper, PEX, and PVC pipe repair for burst pipes, corroded lines, and aging plumbing systems." },
      { icon: "drain", name: "Drain Cleaning", desc: "Clearing clogs in sinks, tubs, toilets, and main lines using snaking and hydro-jetting." },
      { icon: "emergency", name: "Emergency Plumbing", desc: "24/7 emergency response for burst pipes, major leaks, and sewer backups." },
      { icon: "construction", name: "Remodel Plumbing", desc: "Rough-in and finish plumbing for kitchen and bathroom remodels." },
    ],
    benefits: [
      { title: "Licensed Master Plumbers", desc: "All work is performed or supervised by licensed master plumbers meeting Maryland and Virginia requirements." },
      { title: "Same-Day Service", desc: "Most plumbing repairs are available same-day with emergency 24/7 coverage." },
      { title: "Upfront Pricing", desc: "Written estimates before work begins. No surprise charges after the job." },
      { title: "Guaranteed Workmanship", desc: "30-day workmanship guarantee on all repairs and installations." },
    ],
    whyChoose: [
      { title: "No Subcontractors", desc: "Every technician dispatched is a Maven employee — licensed, background-checked, and accountable." },
      { title: "Fully Stocked Vans", desc: "We carry common parts and fittings so most repairs are completed in one visit." },
      { title: "Code-Compliant Work", desc: "We pull permits when required and ensure all work meets local plumbing codes." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Book Service", desc: "Call or schedule online for same-day or next-day plumbing service." },
      { num: "02", icon: "manage_search", title: "Diagnose the Problem", desc: "We identify the root cause before recommending any repairs." },
      { num: "03", icon: "construction", title: "Complete the Work", desc: "Quality repairs and installations completed per code with quality materials." },
      { num: "04", icon: "task_alt", title: "Verify & Inspect", desc: "We test all connections and verify there are no leaks before leaving." },
    ],
    faqs: [
      { q: "Do you handle emergency plumbing calls?", a: "Yes — we offer 24/7 emergency dispatch for burst pipes, major leaks, and sewer backups." },
      { q: "Are your plumbers licensed?", a: "Yes. All our plumbers are licensed in Maryland and Virginia and carry full liability insurance." },
      { q: "Do you pull permits for plumbing work?", a: "We pull required permits for work that demands them. We'll tell you upfront when a permit is needed." },
    ],
    ctaTitle: "Plumbing Problem? We'll Fix It Right.",
  },

  "plumbing/water-heaters": {
    slug: "plumbing/water-heaters",
    title: "Water Heater Services",
    metaDescription:
      "Water heater repair and replacement in Maryland and Virginia. Tank and tankless water heater service from licensed plumbers.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Water Heater Repair & Replacement",
    heroDescription:
      "No hot water? Maven's licensed plumbers repair and replace tank and tankless water heaters across Maryland and Virginia — often same-day.",
    overview: [
      "A failed water heater disrupts daily life immediately. Maven provides fast diagnosis and repair for tank water heaters, and expert installation of high-efficiency tank and tankless replacement systems.",
      "We carry common water heater parts and can replace most standard tank units same-day from our vehicle stock. Tankless installations are typically scheduled within 24–48 hours.",
    ],
    offeredServices: [
      { icon: "water_heater", name: "Water Heater Repair", desc: "Repair of pilot light failures, heating element faults, thermostat issues, anode rod replacement, and leaking connections." },
      { icon: "build", name: "Tank Water Heater Replacement", desc: "Same-day replacement of 40- and 50-gallon gas and electric tank water heaters." },
      { icon: "hvac", name: "Tankless Water Heater Installation", desc: "Gas and electric tankless (on-demand) water heater installation with proper sizing and gas line work." },
      { icon: "construction", name: "Water Heater Maintenance", desc: "Annual flushing, anode rod inspection, and thermostat calibration to extend water heater life." },
    ],
    benefits: [
      { title: "Same-Day Tank Replacement", desc: "We stock common 40- and 50-gallon units for same-day installation in most cases." },
      { title: "Tankless Expertise", desc: "Proper sizing, gas line upgrades, and venting for on-demand systems." },
      { title: "Energy-Efficient Options", desc: "We recommend Energy Star units and heat pump water heaters that significantly lower energy costs." },
      { title: "Licensed Installation", desc: "All water heater work is performed by licensed plumbers and meets code requirements." },
    ],
    whyChoose: [
      { title: "Fast Hot Water Restoration", desc: "We prioritize no-hot-water calls and complete most replacements the same day you call." },
      { title: "Honest Sizing Advice", desc: "We size replacement units correctly — not just the same size as your old one." },
      { title: "Full Gas Line Service", desc: "We handle any gas line upgrades required for tankless installations in-house." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Book Same-Day Service", desc: "Call for priority scheduling on no-hot-water calls." },
      { num: "02", icon: "manage_search", title: "Assess Repair vs. Replace", desc: "We evaluate your current unit's age and condition and give you an honest recommendation." },
      { num: "03", icon: "construction", title: "Repair or Install", desc: "Same-day repairs or replacement installation using quality, code-compliant equipment." },
      { num: "04", icon: "task_alt", title: "Hot Water Restored", desc: "We verify proper temperature, pressure, and operation before leaving." },
    ],
    faqs: [
      { q: "How long do water heaters last?", a: "Tank water heaters typically last 8–12 years. Tankless units can last 20+ years with proper maintenance." },
      { q: "Should I repair or replace my water heater?", a: "If your tank is over 10 years old and needs a significant repair, replacement is usually the better investment. We'll give you an honest comparison." },
      { q: "What are the benefits of tankless water heaters?", a: "Tankless units provide on-demand hot water, last longer, and use 20–30% less energy than tank models. Upfront cost is higher but pays back over time." },
      { q: "Can you replace my water heater today?", a: "For standard 40- and 50-gallon tank replacements, same-day service is usually available." },
    ],
    ctaTitle: "No Hot Water? We'll Restore It Today.",
  },

  "plumbing/sinks-basins": {
    slug: "plumbing/sinks-basins",
    title: "Sink & Basin Services",
    metaDescription:
      "Sink and basin installation, repair, and drain service in Maryland and Virginia. Kitchen, bathroom, and utility sink plumbing from licensed plumbers.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Sink & Basin Repair & Installation",
    heroDescription:
      "Leaky faucet, slow drain, or new sink installation — Maven's licensed plumbers handle all sink and basin plumbing for homes and businesses in Maryland and Virginia.",
    overview: [
      "Sinks and basins are among the most-used fixtures in any home or commercial property. Dripping faucets, slow drains, under-sink leaks, and failing garbage disposals are everyday plumbing issues that our technicians resolve quickly.",
      "We handle kitchen sinks, bathroom vanities, utility sinks, mop basins, and commercial three-compartment sinks — installation, repair, and drain service.",
    ],
    offeredServices: [
      { icon: "plumbing", name: "Faucet Repair & Replacement", desc: "Fix drips, replace cartridges, or install a new faucet — all brands and configurations." },
      { icon: "build", name: "Sink Installation", desc: "Drop-in, undermount, and vessel sink installation for kitchen and bathroom remodels." },
      { icon: "drain", name: "Drain Cleaning", desc: "Clear slow or clogged sink drains using snaking or hydro-jetting." },
      { icon: "water", name: "Under-Sink Leak Repair", desc: "P-trap, supply line, and shut-off valve repair and replacement." },
      { icon: "construction", name: "Garbage Disposal Service", desc: "Garbage disposal installation, repair, and replacement." },
      { icon: "business", name: "Commercial Basin Service", desc: "Three-compartment sinks, mop basins, and hand-wash stations for commercial kitchens and facilities." },
    ],
    benefits: [
      { title: "All Sink Types", desc: "Kitchen, bathroom, utility, bar, and commercial sinks — we handle them all." },
      { title: "Parts on the Truck", desc: "We carry common faucet cartridges, P-traps, and supply lines for same-visit repairs." },
      { title: "Remodel Support", desc: "We coordinate with contractors for new sink rough-in and finish plumbing during kitchen and bath remodels." },
      { title: "Licensed & Insured", desc: "All work performed by licensed plumbers with full liability coverage." },
    ],
    whyChoose: [
      { title: "Same-Day Faucet Repair", desc: "Most faucet repairs and drain clogs are resolved in a single same-day visit." },
      { title: "Supply-and-Install or Install-Only", desc: "We can supply the fixture or install yours — whichever works for your project." },
      { title: "No Drip Left Behind", desc: "We test all connections under pressure before closing up the job." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Book Service", desc: "Same-day appointments available for most sink repairs." },
      { num: "02", icon: "manage_search", title: "Assess the Issue", desc: "We check the faucet, drain, trap, supply lines, and shut-offs to find all problems at once." },
      { num: "03", icon: "construction", title: "Repair or Install", desc: "Completed with quality parts and proper waterproofing." },
      { num: "04", icon: "task_alt", title: "Test & Verify", desc: "We run water and inspect all connections before leaving." },
    ],
    faqs: [
      { q: "Can you install a sink I already bought?", a: "Yes — we offer install-only service for customer-supplied fixtures. Just let us know the sink model when you book." },
      { q: "Why is my sink draining slowly?", a: "Partial clogs from grease, soap, or hair build-up are the most common cause. We clear them quickly with snaking or hydro-jetting." },
      { q: "Do you install garbage disposals?", a: "Yes — we install and replace garbage disposals, including the electrical connection." },
    ],
    ctaTitle: "Sink Problems? We'll Handle It.",
  },

  "plumbing/residential-commercial": {
    slug: "plumbing/residential-commercial",
    title: "Residential & Commercial Plumbing",
    metaDescription:
      "Plumbing services for homes and businesses in Maryland and Virginia. Licensed plumbers for residential and light-commercial plumbing projects.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Residential & Commercial Plumbing",
    heroDescription:
      "Maven provides licensed plumbing services for homeowners, property managers, and business owners across Maryland and Virginia — from routine repairs to major commercial projects.",
    overview: [
      "Plumbing needs differ significantly between residential and commercial properties in scale, code requirements, and urgency. Maven's licensed plumbers are experienced in both markets, serving single-family homes and multi-unit buildings, restaurants, offices, and retail facilities.",
      "We offer the full scope of plumbing services — routine repairs, remodel plumbing, drain services, and emergency response — for all property types.",
    ],
    offeredServices: [
      { icon: "home", name: "Residential Plumbing", desc: "Full plumbing service for single-family homes, townhouses, and condominiums." },
      { icon: "business", name: "Commercial Plumbing", desc: "Licensed commercial plumbing for restaurants, offices, retail spaces, and light-industrial facilities." },
      { icon: "construction", name: "New Construction Plumbing", desc: "Rough-in and finish plumbing for residential and commercial new builds." },
      { icon: "emergency", name: "Emergency Plumbing", desc: "24/7 emergency response for burst pipes, major leaks, and sewer backups — residential and commercial." },
    ],
    benefits: [
      { title: "Licensed in MD & VA", desc: "Our master plumbers are licensed in both Maryland and Virginia for residential and commercial work." },
      { title: "Permits & Inspections", desc: "We handle required permits and coordinate inspections for commercial and residential projects." },
      { title: "Property Manager Programs", desc: "Priority scheduling and consolidated billing for property managers with multiple units." },
      { title: "24/7 Emergency Coverage", desc: "Emergency dispatch for both residential and commercial plumbing failures." },
    ],
    whyChoose: [
      { title: "One Contractor for All Properties", desc: "Whether you own a home or a building, Maven handles your plumbing — no need to manage multiple contractors." },
      { title: "Commercial Code Expertise", desc: "Commercial plumbing has different code requirements. Our licensed plumbers know both residential and commercial standards." },
      { title: "Scalable Service Agreements", desc: "Custom maintenance agreements for property managers covering multiple properties under one contract." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Contact Us", desc: "Call or book online for residential service or to discuss a commercial project." },
      { num: "02", icon: "manage_search", title: "Property Assessment", desc: "We assess your plumbing system or project scope before providing an estimate." },
      { num: "03", icon: "construction", title: "Complete the Work", desc: "Licensed plumbers complete all work to code with quality materials." },
      { num: "04", icon: "task_alt", title: "Inspection & Sign-Off", desc: "We coordinate required inspections and provide documentation for your records." },
    ],
    faqs: [
      { q: "Do you service commercial properties?", a: "Yes — restaurants, offices, retail spaces, and light-commercial buildings. Call to discuss larger projects." },
      { q: "Can you handle plumbing for a remodel?", a: "Yes — we provide rough-in and finish plumbing for kitchen and bathroom remodels in residential and commercial properties." },
      { q: "Do you offer maintenance agreements for property managers?", a: "Yes — custom maintenance contracts with priority scheduling and consolidated invoicing for multi-property managers." },
    ],
    ctaTitle: "Plumbing for Every Property Type in MD & VA",
  },

  // ── ELECTRICAL ────────────────────────────────────────────────────────────

  "electrical/repair-installation": {
    slug: "electrical/repair-installation",
    title: "Electrical Repair & Installation",
    metaDescription:
      "Licensed electrical repair and installation in Maryland and Virginia. From outlets to panel upgrades — safe, code-compliant electrical work.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Electrical Repair & Installation",
    heroDescription:
      "Safe, licensed electrical repair and installation for homes and businesses across Maryland and Virginia. From tripped breakers to full panel upgrades.",
    overview: [
      "Electrical problems range from nuisances — a tripping breaker, a dead outlet — to genuine safety hazards like overloaded panels, faulty wiring, and fire risks. Maven's licensed electricians diagnose issues accurately and complete safe, code-compliant repairs.",
      "We handle electrical repairs of every scale: outlet and switch replacement, ceiling fan installation, panel upgrades, whole-home rewiring, and EV charger installation.",
    ],
    offeredServices: [
      { icon: "electrical_services", name: "Outlet & Switch Repair", desc: "Dead outlets, faulty switches, GFCI replacement, and USB outlet installation." },
      { icon: "electric_bolt", name: "Panel Upgrades", desc: "Electrical panel replacement and service upgrades from 100A to 200A and beyond." },
      { icon: "lightbulb", name: "Lighting Installation", desc: "Recessed lighting, ceiling fans, under-cabinet lighting, and dimmer switches." },
      { icon: "ev_station", name: "EV Charger Installation", desc: "Level 2 EV charger installation for home garages and commercial parking facilities." },
      { icon: "build", name: "Wiring Repair", desc: "Aluminum wiring remediation, knob-and-tube replacement, and general wiring repairs." },
      { icon: "emergency", name: "Emergency Electrical Service", desc: "Same-day and 24/7 response for electrical failures, power outages, and safety hazards." },
    ],
    benefits: [
      { title: "Licensed Electricians", desc: "All work performed by licensed master and journeyman electricians in Maryland and Virginia." },
      { title: "Code-Compliant Work", desc: "We pull permits and ensure all installations meet National Electrical Code and local requirements." },
      { title: "Safety-First Approach", desc: "We identify and address hidden safety hazards — not just the symptom you called about." },
      { title: "Upfront Pricing", desc: "Written estimates before work begins. No surprises after the job." },
    ],
    whyChoose: [
      { title: "No DIY Risk", desc: "Electrical work done wrong creates fire and shock hazards. Our licensed electricians do it right, safely." },
      { title: "Permits & Inspections", desc: "We handle required permits so your work passes inspection and doesn't void homeowner's insurance." },
      { title: "Whole-Home Electrical Assessment", desc: "While we're there for one issue, we flag other potential hazards at no additional charge." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Book Service", desc: "Same-day appointments available for most electrical repairs." },
      { num: "02", icon: "manage_search", title: "Safety Assessment", desc: "We diagnose the problem and inspect the surrounding electrical system for related hazards." },
      { num: "03", icon: "construction", title: "Code-Compliant Repair", desc: "All repairs and installations completed per NEC and local code with quality materials." },
      { num: "04", icon: "task_alt", title: "Test & Verify", desc: "We test every circuit and connection before closing up the job." },
    ],
    faqs: [
      { q: "Why does my circuit breaker keep tripping?", a: "Repeated tripping usually means an overloaded circuit, a short circuit, or a failing breaker. Don't ignore it — call us for a safe diagnosis." },
      { q: "Do I need a permit for electrical work?", a: "Most panel upgrades, new circuits, and structural wiring changes require permits. We handle the permitting process for you." },
      { q: "Can you install an EV charger at my home?", a: "Yes — we install Level 2 EV chargers including any panel or wiring upgrades needed to support the circuit." },
      { q: "Is it safe to do my own electrical work?", a: "Basic tasks like replacing a switch are low-risk for a careful homeowner. Anything involving the panel, new circuits, or wiring inside walls should be handled by a licensed electrician." },
    ],
    ctaTitle: "Safe, Licensed Electrical Service in MD & VA",
  },

  "electrical/commercial-residential": {
    slug: "electrical/commercial-residential",
    title: "Commercial & Residential Electrical",
    metaDescription:
      "Electrical services for homes and businesses in Maryland and Virginia. Licensed electricians for residential and commercial electrical projects.",
    heroImage: "/images/hero-technician.jpg",
    heroTitle: "Commercial & Residential Electrical Services",
    heroDescription:
      "Maven provides licensed electrical services for homeowners and business owners across Maryland and Virginia — from residential panel upgrades to commercial tenant improvements.",
    overview: [
      "Electrical requirements differ significantly between residential and commercial properties. Commercial facilities demand higher capacity, more complex circuitry, and strict code compliance for business operations, safety, and insurance purposes.",
      "Maven's licensed electricians are experienced in both residential and light-commercial electrical work — serving homes, offices, retail spaces, restaurants, and multi-unit buildings throughout the DMV.",
    ],
    offeredServices: [
      { icon: "home", name: "Residential Electrical", desc: "Outlets, panels, lighting, fans, EV chargers, and whole-home wiring for single-family homes and condos." },
      { icon: "business", name: "Commercial Electrical", desc: "Tenant improvement wiring, commercial panel service, lighting systems, and data/power infrastructure." },
      { icon: "electric_bolt", name: "Service Upgrades", desc: "Residential 200A upgrades and commercial service entrance work for increased capacity." },
      { icon: "lightbulb", name: "Commercial Lighting", desc: "LED retrofit, parking lot lighting, emergency exit lighting, and occupancy sensor installation." },
      { icon: "ev_station", name: "EV Charging Stations", desc: "Commercial EV charging station installation for parking facilities and multi-tenant buildings." },
      { icon: "construction", name: "New Construction Wiring", desc: "Rough-in and finish wiring for residential and commercial new builds and additions." },
    ],
    benefits: [
      { title: "Licensed for Both Markets", desc: "Master electricians licensed for residential and commercial work in Maryland and Virginia." },
      { title: "Commercial Code Knowledge", desc: "Commercial electrical has different NEC requirements. Our electricians know both standards." },
      { title: "Minimal Business Disruption", desc: "We schedule commercial work to minimize impact on your business operations." },
      { title: "Permits & Inspections", desc: "We manage the full permit process for residential and commercial projects." },
    ],
    whyChoose: [
      { title: "One Electrical Contractor", desc: "Whether you own a home or a business, Maven handles your electrical needs without switching contractors." },
      { title: "Commercial Tenant Improvements", desc: "We wire commercial spaces for new tenants, office reconfigurations, and build-outs." },
      { title: "Property Manager Relationships", desc: "Consolidated service and billing for property managers with multiple residential or commercial units." },
    ],
    steps: [
      { num: "01", icon: "calendar_month", title: "Contact Us", desc: "Call or book online for residential service or to discuss a commercial project scope." },
      { num: "02", icon: "manage_search", title: "Site Assessment", desc: "We assess your electrical system and project requirements before providing an estimate." },
      { num: "03", icon: "construction", title: "Licensed Installation", desc: "All work completed by licensed electricians to NEC and local code standards." },
      { num: "04", icon: "task_alt", title: "Inspection & Sign-Off", desc: "We coordinate required inspections and provide documentation for your records." },
    ],
    faqs: [
      { q: "Do you wire commercial tenant improvements?", a: "Yes — we handle electrical for new tenant build-outs, office reconfigurations, and commercial space renovations." },
      { q: "Can you install commercial EV charging stations?", a: "Yes — Level 2 and DC fast charger infrastructure for commercial parking facilities and multi-tenant buildings." },
      { q: "Do you work with property managers?", a: "Yes — we offer priority scheduling and consolidated invoicing for property managers with multiple residential or commercial properties." },
    ],
    ctaTitle: "Licensed Electrical for Every Property in MD & VA",
  },
};

export function getSubcategoryData(parent: string, subcategory: string): ServicePageData | null {
  return subcategoryData[`${parent}/${subcategory}`] ?? null;
}

export function getSubcategorySlugs(parent: string): string[] {
  return Object.keys(subcategoryData)
    .filter((key) => key.startsWith(`${parent}/`))
    .map((key) => key.replace(`${parent}/`, ""));
}
