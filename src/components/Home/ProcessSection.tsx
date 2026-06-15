import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "../ui/Card";
import { MessageSquare, Ruler, PenTool, Wrench } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      title: "1. Kontakt i konsultacja",
      description: "Zaczynamy od luźnej rozmowy o Twoich potrzebach. Omawiamy Twoje oczekiwania, styl i budżet projektu. Możesz wysłać nam inspiracje lub gotowy projekt do darmowej wyceny.",
      icon: MessageSquare
    },
    {
      title: "2. Darmowy pomiar",
      description: "Przyjeżdżamy na miejsce, pobieramy dokładne wymiary pomieszczenia. Zabieramy ze sobą próbniki materiałów, aby na żywo pomóc w wyborze odpowiednich dekorów i rozwiązań.",
      icon: Ruler
    },
    {
      title: "3. Projekt i akceptacja",
      description: "Na podstawie wymiarów i wytycznych tworzymy projekt i przygotowujemy finalny kosztorys. Po ewentualnych poprawkach i ostatecznej akceptacji podpisujemy umowę.",
      icon: PenTool
    },
    {
      title: "4. Produkcja i montaż",
      description: "Ruszamy z produkcją mebli w naszym warsztacie w Szczecinie. Następnie w umówionym terminie przyjeżdżamy i sprawnie, czysto montujemy wszystkie elementy u Ciebie.",
      icon: Wrench
    }
  ];

  return (
    <section id="proces" className="py-20 md:py-28 bg-[var(--color-background)] border-t border-foreground/5 relative font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
            Krok po kroku
          </span>
          <h2 className="text-4xl sm:text-4xl font-light text-foreground tracking-tight leading-tight">
            Jak działamy? <span className="font-semibold italic text-muted">Proces współpracy</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed font-light">
            Szanujemy Twój czas. Nasz proces projektowania i powstawania mebli podzieliliśmy na cztery proste i czytelne kroki, bez ukrytych gwiazdek.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white pb-6 pt-2 px-2 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-background)] rounded-bl-full -mr-4 -mt-4 opacity-50 transition-transform group-hover:scale-110" />
                  <CardContent className="pt-6 relative z-10 flex flex-col space-y-4">
                    <div className="h-10 w-10 shrink-0 bg-[#fcefe3] text-primary rounded-sm flex items-center justify-center">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
