/**
 * Production origin. Used as Next's `metadataBase` so relative Open Graph and
 * Twitter image paths resolve to absolute URLs — without it, Next falls back to
 * http://localhost:3000 and social previews break. Also the base for any future
 * sitemap.ts / robots.ts.
 */
export const siteUrl = "https://mavendmv.com";

export const company = {
  name: "Maven Home Services",
  shortName: "Maven",
  tagline: "Home Services",
  logo: "/images/logo.png",
  phone: "202-999-2781",
  phoneHref: "tel:2029992781",
  email: "service@mavenhomeservices.com",
  founded: 2008,
  serviceRegion: "Maryland & Virginia",
};

export const address = {
  suite: "Suite 470",
  street: "9200 Corporate Blvd",
  city: "Rockville",
  state: "MD",
  zip: "20850",
  full: "Suite 470, 9200 Corporate Blvd, Rockville, MD 20850",
  mapsQuery: "9200+Corporate+Blvd+Suite+470+Rockville+MD+20850",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=9200+Corporate+Blvd+Suite+470+Rockville+MD+20850&z=10&output=embed",
};

export const addressLines = [
  address.suite,
  address.street,
  `${address.city}, ${address.state} ${address.zip}`,
];

export const serviceArea = {
  headquarters: "Maryland",
  alsoServes: "Virginia",
  radiusMiles: 30,
  description:
    "Based in Rockville, Maryland — serving homeowners and businesses within a 30-mile radius across Maryland and Northern Virginia.",
  mapImage: "/images/md-va-service-map.png",
  // Google Maps embed centred on Maryland — Google draws the state boundary
  // highlight for a state-name query, which is the region we want to show.
  mapEmbedUrl: "https://maps.google.com/maps?q=Maryland,+USA&z=7&output=embed",
};

export const serviceCities = [
  "Rockville",
  "Bethesda",
  "Silver Spring",
  "Gaithersburg",
  "Germantown",
  "Potomac",
  "Chevy Chase",
  "Laurel",
  "Frederick",
  "Arlington",
  "Alexandria",
  "Fairfax",
  "Falls Church",
  "McLean",
  "Vienna",
  "Reston",
  "Herndon",
  "Manassas",
  "Sterling",
] as const;

export const hours = {
  weekday: "Mon – Fri: 7:00 AM – 7:00 PM",
  weekend: "Sat – Sun: 8:00 AM – 5:00 PM",
  emergency: "Emergency line available for urgent issues",
};

export type ServiceNavLink = {
  href: string;
  label: string;
};

export type ServiceNavGroup = {
  label: string;
  links: ServiceNavLink[];
};

export type ServiceCategory = {
  href: string;
  label: string;
  subcategories: ServiceNavLink[];
  groups?: ServiceNavGroup[];
  anchorLinks?: ServiceNavLink[];
};

export function serviceAnchor(parentHref: string, id: string): string {
  return `${parentHref}#${id}`;
}

export type CategoryNavItem = {
  href: string;
  label: string;
  group?: string;
  section?: "featured";
};

export function getCategoryNavItems(category: ServiceCategory): CategoryNavItem[] {
  const items: CategoryNavItem[] = [];

  category.groups?.forEach((group) => {
    group.links.forEach((link) => {
      items.push({ href: link.href, label: link.label, group: group.label });
    });
  });

  category.anchorLinks?.forEach((link) => {
    items.push({ href: link.href, label: link.label });
  });

  category.subcategories.forEach((link) => {
    items.push({ href: link.href, label: link.label, section: "featured" });
  });

  return items;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hvac", label: "HVAC" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/electrical", label: "Electrical Services" },
  { href: "/commercial", label: "Commercial" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceCategories: ServiceCategory[] = [
  {
    href: "/hvac",
    label: "HVAC",
    groups: [
      {
        label: "Air Conditioning",
        links: [
          {
            href: serviceAnchor("/hvac", "ac-repair"),
            label: "AC Repair/Maintenance/Installation",
          },
          {
            href: serviceAnchor("/hvac", "central-air-conditioning"),
            label: "Central Air Conditioning",
          },
          { href: serviceAnchor("/hvac", "ac-thermostats"), label: "Thermostats" },
          { href: serviceAnchor("/hvac", "rooftop-units"), label: "Rooftop Units" },
        ],
      },
      {
        label: "Heating",
        links: [
          {
            href: serviceAnchor("/hvac", "furnace-installation"),
            label: "Furnace Installation/Maintenance/Repair",
          },
          { href: serviceAnchor("/hvac", "heat-pumps"), label: "Heat Pumps" },
          { href: serviceAnchor("/hvac", "heating-thermostats"), label: "Thermostats" },
        ],
      },
    ],
    subcategories: [
      { href: "/hvac/residential-commercial", label: "Residential & Commercial" },
      { href: "/hvac/air-conditioners", label: "Air Conditioners" },
      { href: "/hvac/refrigerators", label: "Refrigerators" },
      { href: "/hvac/ice-makers", label: "Ice Makers" },
      { href: "/hvac/furnace-heating", label: "Furnace / Heating" },
      { href: "/hvac/walk-in-coolers-freezers", label: "Walk-in Coolers & Freezers" },
    ],
  },
  {
    href: "/plumbing",
    label: "Plumbing",
    anchorLinks: [
      { href: serviceAnchor("/plumbing", "emergency-plumbing"), label: "Emergency Plumbing" },
      { href: serviceAnchor("/plumbing", "water-heaters"), label: "Water Heaters" },
      { href: serviceAnchor("/plumbing", "drain-cleaning"), label: "Drain Cleaning" },
      { href: serviceAnchor("/plumbing", "sewer-lines"), label: "Sewer Lines" },
      { href: serviceAnchor("/plumbing", "re-piping"), label: "Re-piping" },
      {
        href: serviceAnchor("/plumbing", "line-repair-installation"),
        label: "Line Repair & Installation",
      },
      { href: serviceAnchor("/plumbing", "plumbing-repair"), label: "Plumbing Repair" },
      {
        href: serviceAnchor("/plumbing", "sump-pump-repair-installation"),
        label: "Sump Pump Repair & Installation",
      },
    ],
    subcategories: [
      { href: "/plumbing/service-repair-installation", label: "Service / Repair / Installation" },
      { href: "/plumbing/water-heaters", label: "Water Heaters" },
      { href: "/plumbing/sinks-basins", label: "Sinks & Basins" },
      { href: "/plumbing/residential-commercial", label: "Residential & Commercial" },
    ],
  },
  {
    href: "/electrical",
    label: "Electrical Services",
    anchorLinks: [
      {
        href: serviceAnchor("/electrical", "electrical-installation"),
        label: "Electrical Installation/Repair",
      },
      {
        href: serviceAnchor("/electrical", "ev-charger-installation"),
        label: "EV Charger Installation",
      },
      {
        href: serviceAnchor("/electrical", "indoor-outdoor-lighting-installation"),
        label: "Indoor & Outdoor Lighting Installation",
      },
      {
        href: serviceAnchor("/electrical", "ceiling-fan-installation"),
        label: "Ceiling Fan Installation",
      },
      {
        href: serviceAnchor("/electrical", "electrical-panel-circuit-breaker"),
        label: "Electrical Panel & Circuit Breaker Services",
      },
      {
        href: serviceAnchor("/electrical", "electrical-inspections"),
        label: "Electrical Inspections",
      },
      { href: serviceAnchor("/electrical", "outlet-replacement"), label: "Outlet Replacement" },
      {
        href: serviceAnchor("/electrical", "electrical-wiring-rewiring"),
        label: "Electrical Wiring & Rewiring",
      },
      { href: serviceAnchor("/electrical", "security-lighting"), label: "Security Lighting" },
    ],
    subcategories: [
      { href: "/electrical/repair-installation", label: "Repair & Installation" },
      { href: "/electrical/commercial-residential", label: "Commercial & Residential" },
    ],
  },
  {
    href: "/commercial",
    label: "Commercial",
    anchorLinks: [
      {
        href: serviceAnchor("/commercial", "rooftop-package-units"),
        label: "Rooftop Package Units",
      },
      {
        href: serviceAnchor("/commercial", "walk-in-freezers"),
        label: "Walk-in Coolers/Freezers",
      },
      { href: serviceAnchor("/commercial", "commercial-maintenance"), label: "Maintenance" },
      { href: serviceAnchor("/commercial", "new-installations"), label: "New Installations" },
    ],
    subcategories: [],
  },
];

export const footerServiceLinks = [
  { href: "/hvac", label: "HVAC" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/electrical", label: "Electrical" },
  { href: "/commercial", label: "Commercial" },
  { href: "/hvac", label: "Air Conditioning" },
  { href: "/contact", label: "Emergency Service", highlight: true },
] as const;

export const footerCompanyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
] as const;

export const containerClass = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10";
export const sectionClass = "py-12 md:py-16 lg:py-24";

export const certifications = [
  {
    name: "MHIC Licensed",
    image: "/images/certifications/mhic.png",
    alt: "MHIC Licensed contractor — Maryland Home Improvement Commission",
    desc: "Legally authorized to perform home improvement work in Maryland.",
  },
  {
    name: "General Contractors",
    image: "/images/certifications/general-contractor.png",
    alt: "Maryland General Contractors license",
    desc: "Licensed to manage larger multi-trade home improvement projects.",
  },
  {
    name: "EPA 608 Certified",
    image: "/images/certifications/epa-608.png",
    alt: "EPA Section 608 Universal certification",
    desc: "Certified to safely handle refrigerants in AC and heat pump systems.",
  },
  {
    name: "OSHA Certified",
    image: "/images/certifications/osha.png",
    alt: "OSHA safety certification",
    desc: "Trained in on-site safety standards to protect your home and family.",
  },
  {
    name: "Haag Certified Inspector",
    image: "/images/certifications/haag.png",
    alt: "Haag certified residential roof inspector",
    desc: "Trained to industry standard for residential inspection accuracy.",
  },
] as const;

export const veteransDiscount = {
  title: "10% Off All Services",
  audience: "Veterans, Active Military & First Responders",
  description:
    "Maven Home Services proudly offers 10% off all HVAC, plumbing, and electrical services for veterans, active-duty military, and first responders. Valid ID required at time of service.",
  ctaLabel: "Schedule & Save",
  ctaHref: "/contact",
} as const;
