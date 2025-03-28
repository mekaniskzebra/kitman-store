const steps = [
    {
      title: 'Inledande kontakt',
      description:
        'Processen inleds med ett samtal där vi samlar in information om era specifika behov och preferenser gällande match- och träningskläder. Oavsett om ni söker nya matchställ, träningskläder till hela laget eller profilkläder för ledare, erbjuder vi vår erfarenhet och guidar er genom olika alternativ baserat på funktion, passform, färg och budget.',
    },
    {
      title: 'Produktval & Offert',
      description:
        'När vi har fått en tydlig bild av era behov presenterar vi förslag från våra samarbetspartners. Vi säkerställer att valda produkter matchar er förenings identitet när det gäller stil och färg. Därefter tar vi fram en detaljerad offert, inklusive kostnader för tryck, för att ge full transparens.',
    },
    {
      title: 'Tryck & Anpassning',
      description:
        'Efter att ni har godkänt beställningen påbörjar vi tryckarbetet. Vi hanterar alla detaljer, från klubbmärken och sponsorlogotyper till spelarens namn och nummer. Vår tryckprocess är noggrant utformad för att leverera ett resultat som är både estetiskt tilltalande och hållbart.',
    },
    {
      title: 'Leverans',
      description:
        'När beställningen är färdig skickas den direkt till er klubb eller en angiven adress. Vi ser till att leverans sker snabbt och smidigt, med möjlighet att följa paketet hela vägen. Vår supportavdelning står till er tjänst om ni har frågor före, under eller efter leveransen.',
    },
  ]
  
  export default function WorkProcess() {
    return (
      <section className="py-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
          Från första kontakt till färdig produkt – så går processen till
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="text-3xl font-bold text-primary min-w-[2rem]">{index + 1}.</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  