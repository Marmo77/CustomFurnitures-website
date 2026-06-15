import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { SEO } from "../components/SEO/SEO";
import { useNavigate } from "react-router-dom";

interface SubPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  images: string[];
}

export default function SubPageLayout({ title, subtitle, description, features, images }: SubPageLayoutProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % images.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextPhoto();
    }
    if (distance < -minSwipeDistance) {
      prevPhoto();
    }
  };

  return (
    <>
      <SEO 
        title={`${title} | Meblex`} 
        description={description} 
      />
      <div className="pt-32 pb-20 md:py-40 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Content */}
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
                  {subtitle}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground tracking-tight leading-tight">
                  {title}
                </h1>
                <p className="text-stone-500 text-base sm:text-lg leading-relaxed font-light mt-6">
                  {description}
                </p>
              </div>

              <div className="space-y-4 mt-8">
                {features.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-4 border-b border-foreground/5 pb-4 last:border-0"
                  >
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Bento Grid Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, idx) => {
                // Make the first image span 2 columns
                const isFeatured = idx === 0;
                return (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className={`relative overflow-hidden rounded-sm cursor-zoom-in group bg-stone-100 ${isFeatured ? 'col-span-2 aspect-[16/9]' : 'col-span-1 aspect-square'}`}
                  >
                    <img 
                      src={src} 
                      alt={`${title} - zdjęcie ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                  </div>
                );
              })}
            </div>
            
          </div>

          {/* CTA Section */}
          <div className="mt-24 bg-white border border-foreground/5 p-12 text-center rounded-sm shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-background rounded-bl-full -mr-16 -mt-16 opacity-50" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-light text-foreground">
                Gotowy na nowe wnętrze?
              </h3>
              <p className="text-stone-500 font-light">
                Skontaktuj się z nami już teraz – chętnie doradzimy, stworzymy darmowy projekt i przygotujemy wycenę dopasowaną do Twojego budżetu i potrzeb.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    let category = "Inna";
                    if (title.toLowerCase().includes("kuch")) category = "Kuchnia";
                    else if (title.toLowerCase().includes("szafy") || title.toLowerCase().includes("zabudowy")) category = "Garderoba";
                    else if (title.toLowerCase().includes("biurow")) category = "Gabinet";
                    else if (title.toLowerCase().includes("łazien")) category = "Łazienka";

                    navigate('/', { state: { contactCategory: category } });
                    setTimeout(() => {
                      const element = document.getElementById("kontakt");
                      if (element) {
                        const y = element.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }, 450);
                  }}
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 border border-foreground text-background bg-foreground hover:bg-muted shadow-lg shadow-foreground/10 rounded-[0.2rem] cursor-pointer"
                >
                  <span>Skontaktuj się z nami</span>
                  <ArrowRight className="h-4 w-4 ml-2 shrink-0 stroke-[1.5]" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox */}
      {typeof document !== "undefined" && createPortal(
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-foreground/95 backdrop-blur-sm flex items-center justify-center touch-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button 
              onClick={() => setLightboxOpen(false)}
              className="absolute top-8 right-6 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors p-2 z-50 cursor-pointer bg-black/20 rounded-full md:bg-transparent"
            >
              <X className="h-8 w-8 stroke-[1.5]" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden sm:block cursor-pointer"
            >
              <ChevronLeft className="h-10 w-10 stroke-[1.5]" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden sm:block cursor-pointer"
            >
              <ChevronRight className="h-10 w-10 stroke-[1.5]" />
            </button>

            <div className="relative max-w-5xl max-h-[85vh] p-4 flex items-center justify-center select-none w-full h-full pointer-events-none">
              <motion.img
                key={photoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={images[photoIndex]}
                alt={`Zdjęcie powiększone ${photoIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-sm pointer-events-auto"
                draggable={false}
              />
              <div className="absolute bottom-6 md:bottom-0 text-white/70 font-mono text-xs md:text-sm transform md:translate-y-8 tracking-widest bg-black/40 md:bg-transparent px-4 py-2 rounded-full flex items-center space-x-6 md:space-x-0 pointer-events-auto shadow-xl md:shadow-none">
                <button 
                  onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                  className="sm:hidden p-1 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5 stroke-[2]" />
                </button>
                <span>{photoIndex + 1} / {images.length}</span>
                <button 
                  onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                  className="sm:hidden p-1 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5 stroke-[2]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </>
  );
}
