"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Car, Home } from "lucide-react";

const SERVICES = [
  {
    title: "Local House Shifting",
    description:
      "End-to-end packing, loading, and unpacking within the city. We handle fragile items with extra care.",
    Icon: Home,
    delayClass: "delay-0",
  },
  {
    title: "Corporate Office Relocation",
    description:
      "Minimal downtime, maximum efficiency. We relocate your office setup overnight if needed.",
    Icon: Building2,
    delayClass: "delay-150",
  },
  {
    title: "Secure Vehicle Transport",
    description:
      "Your car travels in an enclosed carrier with real-time tracking and full insurance coverage.",
    Icon: Car,
    delayClass: "delay-300",
  },
] as const;

type ServiceItem = (typeof SERVICES)[number];

type CardProps = {
  service: ServiceItem;
  inView: boolean;
};

function ServiceCard({ service, inView }: CardProps) {
  const { title, description, Icon, delayClass } = service;
  return (
    <div
      className={`rounded-lg border border-white/15 bg-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent ${
        inView ? `fade-up ${delayClass}` : "opacity-0 translate-y-4"
      }`}
    >
      <Icon className="h-6 w-6 text-accent" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p>
      <span className="mt-4 inline-flex text-sm font-semibold text-accent">
        Learn more →
      </span>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="px-4 py-20 md:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">
            Services
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            What We Move
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
