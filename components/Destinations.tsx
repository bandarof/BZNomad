export default function Destinations() {
  const destinations = [
    {
      name: 'Bali, Indonesia',
      image: '🏝️',
      description: 'Tropical paradise with affordable living and excellent co-working communities',
      highlights: ['Cost of living', 'Digital nomad hub', 'Beach lifestyle'],
      rating: 4.8,
    },
    {
      name: 'Jeddah, Saudi Arabia',
      image: '🏙️',
      description: 'Modern coastal city with vibrant culture and emerging digital nomad opportunities',
      highlights: ['Culture', 'Modern infrastructure', 'Beach lifestyle'],
      rating: 4.8,
    },
    {
      name: 'Chiang Mai, Thailand',
      image: '🏯',
      description: 'Southeast Asian gateway with ultra-low costs and authentic experiences',
      highlights: ['Budget-friendly', 'Culture', 'Nightlife'],
      rating: 4.7,
    },
    {
      name: 'Mexico City, Mexico',
      image: '🌮',
      description: 'Vibrant metropolis with diverse neighborhoods and strong nomad networks',
      highlights: ['Culture', 'Food scene', 'Community'],
      rating: 4.8,
    },
    {
      name: 'Barcelona, Spain',
      image: '🏖️',
      description: 'Mediterranean lifestyle with excellent infrastructure and networking opportunities',
      highlights: ['Lifestyle', 'Beaches', 'Networking'],
      rating: 4.9,
    },
    {
      name: 'Himare, Albania',
      image: '🏖️',
      description: 'Stunning coastal paradise with pristine beaches and authentic Mediterranean charm',
      highlights: ['Beaches', 'Affordable', 'Culture'],
      rating: 4.9,
    },
  ];

  return (
    <section id="destinations" className="py-20 px-6 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dark-800 text-teal-400 rounded-full text-sm font-semibold mb-4 border border-glow">
            Popular Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Where Digital Nomads Love to Be
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Handpicked destinations perfect for remote work and adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-dark-800/60 backdrop-blur glow-border hover:shadow-glow-teal-lg transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background image placeholder */}
              <div className="h-48 bg-gradient-to-br from-teal-600/30 to-cyan-600/30 flex items-center justify-center text-7xl overflow-hidden border-b border-glow">
                <div className="group-hover:scale-125 transition-transform duration-300">
                  {dest.image}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-100 mb-2">{dest.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-yellow-400">★</span>
                  <span className="font-semibold text-gray-300">{dest.rating}</span>
                  <span className="text-gray-500 text-sm">(450+ reviews)</span>
                </div>

                <p className="text-gray-400 mb-4">{dest.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-dark-700 text-teal-300 rounded-full text-sm font-medium border border-teal-500/30"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block text-center px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-dark-950 rounded-lg font-semibold hover:shadow-glow-teal transition-all duration-300 border border-teal-400/50"
                >
                  Plan Trip
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More destinations CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-4">
            Plus 44+ other amazing destinations handpicked for digital nomads
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 border-2 border-teal-500 text-teal-400 rounded-full font-bold hover:bg-teal-500/20 hover:text-teal-300 transition-all duration-300 glow-border"
          >
            Explore All Destinations
          </a>
        </div>
      </div>
    </section>
  );
}
