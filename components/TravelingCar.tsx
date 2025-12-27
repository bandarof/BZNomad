export default function TravelingCar() {
  return (
    <div className="relative h-24 my-12 overflow-hidden">
      {/* Highway background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900 border-y border-dark-700">
        {/* Road */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700">
          {/* Road markings */}
          <div className="absolute inset-0 opacity-50">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 bg-yellow-400 animate-slideDownSlow"
                style={{
                  width: '15%',
                  left: '50%',
                  top: `${i * 10}%`,
                  transform: 'translateX(-50%)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated car */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-slideAcross">
        <div className="flex items-center gap-1">
          {/* Car body */}
          <div className="relative">
            <svg width="80" height="40" viewBox="0 0 80 40" className="drop-shadow-lg">
              {/* Car body */}
              <rect x="5" y="15" width="70" height="15" rx="3" fill="#ef4444" />
              {/* Car roof */}
              <rect x="15" y="5" width="50" height="10" rx="2" fill="#dc2626" />
              {/* Windows */}
              <rect x="20" y="7" width="12" height="8" rx="1" fill="#60a5fa" opacity="0.7" />
              <rect x="48" y="7" width="12" height="8" rx="1" fill="#60a5fa" opacity="0.7" />
              {/* Wheels */}
              <circle cx="18" cy="32" r="4" fill="#1f2937" />
              <circle cx="18" cy="32" r="2.5" fill="#4b5563" />
              <circle cx="62" cy="32" r="4" fill="#1f2937" />
              <circle cx="62" cy="32" r="2.5" fill="#4b5563" />
              {/* Headlights */}
              <circle cx="8" cy="22" r="1.5" fill="#fbbf24" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scenic elements */}
      <div className="absolute left-10 top-0 text-3xl opacity-30">🌲</div>
      <div className="absolute right-20 top-0 text-3xl opacity-20">🌲</div>
    </div>
  );
}
