import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Compass, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { companyData } from "../../data/siteData";
import { cn } from "../../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("start");
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const isHomePage = location.pathname === '/' || location.pathname === '';
      if (!isHomePage) {
        if (location.pathname.startsWith('/uslugi')) {
          setActiveSection("uslugi");
        }
        return;
      }

      const sections = ["start", "uslugi", "proces", "realizacje", "opinie", "faq", "kontakt"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount or location change
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setIsServicesOpen(false);
    
    // Check if we are on homepage, if not we could navigate to /, but assuming it's mostly One Pager
    // Wait, if we are on /realizacje, we should navigate back. But simple anchor links work best if we just use normal links and handle click when on the same page.
    // For simplicity, let's keep it normal.
    // Actually we should navigate to `/` + `#id` if we are not on the homepage.
    const isHomePage = location.pathname === '/' || location.pathname === '';
    
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 450);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      setTimeout(() => {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 50);
    }
  };

  const servicesLinks = [
    { name: "Meble kuchenne", path: "/uslugi/meble-kuchenne" },
    { name: "Szafy i zabudowy", path: "/uslugi/szafy-i-zabudowy" },
    { name: "Meble biurowe", path: "/uslugi/meble-biurowe" },
    { name: "Meble łazienkowe", path: "/uslugi/meble-lazienkowe" },
    { name: "Meble komercyjne", path: "/uslugi/meble-komercyjne" },
  ];

  const navLinks = [
    { name: "Realizacje", path: "realizacje" },
    { name: "Kontakt", path: "kontakt" }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans border-b",
        isScrolled
          ? "bg-[var(--color-background)]/95 backdrop-blur-md border-foreground/5 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          id="nav-logo"
          href="/#start"
          onClick={(e) => scrollToSection("start", e)}
          className="flex items-center space-x-2 group-hover:scale-105 transition-transform duration-300"
        >
          <div className="flex h-10 w-10 items-center justify-center bg-foreground text-background rounded-sm shadow-md">
            <Compass className="h-5 w-5 stroke-[1.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-semibold tracking-wider text-base uppercase text-foreground">
              {companyData.name}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-stone-500 -mt-1 font-mono">
              Manufaktura Szczecin
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              onClick={(e) => scrollToSection("uslugi", e)}
              className={cn(
                "flex items-center space-x-1 py-2 text-[11px] uppercase tracking-widest font-medium transition-colors duration-300 cursor-pointer",
                activeSection === "uslugi" ? "text-foreground" : "text-foreground/65 hover:text-foreground"
              )}
            >
              <span>Usługi</span>
              <ChevronDown className="h-4 w-4" />
              {activeSection === "uslugi" && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
            
            {/* Dropdown */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-foreground/5 rounded-sm shadow-lg overflow-hidden flex flex-col py-2"
                >
                  {servicesLinks.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}
                      className="px-5 py-3 text-[11px] uppercase tracking-widest text-foreground/75 hover:text-foreground hover:bg-[var(--color-background)] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.path;
            return (
              <a
                key={link.path}
                href={`/#${link.path}`}
                onClick={(e) => scrollToSection(link.path, e)}
                className={cn(
                  "relative py-2 text-[11px] uppercase tracking-widest font-medium transition-colors duration-300",
                  isActive ? "text-foreground" : "text-foreground/65 hover:text-foreground"
                )}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          
          <a
            href="/#kontakt"
            onClick={(e) => scrollToSection("kontakt", e)}
            className="px-5 py-2.5 border border-foreground/20 hover:border-foreground text-[11px] uppercase tracking-wider font-semibold text-foreground bg-transparent transition-all duration-300 rounded-[0.2rem] ml-4 cursor-pointer"
          >
            Darmowa Wycena
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-stone-100 transition-colors rounded-full"
          aria-label="Menu"
        >
          {isOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-[var(--color-background)] border-b border-foreground/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              
              <div className="flex flex-col space-y-3">
                <span className="text-xs uppercase tracking-widest text-primary font-mono mb-2">Usługi</span>
                {servicesLinks.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}
                    className="text-sm font-medium text-foreground py-2 border-b border-stone-200/50"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.path;
                return (
                  <a
                    key={link.path}
                    href={`/#${link.path}`}
                    onClick={(e) => scrollToSection(link.path, e)}
                    className={cn(
                      "text-sm uppercase tracking-widest font-medium py-2 border-b border-stone-200/50 transition-colors mt-2",
                      isActive ? "text-foreground" : "text-stone-500 hover:text-foreground"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
              <a
                href="/#kontakt"
                onClick={(e) => scrollToSection("kontakt", e)}
                className="w-full text-center px-6 py-4 mt-6 text-sm uppercase tracking-widest font-semibold text-background bg-foreground transition-all duration-300 rounded-[0.2rem] shadow-sm cursor-pointer"
              >
                Zamów Darmową Wycenę
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
