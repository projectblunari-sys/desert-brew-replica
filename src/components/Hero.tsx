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
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content - Just DUNE text */}
      <div className="relative h-full flex items-center justify-center">
        <h1 className="text-[12vw] md:text-[15vw] font-bold text-white tracking-[0.3em] drop-shadow-2xl animate-fade-in-slow">
          DUNE
        </h1>
      </div>
    </section>
  );
};

export default Hero;
