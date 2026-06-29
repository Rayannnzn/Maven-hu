import Link from "next/link";
import { AlertTriangle, Phone } from "lucide-react";
import { company, containerClass } from "@/lib/site";
import { Button } from "@/components/ui/button";

export default function UtilityBar() {
  return (
    <div className="bg-maven-red text-white">
      <div
        className={`${containerClass} flex items-center justify-between gap-3 py-2.5 text-sm font-medium`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5">
            <Phone className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">{company.phone}</span>
          </span>
          <span className="hidden h-3 w-px bg-white/35 sm:inline-block" />
          <span className="hidden items-center gap-1.5 sm:flex">
            <AlertTriangle className="size-3.5 shrink-0" aria-hidden />
            Emergency Service Available 24/7
          </span>
        </div>
        <Button
          asChild
          size="sm"
          className="shrink-0 bg-maven-gold font-bold text-primary hover:bg-[#e6a800]"
        >
          <Link href="/contact">Schedule Service</Link>
        </Button>
      </div>
    </div>
  );
}
