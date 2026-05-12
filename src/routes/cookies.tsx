import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 mt-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-20">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Zásady používání souborů cookies</h1>
        <div className="prose prose-sm sm:prose-base dark:prose-invert text-muted-foreground space-y-6">
          <p>
            Tato stránka používá soubory cookies k zajištění lepší uživatelské zkušenosti a analýze návštěvnosti.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Co jsou cookies?</h2>
          <p>
            Cookies jsou malé textové soubory, které do vašeho prohlížeče ukládají navštívené
            webové stránky. Pomáhají webu pamatovat si informace o vaší návštěvě.
          </p>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Jaké cookies používáme</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-foreground">Nezbytné cookies:</strong> Jsou nezbytně nutné pro základní fungování tohoto webu a nelze je vypnout.</li>
            <li><strong className="text-foreground">Analytické cookies:</strong> Pomáhají nám pochopit, jak web používáte (např. prostřednictvím Google Analytics), abychom jej mohli vylepšovat.</li>
            <li><strong className="text-foreground">Marketingové cookies:</strong> Využívají se k zobrazení relevantní reklamy.</li>
          </ul>
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">Jak spravovat cookies</h2>
          <p>Předvolby cookies můžete kdykoliv změnit v nastavení vašeho prohlížeče.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
