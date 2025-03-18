"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    // { name: "home", path: "/" },
    // { name: "projects", path: "/projects" },
    // { name: "blog", path: "/blog" },
    // { name: "about", path: "/about" },
    { name: "github", path: "https://github.com/atmirrr", external: true },
    { name: "linkedin", path: "https://linkedin.com/in/atmir", external: true },
  ]

  return (
    <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary glitch" data-text="Amir Attari">
            Amir Attari
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
  )
}

