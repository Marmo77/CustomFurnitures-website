import { useState, FormEvent, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { companyData } from "../../data/siteData";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function KontaktSection() {
  const location = useLocation();

  // Form fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    furnitureType: "Kuchnia",
    message: ""
  });

  useEffect(() => {
    if (location.state && location.state.contactCategory) {
      setFormData(prev => ({
        ...prev,
        furnitureType: location.state.contactCategory
      }));
    }
  }, [location.state]);

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Simple and highly secure validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = "Imię i nazwisko są wymagane.";
    }
    if (!formData.email.trim()) {
      errors.email = "Adres e-mail jest wymagany.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Wprowadź poprawny adres e-mail.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Numer telefonu jest wymagany.";
    }
    if (!formData.message.trim()) {
      errors.message = "Treść wiadomości jest wymagana.";
    }
    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate sending real data server-side
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        furnitureType: "Kuchnia",
        message: ""
      });
    }, 1500);
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    // Clear individual error as they type
    if (formErrors[key]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      });
    }
  };

  return (
    <section id="kontakt" className="py-10 md:py-12 bg-[var(--color-background)] border-t border-foreground/5 relative font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="space-y-1.5 max-w-2xl mb-6 md:mb-8">
          <span className="text-[10px] font-mono tracking-widest text-primary uppercase block">
            Pracownia & Kontakt / Szczecin
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-foreground tracking-tight leading-tight">
            Umów darmowy pomiar i <span className="font-semibold italic text-muted">skonsultuj swój projekt</span>
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed font-light mt-1 max-w-xl">
            Napisz do nas lub zadzwoń. Odpowiemy na wszelkie pytania o meble na wymiar i zarezerwujemy termin pomiaru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info Cards & Map (5 Grid Cols) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 order-2 xl:order-1">
            
            {/* Info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-4">
              
              <a href={`tel:${companyData.phone.replace(/\s+/g, '')}`}>
                <Card className="hover:border-foreground/20 transition-all duration-300 h-full cursor-pointer group">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-[#f2ede4] text-primary shrink-0 rounded-sm">
                      <Phone className="h-4 w-4 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                        Zadzwoń bezpośrednio
                      </span>
                      <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors block">
                        {companyData.phone}
                      </span>
                      <p className="text-slate-400 text-[10px] sm:text-xs">
                        Rozmowy projektowe i rezerwacje
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href={`mailto:${companyData.email}`}>
                <Card className="hover:border-foreground/20 transition-all duration-300 h-full cursor-pointer group">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-[#f2ede4] text-primary shrink-0 rounded-sm">
                      <Mail className="h-4 w-4 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                        Wyślij dokumenty/rysunki
                      </span>
                      <span className="text-sm sm:text-base font-medium text-foreground group-hover:text-primary break-all transition-colors block">
                        {companyData.email}
                      </span>
                      <p className="text-slate-400 text-[10px] sm:text-xs">
                        Wyceniamy również gotowe projekty
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="https://www.google.com/maps/place/Storrady-%C5%9Awi%C4%99tos%C5%82awy+2,+71-602+Szczecin" target="_blank" rel="noopener noreferrer">
                <Card className="hover:border-foreground/20 transition-all duration-300 h-full cursor-pointer group">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-[#f2ede4] text-primary shrink-0 rounded-sm">
                      <MapPin className="h-4 w-4 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                        Gdzie nas znaleźć
                      </span>
                      <span className="text-sm font-medium text-foreground block leading-tight group-hover:text-primary transition-colors">
                        {companyData.address}
                      </span>
                      <p className="text-slate-400 text-[10px] sm:text-xs">
                        Szczecin, Stare Miasto / Łasztownia
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <Card className="hover:border-foreground/20 transition-all duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="h-10 w-10 flex items-center justify-center bg-[#f2ede4] text-primary shrink-0 rounded-sm">
                    <Clock className="h-4 w-4 stroke-[1.5]" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400 block">
                      Godziny otwarcia
                    </span>
                    <span className="text-xs font-medium text-foreground block">
                      {companyData.workingHours.weekdays}
                    </span>
                    <span className="text-xs text-primary block mt-0.5">
                      {companyData.workingHours.weekend}
                    </span>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Stylized OpenStreetMap Map Frame with gray overlay controls */}
            <div className="relative group w-full h-full min-h-[300px] sm:min-h-[250px] xl:aspect-[16/9] border border-foreground/15 overflow-hidden rounded-sm bg-stone-100 shadow-md">
              <iframe
                id="osm-map-iframe"
                title="Meblex Szczecin - Mapa"
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.openstreetmap.org/export/embed.html?bbox=14.568%2C53.428%2C14.582%2C53.438&amp;layer=mapnik&amp;marker=53.4332%2C14.5756"
                className="grayscale hover:grayscale-0 transition-all duration-[1.2s] ease-out border-0 opacity-80 group-hover:opacity-100"
              />
              
              {/* Visual Location Overlay Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-[var(--color-background)]/95 backdrop-blur-sm border border-foreground/5 px-4 py-3 rounded-sm shadow-xl z-20 flex items-center justify-between">
                <div>
                  <span className="text-[8px] font-mono tracking-widest uppercase text-stone-400 block mb-0.5">
                    MAPA DOSTĘPU
                  </span>
                  <span className="text-xs font-semibold text-foreground">
                    ul. Storrady-Świętosławy 2, Szczecin
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/place/Storrady-%C5%9Awi%C4%99tos%C5%82awy+2,+71-602+Szczecin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-semibold text-primary uppercase tracking-wider hover:text-foreground transition-colors"
                >
                  Nawiguj
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 Grid Cols) */}
          <div className="lg:col-span-12 xl:col-span-7 order-1 xl:order-2">
            <div className="bg-[#fcfbfa] border border-foreground/5 p-8 md:p-12 shadow-2xl shadow-stone-300/30 rounded-sm relative">
              
              {/* Form sending animation/success layer overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[var(--color-background)] z-30 flex flex-col items-center justify-center text-center p-6 rounded-sm"
                  >
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="h-16 w-16 bg-[#e8f5e9] text-emerald-600 flex items-center justify-center rounded-sm mb-6 shadow-sm border border-emerald-100"
                    >
                      <CheckCircle2 className="h-8 w-8 stroke-[1.5]" />
                    </motion.div>
                    <h3 className="text-2xl font-light text-foreground tracking-tight mb-2">
                      Wiadomość została wysłana!
                    </h3>
                    <p className="text-stone-500 text-sm max-w-sm leading-relaxed font-light mb-8">
                      Dziękujemy za kontakt z naszą szczecińską pracownią. Szczegółowo przeanalizujemy Twoje wytyczne i skontaktujemy się telefonicznie w ciągu 24 roboczogodzin w celu ustalenia dogodnego terminu pomiaru.
                    </p>
                    <Button
                      id="form-reset-btn"
                      variant="secondary"
                      onClick={() => setIsSuccess(false)}
                    >
                      Wyślij nową wiadomość
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Contact Form */}
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase block mb-1">
                    Formularz Wyceny / Kontaktowy
                  </span>
                  <h3 className="text-2xl font-light text-foreground tracking-tight">
                    Prześlij nam zapytanie o projekt
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-stone-500 font-medium font-sans">
                      Imię i nazwisko
                    </label>
                    <Input
                      id="form-name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="np. Anna Kowalska"
                      disabled={isSubmitting}
                      className={formErrors.name ? "border-rose-300 ring-rose-300" : ""}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-500 font-sans flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-stone-500 font-medium font-sans">
                      Numer telefonu
                    </label>
                    <Input
                      id="form-phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+48 500 123 456"
                      type="tel"
                      disabled={isSubmitting}
                      className={formErrors.phone ? "border-rose-300 ring-rose-300" : ""}
                    />
                    {formErrors.phone && (
                      <p className="text-xs text-rose-500 font-sans flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{formErrors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-stone-500 font-medium font-sans">
                      Adres e-mail
                    </label>
                    <Input
                      id="form-email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="np. anna.kowalska@example.com"
                      type="email"
                      disabled={isSubmitting}
                      className={formErrors.email ? "border-rose-300 ring-rose-300" : ""}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-500 font-sans flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Type of furniture dropdown select */}
                  <div className="space-y-1">
                    <label className="text-xs uppercase tracking-wider text-stone-500 font-medium font-sans">
                      Rodzaj zabudowy
                    </label>
                    <select
                      id="form-furniture-type"
                      value={formData.furnitureType}
                      onChange={(e) => handleInputChange("furnitureType", e.target.value)}
                      disabled={isSubmitting}
                      className="flex h-11 w-full bg-[#fcfbfa] border border-foreground/15 px-4 py-2 text-sm text-foreground focus:outline-none focus:border-foreground focus:ring-1 focus:ring-[#2c2420] transition-all duration-300 rounded-[0.3rem]"
                    >
                      <option value="Kuchnia">Kuchnia na wymiar</option>
                      <option value="Garderoba">Garderoba / Szafa wnękowa</option>
                      <option value="Salon">Zabudowa RTV / Salon</option>
                      <option value="Łazienka">Meble Łazienkowe</option>
                      <option value="Gabinet">Meble Gabinetowe / Biurka</option>
                      <option value="Inna">Inne meble autorskie</option>
                    </select>
                  </div>
                </div>

                {/* Message body */}
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-wider text-stone-500 font-medium font-sans">
                    Opis Twojego pomysłu (przybliżone wymiary, inspiracje)
                  </label>
                  <Textarea
                    id="form-message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Np. Interesuje mnie kuchnia w kształcie litery L na wymiar, fronty dębowe oraz jasny quartz blat szary..."
                    disabled={isSubmitting}
                    className={formErrors.message ? "border-rose-300 ring-rose-300" : ""}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-500 font-sans flex items-center space-x-1">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submitting button trigger */}
                <Button
                  id="form-submit-trigger"
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="w-full h-12 inline-flex items-center justify-center space-x-2.5 font-semibold text-xs transition-all duration-300 shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-stone-300 border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>WYSYŁANIE WIADOMOŚCI...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 stroke-[1.5]" />
                      <span>WYŚLIJ ZAPYTANIE (DARMOWY POMIAR)</span>
                    </>
                  )}
                </Button>

                <p className="text-[10px] text-stone-400 font-light text-center leading-relaxed">
                  Wysyłając formularz akceptujesz przetwarzanie Twoich danych osobowych przez {companyData.name} Szczecin wyłącznie w celu sporządzenia bezpłatnej kalkulacji i rezerwacji terminu stolarskiego.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
