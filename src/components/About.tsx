const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
                The Dune Experience
              </span>
              <div className="h-px w-20 bg-primary mt-2" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              A Desert-Inspired Haven
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Step into Dune Coffee and enjoy a luxurious oasis. Our café is inspired by
              deserts and dunes, with elegant design capturing sophistication in the sand.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every detail, from furniture to décor, is carefully crafted for a memorable
              experience. While you enjoy your carefully made specialty coffee, let the cozy
              feeling of our café relax you.
            </p>
          </div>

          {/* Right Content - Features */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-slow">
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-3">☕</div>
              <h3 className="font-semibold text-foreground mb-2">Specialty Coffee</h3>
              <p className="text-sm text-muted-foreground">
                Carefully crafted beverages using premium beans
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300 mt-8">
              <div className="text-3xl mb-3">🏜️</div>
              <h3 className="font-semibold text-foreground mb-2">Desert Vibes</h3>
              <p className="text-sm text-muted-foreground">
                Elegant décor inspired by sand dunes
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-semibold text-foreground mb-2">Luxury Interior</h3>
              <p className="text-sm text-muted-foreground">
                Instagram-worthy spaces at every corner
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300 mt-8">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-semibold text-foreground mb-2">Peaceful Atmosphere</h3>
              <p className="text-sm text-muted-foreground">
                Calming ambiance for any mood
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
