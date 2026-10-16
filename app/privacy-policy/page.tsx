import type { Metadata } from "next";
import LegalDocumentView from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalDocumentView doc={privacyPolicy} />;
}
