export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Visited' },
    { number: '1000+', label: 'Happy Travelers' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dark-800 text-teal-400 rounded-full text-sm font-semibold mb-4 border border-glow">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Founded by a Digital Nomad, for Digital Nomads
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            BZNomad is revolutionizing travel arrangements for the modern remote workforce
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Content with profile photo */}
          <div className="animate-slideInUp">
            <div className="bg-dark-800/60 backdrop-blur rounded-3xl p-8 mb-8 glow-border-lg">
              {/* Founder Profile Photo inside box */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden glow-border-lg shadow-2xl shadow-teal-500/30 border-4 border-teal-500/50">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2Fb8a735389ce347da8b5a1f2dad5eadde?format=webp&width=300"
                    alt="Bander Radein - Founder of BZNomad"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-100 mb-6 text-center">Meet Bander Radein</h3>
              <p className="text-lg text-gray-300 mb-4">
                With over 15 years of experience in the travel industry, Bander Radein understands what modern travelers need. Founded out of personal experience as a digital nomad, BZNomad specializes in creating seamless, unforgettable travel experiences.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Affiliated with industry leaders Dreamport and AsapTickets, we bring expertise, reliability, and personalized service to every journey. Whether you're a digital nomad, remote worker, or traveling with your family, we tailor arrangements to match your unique lifestyle.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-300">
                    <strong>Based in:</strong> Durrës, Albania
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <a href="tel:+18884497849" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors underline">
                    +1 888 449 7849
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:eternal.r@asaptickets.com" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors underline">
                    eternal.r@asaptickets.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="animate-slideInDown">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-600/50 to-cyan-600/50 rounded-2xl p-6 text-gray-100 text-center glow-border hover:shadow-glow-teal-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-3xl font-bold mb-2 text-teal-300">{stat.number}</div>
                  <p className="font-semibold text-gray-200 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="bg-dark-800/60 backdrop-blur rounded-3xl p-12 text-center glow-border-lg">
          <h3 className="text-2xl font-bold text-gray-100 mb-8">Our Partners</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-dark-900 rounded-2xl glow-border hover:shadow-glow-teal transition-all duration-300 hover:scale-105">
              <div className="h-20 w-20 mb-4 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2Fa17ef5ccc2e445d6bd948eaf41faa5b2?format=webp&width=200"
                  alt="Dreamport logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h4 className="font-bold text-gray-200 text-lg">Dreamport</h4>
              <p className="text-gray-400 text-sm mt-2">Independent Travel Manager Platform</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-dark-900 rounded-2xl glow-border hover:shadow-glow-teal transition-all duration-300 hover:scale-105">
              <div className="h-20 w-20 mb-4 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2F15a3d2a8255f4378be38b5bb8f55ae36?format=webp&width=200"
                  alt="ASAP Tickets logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h4 className="font-bold text-gray-200 text-lg">ASAP Tickets</h4>
              <p className="text-gray-400 text-sm mt-2">Affordable Airline Tickets & Travel Services</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-dark-900 rounded-2xl glow-border hover:shadow-glow-teal transition-all duration-300 hover:scale-105">
              <div className="h-20 w-20 mb-4 bg-white rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2Fa5952601df0b40cfb08f118817c4d414?format=webp&width=200"
                  alt="Dyninno Group logo"
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h4 className="font-bold text-gray-200 text-lg">Dyninno Group</h4>
              <p className="text-gray-400 text-sm mt-2">Global Travel & Technology Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
