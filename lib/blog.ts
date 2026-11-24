import { company } from "@/lib/site";

export type BlogTocItem = { label: string; href: string };
export type BlogFaqItem = { question: string; answer: string };

export type BlogBodyBlock =
  | { type: "p"; content: string }
  | { type: "h2"; content: string; id?: string }
  | { type: "h3"; content: string; id?: string }
  | { type: "ul"; content: string[] }
  | { type: "lines"; content: string[] }
  | { type: "toc"; title: string; items: BlogTocItem[] }
  | { type: "faq"; items: BlogFaqItem[] }
  | { type: "table"; columns: string[]; rows: string[][] }
  | { type: "cta"; text: string; href: string };

export type BlogPost = {
  slug: string;
  title: string;
  /**
   * Meta <title> when it should differ from the on-page H1. It runs through the
   * root layout's "%s | Maven Home Services" template unless it already carries
   * the brand, in which case it is emitted verbatim.
   */
  seoTitle?: string;
  keywords?: string[];
  excerpt: string;
  category:
    | "HVAC"
    | "Plumbing"
    | "Electrical"
    | "Commercial"
    | "Seasonal"
    | "Energy";
  date: string;
  author: { name: string; role?: string };
  featuredImage: string;
  readTime: number;
  body: BlogBodyBlock[];
  /**
   * Set when the post ships its own route file at `app/blog/<slug>/page.tsx`
   * instead of being rendered by `app/blog/[slug]`. These posts still show up
   * in listings and related-post rails, but the dynamic route's
   * `generateStaticParams` skips them so the two routes can't collide — and
   * their `body` stays empty, because the route file holds the real copy.
   */
  customRoute?: true;
};

const GBP = company.googleBusinessProfile;
const FDA_FOOD_CODE = "https://www.fda.gov/food/retail-food-protection/fda-food-code";

/** Closing contact block shared by the November 2026 client posts. */
function contactBlocks(heading: string, id = "contact"): BlogBodyBlock[] {
  return [
    { type: "h2", id, content: heading },
    {
      type: "lines",
      content: [
        "**Phone:** [(240) 255 4794](tel:+12402554794)",
        "**Email:** [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "**Address:** 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "**Hours:** Open 24 hours a day, 7 days a week, with 24/7 emergency service",
        "**Service area:** Within 30 miles of Rockville, across Maryland and Northern Virginia",
      ],
    },
    { type: "cta", text: "Visit our contact page", href: "/contact" },
  ];
}

const posts: BlogPost[] = [
  {
    slug: "ac-not-cooling-rockville-md",
    title: "AC Not Cooling in Rockville, MD? Common Causes and What to Do",
    seoTitle: "AC Not Cooling in Rockville, MD? 8 Causes | Maven DMV",
    excerpt:
      "AC not cooling in Rockville, MD? Learn the common causes, quick checks you can try safely, and when to call a licensed HVAC technician. Call (240) 255 4794.",
    keywords: [
      "ac not cooling rockville md",
      "ac not cooling",
      "ac repair rockville",
      "air conditioner troubleshooting",
      "frozen evaporator coil",
      "hvac",
      "maven dmv",
    ],
    category: "HVAC",
    date: "2026-11-24T12:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/hvac/air-conditioner.jpeg",
    readTime: 6,
    body: [
      { type: "p", content: "When your air conditioner runs but the house stays warm, it is easy to feel stuck. Many cooling problems have simple causes you can check safely in a few minutes, and others need a licensed technician. This guide from Maven DMV explains the most common reasons an AC stops cooling in Rockville, MD, what you can check yourself, and when it is time to call for help." },
      { type: "p", content: "**Quick answer:** If your AC is not cooling, first check the thermostat settings, the circuit breaker, the air filter, and the outdoor unit for blockage. If those are fine, the cause is often a frozen coil, a failed capacitor, a refrigerant leak, or a dirty condenser. Those need a licensed HVAC technician." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "Start With These Safe Quick Checks", href: "#quick-checks" },
          { label: "Common Reasons an AC Stops Cooling", href: "#common-reasons" },
          { label: "Why Rockville Homes and Businesses See These Problems", href: "#why-rockville" },
          { label: "Signs You Should Stop and Call a Technician", href: "#call-a-technician" },
          { label: "What a Technician Does During an AC Repair Visit", href: "#repair-visit" },
          { label: "What Affects the Cost of AC Repair", href: "#cost" },
          { label: "Repair or Replace Your AC?", href: "#repair-or-replace" },
          { label: "How to Keep Your AC Cooling All Summer", href: "#prevention" },
          { label: "Why Rockville Customers Call Maven DMV", href: "#why-maven" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "quick-checks", content: "Start With These Safe Quick Checks" },
      { type: "p", content: "Spend five minutes on these checks before you call anyone. They are safe for any homeowner." },
      {
        type: "table",
        columns: ["Check", "What to Look For", "What to Do"],
        rows: [
          ["Thermostat", "Set to Cool, with a temperature below the room temperature, and fresh batteries", "Correct the settings or replace batteries"],
          ["Circuit breaker", "A tripped breaker for the indoor or outdoor unit", "Reset once only, and call us if it trips again"],
          ["Air filter", "A dirty, clogged filter that blocks airflow", "Replace the filter"],
          ["Outdoor unit", "Leaves, grass, or objects blocking the unit", "Clear about two feet around the unit"],
          ["Vents and registers", "Closed or blocked vents and furniture in the way", "Open and clear them"],
          ["Ice or water", "Ice on the pipes or water near the indoor unit", "Turn the AC off and call us"],
        ],
      },
      { type: "p", content: "If the system still is not cooling after these checks, do not keep running it, because that can turn a small problem into a costly one." },
      { type: "h2", id: "common-reasons", content: "Common Reasons an AC Stops Cooling" },
      {
        type: "ul",
        content: [
          "**1. Dirty or clogged air filter.** A dirty filter restricts airflow, so the system cannot move cooled air through the house. Restricted airflow can also cause the coil to freeze. Most filters need replacing every one to three months.",
          "**2. Frozen evaporator coil.** If you see ice on the indoor unit or refrigerant lines, the coil is frozen. Causes include poor airflow, a dirty coil, or low refrigerant. Turn the system off and let it thaw, but the problem will return until the cause is fixed.",
          "**3. Low refrigerant or a leak.** Refrigerant is not used up like fuel. If the level is low, there is a leak. Handling refrigerant legally requires certification, so this is not a do it yourself job.",
          "**4. Failed capacitor or contactor.** The fan and compressor in the outdoor unit depend on electrical parts that wear out. If the outdoor unit hums but the fan does not spin, or the unit will not start, a failed capacitor is a common cause.",
          "**5. Dirty condenser coil.** The outdoor coil releases heat from your home. When it is covered in dirt, cottonwood, or debris, the system struggles and may shut off to protect itself.",
          "**6. Thermostat or control problems.** A faulty thermostat or dead batteries can stop the AC from getting the call to cool.",
          "**7. Clogged condensate drain.** AC systems remove moisture from the air, and a clogged drain can trigger a safety switch that shuts the system down.",
          "**8. Aging or undersized equipment.** Systems more than 10 to 15 years old lose capacity and efficiency.",
        ],
      },
      { type: "h2", id: "why-rockville", content: "Why Rockville Homes and Businesses See These Problems" },
      { type: "p", content: "Rockville has long, humid summers, and air conditioners often run for months with little rest. Humidity forces the system to remove moisture as well as heat, which stresses coils, drains, and electrical parts. Trees near outdoor units drop debris that clogs coils, and restaurants and other commercial spaces add heat from kitchens and equipment. Maintenance before summer catches many of these issues early." },
      { type: "h2", id: "call-a-technician", content: "Signs You Should Stop and Call a Technician" },
      {
        type: "ul",
        content: [
          "Ice on the refrigerant lines or indoor unit",
          "A burning smell, smoke, or sparks",
          "The breaker trips again right after you reset it",
          "The outdoor unit hums but the fan does not spin",
          "Water leaking around the indoor unit",
          "Warm air from the vents while the system runs for hours",
        ],
      },
      { type: "p", content: "If you see smoke or flames, leave the building and call 911 first. For other urgent cooling problems, read our guide to [24 hour AC repair in Rockville](/blog/24-hour-ac-repair-rockville), or call us any time, day or night." },
      { type: "h2", id: "repair-visit", content: "What a Technician Does During an AC Repair Visit" },
      {
        type: "ul",
        content: [
          "**Listens first:** We ask when the problem started, what you have noticed, and what you have already tried.",
          "**Inspects the system:** We check the thermostat, filter, indoor unit, outdoor unit, and electrical connections.",
          "**Finds the root cause:** We identify the real fault instead of guessing or replacing parts.",
          "**Explains your options:** You hear the findings, the repair choices, and the price before work starts.",
          "**Repairs and tests:** We fix the issue and confirm the system cools properly.",
        ],
      },
      { type: "h2", id: "cost", content: "What Affects the Cost of AC Repair" },
      { type: "p", content: "A dirty filter or clogged drain is a small repair, a failed capacitor is usually moderate, and a refrigerant leak, compressor, or blower motor costs more. The total also depends on the age and brand of the system, how hard the part is to reach, and whether the visit is after hours. You get a clear quote before work begins." },
      { type: "h2", id: "repair-or-replace", content: "Repair or Replace Your AC?" },
      { type: "p", content: "Repair usually makes sense when the system is under about 10 years old and the problem is a single part. Replacement becomes worth discussing when the system is 12 to 15 years old, needs frequent repairs, has a major failure such as the compressor, or uses an older refrigerant that is harder to source. Older systems that use R-22 refrigerant are an example, because R-22 production ended in the United States in 2020. We explain your options honestly. For general guidance on air conditioner care, see the [U.S. Department of Energy](https://www.energy.gov/energysaver/air-conditioning) and the [EPA refrigerant rules](https://www.epa.gov/section608)." },
      { type: "h2", id: "prevention", content: "How to Keep Your AC Cooling All Summer" },
      {
        type: "ul",
        content: [
          "Replace or clean the filter on schedule",
          "Keep two feet of clear space around the outdoor unit",
          "Schedule professional maintenance before the cooling season",
          "Keep vents open and unblocked",
          "Do not ignore small changes in sound, smell, or airflow",
        ],
      },
      { type: "p", content: "If breakers trip often, your panel or wiring may be part of the cause, and our [electrical panel and circuit breaker services](/electrical/panel-circuit-breaker-rockville) can help. Visit our [electrical services](/electrical) page for more." },
      { type: "h2", id: "why-maven", content: "Why Rockville Customers Call Maven DMV" },
      {
        type: "ul",
        content: [
          "Licensed technicians for heating, cooling, and electrical work",
          "Plain language explanations with no unnecessary upsells",
          "24/7 availability for urgent issues",
          "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        ],
      },
      { type: "p", content: `Read feedback from our customers on our [Google Business Profile](${GBP}), or visit our [home page](/). Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.` },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "Why is my AC running but not cooling?",
            answer: "The most common causes are a dirty filter, a frozen coil, low refrigerant, a failed capacitor, or a dirty outdoor coil.",
          },
          {
            question: "Should I keep running my AC if it is not cooling?",
            answer: "No. If you see ice, hear unusual noises, or notice a burning smell, turn it off and call a technician.",
          },
          {
            question: "Can I add refrigerant myself?",
            answer: "No. Handling refrigerant requires certification, and low refrigerant means there is a leak that needs repair.",
          },
          {
            question: "Do you offer emergency AC repair in Rockville?",
            answer: "Yes. Our emergency line is available 24/7 for urgent cooling problems.",
          },
        ],
      },
      ...contactBlocks("AC Not Cooling? Call Maven DMV"),
    ],
  },
  {
    slug: "emergency-hvac-for-restaurants-rockville",
    title: "Emergency HVAC for Restaurants in Rockville, MD",
    seoTitle: "Emergency HVAC for Restaurants in Rockville, MD | Maven DMV",
    excerpt:
      "Restaurant AC or heat down? Learn what counts as an HVAC emergency, what to do in the first 15 minutes, and who to call in Rockville, MD. Call (240) 255 4794.",
    keywords: [
      "emergency hvac for restaurants",
      "restaurant hvac repair",
      "commercial hvac rockville",
      "rooftop unit repair",
      "24/7 hvac",
      "rockville md",
      "maven dmv",
    ],
    category: "Commercial",
    date: "2026-11-24T11:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/hvac-residential-commercial.jpg",
    readTime: 7,
    body: [
      { type: "p", content: "**What to do in the first 15 minutes when your AC or heat fails.** Emergency line: [(240) 255 4794](tel:+12402554794)" },
      { type: "p", content: "A restaurant cannot pause when the HVAC system fails. Dining rooms get hot or cold, kitchens become unsafe for staff, and customers leave. Kitchen heat, grease, constant door traffic, and long operating hours put restaurant systems under far more stress than a typical home. This guide from Maven DMV explains what counts as an HVAC emergency, what to do in the first 15 minutes, and how to reduce the chance of a breakdown during your busiest service." },
      { type: "p", content: "**Quick answer:** If your restaurant loses heating or cooling during service, make sure people are safe, check the thermostat and breaker, and call a 24/7 commercial HVAC technician right away. Do not keep running a system that smells like burning, makes loud noises, or leaks water. Write down when the problem began and what you saw." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "What Counts as a Restaurant HVAC Emergency?", href: "#what-counts" },
          { label: "Your First 15 Minutes", href: "#first-15-minutes" },
          { label: "Common Restaurant HVAC Emergencies", href: "#common-emergencies" },
          { label: "What Happens When Our Technician Arrives", href: "#technician-arrives" },
          { label: "What to Have Ready Before We Arrive", href: "#have-ready" },
          { label: "How to Prevent the Next Emergency", href: "#prevention" },
          { label: "What Affects Emergency Repair Cost", href: "#cost" },
          { label: "Why Restaurants Call Maven DMV", href: "#why-maven" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "what-counts", content: "What Counts as a Restaurant HVAC Emergency?" },
      {
        type: "table",
        columns: ["Level", "What It Looks Like", "What To Do"],
        rows: [
          ["Emergency", "No cooling or heating in a full dining room or kitchen, burning smell, smoke, sparks, gas smell, water pouring from a unit, or a failed rooftop unit during service", "Act now. Call our 24/7 line. Leave the area if you smell gas or see smoke."],
          ["Urgent", "Weak cooling or heat, short cycling, odd noises, a unit that keeps tripping the breaker", "Call the same day. Running the system can make damage worse."],
          ["Can wait", "Minor temperature drift, a dirty filter, a thermostat display issue", "Schedule a visit. Replace the filter if it is dirty."],
        ],
      },
      { type: "p", content: "If you smell gas, leave the building and call 911 and your gas utility from outside. Do not turn lights or equipment on or off. If you see smoke or flames, evacuate and call 911 first." },
      { type: "h2", id: "first-15-minutes", content: "Your First 15 Minutes" },
      {
        type: "ul",
        content: [
          "**1. Protect people first.** Check that staff and guests are safe. In extreme heat, give staff breaks and water. The [OSHA heat exposure guidance](https://www.osha.gov/heat-exposure) explains warning signs of heat illness.",
          "**2. Do the safe quick checks.** Look at the thermostat mode and setpoint, check the breaker for the unit, and confirm the rooftop or outdoor unit is not blocked. Reset a tripped breaker only once. If it trips again, stop.",
          "**3. Call the emergency line.** Call [(240) 255 4794](tel:+12402554794). Tell us the symptoms, where the unit is, when it stopped, and whether you smelled burning, gas, or smoke.",
          "**4. Protect your food.** Keep walk in cooler and freezer doors closed, since a closed box holds cold for a while. If the failure is in the refrigeration system itself, read our [commercial refrigeration maintenance checklist](/blog/commercial-refrigeration-maintenance-checklist-rockville).",
          `**5. Decide how to operate.** Check your local health department rules before deciding whether to stay open. If your kitchen or dining room cannot be kept safe and comfortable, closing early may be the right call. See the [FDA Food Code](${FDA_FOOD_CODE}) for food safety basics.`,
          "**6. Document and prepare access.** Note the time, symptoms, and any error codes. Make sure someone can give the technician roof access and show us the unit.",
        ],
      },
      { type: "h2", id: "common-emergencies", content: "Common Restaurant HVAC Emergencies" },
      {
        type: "ul",
        content: [
          "**Dining room AC failure:** Hot dining rooms drive guests away and make staff work in unsafe conditions.",
          "**Heating failure in winter:** Cold rooms, frozen pipes near exterior walls, and unhappy guests.",
          "**Rooftop unit failure:** Compressors, fans, and electrical parts wear out under constant use.",
          "**Frozen evaporator coil:** Often caused by dirty filters, low airflow, or low refrigerant.",
          "**Makeup air and exhaust problems:** Kitchens need balanced airflow. A failed fan can fill the space with heat and smoke.",
          "**Electrical faults:** Tripped breakers, failed capacitors, and loose connections can shut down a unit instantly.",
          "**Thermostat and control failures:** The system may be fine but not getting the right signal.",
        ],
      },
      { type: "p", content: "Many failures start with an electrical cause. If breakers keep tripping, our [electrical services](/electrical) can check the panel and wiring too." },
      { type: "h2", id: "technician-arrives", content: "What Happens When Our Technician Arrives" },
      { type: "p", content: "We start by asking what you noticed and what you tried. Then we inspect the thermostat, filters, indoor and outdoor units, electrical connections, and controls. We find the root cause, explain the repair options and price in plain language, and start work only after you approve. When possible, we complete the repair on the same visit. If a part has to be ordered, we discuss a temporary plan so you can keep operating safely. You also receive clear notes on what we found and what we did. For a similar approach on a typical home or small business system, see our guide to [24 hour AC repair in Rockville](/blog/24-hour-ac-repair-rockville)." },
      { type: "h2", id: "have-ready", content: "What to Have Ready Before We Arrive" },
      {
        type: "ul",
        content: [
          "Unit location and roof access",
          "Brand and model, if you can read the label",
          "What you saw, heard, or smelled",
          "When the problem began",
          "Whether the breaker tripped",
          "Name and phone number of the on site contact",
        ],
      },
      { type: "h2", id: "prevention", content: "How to Prevent the Next Emergency" },
      { type: "p", content: "Most restaurant HVAC emergencies do not appear out of nowhere. They build over time. Schedule professional maintenance before the heating and cooling seasons, replace filters on a regular basis, and keep rooftop units clear of debris. Have exhaust and makeup air equipment checked, and ask your technician to look at belts, motors, capacitors, and electrical connections. Listen for new noises and watch for uneven temperatures, because small changes often come before large failures. A written maintenance record also helps you plan repairs and budget replacements, instead of reacting under pressure." },
      { type: "h2", id: "cost", content: "What Affects Emergency Repair Cost" },
      { type: "p", content: "Costs depend on the part that failed, the type and age of the equipment, how hard the unit is to reach, and whether the visit takes place after hours. We explain the problem and give you a clear quote before work begins. A repair that keeps you open is often worth more than the repair bill alone, because lost sales and spoiled inventory add up quickly." },
      { type: "h2", id: "why-maven", content: "Why Restaurants Call Maven DMV" },
      {
        type: "ul",
        content: [
          "Licensed technicians for HVAC, refrigeration, and electrical work",
          "Restaurant experience, including [walk in coolers](/walk-in-cooler-freezer-service-rockville-md) and kitchen equipment",
          "24/7 availability for urgent issues",
          "Plain language explanations with no unnecessary upsells",
          "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        ],
      },
      { type: "p", content: `Read customer feedback on our [Google Business Profile](${GBP}), or visit our [home page](/). Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.` },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "Do you offer 24/7 emergency HVAC for restaurants in Rockville?",
            answer: "Yes. Our emergency line is available 24 hours a day, 7 days a week for urgent issues.",
          },
          {
            question: "Should I close my restaurant if the AC fails?",
            answer: "It depends on conditions and local health rules. If staff or guests are at risk, or food safety is affected, closing is the safer choice.",
          },
          {
            question: "Can you repair rooftop HVAC units?",
            answer: "Yes. We work on commercial rooftop units, along with other HVAC and related equipment.",
          },
          {
            question: "How fast can a technician arrive?",
            answer: "Arrival depends on location and demand. Call the emergency line and we will give you a clear timeframe.",
          },
          {
            question: "Can you help with walk in coolers during an HVAC emergency?",
            answer: "Yes. We service commercial refrigeration and can check whether the problem is HVAC, refrigeration, or electrical.",
          },
        ],
      },
      ...contactBlocks("Restaurant HVAC Down? Call Now"),
    ],
  },
  {
    slug: "commercial-refrigeration-maintenance-checklist-rockville",
    title: "Commercial Refrigeration Maintenance Checklist",
    seoTitle: "Commercial Refrigeration Maintenance Checklist | Maven DMV",
    excerpt:
      "A practical commercial refrigeration maintenance checklist with daily, weekly, monthly, and annual tasks for walk in coolers and freezers. Call (240) 255 4794.",
    keywords: [
      "commercial refrigeration maintenance checklist",
      "walk in cooler maintenance",
      "walk in freezer maintenance",
      "restaurant refrigeration",
      "commercial refrigeration rockville",
      "maven dmv",
    ],
    category: "Commercial",
    date: "2026-11-24T10:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/hvac-walk-in-coolers.jpg",
    readTime: 8,
    body: [
      { type: "p", content: "**A printable schedule for walk in coolers, freezers, and reach in units in Rockville, MD.**" },
      { type: "p", content: "When a walk in cooler fails, the cost is not only the repair. You can lose inventory, miss service, and risk food safety problems in a matter of hours. Most breakdowns do not happen without warning. They build slowly from dirty coils, worn door gaskets, loose electrical connections, and blocked airflow. A simple maintenance routine catches these problems early. This checklist from Maven DMV covers what your staff can do each day and week, and what a licensed technician should check each quarter and each year." },
      { type: "p", content: "**Quick answer:** A commercial refrigeration maintenance checklist is a schedule of daily, weekly, monthly, quarterly, and annual tasks that keep coolers and freezers cold, safe, and efficient. Staff handle temperature logs, cleaning, and visual checks. A licensed technician handles coils, refrigerant, electrical parts, and defrost systems." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "Target Temperatures to Know", href: "#target-temperatures" },
          { label: "Daily Checklist for Your Staff", href: "#daily" },
          { label: "Weekly Checklist", href: "#weekly" },
          { label: "Monthly Checklist", href: "#monthly" },
          { label: "Quarterly and Annual Tasks for a Licensed Technician", href: "#quarterly-annual" },
          { label: "Red Flags: Call a Technician Now", href: "#red-flags" },
          { label: "What a Professional Diagnostic Looks Like", href: "#diagnostic" },
          { label: "Common Mistakes That Shorten Equipment Life", href: "#mistakes" },
          { label: "When Electrical and HVAC Problems Look Like Refrigeration Problems", href: "#electrical-hvac" },
          { label: "Why Rockville Businesses Call Maven DMV", href: "#why-maven" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "target-temperatures", content: "Target Temperatures to Know" },
      { type: "p", content: "These general targets help you spot a problem early. Always follow your local health department rules, which take priority." },
      {
        type: "table",
        columns: ["Equipment", "Target Temperature", "Note"],
        rows: [
          ["Walk in cooler and reach in cooler", "41°F or below", "Matches the common cold holding limit in the FDA Food Code"],
          ["Walk in freezer and reach in freezer", "0°F or below", "Keeps frozen food solid and stable"],
          ["Prep table cold rail", "41°F or below", "Check with a thermometer in the food, not only the display"],
        ],
      },
      { type: "h2", id: "daily", content: "Daily Checklist for Your Staff" },
      {
        type: "table",
        columns: ["Task", "Why It Matters"],
        rows: [
          ["Read and log the temperature of every unit", "A written log shows trends and proves food safety checks"],
          ["Confirm doors close and latch fully", "Doors left ajar raise temperatures and cause ice buildup"],
          ["Look for ice on the floor, walls, or evaporator", "Ice can signal a defrost or door seal problem"],
          ["Listen for new or unusual noises", "Grinding, rattling, or buzzing often comes before a failure"],
          ["Wipe up spills and clear the floor", "Spills freeze, block drains, and create slip hazards"],
          ["Keep product away from fan and vent openings", "Blocked airflow causes warm spots"],
        ],
      },
      { type: "h2", id: "weekly", content: "Weekly Checklist" },
      {
        type: "table",
        columns: ["Task", "Why It Matters"],
        rows: [
          ["Clean door gaskets with mild soap and water", "Dirty or torn gaskets leak cold air and waste energy"],
          ["Check that door hardware, hinges, and closers work", "A door that does not shut on its own is a common cause of warm boxes"],
          ["Inspect strip curtains and door sweeps", "Damaged curtains let warm air in"],
          ["Check drain pans and lines for clogs", "Clogged drains cause water leaks and ice"],
          ["Wipe shelves, floors, and fan guards", "Clean surfaces improve airflow and food safety"],
        ],
      },
      { type: "h2", id: "monthly", content: "Monthly Checklist" },
      {
        type: "table",
        columns: ["Task", "Why It Matters"],
        rows: [
          ["Clean the condenser coil, if accessible and safe", "A dirty condenser is one of the most common causes of cooling failure"],
          ["Look at the evaporator coil and fan blades", "Ice, dust, or bent blades reduce airflow"],
          ["Check thermometers against a known accurate reference", "A wrong display hides a real problem"],
          ["Inspect visible refrigerant lines for oil stains", "Oil residue can point to a leak"],
          ["Look for frayed wires or burn marks at disconnects", "Loose or damaged wiring is a safety risk"],
        ],
      },
      { type: "p", content: "Staff should only clean coils when the equipment is powered off and the area is safe. If a condenser is on a roof or hard to reach, leave it to a technician." },
      { type: "h2", id: "quarterly-annual", content: "Quarterly and Annual Tasks for a Licensed Technician" },
      {
        type: "table",
        columns: ["Task", "Why It Matters"],
        rows: [
          ["Test electrical connections, contactors, capacitors, and amp draw", "Worn electrical parts are a leading cause of compressor and fan failure"],
          ["Check refrigerant pressures and test for leaks", "Low refrigerant means a leak that must be repaired"],
          ["Clean condenser and evaporator coils thoroughly", "Restores cooling capacity and lowers energy use"],
          ["Test defrost heaters, timers, and drain heaters", "A failed defrost system leads to iced coils"],
          ["Inspect fan motors, bearings, and mounts", "Weak fans cause warm spots and short cycling"],
          ["Check door heaters, lights, and controls", "Prevents frozen doors and control faults"],
          ["Inspect rooftop or remote condensing units, mounts, and line insulation", "Weather, vibration, and wear affect outdoor components"],
          ["Record findings and give a written report", "Gives you a service history for planning and budgeting"],
        ],
      },
      { type: "p", content: "Refrigerant work requires certification under federal rules. See the [EPA Section 608 information](https://www.epa.gov/section608) for details. Do not add refrigerant yourself." },
      { type: "h2", id: "red-flags", content: "Red Flags: Call a Technician Now" },
      {
        type: "ul",
        content: [
          "Box temperature rising above target for more than a short time.",
          "Ice building on coils or walls.",
          "Compressor short cycling or running nonstop.",
          "Burning smell, smoke, or sparks near the unit.",
          "Water pooling inside or outside the box.",
          "Breaker tripping repeatedly.",
          "Loud grinding or squealing.",
        ],
      },
      { type: "p", content: "If you see smoke or flames, leave the area and call 911 first. For other urgent refrigeration problems, our emergency line is open 24 hours a day, 7 days a week." },
      { type: "h2", id: "diagnostic", content: "What a Professional Diagnostic Looks Like" },
      { type: "p", content: "A Rockville business recently asked us to inspect and start up a walk in cooler served by a rooftop condensing unit. Our technician checked the electrical supply, refrigeration controls, compressor, condenser fan, evaporator fans, and defrost system. After starting the unit, we watched how the box temperature responded and evaluated overall performance. The cooler was working properly at the time of the visit, and the owner received clear findings with no unnecessary repairs. This is the value of routine checks: sometimes the answer is that everything is fine, and that peace of mind protects your inventory." },
      { type: "h2", id: "mistakes", content: "Common Mistakes That Shorten Equipment Life" },
      {
        type: "ul",
        content: [
          "Overloading shelves so air cannot circulate",
          "Propping doors open during deliveries",
          "Ignoring small temperature drifts",
          "Using a pressure washer on electrical parts or condenser fins",
          "Skipping professional service until something breaks",
          "Not keeping a written maintenance log",
        ],
      },
      { type: "h2", id: "electrical-hvac", content: "When Electrical and HVAC Problems Look Like Refrigeration Problems" },
      { type: "p", content: `A box that will not hold temperature is sometimes a power or control issue, not a refrigeration issue. A tripped breaker, a worn contactor, or a loose connection can look like a failed compressor. Because Maven DMV handles HVAC, refrigeration, and electrical work, we can find the true cause without sending you to a second company. Learn more about our [electrical services](/electrical), or read how we approach [24 hour AC repair in Rockville](/blog/24-hour-ac-repair-rockville). For food safety rules, see the [FDA Food Code](${FDA_FOOD_CODE}).` },
      { type: "h2", id: "why-maven", content: "Why Rockville Businesses Call Maven DMV" },
      {
        type: "ul",
        content: [
          "Licensed technicians for refrigeration, HVAC, and electrical work",
          "Plain language reports and no unnecessary upsells",
          "Documented findings you can keep for your records",
          "24/7 availability for urgent issues",
          "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        ],
      },
      { type: "p", content: `Read customer feedback on our [Google Business Profile](${GBP}), or visit our [home page](/). Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.` },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "How often should commercial refrigeration be serviced?",
            answer: "Most businesses benefit from professional service at least twice a year, and busy kitchens often schedule quarterly visits. Your equipment age and usage matter.",
          },
          {
            question: "What is the most common cause of walk in cooler failure?",
            answer: "Dirty condenser coils, failed electrical parts, and door seal problems are among the most common causes.",
          },
          {
            question: "Can my staff clean the condenser coil?",
            answer: "Sometimes, if it is accessible, powered off, and safe to reach. Rooftop or remote units should be left to a technician.",
          },
          {
            question: "How do I know if my cooler needs repair or replacement?",
            answer: "Frequent repairs, rising energy costs, and a failing compressor on older equipment are signs to discuss replacement.",
          },
          {
            question: "Do you offer emergency refrigeration service in Rockville?",
            answer: "Yes. Our emergency line is available 24/7 for urgent issues.",
          },
        ],
      },
      ...contactBlocks("Need a Refrigeration Check? Call Maven DMV"),
    ],
  },
  {
    slug: "commercial-food-warmer-not-heating-rockville",
    title: "Commercial Food Warmer Not Heating? Causes and Fixes",
    seoTitle: "Commercial Food Warmer Not Heating? 7 Causes | Maven DMV",
    excerpt:
      "Commercial food warmer not heating? Learn the common causes, safe quick checks, and when to call a licensed technician in Rockville, MD. Call (240) 255 4794.",
    keywords: [
      "commercial food warmer not heating",
      "food warmer repair",
      "steam table not heating",
      "restaurant equipment repair rockville",
      "commercial kitchen equipment",
      "maven dmv",
    ],
    category: "Commercial",
    date: "2026-11-24T09:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/commercial/commercial-hero.jpg",
    readTime: 7,
    body: [
      { type: "p", content: "**Safe checks you can do now, and what needs a licensed technician in Rockville, MD.**" },
      { type: "p", content: "When a food warmer stops heating, hot food drops out of the safe temperature range and service slows down. Countertop warmers, steam tables, holding cabinets, and soup wells all work hard in busy kitchens, and they face grease, moisture, heat, and daily cleaning. This guide from Maven DMV explains why a commercial food warmer may not heat, which checks are safe for staff, and when a licensed technician should take over." },
      { type: "p", content: "**Quick answer:** A commercial food warmer usually stops heating because of a power problem, a tripped safety limit, a failed thermostat or control, a burned out heating element, low water in a wet unit, or grease and moisture damage to electrical parts. Check power, settings, and water level first. If it still will not heat, stop using it and call a technician." },
      { type: "p", content: "**Safety first:** Unplug or switch off the unit before cleaning or inspecting it. Never open electrical panels on a plugged in unit, never spray water on controls, and never bypass a thermostat or safety switch. If you smell gas, leave the building and call 911 and your gas utility from outside." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "Symptoms and Likely Causes", href: "#symptoms" },
          { label: "What Staff Can Check Safely", href: "#staff-checks" },
          { label: "Common Causes Explained", href: "#common-causes" },
          { label: "Hot Holding and Food Safety", href: "#food-safety" },
          { label: "What a Technician Checks", href: "#technician-checks" },
          { label: "How to Prevent Heating Problems", href: "#prevention" },
          { label: "Repair or Replace?", href: "#repair-or-replace" },
          { label: "Why Restaurants Call Maven DMV", href: "#why-maven" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "symptoms", content: "Symptoms and Likely Causes" },
      {
        type: "table",
        columns: ["What You See", "Likely Cause", "Who Fixes It"],
        rows: [
          ["No heat, no lights", "No power: tripped breaker, GFCI, loose plug, or failed switch", "Staff check, then technician"],
          ["Lights on, no heat", "Failed element, thermostat, relay, or tripped high limit", "Technician"],
          ["Heats slowly or unevenly", "Scale, failing element, or a weak thermostat", "Technician"],
          ["Heats, then shuts off", "High limit tripping from overheating or a bad control", "Technician"],
          ["Wet unit not heating, low water", "Low water level or a low water cutoff problem", "Staff check, then technician"],
          ["Breaker trips when turned on", "Electrical fault or damaged wiring", "Technician right away"],
          ["Gas model will not light", "Pilot, thermocouple, or gas valve problem", "Technician only"],
        ],
      },
      { type: "h2", id: "staff-checks", content: "What Staff Can Check Safely" },
      { type: "p", content: "These checks take a few minutes and often explain a problem. Follow the equipment manual for your model." },
      {
        type: "table",
        columns: ["Safe for Staff", "Leave to a Technician"],
        rows: [
          ["Confirm the unit is plugged in firmly and the cord is not damaged", "Open the control panel or remove covers"],
          ["Check the breaker and any GFCI outlet, and reset once only", "Replace elements, thermostats, or relays"],
          ["Make sure the controls are set to a heating temperature", "Reset a breaker again and again"],
          ["Fill a wet unit to the correct water level, and use the fill line", "Bypass a safety switch or limit"],
          ["Let the unit cool, then press the reset button if your model has one", "Relight gas pilots after a gas smell"],
          ["Wipe away grease and food residue from the outside and controls", "Use the unit when wiring looks burned or wet"],
        ],
      },
      { type: "h2", id: "common-causes", content: "Common Causes Explained" },
      {
        type: "ul",
        content: [
          "**1. No power.** A tripped breaker, a loose plug, or a damaged cord is the simplest cause. If the breaker trips again, there is an electrical fault.",
          "**2. Failed thermostat or control.** The thermostat tells the heating element when to turn on. If it fails, the unit may not heat at all, or it may heat without stopping.",
          "**3. Burned out heating element.** Elements wear out with age and thermal stress. Scale and moisture shorten their life.",
          "**4. Tripped high limit switch.** This safety device shuts the heater off if the unit overheats. A repeated trip means the root cause still needs repair.",
          "**5. Low water in wet units.** Steam tables and bain maries need the right water level. Low water can shut off heating to protect the element, and dry running can damage it.",
          "**6. Scale buildup.** Hard water leaves mineral deposits that insulate the element and slow heating. Regular delime cleaning helps.",
          "**7. Grease and moisture around electrical parts.** In a recent Rockville restaurant inspection, we found heavy grease, food residue, and moisture around the wiring, controls, and valves of a commercial food warmer. That kind of buildup can cause poor heating, uneven temperatures, early part failure, and safety concerns near wiring.",
        ],
      },
      { type: "h2", id: "food-safety", content: "Hot Holding and Food Safety" },
      { type: "p", content: `Hot food should generally be held at 135°F or above under the FDA Food Code. A warmer that is not heating can put food below that range, so use a probe thermometer in the food and follow your local health department rules about what to do with food that has cooled. See the [FDA Food Code](${FDA_FOOD_CODE}) for general guidance. Do not use a warmer to reheat cold food unless it is designed for that purpose.` },
      { type: "h2", id: "technician-checks", content: "What a Technician Checks" },
      {
        type: "ul",
        content: [
          "Power supply, plug, cord, and breaker",
          "Wiring, terminals, and signs of heat or moisture damage",
          "Thermostat, control board, switches, and relays",
          "Heating element continuity and condition",
          "High limit and safety devices",
          "Water level controls, valves, and fill components on wet units",
          "Gas supply, pilot, thermocouple, and valve on gas models",
          "Overall cleanliness and condition of the unit",
        ],
      },
      { type: "p", content: "We explain what we found in plain language, give you repair options and a clear price, and start work only after you approve it. If your problem may be electrical, see our [electrical services](/electrical). If other equipment is also failing, read our guides on [emergency HVAC for restaurants](/blog/emergency-hvac-for-restaurants-rockville) and our [commercial refrigeration maintenance checklist](/blog/commercial-refrigeration-maintenance-checklist-rockville)." },
      { type: "h2", id: "prevention", content: "How to Prevent Heating Problems" },
      {
        type: "ul",
        content: [
          "Wipe the exterior and controls daily with a damp cloth, with the unit off and cool",
          "Deep clean on a regular schedule, so grease does not build up inside",
          "Delime wet units on a regular schedule, especially in hard water areas",
          "Keep wet units filled to the correct level",
          "Inspect cords and plugs and replace damaged ones",
          "Schedule professional inspection of heavily used equipment",
        ],
      },
      { type: "h2", id: "repair-or-replace", content: "Repair or Replace?" },
      { type: "p", content: "Repair usually makes sense when a single part has failed and the unit is otherwise sound. Replacement is worth discussing when the unit is very old, the body is corroded, repairs keep repeating, or parts are hard to find. We tell you honestly which option fits your budget and your kitchen." },
      { type: "h2", id: "why-maven", content: "Why Restaurants Call Maven DMV" },
      {
        type: "ul",
        content: [
          "Licensed technicians for HVAC, refrigeration, electrical, and equipment work",
          "Restaurant experience, including [walk in coolers](/walk-in-cooler-freezer-service-rockville-md) and kitchen equipment",
          "24/7 availability for urgent issues",
          "Plain language reports with no unnecessary upsells",
          "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        ],
      },
      { type: "p", content: `Read customer feedback on our [Google Business Profile](${GBP}), or visit our [home page](/). Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.` },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "Why is my food warmer on but not heating?",
            answer: "The usual causes are a failed heating element, thermostat or relay, or a tripped high limit switch.",
          },
          {
            question: "Why does my steam table not heat?",
            answer: "Check the water level first. If the water is correct, the element, thermostat, or controls may have failed.",
          },
          {
            question: "Can I reset a high limit switch myself?",
            answer: "Some models have a reset button. If it trips again, stop using the unit and call a technician.",
          },
          {
            question: "Is it safe to use a warmer that trips the breaker?",
            answer: "No. Repeated breaker trips point to an electrical fault that should be repaired first.",
          },
          {
            question: "Do you repair commercial kitchen equipment in Rockville?",
            answer: "Yes. We service commercial food warmers and related equipment, and our emergency line is available 24/7.",
          },
        ],
      },
      ...contactBlocks("Food Warmer Down? Call Maven DMV"),
    ],
  },
  {
    slug: "water-conditioner-rockville-md",
    title: "Water Conditioner in Rockville, MD: Do You Need One?",
    seoTitle: "Water Conditioner in Rockville, MD: Need One? | Maven DMV",
    excerpt:
      "Hard water spots, scale, or a noisy water heater? Learn how water conditioners differ from softeners, how to test your water, and when to call a plumber.",
    keywords: [
      "water conditioner",
      "water softener",
      "hard water",
      "rockville md",
      "plumbing",
      "water heater",
      "water quality",
      "maven dmv",
    ],
    category: "Plumbing",
    date: "2026-10-17T12:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/plumbing-water-heaters.jpg",
    readTime: 7,
    body: [
      { type: "p", content: "**Quick answer:** A water conditioner is a home treatment system that reduces the problems caused by hard water, such as scale on fixtures and spots on glass. Some systems remove hardness minerals, while others only change how scale forms, so the name alone does not tell you what you are buying. Whether you need one depends on your water hardness and the signs you see at home. Test your water first, then choose a system. For a plumbing assessment, call Maven at [240-255-4794](tel:+12402554794)." },
      { type: "p", content: "White crust on a faucet, cloudy glasses from the dishwasher, and a water heater that rumbles like popcorn are classic signs of hard water. Many Rockville homeowners start looking for a water conditioner after noticing them, and the options can be confusing." },
      { type: "p", content: "This guide comes from the licensed plumbing and HVAC team at Maven Home Services (Maven DMV) in Rockville. It explains what water conditioners do, how to check your water hardness, what to ask before you buy, and where a plumber fits in." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "Is Hard Water a Safety Problem?", href: "#is-hard-water-safe" },
          { label: "Signs of Hard Water at Home", href: "#signs-of-hard-water" },
          { label: "How to Check Your Water Hardness", href: "#check-hardness" },
          { label: "Types of Water Conditioners", href: "#types-of-conditioners" },
          { label: "What a Water Conditioner Can and Cannot Do", href: "#can-and-cannot" },
          { label: "Where a Plumber Comes In", href: "#where-a-plumber-comes-in" },
          { label: "Questions to Ask Before You Buy", href: "#questions-to-ask" },
          { label: "Need Help With Hard Water?", href: "#need-help" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "is-hard-water-safe", content: "Is Hard Water a Safety Problem?" },
      { type: "p", content: "Generally not. The City of Rockville reported that its water met or exceeded all water quality requirements for 2025, and hardness is usually treated as a nuisance and maintenance issue rather than a health one. Minerals build up inside pipes, fixtures, and water heaters over time. You can read the city's report on its [drinking water quality page](https://www.rockvillemd.gov/drinking-water-quality/). Depending on your address, your water may instead come from WSSC Water, which publishes its own [water quality information](https://wsscwater.com/waterquality)." },
      { type: "h2", id: "signs-of-hard-water", content: "Signs of Hard Water at Home" },
      { type: "p", content: "Look for these signs before you spend any money:" },
      {
        type: "ul",
        content: [
          "Chalky white scale on faucets, showerheads, and kettles, which also affects [sinks and fixtures](/plumbing/sinks-basins)",
          "Spots or a cloudy film on dishes and glassware",
          "Soap and shampoo that do not lather well",
          "Stiff laundry and skin that feels dry after a shower",
          "Weak flow from scaled-up aerators and showerheads",
          "Popping or rumbling from the [water heater](/plumbing/water-heaters) as sediment builds up",
        ],
      },
      { type: "p", content: "One sign alone is not proof. Several signs together, plus a test result, make a much stronger case." },
      { type: "h2", id: "check-hardness", content: "How to Check Your Water Hardness" },
      {
        type: "ul",
        content: [
          "**Read your utility report.** Check the City of Rockville or WSSC Water report for hardness, and confirm which utility serves your address.",
          "**Use a test kit or lab test.** Home strips give a rough reading. A certified lab gives a precise number.",
          "**Read the number correctly.** The U.S. Geological Survey classes water under 60 mg/L as soft, 61 to 120 as moderately hard, 121 to 180 as hard, and over 180 as very hard. One grain per gallon equals about 17.1 mg/L. The [USGS explains water hardness](https://www.usgs.gov/special-topics/water-science-school/science/hardness-water) in more detail.",
        ],
      },
      { type: "p", content: "Hardness can vary by location and season, so test the water at your own tap rather than relying on a neighborhood average." },
      { type: "h2", id: "types-of-conditioners", content: "Types of Water Conditioners" },
      { type: "p", content: "Companies use the word \"conditioner\" for several different products, so always ask what the system actually does." },
      { type: "h3", content: "Salt-Based Water Softeners" },
      { type: "p", content: "These use ion exchange to swap calcium and magnesium for sodium or potassium. They genuinely reduce hardness and are the most proven way to stop scale. They need regular salt refills and use some water when they regenerate. Anyone on a sodium-restricted diet should ask a doctor first." },
      { type: "h3", content: "Salt-Free Water Conditioners" },
      { type: "p", content: "These do not remove minerals. They aim to change how scale forms so it clings less to surfaces. Results depend on the product and your water, and the water will still test as hard." },
      { type: "h3", content: "Electronic and Magnetic Descalers" },
      { type: "p", content: "Evidence that these work is limited and results are mixed. Ask for independent test data before paying for one." },
      { type: "h2", id: "can-and-cannot", content: "What a Water Conditioner Can and Cannot Do" },
      { type: "p", content: "A properly sized system can reduce scale, spotting, and soap use, and it may help appliances and fixtures last longer. It is not a drinking water purifier. A softener on its own does not remove lead or chlorine. The City of Rockville notes that it cannot control the plumbing materials used inside your home, so if lead is a concern, test your water and use a filter certified for lead removal." },
      { type: "h2", id: "where-a-plumber-comes-in", content: "Where a Plumber Comes In" },
      { type: "p", content: "Installation is more than setting a tank in the basement. A plumber has to place the unit on the main line after the shutoff, add a bypass valve, connect a drain, check water pressure, and make sure the work meets code. Pipe condition matters too. In older homes with corroded or galvanized lines, treating the water will not fix leaks or low pressure. Maven's [plumbing team](/plumbing) inspects your pipes first and explains whether [repiping](/plumbing#re-piping) or other repairs should come before any treatment system." },
      { type: "p", content: "Hard water also puts extra work on your water heater. If yours is noisy or slow to heat, see our [water heater services](/plumbing/water-heaters)." },
      { type: "h2", id: "questions-to-ask", content: "Questions to Ask Before You Buy" },
      {
        type: "ul",
        content: [
          "Does the system remove minerals, or only change how scale forms?",
          "Is it independently certified? For salt-based softeners, look for NSF/ANSI 44.",
          "What does it need each year: salt, media, filters, or service?",
          "Are installation, the drain connection, and a bypass valve included?",
          "Will I get a written estimate and warranty terms?",
          "Was my water tested before you recommended this size?",
        ],
      },
      { type: "p", content: "Be cautious of any company that quotes a system without testing your water, or claims one product solves every water problem. You can verify a Maryland contractor's license on the [MHIC license search](https://labor.maryland.gov/license/mhic/)." },
      { type: "h2", id: "need-help", content: "Need Help With Hard Water in Your Rockville Home?" },
      { type: "p", content: "If you are seeing scale, weak flow, or a struggling water heater, Maven can inspect your plumbing and talk through options for your water. Call [240-255-4794](tel:+12402554794) or [schedule a visit online](/contact). Response times depend on technician availability and your location. Veterans, active military, and first responders receive 10% off with valid ID." },
      {
        type: "lines",
        content: [
          "**Maven Home Services (Maven DMV)**",
          "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
          "Open 24/7 · Emergency line for urgent issues",
          "Serving Rockville and communities within about 30 miles across Maryland and Northern Virginia.",
        ],
      },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "What is a water conditioner?",
            answer: "A water conditioner is a home treatment system that reduces the problems caused by hard water. Some remove hardness minerals, while others only change how scale forms.",
          },
          {
            question: "Is a water conditioner the same as a water softener?",
            answer: "Not always. A salt-based softener removes calcium and magnesium. Many salt-free conditioners do not remove minerals, so the water stays hard but may form less scale.",
          },
          {
            question: "Is tap water in Rockville hard?",
            answer: "It depends on your supplier and location. The City of Rockville and WSSC Water each publish water quality information. The most reliable answer comes from your utility's report or a test at your own tap.",
          },
          {
            question: "How do I know if I need a water conditioner?",
            answer: "Look for scale on fixtures, spotted dishes, stiff laundry, and a noisy water heater, then confirm with a hardness test. If your water tests soft or only moderately hard, you may not need one.",
          },
          {
            question: "Can a water conditioner remove lead or chlorine?",
            answer: "Not by itself. Softeners and conditioners target hardness. If you are concerned about lead or chlorine, test your water and use a filter certified for those contaminants.",
          },
          {
            question: "Can Maven help with hard water problems in Rockville?",
            answer: "Maven's plumbers can inspect your pipes, fixtures, and water heater for hard-water damage and discuss options for your home. Call [240-255-4794](tel:+12402554794) or [schedule a visit online](/contact).",
          },
        ],
      },
      { type: "cta", text: "Schedule a Plumbing Inspection", href: "/contact" },
    ],
  },
  {
    slug: "emergency-ac-repair-rockville",
    title: "Emergency AC Repair in Rockville, MD: Causes, Fixes and What to Expect",
    seoTitle: "Emergency AC Repair in Rockville, MD | Maven DMV",
    excerpt:
      "AC down in Rockville? Learn the common causes of AC failure, what to have ready when you call, and how Maven's licensed team helps. Call 240-255-4794.",
    keywords: [
      "emergency ac repair",
      "ac breakdown",
      "rockville md",
      "hvac repair",
      "ac capacitor",
      "frozen ac coil",
      "refrigerant leak",
      "maven dmv",
    ],
    category: "HVAC",
    date: "2026-10-17T11:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/ac.jpeg",
    readTime: 8,
    body: [
      { type: "p", content: "**Quick answer:** An AC emergency is any breakdown that puts health, safety, or your home at risk, such as no cooling during a heat wave, a burning smell, or water leaking indoors. Sudden failures usually trace back to a failed capacitor, a frozen coil, a refrigerant leak, a clogged drain line, a motor or compressor problem, or a faulty control. For urgent help, call Maven at [240-255-4794](tel:+12402554794)." },
      { type: "p", content: "Maryland summers are hot and humid, and an air conditioner can run for long stretches without a break. When one part gives out, the whole system can stop in the middle of a heat wave. Knowing what usually goes wrong makes the call to a technician faster and less stressful." },
      { type: "p", content: "This guide comes from the licensed HVAC team at Maven Home Services (Maven DMV) in Rockville. It explains what counts as an emergency, the most common causes, how technicians fix them, and what to have ready when you call. If you want a checklist of safe things to try first, see our guide on [what to do when your AC quits](/blog/24-hour-ac-repair-rockville)." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "What Counts as an Emergency?", href: "#what-counts-as-emergency" },
          { label: "Six Common Causes of a Sudden AC Breakdown", href: "#common-causes" },
          { label: "What to Have Ready When You Call", href: "#what-to-have-ready" },
          { label: "What Happens During an Emergency Visit", href: "#emergency-visit" },
          { label: "Repair or Replace in an Emergency?", href: "#repair-or-replace" },
          { label: "Red Flags to Avoid When You Need Help Fast", href: "#red-flags" },
          { label: "Avoiding the Next Emergency", href: "#avoid-next-emergency" },
          { label: "Need Help With Your AC Right Now?", href: "#need-help" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "what-counts-as-emergency", content: "What Counts as an Emergency?" },
      { type: "p", content: "A breakdown is urgent when it threatens someone's health or your property, not just your comfort. Call right away if:" },
      {
        type: "ul",
        content: [
          "A person in the home is elderly, an infant, pregnant, or has a condition that heat makes worse",
          "Indoor temperatures keep climbing during a heat wave",
          "You smell burning, hear grinding, or see smoke",
          "Water is leaking into a ceiling, wall, or floor",
          "A breaker trips every time the AC tries to start",
        ],
      },
      { type: "p", content: "If nobody is at risk and the house is still bearable, a next-available appointment is often fine. If you notice a burning smell or a leak, switch the system off at the thermostat so the problem does not get worse." },
      { type: "h2", id: "common-causes", content: "Six Common Causes of a Sudden AC Breakdown" },
      { type: "h3", content: "1. A Failed Capacitor or Contactor" },
      { type: "p", content: "The capacitor gives the compressor and fan motors the jolt they need to start. When it weakens, you may hear the outdoor unit hum while the fan stays still. A technician tests the part and replaces it if it is out of specification. Capacitors can hold a charge even with the power off, so this is not a do-it-yourself repair." },
      { type: "h3", content: "2. A Frozen Evaporator Coil" },
      { type: "p", content: "Ice forms when airflow drops or refrigerant is low. Common triggers include a dirty filter, a blocked return, or a weak blower. Turn the system off so the ice can melt, then have a technician find the root cause. Melting the ice fixes the symptom, not the problem." },
      { type: "h3", content: "3. A Refrigerant Leak" },
      { type: "p", content: "Refrigerant is not used up like fuel. If the level is low, there is a leak somewhere. Signs include weak cooling, a hissing sound, and ice on the refrigerant lines. A proper repair means finding and fixing the leak, then recharging to the manufacturer's specification. Adding refrigerant without fixing the leak only buys time. Under the [EPA's Section 608 rules](https://www.epa.gov/section608), only certified technicians may handle it." },
      { type: "h3", content: "4. A Clogged Condensate Drain" },
      { type: "p", content: "Your AC pulls moisture from the air and sends it out through a drain line. When algae or debris blocks it, a safety switch can shut the system off, or water can overflow near the indoor unit. A technician clears the line and checks the pan and float switch. If the drain ties into household plumbing, our [plumbing team](/plumbing) can help with that too." },
      { type: "h3", content: "5. A Failing Fan Motor or Compressor" },
      { type: "p", content: "A motor that squeals, struggles, or will not spin points to worn bearings or electrical trouble. The compressor is the costliest part of an AC, so this is where the repair-or-replace conversation usually begins. Ask for the diagnosis and your options in writing." },
      { type: "h3", content: "6. A Thermostat or Control Board Fault" },
      { type: "p", content: "Sometimes the cooling equipment is fine and the signal is the problem. Dead batteries, loose wiring, or a failed control board can keep the system from starting. A technician checks voltage and controls before replacing anything." },
      { type: "h2", id: "what-to-have-ready", content: "What to Have Ready When You Call" },
      { type: "p", content: "A few details help the dispatcher prioritize your call and send the right technician:" },
      {
        type: "ul",
        content: [
          "Your address and the best number to reach you",
          "When the problem started and what you noticed first, such as a noise, a smell, or warm air",
          "Whether the outdoor unit is running, humming, or silent",
          "Whether a breaker has tripped or water is leaking",
          "The age and brand of the system, if you know them",
          "Anyone in the home who is vulnerable to heat",
        ],
      },
      { type: "p", content: "Describing symptoms accurately matters more than guessing the cause." },
      { type: "h2", id: "emergency-visit", content: "What Happens During an Emergency Visit" },
      {
        type: "ul",
        content: [
          "**Safety check.** The technician looks for electrical or water hazards before starting.",
          "**Diagnosis.** They test the electrical parts, airflow, refrigerant, and drain before recommending a fix.",
          "**Written estimate.** You approve the price in writing before any work begins.",
          "**Repair and review.** The technician completes the repair to code and walks you through what was done.",
        ],
      },
      { type: "p", content: "Maven technicians are MHIC licensed, EPA 608 certified, OSHA safety certified, background-checked, and insured. You can read more about our [HVAC services](/hvac) for homes in Rockville and nearby communities." },
      { type: "h2", id: "repair-or-replace", content: "Repair or Replace in an Emergency?" },
      { type: "p", content: "A breakdown in peak summer can make a rushed replacement tempting. Slow down and ask for both options. Repair usually makes sense when a single part has failed on an otherwise healthy system. Replacement is worth discussing when the system is old, has needed repeated repairs, or the compressor has failed. The U.S. Department of Energy offers practical advice on [maintaining your air conditioner](https://www.energy.gov/energysaver/maintaining-your-air-conditioner) that can help you ask better questions. A trustworthy contractor explains the numbers and does not pressure you." },
      { type: "h2", id: "red-flags", content: "Red Flags to Avoid When You Need Help Fast" },
      {
        type: "ul",
        content: [
          "No MHIC license number, which you can verify on the [Maryland MHIC license search](https://labor.maryland.gov/license/mhic/)",
          "A price quoted over the phone with no diagnosis",
          "Pressure to replace the whole system before anyone inspects it",
          "A request for full payment up front",
          "No written estimate",
        ],
      },
      { type: "h2", id: "avoid-next-emergency", content: "Avoiding the Next Emergency" },
      { type: "p", content: "Most breakdowns grow from small problems that went unnoticed. A yearly tune-up, regular filter changes, and clear airflow help catch worn parts before they fail. Use our [spring HVAC maintenance checklist](/blog/spring-hvac-maintenance-checklist), learn the [warning signs your AC needs repair](/blog/signs-ac-needs-repair), and read whether [duct cleaning](/blog/maryland-duct-cleaning) makes sense for your home. If a breaker keeps tripping, our [electrical team](/electrical) can help, and our [commercial services](/commercial) cover offices and shops." },
      { type: "h2", id: "need-help", content: "Need Help With Your AC Right Now?" },
      { type: "p", content: "Call [240-255-4794](tel:+12402554794). Response times depend on technician availability and your location. If it can wait, you can [schedule a visit online](/contact). Veterans, active military, and first responders receive 10% off with valid ID." },
      {
        type: "lines",
        content: [
          "**Maven Home Services (Maven DMV)**",
          "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
          "Open 24/7 · Emergency line for urgent issues",
          "Serving Rockville and communities within about 30 miles across Maryland and Northern Virginia.",
        ],
      },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "What counts as an emergency AC repair?",
            answer: "A breakdown is an emergency when it puts health, safety, or property at risk. Examples include no cooling during a heat wave with vulnerable people at home, a burning smell, smoke, grinding noises, or water leaking indoors.",
          },
          {
            question: "Why is my AC humming but not starting?",
            answer: "A humming outdoor unit with a still fan often points to a weak capacitor or a stuck motor. Turn the system off at the thermostat and call a technician, since capacitors can hold a charge and are unsafe to handle yourself.",
          },
          {
            question: "Can low refrigerant just be topped off?",
            answer: "Not as a real fix. Refrigerant is not consumed, so low levels mean a leak. A proper repair finds and fixes the leak before recharging, and only EPA 608 certified technicians may handle refrigerant.",
          },
          {
            question: "Why did my AC shut off and leave water near the indoor unit?",
            answer: "A clogged condensate drain is a common cause. Many systems have a safety switch that shuts the AC off when the drain pan fills. Turn the system off, dry the area, and have the drain line cleared.",
          },
          {
            question: "Should I repair or replace an old AC in an emergency?",
            answer: "It depends on the failed part, the age of the system, and its repair history. A single failed part on a healthy system is often worth repairing. Ask for both options in writing before deciding.",
          },
          {
            question: "Does Maven offer emergency AC repair in Rockville?",
            answer: "Yes. Maven Home Services has an emergency line for urgent issues at [240-255-4794](tel:+12402554794). Response times depend on technician availability and your location.",
          },
        ],
      },
      { type: "cta", text: "Schedule AC Repair", href: "/contact" },
    ],
  },
  {
    slug: "24-hour-ac-repair-rockville",
    title: "24 Hour AC Repair in Rockville, MD: What to Do When Your AC Quits",
    seoTitle: "24 Hour AC Repair in Rockville, MD | Maven DMV",
    excerpt:
      "AC stopped cooling at night? See what to check first, when it's an emergency, and how Maven's licensed Rockville team helps. Call 240-255-4794.",
    keywords: [
      "ac repair",
      "24 hour ac repair rockville",
      "emergency hvac",
      "rockville md",
      "montgomery county",
      "air conditioning",
      "hvac maintenance",
      "home cooling",
      "maven dmv",
    ],
    category: "HVAC",
    date: "2026-10-17T10:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/ac.jpeg",
    readTime: 7,
    body: [
      { type: "p", content: "**Quick answer:** If your AC stops cooling, set the thermostat to \"cool,\" check the air filter and breaker, and look for ice on the indoor unit. If it still won't run, or your home is getting unsafe, call a licensed HVAC contractor. Maven's emergency line is [240-255-4794](tel:+12402554794)." },
      { type: "p", content: "It's late evening, the house is warm, and the air from the vents feels barely cooler than the room. Take a breath. Most AC failures come from a short list of causes, and a few can be checked safely in five minutes." },
      { type: "p", content: "This guide comes from the licensed HVAC team at Maven Home Services (Maven DMV) in Rockville. It will help you tell a quick fix from a real emergency, and know what to do next." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "Is Your AC Problem an Emergency?", href: "#is-it-an-emergency" },
          { label: "Five Safe Checks Before You Call", href: "#safe-checks" },
          { label: "When to Stop and Call a Professional", href: "#call-a-pro" },
          { label: "What Happens on an Emergency Visit", href: "#emergency-visit" },
          { label: "Repair or Replace? How to Think About It", href: "#repair-or-replace" },
          { label: "How to Stay Cool While You Wait", href: "#stay-cool" },
          { label: "How to Choose an Emergency AC Company", href: "#choose-a-company" },
          { label: "Prevent the Next Breakdown", href: "#prevent-breakdowns" },
          { label: "Need Help Now?", href: "#need-help" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "is-it-an-emergency", content: "Is Your AC Problem an Emergency?" },
      { type: "p", content: "Not every breakdown needs a midnight visit. Treat it as urgent when:" },
      {
        type: "ul",
        content: [
          "Someone in the home is elderly, very young, pregnant, or medically vulnerable",
          "Indoor temperatures are climbing during a heat wave",
          "You smell burning or hear loud grinding from the system",
          "Water is leaking inside the house",
        ],
      },
      { type: "p", content: "If none of these apply, a same-day or next-morning appointment is usually fine. If one does, call right away and tell the dispatcher exactly why. It helps them prioritize." },
      { type: "h2", id: "safe-checks", content: "Five Safe Checks Before You Call" },
      { type: "p", content: "These take a few minutes and need no tools." },
      {
        type: "ul",
        content: [
          "**Thermostat.** Confirm it is set to \"cool,\" set below room temperature, and the batteries are fresh.",
          "**Air filter.** A clogged filter restricts airflow and can shut a system down. Replace it if it looks gray and matted.",
          "**Breaker.** Check the panel for a tripped breaker. Reset it once. If it trips again, stop. That points to an electrical fault, not a nuisance trip.",
          "**Ice on the unit.** Frost on the indoor coil or refrigerant line means airflow or refrigerant trouble. Turn the system off and let it thaw before anything else.",
          "**Outdoor unit.** Clear leaves, grass clippings, or debris from around the condenser so it can release heat.",
        ],
      },
      { type: "p", content: "If the AC still won't run after these checks, the cause is likely inside the system." },
      { type: "h2", id: "call-a-pro", content: "When to Stop and Call a Professional" },
      { type: "p", content: "Some problems are not safe to chase yourself:" },
      {
        type: "ul",
        content: [
          "A hissing sound or oily residue near refrigerant lines",
          "A breaker that trips repeatedly",
          "A burning or electrical smell",
          "A humming outdoor unit whose fan never starts",
          "Water pooling around the indoor unit",
        ],
      },
      { type: "p", content: "Refrigerant handling is regulated. Under the [EPA's Section 608 rules](https://www.epa.gov/section608), only certified technicians may work with it. Electrical faults inside an AC can also shock or start a fire. Calling a pro here is the safe choice, not an overreaction." },
      { type: "h2", id: "emergency-visit", content: "What Happens on an Emergency Visit" },
      { type: "p", content: "Knowing the process removes a lot of stress. A Maven visit follows four steps:" },
      {
        type: "ul",
        content: [
          "**Booking.** You call or schedule online, and we confirm your appointment and share your technician's name.",
          "**Diagnosis.** The technician inspects the system before any work begins.",
          "**Written estimate.** You get the price in writing and approve it before we start. No surprise fees.",
          "**Repair and walkthrough.** We fix the problem following local codes, then review the work with you.",
        ],
      },
      { type: "p", content: "Our technicians hold MHIC licensing, EPA 608 certification, and OSHA safety certification, and every technician is background-checked and insured. The estimate is written by the person who will actually do the work." },
      { type: "h2", id: "repair-or-replace", content: "Repair or Replace? How to Think About It" },
      { type: "p", content: "After a breakdown, many homeowners ask whether it's time for a new system. A technician should help you weigh a few factors, not push a sale:" },
      {
        type: "ul",
        content: [
          "**Age of the system.** Older equipment tends to fail more often.",
          "**Repair history.** Repeated repairs add up.",
          "**Efficiency.** Older units usually cost more to run than current models.",
          "**Type of fault.** A failed capacitor is a different conversation from a failed compressor.",
        ],
      },
      { type: "p", content: "Ask your technician to explain both options in writing. A trustworthy company will tell you when a repair is the smarter choice. Our [HVAC services page](/hvac) covers repair, heat pump installation, and replacement in more detail." },
      { type: "h2", id: "stay-cool", content: "How to Stay Cool While You Wait" },
      { type: "p", content: "Safety comes first on hot days:" },
      {
        type: "ul",
        content: [
          "Close blinds and curtains on sun-facing windows",
          "Use fans and drink water regularly",
          "Move to the coolest room, usually a lower floor",
          "Avoid cooking or running a dryer",
          "Check on neighbors who are older or live alone",
        ],
      },
      { type: "p", content: "The [CDC publishes clear guidance](https://www.cdc.gov/heat-health/) on heat-related illness and warning signs. If anyone shows confusion, fainting, or a very high body temperature, seek medical help immediately." },
      { type: "h2", id: "choose-a-company", content: "How to Choose an Emergency AC Company" },
      { type: "p", content: "When you're hot and stressed, it's easy to call the first number you see. Take one minute to check:" },
      {
        type: "ul",
        content: [
          "**License.** Look up any contractor on the [Maryland MHIC license search](https://www.dllr.state.md.us/cgi-bin/ElectronicLicensing/OP_Search/OP_search.cgi?calling_app=HIC::HIC_qselect).",
          "**Insurance.** Ask if they carry liability coverage.",
          "**Written estimate.** Never agree to work without one.",
          "**Pressure.** Be cautious if you're pushed toward a costly replacement before a diagnosis.",
          "**Local presence.** A real office and a named technician are good signs.",
        ],
      },
      { type: "h2", id: "prevent-breakdowns", content: "Prevent the Next Breakdown" },
      { type: "p", content: "Most emergency calls trace back to small problems that went unnoticed. A yearly tune-up, regular filter changes, and clear airflow go a long way. Our [spring HVAC maintenance checklist](/blog/spring-hvac-maintenance-checklist) walks through what to do before summer. If your vents seem dusty or airflow is weak, read whether [air duct cleaning is actually necessary](/blog/maryland-duct-cleaning). To spot trouble early, see our guide to the [warning signs your AC needs repair](/blog/signs-ac-needs-repair). For a closer look at what actually fails, read about the [common causes of a sudden AC breakdown](/blog/emergency-ac-repair-rockville)." },
      { type: "p", content: "Some homes also have related plumbing or electrical issues, such as a clogged drain line or an overloaded panel. Maven handles [plumbing](/plumbing), [electrical](/electrical), and [commercial](/commercial) work too, so one call can cover it." },
      { type: "h2", id: "need-help", content: "Need Help Now?" },
      { type: "p", content: "If your AC is down, call [240-255-4794](tel:+12402554794). Response times depend on technician availability and your location. If it can wait, you can [schedule a visit online](/contact). Veterans, active military, and first responders receive 10% off with valid ID." },
      {
        type: "lines",
        content: [
          "**Maven Home Services (Maven DMV)**",
          "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
          "Open 24/7 · Emergency line for urgent issues",
          "Serving Rockville and communities within about 30 miles across Maryland and Northern Virginia.",
        ],
      },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "Who do I call when my AC breaks in the middle of the night?",
            answer: "Call a licensed HVAC contractor that has an emergency line. Maven's is [240-255-4794](tel:+12402554794). Response times depend on technician availability and your location.",
          },
          {
            question: "Why is my AC running but not cooling?",
            answer: "The most common causes are a dirty filter, a frozen coil, low refrigerant, or a failing outdoor unit. Check the filter first. If that doesn't help, a technician needs to diagnose it.",
          },
          {
            question: "How much does emergency AC repair cost?",
            answer: "It depends on the fault and the parts involved. A reputable company gives you a written estimate before work starts, so you approve the cost first.",
          },
          {
            question: "Should I keep running my AC if it's frozen?",
            answer: "No. Turn the system off and let the ice melt. Running it frozen can damage the compressor.",
          },
          {
            question: "Is it safe to reset my AC breaker?",
            answer: "Once is fine. If it trips again, leave it off and call a professional. Repeated tripping signals an electrical problem.",
          },
          {
            question: "Does Maven offer financing for a new system?",
            answer: "Promotional financing may be available through third-party lenders for qualified customers. Terms and eligibility are set by the lender.",
          },
        ],
      },
      { type: "cta", text: "Schedule AC Repair", href: "/contact" },
    ],
  },
  {
    slug: "water-heater-maryland",
    title:
      "Water Heater Problems in Maryland: What Homeowners Need to Know Before Calling a Plumber",
    seoTitle: "Water Heater Repair & Installation in Maryland | Maven",
    excerpt:
      "Need water heater repair, replacement, or installation in Maryland? Maven Home Services offers licensed, same-day water heater service across MD.",
    keywords: [
      "water heater maryland",
      "water heater repair maryland",
      "water heater installation maryland",
      "water heater replacement maryland",
      "tankless water heater maryland",
    ],
    category: "Plumbing",
    date: "2026-09-11T10:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/plumbing-water-heaters.jpg",
    readTime: 6,
    body: [],
    customRoute: true,
  },
  {
    slug: "maryland-duct-cleaning",
    title: "Air Duct Cleaning in Maryland: Do You Actually Need It?",
    seoTitle: "Air Duct Cleaning in Maryland: Do You Need It? | Maven",
    excerpt:
      "Wondering if you need air duct cleaning in Maryland? Learn the real signs, EPA guidance, and what Maven's licensed HVAC team checks before recommending service.",
    keywords: [
      "maryland duct cleaning",
      "air duct cleaning maryland",
      "duct cleaning maryland",
      "hvac duct cleaning maryland",
    ],
    category: "HVAC",
    date: "2026-09-11T09:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/hvac/furnace.jpeg",
    readTime: 5,
    body: [],
    customRoute: true,
  },
  {
    slug: "hvac-services-in-maryland",
    title:
      "HVAC Services in Maryland: What's Actually Involved, From Repair to Replacement",
    seoTitle:
      "HVAC Services in Maryland: A Real Guide to Repairs, Installs & Maintenance",
    excerpt:
      "Licensed HVAC services in Maryland from a Rockville-based team — AC repair, heat pump installs, indoor air quality, and what to expect from permits to pricing across Montgomery County.",
    keywords: [
      "hvac services in maryland",
      "hvac companies in maryland",
      "hvac contractors in maryland",
      "hvac maryland",
      "heat pump installation maryland",
      "duct cleaning maryland",
      "ac repair maryland",
      "hvac in maryland",
    ],
    category: "HVAC",
    date: "2026-08-19T14:00:00.000Z",
    author: { name: "Maven Home Services" },
    featuredImage: "/images/hvac-residential-commercial.jpg",
    readTime: 8,
    body: [
      { type: "p", content: "Search \"HVAC services in Maryland\" and you'll get a wall of companies all saying pretty much the same thing — licensed, insured, 24/7. What most of those pages don't tell you is what actually happens once a technician is in your house: how repairs are diagnosed, why permits take as long as they do, or why the same AC unit performs differently in a Rockville rowhouse versus a Damascus farmhouse. That's what this guide covers." },
      { type: "p", content: "We're Maven Home Services, based in Rockville, and we work on HVAC systems across Montgomery County and Frederick County every week. This is written from that experience, not from a template." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "What \"HVAC Services\" Actually Covers", href: "#what-it-covers" },
          { label: "Repair vs. Replacement: How That Decision Gets Made", href: "#repair-vs-replacement" },
          { label: "Why Maryland Homes Have Specific HVAC Problems", href: "#maryland-specific-problems" },
          { label: "Indoor Air Quality: The Service Most People Skip", href: "#indoor-air-quality" },
          { label: "Heat Pumps in Maryland: Repair, Install & What to Expect", href: "#heat-pumps" },
          { label: "Permits, Timelines & What Slows a Job Down", href: "#permits-timelines" },
          { label: "What to Ask Before Hiring an HVAC Company in Maryland", href: "#what-to-ask" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "what-it-covers", content: "What \"HVAC Services\" Actually Covers" },
      { type: "p", content: "\"HVAC services\" is a broad phrase, and companies use it loosely, so here's what it typically breaks down into for a Maryland home:" },
      {
        type: "ul",
        content: [
          "**Repair** — diagnosing and fixing an existing AC, furnace, or heat pump: refrigerant leaks, failed capacitors, blower motor issues, thermostat problems.",
          "**Installation** — replacing an old system or installing new equipment, including heat pumps and central air.",
          "**Maintenance** — seasonal tune-ups that catch small problems before they become breakdowns.",
          "**Indoor air quality** — humidity control, filtration, and duct sealing, which matters more in Maryland than in drier climates.",
          "**Duct work** — cleaning, sealing, or redesigning ductwork, especially in homes built before the 1990s.",
        ],
      },
      { type: "p", content: "A company that only pushes replacements, or only ever recommends the most expensive option, isn't giving you real HVAC service — they're upselling. A legitimate technician should be able to explain why a repair makes sense in one case and replacement in another." },
      { type: "h2", id: "repair-vs-replacement", content: "Repair vs. Replacement: How That Decision Gets Made" },
      { type: "p", content: "There's a rough industry guideline — if the repair cost is more than 50% of a new system's cost, or the unit is past 12-15 years old, replacement usually makes more financial sense. But that's a starting point, not a rule. A 9-year-old system with a failed compressor can cost nearly as much to repair as a new unit would, while a 14-year-old system with a simple capacitor issue might have a few good years left in it." },
      { type: "p", content: "What actually matters is the specific failure, the system's repair history, and how much you're already paying in energy costs from an inefficient unit. A technician who gives you real numbers for both options — repair cost versus new install cost versus expected energy savings — is doing their job properly. One who just says \"it's old, replace it\" isn't." },
      { type: "h2", id: "maryland-specific-problems", content: "Why Maryland Homes Have Specific HVAC Problems" },
      { type: "p", content: "Two things make Maryland HVAC different from a lot of the country:" },
      { type: "p", content: "**The humidity.** Summers here are muggy enough that a system can hit the thermostat's target temperature and still leave the house feeling damp. That's usually a sign the system isn't running long enough to pull moisture out of the air — often because it's oversized for the space, which sounds counterintuitive but is a common mistake in older installs." },
      { type: "p", content: "**The building stock.** A lot of homes across Montgomery County — especially the suburban boom areas built through the 1970s and 80s in Gaithersburg, Germantown, and Montgomery Village — have original attic ductwork. Decades of attic heat dry out the seals and tape on that ductwork, and it starts leaking conditioned air into the attic instead of the house. That single issue is behind a huge share of the \"my AC runs constantly but the house never gets cool\" calls we get." },
      { type: "p", content: "If a technician diagnoses your system without ever mentioning duct condition, ask about it directly — it's often the actual problem, not the equipment." },
      { type: "h2", id: "indoor-air-quality", content: "Indoor Air Quality: The Service Most People Skip" },
      { type: "p", content: "Whole-home dehumidifiers, filtration upgrades, and duct sealing don't get requested nearly as often as repairs or replacements, but for a lot of Maryland homes they solve the actual complaint — a house that feels stuffy, musty, or \"never quite comfortable\" even when the AC is running fine mechanically." },
      { type: "p", content: "This is worth raising with your technician directly, because it's rarely offered upfront. If your house has recurring musty smells, visible condensation on ducts or windows in summer, or family members with allergy symptoms that seem to correlate with being home, it's worth a conversation before you assume the HVAC unit itself needs replacing." },
      { type: "h2", id: "heat-pumps", content: "Heat Pumps in Maryland: Repair, Install & What to Expect" },
      { type: "p", content: "Heat pump service has become one of the most requested HVAC services in Maryland over the past couple of years, partly due to utility rebate programs and partly because newer heat pumps genuinely handle Mid-Atlantic winters better than older models did. For homes without existing gas lines — more common toward the outer edges of the county and into Frederick — a heat pump is often the more practical option than adding gas infrastructure from scratch." },
      { type: "p", content: "If you already have one and it's underperforming in winter, that's very often a sizing or setup issue rather than a fundamental flaw in heat pump technology — worth a second opinion before assuming you need to switch back to a furnace." },
      { type: "h2", id: "permits-timelines", content: "Permits, Timelines & What Slows a Job Down" },
      { type: "p", content: "This is the part almost nobody explains upfront. Standard residential HVAC permits in Maryland typically take a few weeks to process, though some jurisdictions offer faster expedited tracks for straightforward replacements. A simple repair — thermostat, capacitor, filter, minor refrigerant work — is usually same-day. A full system replacement is typically a one-to-two-day job on-site, longer if ductwork modifications are involved." },
      { type: "p", content: "If a contractor quotes same-day installation for a full system replacement with no mention of permitting, ask directly how they're handling it. Skipping permits is a real problem down the line if you ever sell the home." },
      { type: "h2", id: "what-to-ask", content: "What to Ask Before Hiring an HVAC Company in Maryland" },
      {
        type: "ul",
        content: [
          "Are you MHIC licensed, and can I see the license number?",
          "Is the technician doing the diagnosis the same one doing the repair, or is it a dispatch model?",
          "Will I get a written estimate before work starts, not just a verbal number?",
          "Do you carry EPA Section 608 certification for refrigerant handling?",
          "What's your actual response time for emergency service in my area — not the general marketing claim?",
        ],
      },
      { type: "p", content: "At Maven Home Services, our technicians carry MHIC licensing, EPA 608 refrigerant certification, and OSHA safety training, and every estimate is written and provided before any work begins. We're based in Rockville and serve homeowners and businesses across Olney, Potomac, Bethesda, Damascus, Frederick, Rockville, Germantown, Gaithersburg, and Montgomery Village." },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "What HVAC services are most commonly needed in Maryland?",
            answer: "AC repair and seasonal tune-ups are the most requested services, followed by heat pump installation and duct sealing — especially in homes built before the 1990s where original ductwork has degraded.",
          },
          {
            question: "How long does an HVAC repair typically take?",
            answer: "Simple repairs like a thermostat swap, filter change, or minor refrigerant top-off are usually same-day. Larger issues involving a compressor or full system replacement can take one to two days, longer if ductwork needs work.",
          },
          {
            question: "Is it normal for a Maryland home to need duct sealing?",
            answer: "Yes, particularly for homes built in the 1970s through 90s with original attic ductwork. Decades of attic heat dry out seals and tape, causing air loss that makes the system work harder without actually cooling the house better.",
          },
          {
            question: "Do I need a permit for HVAC replacement in Maryland?",
            answer: "Most full system replacements require a permit, and standard processing takes a few weeks, though some jurisdictions offer expedited options for straightforward jobs. A licensed contractor should handle this as part of the installation, not leave it for you to sort out.",
          },
          {
            question: "How do I know if I need a repair or a full replacement?",
            answer: "It depends on the system's age, the cost of the specific repair, and its repair history — not just how old the unit is. A technician should walk you through real numbers for both options rather than pushing one answer by default.",
          },
          {
            question: "Does Maven Home Services offer emergency HVAC service in Montgomery County?",
            answer: "Yes, emergency service is available for urgent heating and cooling issues. Response times depend on technician availability and your specific location — call 240-604-1370 to check current availability.",
          },
        ],
      },
      { type: "h2", content: "Looking for Reliable HVAC Services in Maryland?" },
      { type: "p", content: "Maven Home Services is a licensed, MHIC-certified team based in Rockville, serving Olney, Potomac, Bethesda, Damascus, Frederick, Rockville, Germantown, Gaithersburg, and Montgomery Village. Every job includes a written estimate before work begins." },
      {
        type: "lines",
        content: [
          "📍 [9200 Corporate Blvd #470, Rockville, MD 20850](https://www.google.com/search?q=mavendmv+rockville+address)",
          "📞 [+1 240-604-1370](tel:+12406041370)",
          "🌐 [Get Directions](https://share.google/Tg9RmUimJqWIt1iEf)",
        ],
      },
      {
        type: "lines",
        content: [
          "**Related services:**",
          "[HVAC Services](/hvac) · [Plumbing Services](/plumbing) · [Electrical Services](/electrical) · [Commercial Services](/commercial) · [Contact Us](/contact)",
        ],
      },
      {
        type: "lines",
        content: [
          "**Outside resources for reference:**",
          "[ENERGY STAR — HVAC Efficiency Guidelines](https://www.energystar.gov/products/heating_cooling)",
          "[Maryland Home Improvement Commission — License Lookup](https://www.dllr.state.md.us/cgi-bin/ElectronicLicensing/OP_Search/OP_search.cgi?calling_app=HIC::HIC_qselect)",
        ],
      },
    ],
  },
  {
    slug: "maryland-hvac-guide-homeowners",
    title:
      "The Honest Maryland HVAC Guide: What Rockville, Bethesda & Frederick County Homeowners Actually Need to Know",
    seoTitle:
      "Maryland HVAC Guide: What Rockville, Bethesda & Frederick Homeowners Need to Know | Maven",
    excerpt:
      "A real-world Maryland HVAC guide from a Rockville-based, MHIC-licensed contractor — AC repair signs, heat pump costs, duct cleaning, and how to pick a trustworthy HVAC company in Montgomery County.",
    category: "HVAC",
    date: "2026-08-19T10:00:00.000Z",
    author: { name: "David Chen", role: "HVAC Service Manager" },
    featuredImage: "/images/hvac/hvac-hero.png",
    readTime: 9,
    body: [
      { type: "p", content: "If you've owned a home in Maryland for more than one summer, you already know the drill. July hits, the humidity turns your living room into a greenhouse, and somewhere around 3 p.m. your air conditioner starts making a noise it definitely wasn't making last week. Then January rolls around and the same system that couldn't keep up in August suddenly can't keep the house above 65 degrees." },
      { type: "p", content: "Maryland HVAC isn't like HVAC anywhere else. Between the Chesapeake humidity, the swing from 95-degree summers to teens in winter, and the mix of older homes in places like Bethesda and Potomac alongside newer builds in Germantown and Montgomery Village, your system gets worked harder here than in most of the country. This guide walks through what actually matters — no filler, no scare tactics — for homeowners across Rockville, Olney, Damascus, Frederick, Gaithersburg, and the rest of Montgomery County." },
      {
        type: "toc",
        title: "Table of Contents",
        items: [
          { label: "Why Maryland Weather Is Rough on HVAC Systems", href: "#why-maryland-weather" },
          { label: "Signs Your AC or Heating System Needs Attention", href: "#warning-signs" },
          { label: "Heat Pumps and Geothermal: What's Actually Worth It in Maryland", href: "#heat-pumps-geothermal" },
          { label: "Duct Cleaning: When It Helps and When It's a Waste of Money", href: "#duct-cleaning" },
          { label: "It's Not Just HVAC — Plumbing and Electrical Tie Together", href: "#plumbing-electrical" },
          { label: "What Homeowners in Olney, Potomac, Bethesda & Frederick Should Know", href: "#local-notes" },
          { label: "How to Actually Vet an HVAC Contractor in Maryland", href: "#vetting-a-contractor" },
          { label: "Frequently Asked Questions", href: "#faqs" },
        ],
      },
      { type: "h2", id: "why-maryland-weather", content: "Why Maryland Weather Is Rough on HVAC Systems" },
      { type: "p", content: "Most HVAC systems in the U.S. are designed around one dominant season — heavy cooling in the South, heavy heating in the North. Maryland asks a system to do both, hard, every single year. That back-and-forth is why a unit that's perfectly sized on paper can still feel like it's struggling in a Rockville rowhouse or a Damascus farmhouse." },
      { type: "p", content: "Humidity is the other piece people underestimate. A system can technically hit the thermostat setting and still leave a house feeling clammy because it's not pulling enough moisture out of the air. That's a sizing and airflow issue more than a temperature issue, and it's one of the most common calls we get from homes in Bethesda and Potomac with older ductwork." },
      { type: "h2", id: "warning-signs", content: "Signs Your AC or Heating System Needs Attention" },
      { type: "p", content: "You don't need to wait for a full breakdown to know something's off. A few things worth paying attention to:" },
      {
        type: "ul",
        content: [
          "**Uneven temperatures room to room.** Upstairs bedrooms in Germantown and Gaithersburg colonials are notorious for this — it usually points to duct or airflow problems, not just an aging unit.",
          "**Rising energy bills with no change in habits.** If your July bill jumped and you didn't change the thermostat, the system is likely working harder than it should.",
          "**Short cycling.** The unit turns on, runs for a few minutes, shuts off, and repeats. This wears out components fast and is often fixable before it becomes expensive.",
          "**Weird smells on startup.** A musty smell usually points to moisture in the ductwork or a dirty coil; a burning smell means stop using it and call someone.",
          "**The system is 12–15+ years old.** Most AC and furnace units in this region start losing efficiency noticeably around this age, especially if maintenance has been inconsistent.",
        ],
      },
      { type: "p", content: "None of these automatically mean \"replace everything.\" A lot of the time it's a repair, a cleaning, or a duct adjustment. But ignoring them for a full season usually turns a $300 fix into a $3,000 one." },
      { type: "h2", id: "heat-pumps-geothermal", content: "Heat Pumps and Geothermal: What's Actually Worth It in Maryland" },
      { type: "p", content: "Heat pump installation has picked up a lot in Maryland over the last few years, partly because of utility rebates and partly because modern heat pumps handle our winters better than the older models people remember. For most homes in Montgomery County, a heat pump is a legitimate option even for winter heating, not just summer cooling — you just want a contractor who sizes it for our climate zone instead of copying a spec sheet from a warmer state." },
      { type: "p", content: "Geothermal is the bigger commitment. It costs more upfront because of the ground loop installation, but it's remarkably efficient long-term and a lot of Maryland homeowners with larger lots — Damascus and outer Frederick County properties especially — are good candidates simply because they have the yard space for it. It's not the right call for every home, and any contractor who tells you it is without looking at your property first isn't being straight with you." },
      { type: "h2", id: "duct-cleaning", content: "Duct Cleaning: When It Helps and When It's a Waste of Money" },
      { type: "p", content: "Duct cleaning gets marketed hard, and honestly, it's oversold half the time. It genuinely helps if you've had recent renovation dust, pets, a musty smell, or visible buildup at your vents. It does very little if your real issue is an aging system or leaky ductwork — cleaning dirty ducts doesn't fix a duct that's dumping conditioned air into your attic." },
      { type: "p", content: "If a company shows up and pushes duct cleaning without first inspecting your actual airflow and equipment, that's worth a second opinion." },
      { type: "h2", id: "plumbing-electrical", content: "It's Not Just HVAC — Plumbing and Electrical Tie Together" },
      { type: "p", content: "Homeowners tend to think of HVAC, plumbing, and electrical as separate problems, but in practice they overlap constantly. A water heater nearing the end of its life often shares attic or basement space with your furnace, and both tend to fail around the same age. Panel upgrades come up more often than people expect too, especially in older Bethesda and Potomac homes where the electrical panel wasn't built for central AC, an EV charger, and modern appliances all running at once." },
      { type: "p", content: "If you're already having HVAC work done, it's worth asking your technician to take a quick look at your water heater and panel while they're there. It's a lot easier to plan for a replacement than to get surprised by one." },
      { type: "h2", id: "local-notes", content: "What Homeowners in Olney, Potomac, Bethesda & Frederick Should Know" },
      { type: "p", content: "A few things worth knowing depending on where you are in the region:" },
      {
        type: "ul",
        content: [
          "**Olney and Damascus** — more standalone homes with larger yards, which makes both duct sealing and geothermal more relevant here than in denser areas.",
          "**Potomac and Bethesda** — older housing stock means original ductwork and panels that often weren't designed for today's electrical or cooling loads.",
          "**Rockville and Gaithersburg** — a mix of older and newer construction, so it really comes down to the specific home's age and system history.",
          "**Germantown and Montgomery Village** — a lot of homes built in the same era with similar HVAC layouts, so if a neighbor just had a system replaced, it's not a bad idea to ask what they learned.",
          "**Frederick** — colder overnight temps than closer-in suburbs, which matters when sizing a heat pump for winter performance.",
        ],
      },
      { type: "p", content: "None of this replaces an actual in-home evaluation, but it's useful context before a technician shows up." },
      { type: "h2", id: "vetting-a-contractor", content: "How to Actually Vet an HVAC Contractor in Maryland" },
      { type: "p", content: "This is the part most guides skip, and it matters more than any specific repair tip." },
      { type: "p", content: "Maryland requires home improvement contractors to hold an **MHIC license** (Maryland Home Improvement Commission), and anyone doing refrigerant work should carry **EPA Section 608 certification**. Ask for both before anyone touches your system. A legitimate contractor won't hesitate to share license numbers — you can look them up yourself through the state's licensing search." },
      { type: "p", content: "A few other things worth checking:" },
      {
        type: "ul",
        content: [
          "Do they give you a written estimate before starting work, or just a verbal number?",
          "Are technicians background-checked and insured, not just subcontracted out to whoever's available?",
          "Do they explain what's wrong in plain language, or just tell you it needs replacing?",
          "Are they actually local to the DMV, with real reviews from your area — not a call center dispatching whoever's closest?",
        ],
      },
      { type: "p", content: "At Maven Home Services, every technician carries MHIC licensing, EPA 608 certification, and OSHA safety training, and every job gets a written estimate before work starts — no surprises on the invoice. We're based right in Rockville and serve Olney, Potomac, Bethesda, Damascus, Frederick, Germantown, Gaithersburg, Montgomery Village, and the surrounding communities within about a 30-mile radius." },
      { type: "h2", id: "faqs", content: "Frequently Asked Questions" },
      {
        type: "faq",
        items: [
          {
            question: "How often should I have my HVAC system serviced in Maryland?",
            answer: "Twice a year is the general rule — once before summer for the AC, once before winter for the heating side. Maryland's swing between hot, humid summers and cold winters is hard on equipment, so catching small issues each season prevents most emergency breakdowns.",
          },
          {
            question: "Is it worth repairing an old AC unit or should I just replace it?",
            answer: "If the unit is under 10 years old and the repair is under a few hundred dollars, repair usually makes sense. Past 12–15 years, or if you're facing a major component failure like a compressor, replacement is often the better long-term value — a technician can walk you through the actual numbers for your system.",
          },
          {
            question: "Do heat pumps really work well in Maryland winters?",
            answer: "Yes, modern heat pumps are built to handle Mid-Atlantic winters effectively, including the occasional stretch of freezing temperatures. Proper sizing for your specific home and climate zone is what makes the difference, not the technology itself.",
          },
          {
            question: "How much does duct cleaning cost, and is it necessary every year?",
            answer: "It's not an annual necessity for most homes. It's worth doing after major renovations, if you notice dust buildup at vents, or roughly every 3–5 years as general maintenance — not on a fixed yearly schedule.",
          },
          {
            question: "What's included in a written HVAC estimate?",
            answer: "A proper estimate should list the diagnosis, the specific parts or equipment needed, labor cost, and the total before any work begins — with no vague \"we'll see once we're inside\" pricing.",
          },
          {
            question: "Does Maven Home Services offer emergency HVAC repair in Rockville and Montgomery County?",
            answer: "Yes. Emergency service is available for urgent heating and cooling issues, though response times depend on technician availability and your specific location. Call 240-604-1370 to check availability.",
          },
        ],
      },
      { type: "h2", content: "Need HVAC, Plumbing, or Electrical Work Done Right?" },
      { type: "p", content: "Maven Home Services is a licensed, MHIC-certified team based in Rockville, serving homeowners across Olney, Potomac, Bethesda, Damascus, Frederick, Rockville, Germantown, Gaithersburg, and Montgomery Village. Every job comes with an upfront written estimate — no guessing, no pressure." },
      {
        type: "p",
        content:
          "📍 [9200 Corporate Blvd #470, Rockville, MD 20850](https://www.google.com/search?q=mavendmv+rockville+address) 📞 [+1 240-604-1370](tel:+12406041370) 🌐 [Get Directions](https://share.google/Tg9RmUimJqWIt1iEf)",
      },
      {
        type: "p",
        content:
          "**Related services:** [HVAC Services](/hvac) | [Plumbing Services](/plumbing) | [Electrical Services](/electrical) | [Commercial Services](/commercial) | [Contact Us](/contact)",
      },
      {
        type: "p",
        content:
          "**Helpful outside resources:** [ENERGY STAR — HVAC Efficiency Guidelines](https://www.energystar.gov/products/heating_cooling) | [Maryland Home Improvement Commission — License Lookup](https://www.dllr.state.md.us/cgi-bin/ElectronicLicensing/OP_Search/OP_search.cgi?calling_app=HIC::HIC_qselect)",
      },
    ],
  },
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
