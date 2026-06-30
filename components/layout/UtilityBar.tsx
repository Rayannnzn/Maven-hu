"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, AlertTriangle } from "lucide-react";
import { company } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function UtilityBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-out"
      style={{
        transform: mounted ? "translateY(0)" : "translateY(100%)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div
        className="bg-maven-red/95 backdrop-blur-md text-white shadow-[0_-4px_28px_rgba(0,0,0,0.22)]"
        style={{ minHeight: "60px" }}
      >
        <div className="flex items-center h-[60px] sm:h-[64px] px-4 sm:px-6 gap-3">
          {/* Left: Phone */}
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 shrink-0 font-semibold text-sm sm:text-base hover:text-maven-gold transition-colors duration-200 group"
            aria-label={`Call us at ${company.phone}`}
          >
            <span className="flex items-center justify-center size-7 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors duration-200 shrink-0">
              <Phone className="size-3.5" aria-hidden />
            </span>
            <span className="hidden xs:inline truncate">{company.phone}</span>
          </a>

          {/* Divider */}
          <span className="hidden sm:block h-5 w-px bg-white/30 shrink-0" />

          {/* Center: Marquee ticker */}
          <div className="flex-1 min-w-0 overflow-hidden mx-2 sm:mx-4">
            <div className="animate-marquee whitespace-nowrap text-sm sm:text-sm font-medium">
              {/* Two copies for seamless loop */}
              <span className="inline-flex items-center gap-2 pr-16">
                <AlertTriangle className="size-3.5 shrink-0 text-maven-gold" aria-hidden />
                Emergency Service Available 24/7 Fast Response, Licensed Technicians, All Hours
              </span>
              <span className="inline-flex items-center gap-2 pr-16" aria-hidden>
                <AlertTriangle className="size-3.5 shrink-0 text-maven-gold" aria-hidden />
                Emergency Service Available 24/7 Fast Response, Licensed Technicians, All Hours
              </span>
              <span className="inline-flex items-center gap-2 pr-16" aria-hidden>
                <AlertTriangle className="size-3.5 shrink-0 text-maven-gold" aria-hidden />
                Emergency Service Available 24/7 Fast Response, Licensed Technicians, All Hours
              </span>

            </div>
          </div>

          {/* Divider */}
          <span className="hidden sm:block h-5 w-px bg-white/30 shrink-0" />

          {/* Right: CTA */}
          <Button
            asChild
            size="sm"
            className="shrink-0 bg-maven-gold text-primary font-bold hover:bg-[#e6a800] hover:scale-105 hover:shadow-[0_4px_16px_rgba(244,180,0,0.4)] transition-all duration-200 active:scale-95 text-xs sm:text-sm px-3 sm:px-4"
          >
            <Link href="/contact">Schedule Service</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
