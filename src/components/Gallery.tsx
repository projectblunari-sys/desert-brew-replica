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
  ];

  return (
    <section id="gallery" className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light text-foreground lowercase">
            theduneviews
          </h2>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="overflow-hidden mb-20">
          <div className="flex gap-6 animate-fade-in-slow pb-6 overflow-x-auto scrollbar-hide">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-lg overflow-hidden group"
              >
                <img
                  src={image}
                  alt={`Dune interior ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <p className="text-foreground text-base md:text-lg leading-relaxed">
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
