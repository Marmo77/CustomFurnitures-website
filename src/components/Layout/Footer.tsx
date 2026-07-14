import React from "react";
import { companyData } from "../../data/siteData";
import {
  Compass,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navigateToAddigital } from "@/src/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const scrollToSection = (
    id: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    e.preventDefault();
    const isHomePage =
      window.location.pathname === "/" || window.location.pathname === "";

    if (!isHomePage) {
      navigate("/");
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
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1c1a17] text-stone-400 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Company Column */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          <a
            href="#start"
            onClick={(e) => scrollToSection("start", e)}
            className="flex items-center space-x-2 w-max cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center bg-background text-foreground rounded-sm">
              <Compass className="h-5 w-5 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold tracking-wider text-base uppercase text-background">
                {companyData.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-stone-500 -mt-1 font-mono">
                Szczecin
              </span>
            </div>
          </a>
          <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
            Tworzymy nieszablonowe i trwałe meble na wymiar. Łączymy nowoczesny
            minimalizm z pasją do naturalnego drewna i tradycją szczecińskiego
            rzemiosła.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href={companyData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center border border-white/10 hover:border-white/30 text-stone-300 hover:text-white transition-all duration-300"
              style={{ borderRadius: "0.2rem" }}
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={companyData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 flex items-center justify-center border border-white/10 hover:border-white/30 text-stone-300 hover:text-white transition-all duration-300"
              style={{ borderRadius: "0.2rem" }}
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 flex flex-col space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-background border-b border-white/5 pb-2">
            Nawigacja
          </h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <a
                href="#start"
                onClick={(e) => scrollToSection("start", e)}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                O nas
              </a>
            </li>
            <li>
              <a
                href="#realizacje"
                onClick={(e) => scrollToSection("realizacje", e)}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Nasze realizacje
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                onClick={(e) => scrollToSection("kontakt", e)}
                className="hover:text-white transition-colors duration-300 cursor-pointer"
              >
                Darmowy pomiar i kontakt
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div className="md:col-span-4 flex flex-col space-y-6">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-background border-b border-white/5 pb-2">
            Pracownia i Kontakt
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-stone-400 mt-0.5 shrink-0 stroke-[1.5]" />
              <span>{companyData.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-stone-400 shrink-0 stroke-[1.5]" />
              <a
                href={`tel:${companyData.phone.replace(/\s+/g, "")}`}
                className="hover:text-white transition-colors duration-300"
              >
                {companyData.phone}
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-stone-400 shrink-0 stroke-[1.5]" />
              <a
                href={`mailto:${companyData.email}`}
                className="hover:text-white transition-colors duration-300 break-all"
              >
                {companyData.email}
              </a>
            </li>
          </ul>
          <div className="bg-white/5 p-4 rounded-sm border border-white/5 text-xs text-stone-400 space-y-1 font-mono">
            <p className="font-medium text-stone-300">Godziny otwarcia:</p>
            <p>{companyData.workingHours.weekdays}</p>
            <p>{companyData.workingHours.weekend}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
          <p>
            © {currentYear} {companyData.name}. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex text-sm justify-center items-end gap-1">
            <p>Strona stworzona przez</p>
            <span
              className="font-bold text-primary cursor-pointer hover:underline underline-offset-3"
              onClick={navigateToAddigital}
            >
              Addigital
            </span>
          </div>
          <p className="mt-2 sm:mt-0 font-mono">
            Projekt & rzemiosło z dbałością o każdy słój.
          </p>
        </div>
      </div>
    </footer>
  );
}
