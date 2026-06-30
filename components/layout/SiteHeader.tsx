"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, Wrench, ChevronDown } from "lucide-react";
import { company, containerClass, navLinks, serviceCategories } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SERVICE_HREFS = new Set<string>(serviceCategories.map((c) => c.href));
const generalLinks = navLinks.filter((link) => !SERVICE_HREFS.has(link.href));

function isActiveLink(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(href));
}

function DesktopDropdown({
  category,
  pathname,
}: {
  category: (typeof serviceCategories)[number];
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={category.href}
        className={cn(
          "flex items-center gap-0.5 text-sm font-medium transition-colors hover:text-white",
          isActiveLink(pathname, category.href) ? "text-white" : "text-white/78",
        )}
      >
        {category.label}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </Link>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 min-w-[220px] rounded-md border border-white/10 bg-primary py-1 shadow-xl">
          {category.subcategories.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              className={cn(
                "block px-4 py-2 text-sm transition-colors hover:bg-white/10",
                isActiveLink(pathname, sub.href)
                  ? "text-maven-gold"
                  : "text-white/85",
              )}
            >
              {sub.label}
            </Link>
          ))}
        </div>
      )}
    </div>
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

  // Determine active service category for the sub-nav bar
  const activeCategory = serviceCategories.find((c) =>
    pathname.startsWith(c.href),
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-primary text-white transition-shadow duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.2)]",
      )}
    >
      <div className={`${containerClass} flex flex-col`}>
        {/* ── Main bar ── */}
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

          {/* Desktop nav */}
          <nav
            className="hidden flex-1 items-center justify-center gap-4 lg:flex xl:gap-6"
            aria-label="Main"
          >
            {navLinks.map((link) => {
              const category = serviceCategories.find(
                (c) => c.href === link.href,
              );
              if (category) {
                return (
                  <DesktopDropdown
                    key={link.href}
                    category={category}
                    pathname={pathname}
                  />
                );
              }
              return (
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
              );
            })}
          </nav>

          {/* Desktop CTA */}
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

          {/* Mobile hamburger */}
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

                {/* Service categories with nested subcategories */}
                {serviceCategories.map((category) => (
                  <div key={category.href}>
                    <Link
                      href={category.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                        isActiveLink(pathname, category.href)
                          ? "bg-muted text-primary"
                          : "text-foreground",
                      )}
                    >
                      {category.label}
                    </Link>
                    <div className="ml-4 flex flex-col gap-0.5 border-l border-border pl-3">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted",
                            isActiveLink(pathname, sub.href)
                              ? "font-medium text-primary"
                              : "text-muted-foreground",
                          )}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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
                <Button
                  asChild
                  className="w-full bg-maven-red font-bold hover:bg-[#b81f1f]"
                >
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* ── Mobile category bar (top-level, shown when NOT inside a category) ── */}
        {!activeCategory && (
          <nav
            className="border-t border-white/10 pb-2 lg:hidden"
            aria-label="Service categories"
          >
            <div className="flex items-center justify-between gap-1">
              {serviceCategories.map((link) => (
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
        )}

        {/* ── Subcategory bar (desktop + mobile, shown when inside a category) ── */}
        {activeCategory && (
          <nav
            className="border-t border-white/10 pb-2"
            aria-label={`${activeCategory.label} subcategories`}
          >
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1 py-1.5 lg:gap-x-2">
              {/* Back link to parent on mobile */}
              <Link
                href={activeCategory.href}
                className={cn(
                  "min-h-[36px] rounded px-2 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors hover:text-white sm:text-sm",
                  pathname === activeCategory.href
                    ? "text-maven-gold"
                    : "text-white/60",
                )}
              >
                {activeCategory.label}
              </Link>
              <span className="text-white/30">/</span>
              {activeCategory.subcategories.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={cn(
                    "min-h-[36px] rounded px-2 py-1.5 text-xs transition-colors hover:text-white sm:text-sm",
                    isActiveLink(pathname, sub.href)
                      ? "font-semibold text-white"
                      : "text-white/65",
                  )}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
