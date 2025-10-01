const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-foreground mb-16 md:mb-20 lowercase tracking-normal">
            thedunevibes
          </h2>

          {/* Description */}
          <p className="text-foreground text-[15px] md:text-[17px] leading-[1.6] font-normal tracking-tight">
            At Dune, we're not just about coffee; we're about creating a peaceful atmosphere and making your senses happy. While you enjoy your carefully made specialty coffee, let the cozy feeling of our café relax you. Whether you want some alone time or to chat with friends, our café is the ideal place for any mood or situation. Take in the smell of freshly ground coffee beans and listen to calming desert music as you sip your drink and feel really happy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
