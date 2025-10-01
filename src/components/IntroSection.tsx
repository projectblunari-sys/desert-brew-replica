import interior1 from "@/assets/cafe-interior-1.jpg";

const IntroSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={interior1}
                alt="Dune Coffee House interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 animate-fade-in-slow">
            <p className="text-foreground text-base md:text-lg leading-relaxed">
              Step into Dune Coffee and enjoy a luxurious oasis. Our café is inspired by
              deserts and dunes, with elegant design capturing sophistication in the sand.
              Every detail, from furniture to décor, is carefully crafted for a memorable
              experience, perfect for sharing on social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
