import { Check, X } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const comparisonData = [
  {
    feature: "Prezentace a značka",
    reservio: "Profil v katalogu (budujete cizí značku)",
    specifai: "Vlastní profi web na vaší doméně",
  },
  {
    feature: "Viditelnost na Googlu (SEO)",
    reservio: "Nezávislé hledání vás těžko najde",
    specifai: "Top pozice pro vaše město a obor",
  },
  {
    feature: "Konkurence na stránce",
    reservio: "Klient vidí další salóny ve vašem okolí",
    specifai: "Žádná konkurence, pozornost je jen vaše",
  },
  {
    feature: "Zákaznická zkušenost",
    reservio: "Základní výběr termínu",
    specifai: "Chytré formuláře a přizpůsobený rezervační tok",
  },
  {
    feature: "Marketingový autopilot",
    reservio: "Základní SMS upozornění",
    specifai: "Automatické vracení klientů a sběr recenzí",
  },
];

export function Comparison() {
  return (
    <section id="onas" className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              Proč nezůstat u běžných platforem
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Katalog vs. Vaše Vlastní Značka
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Běžné rezervační platformy (jako Reservio) jsou skvělé na začátek. Pokud to ale myslíte s podnikáním vážně, potřebujete vlastní web, který pracuje pro vás, ne pro katalog.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="mt-16 max-w-4xl mx-auto">
            {/* Desktop Table */}
            <div className="hidden md:block relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/40 text-muted-foreground uppercase text-xs tracking-wider border-b border-border">
                  <tr>
                    <th scope="col" className="px-6 py-5 font-semibold w-1/3">
                      Co porovnáváme
                    </th>
                    <th scope="col" className="px-6 py-5 font-semibold w-1/3 border-l border-border bg-background/50">
                      Běžné katalogy
                    </th>
                    <th scope="col" className="px-6 py-5 font-semibold w-1/3 border-l border-border bg-primary/5 text-primary">
                      SpecifAI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-5 font-medium text-foreground">
                        {row.feature}
                      </td>
                      <td className="px-6 py-5 text-muted-foreground border-l border-border bg-background/50">
                        <div className="flex items-start gap-2">
                          <X className="h-4 w-4 shrink-0 text-destructive mt-0.5" />
                          <span>{row.reservio}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 font-medium text-foreground border-l border-border bg-primary/5">
                        <div className="flex items-start gap-2">
                          <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                          <span>{row.specifai}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {comparisonData.map((row, index) => (
                <div key={index} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-semibold text-lg text-foreground mb-4">{row.feature}</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Běžné katalogy</span>
                      <div className="flex items-start gap-2 text-muted-foreground text-sm">
                        <X className="h-4 w-4 shrink-0 text-destructive mt-0.5" />
                        <span>{row.reservio}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 pt-4 border-t border-border">
                      <span className="text-[11px] font-bold text-primary uppercase tracking-wider">SpecifAI</span>
                      <div className="flex items-start gap-2 text-foreground font-medium text-sm">
                        <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{row.specifai}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
