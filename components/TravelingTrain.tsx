export default function TravelingTrain() {
  return (
    <div className="relative h-28 my-12 overflow-hidden">
      {/* Track background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900 border-y border-dark-700">
        {/* Rails */}
        <div className="absolute inset-0">
          {/* Left rail */}
          <div className="absolute left-1/3 top-1/2 w-full h-1 bg-gray-500 transform -translate-y-1/2"></div>
          {/* Right rail */}
          <div className="absolute left-1/3 top-1/2 w-full h-1 bg-gray-500 transform translate-y-1/2"></div>
          
          {/* Sleepers */}
          <div className="absolute inset-0 opacity-40">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 bg-amber-700 animate-slideDownSlow"
                style={{
                  width: '12%',
                  left: '50%',
                  top: `${i * 5}%`,
                  transform: 'translateX(-50%)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animated train */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 animate-slideAcross">
        {/* Engine */}
        <svg width="100" height="50" viewBox="0 0 100 50" className="drop-shadow-lg inline-block">
          {/* Engine body */}
          <rect x="5" y="10" width="40" height="25" rx="2" fill="#1f2937" />
          {/* Cabin */}
          <rect x="45" y="12" width="20" height="15" fill="#374151" />
          {/* Smoke stack */}
          <rect x="25" y="2" width="8" height="8" fill="#4b5563" />
          {/* Wheels */}
          <circle cx="20" cy="40" r="5" fill="#000" />
          <circle cx="20" cy="40" r="2.5" fill="#666" />
          <circle cx="65" cy="40" r="5" fill="#000" />
          <circle cx="65" cy="40" r="2.5" fill="#666" />
          {/* Light */}
          <circle cx="12" cy="20" r="2" fill="#fbbf24" />
        </svg>

        {/* Cargo cars */}
        <svg width="80" height="50" viewBox="0 0 80 50" className="drop-shadow-lg inline-block">
          <rect x="5" y="12" width="70" height="22" fill="#7c3aed" opacity="0.8" />
          <circle cx="20" cy="40" r="4" fill="#000" />
          <circle cx="20" cy="40" r="2" fill="#666" />
          <circle cx="60" cy="40" r="4" fill="#000" />
          <circle cx="60" cy="40" r="2" fill="#666" />
        </svg>
      </div>

      {/* Scenic elements */}
      <div className="absolute left-5 bottom-2 text-3xl opacity-30">🏔️</div>
      <div className="absolute right-10 bottom-2 text-3xl opacity-20">🏔️</div>
    </div>
  );
}
