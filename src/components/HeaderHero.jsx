import { Shield, Zap, BarChart3, Check } from "lucide-react";

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(56,189,248,0.25),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(99,102,241,0.25),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <Shield className="h-3.5 w-3.5 text-emerald-400" /> Securitate enterprise • Conform GDPR
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Prețuri simple pentru automatizarea documentelor
          </h1>
          <p className="mt-4 text-slate-300 text-lg max-w-3xl mx-auto">
            Plătești în funcție de volumul de pagini procesate automat. Fără costuri ascunse. Cu cât procesezi mai mult, cu atât prețul per pagină scade.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-400 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-blue-500/20 transition-colors">
              Începe Gratuit
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 text-white px-5 py-3 text-sm font-medium border border-white/10 transition-colors">
              Contactează-ne
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <TrustItem icon={<Zap className="h-4 w-4 text-amber-400" />} title="Rapid" desc="Documente instant, fără stres" />
            <TrustItem icon={<BarChart3 className="h-4 w-4 text-sky-400" />} title="Eficient" desc="Câștigi timp și reduci costurile" />
            <TrustItem icon={<Check className="h-4 w-4 text-emerald-400" />} title="Precis" desc="Eliminăm ghicitul din ecuație" />
          </div>
        </div>
      </div>
    </header>
  );
}

function TrustItem({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left backdrop-blur supports-[backdrop-filter]:bg-white/5">
      <div className="flex items-center gap-2 text-slate-200 text-sm">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <p className="mt-1 text-xs text-slate-400">{desc}</p>
    </div>
  );
}
