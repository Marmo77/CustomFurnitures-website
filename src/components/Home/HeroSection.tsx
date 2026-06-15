import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Compass } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
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

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-background)] overflow-hidden pt-28 pb-16 md:pb-24">
      {/* Decorative vertical lines representing geometric architectural blueprints */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[1px] bg-foreground/5 hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-foreground/3 hidden lg:block" />
      <div className="absolute top-0 bottom-0 left-[90%] w-[1px] bg-foreground/5 hidden lg:block" />
      
      {/* Absolute faint background text */}
      <div className="absolute right-0 bottom-0 translate-y-12 translate-x-12 select-none opacity-[0.02] text-foreground font-sans font-bold text-[15rem] leading-none pointer-events-none tracking-tighter">
        SZCZECIN
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Text Content (7 grid cols on large screen) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          {/* Subtle Label with organic color */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center space-x-2 text-primary font-mono tracking-widest text-xs uppercase"
          >
            <Compass className="h-4 w-4 stroke-[1.5] animate-spin-slow" />
            <span>Solidne meble na wymiar · Szczecin i okolice</span>
          </motion.div>

          {/* Heading - asymmetrical font weight/style pairing */}
          <motion.h1 
            variants={itemVariants}
            className="font-sans text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.08]"
          >
            Meble na wymiar<br />
            <span className="font-light italic text-muted">stworzone dla Twojego domu</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            variants={itemVariants}
            className="text-stone-500 font-sans text-base sm:text-lg max-w-xl leading-relaxed font-light"
          >
            Projektujemy i produkujemy solidne kuchnie, pojemne szafy, garderoby oraz meble łazienkowe. Łączymy nowoczesny design z niezawodnymi systemami, dając gwarancję bezawaryjnego użytkowania przez lata. Solidnie, terminowo i z dbałością o detale.
          </motion.p>

          {/* Buttons/CTA - custom layout */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
          >
            <a
              href="#realizacje"
              onClick={(e) => scrollToSection("realizacje", e)}
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border border-foreground text-background bg-foreground hover:bg-[#3d332d] shadow-lg shadow-foreground/10 rounded-[0.2rem] text-center cursor-pointer"
            >
              <span>Zobacz nasze realizacje</span>
              <ArrowRight className="h-4 w-4 ml-2 shrink-0 stroke-[1.5]" />
            </a>

            <a
              href="#kontakt"
              onClick={(e) => scrollToSection("kontakt", e)}
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border border-foreground/25 text-foreground hover:bg-[#e8e4dc]/20 hover:border-foreground/50 rounded-[0.2rem] text-center cursor-pointer"
            >
              <span>Darmowy pomiar i projekt</span>
            </a>
          </motion.div>

          {/* Key values fast highlight */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-foreground/10 text-stone-500 text-xs font-sans tracking-wide"
          >
            <div>
              <span className="block font-medium text-foreground text-lg mb-0.5">Lokalna</span>
              Produkcja w Szczecinie
            </div>
            <div>
              <span className="block font-medium text-foreground text-lg mb-0.5">Solidne</span>
              Okucia i sprawdzone materiały
            </div>
            <div>
              <span className="block font-medium text-foreground text-lg mb-0.5">Darmowy</span>
              pomiar oraz wycena mebli
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Asymmetric, Overlapping Art Collage (5 grid cols) */}
        <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5]">
            
            {/* Background earthy outline frame */}
            <div className="absolute -inset-4 border border-foreground/10 rounded-[0.3rem] -z-10 translate-x-4 translate-y-4" />

            {/* Main Image with customized subtle hover offset */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="w-full h-full overflow-hidden shadow-2xl shadow-stone-400/30 rounded-[0.2rem] relative z-20 group"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                alt="Meblex rzemiosło stolarskie dąb i orzech"
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2420]/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating Overlap Card representing carpentry blueprints */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="absolute -right-4 md:-right-8 -bottom-6 bg-[#fcfbfa] border border-foreground/10 px-6 py-5 shadow-xl shadow-stone-800/10 z-30 max-w-[210px] rounded-sm hidden sm:block"
            >
              <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">
                Wzorniki na spotkaniu
              </span>
              <p className="font-sans text-xs leading-relaxed text-foreground font-light">
                Przyjedziemy na darmowy pomiar z próbkami materiałów i na żywo doradzimy najlepsze rozwiązania.
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
