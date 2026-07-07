import Image from "next/image";
import { company } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export default function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <div className={cn("inline-flex rounded-lg bg-white px-2 py-1", className)}>
      <Image
        src={company.logo}
        alt={`${company.name} logo`}
        width={240}
        height={96}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </div>
  );
}
