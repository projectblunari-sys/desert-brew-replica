import interior1 from "@/assets/cafe-interior-1.jpg";
import interior2 from "@/assets/cafe-interior-2.jpg";
import interior3 from "@/assets/cafe-interior-3.jpg";
import interior4 from "@/assets/cafe-interior-4.jpg";

const Gallery = () => {
  const images = [
    interior1,
    interior2,
    interior3,
    interior4,
    interior1,
    interior2,
    interior3,
    interior4,
    interior1,
    interior2,
  ];

  return (
    <section id="gallery" className="py-40 md:py-48 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-light text-foreground lowercase tracking-wide">
            theduneviews
          </h2>
        </div>
      </div>

      {/* Horizontal Scrolling Gallery - Full Width */}
      <div className="overflow-hidden mb-24">
        <div className="flex gap-8 pb-8 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[450px] h-[450px] md:h-[550px] overflow-hidden group"
            >
              <img
                src={image}
                alt={`Dune interior ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-foreground text-lg md:text-2xl leading-[1.9] font-light max-w-5xl mx-auto">
            Explore Dune through our captivating picture collection, displaying beautiful
            furniture and stunning interiors. Each image invites you to capture moments of
            luxury and share them. From stylish designs to cozy lighting, our gallery offers
            a glimpse into the amazing experience awaiting you at Dune.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
