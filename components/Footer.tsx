import AnimatedLogo from './AnimatedLogo';
import CertificateModal from './CertificateModal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Destinations', href: '#destinations' },
    { title: 'Contact', href: '#contact' },
  ];

  const social = [
    { name: 'Instagram', emoji: '📷', url: 'https://instagram.com/bznomad' },
    { name: 'Facebook', emoji: '👤', url: 'https://facebook.com/bznomad' },
    { name: 'LinkedIn', emoji: '💼', url: 'https://linkedin.com/company/bznomad' },
    { name: 'X (Twitter)', emoji: '𝕏', url: 'https://x.com/bznomadtravel' },
    { name: 'YouTube', emoji: '▶️', url: 'https://youtube.com/@bandarof' },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-900 to-dark-950 text-gray-300 pt-20 pb-8 border-t border-glow">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <AnimatedLogo />
            </div>
            <p className="text-gray-400 mb-4">
              Travel arrangements for digital nomads, remote workers, and digital nomad families.
            </p>
            <div className="flex gap-3 mb-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-teal-600/50 rounded-full flex items-center justify-center hover:bg-teal-500 transition-all duration-300 text-lg glow-border"
                  title={item.name}
                >
                  {item.emoji}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16">
                <CertificateModal
                  certificateImage="https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2Fbfa1c41af23d40f2912001c6206fad16?format=webp&width=800"
                  title="Business Registration Certificate"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal-400">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Flights & Transport</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Accommodations</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Visa Assistance</li>
              <li className="hover:text-teal-400 transition-colors cursor-pointer">Custom Itineraries</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-teal-400">Contact</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>
                <span className="block font-semibold text-teal-400">Phone</span>
                <a href="tel:+18884497849" className="hover:text-teal-300 transition-colors">
                  +1 888 449 7849
                </a>
              </p>
              <p>
                <span className="block font-semibold text-teal-400 mt-3">Email</span>
                <a href="mailto:eternal.r@asaptickets.com" className="hover:text-teal-300 transition-colors">
                  eternal.r@asaptickets.com
                </a>
              </p>
              <p>
                <span className="block font-semibold text-teal-400 mt-3">Location</span>
                <span>Durrës, Albania</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glow my-12"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} BZNomad. All rights reserved. | Founded by Bander Radein
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Sitemap</a>
          </div>
        </div>

        {/* Bottom branding */}
        <div className="text-center mt-8 pt-8 border-t border-glow text-xs text-gray-600">
          <p>
            Affiliated with{' '}
            <a href="https://www.dreamport.me/" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
              Dreamport
            </a>
            {', '}
            <a href="https://www.asaptickets.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
              ASAP Tickets
            </a>
            {' and '}
            <a href="https://dyninno.com/" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
              Dyninno Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
