import { Facebook, Instagram, Linkedin, Sparkles } from "lucide-react";

const cols = [
  {
    title: "Produkt",
    links: [
      { label: "Funkce", href: "#funkce" },
      { label: "Pro koho", href: "#pro-koho" },
      { label: "Ceník", href: "#cenik" },
      { label: "Demo", href: "#demo" },
    ],
  },
  {
    title: "Firma",
    links: [
      { label: "O nás", href: "#onas" },
      { label: "Blog", href: "#blog" },
      { label: "Kariéra", href: "#kariera" },
      { label: "Kontakt", href: "#kontakt" },
    ],
  },
  {
    title: "Právní",
    links: [
      { label: "Zásady ochrany osobních údajů", href: "/privacy" },
      { label: "Obchodní podmínky", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-8 md:gap-10">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 font-bold text-lg">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              Specif<span className="text-primary">ai</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Web, rezervace a automatizace na míru pro služby, kterým záleží na
              čase klientů.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="col-span-1">
              <div className="text-sm font-semibold">{c.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-foreground transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Specifai. Všechna práva vyhrazena.</div>
          <div>Vyrobeno s láskou v Brně.</div>
        </div>
      </div>
    </footer>
  );
}