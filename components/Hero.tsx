export default function Hero() {
  const backgroundImages = [
    'https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2F4d12ebc3b6374c14923d6172fce05334?format=webp&width=1200',
    'https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2F1989be2eeec044a5ad2489cdbfd55546?format=webp&width=1200',
    'https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2F4284433f661e484ba4f3088c704a96e6?format=webp&width=1200',
    'https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2Fb6ead72a3fdc4355a00ccb1e6b6dbc7a?format=webp&width=1200',
    'https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2F80acb8d1515a47968c6c66d7bc58594a?format=webp&width=1200',
    'https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2F9848c7d47c1b474ca8e5fde1c5dfdb9c?format=webp&width=1200',
  ];

  return (
    <section
      id="home"
      className="hero-carousel relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Background image carousel */}
      <div className="absolute inset-0 overflow-hidden bg-dark-950">
        <div className="carousel-track animate-carousel absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{
                backgroundImage: `url('${image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-label={`Travel destination ${index + 1}`}
            />
          ))}
        </div>

        {/* Dark overlay for text visibility */}
        <div className="carousel-overlay absolute inset-0 z-10" />

        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-dark-950/30 via-dark-950/60 to-dark-950/80" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-5">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fadeIn">
          <span className="inline-block px-4 py-2 bg-dark-800/80 backdrop-blur text-teal-400 rounded-full text-sm font-semibold mb-6 animate-pulse border border-glow">
            ✈️ Travel Made Simple
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent animate-slideInDown drop-shadow-lg">
            Travel the World,<br />
            Your Way
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-slideInUp leading-relaxed drop-shadow-md">
            Expertly curated travel experiences for digital nomads, remote workers, and digital nomad families. Founded by a nomad, for nomads.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 animate-fadeIn">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-dark-950 rounded-full font-bold text-lg hover:shadow-glow-teal-lg transition-all duration-300 hover:scale-110 border border-teal-400/50 backdrop-blur"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="px-8 py-4 border-2 border-teal-400 text-teal-300 rounded-full font-bold text-lg hover:bg-teal-500/30 hover:text-teal-200 transition-all duration-300 glow-border backdrop-blur bg-dark-800/30"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Floating elements */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="p-6 bg-dark-800/60 backdrop-blur rounded-2xl glow-border hover:shadow-glow-teal transition-all duration-300 hover:scale-105 animate-float">
            <div className="text-3xl mb-2">🌍</div>
            <p className="font-semibold text-gray-300">50+ Countries</p>
          </div>
          <div className="p-6 bg-dark-800/60 backdrop-blur rounded-2xl glow-border hover:shadow-glow-teal transition-all duration-300 hover:scale-105 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl mb-2">👥</div>
            <p className="font-semibold text-gray-300">1000+ Nomads</p>
          </div>
          <div className="p-6 bg-dark-800/60 backdrop-blur rounded-2xl glow-border hover:shadow-glow-teal transition-all duration-300 hover:scale-105 animate-float" style={{ animationDelay: '1s' }}>
            <div className="text-3xl mb-2">⭐</div>
            <p className="font-semibold text-gray-300">5-Star Rated</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg
          className="w-6 h-6 text-teal-400 drop-shadow-lg"
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
