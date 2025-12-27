export default function AnimatedLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-teal-500/50 animate-pulse shadow-lg" style={{boxShadow: '0 0 20px rgba(43, 168, 192, 0.5)'}}></div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2Fbc75726ca3ad4f749420631242ee6be9?format=webp&width=800"
          alt="BZNomad Logo"
          className="w-full h-full object-contain drop-shadow-lg relative z-10"
        />
      </div>
      <div className="hidden md:block">
        <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
          BZNomad
        </h2>
        <p className="text-xs text-teal-600 font-semibold">Travel Arrangements</p>
      </div>
    </div>
  );
}
