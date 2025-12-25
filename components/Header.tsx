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
    <header className="fixed top-0 w-full bg-dark-950/95 backdrop-blur-md border-b border-glow z-50 shadow-glow-teal">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <AnimatedLogo />

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-gray-300 font-medium hover:text-teal-400 transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-dark-950 rounded-full font-semibold hover:shadow-glow-teal-lg transition-all duration-300 hover:scale-105 border border-teal-400/50"
        >
          Get Started
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-teal-400 font-bold text-2xl hover:text-teal-300 transition-colors"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-900 border-t border-glow animate-slideInDown">
          <ul className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-gray-300 font-medium hover:text-teal-400 transition-colors duration-300 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-dark-950 rounded-full font-semibold text-center border border-teal-400/50"
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
