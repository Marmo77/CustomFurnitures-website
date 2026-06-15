import React, { useEffect } from "react";
import SubPageLayout from "./SubPageLayout";

export default function SzafyIZabudowy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const features = [
    "Maksymalne wykorzystanie dostępnej przestrzeni",
    "Estetyczne wykończenia i nowoczesne dekory płyt",
    "Wysuwane wieszaki, szuflady na biżuterię i półki",
    "Fronty przesuwne, tradycyjne, lakierowane lub lustra",
    "Systemy cichego domyku",
    "Możliwość zintegrowania oświetlenia",
  ];

  const images = [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=800&fit=crop",
  ];

  return (
    <SubPageLayout 
      title="Szafy i zabudowy"
      subtitle="Organizacja przestrzeni"
      description="Nieważne czy potrzebujesz ogromnej garderoby typu walk-in, czy sprytnej szafy wnękowej na przedpokoju. Tworzymy inteligentne przestrzenie, które pomogą Ci zachować porządek każdego dnia."
      features={features}
      images={images}
    />
  );
}
