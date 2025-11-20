import HeaderHero from "./components/HeaderHero";
import PricingTable from "./components/PricingTable";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <HeaderHero />
      <PricingTable />
      <FAQ />
      <CTA />
      <footer className="pb-14 pt-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Monoform — Eficiență. Siguranță. Precizie.</p>
          <div className="flex items-center gap-4 opacity-80">
            <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" /> Uptime 99.95%</span>
            <span>ISO 27001 • GDPR</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
