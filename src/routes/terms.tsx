import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 mt-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Obchodní podmínky</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted-foreground space-y-6">
          <p>
            Tyto obchodní podmínky upravují práva a povinnosti mezi společností
            SpecifAI s.r.o. a jejími klienty.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Úvodní ustanovení</h2>
          <p>Tyto podmínky se vztahují na všechny služby poskytované naší společností, zahrnující automatizaci procesů, tvorbu webů a integraci AI.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Poskytování služeb</h2>
          <p>Zavazujeme se dodávat řešení na míru v dohodnutém čase a kvalitě, jak bylo ujednáno v individuální smlouvě či objednávce.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Cenové podmínky</h2>
          <p>Ceny našich služeb jsou stanovovány individuálně nebo na základě ceníku po předchozí konzultaci. Splatnost faktur je běžně 14 dní.</p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Závěrečná ustanovení</h2>
          <p>Tyto obchodní podmínky se řídí právním řádem České republiky.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
