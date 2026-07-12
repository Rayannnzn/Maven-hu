import Link from "next/link";
import SiteLogo from "@/components/layout/SiteLogo";
import CertificationsSection from "@/components/sections/CertificationsSection";
import {
  addressLines,
  company,
  containerClass,
  footerCompanyLinks,
  footerServiceLinks,
  veteransDiscount,
} from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className={`${containerClass} border-b border-white/10 py-12 md:py-16`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-5 inline-block">
              <SiteLogo className="h-10" />
            </Link>
            <p className="mb-5 max-w-xs text-sm leading-relaxed text-white/52">
              Insured home service professionals based in Rockville, Maryland —
              serving homeowners and businesses across Maryland and Northern
              Virginia. Emergency service is available for urgent issues.
            </p>
            <a
              href={company.phoneHref}
              className="block text-lg font-bold hover:text-white/90"
            >
              {company.phone}
            </a>
            <p className="mt-1 text-sm text-white/45">{company.email}</p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-white/45">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      "highlight" in link && link.highlight
                        ? "text-sm font-semibold text-maven-red hover:text-[#e85050]"
                        : "text-sm text-white/52 hover:text-white"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {footerCompanyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/52 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest">
              Business Hours
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/45">Monday – Friday</p>
                <p className="font-medium text-white/82">7:00 AM – 7:00 PM</p>
              </div>
              <div>
                <p className="text-white/45">Saturday – Sunday</p>
                <p className="font-medium text-white/82">8:00 AM – 5:00 PM</p>
              </div>
              <div className="mt-2 rounded-lg border border-maven-red/30 bg-maven-red/15 p-3.5">
                <p className="text-xs font-bold text-maven-red">Emergency Service</p>
                <p className="text-sm text-white/65">Available for urgent issues</p>
                <a
                  href={company.phoneHref}
                  className="mt-1.5 block font-bold hover:text-white/90"
                >
                  {company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CertificationsSection compact />

      <div
        className={`${containerClass} border-b border-white/10 py-4 text-center text-sm text-white/45`}
      >
        {veteransDiscount.title} for {veteransDiscount.audience} — valid ID
        required.
      </div>

      <div
        className={`${containerClass} flex flex-col items-start justify-between gap-3 py-5 text-sm text-white/30 sm:flex-row sm:items-center`}
      >
        <p>© 2026 {company.name}. All rights reserved.</p>
        <div className="flex gap-5">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
            <Link key={item} href="#" className="hover:text-white/65">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
