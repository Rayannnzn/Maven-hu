import Image from "next/image";
import { SectionHeader } from "@/components/shared/PageHero";
import { clients, containerClass, sectionClass } from "@/lib/site";

export default function ClientsSection() {
  return (
    <section className={`${sectionClass} bg-muted`}>
      <div className={containerClass}>
        <SectionHeader eyebrow="Our Clients" title="Trusted by Leading Brands" />
        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {clients.map((client) => (
            <li
              key={client.name}
              title={client.name}
              className="flex h-28 items-center justify-center rounded-2xl border bg-card px-8 py-5 shadow-sm sm:h-32"
            >
              <div className="relative h-full w-full">
                <Image
                  src={client.image}
                  alt={client.alt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 640px) 300px, 90vw"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
