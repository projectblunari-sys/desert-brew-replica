const ScrollingLogos = () => {
  const items = ["DUNE", "1", "DUNE", "2", "DUNE", "3"];

  return (
    <div className="py-12 bg-background overflow-hidden border-y border-border">
      <div className="flex animate-scroll">
        {/* Repeat items multiple times for seamless loop */}
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            {items.map((item, index) => (
              <div key={`${setIndex}-${index}`} className="flex items-center">
                {item === "DUNE" ? (
                  <span className="text-4xl md:text-5xl font-bold text-primary px-12">
                    DUNE
                  </span>
                ) : (
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center text-2xl md:text-3xl font-light text-muted-foreground mx-8">
                    {item}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
