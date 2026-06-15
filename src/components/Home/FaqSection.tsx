import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Ile czeka się na realizację zamówienia?",
      answer: "Czas realizacji zależy od skomplikowania projektu oraz dostępności wybranych materiałów. Standardowo dla kuchni na wymiar i większych zabudów wynosi od 6 do 9 tygodni. Dokładny termin zawsze określamy przy podpisaniu umowy."
    },
    {
      question: "Czy wycena i projekt są darmowe?",
      answer: "Tak, wstępna wycena oraz pomiar u klienta są całkowicie bezpłatne i niezobowiązujące. Projekt koncepcyjny tworzymy przed podpisaniem umowy, abyś mógł zobaczyć układ."
    },
    {
      question: "Z jakich materiałów wykonujecie meble?",
      answer: "Pracujemy na certyfikowanych komponentach. Używamy m.in. płyt laminowanych Egger i Kronospan, lakierowanego MDFu, blatów z konglomeratów, spieków kwarcowych i naturalnych fornirów. Okucia to głównie Blum i Hettich z dożywotnią gwarancją."
    },
    {
      question: "Czy mogę przyjść z własnym projektem od architekta?",
      answer: "Oczywiście! Współpracujemy z wieloma architektami i chętnie wyceniamy gotowe projekty. W razie potrzeby sugerujemy poprawki technologiczne, aby meble były nie tylko piękne, ale i trwałe."
    },
    {
      question: "Na jakim obszarze montujecie meble?",
      answer: "Naszym głównym obszarem działania jest Szczecin oraz okoliczne miejscowości (do ok. 50 km). Większe projekty realizujemy również na terenie całego województwa zachodniopomorskiego."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-foreground/5 relative font-sans scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-foreground tracking-tight leading-tight">
            Często zadawane <span className="font-semibold italic text-muted">pytania</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-[var(--color-background)] border border-foreground/5 rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:bg-[#f5f1ea] transition-colors cursor-pointer"
              >
                <span className="text-sm sm:text-base font-medium text-foreground pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-stone-500 text-sm leading-relaxed font-light border-t border-foreground/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
