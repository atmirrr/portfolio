"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [wasScrolled, setWasScrolled] = useState(false);

  const navItems = [
    // { name: "home", path: "/" },
    // { name: "projects", path: "/projects" },
    // { name: "blog", path: "/blog" },
    // { name: "about", path: "/about" },
    { name: "github", path: "https://github.com/atmirrr", external: true },
    { name: "linkedin", path: "https://linkedin.com/in/atmir", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 100) {
        setWasScrolled(true);
      }

      if (wasScrolled && scrollTop === 0) {
        setShouldAnimate(true);
        // Reset the animation after it completes
        setTimeout(() => {
          setShouldAnimate(false);
        }, 1500); // 1.5s = 5 iterations * 0.3s
        setWasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [wasScrolled]);

  return (
    <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-xl font-bold text-primary glitch ${
              shouldAnimate ? "animate" : ""
            }`}
            data-text="Amir Attari"
          >
            Amir Attari
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="command-prompt hover:text-primary transition-colors text-white"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.path}
                    className={`command-prompt hover:text-primary transition-colors ${
                      pathname === item.path ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-2">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    {item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="command-prompt block hover:text-primary transition-colors text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        className={`command-prompt block hover:text-primary transition-colors ${
                          pathname === item.path ? "text-primary" : "text-white"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
