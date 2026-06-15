import React, { useEffect } from "react";
import RealizacjeSection from "../components/Home/RealizacjeSection";
import { SEO } from "../components/SEO/SEO";

export default function Realizacje() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <SEO 
        title="Nasze Realizacje | Meblex" 
        description="Zobacz naszą galerię autorskich mebli na wymiar w Szczecinie. Kuchnie w stylu Japandi, prestiżowe szafy przesiąknięte rzemieślniczą doskonałością." 
      />
      <div className="pt-12 pb-12">
        <RealizacjeSection 
          title="Pełna galeria realizacji" 
          subtitle="Meble na wymiar / Portfolio"
          limit={0} 
          showAllButton={false} 
        />
      </div>
    </>
  );
}
