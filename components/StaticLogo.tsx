export default function StaticLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F2fcfe1b955134aacad7b3c67770584fe%2Fbc75726ca3ad4f749420631242ee6be9?format=webp&width=800"
          alt="BZNomad Logo"
          className="w-full h-full object-contain drop-shadow-lg"
        />
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
