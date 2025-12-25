import { useState } from 'react';

type TripType = 'one-way' | 'round-trip' | 'multi-city';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripType: 'round-trip' as TripType,
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.departure || !formData.destination || !formData.departureDate) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // For round trips, require return date
    if (formData.tripType === 'round-trip' && !formData.returnDate) {
      setError('Please select a return date for round trips');
      setLoading(false);
      return;
    }

    try {
      // Create FormData for Formspree submission
      const formDataToSend = new FormData();

      // Add all form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('tripType', formData.tripType);
      formDataToSend.append('departure', formData.departure);
      formDataToSend.append('destination', formData.destination);
      formDataToSend.append('departureDate', formData.departureDate);
      formDataToSend.append('returnDate', formData.returnDate || 'Not applicable');
      formDataToSend.append('message', formData.message);

      // Formspree configuration
      formDataToSend.append('_subject', `New ${formData.tripType} Travel Inquiry from ${formData.name}`);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_cc', formData.email);
      formDataToSend.append('_next', 'https://bznomad.com/thank-you');
      formDataToSend.append('_format', 'plain');

      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xwveggld', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            tripType: 'round-trip',
            departure: '',
            destination: '',
            departureDate: '',
            returnDate: '',
            message: '',
          });
          setSubmitted(false);
        }, 3000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (err) {
      setError(`Failed to submit form. Please try again or email us directly at eternal.r@asaptickets.com`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTripTypeChange = (tripType: TripType) => {
    setFormData(prev => ({ ...prev, tripType }));

    // Clear return date if switching to one-way
    if (tripType === 'one-way') {
      setFormData(prev => ({ ...prev, returnDate: '' }));
    }
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

  const tripTypes = [
    { value: 'one-way', label: 'One Way', icon: '➡️' },
    { value: 'round-trip', label: 'Round Trip', icon: '🔁' },
    { value: 'multi-city', label: 'Multi City', icon: '🗺️' },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dark-800 text-teal-400 rounded-full text-sm font-semibold mb-4 border border-glow">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Start Your Next Adventure
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're here to answer all your questions and help you plan your perfect trip
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-dark-800/60 backdrop-blur rounded-2xl p-8 glow-border-lg">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Send us a Message</h3>

            {submitted ? (
              <div className="bg-green-950/50 border border-green-500/50 rounded-xl p-6 text-center animate-slideInUp glow-border">
                <div className="text-4xl mb-3">✓</div>
                <p className="text-green-400 font-semibold">
                  Thank you! We'll be in touch shortly.
                </p>
                <p className="text-green-300 text-sm mt-2">
                  A confirmation copy has been sent to your email.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xwveggld"
                method="POST"
                className="space-y-4"
              >
                {error && (
                  <div className="bg-red-950/50 border border-red-500/50 rounded-xl p-4 text-red-400 font-semibold">
                    {error}
                  </div>
                )}

                {/* Trip Type Selection */}
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Trip Type <span className="text-teal-400">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {tripTypes.map((trip) => (
                      <button
                        key={trip.value}
                        type="button"
                        onClick={() => handleTripTypeChange(trip.value as TripType)}
                        className={`p-3 rounded-lg border transition-all duration-300 ${formData.tripType === trip.value
                            ? 'bg-teal-500/20 border-teal-400 text-teal-300 shadow-glow-teal'
                            : 'bg-dark-700/50 border-dark-600 text-gray-400 hover:border-teal-400/50 hover:text-gray-300'
                          }`}
                      >
                        <div className="text-lg mb-1">{trip.icon}</div>
                        <div className="text-sm font-medium">{trip.label}</div>
                      </button>
                    ))}
                  </div>
                  <input type="hidden" name="tripType" value={formData.tripType} />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Name <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Email <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Phone <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Departure City <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="departure"
                    value={formData.departure}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
                    placeholder="e.g., New York, London"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">
                    Destination City <span className="text-teal-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
                    placeholder="e.g., Bali, Lisbon, Tokyo"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Enter your destination city (e.g., Bali, Lisbon, Tokyo)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Departure Date <span className="text-teal-400">*</span>
                    </label>
                    <input
                      type="date"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">
                      Return Date {formData.tripType === 'round-trip' && <span className="text-teal-400">*</span>}
                    </label>
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      required={formData.tripType === 'round-trip'}
                      disabled={formData.tripType === 'one-way'}
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border ${formData.tripType === 'one-way' ? 'opacity-50 cursor-not-allowed bg-dark-700/30' : ''
                        }`}
                      min={formData.departureDate || new Date().toISOString().split('T')[0]}
                    />
                    {formData.tripType === 'one-way' && (
                      <p className="text-xs text-gray-400 mt-1">Not required for one-way trips</p>
                    )}
                  </div>
                </div>

                {formData.tripType === 'multi-city' && (
                  <div className="mt-4 p-4 bg-dark-700/30 rounded-lg border border-dark-600">
                    <p className="text-teal-300 font-semibold mb-2">Multi-City Trip Note</p>
                    <p className="text-sm text-gray-400">
                      For multi-city itineraries, please describe your route and preferred stops in the message below.
                      We'll contact you to create a detailed custom itinerary.
                    </p>
                  </div>
                )}

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all resize-none glow-border"
                    placeholder="Tell us about your travel plans, preferences, or any special requests..."
                  ></textarea>
                </div>

                {/* Hidden Formspree fields */}
                <input type="hidden" name="_subject" value={`New ${formData.tripType} Travel Inquiry from ${formData.name}`} />
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_cc" value={formData.email} />
                <input type="hidden" name="_next" value="https://bznomad.com/thank-you" />
                <input type="hidden" name="_format" value="plain" />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-dark-950 rounded-lg font-bold hover:shadow-glow-teal-lg transition-all duration-300 border border-teal-400/50 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                    }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    `Get ${formData.tripType === 'one-way' ? 'One-Way' : formData.tripType === 'round-trip' ? 'Round-Trip' : 'Multi-City'} Quote`
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  <span className="text-teal-400">*</span> Required fields
                </p>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-dark-800/60 backdrop-blur rounded-xl glow-border hover:shadow-glow-teal transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-200">{info.label}</p>
                      <p className="text-teal-400 font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-dark-800/60 backdrop-blur rounded-2xl p-8 glow-border-lg">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Quick FAQ</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <span className="font-semibold text-teal-300">How long does planning take?</span>
                  <br />
                  Usually 2-3 business days for a complete itinerary
                </p>
                <p>
                  <span className="font-semibold text-teal-300">Can I modify my booking?</span>
                  <br />
                  Yes! Changes can be made anytime before departure
                </p>
                <p>
                  <span className="font-semibold text-teal-300">Do you offer insurance?</span>
                  <br />
                  Yes, we recommend and arrange travel insurance
                </p>
              </div>
            </div>

            {/* Trip Type Info */}
            <div className="bg-dark-800/60 backdrop-blur rounded-2xl p-8 glow-border-lg">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Trip Types</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="text-teal-400">➡️</span>
                  <div>
                    <p className="font-semibold text-teal-300">One Way</p>
                    <p>Single journey to your destination</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400">🔁</span>
                  <div>
                    <p className="font-semibold text-teal-300">Round Trip</p>
                    <p>Return to your original departure city</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400">🗺️</span>
                  <div>
                    <p className="font-semibold text-teal-300">Multi City</p>
                    <p>Visit multiple destinations in one trip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}