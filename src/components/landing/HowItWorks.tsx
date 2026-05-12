import { PhoneCall, Settings2, Rocket } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const steps = [
  {
    icon: PhoneCall,
    title: "1. Úvodní hovor",
    description: "Krátce si popovídáme o vašem podnikání, zjistíme vaše potřeby a navrhneme to nejlepší řešení přímo pro vás.",
  },
  {
    icon: Settings2,
    title: "2. My vše nastavíme",
    description: "Vytvoříme vám prémiový web, nastavíme služby, napojíme kalendář a zprovozníme online recepci. Vy se o nic nestaráte.",
  },
  {
    icon: Rocket,
    title: "3. Spuštění a růst",
    description: "Předáme vám hotový systém, ukážeme jak funguje a můžete začít přijímat rezervace. Odteď pracuje systém pro vás.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              Přechod bez starostí
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Jak probíhá spuštění?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Zapomeňte na zdlouhavé nastavování systémů. V rámci zřizovacího poplatku pro vás připravíme vše na klíč.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-20 relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-border">
            <div className="absolute top-0 left-0 h-full w-full bg-[image:var(--gradient-primary)] opacity-30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            {steps.map((step, index) => (
              <RevealOnScroll key={step.title} delay={index * 150}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-8 border-background bg-card shadow-[var(--shadow-elegant)]">
                    <div className="absolute inset-0 rounded-full opacity-20 bg-[image:var(--gradient-primary)] mix-blend-overlay" />
                    <step.icon className="h-8 w-8 text-primary relative z-10" />
                  </div>
                  
                  {/* Content */}
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
