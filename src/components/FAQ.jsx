export default function FAQ() {
  const faqs = [
    {
      q: "Cum se calculează costurile?",
      a: "Plătești în funcție de numărul de pagini procesate automat în fiecare lună. Prețul per pagină scade pe măsură ce volumul crește.",
    },
    {
      q: "Ce înseamnă o pagină procesată?",
      a: "Orice pagină încărcată și prelucrată prin OCR/AI în platformă. Exporturile sau descărcările nu sunt taxate suplimentar.",
    },
    {
      q: "Pot face upgrade oricând?",
      a: "Da. Poți trece instant la un plan superior, iar modificarea se aplică imediat pentru luna curentă.",
    },
    {
      q: "Cum funcționează anularea?",
      a: "Poți anula oricând din cont. Accesul rămâne activ până la finalul perioadei plătite.",
    },
    {
      q: "Oferiți reducere anuală?",
      a: "Da. Abonamentele anuale beneficiază de 15% reducere față de plata lunară.",
    },
  ];

  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Întrebări frecvente</h3>
            <p className="mt-3 text-slate-300">
              Transparent, fără surprize. Dacă ai alte întrebări, scrie-ne — îți răspundem rapid.
            </p>
          </div>
          <dl className="space-y-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <dt className="text-sm font-medium text-white">{item.q}</dt>
                <dd className="mt-1 text-sm text-slate-300">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
