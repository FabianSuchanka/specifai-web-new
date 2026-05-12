import {
  Briefcase,
  Car,
  Dumbbell,
  GraduationCap,
  HeartPulse,
  Scissors,
  type LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const industries: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Scissors,
    title: "Barbeři a salóny",
    text: "Správa křesel, kalendář specialistů a automatické SMS připomínky.",
  },
  {
    icon: Dumbbell,
    title: "Fitness a sport",
    text: "Rezervace lekcí, hlídání kapacity gymu a správa permanentek.",
  },
  {
    icon: HeartPulse,
    title: "Zdraví a terapie",
    text: "Diskrétní objednávání pro kliniky, fyzioterapeuty a poradce.",
  },
  {
    icon: Car,
    title: "Auto-moto služby",
    text: "Efektivní plánování pro pneuservisy a detailingová centra.",
  },
  {
    icon: GraduationCap,
    title: "Vzdělávání a kurzy",
    text: "Termíny pro jazykovky, doučování nebo kreativní workshopy.",
  },
  {
    icon: Briefcase,
    title: "Odborné služby",
    text: "Rezervace konzultací pro právníky, architekty a konzultanty.",
  },
];

export function IndustryGrid() {
  return (
    <section id="pro-koho" className="py-20 sm:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              Pro koho
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Řešení pro každý obor, kde hraje roli čas.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((it, i) => (
            <RevealOnScroll key={it.title} delay={(i % 3) * 80}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)]">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground group-hover:shadow-[var(--shadow-glow)]">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {it.text}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}