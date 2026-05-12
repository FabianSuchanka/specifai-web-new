import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 mt-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Zásady ochrany osobních údajů</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted-foreground space-y-6">
          <p>
            Vážíme si vašeho soukromí. Na této stránce najdete informace o tom, jak
            shromažďujeme, používáme a chráníme vaše osobní údaje.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Správce údajů</h2>
          <p>Správcem vašich osobních údajů je SpecifAI s.r.o.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Jaké údaje zpracováváme</h2>
          <p>
            Zpracováváme pouze údaje, které nám sami poskytnete prostřednictvím
            kontaktních formulářů nebo při komunikaci s námi (např. jméno, e-mail, telefonní číslo).
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Účel zpracování</h2>
          <p>
            Vaše údaje využíváme primárně pro vyřízení vašich poptávek a odpovědi na vaše dotazy.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Vaše práva</h2>
          <p>
            Máte právo na přístup k údajům, opravu, výmaz či omezení zpracování. Můžete nás
            kdykoliv kontaktovat na našem e-mailu kontakt@specifai.cz.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
