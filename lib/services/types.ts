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
  /** Full <title> tag, used verbatim. Falls back to `title` when omitted. */
  seoTitle?: string;
  metaDescription: string;
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  /** Overview heading. Falls back to `About Our {title}` when omitted. */
  overviewTitle?: string;
  overview: string[];
  offeredServices: { icon: string; name: string; desc: string }[];
  offeredServicesSubtitle?: string;
  benefitsTitle?: string;
  benefits: { title: string; desc: string }[];
  whyChoose: { title: string; desc: string }[];
  steps: { num: string; icon: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaDescription?: string;
  detailSections?: ServiceDetailSection[];
};
