import Image from "next/image";
import { SectionHeader } from "@/components/shared/PageHero";
import { certifications, containerClass, sectionClass } from "@/lib/site";

export default function CertificationsSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className={`${containerClass} border-b border-white/10 py-8`}>
        <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-white/50">
          Licensed & Certified
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center gap-2"
              title={cert.name}
            >
              <div className="relative h-12 w-20 sm:h-14 sm:w-24">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <span className="max-w-[100px] text-center text-[10px] leading-tight text-white/45 sm:text-xs">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className={`${sectionClass} bg-background`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="Licensed & Certified"
          title="Licensed, Certified, and Insured Home Service Professionals"
          subtitle="Maven technicians hold MHIC (Maryland Home Improvement Commission) licensing, EPA Section 608 refrigerant certification, OSHA safety certification, and Haag inspection credentials. Every technician is background-checked and fully insured before stepping into your home."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center rounded-2xl border bg-card p-5 text-center shadow-sm sm:p-6"
            >
              <div className="relative mb-4 h-16 w-full max-w-[140px] sm:h-20">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 140px, 30vw"
                />
              </div>
              <p className="text-sm font-bold text-primary">{cert.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
