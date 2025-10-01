import heroDunes from "@/assets/hero-dunes.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img
          src={heroDunes}
          alt="Golden sand dunes - Dune Coffee House"
          className="w-full h-[110%] object-cover"
        />
      </div>

      {/* Content - Just DUNE text */}
      <div className="relative h-full flex items-center justify-center">
        <h1 
          className="text-[22vw] md:text-[24vw] font-extrabold text-white tracking-[0.02em]"
          style={{ 
            opacity: opacity,
            textShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}
        >
          DUNE
        </h1>
      </div>
    </section>
  );
};

export default Hero;
