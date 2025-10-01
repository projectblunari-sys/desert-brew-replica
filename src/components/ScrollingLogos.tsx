const ScrollingLogos = () => {
  return (
    <div className="py-8 bg-background overflow-hidden border-y border-border/40">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            <span className="text-3xl md:text-4xl font-bold text-primary px-8 tracking-wider">
              DUNE
            </span>
            <svg className="w-8 h-8 md:w-10 md:h-10 mx-6 text-primary opacity-60" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
              <text x="20" y="26" fontSize="18" textAnchor="middle" fill="currentColor" fontWeight="300">1</text>
            </svg>
            <span className="text-3xl md:text-4xl font-bold text-primary px-8 tracking-wider">
              DUNE
            </span>
            <svg className="w-8 h-8 md:w-10 md:h-10 mx-6 text-primary opacity-60" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
              <text x="20" y="26" fontSize="18" textAnchor="middle" fill="currentColor" fontWeight="300">2</text>
            </svg>
            <span className="text-3xl md:text-4xl font-bold text-primary px-8 tracking-wider">
              DUNE
            </span>
            <svg className="w-8 h-8 md:w-10 md:h-10 mx-6 text-primary opacity-60" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
              <text x="20" y="26" fontSize="18" textAnchor="middle" fill="currentColor" fontWeight="300">3</text>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
