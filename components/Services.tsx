export default function Services() {
  const services = [
    {
      icon: '✈️',
      title: 'Flight Arrangements',
      description: 'Flexible flight options designed for remote workers with layover opportunities and flexible schedules.',
      features: ['Best price guarantees', 'Flexible dates', 'Extended layovers'],
    },
    {
      icon: '🏨',
      title: 'Accommodation',
      description: 'Carefully selected stays from boutique hostels to luxury apartments with co-working spaces.',
      features: ['Co-working hubs', 'WiFi guaranteed', 'Monthly discounts'],
    },
    {
      icon: '🚗',
      title: 'Local Transport',
      description: 'Seamless ground transportation and local travel arrangements to explore your destination.',
      features: ['Airport transfers', 'Local guides', 'Adventure tours'],
    },
    {
      icon: '🎒',
      title: 'Visa Assistance',
      description: 'Expert guidance on visa requirements and support for long-term stays in multiple countries.',
      features: ['Visa consulting', 'Document support', 'Fast tracking'],
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Packages',
      description: 'Specialized packages for digital nomad families with kid-friendly activities and amenities.',
      features: ['School options', 'Family activities', 'Safe areas'],
    },
    {
      icon: '🎯',
      title: 'Custom Itineraries',
      description: 'Personalized travel plans tailored to your work schedule, interests, and budget.',
      features: ['24/7 support', 'Changes anytime', 'Perfect timing'],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dark-800 text-teal-400 rounded-full text-sm font-semibold mb-4 border border-glow">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need for stress-free travel as a digital nomad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-dark-800/60 backdrop-blur rounded-2xl p-8 glow-border hover:shadow-glow-teal-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <span className="text-teal-400 font-bold">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block text-teal-400 font-semibold hover:text-teal-300 transition-colors duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-teal-600/30 to-cyan-600/30 rounded-3xl p-12 text-center glow-border-lg backdrop-blur">
          <h3 className="text-3xl font-bold text-gray-100 mb-4">Not Sure What You Need?</h3>
          <p className="text-lg mb-8 text-gray-300 opacity-90">
            Contact us for a free consultation. We'll create the perfect travel plan for your unique situation.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-dark-950 rounded-full font-bold hover:scale-105 transition-transform duration-300 border border-teal-400/50"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
