import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealOnScroll } from "./RevealOnScroll";

const faqs = [
  {
    q: "Kolik stojí automatizace na míru?",
    a: "Každý projekt naceňujeme individuálně po úvodní konzultaci. Cena závisí na složitosti procesů a množství integrovaných systémů.",
  },
  {
    q: "Jak rychle můžeme začít?",
    a: "První návrhy a menší automatizace typicky nasazujeme během několika dnů od schválení. U komplexnějších projektů se bavíme o týdnech.",
  },
  {
    q: "S jakými systémy umíte pracovat?",
    a: "Umíme se napojit na většinu moderních systémů, které podporují API. Často využíváme nástroje jako Make, Python skripty a AI modely (OpenAI, Claude).",
  },
  {
    q: "Komu patří vytvořené automatizace?",
    a: "Všechny vytvořené skripty a automatizační scénáře jsou plně ve vašem vlastnictví a poběží pod vašimi účty. Nejste na nás nijak vázáni.",
  },
  {
    q: "Jak vypadá následná podpora?",
    a: "Poskytujeme dlouhodobou správu a monitoring. Jsme k dispozici pro případné úpravy, rozšiřování stávajících řešení nebo okamžité řešení problémů.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">FAQ</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Často kladené otázky
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>
      </div>
    </section>
  );
}
