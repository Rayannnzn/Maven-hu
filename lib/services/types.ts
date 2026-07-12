export type ServiceDetailSection = {
  id: string;
  heading: string;
  description: string;
  benefits?: string[];
  commonProblems?: string[];
  group?: string;
  ctaText?: string;
};

export type ServicePageData = {
  slug: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  overview: string[];
  offeredServices: { icon: string; name: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  whyChoose: { title: string; desc: string }[];
  steps: { num: string; icon: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  detailSections?: ServiceDetailSection[];
};
