import React from "react";
import { Phone } from "lucide-react";
import { companyData } from "../../data/siteData";
import { useNavigate } from "react-router-dom";

export default function FloatingPhone() {
  const navigate = useNavigate();

  const scrollToKontakt = () => {
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '';
    
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById("kontakt");
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 450);
      return;
    }

    const element = document.getElementById("kontakt");
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile & Tablet Toggle */}
      <a 
        href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
        className="lg:hidden fixed bottom-6 right-6 z-40 bg-primary text-background p-4 rounded-[0.2rem] shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
        aria-label="Zadzwoń do nas"
      >
        <Phone className="w-6 h-6 stroke-[1.5] fill-current" />
      </a>

      {/* Desktop Toggle */}
      <button 
        onClick={scrollToKontakt}
        className="hidden lg:flex fixed bottom-6 right-6 z-40 bg-foreground text-background p-4 rounded-[0.2rem] shadow-xl shadow-foreground/20 hover:scale-105 transition-all duration-300 items-center justify-center group"
        aria-label="Przejdź do kontaktu"
      >
        <Phone className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform fill-current" />
      </button>
    </>
  );
}
