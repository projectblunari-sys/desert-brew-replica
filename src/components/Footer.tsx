import interior4 from "@/assets/cafe-interior-4.jpg";

const Footer = () => {
  const footerLinks = [
    { name: "home", href: "#home" },
    { name: "franchies", href: "#franchies" },
    { name: "locations", href: "#locations" },
    { name: "branches", href: "#branches" },
    { name: "bydune", href: "#bydune" },
    { name: "menu", href: "#menu" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Logo */}
        <div className="text-center mb-20">
          <h3 className="text-6xl md:text-8xl font-bold tracking-[0.2em] text-primary mb-12">
            DUNE
          </h3>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-20">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-background/80 hover:text-primary transition-colors duration-300 text-lg md:text-xl font-light lowercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Image */}
        <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden">
          <img 
            src={interior4} 
            alt="Dune Coffee House" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
