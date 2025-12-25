export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Visited' },
    { number: '1000+', label: 'Happy Travelers' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Founded by a Digital Nomad, for Digital Nomads
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            BZNomad is revolutionizing travel arrangements for the modern remote workforce
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left side - Content */}
          <div className="animate-slideInUp">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Meet Bander Radein</h3>
              <p className="text-lg text-gray-700 mb-4">
                With over 15 years of experience in the travel industry, Bander Radein understands what modern travelers need. Founded out of personal experience as a digital nomad, BZNomad specializes in creating seamless, unforgettable travel experiences.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Affiliated with industry leaders Dreamport and AsapTickets, we bring expertise, reliability, and personalized service to every journey. Whether you're a digital nomad, remote worker, or traveling with your family, we tailor arrangements to match your unique lifestyle.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700">
                    <strong>Based in:</strong> Durrës, Albania
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <a href="tel:+18884497849" className="text-teal-600 font-semibold hover:underline">
                    +1 888 449 7849
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <a href="mailto:eternal.r@asaptickets.com" className="text-teal-600 font-semibold hover:underline">
                    eternal.r@asaptickets.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slideInDown">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white text-center hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <p className="font-semibold opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Partners</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-5xl mb-4">🌐</div>
              <h4 className="font-bold text-gray-800 text-lg">Dreamport</h4>
              <p className="text-gray-600 text-sm mt-2">Global travel network</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-5xl mb-4">🎫</div>
              <h4 className="font-bold text-gray-800 text-lg">AsapTickets</h4>
              <p className="text-gray-600 text-sm mt-2">Flight & booking services</p>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-5xl mb-4">🌟</div>
              <h4 className="font-bold text-gray-800 text-lg">BZNomad</h4>
              <p className="text-gray-600 text-sm mt-2">Nomad-focused travel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
