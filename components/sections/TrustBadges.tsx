import { containerClass } from "@/lib/site";

const badges = [
  { icon: "verified_user", iconClass: "text-primary", title: "Fully Licensed", sub: "State Certified" },
  { icon: "shield", iconClass: "text-primary", title: "Fully Insured", sub: "Liability Covered" },
  { icon: "star", iconClass: "text-maven-gold", title: "5-Star Rated", sub: "1,200+ Reviews" },
  { icon: "speed", iconClass: "text-primary", title: "Same-Day Service", sub: "Fast Dispatch" },
  { icon: "emergency", iconClass: "text-maven-red", title: "24/7 Emergency", sub: "Always Available" },
];

export default function TrustBadges() {
  return (
    <div className="border-b border-border bg-background">
      <div className={`${containerClass} py-5 md:py-6`}>
        <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5 lg:gap-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex min-w-[200px] shrink-0 items-center gap-3 sm:min-w-0"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                <span className={`material-icons-round text-xl ${badge.iconClass}`}>
                  {badge.icon}
                </span>
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-primary">{badge.title}</div>
                <div className="text-xs text-muted-foreground">{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
