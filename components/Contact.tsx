import { useState } from 'react';
import TipsAndFAQs from './TipsAndFAQs';

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
  segmentId?: number;
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

  // Generate form token
  useState(() => {
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setFormToken(token);
  });

  // Passenger count renderer
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

  // Add side trip to round trip
  const addRoundTripSideTrip = () => {
    const newSideTrip: SideTrip = {
      id: Date.now(),
      type: 'one-way',
      transport: 'plane',
      departure: formData.destination || '',
      destination: '',
      dateType: dateFlexibility.departureType,
      date: dateFlexibility.departureDate,
      flexFrom: dateFlexibility.departureFlexFrom,
      flexTo: dateFlexibility.departureFlexTo,
      returnDate: dateFlexibility.returnDate,
      returnFlexFrom: dateFlexibility.returnFlexFrom,
      returnFlexTo: dateFlexibility.returnFlexTo,
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

    const newSideTrip: SideTrip = {
      id: Date.now(),
      type: 'one-way',
      transport: 'plane',
      departure: segment.destination || '',
      destination: '',
      dateType: segment.dateType,
      date: segment.date,
      flexFrom: segment.flexFrom,
      flexTo: segment.flexTo,
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
    isReturnDate?: boolean,
    minDate?: string,
    maxDate?: string
  ) => (
    <div>
      <label className={`block text-gray-300 font-semibold mb-2 ${isReturnDate ? '' : 'with-asterisk'}`}>
        {label} {!isReturnDate && <span className="text-teal-400">*</span>}
      </label>

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

      {type === 'fixed' ? (
        <input
          type="date"
          value={fixedDate}
          onChange={(e) => setFixedDate(e.target.value)}
          className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all glow-border"
          min={minDate || new Date().toISOString().split('T')[0]}
          max={maxDate}
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
              min={minDate || new Date().toISOString().split('T')[0]}
              max={maxDate}
            />
          </div>
          <div>
            <label className="block text-gray-300 text-sm mb-1">Latest Date</label>
            <input
              type="date"
              value={flexTo}
              onChange={(e) => setFlexTo(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-dark-900/50 border border-dark-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all"
              min={flexFrom || minDate || new Date().toISOString().split('T')[0]}
              max={maxDate}
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

  const renderSideTripDateSelector = (sideTrip: SideTrip, isRoundTripSideTrip?: boolean) => {
    let minDate = '';
    let maxDate = '';

    if (isRoundTripSideTrip) {
      if (dateFlexibility.departureType === 'fixed') {
        minDate = dateFlexibility.departureDate;
        maxDate = dateFlexibility.returnDate || '';
      } else {
        minDate = dateFlexibility.departureFlexFrom;
        maxDate = dateFlexibility.returnFlexTo || dateFlexibility.departureFlexTo;
      }
    } else {
      const segment = citySegments.find(s => s.id === sideTrip.segmentId);
      if (!segment) return null;

      const segmentDateRange = getSegmentDateRange(segment);
      const nextSegmentDateRange = getNextSegmentDateRange(segment.id);

      minDate = segmentDateRange.min;

      if (nextSegmentDateRange) {
        maxDate = nextSegmentDateRange.min;
      } else {
        maxDate = segmentDateRange.max;
      }
    }

    return (
      <div className="mb-3">
        <label className="block text-gray-300 text-xs mb-1">Date</label>
        <div className="flex gap-1 mb-2">
          <button
            type="button"
            onClick={() => isRoundTripSideTrip
              ? updateRoundTripSideTrip(sideTrip.id, 'dateType', 'fixed')
              : updateSideTrip(sideTrip.segmentId!, sideTrip.id, 'dateType', 'fixed')
            }
            className={`px-2 py-1 rounded text-xs ${sideTrip.dateType === 'fixed' ? 'bg-teal-500 text-dark-950' : 'bg-dark-700 text-gray-400'}`}
          >
            Fixed
          </button>
          <button
            type="button"
            onClick={() => isRoundTripSideTrip
              ? updateRoundTripSideTrip(sideTrip.id, 'dateType', 'flexible')
              : updateSideTrip(sideTrip.segmentId!, sideTrip.id, 'dateType', 'flexible')
            }
            className={`px-2 py-1 rounded text-xs ${sideTrip.dateType === 'flexible' ? 'bg-teal-500 text-dark-950' : 'bg-dark-700 text-gray-400'}`}
          >
            Flexible
          </button>
        </div>

        {sideTrip.dateType === 'fixed' ? (
          <input
            type="date"
            value={sideTrip.date}
            onChange={(e) => isRoundTripSideTrip
              ? updateRoundTripSideTrip(sideTrip.id, 'date', e.target.value)
              : updateSideTrip(sideTrip.segmentId!, sideTrip.id, 'date', e.target.value)
            }
            className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
            min={minDate}
            max={maxDate}
          />
        ) : (
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-gray-300 text-xs mb-1">Earliest Date</label>
              <input
                type="date"
                value={sideTrip.flexFrom}
                onChange={(e) => isRoundTripSideTrip
                  ? updateRoundTripSideTrip(sideTrip.id, 'flexFrom', e.target.value)
                  : updateSideTrip(sideTrip.segmentId!, sideTrip.id, 'flexFrom', e.target.value)
                }
                className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                min={minDate}
                max={maxDate}
              />
            </div>
            <div>
              <label className="block text-gray-300 text-xs mb-1">Latest Date</label>
              <input
                type="date"
                value={sideTrip.flexTo}
                onChange={(e) => isRoundTripSideTrip
                  ? updateRoundTripSideTrip(sideTrip.id, 'flexTo', e.target.value)
                  : updateSideTrip(sideTrip.segmentId!, sideTrip.id, 'flexTo', e.target.value)
                }
                className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                min={sideTrip.flexFrom || minDate}
                max={maxDate}
              />
            </div>
          </div>
        )}

        {sideTrip.type === 'round-trip' && (
          <div className="mt-2">
            <label className="block text-gray-300 text-xs mb-1">
              Return Date
            </label>
            {sideTrip.dateType === 'fixed' ? (
              <input
                type="date"
                value={sideTrip.returnDate || ''}
                onChange={(e) => isRoundTripSideTrip
                  ? updateRoundTripSideTrip(sideTrip.id, 'returnDate', e.target.value)
                  : updateSideTrip(sideTrip.segmentId!, sideTrip.id, 'returnDate', e.target.value)
                }
                className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                min={sideTrip.date || minDate}
                max={maxDate}
              />
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Return From</label>
                  <input
                    type="date"
                    value={sideTrip.returnFlexFrom || ''}
                    onChange={(e) => isRoundTripSideTrip
                      ? updateRoundTripSideTrip(sideTrip.id, 'returnFlexFrom', e.target.value)
                      : updateSideTrip(sideTrip.segmentId!, sideTrip.id, 'returnFlexFrom', e.target.value)
                    }
                    className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                    min={sideTrip.flexFrom || minDate}
                    max={maxDate}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs mb-1">Return To</label>
                  <input
                    type="date"
                    value={sideTrip.returnFlexTo || ''}
                    onChange={(e) => isRoundTripSideTrip
                      ? updateRoundTripSideTrip(sideTrip.id, 'returnFlexTo', e.target.value)
                      : updateSideTrip(sideTrip.segmentId!, sideTrip.id, 'returnFlexTo', e.target.value)
                    }
                    className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                    min={sideTrip.returnFlexFrom || sideTrip.flexFrom || minDate}
                    max={maxDate}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <p className="text-xs text-gray-400 mt-1">
          Must be between {minDate} and {maxDate}
        </p>
      </div>
    );
  };

  const renderHotelStars = (
    value: HotelStars,
    onChange: (stars: HotelStars) => void,
    label: string,
    isSideTrip?: boolean
  ) => (
    <div className={isSideTrip ? 'mb-2' : 'mb-4'}>
      <label className={`block ${isSideTrip ? 'text-gray-300 text-xs' : 'text-gray-300 font-semibold'} mb-1`}>
        {label}
      </label>
      <div className="flex flex-wrap gap-1">
        {(['none', '1', '2', '3', '4', '5', 'luxury'] as HotelStars[]).map((stars) => (
          <button
            key={stars}
            type="button"
            onClick={() => onChange(stars)}
            className={`px-2 py-1 ${isSideTrip ? 'text-xs' : 'text-sm'} rounded transition-all ${value === stars
                ? 'bg-teal-500 text-dark-950 font-medium'
                : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
              }`}
          >
            {stars === 'none' ? 'No Hotel' : stars === 'luxury' ? '⭐ Luxury' : `⭐ ${stars}`}
          </button>
        ))}
      </div>
    </div>
  );

  const renderCarCategory = (
    value: CarCategory,
    onChange: (category: CarCategory) => void,
    label: string,
    isSideTrip?: boolean
  ) => (
    <div className={isSideTrip ? 'mb-2' : 'mb-4'}>
      <label className={`block ${isSideTrip ? 'text-gray-300 text-xs' : 'text-gray-300 font-semibold'} mb-1`}>
        {label}
      </label>
      <div className="flex flex-wrap gap-1">
        {(['none', 'economy', 'compact', 'midsize', 'fullsize', 'suv', 'luxury', 'minivan'] as CarCategory[]).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`px-2 py-1 ${isSideTrip ? 'text-xs' : 'text-sm'} rounded transition-all ${value === category
                ? 'bg-teal-500 text-dark-950 font-medium'
                : 'bg-dark-700 text-gray-400 hover:bg-dark-600'
              }`}
          >
            {category === 'none' ? 'No Car' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );

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

    if (formData.passengers.adults < 1) {
      setError('At least 1 adult passenger is required');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

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

        if (!validateRoundTripSideTrips()) {
          setLoading(false);
          return;
        }
      }
    }

    try {
      const formDataToSend = new FormData();

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
                data-start-time={Date.now().toString()}
              >
                {error && (
                  <div className="bg-red-950/50 border border-red-500/50 rounded-xl p-4 text-red-400 font-semibold">
                    {error}
                  </div>
                )}

                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <input type="hidden" name="_token" value={formToken} />

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
                          minLength={2}
                          maxLength={100}
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
                          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                          title="Please enter a valid email address"
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
                          pattern="[\d\s\-\+\(\)\.]+"
                          title="Please enter a valid phone number"
                          minLength={5}
                          maxLength={20}
                        />
                      </div>
                    </div>
                  </div>

                  {formData.tripType === 'multi-city' ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-dark-700/30 rounded-lg border border-dark-600">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-teal-300 font-semibold">Multi-City Itinerary</h4>
                          <span className="text-xs text-gray-400">
                            {citySegments.length} of 10 segments
                          </span>
                        </div>

                        {citySegments.map((segment, index) => (
                          <div key={segment.id} className={`mb-6 p-4 bg-dark-800/50 rounded-lg border ${index === 0 ? 'border-teal-400/30' : 'border-dark-700'}`}>
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

                            <div className="space-y-4">
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
                                    minLength={2}
                                    maxLength={100}
                                  />
                                </div>
                                <div>
                                  <label className="block text-gray-300 text-sm mb-1">
                                    Destination City <span className="text-teal-400">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    value={segment.destination}
                                    onChange={(e) => updateSegmentDestination(segment.id, e.target.value)}
                                    required
                                    className="w-full px-3 py-2 rounded-lg bg-dark-900/50 border border-dark-600 focus:border-teal-400 focus:ring-1 focus:ring-teal-500/30 transition-all"
                                    placeholder="Destination city"
                                    minLength={2}
                                    maxLength={100}
                                  />
                                </div>
                              </div>

                              {renderPassengerSelector(
                                segment.passengers,
                                (passengers) => updateCitySegment(segment.id, 'passengers', passengers),
                                `Passengers for ${segment.destination || 'this segment'}`
                              )}

                              {renderDateSelector(
                                segment.dateType,
                                (type) => updateSegmentDateType(segment.id, type),
                                segment.date,
                                (date) => updateCitySegment(segment.id, 'date', date),
                                segment.flexFrom,
                                (date) => updateCitySegment(segment.id, 'flexFrom', date),
                                segment.flexTo,
                                (date) => updateCitySegment(segment.id, 'flexTo', date),
                                `Travel Date to ${segment.destination || 'Next City'}`
                              )}

                              {renderHotelStars(
                                segment.hotelStars,
                                (stars) => updateCitySegment(segment.id, 'hotelStars', stars),
                                `Hotel in ${segment.destination}`
                              )}

                              {renderCarCategory(
                                segment.carCategory,
                                (category) => updateCitySegment(segment.id, 'carCategory', category),
                                `Car Rental in ${segment.destination}`
                              )}

                              <div className="mt-4">
                                <div className="flex justify-between items-center mb-2">
                                  <h5 className="text-teal-300 font-semibold">Side Trips from {segment.destination}</h5>
                                  <button
                                    type="button"
                                    onClick={() => addSideTrip(segment.id)}
                                    className="text-sm text-teal-400 hover:text-teal-300 flex items-center gap-1"
                                  >
                                    <span>+</span>
                                    <span>Add Side Trip</span>
                                  </button>
                                </div>

                                {segment.sideTrips.map((sideTrip) => (
                                  <div key={sideTrip.id} className="ml-4 mb-3 p-3 bg-dark-900/50 rounded-lg border border-dark-700">
                                    <div className="flex justify-between items-center mb-2">
                                      <span className="text-xs text-gray-400">Side Trip</span>
                                      <button
                                        type="button"
                                        onClick={() => removeSideTrip(segment.id, sideTrip.id)}
                                        className="text-xs text-red-400 hover:text-red-300"
                                      >
                                        Remove
                                      </button>
                                    </div>

                                    <div className="flex gap-2 mb-3">
                                      <button
                                        type="button"
                                        onClick={() => updateSideTrip(segment.id, sideTrip.id, 'type', 'one-way')}
                                        className={`px-3 py-1 rounded text-xs ${sideTrip.type === 'one-way' ? 'bg-teal-500 text-dark-950' : 'bg-dark-700 text-gray-400'}`}
                                      >
                                        One-Way
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => updateSideTrip(segment.id, sideTrip.id, 'type', 'round-trip')}
                                        className={`px-3 py-1 rounded text-xs ${sideTrip.type === 'round-trip' ? 'bg-teal-500 text-dark-950' : 'bg-dark-700 text-gray-400'}`}
                                      >
                                        Round-Trip
                                      </button>
                                    </div>

                                    <div className="mb-3">
                                      <label className="block text-gray-300 text-xs mb-1">Transport Type</label>
                                      <div className="grid grid-cols-4 gap-1">
                                        {(['plane', 'train', 'bus', 'car'] as TransportType[]).map((transport) => (
                                          <button
                                            key={transport}
                                            type="button"
                                            onClick={() => updateSideTrip(segment.id, sideTrip.id, 'transport', transport)}
                                            className={`p-2 rounded text-xs ${sideTrip.transport === transport ? 'bg-teal-500/30 border border-teal-400' : 'bg-dark-700/50 border border-dark-600'}`}
                                          >
                                            {transport === 'plane' && '✈️'}
                                            {transport === 'train' && '🚆'}
                                            {transport === 'bus' && '🚌'}
                                            {transport === 'car' && '🚗'}
                                          </button>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mb-3">
                                      <div>
                                        <label className="block text-gray-300 text-xs mb-1">From</label>
                                        <input
                                          type="text"
                                          value={sideTrip.departure}
                                          onChange={(e) => updateSideTrip(segment.id, sideTrip.id, 'departure', e.target.value)}
                                          className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                                          placeholder="Departure city"
                                          minLength={2}
                                          maxLength={100}
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-gray-300 text-xs mb-1">To</label>
                                        <input
                                          type="text"
                                          value={sideTrip.destination}
                                          onChange={(e) => updateSideTrip(segment.id, sideTrip.id, 'destination', e.target.value)}
                                          className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                                          placeholder="Destination city"
                                          minLength={2}
                                          maxLength={100}
                                        />
                                      </div>
                                    </div>

                                    {renderPassengerSelector(
                                      sideTrip.passengers,
                                      (passengers) => updateSideTrip(segment.id, sideTrip.id, 'passengers', passengers),
                                      `Passengers for ${sideTrip.destination || 'side trip'}`,
                                      true
                                    )}

                                    {renderSideTripDateSelector(sideTrip)}

                                    {renderHotelStars(
                                      sideTrip.hotelStars,
                                      (stars) => updateSideTrip(segment.id, sideTrip.id, 'hotelStars', stars),
                                      `Hotel in ${sideTrip.destination || 'Destination'}`,
                                      true
                                    )}

                                    {renderCarCategory(
                                      sideTrip.carCategory,
                                      (category) => updateSideTrip(segment.id, sideTrip.id, 'carCategory', category),
                                      `Car Rental in ${sideTrip.destination || 'Destination'}`,
                                      true
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}

                        {citySegments.length < 10 && (
                          <button
                            type="button"
                            onClick={addCitySegment}
                            className="w-full py-2 bg-dark-700/50 hover:bg-dark-700 border border-dashed border-dark-600 hover:border-teal-400/50 rounded-lg text-gray-400 hover:text-teal-300 transition-all duration-300"
                          >
                            <div className="flex items-center justify-center gap-2">
                              <span className="text-lg">+</span>
                              <span>Add Another City</span>
                              <span className="text-xs text-gray-500">({10 - citySegments.length} remaining)</span>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
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
                              minLength={2}
                              maxLength={100}
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
                              minLength={2}
                              maxLength={100}
                            />
                          </div>

                          {renderPassengerSelector(
                            formData.passengers,
                            (passengers) => setFormData(prev => ({ ...prev, passengers })),
                            'Passengers'
                          )}

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

                          {renderHotelStars(
                            formData.hotelStars,
                            (stars) => setFormData(prev => ({ ...prev, hotelStars: stars })),
                            'Hotel at Destination'
                          )}

                          {renderCarCategory(
                            formData.carCategory,
                            (category) => setFormData(prev => ({ ...prev, carCategory: category })),
                            'Car Rental at Destination'
                          )}

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

                      {formData.tripType === 'round-trip' && (
                        <div className="p-4 bg-dark-700/30 rounded-lg border border-dark-600">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-teal-300 font-semibold">Side Trips from {formData.destination}</h4>
                            <button
                              type="button"
                              onClick={addRoundTripSideTrip}
                              className="text-sm text-teal-400 hover:text-teal-300 flex items-center gap-1"
                            >
                              <span>+</span>
                              <span>Add Side Trip</span>
                            </button>
                          </div>

                          <p className="text-sm text-gray-400 mb-4">
                            Add excursions during your stay. All side trips must return to {formData.destination} before your main return flight.
                          </p>

                          {roundTripSideTrips.map((sideTrip) => (
                            <div key={sideTrip.id} className="mb-3 p-3 bg-dark-900/50 rounded-lg border border-dark-700">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-gray-400">Side Trip</span>
                                <button
                                  type="button"
                                  onClick={() => removeRoundTripSideTrip(sideTrip.id)}
                                  className="text-xs text-red-400 hover:text-red-300"
                                >
                                  Remove
                                </button>
                              </div>

                              <div className="flex gap-2 mb-3">
                                <button
                                  type="button"
                                  onClick={() => updateRoundTripSideTrip(sideTrip.id, 'type', 'one-way')}
                                  className={`px-3 py-1 rounded text-xs ${sideTrip.type === 'one-way' ? 'bg-teal-500 text-dark-950' : 'bg-dark-700 text-gray-400'}`}
                                >
                                  One-Way
                                </button>
                                <button
                                  type="button"
                                  onClick={() => updateRoundTripSideTrip(sideTrip.id, 'type', 'round-trip')}
                                  className={`px-3 py-1 rounded text-xs ${sideTrip.type === 'round-trip' ? 'bg-teal-500 text-dark-950' : 'bg-dark-700 text-gray-400'}`}
                                >
                                  Round-Trip
                                </button>
                              </div>

                              <div className="mb-3">
                                <label className="block text-gray-300 text-xs mb-1">Transport Type</label>
                                <div className="grid grid-cols-4 gap-1">
                                  {(['plane', 'train', 'bus', 'car'] as TransportType[]).map((transport) => (
                                    <button
                                      key={transport}
                                      type="button"
                                      onClick={() => updateRoundTripSideTrip(sideTrip.id, 'transport', transport)}
                                      className={`p-2 rounded text-xs ${sideTrip.transport === transport ? 'bg-teal-500/30 border border-teal-400' : 'bg-dark-700/50 border border-dark-600'}`}
                                    >
                                      {transport === 'plane' && '✈️'}
                                      {transport === 'train' && '🚆'}
                                      {transport === 'bus' && '🚌'}
                                      {transport === 'car' && '🚗'}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-2 mb-3">
                                <div>
                                  <label className="block text-gray-300 text-xs mb-1">From</label>
                                  <input
                                    type="text"
                                    value={sideTrip.departure}
                                    onChange={(e) => updateRoundTripSideTrip(sideTrip.id, 'departure', e.target.value)}
                                    className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                                    placeholder="Departure city"
                                    minLength={2}
                                    maxLength={100}
                                  />
                                </div>
                                <div>
                                  <label className="block text-gray-300 text-xs mb-1">To</label>
                                  <input
                                    type="text"
                                    value={sideTrip.destination}
                                    onChange={(e) => updateRoundTripSideTrip(sideTrip.id, 'destination', e.target.value)}
                                    className="w-full px-2 py-1 rounded bg-dark-900/50 border border-dark-600 text-sm"
                                    placeholder="Destination city"
                                    minLength={2}
                                    maxLength={100}
                                  />
                                </div>
                              </div>

                              {renderPassengerSelector(
                                sideTrip.passengers,
                                (passengers) => updateRoundTripSideTrip(sideTrip.id, 'passengers', passengers),
                                `Passengers for ${sideTrip.destination || 'side trip'}`,
                                true
                              )}

                              {renderSideTripDateSelector(sideTrip, true)}

                              {renderHotelStars(
                                sideTrip.hotelStars,
                                (stars) => updateRoundTripSideTrip(sideTrip.id, 'hotelStars', stars),
                                `Hotel in ${sideTrip.destination || 'Destination'}`,
                                true
                              )}

                              {renderCarCategory(
                                sideTrip.carCategory,
                                (category) => updateRoundTripSideTrip(sideTrip.id, 'carCategory', category),
                                `Car Rental in ${sideTrip.destination || 'Destination'}`,
                                true
                              )}
                            </div>
                          ))}

                          {roundTripSideTrips.length === 0 && (
                            <div className="text-center py-4 text-gray-500 text-sm">
                              No side trips added yet. Click "Add Side Trip" to add excursions during your stay.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Additional Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-500/30 transition-all resize-none glow-border"
                      placeholder="Tell us about your travel preferences, accommodation needs, budget, or any special requests..."
                      maxLength={2000}
                    ></textarea>
                  </div>
                </div>

                <input type="hidden" name="_subject" value={
                  formData.tripType === 'multi-city'
                    ? `New Multi-City Trip Inquiry from ${formData.name} (${citySegments.length} segments, ${formData.passengers.adults + formData.passengers.children + formData.passengers.infants} passengers)`
                    : `New ${formData.tripType} Travel Inquiry from ${formData.name} (${formData.passengers.adults + formData.passengers.children + formData.passengers.infants} passengers)${roundTripSideTrips.length > 0 ? ` with ${roundTripSideTrips.length} side trips` : ''}`
                } />
                <input type="hidden" name="_replyto" value={formData.email} />
                <input type="hidden" name="_cc" value={formData.email} />
                <input type="hidden" name="_next" value="https://bznomad.com/thank-you" />
                <input type="hidden" name="_format" value="plain" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

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

            <TipsAndFAQs
              tripType={formData.tripType}
              hotelStars={formData.hotelStars}
              carCategory={formData.carCategory}
              hasChildren={formData.passengers.children > 0}
              hasInfants={formData.passengers.infants > 0}
              isSideTrip={false}
            />

            <div className="bg-dark-800/60 backdrop-blur rounded-2xl p-8 glow-border-lg">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Quick Reference</h3>
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
                    <p className="text-gray-400">Visit multiple destinations (up to 10 cities)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-800/60 backdrop-blur rounded-2xl p-8 glow-border-lg">
              <h4 className="text-xl font-bold text-gray-100 mb-4">Date Flexibility Tips</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-start gap-3 p-3 bg-dark-700/50 rounded-lg">
                  <span className="text-lg">📅</span>
                  <div>
                    <p className="font-semibold text-teal-300">Fixed Dates</p>
                    <p className="text-gray-400 text-xs">Best for specific travel plans with set dates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-dark-700/50 rounded-lg">
                  <span className="text-lg">🔄</span>
                  <div>
                    <p className="font-semibold text-teal-300">Flexible Dates</p>
                    <p className="text-gray-400 text-xs">Get better prices by allowing date range searches</p>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-2 p-3 bg-dark-700/50 rounded-lg border border-teal-400/20">
                  <p className="text-teal-300 font-semibold">💡 Pro Tip:</p>
                  <p className="mt-1">Flexible dates often save 15-30% on flights</p>
                </div>
              </div>
            </div>

            {formData.tripType === 'multi-city' && (
              <div className="bg-dark-800/60 border border-teal-400/30 backdrop-blur rounded-2xl p-6 glow-border">
                <h4 className="text-teal-300 font-bold mb-3">Multi-City Planning</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Add side trips for excursions during your stay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Side trips must be completed before your next departure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Choose one-way or round-trip for side excursions</span>
                  </li>
                </ul>
              </div>
            )}

            {formData.tripType === 'round-trip' && (
              <div className="bg-dark-800/60 border border-teal-400/30 backdrop-blur rounded-2xl p-6 glow-border">
                <h4 className="text-teal-300 font-bold mb-3">Round Trip Side Trips</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Add excursions during your stay at destination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Must return to main destination before your return flight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-0.5">✓</span>
                    <span>Dates automatically constrained to your stay period</span>
                  </li>
                </ul>
              </div>
            )}

            <div className="bg-dark-800/60 border border-teal-400/30 backdrop-blur rounded-2xl p-6 glow-border">
              <h4 className="text-teal-300 font-bold mb-3">Hotel & Car Options</h4>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <p className="font-medium text-teal-300 mb-1">Hotel Categories:</p>
                  <p className="text-gray-400 text-xs">Choose from 1-5 stars or luxury options for each destination</p>
                </div>
                <div>
                  <p className="font-medium text-teal-300 mb-1">Car Rentals:</p>
                  <p className="text-gray-400 text-xs">Economy, Compact, Midsize, Fullsize, SUV, Luxury, or Minivan</p>
                </div>
                <div className="text-xs text-teal-200/60 mt-2">
                  <p>Tip: Book hotels and cars together for package discounts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
