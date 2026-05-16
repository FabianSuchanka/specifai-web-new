import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("specifai-cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("specifai-cookie-consent", "accepted");
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("specifai-cookie-consent", "rejected");
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-background/95 border-t border-border shadow-[0_-4px_24px_rgba(0,0,0,0.1)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground flex-1">
          <p>
            Používáme cookies, abychom zajistili správné fungování webu a analyzovali návštěvnost.
            Kliknutím na tlačítko „Souhlasím“ nám k tomu udělíte svolení. Více informací naleznete v{" "}
            <a href="/cookies" className="text-primary hover:underline font-medium">
              Zásadách používání cookies
            </a>
            .
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
          <Button variant="outline" className="flex-1 sm:flex-none" onClick={handleReject}>
            Odmítnout
          </Button>
          <Button
            className="flex-1 sm:flex-none bg-[image:var(--gradient-primary)] text-primary-foreground shadow-sm"
            onClick={handleAccept}
          >
            Souhlasím
          </Button>
        </div>
      </div>
    </div>
  );
}
