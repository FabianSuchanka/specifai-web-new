import { CalendarCheck, Globe, Workflow, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Globe,
    title: "Web na míru",
    text: "Reprezentativní stránky, které prodávají. Rychlé, SEO-ready a optimalizované pro mobil.",
  },
  {
    icon: CalendarCheck,
    title: "Rezervační systém",
    text: "Intuitivní booking pro klienty 24/7 s napojením na váš kalendář.",
  },
  {
    icon: Workflow,
    title: "Automatizace",
    text: "Propojení kalendářů, SMS připomínky a marketing, co běží sám.",
  },
];

export function FeatureTrinity() {
  return (
    <section id="funkce" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              Trojice, která mění hru
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Vše, co potřebujete k růstu — v jednom systému.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-12 flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {items.map((it, i) => (
            <RevealOnScroll
              key={it.title}
              delay={i * 100}
              className="w-[280px] max-w-[85vw] sm:w-[320px] md:w-auto md:max-w-none snap-center shrink-0 h-full flex flex-col"
            >
              <div className="group relative h-full flex-1 rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
