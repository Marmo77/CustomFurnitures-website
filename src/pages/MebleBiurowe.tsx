import React, { useEffect } from "react";
import SubPageLayout from "./SubPageLayout";

export default function MebleBiurowe() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const features = [
    "Ergonomia stanowiska pracy",
    "Solidne biurka na stelażach podnoszonych",
    "Wytrzymałe półki i obszerne regały na dokumenty",
    "Zintegrowane przelotki na kable techniczne",
    "Dowolność w doborze profili i lakierów",
    "Szuflady w formie kontenerów podblatowych",
  ];

  const images = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop",
  ];

  return (
    <SubPageLayout 
      title="Meble biurowe"
      subtitle="Twoje miejsce pracy"
      description="Odpowiednio urządzona przestrzeń sprzyja dobrej i kreatywnej pracy. Projektujemy funkcjonalne gabinety domowe oraz wyposażamy całe biura stawiając na najwyższą ergonomię."
      features={features}
      images={images}
    />
  );
}
