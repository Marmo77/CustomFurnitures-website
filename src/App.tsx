import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "motion/react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Realizacje from "./pages/Realizacje";
import MebleKuchenne from "./pages/MebleKuchenne";
import SzafyIZabudowy from "./pages/SzafyIZabudowy";
import MebleBiurowe from "./pages/MebleBiurowe";
import MebleLazienkowe from "./pages/MebleLazienkowe";
import MebleKomercyjne from "./pages/MebleKomercyjne";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="w-full flex-grow flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/realizacje" element={<Realizacje />} />
          <Route path="/uslugi/meble-kuchenne" element={<MebleKuchenne />} />
          <Route path="/uslugi/szafy-i-zabudowy" element={<SzafyIZabudowy />} />
          <Route path="/uslugi/meble-biurowe" element={<MebleBiurowe />} />
          <Route path="/uslugi/meble-lazienkowe" element={<MebleLazienkowe />} />
          <Route path="/uslugi/meble-komercyjne" element={<MebleKomercyjne />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}
