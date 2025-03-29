
import React, { useEffect, useState } from "react";
import EidCard from "../components/EidCard";
import Decorations from "../components/Decorations";
import Particles from "../components/Particles";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add a slight delay to ensure smooth animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-eid font-arabic">
      {/* Background particles */}
      <Particles />
      
      {/* Decorative elements */}
      <Decorations />
      
      {/* Main content container */}
      <main className={`relative z-20 min-h-screen w-full flex flex-col items-center justify-center p-6 transition-opacity duration-1000 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="w-full max-w-4xl mx-auto">
          {/* Eid greeting card */}
          <EidCard />
        </div>
      </main>

      {/* Attribution (small and non-intrusive) */}
      <div className="absolute bottom-2 right-2 text-xs text-eid-light opacity-40 hover:opacity-80 transition-opacity z-50">
        تم التصميم بواسطة المبرمج عبدالمجيد الزهراني
      </div>
    </div>
  );
};

export default Index;
