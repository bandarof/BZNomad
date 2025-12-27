export default function AnimatedBackground() {
  return (
    <>
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top left - Teal orb */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>

        {/* Top right - Cyan orb */}
        <div className="absolute -top-32 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

        {/* Middle left - Blue orb */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Middle right - Teal orb */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-3000"></div>

        {/* Bottom left - Cyan orb */}
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-blob animation-delay-5000"></div>

        {/* Bottom right - Blue orb */}
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Center floating accent */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

        {/* Animated gradient overlay lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-teal-500 via-transparent to-transparent animate-slideDownSlow"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-cyan-500 via-transparent to-transparent animate-slideDownSlow animation-delay-2000"></div>
          <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-blue-500 via-transparent to-transparent animate-slideDownSlow animation-delay-4000"></div>
        </div>
      </div>

      {/* Glow spots for interactive areas */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-2/3 right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl animate-pulse animation-delay-3000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-blue-500/5 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>
    </>
  );
}
