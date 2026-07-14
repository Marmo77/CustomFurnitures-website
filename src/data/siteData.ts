export const companyData = {
  name: "Meblex",
  city: "Szczecin",
  address: "ul. Storrady-Świętosławy 2, 71-602 Szczecin",
  phone: "+48 500 123 456",
  email: "kontakt@meblex.szczecin.pl",
  workingHours: {
    weekdays: "Poniedziałek - Piątek: 08:00 - 17:00",
    weekend: "Sobota: 09:00 - 13:00 (tylko umówione pomiary)",
  },
  socials: {
    instagram: "https://instagram.com/meblexszczecin",
    facebook: "https://facebook.com/meblexszczecin",
  },
  seo: {
    defaultTitle: "Meblex | Nowoczesne meble na wymiar Szczecin",
    defaultDescription:
      "Projektujemy i tworzymy autorskie meble na wymiar. Kuchnie, garderoby i zabudowy premium w Szczecinie i okolicach.",
  },
};

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  details: {
    materials: string[];
    hardware: string;
    location: string;
    year: string;
  };
}

export const projectsData: Project[] = [
  {
    id: "kuchnia-japandi",
    title: "Nowoczesna Kuchnia w stylu Japandi",
    category: "Kuchnie",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&h=800&fit=crop",
    description:
      "Funkcjonalna kuchnia otwarta na salon. Fronty wykonane ze starannie dopasowanego dębu naturalnego w połączeniu z lakierowanym MDF w kolorze ciepłego alabastru. Blaty wykonane z ultra-trwałego konglomeratu kwarcowego odpornego na zarysowania.",
    details: {
      materials: [
        "Dąb naturalny lakierowany",
        "MDF lakierowany mat",
        "Konglomerat kwarcowy Silestone",
      ],
      hardware: "Systemy Blum Legrabox z cichym domykiem, zawiasy Blumotion",
      location: "Szczecin, Pogodno",
      year: "2025",
    },
  },
  {
    id: "garderoba-premium",
    title: "Szafa Wnękowa i Garderoba na Wymiar",
    category: "Szafy & Garderoby",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop",
    description:
      "Pojemna i doskonale zorganizowana garderoba. Przeszklenia w cienkich czarnych profilach aluminiowych chronią od kurzu, a wewnętrzne wykończenie w strukturze głębokiego orzecha z pełnym oświetleniem LED ułatwia codzienne użytkowanie.",
    details: {
      materials: [
        "Płyta laminowana strukturalna Egger",
        "Szkło hartowane dymione",
        "Aluminiowe profile czarne",
      ],
      hardware: "Prowadnice szuflad tandem z dociągiem Salice",
      location: "Szczecin, Bezrzecze",
      year: "2025",
    },
  },
  {
    id: "salon-biblioteka",
    title: "Zabudowa Ściany RTV i Regał",
    category: "Zabudowy Pokojowe",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description:
      "Minimalistyczna zabudowa salonu z ukrytym systemem kabli. Połączenie matowej czerni o właściwościach anti-fingerprint z elementami w kolorze ciepłego dębu. Idealne spasowanie od podłogi aż po sam sufit.",
    details: {
      materials: [
        "MDF mat PerfectSense",
        "Dąb naturalny fornir",
        "Stal malowana proszkowo-czarny mat",
      ],
      hardware: "System drzwi przesuwno-składanych Hettich WingLine",
      location: "Szczecin, Gumieńce",
      year: "2024",
    },
  },
  {
    id: "gabinet-dąb",
    title: "Meble Biurowe i Biurko Dębowe",
    category: "Zabudowy Pokojowe",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=800&fit=crop",
    description:
      "Gabinet zaprojektowany z myślą o pracy zdalnej. Podwieszany blat z litego dębu wykończony pro-ekologicznym olejowoskiem odpornym na plamy z kawy, wraz ze zintegrowanymi gniazdami prądowymi i maskownicami przewodów.",
    details: {
      materials: [
        "Lite drewno dębowe klasa A",
        "MDF lakierowany półmat",
        "Profile kablowe Alu",
      ],
      hardware: "Dociągi szuflad z amortyzacją Hettich",
      location: "Szczecin, Centrum",
      year: "2025",
    },
  },
  {
    id: "apartament-rezydencja",
    title: "Zabudowa Przedpokoju z Drzwiami Ukrytymi",
    category: "Zabudowy Pokojowe",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    description:
      "Jednolity ciąg zabudowy przedpokoju zintegrowany z szafką na buty, siedziskiem tapicerowanym i przejściem do garderoby poprzez drzwi ukryte licowane z frontami szafy.",
    details: {
      materials: [
        "Fornir dębowy",
        "Lustro grafitowe",
        "Tkanina obiciowa hydrofobowa Fargotex",
      ],
      hardware: "Zawiasy ukryte i systemy push-to-open Blum",
      location: "Szczecin, Łasztownia",
      year: "2024",
    },
  },
  {
    id: "lazienka-tek",
    title: "Szafka pod Umywalkę i Zabudowa Pralki",
    category: "Meble Łazienkowe",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=800&fit=crop",
    description:
      "Wilgocioodporna szafka z głębokimi szufladami pod dwustanowiskową umywalkę. Fornir dębowy zabezpieczony specjalnym lakierem jachtowym chroniącym przed bezpośrednim kontaktem z wodą.",
    details: {
      materials: [
        "Fornir dębowy wilgocioodporny",
        "Blat Solid Surface (mineralno-akrylowy)",
        "Płyta wilgocioodporna MDF MR",
      ],
      hardware: "Szuflady Blum Legrabox z dożywotnią gwarancją",
      location: "Szczecin, Warszewo",
      year: "2025",
    },
  },
];

export const teamValues = [
  {
    title: "Szlachetny Materiał",
    description:
      "Używamy wyłącznie certyfikowanych drewien, luksusowych fornirów i selekcjonowanych płyt. Nie uznajemy kompromisów jakościowych i dbamy o pochodzenie każdego elementu.",
    icon: "Trees",
  },
  {
    title: "Tradycyjne Rzemiosło",
    description:
      "Łączymy precyzję nowoczesnych maszyn stolarskich z ręczną, rzemieślniczą obróbką detali. Każde złącze, krawędź i powłoka olejowana jest sprawdzana przez mistrza stolarstwa.",
    icon: "Hammer",
  },
  {
    title: "Indywidualne Projekty",
    description:
      "Każdą zabudowę projektujemy od zera, wsłuchując się w styl życia domowników. Tworzymy bryły, które idealnie dopełniają architekturę wnętrza.",
    icon: "Compass",
  },
  {
    title: "Lokalna Produkcja",
    description:
      "Nasz warsztat znajduje się w Szczecinie. Tutaj projektujemy, produkujemy i stąd przyjeżdżamy na darmowe pomiary i precyzyjny montaż u klientów.",
    icon: "MapPin",
  },
];
