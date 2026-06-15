import React, { useEffect } from "react";
import SubPageLayout from "./SubPageLayout";

export default function MebleKomercyjne() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const features = [
    "Indywidualne projekty dla lokali usługowych",
    "Trwałe systemy do wyposażenia aptek i gabinetów",
    "Estetyczne długie lady do restauracji i barów",
    "Luksusowe recepcje hotelowe ze szkłem i kamieniem",
    "Odporność na intensywne użytkowanie codzienne",
    "Optymalizacja dla ruchu komunikacyjnego we wnętrzu",
  ];

  const images = [
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1556910103-1c02745a8740?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=800&fit=crop",
  ];

  return (
    <SubPageLayout 
      title="Meble komercyjne"
      subtitle="Biznes z klasą"
      description="Budujemy wizerunek Twojej firmy u podstaw. Oferujemy produkcję wyposażenia restauracji, biur, punktów handlowych. Solidne meble, które podniosą prestiż we wzroku Twoich klientów."
      features={features}
      images={images}
    />
  );
}
