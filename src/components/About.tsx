const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-[1200px]">
        <div className="text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-foreground mb-16 md:mb-20 lowercase tracking-normal">
            thedunevibes
          </h2>

          {/* Description - No Spaces */}
          <p className="text-foreground text-[15px] md:text-[17px] leading-[1.6] font-normal tracking-tight">
            AtDune,we'renotjustaboutcoffee;we'reaboutcreatingapeacefulatmosphereandmakingyoursenseshappy.Whileyouenjoyyourcarefullymadespecialtycoffee,letthecozyfeelingofourcaférelaxyou.Whetheryouwantsomealonetimeortochatwithfriends,ourcaféistheidealplaceforanymoodorsituation.Takeinthesmelloffreshlygroundcoffeebeansandlistentocalmingdesertmusicasyousipyourdrinkandfeelreallyhappy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
