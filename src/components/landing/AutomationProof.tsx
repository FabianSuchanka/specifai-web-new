import { CalendarCheck, Check, Clock, MessageSquare, Zap } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

export function AutomationProof() {
  return (
    <section id="demo" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <RevealOnScroll>
          <div>
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              Automatizace v praxi
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Ušetřete <span className="text-primary">12+ hodin</span> týdně.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Klient si rezervuje termín — a všechno ostatní se stane samo. Potvrzení e-mailem, SMS
              připomínka den předem, follow-up po návštěvě. Vy se soustředíte na zákazníka, ne na
              administrativu.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Automatické potvrzení a připomínky bez vašeho zásahu",
                "Synchronizace s Google / Apple kalendářem",
                "Snížení absencí klientů až o 70 %",
                "Reporty a přehledy v reálném čase",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl opacity-60 blur-2xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)] overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-2/80" />
                <span className="ml-3 text-xs text-muted-foreground">specifai · dashboard</span>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      Ušetřený čas / týden
                    </div>
                    <div className="mt-2 text-2xl font-bold">12,4 h</div>
                  </div>
                  <div className="rounded-xl border border-border p-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarCheck className="h-3.5 w-3.5" />
                      Rezervace dnes
                    </div>
                    <div className="mt-2 text-2xl font-bold">28</div>
                  </div>
                </div>

                <div className="rounded-xl border border-border p-4 space-y-3">
                  <div className="text-xs font-medium text-muted-foreground">Automatický tok</div>
                  {[
                    {
                      icon: CalendarCheck,
                      title: "Nová rezervace",
                      meta: "Anna · Pá 14:00",
                      done: true,
                    },
                    {
                      icon: MessageSquare,
                      title: "SMS potvrzení odesláno",
                      meta: "+420 ··· · za 2 s",
                      done: true,
                    },
                    {
                      icon: Zap,
                      title: "Připomínka 24 h předem",
                      meta: "naplánováno",
                      done: false,
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-muted/60 transition-colors"
                    >
                      <div
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${
                          step.done
                            ? "bg-[image:var(--gradient-primary)] text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <step.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{step.title}</div>
                        <div className="text-xs text-muted-foreground">{step.meta}</div>
                      </div>
                      {step.done && <Check className="h-4 w-4 text-primary" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
