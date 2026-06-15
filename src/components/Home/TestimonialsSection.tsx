import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Piotr K.",
      role: "Klient indywidualny",
      content: "Doskonała współpraca. Kuchnia została wykonana w terminie, a jakość dębowych frontów przewyższa to, co widziałem w popularnych studiach. Zdecydowanie polecam ekipę.",
      rating: 5
    },
    {
      name: "Anna Nowak",
      role: "Inwestorka",
      content: "Rzemieślnicza precyzja i ogromne wyczucie estetyki. Szafa do sypialni oraz zabudowa RTV zmieniły całkowicie nasz dom. Dbałość o detale na najwyższym poziomie.",
      rating: 5
    },
    {
      name: "Marek Janicki",
      role: "Architekt Wnętrz",
      content: "Od lat współpracuję z Formą & Drewno przy projektach klientów. To jedna z niewielu pracowni w Szczecinie, która bezbłędnie czyta rysunki techniczne i doradza rozwiązania technologiczne.",
      rating: 5
    }
  ];

  return (
    <section id="opinie" className="py-20 md:py-28 bg-[var(--color-background)] border-t border-foreground/5 relative font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
            Rekomendacje
          </span>
          <h2 className="text-4xl sm:text-4xl font-light text-foreground tracking-tight leading-tight">
            Co mówią o nas <span className="font-semibold italic text-muted">Klienci?</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed font-light">
            Najlepszą wizytówką naszej pracy są opinie osób, które na co dzień korzystają z mebli stworzonych przez naszą pracownię.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-foreground/5 relative group flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-[#f2ede4] opacity-50 group-hover:text-primary group-hover:opacity-20 transition-all duration-300" />
              <div>
                <div className="flex items-center space-x-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < testi.rating ? "fill-primary text-primary" : "fill-stone-200 text-stone-200"}`} />
                  ))}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed font-light mb-8 italic">
                  "{testi.content}"
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-auto pt-6 border-t border-foreground/5">
                <div className="h-10 w-10 bg-[#f2ede4] text-primary rounded-full flex items-center justify-center font-bold text-sm tracking-wider">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{testi.name}</h4>
                  <span className="text-[10px] uppercase tracking-wider text-stone-400">{testi.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
