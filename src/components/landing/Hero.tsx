import { ArrowRight, Play, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "./RevealOnScroll";
import { useEffect, useState, useRef } from "react";

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden group"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 transition-opacity duration-1000 group-hover:opacity-100 opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(1200px circle at ${mousePos.x}px ${mousePos.y}px, color-mix(in oklab, var(--primary) 12%, transparent), transparent 40%)`,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Star className="h-3.5 w-3.5 text-primary" />
            Nová generace nástrojů pro služby
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            Váš salón na{" "}
            <span className="bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
              autopilota.
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Spojujeme moderní web, chytrý rezervační systém a automatizace na míru. Získejte více
            času na to, co umíte nejlépe.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="h-12 w-full sm:w-auto px-7 text-base bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95"
            >
              <a href="#kontakt">
                Chci bezplatnou konzultaci
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full sm:w-auto px-7 text-base"
            >
              <a href="#demo">
                <Play className="mr-2 h-4 w-4" />
                Prohlédnout demo
              </a>
            </Button>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={320}>
          <div className="mt-10 inline-flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Bez závazku · Nasazení do 14 dní · GDPR ready
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
