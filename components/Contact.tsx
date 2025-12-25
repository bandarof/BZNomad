import { useState } from 'react';

type TripType = 'one-way' | 'round-trip' | 'multi-city';
type DateType = 'flexible' | 'fixed';
type TransportType = 'plane' | 'train' | 'bus' | 'car';
type HotelStars = 'none' | '1' | '2' | '3' | '4' | '5' | 'luxury';
type CarCategory = 'none' | 'economy' | 'compact' | 'midsize' | 'fullsize' | 'suv' | 'luxury' | 'minivan';

interface PassengerCount {
  adults: number;
  children: number;
  infants: number;
}

interface SideTrip {
  id: number;
  type: 'one-way' | 'round-trip';
  transport: TransportType;
  departure: string;
  destination: string;
  dateType: DateType;
  date: string;
  flexFrom: string;
  flexTo: string;
  returnDate?: string;
  returnFlexFrom?: string;
  returnFlexTo?: string;
  segmentId?: number; // For multi-city segments
  hotelStars: HotelStars;
  carCategory: CarCategory;
  passengers: PassengerCount;
}

interface CitySegment {
  id: number;
  departure: string;
  destination: string;
  dateType: DateType;
  date: string;
  flexFrom: string;
  flexTo: string;
  hotelStars: HotelStars;
  carCategory: CarCategory;
  sideTrips: SideTrip[];
  passengers: PassengerCount;
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
    hotelStars: 'none' as HotelStars,
    carCategory: 'none' as CarCategory,
    passengers: { adults: 1, children: 0, infants: 0 } as PassengerCount,
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
      flexTo: '',
      hotelStars: 'none',
      carCategory: 'none',
      sideTrips: [],
      passengers: { adults: 1, children: 0, infants: 0 }
    }
  ]);

  const [roundTripSideTrips, setRoundTripSideTrips] = useState<SideTrip[]>([]);
  const [honeypot, setHoneypot] = useState('');
  const [formToken, setFormToken] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Generate form token on component mount
  useState(() => {
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setFormToken(token);
  });

  // Add side trip to round trip
  const addRoundTripSideTrip = () => {
    // Calculate default dates based on round trip dates
    let date = '';
    let flexFrom = '';
    let flexTo = '';
    let returnDate = '';
    let returnFlexFrom = '';
    let returnFlexTo = '';

    if (dateFlexibility.departureType === 'fixed' && dateFlexibility.departureDate && dateFlexibility.returnDate) {
      date = dateFlexibility.departureDate;
      returnDate = dateFlexibility.returnDate;
    } else if (dateFlexibility.departureType === 'flexible' && dateFlexibility.departureFlexFrom && dateFlexibility.departureFlexTo) {
      flexFrom = dateFlexibility.departureFlexFrom;
      flexTo = dateFlexibility.departureFlexTo;
      if (dateFlexibility.returnFlexFrom && dateFlexibility.returnFlexTo) {
        returnFlexFrom = dateFlexibility.returnFlexFrom;
        returnFlexTo = dateFlexibility.returnFlexTo;
      }
    }

    const newSideTrip: SideTrip = {
      id: Date.now(),
      type: 'one-way',
      transport: 'plane',
      departure: formData.destination || '',
      destination: '',
      dateType: dateFlexibility.departureType,
      date,
      flexFrom,
      flexTo,
      returnDate,
      returnFlexFrom,
      returnFlexTo,
      hotelStars: 'none',
      carCategory: 'none',
      passengers: { adults: formData.passengers.adults, children: formData.passengers.children, infants: formData.passengers.infants }
    };

    setRoundTripSideTrips([...roundTripSideTrips, newSideTrip]);
  };

  const updateRoundTripSideTrip = (sideTripId: number, field: keyof SideTrip, value: any) => {
    setRoundTripSideTrips(roundTripSideTrips.map(trip =>
      trip.id === sideTripId ? { ...trip, [field]: value } : trip
    ));
  };

  const removeRoundTripSideTrip = (sideTripId: number) => {
    setRoundTripSideTrips(roundTripSideTrips.filter(trip => trip.id !== sideTripId));
  };

  const addCitySegment = () => {
    if (citySegments.length < 10) {
      const lastSegment = citySegments[citySegments.length - 1];
      const newId = citySegments.length + 1;

      const departure = lastSegment.destination || '';

      setCitySegments([...citySegments, {
        id: newId,
        departure,
        destination: '',
        dateType: 'fixed',
        date: '',
        flexFrom: '',
        flexTo: '',
        hotelStars: 'none',
        carCategory: 'none',
        sideTrips: [],
        passengers: { adults: 1, children: 0, infants: 0 }
      }]);
    }
  };

  const removeCitySegment = (id: number) => {
    if (citySegments.length > 1) {
      setCitySegments(citySegments.filter(segment => segment.id !== id));
    }
  };

  const updateCitySegment = (id: number, field: keyof CitySegment, value: any) => {
    setCitySegments(citySegments.map(segment =>
      segment.id === id ? { ...segment, [field]: value } : segment
    ));
  };

  const updateSegmentDateType = (id: number, dateType: DateType) => {
    setCitySegments(citySegments.map(segment =>
      segment.id === id ? { ...segment, dateType } : segment
    ));
  };

  const updateSegmentDestination = (id: number, destination: string) => {
    const updatedSegments = citySegments.map((segment, index, array) => {
      if (segment.id === id) {
        return { ...segment, destination };
      }
      const targetIndex = array.findIndex(s => s.id === id);
      if (targetIndex !== -1 && array[targetIndex + 1]?.id === segment.id) {
        return { ...segment, departure: destination };
      }
      return segment;
    });

    setCitySegments(updatedSegments);
  };

  const updateDateFlexibility = (field: keyof DateFlexibility, value: string | DateType) => {
    setDateFlexibility(prev => ({ ...prev, [field]: value }));
  };

  const addSideTrip = (segmentId: number) => {
    const segment = citySegments.find(s => s.id === segmentId);
    if (!segment) return;

    // Calculate default date range for side trip based on segment dates
    let date = '';
    let flexFrom = '';
    let flexTo = '';

    if (segment.dateType === 'fixed' && segment.date) {
      date = segment.date;
    } else if (segment.dateType === 'flexible' && segment.flexFrom && segment.flexTo) {
      flexFrom = segment.flexFrom;
      flexTo = segment.flexTo;
    }

    const newSideTrip: SideTrip = {
      id: Date.now(),
      type: 'one-way',
      transport: 'plane',
      departure: segment.destination || '',
      destination: '',
      dateType: segment.dateType,
      date,
      flexFrom,
      flexTo,
      segmentId: segmentId,
      hotelStars: 'none',
      carCategory: 'none',
      passengers: { adults: segment.passengers.adults, children: segment.passengers.children, infants: segment.passengers.infants }
    };

    setCitySegments(citySegments.map(segment =>
      segment.id === segmentId
        ? { ...segment, sideTrips: [...segment.sideTrips, newSideTrip] }
        : segment
    ));
  };

  const updateSideTrip = (segmentId: number, sideTripId: number, field: keyof SideTrip, value: any) => {
    setCitySegments(citySegments.map(segment =>
      segment.id === segmentId
        ? {
          ...segment,
          sideTrips: segment.sideTrips.map(trip =>
            trip.id === sideTripId ? { ...trip, [field]: value } : trip
          )
        }
        : segment
    ));
  };

  const removeSideTrip = (segmentId: number, sideTripId: number) => {
    setCitySegments(citySegments.map(segment =>
      segment.id === segmentId
        ? {
          ...segment,
          sideTrips: segment.sideTrips.filter(trip => trip.id !== sideTripId)
        }
        : segment
    ));
  };

  // Passenger count renderer component
  const renderPassengerSelector = (
    passengers: PassengerCount,
    onChange: (passengers: PassengerCount) => void,
    label: string,
    isSideTrip?: boolean
  ) => (
    <div className={`mb-${isSideTrip ? '2' : '4'}`}>
      <label className={`block ${isSideTrip ? 'text-gray-300 text-xs' : 'text-gray-300 font-semibold'} mb-1`}>
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {/* Adults */}
        <div className="flex items-center bg-dark-700 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => onChange({ ...passengers, adults: Math.max(1, passengers.adults - 1) })}
            className="px-3 py-2 bg-dark-800 hover:bg-dark-600 text-gray-300 transition-colors"
            disabled={passengers.adults <= 1}
          >
            -
          </button>
          <div className="px-4 py-2 min-w-[60px] text-center">
            <div className="text-gray-100 font-medium">{passengers.adults}</div>
            <div className="text-xs text-gray-400">Adult{passengers.adults !== 1 ? 's' : ''}</div>
          </div>
          <button
            type="button"
            onClick={() => onChange({ ...passengers, adults: passengers.adults + 1 })}
            className="px-3 py-2 bg-dark-800 hover:bg-dark-600 text-gray-300 transition-colors"
            disabled={passengers.adults >= 9}
          >
            +
          </button>
        </div>

        {/* Children */}
        <div className="flex items-center bg-dark-700 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => onChange({ ...passengers, children: Math.max(0, passengers.children - 1) })}
            className="px-3 py-2 bg-dark-800 hover:bg-dark-600 text-gray-300 transition-colors"
            disabled={passengers.children <= 0}
          >
            -
          </button>
          <div className="px-4 py-2 min-w-[60px] text-center">
            <div className="text-gray-100 font-medium">{passengers.children}</div>
            <div className="text-xs text-gray-400">Child{passengers.children !== 1 ? 'ren' : ''}</div>
          </div>
          <button
            type="button"
            onClick={() => onChange({ ...passengers, children: passengers.children + 1 })}
            className="px-3 py-2 bg-dark-800 hover:bg-dark-600 text-gray-300 transition-colors"
            disabled={passengers.children >= 9}
          >
            +
          </button>
        </div>

        {/* Infants */}
        <div className="flex items-center bg-dark-700 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => onChange({ ...passengers, infants: Math.max(0, passengers.infants - 1) })}
            className="px-3 py-2 bg-dark-800 hover:bg-dark-600 text-gray-300 transition-colors"
            disabled={passengers.infants <= 0}
          >
            -
          </button>
          <div className="px-4 py-2 min-w-[60px] text-center">
            <div className="text-gray-100 font-medium">{passengers.infants}</div>
            <div className="text-xs text-gray-400">Infant{passengers.infants !== 1 ? 's' : ''}</div>
          </div>
          <button
            type="button"
            onClick={() => onChange({ ...passengers, infants: passengers.infants + 1 })}
            className="px-3 py-2 bg-dark-800 hover:bg-dark-600 text-gray-300 transition-colors"
            disabled={passengers.infants >= 9}
          >
            +
          </button>
        </div>
      </div>
      {isSideTrip && (
        <p className="text-xs text-gray-400 mt-1">
          Total: {passengers.adults + passengers.children + passengers.infants} passenger{passengers.adults + passengers.children + passengers.infants !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );

  const getSegmentDateRange = (segment: CitySegment) => {
    if (segment.dateType === 'fixed') {
      return { min: segment.date, max: segment.date };
    } else {
      return { min: segment.flexFrom, max: segment.flexTo };
    }
  };

  const getNextSegmentDateRange = (segmentId: number) => {
    const currentSegmentIndex = citySegments.findIndex(s => s.id === segmentId);
    if (currentSegmentIndex === -1 || currentSegmentIndex >= citySegments.length - 1) {
      return null;
    }

    const nextSegment = citySegments[currentSegmentIndex + 1];
    return getSegmentDateRange(nextSegment);
  };

  const validateMultiCity = () => {
    for (const segment of citySegments) {
      if (!segment.departure || !segment.destination) {
        setError('Please fill in all departure and destination cities for each segment');
        return false;
      }

      if (segment.dateType === 'fixed' && !segment.date) {
        setError('Please select a date for each segment');
        return false;
      }

      if (segment.dateType === 'flexible' && (!segment.flexFrom || !segment.flexTo)) {
        setError('Please select a date range for each segment');
        return false;
      }

      // Validate passenger counts for segment
      if (segment.passengers.adults < 1) {
        setError('At least 1 adult passenger is required for each segment');
        return false;
      }

      for (const sideTrip of segment.sideTrips) {
        if (!sideTrip.departure || !sideTrip.destination) {
          setError('Please fill in departure and destination for all side trips');
          return false;
        }

        if (sideTrip.dateType === 'fixed' && !sideTrip.date) {
          setError('Please select a date for all side trips');
          return false;
        }

        if (sideTrip.dateType === 'flexible' && (!sideTrip.flexFrom || !sideTrip.flexTo)) {
          setError('Please select a date range for all side trips');
          return false;
        }

        // Validate passenger counts for side trip
        if (sideTrip.passengers.adults < 1) {
          setError('At least 1 adult passenger is required for each side trip');
          return false;
        }

        if (sideTrip.type === 'round-trip') {
          if (sideTrip.dateType === 'fixed' && !sideTrip.returnDate) {
            setError('Please select a return date for round-trip side trips');
            return false;
          }
          if (sideTrip.dateType === 'flexible' && (!sideTrip.returnFlexFrom || !sideTrip.returnFlexTo)) {
            setError('Please select a return date range for round-trip side trips');
            return false;
          }
        }
      }
    }
    return true;
  };

  const validateRoundTripSideTrips = () => {
    for (const sideTrip of roundTripSideTrips) {
      if (!sideTrip.departure || !sideTrip.destination) {
        setError('Please fill in departure and destination for all side trips');
        return false;
      }

      if (sideTrip.dateType === 'fixed' && !sideTrip.date) {
        setError('Please select a date for all side trips');
        return false;
      }

      if (sideTrip.dateType === 'flexible' && (!sideTrip.flexFrom || !sideTrip.flexTo)) {
        setError('Please select a date range for all side trips');
        return false;
      }

      // Validate passenger counts for side trip
      if (sideTrip.passengers.adults < 1) {
        setError('At least 1 adult passenger is required for each side trip');
        return false;
      }

      if (sideTrip.type === 'round-trip') {
        if (sideTrip.dateType === 'fixed' && !sideTrip.returnDate) {
          setError('Please select a return date for round-trip side trips');
          return false;
        }
        if (sideTrip.dateType === 'flexible' && (!sideTrip.returnFlexFrom || !sideTrip.returnFlexTo)) {
          setError('Please select a return date range for round-trip side trips');
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Anti-spam validation
    if (honeypot) {
      setError('Submission failed. Please try again.');
      setLoading(false);
      return;
    }

    if (!formToken) {
      setError('Form validation failed. Please refresh the page and try again.');
      setLoading(false);
      return;
    }

    // Time-based validation
    const formStartTime = (e.target as HTMLFormElement).dataset.startTime;
    if (formStartTime) {
      const timeElapsed = Date.now() - parseInt(formStartTime);
      if (timeElapsed < 2000) {
        setError('Please take a moment to review your information before submitting.');
        setLoading(false);
        return;
      }
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required personal information');
      setLoading(false);
      return;
    }

    // Validate passenger counts for main trip
    if (formData.passengers.adults < 1) {
      setError('At least 1 adult passenger is required');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)\.]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid phone number');
      setLoading(false);
      return;
    }

    if (formData.tripType === 'multi-city') {
      if (!validateMultiCity()) {
        setLoading(false);
        return;
      }
    } else {
      if (!formData.departure || !formData.destination) {
        setError('Please fill in departure and destination cities');
        setLoading(false);
        return;
      }

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

        // Validate round trip side trips
        if (!validateRoundTripSideTrips()) {
          setLoading(false);
          return;
        }
      }
    }

    try {
      const formDataToSend = new FormData();

      // Add honeypot and token
      formDataToSend.append('_honeypot', honeypot);
      formDataToSend.append('_token', formToken);
      formDataToSend.append('_timestamp', Date.now().toString());

      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('tripType', formData.tripType);
      formDataToSend.append('hotelStars', formData.hotelStars);
      formDataToSend.append('carCategory', formData.carCategory);
      formDataToSend.append('passengers_adults', formData.passengers.adults.toString());
      formDataToSend.append('passengers_children', formData.passengers.children.toString());
      formDataToSend.append('passengers_infants', formData.passengers.infants.toString());

      if (formData.tripType === 'multi-city') {
        citySegments.forEach((segment, index) => {
          formDataToSend.append(`segment${index + 1}_departure`, segment.departure);
          formDataToSend.append(`segment${index + 1}_destination`, segment.destination);
          formDataToSend.append(`segment${index + 1}_dateType`, segment.dateType);
          formDataToSend.append(`segment${index + 1}_hotelStars`, segment.hotelStars);
          formDataToSend.append(`segment${index + 1}_carCategory`, segment.carCategory);
          formDataToSend.append(`segment${index + 1}_passengers_adults`, segment.passengers.adults.toString());
          formDataToSend.append(`segment${index + 1}_passengers_children`, segment.passengers.children.toString());
          formDataToSend.append(`segment${index + 1}_passengers_infants`, segment.passengers.infants.toString());

          if (segment.dateType === 'fixed') {
            formDataToSend.append(`segment${index + 1}_date`, segment.date);
          } else {
            formDataToSend.append(`segment${index + 1}_flexFrom`, segment.flexFrom);
            formDataToSend.append(`segment${index + 1}_flexTo`, segment.flexTo);
          }

          segment.sideTrips.forEach((sideTrip, sideIndex) => {
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_type`, sideTrip.type);
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_transport`, sideTrip.transport);
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_departure`, sideTrip.departure);
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_destination`, sideTrip.destination);
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_dateType`, sideTrip.dateType);
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_hotelStars`, sideTrip.hotelStars);
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_carCategory`, sideTrip.carCategory);
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_passengers_adults`, sideTrip.passengers.adults.toString());
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_passengers_children`, sideTrip.passengers.children.toString());
            formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_passengers_infants`, sideTrip.passengers.infants.toString());

            if (sideTrip.dateType === 'fixed') {
              formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_date`, sideTrip.date);
              if (sideTrip.type === 'round-trip' && sideTrip.returnDate) {
                formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_returnDate`, sideTrip.returnDate);
              }
            } else {
              formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_flexFrom`, sideTrip.flexFrom);
              formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_flexTo`, sideTrip.flexTo);
              if (sideTrip.type === 'round-trip') {
                if (sideTrip.returnFlexFrom) {
                  formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_returnFlexFrom`, sideTrip.returnFlexFrom);
                }
                if (sideTrip.returnFlexTo) {
                  formDataToSend.append(`segment${index + 1}_side${sideIndex + 1}_returnFlexTo`, sideTrip.returnFlexTo);
                }
              }
            }
          });
        });
      } else {
        formDataToSend.append('departure', formData.departure);
        formDataToSend.append('destination', formData.destination);

        formDataToSend.append('departureDateType', dateFlexibility.departureType);
        if (dateFlexibility.departureType === 'fixed') {
          formDataToSend.append('departureDate', dateFlexibility.departureDate);
        } else {
          formDataToSend.append('departureFlexFrom', dateFlexibility.departureFlexFrom);
          formDataToSend.append('departureFlexTo', dateFlexibility.departureFlexTo);
        }

        if (formData.tripType === 'round-trip') {
          formDataToSend.append('returnDateType', dateFlexibility.returnType);
          if (dateFlexibility.returnType === 'fixed') {
            formDataToSend.append('returnDate', dateFlexibility.returnDate);
          } else {
            formDataToSend.append('returnFlexFrom', dateFlexibility.returnFlexFrom);
            formDataToSend.append('returnFlexTo', dateFlexibility.returnFlexTo);
          }

          // Add round trip side trips
          roundTripSideTrips.forEach((sideTrip, index) => {
            formDataToSend.append(`side${index + 1}_type`, sideTrip.type);
            formDataToSend.append(`side${index + 1}_transport`, sideTrip.transport);
            formDataToSend.append(`side${index + 1}_departure`, sideTrip.departure);
            formDataToSend.append(`side${index + 1}_destination`, sideTrip.destination);
            formDataToSend.append(`side${index + 1}_dateType`, sideTrip.dateType);
            formDataToSend.append(`side${index + 1}_hotelStars`, sideTrip.hotelStars);
            formDataToSend.append(`side${index + 1}_carCategory`, sideTrip.carCategory);
            formDataToSend.append(`side${index + 1}_passengers_adults`, sideTrip.passengers.adults.toString());
            formDataToSend.append(`side${index + 1}_passengers_children`, sideTrip.passengers.children.toString());
            formDataToSend.append(`side${index + 1}_passengers_infants`, sideTrip.passengers.infants.toString());

            if (sideTrip.dateType === 'fixed') {
              formDataToSend.append(`side${index + 1}_date`, sideTrip.date);
              if (sideTrip.type === 'round-trip' && sideTrip.returnDate) {
                formDataToSend.append(`side${index + 1}_returnDate`, sideTrip.returnDate);
              }
            } else {
              formDataToSend.append(`side${index + 1}_flexFrom`, sideTrip.flexFrom);
              formDataToSend.append(`side${index + 1}_flexTo`, sideTrip.flexTo);
              if (sideTrip.type === 'round-trip') {
                if (sideTrip.returnFlexFrom) {
                  formDataToSend.append(`side${index + 1}_returnFlexFrom`, sideTrip.returnFlexFrom);
                }
                if (sideTrip.returnFlexTo) {
                  formDataToSend.append(`side${index + 1}_returnFlexTo`, sideTrip.returnFlexTo);
                }
              }
            }
          });
        }
      }

      formDataToSend.append('message', formData.message);

      const subject = formData.tripType === 'multi-city'
        ? `New Multi-City Trip Inquiry from ${formData.name} (${citySegments.length} segments, ${formData.passengers.adults + formData.passengers.children + formData.passengers.infants} passengers)`
        : `New ${formData.tripType} Travel Inquiry from ${formData.name} (${formData.passengers.adults + formData.passengers.children + formData.passengers.infants} passengers)${roundTripSideTrips.length > 0 ? ` with ${roundTripSideTrips.length} side trips` : ''}`;

      formDataToSend.append('_subject', subject);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_cc', formData.email);
      formDataToSend.append('_next', 'https://bznomad.com/thank-you');
      formDataToSend.append('_format', 'plain');

      // Add additional headers for spam protection
      formDataToSend.append('_gotcha', '');

      const response = await fetch('https://formspree.io/f/xwveggld', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            tripType: 'round-trip',
            departure: '',
            destination: '',
            message: '',
            hotelStars: 'none',
            carCategory: 'none',
            passengers: { adults: 1, children: 0, infants: 0 }
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
            flexTo: '',
            hotelStars: 'none',
            carCategory: 'none',
            sideTrips: [],
            passengers: { adults: 1, children: 0, infants: 0 }
          }]);
          setRoundTripSideTrips([]);
          setHoneypot('');
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

    if (tripType !== 'multi-city' && citySegments.length > 1) {
      setCitySegments([{
        id: 1,
        departure: '',
        destination: '',
        dateType: 'fixed',
        date: '',
        flexFrom: '',
        flexTo: '',
        hotelStars: 'none',
        carCategory: 'none',
        sideTrips: [],
        passengers: { adults: 1, children: 0, infants: 0 }
      }]);
    }
  };

  // Rest of the component remains the same until the render...

  // In the JSX for one-way/round-trip section, add:
  {
    renderPassengerSelector(
      formData.passengers,
      (passengers) => setFormData(prev => ({ ...prev, passengers })),
      'Passengers'
    )
  }

  // In the JSX for multi-city segments, add:
  {
    renderPassengerSelector(
      segment.passengers,
      (passengers) => updateCitySegment(segment.id, 'passengers', passengers),
      `Passengers for ${segment.destination || 'this segment'}`
    )
  }

  // In the JSX for side trips (both multi-city and round-trip), add:
  {
    renderPassengerSelector(
      sideTrip.passengers,
      (passengers) => isRoundTripSideTrip
        ? updateRoundTripSideTrip(sideTrip.id, 'passengers', passengers)
        : updateSideTrip(segment.id, sideTrip.id, 'passengers', passengers),
      `Passengers for ${sideTrip.destination || 'side trip'}`,
      true
    )
  }