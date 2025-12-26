export default function StaticLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle */}
          <circle
            cx="60"
            cy="60"
            r="58"
            fill="none"
            stroke="#2ba8c0"
            strokeWidth="4"
          />

          {/* Inner circle with gradient background */}
          <circle cx="60" cy="60" r="50" fill="#f0f9fb" />

          {/* Globe */}
          <g>
            <circle
              cx="45"
              cy="40"
              r="22"
              fill="none"
              stroke="#1a8fa8"
              strokeWidth="2"
            />
            {/* Globe grid lines */}
            <ellipse
              cx="45"
              cy="40"
              rx="22"
              ry="8"
              fill="none"
              stroke="#1a8fa8"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <line
              x1="45"
              y1="18"
              x2="45"
              y2="62"
              stroke="#1a8fa8"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <line
              x1="23"
              y1="40"
              x2="67"
              y2="40"
              stroke="#1a8fa8"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </g>

          {/* Airplane */}
          <g>
            <path
              d="M 55 25 L 65 25 L 70 35 L 65 40 L 55 35 Z"
              fill="#2ba8c0"
            />
          </g>

          {/* Car */}
          <g>
            <rect x="35" y="70" width="20" height="12" rx="2" fill="#1a8fa8" />
            <circle cx="40" cy="85" r="3" fill="#2ba8c0" />
            <circle cx="50" cy="85" r="3" fill="#2ba8c0" />
            <rect x="38" y="68" width="10" height="4" rx="1" fill="#2ba8c0" />
          </g>

          {/* Curved line connecting globe and car */}
          <path
            d="M 55 55 Q 60 70 50 78"
            stroke="#2ba8c0"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
          BZNomad
        </h1>
        <p className="text-2xl text-teal-600 font-semibold">Travel Arrangements</p>
        <p className="text-sm text-gray-600 mt-2 max-w-sm">
          Expertly curated travel experiences for digital nomads, remote workers, and digital nomad families.
        </p>
      </div>
    </div>
  );
}
