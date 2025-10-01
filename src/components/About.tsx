const About = () => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center animate-fade-in">
          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl font-light text-foreground mb-16 lowercase">
            thedunevibes
          </h2>

          {/* Description */}
          <p className="text-foreground text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            At Dune, we're not just about coffee; we're about creating a peaceful atmosphere
            and making your senses happy. While you enjoy your carefully made specialty
            coffee, let the cozy feeling of our café relax you. Whether you want some alone
            time or to chat with friends, our café is the ideal place for any mood or
            situation. Take in the smell of freshly ground coffee beans and listen to calming
            desert music as you sip your drink and feel really happy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
