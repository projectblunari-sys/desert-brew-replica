import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navItems = [
    { name: "home", href: "#home" },
    { name: "franchies", href: "#franchies" },
    { name: "locations", href: "#locations" },
    { name: "menu", href: "#menu" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <>
      {/* Language Switcher - Top Left */}
      <div className="fixed top-6 left-6 z-50 flex gap-2">
        <button
          onClick={() => setLanguage("EN")}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
            language === "EN"
              ? "bg-white text-foreground"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("AR")}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
            language === "AR"
              ? "bg-white text-foreground"
              : "bg-white/20 text-white hover:bg-white/30"
          }`}
        >
          AR
        </button>
      </div>

      {/* Hamburger Menu - Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/20 hover:bg-white/30 text-white rounded-full h-12 w-12"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-foreground animate-fade-in">
          <div className="h-full flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-4xl md:text-6xl font-light text-background hover:text-primary transition-colors duration-300 lowercase"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
