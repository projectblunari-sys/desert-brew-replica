import interior1 from "@/assets/cafe-interior-1.jpg";

const IntroSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={interior1}
                alt="Luxurious Dune Coffee House interior with elegant desert-inspired design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-foreground text-[15px] md:text-[17px] leading-[1.6] font-normal tracking-tight">
              Step into Dune Coffee and enjoy a luxurious oasis. Our café is inspired by deserts and dunes, with elegant design capturing sophistication in the sand. Every detail, from furniture to décor, is carefully crafted for a memorable experience, perfect for sharing on social media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
