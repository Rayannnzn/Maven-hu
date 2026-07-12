export type BlogBodyBlock =
  | { type: "p"; content: string }
  | { type: "h2"; content: string }
  | { type: "h3"; content: string }
  | { type: "ul"; content: string[] }
  | { type: "cta"; text: string; href: string };

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
      "Prepare your AC for humid Mid-Atlantic summers with this spring HVAC maintenance checklist. Learn what to check now and when to schedule professional AC service in Maryland and Northern Virginia.",
    category: "HVAC",
    date: "2026-03-15T10:00:00.000Z",
    author: { name: "David Chen", role: "HVAC Service Manager" },
    featuredImage: "/images/blog/spring-hvac-maintenance-checklist.jpg",
    readTime: 8,
    body: [
      {
        type: "p",
        content:
          "Spring in Maryland and Northern Virginia brings pollen, temperature swings, and rising humidity — all before your air conditioner faces its hardest months. Many homeowners wait until the first heat wave to think about AC service, only to discover weak cooling, frozen coils, or a system that fails entirely when demand peaks.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "An AC system that sat idle through winter collects debris, develops clogged filters, and may have drainage or electrical issues that go unnoticed until summer. Common symptoms include warm air from vents, musty odors when the system starts, higher-than-normal energy bills, and short cycling that strains the compressor.",
      },
      {
        type: "h3",
        content: "Common Symptoms Homeowners Notice in Spring",
      },
      {
        type: "ul",
        content: [
          "Reduced airflow or uneven cooling between rooms.",
          "The outdoor condenser surrounded by leaves, mulch, or overgrown vegetation.",
          "Therostat readings that don't match actual room temperature.",
          "Water pooling near the indoor unit from a clogged condensate line.",
          "Unusual noises — clicking, rattling, or humming — at startup.",
        ],
      },
      {
        type: "h3",
        content: "Why Waiting Until Summer Costs More",
      },
      {
        type: "p",
        content:
          "Emergency [AC repair in Maryland and Virginia](/hvac/air-conditioners) during a July heat wave costs more in stress, downtime, and often repair bills. A small refrigerant leak or failing capacitor left unaddressed in spring can destroy a compressor by midsummer — turning a manageable fix into a major expense.",
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "A structured spring maintenance routine catches problems early and restores efficiency before peak cooling season. Most steps are simple enough for homeowners; a few require a licensed HVAC technician for safety and warranty compliance.",
      },
      {
        type: "h3",
        content: "What You Can Do Yourself",
      },
      {
        type: "ul",
        content: [
          "Replace or clean air filters every 30–90 days depending on pets and household size.",
          "Clear two feet of space around the outdoor condenser and rinse coils gently with a garden hose — never a pressure washer.",
          "Verify thermostat settings and test cooling mode before outdoor temperatures rise.",
          "Ensure all supply and return vents are open and unobstructed.",
        ],
      },
      {
        type: "h3",
        content: "When to Call a Professional",
      },
      {
        type: "p",
        content:
          "Schedule a licensed technician if you notice refrigerant-line ice, persistent odors, electrical burning smells, or any symptom that returns after basic maintenance. Professional spring tune-ups include refrigerant checks, electrical testing, motor lubrication, and condensate drainage verification — work that protects your [HVAC system](/hvac) and manufacturer warranty.",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven Home Services serves Maryland and Northern Virginia homeowners with experienced, insured HVAC technicians who know Mid-Atlantic climate demands. Our spring tune-ups include a full system report, honest recommendations, and prompt scheduling so you're not waiting weeks when summer arrives.",
      },
      {
        type: "ul",
        content: [
          "Experienced technicians trained on all major AC and heat pump brands.",
          "Quality workmanship backed by transparent pricing and clear communication.",
          "Emergency service available when breakdowns can't wait; response times vary by availability and location.",
          "A focus on customer satisfaction and transparent communication at every step.",
        ],
      },
      {
        type: "p",
        content:
          "Don't gamble on another humid summer with an untested system. Schedule your spring AC maintenance with Maven today and enjoy dependable cooling all season.",
      },
      {
        type: "cta",
        text: "Schedule Spring HVAC Service",
        href: "/contact",
      },
    ],
  },
  {
    slug: "signs-ac-needs-repair",
    title: "7 Warning Signs Your AC Needs Repair in Maryland & Virginia",
    excerpt:
      "Warm air, weak airflow, and rising energy bills are common AC repair warning signs. Learn when to call for air conditioner repair in Maryland and Northern Virginia before a breakdown.",
    category: "HVAC",
    date: "2026-02-20T10:00:00.000Z",
    author: { name: "Maria Gonzalez", role: "Senior HVAC Technician" },
    featuredImage: "/images/blog/signs-ac-needs-repair.jpg",
    readTime: 7,
    body: [
      {
        type: "p",
        content:
          "Air conditioners rarely fail without warning. During DC-area heat waves, systems run continuously and small problems escalate fast. Homeowners who recognize early AC repair warning signs save money and avoid the discomfort of a complete breakdown during peak humidity.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Ignoring subtle AC symptoms allows minor issues — clogged filters, low refrigerant, failing capacitors — to damage expensive components like compressors. The longer you wait, the more likely a same-day emergency call becomes your only option.",
      },
      {
        type: "h3",
        content: "Seven Warning Signs to Watch For",
      },
      {
        type: "ul",
        content: [
          "Warm or lukewarm air from vents while the system runs.",
          "Weak airflow that forces the unit to run longer and raises energy bills.",
          "Grinding, banging, hissing, or clicking noises during operation.",
          "Frequent short cycling — the AC turning on and off rapidly.",
          "Unexplained spikes in your electricity bill without changed usage habits.",
          "Moisture, water pooling, or ice on refrigerant lines near the indoor unit.",
          "Musty or burning odors when the system starts.",
        ],
      },
      {
        type: "h3",
        content: "Situations That Need Immediate Attention",
      },
      {
        type: "p",
        content:
          "Turn the system off and call a professional if you smell burning, see ice on the refrigerant line while running in cooling mode, or hear loud banging from the outdoor unit. Continuing to operate the AC in these conditions can cause irreversible damage.",
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "Start with the basics: check and replace your air filter, confirm the thermostat is set correctly, and ensure vents are unobstructed. If symptoms persist, a licensed technician can diagnose the root cause rather than treating surface symptoms.",
      },
      {
        type: "h3",
        content: "Actionable Steps Before You Call",
      },
      {
        type: "ul",
        content: [
          "Replace a dirty filter and wait one full cooling cycle to see if airflow improves.",
          "Verify the outdoor unit has clearance and the circuit breaker hasn't tripped.",
          "Note when symptoms occur — at startup, continuously, or only on hot afternoons — to help your technician diagnose faster.",
        ],
      },
      {
        type: "h3",
        content: "When Professional AC Repair Is Required",
      },
      {
        type: "p",
        content:
          "Refrigerant handling, electrical components, and compressor issues require licensed [air conditioner repair](/hvac/air-conditioners) professionals. An efficiency evaluation can also determine whether repair or replacement makes more financial sense for aging units. Read our [spring maintenance checklist](/blog/spring-hvac-maintenance-checklist) to prevent many of these issues before they start.",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven's HVAC team responds quickly across Maryland and Northern Virginia with fully stocked service vehicles and technicians who diagnose accurately. We explain your options in plain language — repair when it makes sense, replace only when it truly saves you money long term.",
      },
      {
        type: "ul",
        content: [
          "Prompt response, with emergency AC service available for urgent issues.",
          "Experienced, insured technicians with years of field experience.",
          "Quality parts and workmanship you can trust through every season.",
          "Professional, respectful service from dispatch to completion.",
        ],
      },
      {
        type: "p",
        content:
          "If your AC is showing any of these warning signs, don't wait for a total failure. Contact Maven for expert diagnosis and reliable repair.",
      },
      {
        type: "cta",
        text: "Request AC Repair Service",
        href: "/contact",
      },
    ],
  },
  {
    slug: "prepare-heating-system-winter",
    title: "How to Prepare Your Heating System for Winter in Maryland & Virginia",
    excerpt:
      "Get your furnace or heat pump ready before Mid-Atlantic cold snaps. Learn winter HVAC prep steps and when to schedule heating service in Maryland and Northern Virginia.",
    category: "HVAC",
    date: "2025-11-10T10:00:00.000Z",
    author: { name: "David Chen", role: "HVAC Service Manager" },
    featuredImage: "/images/blog/prepare-heating-system-winter.jpg",
    readTime: 7,
    body: [
      {
        type: "p",
        content:
          "Maryland and Northern Virginia winters may not match the coldest regions, but January cold snaps routinely drop below freezing. A heating system unused since spring can harbor issues that only surface when you need warmth most — leaving families without heat during the year's harshest nights.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Furnaces and heat pumps that skip fall maintenance face higher failure rates when demand spikes. Common winter heating problems include ignition failures, cracked heat exchangers, frozen heat pump coils, and carbon monoxide risks from blocked flues or faulty venting.",
      },
      {
        type: "h3",
        content: "Symptoms Your Heating System May Be at Risk",
      },
      {
        type: "ul",
        content: [
          "Persistent burning smells beyond the first seasonal run.",
          "Cold air or weak heat from vents when the thermostat calls for heat.",
          "The system short-cycles or fails to reach the set temperature.",
          "Unusual noises — banging, squealing, or rumbling — during operation.",
          "Yellow or flickering pilot flame instead of steady blue (gas furnaces).",
        ],
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "Test your heating system in October — well before the first cold snap — and complete basic safety checks. Schedule professional service for anything beyond filter replacement and thermostat verification.",
      },
      {
        type: "h3",
        content: "Homeowner Checklist for Fall",
      },
      {
        type: "ul",
        content: [
          "Replace the air filter before heating season begins.",
          "Run the system through a full cycle and confirm warm air in every room.",
          "Test carbon monoxide detectors and replace batteries.",
          "Ensure furnace vents and returns are unobstructed.",
          "Verify the outdoor heat pump unit is clear of debris if applicable.",
        ],
      },
      {
        type: "h3",
        content: "When to Schedule Professional Heating Service",
      },
      {
        type: "p",
        content:
          "Book a [furnace and heating tune-up](/hvac/furnace-heating) if your system blows cold air in heating mode, smells persistently of burning, or hasn't been professionally serviced in over a year. Heat pumps that ice over repeatedly or rely constantly on auxiliary heat strips need technician evaluation before winter demand peaks. Sealing air leaks around windows and doors can also reduce heating costs by 10–20%.",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven's fall heating tune-ups include burner inspection, heat exchanger checks, safety control testing, and full performance verification — giving Maryland and Virginia families confidence through every cold snap. Our technicians arrive on time, work cleanly, and leave your system running safely and efficiently.",
      },
      {
        type: "ul",
        content: [
          "Deep experience with furnaces, heat pumps, and hybrid systems common in the DMV.",
          "Quality-focused inspections that prioritize your family's safety.",
          "Reliable scheduling before the winter rush, with emergency service available for urgent issues.",
          "Professional technicians who respect your home and explain every finding.",
        ],
      },
      {
        type: "cta",
        text: "Book a Fall Heating Tune-Up",
        href: "/contact",
      },
    ],
  },
  {
    slug: "plumbing-problems-never-ignore",
    title: "5 Plumbing Problems You Should Never Ignore in Maryland & Virginia",
    excerpt:
      "Low water pressure, discolored water, and slow drains can signal serious plumbing issues. Learn when to call an emergency plumber in Maryland and Northern Virginia.",
    category: "Plumbing",
    date: "2026-01-08T10:00:00.000Z",
    author: { name: "James Whitfield", role: "Plumbing Specialist" },
    featuredImage: "/images/blog/plumbing-problems-never-ignore.jpg",
    readTime: 6,
    body: [
      {
        type: "p",
        content:
          "It's easy to postpone plumbing repairs when a problem seems minor — a slow drip, a slightly weak shower, a toilet that runs occasionally. But plumbing issues rarely resolve on their own. What starts small often becomes structural water damage, mold growth, and repair bills many times the cost of early intervention.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Hidden leaks and sewer line problems can run for weeks before visible damage appears. By then, drywall, flooring, and framing may already be compromised. Certain warning signs demand immediate professional attention to protect your health and property.",
      },
      {
        type: "h3",
        content: "Five Plumbing Problems You Should Never Ignore",
      },
      {
        type: "ul",
        content: [
          "Persistent low water pressure throughout the home — may indicate a main line leak or corroding pipes.",
          "Discolored water that doesn't clear after running taps for several minutes.",
          "Slow drains in multiple fixtures at once — often a main sewer line blockage.",
          "Water stains, warped flooring, or musty odors suggesting hidden moisture.",
          "Running toilets and silent leaks wasting hundreds of gallons daily.",
        ],
      },
      {
        type: "h3",
        content: "When It's an Emergency",
      },
      {
        type: "p",
        content:
          "Sewer backups, burst pipes, and flooding require immediate [emergency plumbing service](/plumbing/service-repair-installation). Multiple drains backing up simultaneously — especially floor drains and toilets — pose health risks and can allow raw sewage into your home.",
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "Address plumbing warning signs promptly. Some quick checks help you understand urgency, but diagnosis and repair of supply lines, sewer mains, and hidden leaks belong in professional hands.",
      },
      {
        type: "h3",
        content: "What You Can Check First",
      },
      {
        type: "ul",
        content: [
          "Test running toilets with food coloring in the tank — color in the bowl without flushing indicates a flapper or fill valve issue.",
          "Note whether low pressure affects one fixture or the entire home.",
          "Locate your main water shut-off valve before an emergency occurs.",
        ],
      },
      {
        type: "h3",
        content: "When to Call a Licensed Plumber",
      },
      {
        type: "p",
        content:
          "Call a professional for discolored water, multi-fixture drain backups, recurring leaks, or any sign of sewer gas odor. Maven's plumbers inspect your full system during service calls and can address [residential and commercial plumbing](/plumbing/residential-commercial) issues from fixture repair to main line work.",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven Home Services delivers honest assessments and durable repairs across Maryland and Northern Virginia. Our experienced plumbers arrive equipped to diagnose accurately, fix root causes — not just symptoms — and restore your peace of mind quickly.",
      },
      {
        type: "ul",
        content: [
          "Experienced plumbers who handle everything from drips to main line emergencies.",
          "Quality materials and code-compliant workmanship on every job.",
          "Prompt response, with emergency service available for urgent issues.",
          "Customer-focused service with clear pricing and reliable follow-through.",
        ],
      },
      {
        type: "cta",
        text: "Get Plumbing Help Now",
        href: "/contact",
      },
    ],
  },
  {
    slug: "water-heater-maintenance-guide",
    title: "Water Heater Maintenance Guide for Maryland & Virginia Homes",
    excerpt:
      "Extend your water heater's life and avoid cold showers with this tank and tankless maintenance guide. Learn when to call for water heater repair in Maryland and Northern Virginia.",
    category: "Plumbing",
    date: "2025-12-05T10:00:00.000Z",
    author: { name: "James Whitfield", role: "Plumbing Specialist" },
    featuredImage: "/images/blog/water-heater-maintenance-guide.jpg",
    readTime: 8,
    body: [
      {
        type: "p",
        content:
          "Your water heater runs around the clock, heating and reheating water for every shower, load of laundry, and dish cycle. In Maryland and Northern Virginia, moderately hard water accelerates sediment buildup in tank models — reducing efficiency, shortening lifespan, and eventually leaving you with no hot water when you need it most.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Neglected water heaters develop sediment layers, corroded anode rods, failing pressure relief valves, and mineral scaling in tankless units. Homeowners often notice the problem only after rusty water, rumbling sounds, or sudden temperature inconsistency — signs the unit has been struggling for months.",
      },
      {
        type: "h3",
        content: "Common Warning Signs",
      },
      {
        type: "ul",
        content: [
          "Rusty or discolored hot water.",
          "Rumbling or popping sounds during heating cycles.",
          "Running out of hot water faster than usual.",
          "Visible leaks at the base or connections.",
          "Error codes or shutdowns on tankless models.",
        ],
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "Regular maintenance keeps hot water reliable and can add years to your unit's service life. Some tasks are DIY-friendly; others require a licensed plumber for safety and warranty protection.",
      },
      {
        type: "h3",
        content: "Tank Water Heater Maintenance",
      },
      {
        type: "ul",
        content: [
          "Flush the tank annually to remove sediment buildup.",
          "Test the temperature-pressure relief valve yearly.",
          "Inspect the anode rod every 2–3 years and replace when more than 50% corroded.",
          "Set the thermostat to 120°F to prevent scalding and reduce energy use.",
        ],
      },
      {
        type: "h3",
        content: "Tankless Maintenance and When to Call a Pro",
      },
      {
        type: "p",
        content:
          "Tankless units need descaling every 1–2 years in hard water areas. Schedule professional [water heater service](/plumbing/water-heaters) for flushing, safety testing, leaking tanks, or units past their expected lifespan — typically 10–12 years for tanks. Maven provides honest repair-vs-replace guidance so you invest wisely.",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven's experienced plumbers maintain and install tank and tankless water heaters throughout Maryland and Northern Virginia. We handle annual maintenance, emergency repairs, and efficient replacements with brands suited to your household demand and budget.",
      },
      {
        type: "ul",
        content: [
          "Experienced technicians familiar with local water quality challenges.",
          "Quality installations and repairs backed by transparent recommendations.",
          "Reliable scheduling and fast emergency response for no-hot-water situations.",
          "Professional service that keeps your home safe and your hot water consistent.",
        ],
      },
      {
        type: "cta",
        text: "Schedule Water Heater Service",
        href: "/contact",
      },
    ],
  },
  {
    slug: "professional-vs-diy-drain-cleaning",
    title: "Professional vs. DIY Drain Cleaning: What Maryland Homeowners Need to Know",
    excerpt:
      "DIY drain cleaning can help minor clogs — or damage pipes. Learn when to call a professional plumber for drain cleaning in Maryland and Northern Virginia.",
    category: "Plumbing",
    date: "2026-02-02T10:00:00.000Z",
    author: { name: "Sarah Patel", role: "Plumbing Technician" },
    featuredImage: "/images/blog/professional-vs-diy-drain-cleaning.jpg",
    readTime: 6,
    body: [
      {
        type: "p",
        content:
          "A clogged drain is one of the most common household plumbing issues. Online DIY remedies — baking soda and vinegar, chemical drain cleaners, handheld snakes — promise quick fixes. Some work for minor clogs; others damage pipes, fail to clear the full blockage, or mask deeper sewer line problems.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Recurring clogs, multiple slow drains, and sewage odors often signal issues DIY tools cannot reach. Chemical cleaners generate heat and corrosive reactions that harm PVC pipes, older metal lines, and septic systems — leaving toxic residue that endangers anyone snaking the drain afterward.",
      },
      {
        type: "h3",
        content: "Signs DIY Methods Won't Be Enough",
      },
      {
        type: "ul",
        content: [
          "Multiple drains slow or backing up at the same time.",
          "The same drain reclogs within weeks of clearing.",
          "Gurgling sounds or sewage odors from drains.",
          "Suspected tree root intrusion in the sewer line.",
          "A handheld snake didn't reach or clear the blockage.",
        ],
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "Match the solution to the severity of the clog. Simple, recent blockages in a single fixture often respond to safe DIY methods. Anything involving the main line or repeat failures needs professional diagnosis.",
      },
      {
        type: "h3",
        content: "When DIY Works Safely",
      },
      {
        type: "ul",
        content: [
          "Plunging a simple toilet or sink clog.",
          "Boiling water and baking soda for shallow grease buildup in kitchen sinks.",
          "A handheld drain snake for hair clogs near the drain opening.",
        ],
      },
      {
        type: "h3",
        content: "When to Call a Professional Plumber",
      },
      {
        type: "p",
        content:
          "Maven plumbers use motorized snakes, hydro-jetting, and video camera inspection to find and fix root causes — grease buildup, root intrusion, pipe damage, or improper slope. Camera inspection shows exactly what's wrong so we fix the problem permanently, not just the symptom. Learn more about our [plumbing repair services](/plumbing/service-repair-installation).",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven delivers thorough drain cleaning across Maryland and Northern Virginia with equipment and expertise far beyond store-bought solutions. We protect your pipes, explain what we find, and leave your drains flowing reliably.",
      },
      {
        type: "ul",
        content: [
          "Experienced plumbers with professional-grade tools for lasting results.",
          "Quality work that addresses root causes, not temporary relief.",
          "Fast response for urgent backups and sewer line emergencies.",
          "Professional, courteous service from diagnosis through cleanup.",
        ],
      },
      {
        type: "cta",
        text: "Schedule Drain Cleaning",
        href: "/contact",
      },
    ],
  },
  {
    slug: "electrical-safety-tips-homeowners",
    title: "Essential Electrical Safety Tips for Maryland & Virginia Homeowners",
    excerpt:
      "Protect your family with practical electrical safety practices. Learn warning signs that require a licensed electrician in Maryland and Northern Virginia.",
    category: "Electrical",
    date: "2026-01-22T10:00:00.000Z",
    author: { name: "Robert Hayes", role: "Electrical Specialist" },
    featuredImage: "/images/blog/electrical-safety-tips-homeowners.jpg",
    readTime: 7,
    body: [
      {
        type: "p",
        content:
          "Electrical fires and shocks cause thousands of home injuries across the U.S. each year — many preventable with basic awareness and proactive maintenance. Whether you live in a new build or a century-old Maryland or Virginia colonial, understanding electrical safety protects your family and property.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Outdated wiring, overloaded circuits, and missing GFCI or AFCI protection create hidden hazards. Homeowners often miss warning signs until a breaker trips repeatedly, outlets feel warm, or lights flicker whenever major appliances start.",
      },
      {
        type: "h3",
        content: "Warning Signs That Demand Attention",
      },
      {
        type: "ul",
        content: [
          "Outlets or switches warm to the touch.",
          "Burning smells near outlets, switches, or the electrical panel.",
          "Frequent breaker trips or blown fuses.",
          "Flickering lights when appliances cycle on.",
          "Buzzing sounds from outlets, switches, or the panel.",
          "Discolored or scorched outlet covers.",
        ],
      },
      {
        type: "h3",
        content: "Common Risky Habits",
      },
      {
        type: "p",
        content:
          "Extension cords used as permanent wiring, overloaded power strips, and ungrounded two-prong outlets in older homes increase shock and fire risk. DIY electrical work without permits or proper knowledge can violate code and void insurance coverage.",
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "Know your electrical panel location and how to shut off power in an emergency. Test GFCI outlets monthly and avoid overloading circuits with high-draw appliances on the same line.",
      },
      {
        type: "h3",
        content: "Actionable Safety Practices",
      },
      {
        type: "ul",
        content: [
          "Label all breakers clearly — Maven can map your panel during an inspection.",
          "Test GFCI and AFCI protection monthly; upgrade where required by code.",
          "Use extension cords temporarily only — never under rugs or through walls.",
          "Schedule inspections every 3–5 years depending on your home's age.",
        ],
      },
      {
        type: "h3",
        content: "When to Call a Licensed Electrician",
      },
      {
        type: "p",
        content:
          "Any burning smell, warm outlets, or repeated breaker trips requires professional [electrical repair and installation](/electrical/repair-installation). Maven's electricians provide detailed safety reports identifying hazards, code violations, and prioritized upgrades for [residential and commercial properties](/electrical/commercial-residential).",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven Home Services employs experienced electricians who prioritize safety, code compliance, and clear communication. We help Maryland and Virginia homeowners understand their electrical systems and make confident decisions about upgrades and repairs.",
      },
      {
        type: "ul",
        content: [
          "Experienced, insured electricians with extensive local experience.",
          "Quality workmanship that meets current NEC standards.",
          "Reliable scheduling and responsive service when safety concerns arise.",
          "Professional inspections with written reports you can trust.",
        ],
      },
      {
        type: "cta",
        text: "Schedule an Electrical Safety Inspection",
        href: "/contact",
      },
    ],
  },
  {
    slug: "when-upgrade-electrical-panel",
    title: "When Should You Upgrade Your Electrical Panel in Maryland & Virginia?",
    excerpt:
      "An outdated electrical panel limits power capacity and poses safety risks. Learn the signs you need a panel upgrade and when to call a licensed electrician.",
    category: "Electrical",
    date: "2025-10-18T10:00:00.000Z",
    author: { name: "Robert Hayes", role: "Electrical Specialist" },
    featuredImage: "/images/blog/when-upgrade-electrical-panel.jpg",
    readTime: 7,
    body: [
      {
        type: "p",
        content:
          "Your electrical panel distributes power from the utility line to every circuit in your home. An outdated or undersized panel struggles with modern electrical demands — EV chargers, dual HVAC systems, tankless water heaters — and in worst cases becomes a serious fire hazard.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Many Maryland and Northern Virginia homes built before 1990 still have 100-amp service and aging panels that weren't designed for today's loads. Federal Pacific and Zinsco panels carry known safety concerns. Homeowners often discover the problem only when breakers trip constantly or lights dim every time the AC or dryer starts.",
      },
      {
        type: "h3",
        content: "Signs You Need a Panel Upgrade",
      },
      {
        type: "ul",
        content: [
          "Fuse box instead of modern circuit breakers.",
          "100-amp service or less with modern appliances and HVAC.",
          "Breakers trip when running multiple appliances simultaneously.",
          "Adding major loads: EV charger, hot tub, workshop, or home addition.",
          "Rust, corrosion, or scorch marks on the panel.",
          "Federal Pacific or Zinsco panel still in service.",
        ],
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "A licensed electrician performs a load calculation to determine whether your home needs 200-amp service, a panel replacement, or targeted circuit upgrades. Not every situation requires a full replacement — sometimes a subpanel solves the problem cost-effectively.",
      },
      {
        type: "h3",
        content: "What's Involved in an Upgrade",
      },
      {
        type: "p",
        content:
          "Panel upgrades typically include a new main panel and breaker, upgraded service entrance cable if needed, and utility coordination for the meter connection. Maven handles permits, inspections, and utility coordination — most residential upgrades complete in one day.",
      },
      {
        type: "h3",
        content: "When to Act Before Renovations",
      },
      {
        type: "p",
        content:
          "If you're planning solar, an EV charger, or a major renovation, upgrade your panel first to avoid costly rework. Read our guide on [electrical safety for homeowners](/blog/electrical-safety-tips-homeowners) to understand related hazards in older homes.",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven's electricians perform honest load calculations and recommend only what's necessary for safe, reliable power. We serve Maryland and Northern Virginia with code-compliant installations, clear pricing, and professional coordination from assessment through final inspection.",
      },
      {
        type: "ul",
        content: [
          "Experienced electricians who specialize in panel upgrades.",
          "Quality components and workmanship built for long-term safety.",
          "Reliable project management including permits and utility coordination.",
          "Customer satisfaction through transparent communication at every step.",
        ],
      },
      {
        type: "cta",
        text: "Request a Panel Assessment",
        href: "/contact",
      },
    ],
  },
  {
    slug: "seasonal-home-maintenance-maryland-virginia",
    title: "Seasonal Home Maintenance Guide for Maryland & Virginia Homeowners",
    excerpt:
      "Mid-Atlantic weather demands year-round home maintenance. Follow this season-by-season HVAC, plumbing, and electrical checklist for Maryland and Northern Virginia homes.",
    category: "Seasonal",
    date: "2026-03-01T10:00:00.000Z",
    author: { name: "Lisa Morrison", role: "Home Services Advisor" },
    featuredImage: "/images/blog/seasonal-home-maintenance-maryland-virginia.jpg",
    readTime: 9,
    body: [
      {
        type: "p",
        content:
          "Maryland and Northern Virginia homes face humid summers, winter freezes, ice storms, and year-round moisture. Without a seasonal maintenance routine, small HVAC, plumbing, and electrical issues compound into expensive emergencies — often at the worst possible time.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Homeowners who react only when something breaks spend more and stress more than those who maintain proactively. Seasonal neglect leads to AC failures in July, burst pipes in January, and electrical hazards that go undetected until damage occurs.",
      },
      {
        type: "h3",
        content: "Common Seasonal Failures in the Mid-Atlantic",
      },
      {
        type: "ul",
        content: [
          "AC breakdowns during the first sustained heat wave.",
          "Frozen pipes after sudden temperature drops.",
          "Clogged gutters causing water intrusion and foundation issues.",
          "Overloaded circuits from space heaters in winter.",
          "Water heater failures after years without flushing.",
        ],
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "Follow a season-by-season checklist covering all three major home systems. Professional tune-ups at key transition points — spring for AC, fall for heating — prevent the majority of seasonal emergencies.",
      },
      {
        type: "h3",
        content: "Spring and Summer Priorities",
      },
      {
        type: "ul",
        content: [
          "Schedule [AC tune-up](/hvac/air-conditioners) before summer humidity arrives.",
          "Replace AC filters monthly during peak usage.",
          "Check outdoor faucets and irrigation for freeze damage.",
          "Trim vegetation away from the outdoor AC unit.",
        ],
      },
      {
        type: "h3",
        content: "Fall and Winter Priorities",
      },
      {
        type: "ul",
        content: [
          "Schedule [furnace inspection](/hvac/furnace-heating) before the first cold snap.",
          "Insulate exposed pipes in attics, garages, and crawl spaces.",
          "Know your main water shut-off valve location.",
          "Schedule [electrical safety inspection](/electrical/repair-installation) for homes 15+ years old.",
        ],
      },
      {
        type: "h3",
        content: "When to Call a Professional",
      },
      {
        type: "p",
        content:
          "Address leaks immediately, never ignore unusual sounds or smells, and book professional service when DIY checks reveal persistent issues. Maven's maintenance plans cover seasonal tune-ups across [HVAC](/hvac), [plumbing](/plumbing), and [electrical](/electrical) — one call, one company, year-round protection.",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven Home Services simplifies seasonal maintenance for busy Maryland and Virginia homeowners. Our experienced technicians across all three trades deliver quality work, prompt response, and the reliability you need to protect your biggest investment — your home.",
      },
      {
        type: "ul",
        content: [
          "One trusted partner for HVAC, plumbing, and electrical maintenance.",
          "Experienced teams who understand Mid-Atlantic climate challenges.",
          "Quality service, with emergency availability for urgent issues year-round.",
          "Professional, customer-first approach that keeps your home running smoothly.",
        ],
      },
      {
        type: "cta",
        text: "Explore Maven Maintenance Plans",
        href: "/contact",
      },
    ],
  },
  {
    slug: "energy-efficiency-upgrades-pay-off",
    title: "Energy Efficiency Upgrades That Pay Off for Maryland & Virginia Homeowners",
    excerpt:
      "Not every energy upgrade delivers real savings. Discover which HVAC and home efficiency investments offer the best ROI in Maryland and Northern Virginia.",
    category: "Energy",
    date: "2025-09-25T10:00:00.000Z",
    author: { name: "David Chen", role: "HVAC Service Manager" },
    featuredImage: "/images/blog/energy-efficiency-upgrades-pay-off.jpg",
    readTime: 8,
    body: [
      {
        type: "p",
        content:
          "Energy efficiency upgrades are marketed everywhere — smart thermostats, solar panels, window replacements, high-efficiency HVAC. But which investments actually reduce monthly bills enough to justify the cost? For Maryland and Virginia homeowners, the answer depends on your home's age, current systems, and usage patterns.",
      },
      { type: "h2", content: "The Problem" },
      {
        type: "p",
        content:
          "Many homeowners overspend on upgrades with long payback periods while overlooking high-impact improvements with immediate returns. Leaky ducts, dirty AC coils, poor insulation, and outdated panels silently drain budgets year after year.",
      },
      {
        type: "h3",
        content: "Symptoms of Poor Home Energy Efficiency",
      },
      {
        type: "ul",
        content: [
          "Energy bills rising despite similar usage habits.",
          "Hot upstairs rooms and cold spots throughout the home.",
          "AC or furnace running constantly without reaching set temperature.",
          "Excessive dust indicating duct leaks.",
          "Older HVAC equipment (12+ years) with declining performance.",
        ],
      },
      { type: "h2", content: "The Solution" },
      {
        type: "p",
        content:
          "Prioritize upgrades by return on investment. Start with low-cost, high-impact improvements before major system replacements. Always get a professional assessment before committing to expensive projects.",
      },
      {
        type: "h3",
        content: "High-ROI Upgrades to Consider First",
      },
      {
        type: "ul",
        content: [
          "Smart or programmable thermostat — 10–15% cooling savings.",
          "AC tune-up and coil cleaning — restores efficiency at a fraction of replacement cost.",
          "Attic insulation and duct sealing — up to 30% of conditioned air is lost through leaky ducts.",
          "LED lighting — immediate payback with 75% less energy than incandescent.",
        ],
      },
      {
        type: "h3",
        content: "When Professional Guidance Matters",
      },
      {
        type: "p",
        content:
          "High-efficiency [HVAC replacement](/hvac), tankless water heaters, and [electrical panel upgrades](/electrical/repair-installation) require load calculations and honest payback analysis. Federal tax credits under the Inflation Reduction Act and utility rebates from Pepco, Dominion Energy, and BGE can offset qualifying installations — Maven helps identify incentives and handles documentation.",
      },
      { type: "h2", content: "Why Maven Is Best For You?" },
      {
        type: "p",
        content:
          "Maven's whole-home energy assessment evaluates HVAC efficiency, ductwork integrity, insulation levels, and major appliance loads. We provide a prioritized upgrade list ranked by expected savings — so you invest where it matters most, not where sales hype says you should.",
      },
      {
        type: "ul",
        content: [
          "Experienced HVAC and electrical teams who understand local utility programs.",
          "Quality assessments backed by data, not upselling.",
          "Reliable installation and fast response when efficiency problems become emergencies.",
          "Professional service focused on your long-term savings and comfort.",
        ],
      },
      {
        type: "cta",
        text: "Request a Home Energy Assessment",
        href: "/contact",
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
