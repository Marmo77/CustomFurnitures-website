import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChefHat, Grid, Briefcase, Bath, Building2, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Meble kuchenne",
      description: "Projektujemy i tworzymy funkcjonalne, nowoczesne kuchnie dopasowane do Twojego stylu życia. Od pomysłu po finalny montaż z użyciem najwyższej jakości materiałów i okuć.",
      icon: ChefHat,
      path: "/uslugi/meble-kuchenne"
    },
    {
      title: "Szafy i zabudowy",
      description: "Przestronne garderoby i szafy wnękowe wykorzystujące każdy centymetr przestrzeni. Inteligentne systemy przechowywania ułatwiające codzienne życie.",
      icon: Grid,
      path: "/uslugi/szafy-i-zabudowy"
    },
    {
      title: "Meble biurowe",
      description: "Ergonomiczne biurka i regały do domowego gabinetu lub przestrzeni firmowej. Estetyka, która sprzyja skupieniu i efektywnej pracy.",
      icon: Briefcase,
      path: "/uslugi/meble-biurowe"
    },
    {
      title: "Meble łazienkowe",
      description: "Odporne na wilgoć szafki pod umywalkę i zabudowy pralek, łączące piękno naturalnych faktur z najwyższą trwałością w wymagającym środowisku.",
      icon: Bath,
      path: "/uslugi/meble-lazienkowe"
    },
    {
      title: "Meble komercyjne",
      description: "Wyposażenie sklepów, restauracji i hoteli. Reprezentacyjne lady recepcyjne oraz trwałe zabudowy, które budują wizerunek wygody i prestiżu.",
      icon: Building2,
      path: "/uslugi/meble-komercyjne"
    }
  ];

  return (
    <section id="uslugi" className="py-20 md:py-28 bg-white border-t border-foreground/5 relative font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl mb-12 md:mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
            Nasze Usługi / Oferta
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground tracking-tight leading-tight">
            Co możemy <span className="font-semibold italic text-muted">dla Ciebie zrobić?</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed font-light">
            Oferujemy kompleksowe wykonanie mebli na wymiar. Specjalizujemy się w nowoczesnym i funkcjonalnym podejściu do stolarstwa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[var(--color-background)] p-8 md:p-10 rounded-sm border border-foreground/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              <div className="h-12 w-12 bg-white text-primary rounded-sm flex items-center justify-center mb-6 shadow-sm border border-foreground/5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-medium text-foreground tracking-tight mb-3">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light mb-6 flex-grow">
                {service.description}
              </p>
              <div className="mt-auto pt-4 flex items-center justify-start border-t border-foreground/5">
                <Link to={service.path} className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-300">
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="h-4 w-4 ml-2 shrink-0 stroke-[1.5]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
