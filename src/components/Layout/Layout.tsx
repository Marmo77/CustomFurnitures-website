import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingPhone from "./FloatingPhone";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-[var(--color-background)] text-foreground min-h-screen flex flex-col selection:bg-stone-300 selection:text-stone-900">
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
      <FloatingPhone />
    </div>
  );
}
