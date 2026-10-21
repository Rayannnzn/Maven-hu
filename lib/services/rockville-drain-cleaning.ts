import type { ServicePageData } from "@/lib/services/types";

// Standalone Rockville drain-cleaning landing page, built verbatim from the
// approved SEO content package (primary keyword "drain cleaning Rockville MD").
// Copy, headings, and link targets are the client's — edit only against an
// updated package.
//
// Deliberately NOT an entry in lib/services/subcategories.ts: this page is served
// by its own static route at app/plumbing/drain-cleaning-rockville-md/, and adding
// the slug to subcategoryData would make generateStaticParams emit a path that
// already exists as a static page, which aborts `next build`.
export const rockvilleDrainCleaningData: ServicePageData = {
  slug: "plumbing/drain-cleaning-rockville-md",
  // Short on purpose: this drives the breadcrumb leaf, not the <title> tag.
  title: "Drain Cleaning in Rockville, MD",
  seoTitle: "Drain Cleaning Services in Rockville MD | Maven",
  metaDescription:
    "Slow or clogged drains in Rockville MD? Maven Home Services offers drain cleaning, sewer line clearing, and camera inspections. Call 240 255 4794 today.",
  heroImage: "/images/plumbing-sinks-basins.jpg",
  heroTitle: "Drain Cleaning Services in Rockville, MD",
  heroDescription:
    "A slow drain is more than an annoyance. It is often the first warning that buildup is growing inside your pipes. Maven Home Services provides professional drain cleaning for homes and small businesses across Rockville, MD. We clear the clog, find out why it formed, and explain how to keep your drains flowing. You get a clear price before the work begins and a plain English explanation of what we found. Call 240 255 4794 or request drain cleaning online. Emergency line available for urgent issues.",
  overviewTitle: "Signs You Need Drain Cleaning",
  overview: [
    "Watch for water that drains slowly, gurgling sounds from pipes, bad odors from sinks or floor drains, water backing up in a tub when you run the washer, or more than one drain clogging at once. A single slow sink often points to a local clog. Several slow drains usually point to the main line. Treating the problem early can prevent overflow, water damage, and a costly emergency call.",
  ],
  offeredServicesTitle: "Drain Cleaning Services We Offer in Rockville",
  offeredServices: [
    { icon: "kitchen", name: "Kitchen sink drain cleaning", desc: "We remove grease, food waste, and soap buildup that slow your sink." },
    { icon: "shower", name: "Bathroom sink, shower, and tub drains", desc: "We clear hair, soap scum, and mineral deposits." },
    { icon: "wc", name: "Toilet clog removal", desc: "We clear stubborn blockages without damaging the fixture." },
    { icon: "plumbing", name: "Main sewer line cleaning", desc: "We clear deep blockages, including roots and heavy debris, that cause multiple drains to back up." },
    { icon: "water", name: "Hydro jetting", desc: "High pressure water cleans the inside of the pipe wall for longer lasting results." },
    { icon: "videocam", name: "Camera inspection", desc: "A video camera shows the cause of the problem, so you see the pipe condition before choosing a repair." },
    { icon: "water_damage", name: "Floor drain and basement drain cleaning", desc: "We keep low drains clear so water does not collect in your lower level." },
  ],
  benefits: [],
  whyChoose: [],
  stepsTitle: "Our Drain Cleaning Process",
  steps: [
    { num: "01", icon: "phone_in_talk", title: "Call or book online", desc: "We ask about the location of the clog and any earlier problems." },
    { num: "02", icon: "manage_search", title: "Inspection", desc: "Our plumber checks the fixture, the drain line, and the cleanout to locate the blockage." },
    { num: "03", icon: "plumbing", title: "Clear and clean", desc: "We choose the safest and most effective method for your pipe type and clog." },
    { num: "04", icon: "fact_check", title: "Test and explain", desc: "We run water to confirm the line is flowing and explain what caused the clog." },
    { num: "05", icon: "tips_and_updates", title: "Prevention advice", desc: "We share simple habits and a maintenance schedule so you are not calling again soon." },
  ],
  detailSections: [
    {
      id: "why-drain-clogs-keep-coming-back",
      heading: "Why Drain Clogs Keep Coming Back",
      description:
        "Many homeowners clear a clog with a plunger or a store bought chemical, only to see it return in a few weeks. That often means buildup remains on the pipe walls, a pipe has shifted, or roots have entered the line. A plain snake can punch a hole through a clog without removing the buildup around it. Our team finds the cause first, then chooses the right method, whether that is a drain snake, hydro jetting, or a camera inspection followed by a repair plan.",
      ctaText: "Schedule Drain Cleaning",
    },
    {
      id: "why-rockville-homeowners-choose-maven",
      heading: "Why Rockville Homeowners Choose Maven Home Services",
      benefitsHeading: "",
      benefits: [
        "Licensed and insured plumbing professionals",
        "Upfront pricing with no surprise fees",
        "Technicians trained on drains, sewer lines, and complete plumbing systems",
        "Convenient hours: Monday to Friday 7:00 AM to 7:00 PM, Saturday and Sunday 8:00 AM to 5:00 PM",
        "Local team based at 9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
      ],
      closing:
        "A backup that is flooding your home is urgent. See our [emergency plumbing services](/plumbing/emergency-plumbing-rockville-md). For other needs, explore all of our [plumbing services](/plumbing), including [main water line repair](/plumbing/water-main-repair) and [backflow services](/plumbing/backflow).",
      ctaText: "Request Drain Cleaning",
    },
    {
      id: "habits-that-keep-drains-clear",
      heading: "Simple Habits That Keep Drains Clear",
      benefitsHeading: "",
      benefits: [
        "Wipe grease and oil into the trash, not down the kitchen sink.",
        "Use drain strainers in showers, tubs, and kitchen sinks.",
        "Flush only toilet paper. Wipes labeled flushable can still clog pipes.",
        "Run hot water for a short time after washing dishes.",
        "Schedule an inspection if you notice slow drains or a recurring odor.",
      ],
      closing:
        "For local water and sewer service information, visit [WSSC Water](https://www.wsscwater.com/).",
      ctaText: "Schedule an Inspection",
    },
    {
      id: "areas-we-serve",
      heading: "Areas We Serve Near Rockville",
      description:
        "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood. You can also review city information on the [City of Rockville website](https://www.rockvillemd.gov/).",
      ctaText: "Book Drain Cleaning",
    },
    {
      id: "find-us-on-google",
      heading: "Find Us on Google",
      description:
        "See our location, photos, hours, and customer reviews on our [Google Business Profile](https://share.google/KJudab7Ho272ukUML). Read what Rockville neighbors say about us, then call [240 255 4794](tel:+12402554794) to book drain cleaning.",
      benefitsHeading: "Maven Home Services",
      benefits: [
        "9200 Corporate Blvd, Suite 470, Rockville, MD 20850",
        "Phone: [240 255 4794](tel:+12402554794)",
        "Email: [service@mavenhomeservices.com](mailto:service@mavenhomeservices.com)",
        "Google Business Profile: [https://share.google/KJudab7Ho272ukUML](https://share.google/KJudab7Ho272ukUML)",
      ],
      ctaText: "Schedule Drain Cleaning",
    },
  ],
  faqs: [
    { q: "How much does drain cleaning cost in Rockville, MD?", a: "Cost depends on the location of the clog, the pipe size, and the method needed. We inspect first and give you a clear price before any work begins." },
    { q: "What causes a clogged drain?", a: "Common causes include hair, grease, soap buildup, food waste, wipes, mineral deposits, and tree roots in outdoor sewer lines. Older pipes also collect debris more easily." },
    { q: "Are chemical drain cleaners safe to use?", a: "They can damage pipes, harm your skin, and release harsh fumes. They often fail on tough clogs. A plumber can clear the blockage without the risk." },
    { q: "What is hydro jetting?", a: "Hydro jetting uses high pressure water to scrub the inside of a pipe. It can clear grease, scale, and debris that a basic drain snake may leave behind." },
    { q: "How do I know if my main sewer line is clogged?", a: "Several drains backing up at once, gurgling toilets, or sewage smell in the yard or basement are common signs. Call a plumber right away if this happens." },
    { q: "How often should drains be cleaned?", a: "Kitchen drains and older lines benefit from yearly service. Homes with trees near sewer lines or a history of clogs may need an inspection more often." },
    { q: "Do you offer emergency drain service?", a: "Yes. For sewage backups and overflowing drains, call 240 255 4794 and use our emergency line for urgent issues." },
    { q: "What areas near Rockville do you serve?", a: "We serve Rockville and nearby Montgomery County communities, including Potomac, Bethesda, Gaithersburg, North Bethesda, and Derwood." },
  ],
  ctaTitle: "Ready to Clear Your Drains? Call Maven Home Services",
  ctaDescription:
    "Call 240 255 4794 or schedule drain cleaning online. Clear drains, no more worry.",
};
