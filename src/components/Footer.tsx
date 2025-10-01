const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-wider">DUNE</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              A luxurious desert oasis where coffee meets sophistication. Experience the
              perfect blend of elegance and comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold tracking-wide">Visit Us</h4>
            <div className="space-y-2 text-sm text-background/80">
              <p>123 Desert Road</p>
              <p>Oasis District</p>
              <p>Opening Hours:</p>
              <p>Mon - Sun: 7:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © {currentYear} Dune Coffee House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
