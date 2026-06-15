import { motion } from "motion/react";
import { Trees, Hammer, Compass, MapPin } from "lucide-react";

export default function FeaturesBento() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  // Maps the icon name string to Lucide React component
  const getIcon = (name: string) => {
    switch (name) {
      case "Trees":
        return <Trees className="h-6 w-6 stroke-[1.2] text-primary" />;
      case "Hammer":
        return <Hammer className="h-6 w-6 stroke-[1.2] text-primary" />;
      case "Compass":
        return <Compass className="h-6 w-6 stroke-[1.2] text-primary" />;
      case "MapPin":
        return <MapPin className="h-6 w-6 stroke-[1.2] text-primary" />;
      default:
        return <Compass className="h-6 w-6 stroke-[1.2] text-primary" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)] border-t border-foreground/5 relative overflow-hidden font-sans">
      
      {/* Decorative background element representing wood veins or blueprint grids */}
      <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-stone-100 blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header with premium spacing and asymmetrical layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-20 items-end">
          <div className="md:col-span-7 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
              Dlaczego Meblex?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground tracking-tight leading-tight">
              Precyzyjne rzemiosło, <br />
              <span className="font-semibold italic text-muted">gwarancja trwałości na lata</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-stone-500 text-sm sm:text-base leading-relaxed font-light">
              Zapewniamy pełne wsparcie na każdym etapie: od dokładnego laserowego pomiaru korytarzy, wnęk czy skosów, przez fotorealistyczny projekt trójwymiarowy, po czysty i bezpieczny montaż.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          
          {/* Card 1: Large Featured Card (Materiały, 7 grid cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-7 bg-[#f2ede4] border border-foreground/5 p-8 md:p-12 flex flex-col justify-between group shadow-xl shadow-foreground/3"
            style={{ borderRadius: "0.3rem" }}
          >
            <div className="space-y-6">
              <div className="h-12 w-12 flex items-center justify-center bg-white rounded-sm shadow-md shadow-stone-300/10">
                {getIcon("Trees")}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-medium text-foreground">Materiały Wiodących Producentów</h3>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light max-w-xl">
                  Pracujemy wyłącznie na sprawdzonych komponentach marek Egger, Pfleiderer, Kaindl i Kronospan. Oferujemy fronty akrylowe anti-fingerprint, odporne na wilgoć płyty MDF do łazienek, blaty kompaktowe oraz naturalne forniry i trwałe barwione drewno dębowe ze sprawdzonych lasów.
                </p>
              </div>
            </div>
            
            {/* Visual wood grain background representation in card corners */}
            <div className="mt-8 pt-8 border-t border-stone-300/50 flex items-center justify-between text-xs text-primary font-mono">
              <span>01 / TRWAŁOŚĆ</span>
              <span>EGGER · LAKIEROWANY MDF · SOLID SURFACE</span>
            </div>
          </motion.div>

          {/* Card 2: Medium Card (Rzemiosło, 5 grid cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-5 bg-[#fcfbfa] border border-foreground/5 p-8 flex flex-col justify-between group shadow-xl shadow-stone-200/50"
            style={{ borderRadius: "0.3rem" }}
          >
            <div className="space-y-6">
              <div className="h-12 w-12 flex items-center justify-center bg-[#f2ede4] rounded-sm">
                {getIcon("Hammer")}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-medium text-foreground">Niezawodne Okucia Blum & Hettich</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light">
                  Stosujemy sprawdzone szuflady Legrabox, zawiasy Blumotion z cichym domykiem, carga kuchenne oraz windy do szaf wiszących. Twoje szafki i szuflady będą pracować cicho i lekko przez dziesięciolecia.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-foreground/5 flex items-center justify-between text-xs text-stone-400 font-mono">
              <span>02 / OKUCIA</span>
              <span>BLUM · HETTICH · PEŁNY WYSUW</span>
            </div>
          </motion.div>

          {/* Card 3: Medium Card (Indywidualność, 5 grid cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-5 bg-[#fcfbfa] border border-foreground/5 p-8 flex flex-col justify-between group shadow-xl shadow-stone-200/50"
            style={{ borderRadius: "0.3rem" }}
          >
            <div className="space-y-6">
              <div className="h-12 w-12 flex items-center justify-center bg-[#f2ede4] rounded-sm">
                {getIcon("Compass")}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg md:text-xl font-medium text-foreground">Pomiar i Projekt 3D Gratis</h3>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed font-light">
                  Każde wnętrze jest inne. Przyjedziemy ze wzornikami i doradzimy układy stref ergonomicznych. Otrzymasz przejrzystą wycenę, a po akceptacji wykonamy wizualizację 3D układu szafek.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-foreground/5 flex items-center justify-between text-xs text-stone-400 font-mono">
              <span>03 / INDYWIDUALNIE</span>
              <span>WIZUALIZACJA I ERGONOMIA</span>
            </div>
          </motion.div>

          {/* Card 4: Large Featured Card (Lokalność, 7 grid cols) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-7 bg-foreground text-background p-8 md:p-12 flex flex-col justify-between group shadow-2xl shadow-foreground/20"
            style={{ borderRadius: "0.3rem" }}
          >
            <div className="space-y-6">
              <div className="h-12 w-12 flex items-center justify-center bg-white/10 rounded-sm">
                <MapPin className="h-6 w-6 stroke-[1.2] text-[#f2ede4]" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-medium text-background">Lokalność & Szczeciński Charakter</h3>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light max-w-xl">
                  Nasz warsztat znajduje się w sercu Szczecina. Tutaj projektujemy, produkujemy i stąd przyjeżdżamy na darmowe pomiary oraz montaż. Wybierając nas, wspierasz lokalną gospodarkę stolarską i otrzymujesz bezpośredni, natychmiastowy kontakt bez pośredników.
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between text-xs text-[#e8e4dc]/70 font-mono">
              <span>04 / LOKALNOŚĆ</span>
              <span>SZCZECIN & OKOLICE</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
