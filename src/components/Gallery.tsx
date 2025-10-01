import interior1 from "@/assets/cafe-interior-1.jpg";
import interior2 from "@/assets/cafe-interior-2.jpg";
import interior3 from "@/assets/cafe-interior-3.jpg";
import interior4 from "@/assets/cafe-interior-4.jpg";

const Gallery = () => {
  const images = [
    interior1, interior2, interior3, interior4,
    interior1, interior2, interior3, interior4,
    interior1, interior2, interior3, interior4,
    interior1, interior2,
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal text-foreground lowercase tracking-normal">
            theduneviews
          </h2>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery - Full Bleed */}
      <div className="overflow-hidden mb-16 md:mb-20">
        <div className="flex gap-4 md:gap-6 pb-4 overflow-x-auto scrollbar-hide px-6 sm:px-8 lg:px-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[350px] md:w-[420px] h-[380px] sm:h-[480px] md:h-[560px] overflow-hidden"
            >
              <img
                src={image}
                alt={`Dune Coffee House interior view ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="container mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-foreground text-[15px] md:text-[17px] leading-[1.6] font-normal tracking-tight">
            Explore Dune through our captivating picture collection, displaying beautiful furniture and stunning interiors. Each image invites you to capture moments of luxury and share them. From stylish designs to cozy lighting, our gallery offers a glimpse into the amazing experience awaiting you at Dune.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
