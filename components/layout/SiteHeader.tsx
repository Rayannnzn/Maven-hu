"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, ChevronDown } from "lucide-react";
import {
  company,
  containerClass,
  getCategoryNavItems,
  navLinks,
  serviceCategories,
  type ServiceCategory,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import SiteLogo from "@/components/layout/SiteLogo";
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
  const [base] = href.split("#");
  return pathname === base || (base !== "/" && pathname.startsWith(base));
}

function scrollToAnchor(href: string) {
  const [, hash] = href.split("#");
  if (!hash) return;
  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", href);
  }
}

function ServiceNavLink({
  href,
  label,
  pathname,
  className,
  onNavigate,
}: {
  href: string;
  label: string;
  pathname: string;
  className?: string;
  onNavigate?: () => void;
}) {
  const [base, hash] = href.split("#");
  const isAnchor = Boolean(hash);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor && pathname === base) {
      e.preventDefault();
      scrollToAnchor(href);
    }
    onNavigate?.();
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {label}
    </Link>
  );
}

function mobileMainCategoryButtonClass(isActive: boolean) {
  return cn(
    "flex min-h-[44px] w-full items-center justify-center rounded-md border px-2 py-2.5 text-center",
    "text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maven-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:px-3 sm:text-sm",
    isActive
      ? "border-maven-gold bg-maven-gold/15 text-maven-gold"
      : "border-white/25 text-white hover:border-white/40 hover:bg-white/5",
  );
}

function mobileSubcategoryButtonClass(isActive: boolean) {
  return cn(
    "inline-flex min-h-[36px] items-center rounded-md border px-2.5 py-1.5",
    "text-[11px] font-medium leading-tight transition-colors sm:text-xs",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maven-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
    isActive
      ? "border-maven-gold bg-maven-gold/15 font-semibold text-maven-gold"
      : "border-white/25 text-white/85 hover:border-white/40 hover:bg-white/5",
  );
}

function desktopSubcategoryLinkClass(isActive: boolean) {
  return cn(
    "min-h-[36px] rounded px-2 py-1.5 text-xs transition-colors hover:text-white sm:text-sm",
    isActive ? "font-semibold text-white" : "text-white/65",
  );
}

function mobileGroupLabelClass() {
  return cn(
    "inline-flex min-h-[36px] items-center rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5",
    "text-[10px] font-bold uppercase tracking-wide text-maven-gold/90 sm:text-[11px]",
  );
}

function desktopGroupLabelClass() {
  return cn(
    "inline-flex min-h-[36px] items-center rounded px-2 py-1.5 text-[10px] font-bold uppercase tracking-wide text-maven-gold/80 sm:text-[11px]",
  );
}

function categoryShortLabel(href: string, label: string) {
  if (href === "/electrical") {
    return (
      <>
        <span className="sm:hidden">Electrical</span>
        <span className="hidden sm:inline">{label}</span>
      </>
    );
  }
  if (href === "/commercial") {
    return "Commercial";
  }
  return label;
}

function NavDropdownContent({
  category,
  pathname,
  onNavigate,
  variant,
}: {
  category: ServiceCategory;
  pathname: string;
  onNavigate?: () => void;
  variant: "desktop" | "mobile";
}) {
  const linkClass =
    variant === "desktop"
      ? "block px-4 py-1.5 text-sm transition-colors hover:bg-white/10 text-white/85"
      : "rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted text-muted-foreground";

  const groupLabelClass =
    variant === "desktop"
      ? "px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-maven-gold/80"
      : "px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary/60";

  const hasAnchors =
    (category.groups && category.groups.length > 0) ||
    (category.anchorLinks && category.anchorLinks.length > 0);

  return (
    <>
      {category.groups?.map((group) => (
        <div key={group.label}>
          <div className={groupLabelClass}>{group.label}</div>
          {group.links.map((link) => (
            <ServiceNavLink
              key={link.href}
              href={link.href}
              label={link.label}
              pathname={pathname}
              onNavigate={onNavigate}
              className={cn(linkClass, "pl-6")}
            />
          ))}
        </div>
      ))}

      {category.anchorLinks?.map((link) => (
        <ServiceNavLink
          key={link.href}
          href={link.href}
          label={link.label}
          pathname={pathname}
          onNavigate={onNavigate}
          className={linkClass}
        />
      ))}

      {hasAnchors && category.subcategories.length > 0 && (
        <div
          className={cn(
            "my-1 border-t",
            variant === "desktop" ? "border-white/10" : "border-border",
          )}
        />
      )}

      {category.subcategories.map((sub) => (
        <Link
          key={sub.href}
          href={sub.href}
          onClick={onNavigate}
          className={cn(
            linkClass,
            isActiveLink(pathname, sub.href) &&
              (variant === "desktop"
                ? "text-maven-gold"
                : "font-medium text-primary"),
          )}
        >
          {sub.label}
        </Link>
      ))}
    </>
  );
}

function ServiceSubNavItems({
  category,
  pathname,
  variant,
}: {
  category: ServiceCategory;
  pathname: string;
  variant: "mobile" | "desktop";
}) {
  const items = getCategoryNavItems(category);
  let lastGroup: string | undefined;

  return (
    <>
      {items.map((item) => {
        const showGroupLabel = item.group && item.group !== lastGroup;
        if (showGroupLabel) {
          lastGroup = item.group;
        }

        return (
          <span key={item.href} className="contents">
            {showGroupLabel &&
              (variant === "mobile" ? (
                <span className={mobileGroupLabelClass()}>{item.group}</span>
              ) : (
                <span className={desktopGroupLabelClass()}>{item.group}</span>
              ))}
            {item.section === "featured" ? (
              <Link
                href={item.href}
                className={
                  variant === "mobile"
                    ? mobileSubcategoryButtonClass(
                        isActiveLink(pathname, item.href),
                      )
                    : desktopSubcategoryLinkClass(
                        isActiveLink(pathname, item.href),
                      )
                }
                aria-current={
                  isActiveLink(pathname, item.href) ? "page" : undefined
                }
              >
                {item.label}
              </Link>
            ) : (
              <ServiceNavLink
                href={item.href}
                label={item.label}
                pathname={pathname}
                className={
                  variant === "mobile"
                    ? mobileSubcategoryButtonClass(false)
                    : desktopSubcategoryLinkClass(false)
                }
              />
            )}
          </span>
        );
      })}
    </>
  );
}

function MobileServiceSubNav({
  category,
  pathname,
}: {
  category: ServiceCategory;
  pathname: string;
}) {
  return (
    <nav
      className="border-t border-white/10 pb-2 lg:hidden"
      aria-label={`${category.label} services`}
    >
      <div className="flex flex-wrap items-center gap-1.5 py-1.5">
        <Link
          href={category.href}
          className={mobileSubcategoryButtonClass(pathname === category.href)}
          aria-current={pathname === category.href ? "page" : undefined}
        >
          All {category.label}
        </Link>
        <ServiceSubNavItems
          category={category}
          pathname={pathname}
          variant="mobile"
        />
      </div>
    </nav>
  );
}

function DesktopServiceSubNav({
  category,
  pathname,
}: {
  category: ServiceCategory;
  pathname: string;
}) {
  return (
    <nav
      className="hidden border-t border-white/10 pb-2 lg:block"
      aria-label={`${category.label} services`}
    >
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1 py-1.5 lg:gap-x-2">
        <Link
          href={category.href}
          className={cn(
            "min-h-[36px] rounded px-2 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors hover:text-white sm:text-sm",
            pathname === category.href ? "text-maven-gold" : "text-white/60",
          )}
        >
          {category.label}
        </Link>
        <span className="text-white/30">/</span>
        <ServiceSubNavItems
          category={category}
          pathname={pathname}
          variant="desktop"
        />
      </div>
    </nav>
  );
}

function MobileCategoryAccordion({
  category,
  pathname,
  onNavigate,
}: {
  category: ServiceCategory;
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={cn(
          "flex w-full items-center rounded-md transition-colors hover:bg-muted",
          isActiveLink(pathname, category.href) && "bg-muted",
        )}
      >
        <Link
          href={category.href}
          onClick={onNavigate}
          className={cn(
            "flex-1 rounded-md px-3 py-2.5 text-sm font-medium",
            isActiveLink(pathname, category.href)
              ? "text-primary"
              : "text-foreground",
          )}
        >
          {category.label}
        </Link>
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="rounded-md px-3 py-2.5 text-muted-foreground hover:bg-muted/80"
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${category.label} menu`}
        >
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-200",
              expanded && "rotate-180",
            )}
          />
        </button>
      </div>
      {expanded && (
        <div className="ml-4 flex flex-col gap-0.5 border-l border-border pl-3">
          <NavDropdownContent
            category={category}
            pathname={pathname}
            onNavigate={onNavigate}
            variant="mobile"
          />
        </div>
      )}
    </div>
  );
}

function DesktopDropdown({
  category,
  pathname,
}: {
  category: ServiceCategory;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

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
      <div className="flex items-center">
        <Link
          href={category.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-white",
            isActiveLink(pathname, category.href) ? "text-white" : "text-white/78",
          )}
        >
          {category.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "ml-0.5 rounded p-0.5 transition-colors hover:bg-white/10",
            isActiveLink(pathname, category.href) ? "text-white" : "text-white/78",
          )}
          aria-expanded={open}
          aria-label={`${open ? "Close" : "Open"} ${category.label} menu`}
        >
          <ChevronDown
            className={cn(
              "size-3.5 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 max-h-[70vh] min-w-[280px] overflow-y-auto rounded-md border border-white/10 bg-primary py-1 shadow-xl">
          <NavDropdownContent
            category={category}
            pathname={pathname}
            variant="desktop"
          />
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

  const activeCategory = serviceCategories.find((c) =>
    pathname.startsWith(c.href),
  );

  const showServiceSubNav = Boolean(activeCategory);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-primary text-white transition-shadow duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(0,0,0,0.2)]",
      )}
    >
      <div className={`${containerClass} flex w-full min-w-0 flex-col`}>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[72px] lg:gap-8">
          <Link href="/" className="flex shrink-0 items-center">
            <SiteLogo className="h-11 lg:h-12" priority />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-3 lg:flex xl:gap-5"
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

          <div className="hidden items-center gap-4 lg:flex">
            <div className="text-right">
              <a
                href={company.phoneHref}
                className="text-base font-bold tracking-tight hover:text-white/90 lg:text-[17px]"
              >
                {company.phone}
              </a>
              <div className="text-[10px] uppercase tracking-widest text-white/50">
                Emergency Service
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
            <SheetContent side="right" className="w-[300px] overflow-y-auto sm:w-[340px]">
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

                {serviceCategories.map((category) => (
                  <MobileCategoryAccordion
                    key={category.href}
                    category={category}
                    pathname={pathname}
                    onNavigate={() => setOpen(false)}
                  />
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

        <nav
          className="border-t border-white/10 pb-2 lg:hidden"
          aria-label="Service categories"
        >
          <div className="grid grid-cols-2 gap-1.5 pt-1 sm:grid-cols-4">
            {serviceCategories.map((link) => {
              const isActive = isActiveLink(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={mobileMainCategoryButtonClass(isActive)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {categoryShortLabel(link.href, link.label)}
                </Link>
              );
            })}
          </div>
        </nav>

        {showServiceSubNav && activeCategory && (
          <>
            <MobileServiceSubNav
              category={activeCategory}
              pathname={pathname}
            />
            <DesktopServiceSubNav
              category={activeCategory}
              pathname={pathname}
            />
          </>
        )}
      </div>
    </header>
  );
}
