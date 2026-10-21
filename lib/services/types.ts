export type ServiceDetailSection = {
  id: string;
  heading: string;
  /** Intro paragraph above the lists. Omit when the section opens with its list. */
  description?: string;
  benefits?: string[];
  /** Heading above `benefits`. Falls back to "Benefits" when omitted; pass "" to
   *  render the list with no heading. Distinct from `ServicePageData.benefitsTitle`,
   *  which labels the whole-page benefits section. */
  benefitsHeading?: string;
  commonProblems?: string[];
  /** Heading above `commonProblems`. Falls back to "Common Problems We Solve". */
  problemsHeading?: string;
  /** Paragraph rendered after the lists, for copy that follows a bullet list. */
  closing?: string;
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
  /** Offered-services heading. Falls back to "What We Offer". */
  offeredServicesTitle?: string;
  offeredServicesSubtitle?: string;
  benefitsTitle?: string;
  /** `benefits`, `whyChoose` and `steps` sections are skipped when the array is empty. */
  benefits: { title: string; desc: string }[];
  whyChoose: { title: string; desc: string }[];
  /** Process heading. Falls back to "How It Works". */
  stepsTitle?: string;
  steps: { num: string; icon: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaDescription?: string;
  detailSections?: ServiceDetailSection[];
};
