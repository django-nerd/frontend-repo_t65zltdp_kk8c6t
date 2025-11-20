import { Check, Shield, Headset, LineChart } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    range: "0–10.000 pagini/lună",
    price: "€99/lună",
    description: "Intrare accesibilă pentru echipe mici. Începe rapid fără fricțiune.",
    features: [
      "OCR Avansat",
      "Auto-Completare AI",
      "Management CRM integrat",
      "Rapoarte dinamice",
      "Securitate enterprise",
    ],
    support: "Support basic",
    cta: "Începe Gratuit",
    highlight: false,
  },
  {
    name: "Growth",
    range: "10.000–100.000 pagini/lună",
    price: "€399/lună",
    description: "Pentru afaceri în creștere care scalează operațiunile de documente.",
    features: [
      "OCR Avansat",
      "Auto-Completare AI",
      "Management CRM integrat",
      "Rapoarte dinamice",
      "Securitate enterprise",
    ],
    support: "Support prioritar",
    cta: "Alege Growth",
    highlight: true,
  },
  {
    name: "Scale",
    range: "100.000–1.000.000 pagini/lună",
    price: "€1.499/lună",
    description: "Automatizare de volum mare. Fiabilitate, performanță și securitate.",
    features: [
      "OCR Avansat",
      "Auto-Completare AI",
      "Management CRM integrat",
      "Rapoarte dinamice",
      "Securitate enterprise",
    ],
    support: "Support premium",
    cta: "Alege Scale",
    highlight: false,
  },
  {
    name: "Enterprise",
    range: "1.000.000+ pagini/lună",
    price: "Personalizat",
    description: "SLA-uri dedicate, suport dedicat, opțiuni de cloud privat și conformitate extinsă.",
    features: [
      "OCR Avansat",
      "Auto-Completare AI",
      "Management CRM integrat",
      "Rapoarte dinamice",
      "Securitate enterprise",
    ],
    support: "Echipă dedicată",
    cta: "Vorbește cu vânzări",
    enterprise: true,
    highlight: false,
  },
];

export default function PricingTable() {
  return (
    <section id="plans" className="relative py-14 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-950" />
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Alege planul potrivit</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Prețul se calculează pe baza volumului de pagini procesate automat. Fără blocaje, fără costuri imprevizibile.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`relative rounded-2xl border ${t.highlight ? "border-blue-400/40" : "border-white/10"} bg-white/5 p-6 backdrop-blur shadow-lg shadow-black/20`}> 
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs text-white shadow-lg">
                  Recomandat
                </div>
              )}

              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                  {t.enterprise ? (
                    <Shield className="h-5 w-5 text-emerald-400" />
                  ) : t.highlight ? (
                    <LineChart className="h-5 w-5 text-blue-400" />
                  ) : (
                    <Shield className="h-5 w-5 text-slate-400" />
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-400">{t.range}</p>
              </div>

              <div className="mb-5">
                <div className="text-3xl font-semibold text-white">{t.price}</div>
                <p className="text-xs text-slate-400">Facturare lunară. Fără taxă de instalare.</p>
              </div>

              <p className="text-sm text-slate-300 mb-5">{t.description}</p>

              <ul className="space-y-2 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-200">
                    <Check className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm text-slate-200">
                  <Headset className="h-4 w-4 text-sky-400" /> {t.support}
                </li>
              </ul>

              <a href={t.enterprise ? "#contact" : "#cta"} className={`inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${t.highlight ? "bg-blue-500 text-white hover:bg-blue-400" : "bg-white/10 text-white hover:bg-white/15"}`}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
