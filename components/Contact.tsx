import { useState } from 'react';

type TripType = 'one-way' | 'round-trip' | 'multi-city';
type DateType = 'flexible' | 'fixed';

interface CitySegment {
  id: number;
  departure: string;
  destination: string;
  dateType: DateType;
  date: string;
  flexFrom: string;
  flexTo: string;
}

interface DateFlexibility {
  departureType: DateType;
  departureDate: string;
  departureFlexFrom: string;
  departureFlexTo: string;
  returnType: DateType;
  returnDate: string;
  returnFlexFrom: string;
  returnFlexTo: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tripType: 'round-trip' as TripType,
    departure: '',
    destination: '',
    message: '',
  });

  const [dateFlexibility, setDateFlexibility] = useState<DateFlexibility>({
    departureType: 'fixed',
    departureDate: '',
    departureFlexFrom: '',
    departureFlexTo: '',
    returnType: 'fixed',
    returnDate: '',
    returnFlexFrom: '',
    returnFlexTo: '',
  });

  const [citySegments, setCitySegments] = useState<CitySegment[]>([
    {
      id: 1,
      departure: '',
      destination: '',
      dateType: 'fixed',
      date: '',
      flexFrom: '',
      flexTo: ''
    }
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const addCitySegment = () => {
    if (citySegments.length < 5) {
      const newId = citySegments.length + 1;
      setCitySegments([...citySegments, {
        id: newId,
        departure: '',
        destination: '',
        dateType: 'fixed',
        date: '',
        flexFrom: '',
        flexTo: ''
      }]);
    }
  };

  const removeCitySegment = (id: number) => {
    if (citySegments.length > 1) {
      setCitySegments(citySegments.filter(segment => segment.id !== id));
    }
  };

  const updateCitySegment = (id: number, field: keyof CitySegment, value: string) => {
    setCitySegments(citySegments.map(segment =>
      segment.id === id ? { ...segment, [field]: value } : segment
    ));
  };

  const updateSegmentDateType = (id: number, dateType: DateType) => {
    setCitySegments(citySegments.map(segment =>
      segment.id === id ? { ...segment, dateType } : segment
    ));
  };

  const updateDateFlexibility = (field: keyof DateFlexibility, value: string | DateType) => {
    setDateFlexibility(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.departure || !formData.destination) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    // Validate departure date based on type
    if (dateFlexibility.departureType === 'fixed' && !dateFlexibility.departureDate) {
      setError('Please select a departure date');
      setLoading(false);
      return;
    }

    if (dateFlexibility.departureType === 'flexible' && (!dateFlexibility.departureFlexFrom || !dateFlexibility.departureFlexTo)) {
      setError('Please select a departure date range');
      setLoading(false);
      return;
    }

    // For round trips, validate return date
    if (formData.tripType === 'round-trip') {
      if (dateFlexibility.returnType === 'fixed' && !dateFlexibility.returnDate) {
        setError('Please select a return date for round trips');
        setLoading(false);
        return;
      }
      if (dateFlexibility.returnType === 'flexible' && (!dateFlexibility.returnFlexFrom || !dateFlexibility.returnFlexTo)) {
        setError('Please select a return date range');
        setLoading(false);
        return;
      }
    }

    // For multi-city trips, validate all segments
    if (formData.tripType === 'multi-city') {
      for (const segment of citySegments) {
        if (!segment.departure || !segment.destination) {
          setError('Please fill in all departure and destination cities for each segment');
          setLoading(false);
          return;
        }

        if (segment.dateType === 'fixed' && !segment.date) {
          setError('Please select a date for each segment');
          setLoading(false);
          return;
        }

        if (segment.dateType === 'flexible' && (!segment.flexFrom || !segment.flexTo)) {
          setError('Please select a date range for each segment');
          setLoading(false);
          return;
        }
      }
    }

    try {
      // Create FormData for Formspree submission
      const formDataToSend = new FormData();

      // Add all main form fields
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('tripType', formData.tripType);

      if (formData.tripType === 'multi-city') {
        // For multi-city, add all segments
        citySegments.forEach((segment, index) => {
          formDataToSend.append(`segment${index + 1}_departure`, segment.departure);
          formDataToSend.append(`segment${index + 1}_destination`, segment.destination);
          formDataToSend.append(`segment${index + 1}_dateType`, segment.dateType);

          if (segment.dateType === 'fixed') {
            formDataToSend.append(`segment${index + 1}_date`, segment.date);
          } else {
            formDataToSend.append(`segment${index + 1}_flexFrom`, segment.flexFrom);
            formDataToSend.append(`segment${index + 1}_flexTo`, segment.flexTo);
          }
        });
      } else {
        // For one-way/round trip
        formDataToSend.append('departure', formData.departure);
        formDataToSend.append('destination', formData.destination);

        // Departure dates
        formDataToSend.append('departureDateType', dateFlexibility.departureType);
        if (dateFlexibility.departureType === 'fixed') {
          formDataToSend.append('departureDate', dateFlexibility.departureDate);
        } else {
          formDataToSend.append('departureFlexFrom', dateFlexibility.departureFlexFrom);
          formDataToSend.append('departureFlexTo', dateFlexibility.departureFlexTo);
        }

        // Return dates for round trips
        if (formData.tripType === 'round-trip') {
          formDataToSend.append('returnDateType', dateFlexibility.returnType);
          if (dateFlexibility.returnType === 'fixed') {
            formDataToSend.append('returnDate', dateFlexibility.returnDate);
          } else {
            formDataToSend.append('returnFlexFrom', dateFlexibility.returnFlexFrom);
            formDataToSend.append('returnFlexTo', dateFlexibility.returnFlexTo);
          }
        }
      }

      formDataToSend.append('message', formData.message);

      // Formspree configuration
      const subject = formData.tripType === 'multi-city'
        ? `New Multi-City Trip Inquiry from ${formData.name} (${citySegments.length} segments)`
        : `New ${formData.tripType} Travel Inquiry from ${formData.name}`;

      formDataToSend.append('_subject', subject);
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
            message: '',
          });
          setDateFlexibility({
            departureType: 'fixed',
            departureDate: '',
            departureFlexFrom: '',
            departureFlexTo: '',
            returnType: 'fixed',
            returnDate: '',
            returnFlexFrom: '',
            returnFlexTo: '',
          });
          setCitySegments([{
            id: 1,
            departure: '',
            destination: '',
            dateType: 'fixed',
            date: '',
            flexFrom: '',
            flexTo: ''
          }]);
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
    setFormData(prev => ({
      ...prev,
      tripType,
    }));

    // Reset to single segment when switching away from multi-city
    if (tripType !== 'multi-city' && citySegments.length > 1) {
      setCitySegments([{
        id: 1,
        departure: '',
        destination: '',
        dateType: 'fixed',
        date: '',
        flexFrom: '',
        flexTo: ''
      }]);
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

  const renderDateSelector = (
    type: DateType,
    setType: (type: DateType) => void,
    fixedDate: string,
    setFixedDate: (date: string) => void,
    flexFrom: string,
    setFlexFrom: (date: string) => void,
    flexTo: string,
    setFlexTo: (date: string) => void,
    label: string,
    isReturnDate?: boolean
  ) => (
    <div>
      <label className="block text-gray-300 font-semibold mb-2">
        {label} {!isReturnDate && <span className="text-teal-400">*</span>}
      </label>

      {/* Date Type Toggle */}
      <div className="flex space-x-2 mb-3">
        <button
          type="button"
          onClick={() => setType('fixed')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${type === 'fixed'
              ? 'bg-teal-500 text-dark-950'
              : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
            }`}
        >
          Fixed Date
        </button>
        <button
          type="button"
          onClick={() => setType('flexible')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${type === 'flexible'
              ? 'bg-teal-500 text-dark-950'
              : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
            }`}
        >
          Flexible Dates
        </button>
      </div>

      {/* Date Inputs */}
      {type === 'fixed' ? (
        <input
          type="date"
          value={fixedDate}
          onChange={(e) => setFixedDate(e.target.value)}
          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
          min={new Date().toISOString().split('T')[0]}
        />
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Earliest Date</label>
            <input
              type="date"
              value={flexFrom}
              onChange={(e) => setFlexFrom(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-dark-900/50 border border-dark-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Latest Date</label>
            <input
              type="date"
              value={flexTo}
              onChange={(e) => setFlexTo(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-dark-900/50 border border-dark-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all"
              min={flexFrom || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>
      )}

      {type === 'flexible' && (
        <p className="text-xs text-gray-400 mt-1">
          We'll find the best options within your preferred range
        </p>
      )}
    </div>
  );

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

                <div className="space-y-4">
                  {/* Personal Information */}
                  <div className="p-4 bg-dark-700/30 rounded-lg border border-dark-600">
                    <h4 className="text-teal-300 font-semibold mb-3">Personal Information</h4>
                    <div className="space-y-4">
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
                    </div>
                  </div>

                  {/* Trip Details - Dynamic based on trip type */}
                  {formData.tripType === 'multi-city' ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-dark-700/30 rounded-lg border border-dark-600">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-teal-300 font-semibold">Multi-City Itinerary</h4>
                          <span className="text-xs text-gray-400">
                            {citySegments.length} of 6 segments
                          </span>
                        </div>

                        {/* Segments */}
                        {citySegments.map((segment, index) => (
                          <div key={segment.id} className={`mb-4 p-4 bg-dark-800/50 rounded-lg border ${index === 0 ? 'border-teal-400/30' : 'border-dark-700'}`}>
                            <div className="flex justify-between items-center mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-teal-400 font-bold">{index + 1}</span>
                                <span className="text-gray-300 font-medium">
                                  {index === 0 ? 'First Leg' : 'Next Leg'}
                                </span>
                              </div>
                              {index > 0 && (
                                <button
                                  type="button"
                                  onClick={() => removeCitySegment(segment.id)}
                                  className="text-red-400 hover:text-red-300 text-sm font-medium"
                                >
                                  Remove
                                </button>
                              )}
                            </div>

                            <div className="space-y-3">
                              <div className="grid md:grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-gray-300 text-sm mb-1">
                                    Departure City <span className="text-teal-400">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    value={segment.departure}
                                    onChange={(e) => updateCitySegment(segment.id, 'departure', e.target.value)}
                                    required
                                    className="w-full px-3 py-2 rounded-lg bg-dark-900/50 border border-dark-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all"
                                    placeholder={index === 0 ? "Starting city" : "Departure city"}
                                  />
                                </div>
                                <div>
                                  <label className="block text-gray-300 text-sm mb-1">
                                    Destination City <span className="text-teal-400">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    value={segment.destination}
                                    onChange={(e) => updateCitySegment(segment.id, 'destination', e.target.value)}
                                    required
                                    className="w-full px-3 py-2 rounded-lg bg-dark-900/50 border border-dark-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all"
                                    placeholder="Destination city"
                                  />
                                </div>
                              </div>

                              {/* Segment Date Selector */}
                              {renderDateSelector(
                                segment.dateType,
                                (type) => updateSegmentDateType(segment.id, type),
                                segment.date,
                                (date) => updateCitySegment(segment.id, 'date', date),
                                segment.flexFrom,
                                (date) => updateCitySegment(segment.id, 'flexFrom', date),
                                segment.flexTo,
                                (date) => updateCitySegment(segment.id, 'flexTo', date),
                                `Departure Date for ${index === 0 ? 'First Leg' : `Leg ${index + 1}`}`
                              )}
                            </div>
                          </div>
                        ))}

                        {/* Add More Segments Button */}
                        {citySegments.length < 6 && (
                          <button
                            type="button"
                            onClick={addCitySegment}
                            className="w-full py-2 bg-dark-700/50 hover:bg-dark-700 border border-dashed border-dark-600 hover:border-teal-400/50 rounded-lg text-gray-400 hover:text-teal-300 transition-all duration-300"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-lg">+</span>
                              <span>Add Another City</span>
                              <span className="text-xs text-gray-500">({6 - citySegments.length} remaining)</span>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* One-Way / Round Trip Layout */
                    <div className="p-4 bg-dark-700/30 rounded-lg border border-dark-600">
                      <h4 className="text-teal-300 font-semibold mb-3">Trip Details</h4>
                      <div className="space-y-4">
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
                        </div>

                        {/* Departure Date Selector */}
                        {renderDateSelector(
                          dateFlexibility.departureType,
                          (type) => updateDateFlexibility('departureType', type),
                          dateFlexibility.departureDate,
                          (date) => updateDateFlexibility('departureDate', date),
                          dateFlexibility.departureFlexFrom,
                          (date) => updateDateFlexibility('departureFlexFrom', date),
                          dateFlexibility.departureFlexTo,
                          (date) => updateDateFlexibility('departureFlexTo', date),
                          'Departure Date'
                        )}

                        {/* Return Date Selector (only for round trips) */}
                        {formData.tripType === 'round-trip' && renderDateSelector(
                          dateFlexibility.returnType,
                          (type) => updateDateFlexibility('returnType', type),
                          dateFlexibility.returnDate,
                          (date) => updateDateFlexibility('returnDate', date),
                          dateFlexibility.returnFlexFrom,
                          (date) => updateDateFlexibility('returnFlexFrom', date),
                          dateFlexibility.returnFlexTo,
                          (date) => updateDateFlexibility('returnFlexTo', date),
                          'Return Date',
                          true
                        )}
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Additional Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all resize-none glow-border"
                      placeholder="Tell us about your travel preferences, accommodation needs, budget, or any special requests..."
                    ></textarea>
                  </div>
                </div>

                {/* Hidden Formspree fields */}
                <input type="hidden" name="_subject" value={
                  formData.tripType === 'multi-city'
                    ? `New Multi-City Trip Inquiry from ${formData.name} (${citySegments.length} segments)`
                    : `New ${formData.tripType} Travel Inquiry from ${formData.name}`
                } />
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

          {/* Right Side Content */}
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
                    <p className="text-gray-400">Single journey to your destination</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400">🔁</span>
                  <div>
                    <p className="font-semibold text-teal-300">Round Trip</p>
                    <p className="text-gray-400">Return to your original departure city</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400">🗺️</span>
                  <div>
                    <p className="font-semibold text-teal-300">Multi City</p>
                    <p className="text-gray-400">Visit multiple destinations (up to 6 cities)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Date Flexibility Info */}
            <div className="bg-teal-900/20 border border-teal-400/30 backdrop-blur rounded-2xl p-6 glow-border-teal">
              <h4 className="text-teal-300 font-bold mb-3">Date Flexibility</h4>
              <div className="space-y-3 text-sm text-teal-100/80">
                <div className="flex items-start gap-2">
                  <span className="text-teal-400 mt-0.5">📅</span>
                  <div>
                    <p className="font-medium text-teal-300">Fixed Dates</p>
                    <p className="text-teal-100/70">Best for specific travel plans with set dates</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-400 mt-0.5">🔄</span>
                  <div>
                    <p className="font-medium text-teal-300">Flexible Dates</p>
                    <p className="text-teal-100/70">Get better prices by allowing date range searches</p>
                  </div>
                </div>
                <div className="text-xs text-teal-200/60 mt-2">
                  <p>Tip: Flexible dates often save 15-30% on flights</p>
                </div>
              </div>
            </div>

            {/* Multi-City Tips (only shown for multi-city) */}
            {formData.tripType === 'multi-city' && (
              <div className="bg-dark-800/60 border border-teal-400/30 backdrop-blur rounded-2xl p-6 glow-border">
                <h4 className="text-teal-300 font-bold mb-3">Multi-City Planning</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Use date ranges to find optimal connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Allow 2-4 weeks between distant cities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Consider seasonal weather patterns</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}