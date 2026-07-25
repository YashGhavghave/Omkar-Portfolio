'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#results', label: 'Results' },
  ];

  return (
    <>
      <nav
        id="nav"
        className={`fixed top-0 left-0 right-0 z-[1000] px-12 py-5 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? 'bg-black/85 border-b border-white/10 backdrop-blur-xl py-4'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Link href="#hero" className="font-display text-2xl font-bold tracking-wider text-white">
          ONKAR<span className="text-red">.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex list-none gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-white text-sm font-medium tracking-wide uppercase transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact" className="btn-primary text-sm px-3.5 py-2">
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button
          id="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white rounded transition-all" />
          <span className="block w-6 h-0.5 bg-white rounded transition-all" />
          <span className="block w-6 h-0.5 bg-white rounded transition-all" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobileNav"
        className={`fixed top-0 left-0 right-0 bg-black/95 z-[999] flex flex-col pt-20 px-6 gap-6 backdrop-blur-xl transition-all duration-300 ${
          isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        style={{ height: isMobileMenuOpen ? '100vh' : '0' }}
      >
        <button
          id="mobileClose"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-5 right-6 bg-none border-none text-white text-2xl cursor-pointer"
        >
          ✕
        </button>
        {[...navLinks, { href: '#contact', label: 'Contact' }].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white text-xl font-medium py-2 border-b border-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
