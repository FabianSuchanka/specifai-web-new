## Cíl

Nahradit jeden z fiktivních projektů reálnou realizací **Neurologie MUDr. Kubová** a povýšit ji na hlavní "featured" projekt sekce `#projekty` – včetně skutečných screenshotů (web, online recepce / kalendář, admin s live-preview).

## Změny v souborech

### 1. Nahrát uživatelské screenshoty do projektu

Zkopírovat 3 nahrané obrázky do `src/assets/projects/`:

- `user-uploads://web_neurologie.png` → `src/assets/projects/neurologie-web.png`
- `user-uploads://kalendar_neurologie.png` → `src/assets/projects/neurologie-kalendar.png`
- `user-uploads://admin_neurologie.png` → `src/assets/projects/neurologie-admin.png`

### 2. `src/components/landing/Projects.tsx` – přepracovat layout

Místo 3 stejně velkých kartiček použít **featured layout**:

```text
┌─────────────────────────────────────────────┐
│ FEATURED: Neurologie MUDr. Kubová           │
│ ┌──────────────┐  ┌───────────────────────┐ │
│ │ velký        │  │ název + popis         │ │
│ │ screenshot   │  │ klíčové funkce (4×)   │ │
│ │ webu         │  │ metriky / tagy        │ │
│ └──────────────┘  │ 2 mini náhledy        │ │
│                   │ (kalendář + admin)    │ │
│                   └───────────────────────┘ │
├─────────────────────────────────────────────┤
│ Další realizace (2 menší karty vedle sebe)  │
│ [Barber Studio Praha] [FitZone Brno]        │
└─────────────────────────────────────────────┘
```

Obsah featured karty:

- **Kategorie:** Zdravotnictví — Neurologická ambulance, Brno
- **Název:** Neurologie MUDr. Kubová
- **Tagline:** "Digitální ekosystém pro moderní ordinaci"
- **Popis:** "Online recepce 24/7 propojená s vlastním CMS s živým náhledem. Šetří desítky hodin měsíčně sestře i lékařce."
- **Klíčové funkce (4 bullety s ikonami):**
  - `CalendarClock` — Inteligentní online recepce s dynamickým formulářem
  - `Eye` — Live-Preview administrace obsahu
  - `Sparkles` — Smart šablony (dovolená, běžný provoz, zavřeno)
  - `Search` — SEO optimalizace pro Brno (Schema.org)
- **Stack chipy:** Tailwind, JavaScript, PHP, JSON storage, Schema.org
- **Metriky (2 statistiky):** „−30 h měsíčně administrativy", „24/7 online recepce"
- **Hlavní vizuál:** `neurologie-web.png` v zaobleném rámu s gradient borderem
- **Mini náhledy pod popisem:** `neurologie-kalendar.png` a `neurologie-admin.png` jako dvě malé dlaždice s hover scale
- (Bez odkazu „Zobrazit živě" – necháme jen vizuál, dokud klient nepotvrdí URL.)

Reorganizace dat: vytvořit `featuredProject` (objekt) + `otherProjects` (pole) místo jednoho pole `projects`. Render je rozdělen na 2 bloky.

Klinika Harmonie (fiktivní) se odstraní – nahrazena reálnou Neurologií. Barber Studio Praha a FitZone Brno zůstávají jako sekundární ukázky.

### 3. Drobné polish detaily

- Zachovat existující `RevealOnScroll` wrappery pro plynulý nástup.
- Použít stávající design tokeny (`--gradient-primary`, `--shadow-elegant`, `border-border`, `bg-card`) – žádné hardcoded barvy.
- Featured screenshoty: `aspect-video` rám, `object-cover`, `rounded-xl border border-border shadow-[var(--shadow-elegant)]`.
- Mobile-first: featured se na `< md` skládá vertikálně (obrázek nahoře, text dole), 2 menší karty na `< md` jsou pod sebou.

## Mimo rozsah

- Žádné změny v navigaci (`#projekty` zůstává).
- Žádný odkaz na živý web (klient zatím nedodal URL).
- Žádné změny v ostatních sekcích.
