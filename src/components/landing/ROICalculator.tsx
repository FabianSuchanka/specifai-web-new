import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { RevealOnScroll } from "./RevealOnScroll";
import { Calculator, Clock, TrendingUp, ShieldCheck, DollarSign } from "lucide-react";

export function ROICalculator() {
  const [appointments, setAppointments] = useState([40]);
  const [price, setPrice] = useState([600]);
  const cardRef = useRef<HTMLDivElement>(null);

  // Spotlight effect logic
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculations per month (approx 4.3 weeks)
  const monthlyAppointments = appointments[0] * 4.3;

  // Time saved (approx 10 minutes per appointment for booking, calls, reminders)
  const hoursSaved = Math.round((monthlyAppointments * 10) / 60);

  // No-show prevention (approx 5% no-shows prevented)
  const noShowsPrevented = Math.ceil(monthlyAppointments * 0.05);
  const moneySaved = noShowsPrevented * price[0];

  // Reactivation (approx 3 extra bookings per month through automated marketing)
  const extraBookings = 3;
  const extraMoney = extraBookings * price[0];

  const totalValue = moneySaved + extraMoney;

  return (
    <section id="kalkulacka" className="py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Decorative blobs (replaced expensive blur filter with radial-gradient) */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--primary) 5%, transparent) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--chart-2) 5%, transparent) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-4">
              <Calculator className="h-3.5 w-3.5" />
              Interaktivní výpočet
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Vyplatí se vám Autopilot?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Nastavte si svá čísla a zjistěte, kolik času a peněz vám SpecifAI měsíčně ušetří díky
              chytré automatizaci.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div
            ref={cardRef}
            className="mt-16 group relative rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)] overflow-hidden max-w-5xl mx-auto"
            style={
              {
                "--mouse-x": "50%",
                "--mouse-y": "50%",
              } as React.CSSProperties
            }
          >
            {/* Interactive Spotlight background */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary-rgb), 0.04), transparent 40%)",
              }}
            />

            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border relative z-10">
              {/* Left Side: Inputs */}
              <div className="p-8 sm:p-12">
                <h3 className="text-xl font-semibold mb-8">Vaše současná čísla</h3>

                <div className="space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-foreground/80">
                        Počet rezervací týdně
                      </label>
                      <span className="text-xl font-bold text-primary">{appointments[0]}</span>
                    </div>
                    <Slider
                      value={appointments}
                      onValueChange={setAppointments}
                      max={150}
                      min={10}
                      step={5}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>10</span>
                      <span>150+</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-foreground/80">
                        Průměrná cena služby
                      </label>
                      <span className="text-xl font-bold text-primary">{price[0]} Kč</span>
                    </div>
                    <Slider
                      value={price}
                      onValueChange={setPrice}
                      max={3000}
                      min={200}
                      step={100}
                      className="cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>200 Kč</span>
                      <span>3000 Kč+</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Results */}
              <div className="p-8 sm:p-12 bg-muted/10">
                <h3 className="text-xl font-semibold mb-8">Váš měsíční zisk s Autopilotem</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border/50 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Získaný čas (bez volání a papírování)
                      </p>
                      <p className="text-2xl font-bold text-foreground">+{hoursSaved} hodin</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border/50 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Záchrana před propadnutím (SMS připomínky)
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        +{moneySaved.toLocaleString("cs-CZ")} Kč
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Snížení No-shows o {noShowsPrevented} klientů
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-background border border-border/50 shadow-sm transition-transform hover:-translate-y-1 duration-300">
                    <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Automatický marketing (Reaktivace)
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        +{extraMoney.toLocaleString("cs-CZ")} Kč
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Cca {extraBookings} dodatečné rezervace
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold">Celkový finanční přínos</span>
                    <span className="text-3xl font-extrabold text-primary">
                      +{totalValue.toLocaleString("cs-CZ")} Kč
                    </span>
                  </div>
                  <p className="text-xs text-right text-muted-foreground mt-2">
                    *Měsíční odhad. Hodnota vašeho ušetřeného času není započítána.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
