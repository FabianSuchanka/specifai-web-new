import { MessageSquare } from "lucide-react";

export function ContactSalesButton() {
  return (
    <a
      href="#kontakt"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground px-4 py-3 text-sm font-semibold shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
    >
      <MessageSquare className="h-4 w-4" />
      <span className="hidden sm:inline">Kontaktovat sales</span>
    </a>
  );
}
