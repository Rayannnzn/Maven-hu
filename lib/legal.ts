/**
 * Copy for the Privacy Policy and Terms of Service pages, rendered by
 * `components/legal/LegalDocument.tsx`. Like the rest of `lib/`, this is the
 * place to edit wording — the page files are thin wrappers.
 *
 * The privacy policy describes what the site actually does today: the only
 * personal data it collects is what a visitor types into `ScheduleForm`, which
 * `/api/leads` emails via Resend. There are no analytics, ad pixels, or
 * first-party cookies. If any of that changes (e.g. Google Analytics, a chat
 * widget, a CRM), update the relevant sections and bump `effectiveDate`.
 */
import { address, company, siteUrl } from "@/lib/site";

export type LegalBlock = string | { list: string[] };

export type LegalSection = {
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  description: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

const site = siteUrl.replace(/^https?:\/\//, "");

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses, and protects the information you share with us through ${site} and when you request service.`,
  effectiveDate: "October 17, 2026",
  intro: [
    `${company.name} ("Maven," "we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit ${site} (the "Site") or request service from us, how we use it, who we share it with, and the choices you have.`,
    "By using the Site or submitting a service request, you acknowledge the practices described in this policy. If you do not agree with them, please do not submit information through the Site — you can always reach us by phone instead.",
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        "Information you provide to us. When you submit a service request or contact form, we collect the details you enter, which may include:",
        {
          list: [
            "Your first and last name",
            "Email address and phone number",
            "The type of service you are interested in",
            "Any message you include, such as a description of the problem or the address where service is needed",
          ],
        },
        "We also collect information you give us directly by phone, email, text message, or in person — for example, your service address, scheduling preferences, details about your equipment, and billing information needed to complete a job.",
        "Information collected automatically. When you submit a form, we record the page you submitted it from and the time it took to complete, which helps us route your request and filter automated spam. Like most websites, our hosting provider may also log standard technical information such as your IP address, browser type, device type, and the pages you request, for security and to keep the Site running.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and Similar Technologies",
      blocks: [
        "The Site does not currently use advertising cookies, tracking pixels, or third-party analytics tools to build a profile of your browsing.",
        "Some pages load content from third parties that may set their own cookies or collect technical information under their own privacy policies — for example, embedded Google Maps on our contact and service-area pages, and fonts served by Google Fonts. You can block or delete cookies through your browser settings; the Site will continue to work without them.",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      blocks: [
        "We use the information we collect to:",
        {
          list: [
            "Respond to your service request and contact you about scheduling, estimates, and appointments",
            "Send you a confirmation email acknowledging your request",
            "Perform, document, and invoice the services you request",
            "Follow up about completed work, maintenance reminders, or service-related questions",
            "Protect the Site from spam, fraud, and abuse",
            "Comply with legal, licensing, tax, and recordkeeping obligations",
          ],
        },
        "We do not sell your personal information, and we do not share it with third parties for their own marketing purposes.",
      ],
    },
    {
      id: "how-we-share-information",
      title: "How We Share Information",
      blocks: [
        "We share personal information only as needed to operate our business and serve you:",
        {
          list: [
            "Service providers that help us run the Site and communicate with you — such as our website hosting provider and our email delivery provider (Resend), which transmits form submissions and confirmation emails on our behalf. These providers may only use your information to perform services for us.",
            "Financing partners, only if you ask us to connect you with a third-party lender. Any financing application is governed by that lender's own terms and privacy policy.",
            "Manufacturers and suppliers, when needed to register equipment, order parts, or process a manufacturer warranty claim on your behalf.",
            "Legal and safety purposes, when we believe disclosure is required by law, regulation, or legal process, or is necessary to protect the rights, property, or safety of Maven, our customers, or others.",
            "Business transfers, if Maven is involved in a merger, acquisition, or sale of assets, in which case your information may be transferred as part of that transaction.",
          ],
        },
      ],
    },
    {
      id: "communications",
      title: "Calls, Emails, and Text Messages",
      blocks: [
        "By submitting a service request with your phone number or email address, you agree that we may contact you at that number or address about your request and the services you have asked for. These are service-related communications, not marketing.",
        "If we ever send promotional messages, we will do so only as permitted by law, and you can opt out at any time — by following the unsubscribe instructions in an email, replying STOP to a text message, or contacting us directly. Message and data rates may apply to text messages.",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      blocks: [
        "We keep personal information for as long as needed to respond to your request, provide and support our services, maintain customer and job records, and meet legal, licensing, tax, and accounting requirements. When information is no longer needed for these purposes, we delete it or retain it in a form that no longer identifies you.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      blocks: [
        "We use reasonable administrative, technical, and physical safeguards to protect personal information, and the Site is served over an encrypted (HTTPS) connection. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. Please do not send sensitive information such as payment card numbers or Social Security numbers through our website forms.",
      ],
    },
    {
      id: "your-choices-and-rights",
      title: "Your Choices and Rights",
      blocks: [
        "You may contact us at any time to:",
        {
          list: [
            "Ask what personal information we hold about you",
            "Request that we correct inaccurate information",
            "Request that we delete your information, subject to records we are required to keep",
            "Opt out of any promotional communications",
          ],
        },
        "Depending on where you live, state privacy laws — including those of Maryland and Virginia — may give you additional rights regarding your personal information where those laws apply to us. We will respond to verifiable requests as required by applicable law and will not discriminate against you for exercising any of these rights. To protect your information, we may need to verify your identity before acting on a request.",
      ],
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      blocks: [
        "The Site is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.",
      ],
    },
    {
      id: "third-party-links",
      title: "Third-Party Links",
      blocks: [
        "The Site may link to or embed content from websites we do not operate, such as Google Maps, manufacturer sites, or financing partners. We are not responsible for the privacy practices of those sites, and we encourage you to review their privacy policies.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      blocks: [
        "We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. Material changes will be posted on this page before they take effect. Your continued use of the Site after an update means you accept the revised policy.",
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms of Service",
  description: `The terms that govern your use of ${site} and requests for service from ${company.name}.`,
  effectiveDate: "October 17, 2026",
  intro: [
    `These Terms of Service ("Terms") govern your access to and use of ${site} (the "Site"), operated by ${company.name} ("Maven," "we," "us," or "our"), located at ${address.full}.`,
    "By using the Site, you agree to these Terms. If you do not agree, please do not use the Site. These Terms cover use of the website; the home services we perform are governed by the separate written estimate, proposal, or contract you sign for each job.",
  ],
  sections: [
    {
      id: "use-of-the-site",
      title: "Use of the Site",
      blocks: [
        "You may use the Site for lawful, personal, and non-commercial purposes, such as learning about our services and requesting an appointment. You agree not to:",
        {
          list: [
            "Submit false, misleading, or another person's information through our forms",
            "Use the Site to send spam or unsolicited communications",
            "Attempt to interfere with, disrupt, or gain unauthorized access to the Site or its systems",
            "Use automated tools to scrape, copy, or collect content or data from the Site",
            "Use the Site in any way that violates applicable law",
          ],
        },
      ],
    },
    {
      id: "service-requests",
      title: "Service Requests and Scheduling",
      blocks: [
        "Submitting a request through the Site is a request for us to contact you — it does not create a contract and does not guarantee an appointment at a particular time. Appointment availability, including same-day and emergency service, is subject to technician availability, location within our service area, and other factors.",
        "We will confirm appointments directly with you by phone, email, or text message. Please call us directly for urgent issues rather than relying on the online form.",
      ],
    },
    {
      id: "estimates-and-pricing",
      title: "Estimates, Pricing, and Payment",
      blocks: [
        "Prices, service descriptions, and promotions shown on the Site are for general information only and are not binding quotes. The actual scope and price of any work depend on an on-site assessment and will be provided to you in a written estimate before work begins.",
        "Your written estimate, proposal, or contract — not the Site — sets out the scope of work, price, payment terms, any applicable warranty, and cancellation rights for that job, including any rights provided under Maryland or Virginia home improvement law. If anything on the Site conflicts with your signed agreement, your signed agreement controls.",
      ],
    },
    {
      id: "discounts-and-financing",
      title: "Discounts and Financing",
      blocks: [
        "Discounts and promotions advertised on the Site, including our veterans, active military, and first responder discount, may require valid identification, cannot be combined unless stated, and may be changed or discontinued at any time. Promotions apply only to work scheduled while the promotion is active.",
        "Financing is offered through third-party lenders. Approval, rates, terms, and eligibility are determined solely by the lender, and any financing agreement is between you and that lender. Maven does not make credit decisions.",
      ],
    },
    {
      id: "informational-content",
      title: "Informational Content",
      blocks: [
        "Articles, guides, checklists, and other content on the Site — including our blog — are provided for general informational purposes only. They are not a substitute for an in-person inspection by a qualified professional. HVAC, plumbing, and electrical work can involve serious safety hazards; do not attempt repairs that require a licensed professional or that you are not qualified to perform safely.",
        "We try to keep information on the Site accurate and current, but we do not warrant that all content is complete, accurate, or up to date, and we may change it at any time without notice.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      blocks: [
        `The Site and its content — including text, graphics, logos, photographs, and design — are owned by or licensed to ${company.name} and are protected by copyright, trademark, and other laws. You may view and print pages for your personal use, but you may not copy, reproduce, modify, distribute, or use our content or trademarks for commercial purposes without our prior written permission.`,
        "Certification and manufacturer names and logos displayed on the Site belong to their respective owners and are used to identify credentials or products.",
      ],
    },
    {
      id: "third-party-links",
      title: "Third-Party Links and Services",
      blocks: [
        "The Site may contain links to, or embedded content from, third-party websites and services such as Google Maps, manufacturers, and financing partners. We do not control and are not responsible for their content, policies, or practices, and your use of them is at your own risk and subject to their terms.",
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties",
      blocks: [
        'The Site is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, regarding the Site, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.',
        "This disclaimer applies to the Site only. It does not limit any warranty provided in writing for work we perform or any rights you have under applicable consumer protection or home improvement law.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      blocks: [
        `To the fullest extent permitted by law, ${company.name} and its owners, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or its content. Some jurisdictions do not allow certain limitations of liability, so some of these limitations may not apply to you.`,
      ],
    },
    {
      id: "indemnification",
      title: "Indemnification",
      blocks: [
        `You agree to indemnify and hold harmless ${company.name} and its owners, employees, and agents from any claims, losses, or expenses, including reasonable attorneys' fees, arising from your misuse of the Site or your violation of these Terms.`,
      ],
    },
    {
      id: "privacy",
      title: "Privacy",
      blocks: [
        "Your use of the Site is also governed by our Privacy Policy, which explains how we collect and use the information you provide.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      blocks: [
        "These Terms are governed by the laws of the State of Maryland, without regard to its conflict-of-law rules. Any dispute arising from these Terms or your use of the Site will be brought in the state or federal courts located in Montgomery County, Maryland, and you consent to the jurisdiction of those courts, except where applicable law provides otherwise.",
      ],
    },
    {
      id: "changes",
      title: "Changes to These Terms",
      blocks: [
        "We may update these Terms from time to time by posting a revised version on this page and updating the effective date. Your continued use of the Site after changes are posted means you accept the revised Terms. If any provision of these Terms is found unenforceable, the remaining provisions will remain in effect.",
      ],
    },
  ],
};
