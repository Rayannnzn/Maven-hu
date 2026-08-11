import type { ServicePageData } from "./types";
import { plumbingDetailSections } from "./plumbing-sections";
import { company } from "@/lib/site";

export const plumbingData: ServicePageData = {
  slug: "plumbing",
  title: "Plumbing Services",
  seoTitle:
    "Plumbing Services in Maryland | Water Heaters, Drains, Repair | Maven",
  metaDescription: `Licensed Maryland plumbers — water heater installation & repair, drain cleaning, sewer lines, repiping. Serving Silver Spring, Frederick & more. Call ${company.phone}.`,
  heroImage: "/images/plumbing-hero.jpg",
  heroTitle: "Expert Plumbing Services in Maryland",
  heroDescription:
    "From dripping faucets to burst pipes, Maven's experienced plumbers solve problems fast with clean workmanship and transparent pricing. Serving homeowners throughout Maryland.",
  overviewTitle: "About Our Plumbing Services in Maryland",
  overview: [
    "Plumbing problems never wait for a convenient time. A slow leak behind a wall can cause thousands in water damage, and a clogged main line can shut down your entire household in hours.",
    "Maven Home Services delivers reliable residential plumbing across Maryland — from routine fixture replacements to complex repiping projects and emergency burst-pipe response. Every plumber on our team is insured and background-checked.",
    "We treat your home with respect: shoe covers on entry, work areas protected, and jobsites left cleaner than we found them. That's the Maven standard on every call.",
  ],
  offeredServicesSubtitle:
    "Comprehensive plumbing solutions from experienced Maryland professionals.",
  offeredServices: [
    {
      icon: "water_drop",
      name: "Leak Detection & Repair",
      desc: "Pinpoint hidden leaks behind walls, under slabs, and in supply lines using advanced detection equipment. Fast repair with minimal disruption.",
    },
    {
      icon: "plumbing",
      name: "Drain Cleaning",
      desc: "Professional snaking, hydro-jetting, and camera inspection for clogged sinks, tubs, toilets, and main sewer lines.",
    },
    {
      icon: "water_heater",
      name: "Water Heater Services",
      desc: "Repair, maintenance, and installation of tank and tankless water heaters across Maryland. Same-day replacement available for most models.",
    },
    {
      icon: "pipe",
      name: "Pipe Repair & Repiping",
      desc: "Fix corroded, burst, or frozen pipes. Full copper and PEX repiping for older homes with failing galvanized or polybutylene lines.",
    },
    {
      icon: "kitchen",
      name: "Fixture Installation",
      desc: "Faucets, sinks, garbage disposals, toilets, and showerheads installed correctly with proper sealing and code compliance.",
    },
    {
      icon: "wash",
      name: "Sewer Line Services",
      desc: "Sewer line camera inspection, root removal, trenchless repair, and full line replacement for persistent backups and tree root intrusion.",
    },
    {
      icon: "opacity",
      name: "Sump Pump Services",
      desc: "Sump pump installation, repair, and battery backup systems to protect basements and crawl spaces from flooding.",
    },
    {
      icon: "emergency",
      name: "Emergency Plumbing",
      desc: "Emergency dispatch for burst pipes, major leaks, sewer backups, and no-water situations. Response times depend on technician availability and your location.",
    },
  ],
  benefitsTitle: "Why Maryland Homeowners Choose Maven",
  benefits: [
    {
      title: "Experienced Plumbers",
      desc: "Every Maven plumber stays current on code changes, new materials, and best practices for reliable, lasting repairs.",
    },
    {
      title: "Advanced Diagnostic Tools",
      desc: "Video pipe inspection, electronic leak detection, and hydro-jetting equipment allow accurate diagnosis without unnecessary digging or demolition.",
    },
    {
      title: "Clean, Respectful Service",
      desc: "Floor protection, shoe covers, and thorough cleanup are standard on every job. We leave your home as tidy as we found it.",
    },
    {
      title: "Flat-Rate Pricing Options",
      desc: "Many common repairs are quoted at a flat rate so you know the exact cost before we pick up a wrench.",
    },
  ],
  whyChoose: [
    {
      title: "No Upsell Pressure",
      desc: "We explain your options clearly — repair versus replace — and let you decide. Our reputation is built on trust, not inflated invoices.",
    },
    {
      title: "Hard Water Experience",
      desc: "Maryland's moderately hard water accelerates pipe corrosion and fixture scale buildup. We recommend solutions tailored to local water conditions.",
    },
    {
      title: "Whole-Home Plumbing Knowledge",
      desc: "From the meter to the farthest fixture, we understand how your entire plumbing system works together — not just the problem in front of us.",
    },
  ],
  steps: [
    {
      num: "01",
      icon: "phone_in_talk",
      title: "Call or Book Online",
      desc: "Describe your issue to our dispatcher or submit a request online. We prioritize emergencies and confirm your appointment fast.",
    },
    {
      num: "02",
      icon: "search",
      title: "On-Site Assessment",
      desc: "Your plumber inspects the problem, explains the cause, and provides a written estimate before starting any work.",
    },
    {
      num: "03",
      icon: "handyman",
      title: "Professional Repair",
      desc: "We complete the repair using quality parts and proper techniques, following Maryland plumbing code on every connection and installation.",
    },
    {
      num: "04",
      icon: "verified",
      title: "Test & Verify",
      desc: "All work is pressure-tested and verified before we leave. We stand behind our work and will make every reasonable effort to correct any issue.",
    },
  ],
  faqs: [
    {
      q: "What qualifies as a plumbing emergency?",
      a: `A plumbing emergency is any issue that risks property damage or safety — burst pipes, major leaks, sewer backups, complete water loss, or a gas odor near a water heater. Call ${company.phone} immediately for these situations.`,
    },
    {
      q: "How can I prevent frozen pipes in winter?",
      a: "Keep your thermostat above 55°F, insulate exposed pipes in unheated areas like basements and crawl spaces, and let faucets drip slightly during extreme cold to keep water moving.",
    },
    {
      q: "Tank or tankless water heater — which is better?",
      a: "Tankless water heaters cost more upfront but offer endless hot water and lower operating costs, while tank water heaters cost less to install. The right choice depends on household size, hot water demand, and budget — Maven can help you decide during a free estimate.",
    },
    {
      q: "Why do my drains keep clogging?",
      a: "Recurring clogs usually point to grease buildup, tree root intrusion, or a pipe belly further down the line rather than a simple surface blockage. A camera inspection identifies the exact cause so the right fix is applied.",
    },
    {
      q: "Do you pull permits for plumbing work?",
      a: "Yes, Maven handles permit coordination for repiping, water heater replacement, and other work that requires inspection under Maryland plumbing code.",
    },
    {
      q: "How do I know if I have a hidden water leak?",
      a: "Watch for unexplained increases in your water bill, damp spots on walls or ceilings, a musty smell, or your water meter still running when all fixtures are off. Maven uses electronic leak detection to locate hidden leaks without unnecessary demolition.",
    },
  ],
  ctaTitle: "Don't Let Plumbing Problems Get Worse",
  ctaDescription:
    "Schedule your service today or call our team to request an estimate. Same-day appointments available across Maryland, subject to technician availability.",
  detailSections: plumbingDetailSections,
};
