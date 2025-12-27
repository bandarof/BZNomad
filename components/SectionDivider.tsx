export default function SectionDivider({ icon = "✈️" }) {
  const icons = ["✈️", "🧳", "🌍", "🗺️", "🏖️"];
  const randomIcon = icons[Math.floor(Math.random() * icons.length)];
  
  return (
    <div className="relative py-12 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background accent elements */}
        <div className="absolute left-0 top-1/2 w-20 h-20 bg-teal-500/10 rounded-full blur-2xl -translate-y-1/2"></div>
        <div className="absolute right-0 top-1/2 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl -translate-y-1/2"></div>

        {/* Center divider with animation */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>
          </div>

          <div className="relative bg-dark-950 px-6 flex items-center justify-center">
            <div className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>
              {randomIcon}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
