
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const menuItems = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Resume", url: "#resume" },
    { name: "Contact", url: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gradient">
            KRISHNA SINGH
          </a>

          {isMobile ? (
            <>
              <button
                className="block text-foreground focus:outline-none"
                onClick={handleMenuClick}
              >
                <div className="w-6 flex flex-col gap-1">
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                </div>
              </button>

              <div
                className={`fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-300 ${
                  menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onClick={handleMenuClick}
              >
                <div className="flex h-full items-center justify-center">
                  <ul className="flex flex-col gap-8 text-center">
                    {menuItems.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.url}
                          className="text-xl font-medium hover:text-accent transition-colors"
                          onClick={handleMenuItemClick}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <nav>
              <ul className="flex gap-8">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      className="font-medium hover:text-accent transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
