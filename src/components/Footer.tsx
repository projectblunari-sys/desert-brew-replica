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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#3d2f28] text-background py-16 md:py-20 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-[1400px]">
        {/* Logo Mark - Circle with Plus */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary mx-auto mb-12">
            <svg 
              className="w-10 h-10 md:w-12 md:h-12 text-primary" 
              viewBox="0 0 40 40" 
              fill="none"
            >
              <path 
                d="M20 8 L20 32 M8 20 L32 20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14 mb-16 md:mb-20">
          {footerLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-background/60 hover:text-primary transition-colors duration-300 text-sm md:text-base font-light lowercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Footer Image */}
        <div className="w-full max-w-[1100px] mx-auto overflow-hidden">
          <img 
            src={interior4} 
            alt="Dune Coffee House - Premium coffee bar setup with elegant desert-inspired design" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
