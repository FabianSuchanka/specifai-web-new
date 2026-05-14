import { useState } from "react";
import { ArrowRight, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "./RevealOnScroll";

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: "Nevím, chci poradit",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const apiUrl = "/api/contact";

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.status === "success") {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", package: "Nevím, chci poradit", message: "" });
      } else {
        setErrorMsg(result.message || "Něco se pokazilo, zkuste to prosím znovu.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Nepodařilo se odeslat zprávu. Zkontrolujte připojení a zkuste to znovu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Opravený gradient bez color-mix pro prevenci zamrzání v Safari */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none transform-gpu" 
        style={{ background: "radial-gradient(circle, rgba(var(--primary-rgb, 99,102,241), 0.08) 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Copy & Info */}
        <RevealOnScroll>
          <div className="max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Připraveni přepnout svůj salón na{" "}
              <span className="bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
                autopilota?
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Nechte nám na sebe kontakt a my se vám ozveme. Probereme, co vás trápí, a navrhneme řešení přímo na míru vašemu podnikání.
            </p>

            <div className="mt-10 space-y-5">
              <a href="mailto:fabian.suchanka@specifai.cz" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="h-12 w-12 rounded-2xl bg-muted/50 border border-border flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Napište nám</div>
                  <div className="text-sm">fabian.suchanka@specifai.cz</div>
                </div>
              </a>
              <a href="tel:+420773952636" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="h-12 w-12 rounded-2xl bg-muted/50 border border-border flex items-center justify-center text-primary group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">Zavolejte nám</div>
                  <div className="text-sm">+420 773 952 636</div>
                </div>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Side: Form */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-[var(--shadow-elegant)] relative overflow-hidden transform-gpu">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-[image:var(--gradient-primary)]" />
          
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Děkujeme za zprávu!</h3>
              <p className="mt-2 text-muted-foreground max-w-sm">
                Váš dotaz jsme úspěšně přijali. Během několika hodin se vám ozveme zpět na zadaný kontakt.
              </p>
              <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
                Poslat další zprávu
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" autoComplete="off">
              <div>
                <h3 className="text-xl font-bold mb-6">Nezávazná poptávka</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Jméno a příjmení</label>
                  <input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    type="text" 
                    autoComplete="off"
                    data-1p-ignore="true"
                    className="w-full h-11 rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground/50 transition-colors" 
                    placeholder="Jan Novák" 
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Telefon</label>
                  <input 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel" 
                    autoComplete="off"
                    data-1p-ignore="true"
                    className="w-full h-11 rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground/50 transition-colors" 
                    placeholder="+420 123 456 789" 
                  />
                </div>
              </div>
              
              <div className="space-y-2 text-left">
                <label htmlFor="email" className="text-sm font-medium text-foreground/80">E-mail</label>
                <input 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  type="email" 
                  autoComplete="off"
                  data-1p-ignore="true"
                  className="w-full h-11 rounded-lg border border-input bg-background px-4 py-2 text-sm placeholder:text-muted-foreground/50 transition-colors" 
                  placeholder="jan@novak.cz" 
                />
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="package" className="text-sm font-medium text-foreground/80">O jaký balíček máte zájem?</label>
                <select 
                  id="package" 
                  name="package"
                  value={formData.package}
                  onChange={handleInputChange}
                  autoComplete="off"
                  data-1p-ignore="true"
                  className="w-full h-11 rounded-lg border border-input bg-background px-4 py-2 text-sm text-foreground appearance-none cursor-pointer transition-colors"
                >
                  <option value="Nevím, chci poradit">Nevím, chci poradit</option>
                  <option value="Start (490 Kč/měsíc)">Start (490 Kč/měsíc)</option>
                  <option value="Standard (890 Kč/měsíc)">Standard (890 Kč/měsíc)</option>
                  <option value="Autopilot (1 290 Kč/měsíc)">Autopilot (1 290 Kč/měsíc)</option>
                </select>
              </div>

              <div className="space-y-2 text-left">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">S čím vám můžeme pomoci?</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  autoComplete="off"
                  data-1p-ignore="true"
                  className="w-full min-h-[120px] rounded-lg border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/50 resize-y transition-colors" 
                  placeholder="Dobrý den, potřeboval bych rezervační systém a nový web pro můj salón..." 
                />
              </div>

              {errorMsg && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive font-medium text-center">
                  {errorMsg}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full h-12 bg-[image:var(--gradient-primary)] text-primary-foreground text-base shadow-sm mt-2 disabled:opacity-70 transition-transform active:scale-[0.98]">
                {loading ? "Odesílám..." : "Odeslat zprávu"}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Odesláním formuláře souhlasíte se <a href="/privacy" className="underline hover:text-foreground">zpracováním osobních údajů</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}