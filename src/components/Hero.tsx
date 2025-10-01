import heroDunes from "@/assets/hero-dunes.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroDunes}
          alt="Golden sand dunes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center animate-fade-in-slow">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-white tracking-[0.2em] mb-6 drop-shadow-2xl">
            DUNE
          </h1>
          <p className="text-white/90 text-lg sm:text-xl md:text-2xl font-light tracking-wider max-w-2xl mx-auto px-4">
            A Luxurious Desert Oasis
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
