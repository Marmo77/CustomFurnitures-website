import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Filter, Calendar, MapPin, ArrowRight, ShieldCheck, X } from "lucide-react";
import { projectsData, Project } from "../../data/siteData";

interface RealizacjeSectionProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  limit?: number;
  showAllButton?: boolean;
}

export default function RealizacjeSection({
  title = "Galeria naszych unikalnych realizacji",
  subtitle = "Nasze realizacje / Szczecin",
  description = "Zobacz wyselekcjonowane meble stworzone przez naszą pracownię. Kliknij wybrane dzieło, aby poznać parametry techniczne materiałów oraz okuć.",
  limit = 6,
  showAllButton = false,
}: RealizacjeSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const categories = ["Wszystkie", "Kuchnie", "Szafy & Garderoby", "Meble Łazienkowe", "Zabudowy Pokojowe"];

  let filteredProjects = selectedCategory === "Wszystkie"
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  if (limit && limit > 0) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <section id="realizacje" className="py-20 md:py-28 bg-[var(--color-background)] border-t border-foreground/5 relative font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl mb-12 md:mb-16">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
             {subtitle}
          </span>
          <h2 className="text-4xl sm:text-5xl font-light text-foreground tracking-tight leading-tight">
            {typeof title === "string" ? (
              <>
                Galeria naszych <br />
                <span className="font-semibold italic text-muted">unikalnych realizacji</span>
              </>
            ) : title}
          </h2>
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Categories Selector Carousel / Grid */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-2 mb-12 border-b border-foreground/5 pb-6">
          <div className="flex items-center space-x-2 text-stone-400 text-xs uppercase tracking-widest sm:mr-4 mb-2 sm:mb-0">
            <Filter className="h-3.5 w-3.5 stroke-[1.5]" />
            <span>Filtruj:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full sm:w-auto text-left sm:text-center px-4 py-2.5 text-xs uppercase tracking-wider font-medium transition-all duration-300 rounded-[0.2rem] cursor-pointer ${
                selectedCategory === cat
                  ? "bg-foreground text-background shadow-md shadow-foreground/10"
                  : "text-stone-500 hover:text-foreground bg-transparent hover:bg-stone-200/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid with layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-[#fcfbfa] border border-foreground/5 overflow-hidden group hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-500 flex flex-col justify-between"
                style={{ borderRadius: "0.3rem" }}
              >
                {/* Photo representation */}
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100 cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Body Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-primary uppercase">
                      <span>{project.category}</span>
                      <span>{project.details.year}</span>
                    </div>
                    <h3 onClick={() => setSelectedProject(project)} className="text-lg font-medium text-foreground tracking-tight group-hover:text-primary transition-colors duration-300 cursor-pointer">
                      {project.title}
                    </h3>
                    <p className="text-stone-500 text-xs leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <button
                    id={`project-details-trigger-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-foreground hover:text-primary border-b border-transparent hover:border-primary/45 pb-0.5 w-max transition-colors duration-300 cursor-pointer"
                  >
                    <span>Specyfikacja techniczna</span>
                    <ArrowRight className="h-3.5 w-3.5 stroke-[1.5]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {showAllButton && (
          <div className="flex justify-center mt-12">
             <Link
                to="/realizacje"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center justify-center px-8 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-300 border border-foreground text-background bg-foreground hover:bg-[#3d332d] shadow-lg shadow-foreground/10 rounded-[0.2rem] text-center"
              >
                <span>Wszystkie realizacje</span>
                <ArrowRight className="h-4 w-4 ml-2 shrink-0 stroke-[1.5]" />
              </Link>
          </div>
        )}

      </div>

      {/* Modern Side Drawer Modal for Project Details */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[200] overflow-hidden font-sans">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-[#1c1a17]"
              />

              {/* Content Sidebar drawer wrapping right */}
              <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none">
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 260 }}
                  className="w-screen max-w-lg h-full bg-[var(--color-background)] shadow-2xl flex flex-col text-foreground pointer-events-auto"
                >
                {/* Header of Sidebar */}
                <div className="px-6 py-5 border-b border-foreground/5 bg-[#fcfbfa] flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Compass className="h-5 w-5 text-primary stroke-[1.5]" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-foreground">
                      Specyfikacja Rzemieślnicza
                    </span>
                  </div>
                  <button
                    id="close-project-modal"
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 hover:bg-stone-100 transition-colors rounded-full text-stone-500 hover:text-stone-800"
                  >
                    <X className="h-5 w-5 stroke-[1.5]" />
                  </button>
                </div>

                {/* Inner scrollbody */}
                <div className="flex-grow overflow-y-auto p-6 space-y-8">
                  
                  {/* Image Display */}
                  <div className="relative aspect-[16/9] w-full bg-stone-100 rounded-sm overflow-hidden shadow-md">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Title & Descr */}
                  <div className="space-y-3">
                    <span className="text-[10px] bg-[#f2ede4] text-primary font-mono tracking-widest uppercase px-2.5 py-1 rounded-sm w-max block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-light tracking-tight text-foreground">
                      {selectedProject.title}
                    </h2>
                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Fact sheet details */}
                  <div className="space-y-6 pt-6 border-t border-foreground/5">
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
                      Zastosowane materiały i okucia:
                    </h4>

                    {/* Specifications List */}
                    <div className="space-y-4">
                      
                      <div className="bg-[#fcfbfa] p-4.5 border border-foreground/5 rounded-sm space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block">
                          Zastosowane materiały wiodące
                        </span>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {selectedProject.details.materials.map((mat, i) => (
                            <span 
                              key={i}
                              className="bg-foreground/5 border border-foreground/10 text-stone-700 text-xs px-2.5 py-1 rounded-sm"
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#fcfbfa] p-4 border border-foreground/5 rounded-sm">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                            Systemy i okucia
                          </span>
                          <span className="text-xs font-medium text-foreground">
                            {selectedProject.details.hardware}
                          </span>
                        </div>

                        <div className="bg-[#fcfbfa] p-4 border border-foreground/5 rounded-sm">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                            Lokalizacja realizacji
                          </span>
                          <div className="flex items-center space-x-1 text-xs font-medium text-foreground">
                            <MapPin className="h-3.5 w-3.5 text-primary stroke-[1.5]" />
                            <span>{selectedProject.details.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#fcfbfa] p-4 border border-foreground/5 rounded-sm">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-1">
                            Rok produkcji
                          </span>
                          <div className="flex items-center space-x-1.5 text-xs font-medium text-foreground">
                            <Calendar className="h-3.5 w-3.5 text-primary stroke-[1.5]" />
                            <span>{selectedProject.details.year}</span>
                          </div>
                        </div>

                        <div className="bg-[#fcfbfa] p-4 border border-foreground/5 rounded-sm flex items-center space-x-2">
                          <ShieldCheck className="h-5 w-5 text-emerald-600 stroke-[1.5]" />
                          <div>
                            <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-600 block">
                              Gwarancja jakości
                            </span>
                            <span className="text-[11px] font-semibold text-emerald-800">
                              Wieloletnia gwrancja
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                {/* Footer of Sidebar */}
                <div className="p-6 bg-[#fcfbfa] border-t border-foreground/5 flex justify-stretch gap-4">
                  <button 
                    id="modal-close-action"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 py-3 text-xs uppercase tracking-widest border border-foreground/20 text-foreground font-semibold rounded-sm hover:bg-[#e8e4dc]/20 transition-all cursor-pointer"
                  >
                    Zamknij
                  </button>
                  <a 
                    href={`tel:${projectsData ? '+48500123456' : ''}`}
                    onClick={(e) => {
                       e.preventDefault();
                       setSelectedProject(null);
                       const el = document.getElementById("kontakt");
                       if (el) {
                         const y = el.getBoundingClientRect().top + window.scrollY - 80;
                         window.scrollTo({ top: y, behavior: "smooth" });
                       }
                    }}
                    className="flex-[1.5] py-3 text-xs uppercase tracking-widest bg-foreground text-background text-center font-semibold rounded-sm hover:bg-[#3d332d] transition-all shadow-md shadow-foreground/10 cursor-pointer flex items-center justify-center"
                  >
                    Zapytaj o wycenę
                  </a>
                </div>

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>, document.body)}
    </section>
  );
}
