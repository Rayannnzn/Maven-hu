import ScheduleForm from "@/components/shared/ScheduleForm";
import { SectionHeader } from "@/components/shared/PageHero";
import { company, addressLines, containerClass, hours, sectionClass } from "@/lib/site";

function ContactItem({
  icon,
  label,
  primary,
  sub,
  href,
}: {
  icon: string;
  label: string;
  primary: string;
  sub?: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div
        className={`font-semibold text-foreground ${label === "Phone" ? "text-xl md:text-2xl" : "text-sm md:text-base"}`}
      >
        {primary}
      </div>
      {sub && <div className="mt-1 text-sm text-muted-foreground">{sub}</div>}
    </>
  );

  return (
    <div className="flex items-start gap-4">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-[11px] bg-primary md:size-[52px]">
        <span className="material-icons-round text-xl text-maven-gold md:text-[26px]">
          {icon}
        </span>
      </div>
      <div>
        {href ? (
          <a href={href} className="block hover:text-primary">
            {inner}
          </a>
        ) : (
          inner
        )}
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className={`${sectionClass} bg-muted`}>
      <div className={containerClass}>
        <SectionHeader
          eyebrow="Contact Us"
          title="Ready to Get Started?"
          subtitle="Call us or fill out the form and we'll get back to you within 15 minutes."
        />
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="flex flex-col gap-7">
              <ContactItem
                icon="phone"
                label="Phone"
                primary={company.phone}
                sub="Available 24/7 for emergencies"
                href={company.phoneHref}
              />
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-[11px] bg-primary md:size-[52px]">
                  <span className="material-icons-round text-xl text-maven-gold md:text-[26px]">
                    schedule
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Business Hours
                  </div>
                  <div className="text-sm font-semibold text-foreground md:text-base">
                    {hours.weekday}
                  </div>
                  <div className="text-sm font-semibold text-foreground md:text-base">
                    {hours.weekend}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-maven-red">
                    {hours.emergency}
                  </div>
                </div>
              </div>
              <ContactItem
                icon="email"
                label="Email"
                primary={company.email}
                href={`mailto:${company.email}`}
              />
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-[11px] bg-primary md:size-[52px]">
                  <span className="material-icons-round text-xl text-maven-gold md:text-[26px]">
                    location_on
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Office Address
                  </div>
                  <address className="mt-1 not-italic text-sm font-semibold leading-relaxed text-foreground md:text-base">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-primary p-6 md:mt-10 md:p-8">
              <div className="text-sm font-bold tracking-wide text-maven-gold">
                EMERGENCY SERVICE
              </div>
              <div className="mt-2 text-xl font-extrabold text-white md:text-2xl">
                {company.phone}
              </div>
              <div className="mt-1 text-sm text-white/65">
                Available 24 hours / 7 days a week
              </div>
            </div>
          </div>

          <ScheduleForm />
        </div>
      </div>
    </section>
  );
}
