import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville central-AC landing page, built from the approved SEO
// content package (main keyword "ac install rockville").
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/hvac/central-air-conditioning-rockville-md/, and
// adding the slug to subcategoryData would make generateStaticParams emit a path
// that already exists as a static page, which aborts `next build`.
//
// It is also deliberately absent from lib/site.ts, so nothing on the site links to
// it — the page is reachable by URL only.
export const rockvilleCentralAcData: ServicePageData = {
  slug: "hvac/central-air-conditioning-rockville-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Central Air Conditioning in Rockville, MD",
  seoTitle: "AC Repair Rockville MD & AC Install | Maven Home Services",
  metaDescription:
    "AC repair Rockville MD and AC install by licensed, EPA 608-certified techs. Central air repair, replacement, and emergency service. Call 240-255-4794.",
  heroImage: "/images/hvac/air-conditioner.jpeg",
  heroTitle: "Central Air Conditioning Repair & Installation in Rockville, MD",
  heroDescription:
    "Maven Home Services provides central air conditioning repair, installation, and maintenance for homeowners in Rockville, Maryland. Our licensed, EPA 608-certified technicians diagnose cooling problems, replace aging systems, and keep your home comfortable through humid Maryland summers.",
  overviewTitle: "Central AC Repair in Rockville, MD",
  overview: [
    "When your air conditioner stops cooling, you need a clear diagnosis, not guesswork. Our technicians inspect the whole system, including the thermostat, refrigerant level, capacitor, compressor, blower, and ductwork.",
    "Then they explain what they found and your options before work begins. We provide air conditioning repair in Rockville for central AC systems and heat pumps.",
  ],
  offeredServicesSubtitle:
    "Central air conditioning service for Rockville homes — repair, replacement, and seasonal maintenance.",
  offeredServices: [
    { icon: "ac_unit", name: "Central AC Repair", desc: "Whole-system diagnosis covering the thermostat, refrigerant level, capacitor, compressor, blower, and ductwork — for central AC systems and heat pumps." },
    { icon: "hvac", name: "AC Installation & Replacement", desc: "New central air systems handled from the first assessment through the final system test, sized to your home rather than to the old equipment." },
    { icon: "build", name: "Maintenance & Tune-Ups", desc: "Cleaning coils, checking refrigerant, testing electrical components, clearing the condensate drain, and changing the filter — ideally each spring." },
    { icon: "emergency", name: "Emergency AC Service", desc: "Emergency service for urgent cooling failures. Call and tell us what is happening so we can prioritize your visit." },
    { icon: "heat_pump", name: "Heat Pump Cooling", desc: "Repair and maintenance for heat pumps running in cooling mode, alongside conventional central air systems." },
    { icon: "straighten", name: "Sizing & Load Assessment", desc: "Right-sizing a replacement so temperatures stay steady, humidity is actually removed, and the equipment sees less wear." },
  ],
  benefitsTitle: "Why Rockville Homeowners Trust Maven",
  benefits: [
    { title: "Background-Checked and Insured", desc: "You are letting someone into your home, so credentials matter. Every Maven technician is background-checked and fully insured before stepping through your door." },
    { title: "Based in Rockville", desc: "Our office is at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850, and we serve homeowners and businesses within a 30-mile radius across Maryland and Northern Virginia." },
    { title: "Your Options Explained First", desc: "Technicians explain what they found and your options before work begins, including an honest comparison of repair cost against replacement." },
    { title: "One Team for the Whole Home", desc: "Maven is also a general contractor and holds Haag inspection credentials, so the same team can handle plumbing or electrical work." },
  ],
  whyChoose: [
    { title: "MHIC Licensed", desc: "We are licensed by the Maryland Home Improvement Commission to perform home improvement work in Maryland." },
    { title: "EPA 608 Certified", desc: "Our technicians are certified to handle refrigerants safely in AC and heat pump systems." },
    { title: "OSHA Safety Certified", desc: "Our team is trained in on-site safety standards to protect your home and family." },
  ],
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Call or Book Online", desc: "Tell us your address and what your system is doing, and we will set up a visit." },
    { num: "02", icon: "manage_search", title: "Full System Diagnosis", desc: "We inspect the thermostat, refrigerant level, capacitor, compressor, blower, and ductwork." },
    { num: "03", icon: "fact_check", title: "Options Explained", desc: "We explain what we found and compare repair against replacement before any work begins." },
    { num: "04", icon: "task_alt", title: "Repair, Install, and Test", desc: "We complete the work and test the finished system with you before we leave." },
  ],
  detailSections: [
    {
      id: "signs-ac-needs-repair",
      group: "Central AC Repair",
      heading: "Signs Your Central Air Needs Repair",
      description:
        "If you notice any of the signs below, turn the system off and call a technician. Running a struggling AC can turn a small repair into a major failure.",
      problemsHeading: "Signs to Watch For",
      commonProblems: [
        "Warm air or weak airflow from the vents",
        "The system turns on and off in short cycles",
        "Grinding, squealing, or banging noises",
        "Ice on the refrigerant lines or indoor coil",
        "Water leaking near the indoor unit",
        "Higher energy bills with no change in how you use your home",
        "Musty odors or a sticky, humid feeling indoors",
      ],
      ctaText: "Schedule AC Repair",
    },
    {
      id: "emergency-ac-repair",
      group: "Central AC Repair",
      heading: "Emergency AC Repair in Rockville",
      description:
        "A cooling failure during a heat wave is more than uncomfortable, especially for young children, older adults, and anyone with a health condition. Maven offers emergency service for urgent issues. Call [240-255-4794](tel:+12402554794) and tell us what is happening so we can prioritize your visit.",
      ctaText: "Request Emergency Service",
    },
    {
      id: "ac-installation-rockville",
      group: "AC Installation & Replacement",
      heading: "AC Installation and Replacement in Rockville",
      description:
        "If your system is old, repairs keep adding up, or some rooms never get comfortable, a new central air system may be the smarter investment. Our team handles AC installation in Rockville, MD from the first assessment to the final system test. A technician can compare repair costs against replacement and give you an honest recommendation — replacement is worth discussing when:",
      benefitsHeading: "Should You Repair or Replace Your Air Conditioner?",
      benefits: [
        "Your system is more than 10 to 15 years old",
        "You pay for repairs every summer",
        "Your energy bills keep climbing",
        "Some rooms stay hot while others get too cold",
      ],
      ctaText: "Get a Replacement Assessment",
    },
    {
      id: "proper-ac-installation",
      group: "AC Installation & Replacement",
      heading: "What Proper AC Installation Includes",
      description:
        "A good installation is more than swapping equipment. We size the system to your home, inspect the existing ductwork, charge the refrigerant correctly, set up the thermostat, and test the finished system with you.",
      ctaText: "Plan Your Installation",
    },
    {
      id: "correct-ac-sizing",
      group: "AC Installation & Replacement",
      heading: "Why Correct Sizing Matters",
      description:
        "An oversized unit cools the air quickly but shuts off before it removes enough humidity, so your home feels clammy. An undersized unit runs nonstop and still falls behind on hot days. The right size keeps temperatures steady, improves comfort, and reduces wear on the equipment.",
      ctaText: "Ask About Sizing",
    },
    {
      id: "ac-maintenance-rockville",
      group: "Maintenance & Tune-Ups",
      heading: "Central AC Maintenance and Tune-Ups",
      description:
        "Routine HVAC maintenance in Rockville helps catch small problems before the first heat wave. A tune-up typically includes cleaning coils, checking refrigerant, testing electrical components, clearing the condensate drain, and changing the filter. Many manufacturers recommend yearly service, ideally in spring. Maven also handles heating and other systems, so [explore our full HVAC services](/hvac).",
      ctaText: "Book a Tune-Up",
    },
    {
      id: "why-rockville-trusts-maven",
      group: "Why Maven",
      heading: "Why Rockville Homeowners Trust Maven",
      description:
        "You are letting someone into your home, so credentials matter. Every Maven technician is background-checked and fully insured before stepping through your door. Maven is also a general contractor and holds Haag inspection credentials. Because we are one team, you can also call us for plumbing or electrical work. Business owners can learn about [our commercial services](/commercial), or [read more about Maven](/about).",
      ctaText: "Talk to Our Team",
    },
    {
      id: "rockville-service-area-hours",
      group: "Why Maven",
      heading: "Service Area and Hours",
      description:
        "We are based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850. We serve homeowners and businesses within a 30-mile radius across Maryland and Northern Virginia.",
      benefitsHeading: "Hours and Contact",
      benefits: [
        "Monday to Friday: 7:00 AM to 7:00 PM",
        "Saturday and Sunday: 8:00 AM to 5:00 PM",
        "Emergency service: available for urgent issues",
        "Phone: [240-255-4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
      ],
      ctaText: "Check My Area",
    },
  ],
  faqs: [
    { q: "How much does AC repair cost in Rockville?", a: "The cost depends on the problem, the parts, and your system. A capacitor or thermostat issue costs far less than a compressor or coil replacement. Maven diagnoses the problem first and explains your options before work begins." },
    { q: "How long does a central air conditioner last?", a: "Many central AC systems last around 10 to 15 years. Regular maintenance, proper installation, and correct sizing all help a system reach the longer end of that range." },
    { q: "Is it better to repair or replace my AC?", a: "If the system is older, needs frequent repairs, or no longer keeps your home comfortable, replacement often makes more sense. For a newer system with one failed part, repair is usually the better value." },
    { q: "Does Maven offer emergency AC repair in Rockville?", a: "Yes. Maven offers emergency service for urgent issues. Call 240-255-4794 so we can understand the problem and schedule your visit as quickly as possible." },
    { q: "What areas does Maven serve?", a: "We are based in Rockville, MD and serve homes and businesses within a 30-mile radius across Maryland and Northern Virginia." },
    { q: "Why is my air conditioner blowing warm air?", a: "Common causes include a dirty air filter, a thermostat set incorrectly, low refrigerant, a failed capacitor, or a frozen indoor coil. Check the filter and thermostat first. If the air is still warm, turn the system off and call a technician." },
    { q: "Why is my AC freezing up?", a: "Ice usually forms because of restricted airflow or low refrigerant. A clogged filter, blocked vents, or a refrigerant leak are the usual culprits. Turn the AC off and let the ice melt, then schedule a repair so the root cause is fixed." },
    { q: "How often should I service my central air conditioner?", a: "Once a year is a good rule, ideally in spring before the cooling season starts. Regular HVAC maintenance helps catch worn parts early, improves efficiency, and lowers the chance of a breakdown on a hot day." },
    { q: "What is central air conditioning?", a: "Central air conditioning cools your whole home from one outdoor unit and an indoor coil. It sends cool air through ductwork to vents in each room. It differs from window units or ductless systems, which cool a single room or zone." },
    { q: "How do I choose an HVAC company in Rockville?", a: "Look for a local company with Maryland licensing (MHIC), EPA 608-certified technicians, and proper insurance. Ask whether technicians are background-checked and whether you get a clear explanation of options before work starts. Maven checks all of these boxes." },
    { q: "What are Maven's hours for AC service?", a: "We are open Monday to Friday from 7:00 AM to 7:00 PM, and Saturday and Sunday from 8:00 AM to 5:00 PM. Emergency service is available for urgent issues. Call 240-255-4794 to reach us." },
    { q: "How do I schedule AC repair or installation?", a: "Call 240-255-4794 or use our online contact form. Tell us your address and what your system is doing, and we will set up a visit." },
  ],
  ctaTitle: "Get Central AC Service in Rockville Today",
  ctaDescription:
    "Whether you need a quick repair, a new system, or a seasonal tune-up, Maven is ready to help. Schedule service online or call 240-255-4794.",
};
