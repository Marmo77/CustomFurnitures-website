# 🪑 Meblex — Custom Furnitures Mockup

> **Nowoczesny mockup strony internetowej** dla firmy Meblex zajmującej się produkcją luksusowych mebli na wymiar w Szczecinie. Projekt stworzony w React + TypeScript z integracją Google Gemini AI.

---

## 📋 Spis treści

- [O projekcie](#o-projekcie)
- [Funkcje](#funkcje)
- [Stos technologiczny](#stos-technologiczny)
- [Struktura HTML5](#struktura-html5)
- [Instalacja](#instalacja)
- [Uruchomienie](#uruchomienie)
- [Zmienne środowiskowe](#zmienne-środowiskowe)
- [Struktura projektu](#struktura-projektu)
- [Autor](#autor)

---

## O projekcie

**Meblex** to mockup strony internetowej dla firmy tworzącej luksusowe meble na wymiar — kuchnie w stylu Japandi, nowoczesne garderoby i zabudowy rzemieślnicze. Projekt demonstracyjny zbudowany z myślą o responsywności, dostępności i nowoczesnym designie.

🌐 **Podgląd live:** [ai.studio/apps/1a224aa1-f55b-4d0a-8515-180bba6dca68](https://ai.studio/apps/1a224aa1-f55b-4d0a-8515-180bba6dca68)

---

## Funkcje

- ✅ Pełny mockup strony firmowej dla stolarni / meblarni
- ✅ Animacje z biblioteką **Motion**
- ✅ Integracja z **Google Gemini AI** (asystent / chatbot)
- ✅ Routing wielostronicowy (React Router v7)
- ✅ SEO-ready z meta tagami Open Graph i `react-helmet-async`
- ✅ Responsywny design oparty na **Tailwind CSS v4**
- ✅ Semantyczny HTML5 z dostępnością (ARIA)

---

## Stos technologiczny

| Warstwa | Technologia |
|---|---|
| Frontend Framework | React 19 |
| Język | TypeScript 5.8 |
| Bundler | Vite 6 |
| Style | Tailwind CSS 4 |
| Animacje | Motion 12 |
| Routing | React Router DOM 7 |
| AI | Google Gemini (`@google/genai`) |
| Ikony | Lucide React |
| SEO | react-helmet-async |
| Server (SSR/proxy) | Express 4 |

---

## Struktura HTML5

Projekt wykorzystuje **semantyczne elementy HTML5** do budowy struktury strony. Poniżej przedstawiony jest szkielet układu strony:

```html
<!doctype html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- SEO & Open Graph -->
    <meta name="description"
      content="Meblex - Projektujemy i tworzymy luksusowe meble na wymiar w Szczecinie." />
    <meta property="og:title" content="Meblex | Nowoczesne meble na wymiar Szczecin" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pl_PL" />

    <title>Meblex | Nowoczesne meble na wymiar Szczecin</title>
  </head>

  <body>
    <!-- Punkt montowania aplikacji React -->
    <div id="root"></div>

    <!-- Wejście aplikacji -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Elementy semantyczne HTML5 użyte w projekcie

Poniżej opisane są kluczowe elementy HTML5 stosowane w komponentach React:

```html
<!-- Nagłówek strony z nawigacją -->
<header role="banner">
  <nav aria-label="Nawigacja główna">
    <ul>
      <li><a href="/">Strona główna</a></li>
      <li><a href="/portfolio">Nasze realizacje</a></li>
      <li><a href="/kontakt">Kontakt</a></li>
    </ul>
  </nav>
</header>

<!-- Sekcja hero -->
<main id="main-content">
  <section aria-labelledby="hero-heading">
    <h1 id="hero-heading">Meble na wymiar Szczecin</h1>
    <p>Rzemieślnicza precyzja. Luksusowy design.</p>
  </section>

  <!-- Oferta / karty produktów -->
  <section aria-labelledby="offer-heading">
    <h2 id="offer-heading">Nasze realizacje</h2>
    <article>
      <figure>
        <img src="kuchnia-japandi.jpg" alt="Kuchnia w stylu Japandi" />
        <figcaption>Kuchnia Japandi – projekt 2024</figcaption>
      </figure>
      <h3>Kuchnie na wymiar</h3>
      <p>Minimalizm w najczystszej formie.</p>
    </article>
  </section>

  <!-- Formularz kontaktowy -->
  <section aria-labelledby="contact-heading">
    <h2 id="contact-heading">Skontaktuj się z nami</h2>
    <form action="/kontakt" method="post" novalidate>
      <label for="name">Imię i nazwisko</label>
      <input type="text" id="name" name="name" required autocomplete="name" />

      <label for="email">Adres e-mail</label>
      <input type="email" id="email" name="email" required autocomplete="email" />

      <label for="message">Wiadomość</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Wyślij wiadomość</button>
    </form>
  </section>
</main>

<!-- Stopka -->
<footer role="contentinfo">
  <address>
    <strong>Meblex Szczecin</strong><br />
    ul. Rzemieślnicza 12, 70-001 Szczecin<br />
    <a href="tel:+48123456789">+48 123 456 789</a>
  </address>
  <small>&copy; 2024 Meblex. Wszelkie prawa zastrzeżone.</small>
</footer>
```

---

## Instalacja

### Wymagania

- **Node.js** `>= 18.x`
- **npm** `>= 9.x`
- Klucz API Google Gemini

### Kroki

```bash
# 1. Sklonuj repozytorium
git clone https://github.com/Marmo77/Custom-Furnitures-mockup.git
cd Custom-Furnitures-mockup

# 2. Zainstaluj zależności
npm install
```

---

## Uruchomienie

```bash
# Tryb deweloperski (http://localhost:3000)
npm run dev

# Budowanie produkcyjne
npm run build

# Podgląd produkcji
npm run preview

# Sprawdzenie typów TypeScript
npm run lint

# Czyszczenie artefaktów budowania
npm run clean
```

---


## Struktura projektu

```
Custom-Furnitures-mockup/
├── src/                    # Kod źródłowy aplikacji
│   └── main.tsx            # Punkt wejścia React
├── index.html              # Szablon HTML5 (SEO + meta tagi)
├── package.json            # Zależności projektu
├── tsconfig.json           # Konfiguracja TypeScript
├── vite.config.ts          # Konfiguracja Vite
├── metadata.json           # Metadane projektu
├── .gitignore
└── README.md
```

---

## Autor

**Marmo77**
🔗 [github.com/Marmo77](https://github.com/Marmo77)

---

<sub>Projekt zbudowany z pomocą Google AI Studio · React · TypeScript · Tailwind CSS</sub>
