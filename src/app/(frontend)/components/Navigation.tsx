"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ]

  return (
    <nav 
      data-testid="red-nav" 
      className="bg-red-500 py-4 border-b border-gray-300 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="font-bold text-white text-xl tracking-tight mr-8 transition-colors duration-200 hover:text-gray-200"
            style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '22px' }}
          >
            Jeffrey Malek
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-gray-200 px-3 py-2 text-base font-semibold tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden p-3 rounded-md bg-transparent border border-white border-opacity-30 text-white transition-colors duration-200 hover:bg-red-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <div className="w-6 h-6 relative">
                <span className="block w-6 h-0.5 bg-white absolute top-3 transform rotate-45 transition-all duration-200"></span>
                <span className="block w-6 h-0.5 bg-white absolute top-3 transform -rotate-45 transition-all duration-200"></span>
              </div>
            ) : (
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block w-6 h-0.5 bg-white transition-all duration-200"></span>
                <span className="block w-6 h-0.5 bg-white transition-all duration-200"></span>
                <span className="block w-6 h-0.5 bg-white transition-all duration-200"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="block md:hidden">
            <div className="px-2 pt-2 pb-3 border-t border-white border-opacity-20">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 mb-1 text-lg font-semibold text-white rounded-lg transition-all duration-200 hover:text-gray-200 hover:bg-red-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
