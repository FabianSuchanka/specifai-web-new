import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { FeatureTrinity } from "@/components/landing/FeatureTrinity";
import { IndustryGrid } from "@/components/landing/IndustryGrid";
import { Projects } from "@/components/landing/Projects";
import { AutomationProof } from "@/components/landing/AutomationProof";
import { ROICalculator } from "@/components/landing/ROICalculator";
import { Comparison } from "@/components/landing/Comparison";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PricingTeaser } from "@/components/landing/PricingTeaser";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { ContactSalesButton } from "@/components/landing/ContactSalesButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SpecifAI — Web, rezervační systém a automatizace podniku" },
      {
        name: "description",
        content:
          "Hledáte řešení pro ulehčení vašeho podnikání v ČR? Tvoříme weby a chytré rezervační systémy pro salóny, řemeslníky i kliniky. Vše na autopilot.",
      },
      {
        name: "keywords",
        content: "rezervační systém, tvorba webu, ulehčení podnikání, automatizace procesů, web pro salón, kadeřnictví rezervace, Česko, SpecifAI",
      },
      { property: "og:title", content: "SpecifAI — Usnadněte si podnikání" },
      {
        property: "og:description",
        content:
          "Zbavte se administrativy. Náš systém vám přinese nové klienty, vyřídí rezervace a ušetří desítky hodin měsíčně.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "cs_CZ" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="animate-fade-in-up">
        <main>
          <Hero />
          <FeatureTrinity />
          <IndustryGrid />
          <Projects />
          <AutomationProof />
          <ROICalculator />
          <Comparison />
          <HowItWorks />
          <PricingTeaser />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
      <ContactSalesButton />
    </div>
  );
}