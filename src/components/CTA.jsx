export default function CTA() {
  return (
    <section id="cta" className="relative py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="overflow-hidden rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-blue-600/20 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Câștigă timp și scapă de erori</h3>
              <p className="mt-2 text-blue-50/90">
                Începe gratuit și vezi cum Monoform automatizează fluxurile tale în câteva minute.
              </p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#plans" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-blue-50 transition-colors">
                Începe Gratuit
              </a>
              <a id="contact" href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/15 border border-white/30 text-white px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors">
                Contactează-ne
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
