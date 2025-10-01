const About = () => {
  return (
    <section id="about" className="py-40 md:py-48 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-5xl md:text-7xl font-light text-foreground mb-20 lowercase tracking-wide">
            thedunevibes
          </h2>

          {/* Description */}
          <p className="text-foreground text-lg md:text-2xl leading-[1.9] font-light max-w-5xl mx-auto">
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
