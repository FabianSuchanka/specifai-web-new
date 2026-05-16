import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "./RevealOnScroll";

const tiers = [
  {
    name: "Start",
    price: "490 Kč",
    period: "/ měsíc",
    desc: "Základní digitální recepce pro ty, co začínají.",
    features: [
      "Web na subdoméně",
      "Rezervační kalendář",
      "E-mailové notifikace",
      "Správa služeb a cen",
    ],
    cta: "Začít zdarma",
    highlighted: false,
  },
  {
    name: "Standard",
    price: "890 Kč",
    period: "/ měsíc",
    desc: "Plnohodnotný web a SEO pro váš růst.",
    features: [
      "Vlastní doména (.cz)",
      "SEO optimalizace",
      "Synchronizace s Google kalendářem",
      "Kalendář pro více zaměstnanců",
      "Statistiky tržeb",
    ],
    cta: "Vybrat Standard",
    highlighted: true,
  },
  {
    name: "Autopilot",
    price: "1 290 Kč",
    period: "/ měsíc",
    desc: "Kompletní automatizace vašeho podnikání.",
    features: [
      "Vše ze Standardu",
      "SMS připomínky (No-show killer)",
      "Marketingové automatizace",
      "Sběr Google recenzí",
      "Přednostní podpora",
    ],
    cta: "Chci Autopilota",
    highlighted: false,
  },
];

export function PricingTeaser() {
  return (
    <section id="cenik" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">Ceník</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Transparentní ceny. Bez překvapení.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 80}>
              <div
                className={`relative h-full rounded-2xl border p-7 transition-all duration-500 hover:scale-[1.02] ${
                  t.highlighted
                    ? "border-primary/60 bg-card shadow-[var(--shadow-elegant)] hover:shadow-[0_20px_50px_-12px_rgba(var(--primary-rgb,99,102,241),0.4)]"
                    : "border-border bg-card hover:border-primary/30 hover:shadow-[var(--shadow-elegant)]"
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)]">
                    Nejoblíbenější
                  </span>
                )}
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-6 w-full ${
                    t.highlighted
                      ? "bg-[image:var(--gradient-primary)] text-primary-foreground hover:opacity-95"
                      : ""
                  }`}
                  variant={t.highlighted ? "default" : "outline"}
                >
                  <a href="#kontakt">{t.cta}</a>
                </Button>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={300}>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              Všechny tarify zahrnují jednorázový zřizovací poplatek{" "}
              <strong className="text-foreground">2 900 Kč</strong> za kompletní nastavení webu, SEO
              a domény.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
