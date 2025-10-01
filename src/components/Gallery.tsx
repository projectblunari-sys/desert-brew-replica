import { useState } from "react";
import interior1 from "@/assets/cafe-interior-1.jpg";
import interior2 from "@/assets/cafe-interior-2.jpg";
import interior3 from "@/assets/cafe-interior-3.jpg";
import interior4 from "@/assets/cafe-interior-4.jpg";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { src: interior1, alt: "Luxury coffee house interior with warm tones" },
    { src: interior2, alt: "Stylish lounge area with desert-inspired decor" },
    { src: interior3, alt: "Cozy seating with moroccan-inspired design" },
    { src: interior4, alt: "Modern coffee bar with elegant setup" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-[0.3em] text-primary uppercase">
              The Dune Views
            </span>
            <div className="h-px w-20 bg-primary mt-2 mx-auto" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Space
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Explore Dune through our captivating picture collection, displaying beautiful
            furniture and stunning interiors. Each image invites you to capture moments of
            luxury and share them.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-slow">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16 animate-fade-in-slow">
          <p className="text-muted-foreground italic text-lg">
            From stylish designs to cozy lighting, our gallery offers a glimpse into the
            amazing experience awaiting you at Dune.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
