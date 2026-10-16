import type { Metadata } from "next";
import LegalDocumentView from "@/components/legal/LegalDocument";
import { termsOfService } from "@/lib/legal";

export const metadata: Metadata = {
  title: termsOfService.title,
  description: termsOfService.description,
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return <LegalDocumentView doc={termsOfService} />;
}
