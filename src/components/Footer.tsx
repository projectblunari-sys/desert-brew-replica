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
    <footer className="bg-foreground text-background py-20 md:py-28 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-[1400px]">
        {/* Logo Mark */}
        <div className="text-center mb-16 md:mb-20">
          <svg className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-8 text-primary" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M12 20h16M20 12v16" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-background/70 hover:text-primary transition-colors duration-300 text-base md:text-lg font-normal lowercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Footer Image */}
        <div className="aspect-video w-full max-w-5xl mx-auto overflow-hidden">
          <img 
            src={interior4} 
            alt="Dune Coffee House - Desert inspired luxury café experience" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
