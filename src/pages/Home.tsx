import { SEO } from "../components/SEO/SEO";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import ProcessSection from "../components/Home/ProcessSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";
import FaqSection from "../components/Home/FaqSection";
import RealizacjeSection from "../components/Home/RealizacjeSection";
import KontaktSection from "../components/Home/KontaktSection";

export default function Home() {
  return (
    <>
      <SEO 
        title="Meblex | Nowoczesne meble na wymiar Szczecin" 
        description="Projektujemy i tworzymy luksusowe meble na wymiar w Szczecinie. Kuchnie Japandi, nowoczesne garderoby, rzemieślnicza precyzja." 
      />
      <div>
        <div id="start">
          <HeroSection />
        </div>
        <ServicesSection />
        <ProcessSection />
        <RealizacjeSection showAllButton={true} limit={6} />
        <TestimonialsSection />
        <FaqSection />
        <KontaktSection />
      </div>
    </>
  );
}
