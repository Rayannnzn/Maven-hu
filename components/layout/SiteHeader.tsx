"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, Wrench } from "lucide-react";
import { company, containerClass, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SERVICE_HREFS = new Set(["/hvac", "/plumbing", "/electrical"]);
const categoryLinks = navLinks.filter((link) => SERVICE_HREFS.has(link.href));
const generalLinks = navLinks.filter((link) => !SERVICE_HREFS.has(link.href));

function isActiveLink(pathname: string, href: string) {
  return (
    pathname === href || (href !== "/" && pathname.startsWith(href))
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-primary text-white transition-shadow duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.2)]",
      )}
    >
      <div className={`${containerClass} flex flex-col lg:block`}>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-md bg-maven-red lg:size-[38px]">
              <Wrench className="size-5 text-white" aria-hidden />
            </div>
            <div>
              <div className="text-lg font-extrabold leading-tight tracking-wider lg:text-xl">
                MAVEN
              </div>
              <div className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                {company.tagline}
              </div>
            </div>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6"
            aria-label="Main"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  isActiveLink(pathname, link.href)
                    ? "text-white"
                    : "text-white/78",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="text-right">
              <a
                href={company.phoneHref}
                className="text-base font-bold tracking-tight hover:text-white/90 lg:text-[17px]"
              >
                {company.phone}
              </a>
              <div className="text-[10px] uppercase tracking-widest text-white/50">
                Available 24/7
              </div>
            </div>
            <Button asChild className="bg-maven-red font-bold hover:bg-[#b81f1f]">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="text-left text-primary">Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {generalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      isActiveLink(pathname, link.href)
                        ? "bg-muted text-primary"
                        : "text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-3 border-t pt-6">
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 font-bold text-primary"
                >
                  <Phone className="size-4" />
                  {company.phone}
                </a>
                <Button asChild className="w-full bg-maven-red font-bold hover:bg-[#b81f1f]">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <nav
          className="border-t border-white/10 pb-2 lg:hidden"
          aria-label="Service categories"
        >
          <div className="flex items-center justify-between gap-1">
            {categoryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex min-h-[44px] flex-1 items-center justify-center px-1 py-2.5 text-center text-sm font-bold text-white transition-colors hover:text-white/90 sm:text-base",
                  isActiveLink(pathname, link.href) && "text-maven-gold",
                )}
              >
                {link.href === "/electrical" ? (
                  <>
                    <span className="sm:hidden">Electrical</span>
                    <span className="hidden sm:inline">{link.label}</span>
                  </>
                ) : (
                  link.label
                )}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
