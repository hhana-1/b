export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFEB3B] relative overflow-hidden">
      {/* Navigation */}
      <nav className="bg-[#666666] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl logo hover:opacity-80 transition">
            Banana Picker
          </a>
          <a
            href="/user/dashboard"
            className="px-6 py-2 bg-[#FFC107] text-black font-bold rounded-lg hover:bg-yellow-400 transition"
          >
            🏢 User Dashboard
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-[#666666] mb-4">Banana Picker</h1>
          <p className="text-2xl text-[#FFC107] mb-8">Intelligent Warehouse Automation</p>
          <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto">
            Revolutionize your fruit distribution with our advanced robotic picking and packaging system
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center mb-16">
          <a
            href="/sales"
            className="px-8 py-4 bg-[#666666] text-white font-bold text-lg rounded-lg hover:bg-gray-700 transition transform hover:scale-105"
          >
            🤝 For Business Partners
          </a>
        </div>

        {/* Feature highlights */}
        <div className="bg-white/30 backdrop-blur rounded-lg p-8 mt-12 border-2 border-[#FFC107]">
          <h3 className="text-2xl font-bold text-[#666666] mb-6">Why Choose Banana Picker?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl mb-2">⚡</p>
              <p className="font-semibold text-[#666666]">Speed & Efficiency</p>
              <p className="text-gray-800 text-sm">Process orders 10x faster</p>
            </div>
            <div>
              <p className="text-3xl mb-2">💰</p>
              <p className="font-semibold text-[#666666]">Cost Reduction</p>
              <p className="text-gray-800 text-sm">Reduce labor costs by 60%</p>
            </div>
            <div>
              <p className="text-3xl mb-2">✅</p>
              <p className="font-semibold text-[#666666]">Quality Control</p>
              <p className="text-gray-800 text-sm">99.9% accuracy guaranteed</p>
            </div>
          </div>
        </div>

        {/* Decorative Banana Image */}
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <img
            src="/Perfect_bananas.png"
            alt="Bananas"
            className="w-96 h-auto opacity-90 transform -rotate-12 translate-x-0 translate-y-24"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#666666] text-white text-center py-6 mt-16">
        <p>&copy; 2026 Banana Picker. Automated Warehouse Solutions.</p>
      </footer>
    </div>
  );
}
