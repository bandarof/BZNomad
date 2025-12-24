export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Create <span className="text-primary">Stunning</span> Websites
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Build beautiful, responsive websites with React, Next.js, Tailwind CSS, and Builder.io visual editor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-primary transition shadow hover:shadow-md">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose This Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Lightning Fast", desc: "Next.js server-side rendering and static generation", icon: "⚡" },
              { title: "Visual Editing", desc: "Builder.io for non-technical content updates", icon: "🎨" },
              { title: "Beautiful Design", desc: "Tailwind CSS for rapid, consistent styling", icon: "✨" },
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join thousands of developers creating beautiful sites with this powerful stack.
          </p>
          <button className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition shadow-2xl hover:shadow-3xl">
            Start Building Now
          </button>
        </div>
      </section>
    </div>
  );
}
