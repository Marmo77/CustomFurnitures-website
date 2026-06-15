import React, { useEffect } from "react";
import SubPageLayout from "./SubPageLayout";

export default function MebleLazienkowe() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const features = [
    "Materiały o podwyższonej odporności na wilgoć",
    "Zabudowy pieców, koszy na pranie i pralek",
    "Kompaktowe ukryte szuflady pod umywalką",
    "Nowoczesne blaty kompozytowe oraz HPL",
    "Estetyczne detale i lakierowane fronty",
    "Oświetlenie ambientowe w szafkach wiszących",
  ];

  const images = [
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1604709177227-3977c3565bc2?w=800&h=800&fit=crop",
  ];

  return (
    <SubPageLayout 
      title="Meble łazienkowe"
      subtitle="Relaks na wymiar"
      description="Łazienka to przestrzeń o szczególnych wymaganiach. Tworzymy eleganckie szafki pod umywalkowe oraz estetyczne wysokie słupki, dobierając materiały odznaczające się doskonałą wodoodpornością."
      features={features}
      images={images}
    />
  );
}
