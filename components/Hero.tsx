export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fadeIn">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-6 animate-pulse">
            ✈️ Travel Made Simple
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-slideInDown">
            Travel the World,<br />
            Your Way
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-slideInUp leading-relaxed">
            Expertly curated travel experiences for digital nomads, remote workers, and digital nomad families. Founded by a nomad, for nomads.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-fadeIn">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-110"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-full font-bold text-lg hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Floating elements */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-float">
            <div className="text-3xl mb-2">🌍</div>
            <p className="font-semibold text-gray-800">50+ Countries</p>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl mb-2">👥</div>
            <p className="font-semibold text-gray-800">1000+ Nomads</p>
          </div>
          <div className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl mb-2">⭐</div>
            <p className="font-semibold text-gray-800">5-Star Rated</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-teal-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
