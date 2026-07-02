import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { PageHero, SectionHeader } from "@/components/shared/PageHero";
import FaqSection from "@/components/sections/FaqSection";
import ScheduleForm from "@/components/shared/ScheduleForm";
import { Button } from "@/components/ui/button";
import { company, containerClass, sectionClass } from "@/lib/site";
import type { ServicePageData } from "@/lib/services/types";

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <>
      <Breadcrumbs items={[{ label: data.title }]} />

      <div className="relative w-full bg-primary">
        <div className="relative h-64 w-full md:h-80 lg:mx-auto lg:h-[34rem] lg:max-w-5xl">
          <Image
            src={data.heroImage}
            alt=""
            fill
            className="object-contain"
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
          />
        </div>
      </div>

      <PageHero title={data.heroTitle} description={data.heroDescription} />

      <section className={`${sectionClass} bg-background`}>
        <div className={`${containerClass} max-w-3xl`}>
          <SectionHeader
            eyebrow="Overview"
            title={`About Our ${data.title}`}
            centered={false}
            className="mb-8"
          />
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            {data.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-muted`}>
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Services"
            title="What We Offer"
            subtitle="Comprehensive solutions from licensed professionals."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.offeredServices.map((svc) => (
              <div
                key={svc.name}
                className="rounded-2xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="material-icons-round mb-4 text-3xl text-maven-red">
                  {svc.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold text-primary">
                  {svc.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-background`}>
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Benefits"
            title="Why Homeowners Choose Maven"
            subtitle="Quality workmanship backed by real guarantees."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {data.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 rounded-2xl border bg-card p-6"
              >
                <span className="material-icons-round shrink-0 text-2xl text-maven-gold">
                  check_circle
                </span>
                <div>
                  <h3 className="mb-2 font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-primary text-white`}>
        <div className={containerClass}>
          <SectionHeader
            eyebrow="The Maven Difference"
            title="Why Choose Us"
            subtitle="Local expertise, honest service, lasting results."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {data.whyChoose.map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/72">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-muted`}>
        <div className={containerClass}>
          <SectionHeader
            eyebrow="Process"
            title="How It Works"
            subtitle="From first call to finished job — simple and transparent."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {data.steps.map((step) => (
              <div key={step.num} className="relative text-center">
                <span className="mb-4 block text-4xl font-black text-maven-gold/30">
                  {step.num}
                </span>
                <span className="material-icons-round mb-3 text-3xl text-maven-red">
                  {step.icon}
                </span>
                <h3 className="mb-2 font-bold text-primary">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-maven-red py-12 text-white md:py-16">
        <div
          className={`${containerClass} flex flex-col items-center gap-6 text-center`}
        >
          <h2 className="text-2xl font-extrabold md:text-3xl">
            {data.ctaTitle}
          </h2>
          <p className="max-w-lg text-white/80">
            Schedule your service today or call our team for a free estimate.
            Same-day appointments available across Maryland and Virginia.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-maven-gold font-extrabold text-primary hover:bg-[#e6a800]"
            >
              <Link href="/contact">Schedule Service</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={company.phoneHref}>Call {company.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection faqs={data.faqs} />

      <section className={`${sectionClass} bg-muted`}>
        <div className={containerClass}>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="Get Started"
                title="Request Service Today"
                subtitle="Fill out the form and we'll confirm your appointment within 15 minutes during business hours."
                centered={false}
                className="mb-0"
              />
              <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="material-icons-round text-maven-red">
                    phone
                  </span>
                  <a
                    href={company.phoneHref}
                    className="font-semibold text-primary hover:underline"
                  >
                    {company.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-icons-round text-maven-red">
                    email
                  </span>
                  <a
                    href={`mailto:${company.email}`}
                    className="font-semibold text-primary hover:underline"
                  >
                    {company.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-icons-round text-maven-red">
                    emergency
                  </span>
                  24/7 emergency service available
                </p>
              </div>
            </div>
            <ScheduleForm compact title="Schedule a Service" />
          </div>
        </div>
      </section>
    </>
  );
}
