export const company = {
  name: "Maven Home Services",
  shortName: "Maven",
  tagline: "Home Services",
  logo: "/images/logo.png",
  phone: "877-MAVEN-11",
  phoneHref: "tel:8776283611",
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

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/hvac", label: "HVAC" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/electrical", label: "Electrical Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceCategories = [
  {
    href: "/hvac",
    label: "HVAC",
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
    subcategories: [
      { href: "/electrical/repair-installation", label: "Repair & Installation" },
      { href: "/electrical/commercial-residential", label: "Commercial & Residential" },
    ],
  },
] as const;

export const footerServiceLinks = [
  { href: "/hvac", label: "HVAC" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/electrical", label: "Electrical" },
  { href: "/hvac", label: "Air Conditioning" },
  { href: "/hvac", label: "Cooling Systems" },
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
