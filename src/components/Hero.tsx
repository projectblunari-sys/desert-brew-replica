import heroDunes from "@/assets/hero-dunes.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={heroDunes}
          alt="Golden sand dunes"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Content - Just DUNE text */}
      <div className="relative h-full flex items-center justify-center">
        <h1 
          className="text-[18vw] md:text-[20vw] font-bold text-white tracking-[0.05em] drop-shadow-2xl"
          style={{ 
            opacity: 1 - scrollY / 500,
            transform: `scale(${1 + scrollY / 2000})`
          }}
        >
          DUNE
        </h1>
      </div>
    </section>
  );
};

export default Hero;
