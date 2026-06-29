export type BlogBodyBlock =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "ul"; content: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "HVAC" | "Plumbing" | "Electrical" | "Seasonal" | "Energy";
  date: string;
  author: { name: string; role: string };
  featuredImage: string;
  readTime: number;
  body: BlogBodyBlock[];
};

const posts: BlogPost[] = [
  {
    slug: "spring-hvac-maintenance-checklist",
    title: "Spring HVAC Maintenance Checklist for Maryland & Virginia Homeowners",
    excerpt:
      "Prepare your AC for another humid Mid-Atlantic summer with this essential spring maintenance checklist from Maven's HVAC team.",
    category: "HVAC",
    date: "2026-03-15T10:00:00.000Z",
    author: { name: "David Chen", role: "HVAC Service Manager" },
    featuredImage: "/images/blog/spring-hvac-maintenance-checklist.jpg",
    readTime: 7,
    body: [
      {
        type: "p",
        content:
          "Maryland and Northern Virginia summers are demanding on air conditioning systems. By the time July humidity arrives, your AC has already endured months of pollen, spring rains, and temperature swings. A thorough spring tune-up is the single best investment you can make to avoid mid-summer breakdowns and keep energy bills in check.",
      },
      {
        type: "h2",
        content: "Replace or Clean Your Air Filters",
      },
      {
        type: "p",
        content:
          "Start with the simplest step that delivers the biggest impact. Dirty filters restrict airflow, force your blower motor to work harder, and can cause your evaporator coil to freeze. Replace disposable filters every 30–90 days depending on household size and pets, or clean reusable filters according to manufacturer instructions.",
      },
      {
        type: "h2",
        content: "Clear the Outdoor Condenser Unit",
      },
      {
        type: "p",
        content:
          "Over winter, leaves, grass clippings, and debris accumulate around your outdoor unit. Maintain at least two feet of clearance on all sides. Gently rinse the condenser coils with a garden hose — never a pressure washer — to remove built-up grime that reduces heat transfer efficiency.",
      },
      {
        type: "h2",
        content: "Check Your Thermostat Settings",
      },
      {
        type: "p",
        content:
          "Switch your thermostat from heating to cooling mode and verify the temperature reading against a separate thermometer. If you still have an older manual thermostat, spring is an ideal time to upgrade to a programmable or smart model that can reduce cooling costs by 10–15%.",
      },
      {
        type: "h2",
        content: "Inspect Ductwork and Vents",
      },
      {
        type: "ul",
        content: [
          "Walk through your home and ensure all supply and return vents are open and unobstructed by furniture or rugs.",
          "Check visible ductwork in attics and crawl spaces for disconnected sections, gaps, or crushed flex duct.",
          "Look for signs of mold or excessive dust around vent openings.",
          "Listen for whistling or rattling when the system runs — these often indicate duct leaks.",
        ],
      },
      {
        type: "h2",
        content: "Schedule Professional Maintenance",
      },
      {
        type: "p",
        content:
          "A licensed HVAC technician will check refrigerant levels, test capacitors and contactors, lubricate motors, inspect electrical connections, and verify proper drainage from the condensate line. Maven's spring tune-up includes a full system report so you know exactly where your equipment stands before peak season hits.",
      },
      {
        type: "p",
        content:
          "Don't wait until your AC fails on the hottest day of the year. Book your spring maintenance with Maven Home Services and enjoy reliable cooling all summer long.",
      },
    ],
  },
  {
    slug: "signs-ac-needs-repair",
    title: "7 Warning Signs Your AC Needs Repair",
    excerpt:
      "Unusual noises, weak airflow, and rising energy bills often signal AC trouble. Learn when to call a professional before a small issue becomes a costly failure.",
    category: "HVAC",
    date: "2026-02-20T10:00:00.000Z",
    author: { name: "Maria Gonzalez", role: "Senior HVAC Technician" },
    featuredImage: "/images/blog/signs-ac-needs-repair.jpg",
    readTime: 6,
    body: [
      {
        type: "p",
        content:
          "Air conditioners rarely fail without warning. Most breakdowns are preceded by weeks or months of subtle symptoms that homeowners overlook — especially during DC-area heat waves when systems run continuously. Recognizing these early warning signs can save you hundreds — sometimes thousands — in repair costs and prevent the discomfort of a system failure during peak humidity.",
      },
      {
        type: "h2",
        content: "1. Warm Air from Vents",
      },
      {
        type: "p",
        content:
          "If your AC is running but blowing warm or lukewarm air, the cause could be low refrigerant, a failing compressor, or a frozen evaporator coil. Turn the system off and call a technician — continuing to run it can cause further damage.",
      },
      {
        type: "h2",
        content: "2. Weak Airflow",
      },
      {
        type: "p",
        content:
          "Reduced airflow often points to a clogged filter, failing blower motor, or ductwork obstruction. In some cases, it indicates the compressor is losing capacity. Weak airflow also means your system runs longer to reach the set temperature, driving up energy costs.",
      },
      {
        type: "h2",
        content: "3. Unusual Noises",
      },
      {
        type: "ul",
        content: [
          "Grinding or screeching — worn motor bearings or belt issues.",
          "Banging or clanking — loose or broken internal components.",
          "Hissing — possible refrigerant leak.",
          "Clicking at startup — failing capacitor or contactor.",
        ],
      },
      {
        type: "h2",
        content: "4. Frequent Cycling",
      },
      {
        type: "p",
        content:
          "Short cycling — when your AC turns on and off rapidly — strains the compressor and increases wear. Causes include an oversized unit, thermostat problems, dirty coils, or low refrigerant. A technician can diagnose the root cause quickly.",
      },
      {
        type: "h2",
        content: "5. Rising Energy Bills",
      },
      {
        type: "p",
        content:
          "If your electricity bill spikes without a change in usage habits, your AC may be losing efficiency. Aging components, refrigerant leaks, and dirty coils all force the system to work harder. An efficiency evaluation can determine whether repair or replacement makes more financial sense.",
      },
      {
        type: "h2",
        content: "6. Moisture or Leaks Near the Unit",
      },
      {
        type: "p",
        content:
          "Water pooling around the indoor unit usually indicates a clogged condensate drain. Refrigerant leaks may appear as ice on the refrigerant line or oily residue near connections. Both require prompt professional attention.",
      },
      {
        type: "h2",
        content: "7. Unpleasant Odors",
      },
      {
        type: "p",
        content:
          "Musty smells suggest mold growth in ductwork or on the evaporator coil. Burning odors may indicate an electrical problem. Either way, don't ignore smells — schedule an inspection with Maven's HVAC team to identify and resolve the issue safely.",
      },
    ],
  },
  {
    slug: "prepare-heating-system-winter",
    title: "How to Prepare Your Heating System for Winter",
    excerpt:
      "Mid-Atlantic winters bring real freezes that can catch you off guard. Here's how to get your furnace or heat pump ready before temperatures drop.",
    category: "HVAC",
    date: "2025-11-10T10:00:00.000Z",
    author: { name: "David Chen", role: "HVAC Service Manager" },
    featuredImage: "/images/blog/prepare-heating-system-winter.jpg",
    readTime: 6,
    body: [
      {
        type: "p",
        content:
          "Maryland and Northern Virginia may not see the harshest winters in the country, but January cold snaps routinely plunge temperatures below freezing overnight. A heating system that hasn't been used since spring may have developed issues that only surface when you need heat most. Preparing your system in fall ensures reliable warmth and safe operation all winter.",
      },
      {
        type: "h2",
        content: "Test Your System Early",
      },
      {
        type: "p",
        content:
          "Turn on your heating system in October — well before the first cold snap. Let it run through a full cycle and check that warm air reaches every room. If you smell burning dust initially, that's normal for a first run. Persistent burning smells or failure to produce heat warrant a professional inspection.",
      },
      {
        type: "h2",
        content: "Furnace Safety Checks",
      },
      {
        type: "ul",
        content: [
          "Replace the air filter before heating season begins.",
          "Ensure all furnace vents and returns are unobstructed.",
          "Test carbon monoxide detectors and replace batteries.",
          "Check that the flue pipe is clear of obstructions and properly connected.",
          "Verify the pilot light or ignition system fires reliably (gas furnaces).",
        ],
      },
      {
        type: "h2",
        content: "Heat Pump Considerations",
      },
      {
        type: "p",
        content:
          "Heat pumps are common throughout the DMV and work efficiently in moderate cold. However, when temperatures drop below freezing, auxiliary heat strips may activate, increasing energy consumption. Make sure your outdoor unit is clear of debris and that the defrost cycle functions properly. If your heat pump blows cold air during heating mode, schedule service before winter demand peaks.",
      },
      {
        type: "h2",
        content: "Seal Air Leaks",
      },
      {
        type: "p",
        content:
          "Heated air escaping through gaps around windows, doors, and attic hatches forces your system to work overtime. Apply weatherstripping, caulk gaps, and add insulation to attics where needed. These inexpensive improvements can reduce heating costs by 10–20%.",
      },
      {
        type: "h2",
        content: "Book a Professional Tune-Up",
      },
      {
        type: "p",
        content:
          "Maven's fall heating tune-up includes burner inspection, heat exchanger check, safety control testing, and full system performance verification. It's the best way to ensure your family stays warm and safe through every Mid-Atlantic cold snap.",
      },
    ],
  },
  {
    slug: "plumbing-problems-never-ignore",
    title: "5 Plumbing Problems You Should Never Ignore",
    excerpt:
      "That small drip or slow drain could be masking a much bigger issue. Learn which plumbing warning signs demand immediate professional attention.",
    category: "Plumbing",
    date: "2026-01-08T10:00:00.000Z",
    author: { name: "James Whitfield", role: "Master Plumber" },
    featuredImage: "/images/blog/plumbing-problems-never-ignore.jpg",
    readTime: 5,
    body: [
      {
        type: "p",
        content:
          "It's tempting to put off plumbing repairs — especially when the problem seems minor. But plumbing issues rarely resolve on their own. What starts as a slow drip can escalate into structural water damage, mold growth, and repair bills that dwarf the cost of early intervention.",
      },
      {
        type: "h2",
        content: "1. Persistent Low Water Pressure",
      },
      {
        type: "p",
        content:
          "If water pressure drops throughout your home, the cause may be a main line leak, corroded pipes, or a failing pressure regulator. Localized low pressure at one fixture often indicates a clogged aerator or supply line issue. Either way, don't ignore it — pressure problems can signal pipe deterioration that worsens over time.",
      },
      {
        type: "h2",
        content: "2. Discolored Water",
      },
      {
        type: "p",
        content:
          "Brown or rusty water usually means corroding pipes or sediment in your water heater. Green or blue tinting can indicate copper pipe corrosion. If discoloration persists after running taps for several minutes, call a plumber to inspect your supply lines and water heater.",
      },
      {
        type: "h2",
        content: "3. Slow Drains in Multiple Fixtures",
      },
      {
        type: "p",
        content:
          "A single slow drain is often a localized clog. When multiple drains back up simultaneously — especially floor drains and toilets — you likely have a main sewer line blockage. Sewer backups pose health risks and can cause raw sewage to enter your home. This is an emergency.",
      },
      {
        type: "h2",
        content: "4. Water Stains and Warping",
      },
      {
        type: "ul",
        content: [
          "Ceiling stains below bathrooms often indicate a shower pan or toilet seal leak.",
          "Warped flooring near appliances points to washing machine or dishwasher supply line failure.",
          "Peeling paint or bubbling wallpaper signals moisture behind walls.",
          "A musty smell without visible mold often means hidden water intrusion.",
        ],
      },
      {
        type: "h2",
        content: "5. Running Toilets and Hidden Leaks",
      },
      {
        type: "p",
        content:
          "A running toilet can waste up to 200 gallons of water per day. Check for silent leaks by adding food coloring to the tank — if color appears in the bowl without flushing, the flapper or fill valve needs replacement. Maven's plumbers fix running toilets quickly and can inspect your entire system for hidden leaks during the same visit.",
      },
    ],
  },
  {
    slug: "water-heater-maintenance-guide",
    title: "The Complete Water Heater Maintenance Guide",
    excerpt:
      "Extend the life of your water heater and avoid cold showers with this practical maintenance guide for tank and tankless models.",
    category: "Plumbing",
    date: "2025-12-05T10:00:00.000Z",
    author: { name: "James Whitfield", role: "Master Plumber" },
    featuredImage: "/images/blog/water-heater-maintenance-guide.jpg",
    readTime: 8,
    body: [
      {
        type: "p",
        content:
          "Your water heater works around the clock, heating and reheating water so it's ready when you turn the tap. In Maryland and Northern Virginia, moderately hard water accelerates sediment buildup inside tank models, reducing efficiency and shortening lifespan. Regular maintenance keeps hot water flowing reliably and can add years to your unit's service life.",
      },
      {
        type: "h2",
        content: "Tank Water Heater Maintenance",
      },
      {
        type: "ul",
        content: [
          "Flush the tank annually to remove sediment that accumulates at the bottom.",
          "Test the temperature-pressure relief (TPR) valve yearly by lifting the lever and ensuring water flows freely.",
          "Inspect the anode rod every 2–3 years and replace when more than 50% corroded.",
          "Check the area around the unit for moisture, rust, or corrosion on connections.",
          "Set the thermostat to 120°F to prevent scalding and reduce energy consumption.",
        ],
      },
      {
        type: "h2",
        content: "Tankless Water Heater Maintenance",
      },
      {
        type: "p",
        content:
          "Tankless units require descaling every 1–2 years in hard water areas like much of Maryland and Northern Virginia. Mineral deposits on the heat exchanger reduce efficiency and can cause error codes or shutdowns. A professional descaling service uses a vinegar or specialized solution circulated through the unit to dissolve buildup.",
      },
      {
        type: "h2",
        content: "Signs Your Water Heater Needs Attention",
      },
      {
        type: "ul",
        content: [
          "Rusty or discolored hot water.",
          "Rumbling or popping sounds during heating cycles.",
          "Inconsistent water temperature or running out of hot water faster than usual.",
          "Visible leaks at the base or connections.",
          "Unit is more than 10–12 years old (tank) or showing error codes (tankless).",
        ],
      },
      {
        type: "h2",
        content: "When to Repair vs. Replace",
      },
      {
        type: "p",
        content:
          "Minor issues like a faulty thermostat or heating element are worth repairing on units under 8 years old. Leaking tanks, corroded vessels, and units past their expected lifespan are better replaced. Maven provides honest assessments — we'll repair when it makes sense and help you choose the right replacement when it doesn't.",
      },
      {
        type: "h2",
        content: "Professional Maintenance Plans",
      },
      {
        type: "p",
        content:
          "Maven offers annual water heater maintenance as part of our residential service plans. A licensed plumber handles flushing, safety testing, and component inspection so you never have to worry about missing a critical maintenance step.",
      },
    ],
  },
  {
    slug: "professional-vs-diy-drain-cleaning",
    title: "Professional vs. DIY Drain Cleaning: What You Need to Know",
    excerpt:
      "Store-bought drain cleaners and snakes can help minor clogs — but they can also damage pipes. Here's when to call a professional plumber.",
    category: "Plumbing",
    date: "2026-02-02T10:00:00.000Z",
    author: { name: "Sarah Patel", role: "Plumbing Technician" },
    featuredImage: "/images/blog/professional-vs-diy-drain-cleaning.jpg",
    readTime: 5,
    body: [
      {
        type: "p",
        content:
          "A clogged drain is one of the most common household plumbing issues. The internet is full of DIY solutions — baking soda and vinegar, chemical drain cleaners, handheld snakes. Some of these work for minor clogs, but others can cause more harm than good. Understanding when DIY is appropriate saves you money; knowing when to call a pro saves your pipes.",
      },
      {
        type: "h2",
        content: "When DIY Works",
      },
      {
        type: "p",
        content:
          "For a slow kitchen sink drain caused by grease buildup, pouring boiling water followed by baking soda and vinegar may clear the blockage. A plunger can resolve simple toilet clogs. A handheld drain snake can reach shallow obstructions in bathroom sinks and tubs. These methods are safe and effective for isolated, recent clogs.",
      },
      {
        type: "h2",
        content: "The Risks of Chemical Drain Cleaners",
      },
      {
        type: "p",
        content:
          "Caustic chemical cleaners generate heat and gas that can damage PVC pipes, corrode older metal pipes, and harm septic systems. They often fail to clear the full blockage, leaving partially dissolved debris that reclogs quickly. If a chemical cleaner doesn't work, you're left with a pipe full of toxic liquid that poses a hazard to anyone snaking the drain afterward.",
      },
      {
        type: "h2",
        content: "When to Call a Professional",
      },
      {
        type: "ul",
        content: [
          "Multiple drains are slow or backing up simultaneously.",
          "The same drain clogs repeatedly within weeks.",
          "You suspect tree root intrusion in your sewer line.",
          "A DIY snake didn't reach or clear the blockage.",
          "You smell sewage or hear gurgling from drains.",
          "The clog is in your main sewer line.",
        ],
      },
      {
        type: "h2",
        content: "Professional Tools Make the Difference",
      },
      {
        type: "p",
        content:
          "Maven plumbers use motorized drain snakes, hydro-jetting equipment, and video camera inspection to diagnose and clear blockages completely. Camera inspection shows exactly what's causing the clog — grease, roots, pipe damage, or improper slope — so we fix the root cause, not just the symptom. Hydro-jetting scours pipe walls clean, providing longer-lasting results than any chemical or handheld tool.",
      },
    ],
  },
  {
    slug: "electrical-safety-tips-homeowners",
    title: "Essential Electrical Safety Tips for Homeowners",
    excerpt:
      "Protect your family and property with these practical electrical safety practices every Maryland and Virginia homeowner should follow.",
    category: "Electrical",
    date: "2026-01-22T10:00:00.000Z",
    author: { name: "Robert Hayes", role: "Licensed Electrician" },
    featuredImage: "/images/blog/electrical-safety-tips-homeowners.jpg",
    readTime: 6,
    body: [
      {
        type: "p",
        content:
          "Electrical fires cause thousands of home fires and injuries across the U.S. each year. Many are preventable with basic awareness and proactive maintenance. Whether you live in a new build or a century-old Maryland or Virginia colonial, these safety practices help protect your family and property.",
      },
      {
        type: "h2",
        content: "Know Your Electrical Panel",
      },
      {
        type: "p",
        content:
          "Every homeowner should know where the main electrical panel is located and how to shut off power in an emergency. Label all breakers clearly — if they're not labeled, Maven can map and label your panel during a safety inspection. Never use oversized breakers or replace a breaker that trips repeatedly without investigating the cause.",
      },
      {
        type: "h2",
        content: "GFCI and AFCI Protection",
      },
      {
        type: "p",
        content:
          "GFCI outlets prevent electrocution in wet areas by shutting off power within milliseconds of detecting a ground fault. Test GFCI outlets monthly using the test/reset buttons. AFCI breakers detect dangerous arcing that causes fires. If your home lacks GFCI or AFCI protection in required areas, schedule an upgrade — it's one of the most impactful safety improvements you can make.",
      },
      {
        type: "h2",
        content: "Warning Signs to Watch For",
      },
      {
        type: "ul",
        content: [
          "Outlets or switches that are warm to the touch.",
          "Burning smells near outlets, switches, or the panel.",
          "Frequent breaker trips or blown fuses.",
          "Flickering lights when appliances cycle on.",
          "Buzzing sounds from outlets, switches, or the panel.",
          "Discolored or scorched outlet covers.",
        ],
      },
      {
        type: "h2",
        content: "Extension Cord and Outlet Safety",
      },
      {
        type: "p",
        content:
          "Extension cords are for temporary use only — never run them under rugs, through walls, or as permanent wiring. Avoid overloading outlets with power strips and high-draw appliances on the same circuit. In older Maryland and Virginia homes, two-prong outlets without grounding should be upgraded or protected with GFCI breakers.",
      },
      {
        type: "h2",
        content: "Schedule a Safety Inspection",
      },
      {
        type: "p",
        content:
          "Maven recommends a professional electrical safety inspection every 5 years for homes under 20 years old, and every 3 years for older properties. Our electricians provide a detailed written report identifying hazards, code violations, and recommended upgrades prioritized by urgency.",
      },
    ],
  },
  {
    slug: "when-upgrade-electrical-panel",
    title: "When Should You Upgrade Your Electrical Panel?",
    excerpt:
      "An outdated panel can limit your home's power capacity and pose safety risks. Learn the signs it's time for an upgrade.",
    category: "Electrical",
    date: "2025-10-18T10:00:00.000Z",
    author: { name: "Robert Hayes", role: "Licensed Electrician" },
    featuredImage: "/images/blog/when-upgrade-electrical-panel.jpg",
    readTime: 7,
    body: [
      {
        type: "p",
        content:
          "Your electrical panel is the heart of your home's power distribution system. It routes electricity from the utility line to every circuit, breaker, and outlet. An outdated or undersized panel can't keep up with modern electrical demands — and in worst cases, it becomes a fire hazard.",
      },
      {
        type: "h2",
        content: "Signs You Need a Panel Upgrade",
      },
      {
        type: "ul",
        content: [
          "Your panel is a fuse box rather than circuit breakers.",
          "The panel is rated at 100 amps or less in a home with modern appliances.",
          "Breakers trip frequently when you run multiple appliances.",
          "You're adding major loads: EV charger, hot tub, workshop, or home addition.",
          "The panel shows rust, corrosion, or scorch marks.",
          "Lights dim when the AC or dryer starts.",
          "Your home still has a Federal Pacific or Zinsco panel (known safety concerns).",
        ],
      },
      {
        type: "h2",
        content: "100 Amp vs. 200 Amp Service",
      },
      {
        type: "p",
        content:
          "Most homes built before 1990 in Maryland and Northern Virginia have 100-amp service, which was adequate when households had one TV and no central AC. Today's homes with electric ranges, dual HVAC systems, tankless water heaters, and EV chargers routinely need 200-amp service. A load calculation by a licensed electrician determines your actual requirements.",
      },
      {
        type: "h2",
        content: "What's Involved in a Panel Upgrade",
      },
      {
        type: "p",
        content:
          "A panel upgrade typically includes replacing the main panel, installing a new main breaker, upgrading the service entrance cable if needed, and coordinating with your utility provider for the meter connection. Maven handles permits, inspections, and utility coordination. Most residential upgrades are completed in one day.",
      },
      {
        type: "h2",
        content: "Cost vs. Safety",
      },
      {
        type: "p",
        content:
          "Panel upgrades are a significant investment, but they're far less expensive than recovering from an electrical fire or repeatedly resetting tripped breakers while living with insufficient power. If you're planning renovations, adding solar, or purchasing an electric vehicle, upgrading your panel first prevents costly rework later.",
      },
      {
        type: "h2",
        content: "Get a Professional Assessment",
      },
      {
        type: "p",
        content:
          "Not every home needs a full panel replacement — sometimes a subpanel or selective circuit upgrades solve the problem. Maven's electricians perform honest load calculations and recommend only what's necessary for safe, reliable power.",
      },
    ],
  },
  {
    slug: "seasonal-home-maintenance-maryland-virginia",
    title: "Seasonal Home Maintenance Guide for Maryland & Virginia Homeowners",
    excerpt:
      "Mid-Atlantic weather throws everything at your home — humid summers, winter freezes, nor'easters, and spring storms. Stay ahead with this season-by-season maintenance plan.",
    category: "Seasonal",
    date: "2026-03-01T10:00:00.000Z",
    author: { name: "Lisa Morrison", role: "Home Services Advisor" },
    featuredImage: "/images/blog/seasonal-home-maintenance-maryland-virginia.jpg",
    readTime: 9,
    body: [
      {
        type: "p",
        content:
          "Maryland and Northern Virginia homes face a demanding combination of climate challenges — humid summers, winter freezes, ice storms, and year-round moisture. A seasonal maintenance routine protects your HVAC, plumbing, and electrical systems while preventing small issues from becoming expensive emergencies.",
      },
      {
        type: "h2",
        content: "Spring (March – May)",
      },
      {
        type: "ul",
        content: [
          "Schedule AC tune-up before summer humidity arrives.",
          "Inspect roof for winter ice dam damage and missing shingles.",
          "Clean gutters and downspouts after pollen season.",
          "Check outdoor faucets and irrigation for freeze damage.",
          "Test smoke and carbon monoxide detectors.",
          "Service your water heater and flush the tank.",
        ],
      },
      {
        type: "h2",
        content: "Summer (June – August)",
      },
      {
        type: "ul",
        content: [
          "Replace AC filters monthly during peak usage.",
          "Monitor energy bills for unexpected spikes indicating HVAC issues.",
          "Check attic ventilation — proper airflow reduces cooling costs.",
          "Inspect caulking around windows and doors.",
          "Trim vegetation away from the outdoor AC unit.",
        ],
      },
      {
        type: "h2",
        content: "Fall (September – November)",
      },
      {
        type: "ul",
        content: [
          "Schedule furnace or heat pump inspection before first cold snap.",
          "Insulate exposed pipes in attics, garages, and crawl spaces.",
          "Clean dryer vents to reduce fire risk.",
          "Test heating system and thermostat before you need it.",
          "Schedule electrical safety inspection if your home is 15+ years old.",
        ],
      },
      {
        type: "h2",
        content: "Winter (December – February)",
      },
      {
        type: "ul",
        content: [
          "Let faucets drip during hard freezes to prevent pipe bursts.",
          "Keep cabinet doors open under sinks on exterior walls.",
          "Know where your main water shut-off valve is located.",
          "Avoid overloading circuits with space heaters.",
          "Have Maven's emergency number saved for burst pipes and heating failures.",
        ],
      },
      {
        type: "h2",
        content: "Year-Round Priorities",
      },
      {
        type: "p",
        content:
          "Regardless of season, address leaks immediately, keep fire extinguishers accessible, and don't ignore unusual sounds or smells from your HVAC, plumbing, or electrical systems. Maven's maintenance plans cover seasonal tune-ups across all three trades — one call, one company, year-round protection.",
      },
    ],
  },
  {
    slug: "energy-efficiency-upgrades-pay-off",
    title: "Energy Efficiency Upgrades That Actually Pay Off",
    excerpt:
      "Not every green upgrade delivers real savings. We break down which energy efficiency investments offer the best return for Maryland and Virginia homeowners.",
    category: "Energy",
    date: "2025-09-25T10:00:00.000Z",
    author: { name: "David Chen", role: "HVAC Service Manager" },
    featuredImage: "/images/blog/energy-efficiency-upgrades-pay-off.jpg",
    readTime: 7,
    body: [
      {
        type: "p",
        content:
          "Energy efficiency upgrades are marketed everywhere — from smart thermostats to solar panels to window replacements. But which investments actually reduce your monthly bills enough to justify the upfront cost? For Maryland and Virginia homeowners, the answer depends on your home's age, current systems, and usage patterns.",
      },
      {
        type: "h2",
        content: "High-ROI Upgrades",
      },
      {
        type: "ul",
        content: [
          "Smart/programmable thermostat — 10–15% cooling savings with minimal investment.",
          "AC tune-up and coil cleaning — restores lost efficiency for a fraction of replacement cost.",
          "Attic insulation upgrade — reduces heat transfer, especially in older Maryland and Virginia homes.",
          "Duct sealing — up to 30% of cooled air is lost through leaky ducts in typical homes.",
          "LED lighting — 75% less energy than incandescent with immediate payback.",
        ],
      },
      {
        type: "h2",
        content: "Moderate-ROI Upgrades",
      },
      {
        type: "p",
        content:
          "High-efficiency HVAC system replacement (16+ SEER) pays off over 5–8 years in Mid-Atlantic climates, especially when replacing units over 12 years old. Tankless water heaters save energy but have longer payback periods — best suited for homes with moderate hot water demand. Energy-efficient windows help but are most cost-effective when replacing failed units, not proactively.",
      },
      {
        type: "h2",
        content: "Upgrades to Evaluate Carefully",
      },
      {
        type: "p",
        content:
          "Whole-home solar requires careful analysis of roof orientation, shading, utility rates, and available incentives. Radiant barrier installation helps in hot attics but shouldn't replace proper insulation. Oversized HVAC equipment — often sold as 'better' — actually reduces efficiency and comfort. Always get a professional load calculation before upgrading.",
      },
      {
        type: "h2",
        content: "The Maven Energy Assessment",
      },
      {
        type: "p",
        content:
          "Maven offers a whole-home energy assessment that evaluates your HVAC efficiency, ductwork integrity, insulation levels, and major appliance loads. We provide a prioritized list of upgrades ranked by expected savings and payback period — so you invest where it matters most.",
      },
      {
        type: "h2",
        content: "Utility Rebates and Tax Credits",
      },
      {
        type: "p",
        content:
          "Federal tax credits under the Inflation Reduction Act cover qualifying heat pumps, insulation, and electrical panel upgrades. Many local utility providers — including Pepco, Dominion Energy, and BGE — offer rebates for high-efficiency equipment and smart thermostats. Maven helps you identify available incentives and handles documentation for qualifying installations.",
      },
    ],
  },
];

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRecentPosts(n: number): BlogPost[] {
  return getAllPosts().slice(0, n);
}

export function getRelatedPosts(slug: string, n: number): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return getRecentPosts(n);

  const sameCategory = getAllPosts().filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = getAllPosts().filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, n);
}
