import { useState } from 'react';
import AnimatedLogo from './AnimatedLogo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <AnimatedLogo />

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-700 font-medium hover:text-teal-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
        >
          Get Started
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-teal-600 font-bold text-2xl"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideInDown">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-teal-600 transition-colors duration-300 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
