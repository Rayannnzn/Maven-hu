import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville outlet-replacement landing page, built verbatim from the
// approved SEO content package (Maven-DMV-Outlet-Replacement-Page.docx). Copy,
// headings, and link targets are the client's — edit only against an updated
// package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/electrical/outlet-replacement-rockville/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`.
export const rockvilleOutletReplacementData: ServicePageData = {
  slug: "electrical/outlet-replacement-rockville",
  title: "Outlet Replacement in Rockville, MD",
  seoTitle: "Outlet Replacement in Rockville, MD | Maven DMV",
  metaDescription:
    "Licensed electricians for outlet replacement, GFCI and USB outlet installation, and safety checks in Rockville, MD. Call (240) 255 4794.",
  heroImage: "/images/electrical-repair-installation.jpg",
  heroTitle: "Outlet Replacement in Rockville, MD",
  heroDescription:
    "An outlet that is cracked, loose, warm, or dead is more than an inconvenience. Worn outlets can arc, overheat, and damage plugs and devices. Maven DMV replaces and upgrades outlets for homes and businesses in Rockville, MD and across Montgomery County, Maryland. Our licensed electricians find out why the outlet failed, replace it correctly, and test the circuit before we leave.",
  overviewTitle: "Quick Answer",
  overview: [
    "Replace an outlet when it is cracked, loose, discolored, warm, sparking, or no longer holds a plug firmly. A licensed electrician should do the work, because the wiring behind the outlet can be damaged or overloaded, and replacing only the outlet may not fix the real problem.",
  ],
  offeredServicesTitle: "Common Add Ons During an Outlet Visit",
  offeredServicesSubtitle:
    "Bundling small jobs into one visit is often more convenient and keeps your electrical system consistent.",
  offeredServices: [
    { icon: "add_circle", name: "Adding outlets", desc: "Adding outlets in kitchens, garages, or home offices." },
    { icon: "toggle_on", name: "Switches and dimmers", desc: "Replacing worn switches and dimmers." },
    { icon: "deck", name: "Outdoor outlets", desc: "Installing outdoor outlets and weather covers." },
    { icon: "label", name: "Panel labeling", desc: "Labeling the panel so each circuit is clear." },
    { icon: "search", name: "Nearby outlet checks", desc: "Inspecting nearby outlets for the same wear." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Outlet Replacement Process",
  steps: [
    { num: "01", icon: "manage_search", title: "Inspect", desc: "We check the outlet, the wiring behind it, and other outlets on the same circuit." },
    { num: "02", icon: "speed", title: "Test", desc: "We measure voltage, grounding, and load to find the real cause." },
    { num: "03", icon: "record_voice_over", title: "Explain", desc: "You hear what we found and what we recommend, in plain language." },
    { num: "04", icon: "task_alt", title: "Approve", desc: "We start work only after you agree to the plan." },
    { num: "05", icon: "outlet", title: "Replace safely", desc: "We shut off the circuit, install the new outlet, and secure the connections." },
    { num: "06", icon: "description", title: "Retest and document", desc: "We confirm that the outlet works properly and record what we did." },
  ],
  detailSections: [
    {
      id: "signs-you-need-outlet-replacement",
      heading: "Signs You Need Outlet Replacement",
      table: {
        columns: ["What You Notice", "Likely Cause", "Next Step"],
        rows: [
          ["Plugs fall out or fit loosely", "Worn contacts inside the outlet", "Replace the outlet"],
          ["Cracked, chipped, or burned faceplate", "Physical damage or overheating", "Replace right away and check the circuit"],
          ["Outlet feels warm or hot", "Loose wiring or overload", "Stop using it and call for service"],
          ["Sparks or a popping sound when plugging in", "Arcing at worn contacts", "Stop using it and call promptly"],
          ["Brown or black marks around the slots", "Heat damage", "Inspect wiring and replace"],
          ["Outlet works only sometimes", "Loose connection or failing device", "Test the circuit and replace"],
          ["No power at all", "Tripped GFCI, tripped breaker, or failed outlet", "Reset, test, and repair as needed"],
        ],
      },
      closing:
        "If you smell burning or see smoke or flames, leave the area and call 911. If an outlet is hot or sparking, stop using it and, if you can reach the breaker safely, turn off that circuit until we arrive.",
      ctaText: "Schedule Outlet Replacement",
    },
    {
      id: "types-of-outlets-we-install",
      heading: "Types of Outlets We Install",
      table: {
        columns: ["Outlet Type", "Common Locations", "Why It Helps"],
        rows: [
          ["Standard 15 amp outlet", "Bedrooms, living areas, offices", "Basic power for lamps and electronics"],
          ["20 amp outlet", "Kitchens, garages, workshops", "Supports heavier loads on suitable circuits"],
          ["GFCI outlet", "Kitchens, bathrooms, garages, basements, and outdoors", "Shuts off power quickly if it senses a ground fault"],
          ["Tamper resistant outlet", "Homes with children and common living areas", "Shutters block objects from the slots"],
          ["Weather resistant outlet", "Porches, patios, and exterior walls", "Built to handle moisture and temperature changes"],
          ["USB outlet", "Kitchens, bedrooms, and home offices", "Charges phones and tablets without adapters"],
        ],
      },
      closing:
        "Which type you need depends on the room, the circuit, and local code. We recommend only what fits your space.",
      ctaText: "Ask Which Outlet Fits",
    },
    {
      id: "why-gfci-outlets-matter",
      heading: "Why GFCI Outlets Matter",
      description:
        "A ground fault circuit interrupter, or GFCI, watches the flow of electricity and cuts power in a fraction of a second if it senses leakage, such as current traveling through water or a person. GFCI protection is commonly required in wet areas like kitchens, bathrooms, garages, basements, and outdoors. If your older home has regular outlets in these areas, adding GFCI protection is one of the most useful and affordable safety upgrades you can make. Test your GFCI outlets monthly using the built in test and reset buttons.",
      ctaText: "Add GFCI Protection",
    },
    {
      id: "replacing-two-prong-outlets",
      heading: "Replacing Two Prong Outlets",
      description:
        "Many older homes still have two prong outlets, which have no ground connection. Simply swapping in a three prong outlet without a ground wire can give a false sense of safety. Depending on your wiring, the safe options may include running a ground wire, using a GFCI outlet labeled for use without an equipment ground, or rewiring the circuit. We inspect the wiring first and explain which option fits. If your home has widespread older wiring, see our page on [electrical wiring and rewiring](/electrical/wiring-rewiring-rockville).",
      ctaText: "Upgrade Two Prong Outlets",
    },
    {
      id: "why-professional-replacement-matters",
      heading: "Why Professional Replacement Matters",
      description:
        "Replacing an outlet can look simple, but the risks are real. Old wiring may be brittle, aluminum, or unmarked. A wrong connection can leave the outlet looking normal while creating a shock or fire hazard. Back stabbed connections, loose terminals, and wrong wire sizes are common causes of overheating. A licensed electrician checks the whole circuit, uses the right device for the location, and tests the result. For independent safety guidance, visit the [Electrical Safety Foundation International](https://www.esfi.org/) or the [National Fire Protection Association](https://www.nfpa.org/).",
      ctaText: "Schedule a Licensed Electrician",
    },
    {
      id: "outlet-replacement-for-businesses",
      heading: "Outlet Replacement for Businesses",
      description:
        "Restaurants, offices, and retail stores rely on outlets that handle constant use. We replace worn outlets, add dedicated outlets for equipment, and install GFCI protection in kitchens and wet areas. Because our team also services HVAC and commercial equipment, we can tell when a power problem comes from the outlet and when it comes from the equipment. You can explore related work on our [electrical services page](/electrical).",
      ctaText: "Schedule Commercial Service",
    },
    {
      id: "how-to-prevent-outlet-problems",
      heading: "How to Prevent Outlet Problems",
      description:
        "A few habits reduce wear and risk. Avoid plugging several high power devices, such as space heaters, into one outlet or power strip. Do not run cords under rugs, and replace damaged cords right away. Use outlet covers or tamper resistant outlets if small children are in the home. Schedule an [electrical inspection](/electrical/inspections-rockville) if your home is more than 30 years old or if outlets have never been checked. Catching worn outlets early costs far less than repairing heat damage later.",
      ctaText: "Schedule an Inspection",
    },
    {
      id: "why-choose-maven-dmv",
      heading: "Why Choose Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Licensed technicians for residential and commercial electrical work",
        "Plain language advice and no unnecessary upsells",
        "Tested and documented work on every job",
        "24/7 availability for urgent issues",
        "Local office at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "Read customer feedback on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML), or visit our [home page](/). Veterans, active duty military, and first responders receive 10% off all HVAC, plumbing, and electrical services with valid ID at the time of service.",
      ctaText: "Schedule Service",
    },
    {
      id: "contact-maven-dmv",
      heading: "Contact Maven DMV",
      benefitsHeading: "",
      benefits: [
        "Address: 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [(240) 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Hours: Open 24 hours a day, 7 days a week, with 24/7 emergency service",
        "Service area: Within 30 miles of Rockville, across Maryland and Northern Virginia",
        "Schedule: Visit our [contact page](/contact)",
      ],
      ctaText: "Schedule Service",
    },
  ],
  faqs: [
    { q: "How do I know if an outlet needs to be replaced?", a: "Loose plugs, cracks, heat, discoloration, sparks, or intermittent power are the main signs." },
    { q: "Can I replace an outlet myself?", a: "It is safer to hire a licensed electrician, because the wiring behind the outlet may be damaged or unsafe." },
    { q: "Why does my GFCI outlet keep tripping?", a: "Moisture, a faulty appliance, a worn GFCI, or a wiring fault can cause it. We find the cause and fix it." },
    { q: "Why is only one outlet dead?", a: "It may be a tripped GFCI elsewhere on the circuit, a loose connection, or a failed outlet. Testing shows which." },
    { q: "Can you add more outlets to a room?", a: "Yes, in many cases. We check the circuit load first so the new outlets are safe." },
    { q: "Do you offer emergency outlet repair?", a: "Yes. Our emergency line is available 24/7 for urgent electrical issues." },
  ],
  ctaTitle: "Schedule Outlet Replacement in Rockville",
  ctaDescription:
    "Call (240) 255 4794 or visit our contact page. We find out why the outlet failed, replace it correctly, and test the circuit before we leave.",
};
