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
    <footer className="bg-foreground text-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Logo */}
        <div className="text-center mb-16">
          <h3 className="text-5xl md:text-7xl font-bold tracking-wider text-primary mb-8">
            DUNE
          </h3>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-background hover:text-primary transition-colors duration-200 text-base md:text-lg font-light lowercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Image placeholder */}
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg bg-background/10" />
      </div>
    </footer>
  );
};

export default Footer;
