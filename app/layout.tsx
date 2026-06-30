import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UtilityBar from "@/components/layout/UtilityBar";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maven Home Services | HVAC, Plumbing & Electrical in Maryland & Virginia",
    template: "%s | Maven Home Services",
  },
  description:
    "Licensed and insured HVAC, plumbing, and electrical professionals based in Rockville, MD — serving Maryland and Northern Virginia within a 30-mile radius. Available 24/7 for emergency service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <UtilityBar />
      </body>
    </html>
  );
}
