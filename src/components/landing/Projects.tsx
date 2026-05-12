import {
  ArrowUpRight,
  Scissors,
  Dumbbell,
  Stethoscope,
  CalendarClock,
  Eye,
  Sparkles,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";
import neurologieWeb from "@/assets/projects/neurologie-web.png";
import neurologieKalendar from "@/assets/projects/neurologie-kalendar.png";
import neurologieAdmin from "@/assets/projects/neurologie-admin.png";

const featuredProject = {
  icon: Stethoscope,
  name: "Neurologie MUDr. Kubová",
  category: "Zdravotnictví — Neurologická ambulance, Brno",
  tagline: "Digitální ekosystém pro moderní ordinaci",
  description:
    "Online recepce 24/7 propojená s vlastním CMS s živým náhledem. Šetří desítky hodin měsíčně sestře i lékařce a pacientům dává jistotu, že se vše vyřeší rychle a online.",
  features: [
    {
      icon: CalendarClock,
      title: "Inteligentní online recepce",
      desc: "Dynamický formulář – e-recept, nové objednání, dokumentace.",
    },
    {
      icon: Eye,
      title: "Live-Preview administrace",
      desc: "Personál vidí změny obsahu v reálném čase před uložením.",
    },
    {
      icon: Sparkles,
      title: "Smart šablony zpráv",
      desc: "Dovolená, běžný provoz nebo zavřeno – jedním kliknutím.",
    },
    {
      icon: Search,
      title: "SEO optimalizace pro Brno",
      desc: "Strukturovaná data (Schema.org) a přední pozice v Google.",
    },
  ],
  metrics: [
    { value: "−30 h", label: "administrativy měsíčně" },
    { value: "24/7", label: "online recepce" },
  ],
  stack: ["Tailwind CSS", "JavaScript", "PHP", "JSON storage", "Schema.org"],
  screenshots: [
    {
      src: neurologieWeb,
      label: "Web",
      alt: "Úvodní stránka webu Neurologie MUDr. Kubová",
    },
    {
      src: neurologieKalendar,
      label: "Kalendář",
      alt: "Kalendář ordinace s rezervacemi pacientů",
    },
    {
      src: neurologieAdmin,
      label: "Administrace",
      alt: "Administrace s živým náhledem webu",
    },
  ],
};



export function Projects() {
  const [slide, setSlide] = useState(0);
  const screenshots = featuredProject.screenshots;
  const total = screenshots.length;
  const next = () => setSlide((s) => (s + 1) % total);
  const prev = () => setSlide((s) => (s - 1 + total) % total);

  return (
    <section id="projekty" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
              Hotové projekty
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Vybrané realizace, které už běží na autopilota.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ukázka klientů, kterým jsme dodali web, rezervační systém a
              automatizace na míru.
            </p>
          </div>
        </RevealOnScroll>

        {/* Featured case study */}
        <RevealOnScroll>
          <article className="mt-12 relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <div className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-primary)] opacity-60" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              {/* Carousel */}
              <div className="lg:col-span-3 relative p-6 sm:p-8 bg-gradient-to-br from-primary/10 via-background to-background">
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

                <div
                  className="relative overflow-hidden rounded-xl border border-border shadow-[var(--shadow-elegant)] bg-background aspect-[16/9]"
                  role="region"
                  aria-roledescription="carousel"
                  aria-label="Screenshoty projektu Neurologie MUDr. Kubová"
                >
                  {screenshots.map((s, i) => (
                    <img
                      key={s.label}
                      src={s.src}
                      alt={s.alt}
                      loading="lazy"
                      aria-hidden={i !== slide}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-out ${i === slide ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  ))}

                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Předchozí snímek"
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Další snímek"
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur border border-border text-foreground hover:bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/80 backdrop-blur px-2.5 py-1 text-xs font-medium border border-border">
                    {screenshots[slide].label}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="relative mt-4 grid grid-cols-3 gap-3">
                  {screenshots.map((s, i) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => setSlide(i)}
                      aria-label={`Zobrazit ${s.label}`}
                      aria-current={i === slide}
                      className={`group relative overflow-hidden rounded-lg border bg-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${i === slide
                          ? "border-primary shadow-[var(--shadow-glow)] ring-1 ring-primary/40"
                          : "border-border hover:border-primary/40 opacity-80 hover:opacity-100"
                        }`}
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={s.src}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="px-2 py-1.5 text-[11px] font-medium text-foreground/80 text-left">
                        {s.label}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mt-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-border p-6 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[image:var(--gradient-primary)]" />
                  <div className="flex gap-4 items-start">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                      K
                    </div>
                    <div>
                      <p className="text-sm italic text-foreground/90 leading-relaxed">
                        "Od té doby, co máme tento rezervační systém, už nám v ordinaci neustále nezvoní telefon. Pacienti se objednávají sami přes online recepci a my máme mnohem víc času na samotnou péči. Je to obrovská úleva pro celou ambulanci."
                      </p>
                      <p className="mt-3 text-xs font-bold text-foreground">
                        MUDr. Dagmar Kubová
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Neurologická ambulance
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Copy */}
              <div className="lg:col-span-2 p-6 sm:p-8 lg:p-10 flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                    <featuredProject.icon className="h-3.5 w-3.5" />
                    Featured case study
                  </span>
                </div>
                <p className="mt-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {featuredProject.category}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
                  {featuredProject.name}
                </h3>
                <p className="mt-2 text-base font-medium text-foreground/90">
                  {featuredProject.tagline}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {featuredProject.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {featuredProject.features.map((f) => (
                    <li key={f.title} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <f.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{f.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {f.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {featuredProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-border bg-muted/40 p-4"
                    >
                      <div className="text-2xl font-bold tracking-tight text-primary">
                        {m.value}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featuredProject.stack.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </RevealOnScroll>


      </div>
    </section>
  );
}