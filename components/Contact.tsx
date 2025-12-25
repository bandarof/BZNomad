import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+1 888 449 7849',
      link: 'tel:+18884497849',
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'eternal.r@asaptickets.com',
      link: 'mailto:eternal.r@asaptickets.com',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Durrës, Albania',
      link: '#',
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'bznomad.com',
      link: 'https://bznomad.com',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your Next Adventure
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to answer all your questions and help you plan your perfect trip
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center animate-slideInUp">
                <div className="text-4xl mb-3">✓</div>
                <p className="text-green-800 font-semibold">
                  Thank you! We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Interested Destination</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                  >
                    <option value="">Select a destination...</option>
                    <option value="bali">Bali, Indonesia</option>
                    <option value="lisbon">Lisbon, Portugal</option>
                    <option value="chiang-mai">Chiang Mai, Thailand</option>
                    <option value="mexico-city">Mexico City, Mexico</option>
                    <option value="barcelona">Barcelona, Spain</option>
                    <option value="medellin">Medellín, Colombia</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all resize-none"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-teal-100"
                  >
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-900">{info.label}</p>
                      <p className="text-teal-600 font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick FAQ</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">How long does planning take?</span>
                  <br />
                  Usually 2-3 business days for a complete itinerary
                </p>
                <p>
                  <span className="font-semibold">Can I modify my booking?</span>
                  <br />
                  Yes! Changes can be made anytime before departure
                </p>
                <p>
                  <span className="font-semibold">Do you offer insurance?</span>
                  <br />
                  Yes, we recommend and arrange travel insurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
