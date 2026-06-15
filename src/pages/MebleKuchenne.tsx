import React, { useEffect } from "react";
import SubPageLayout from "./SubPageLayout";

export default function MebleKuchenne() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const features = [
    "Funkcjonalny layout dostosowany do Twoich potrzeb",
    "Blaty z kamienia naturalnego, kwarcu i HPL",
    "Systemy cargo, narożne i obrotowe",
    "Oświetlenie LED pod szafkami i w szufladach",
    "Ciche domyki (soft-close) i pełne wysuwanie",
    "Bezpłatny projekt 3D i wizualizacja",
  ];

  const images = [
    "https://images.unsplash.com/photo-1556910103-1c02745a8740?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=800&fit=crop",
  ];

  return (
    <SubPageLayout 
      title="Meble kuchenne"
      subtitle="Królowa domu"
      description="Kuchnia to serce każdego domu. Głęboko wierzymy, że ergonomia powinna iść w parze z doskonałym designem. Projektujemy i produkujemy funkcjonalne kuchnie na wymiar, które zachwycają formą."
      features={features}
      images={images}
    />
  );
}
