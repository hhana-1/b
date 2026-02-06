export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFEB3B] relative">
      {/* Navigation */}
      <nav className="shadow-lg sticky top-0 z-50 bg-[#FFEB3B]/90">
        <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center relative">
          <a href="/" className="hover:opacity-80 transition opacity-100">
            <img src="/banana-logo.svg" alt="Banana Picker" className="h-16 opacity-100" />
          </a>
          <div className="absolute top-8 right-4 flex gap-4">
            <a
              href="/sales"
              className="px-6 py-2 bg-[#666666] text-white font-bold rounded-lg hover:bg-gray-700 transition"
            >
              🤝 For Business Partners
            </a>
            <a
              href="/user/dashboard"
              className="px-6 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition"
            >
              🏢 User Dashboard
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center flex flex-col items-center justify-center min-h-[60vh] relative" style={{backgroundImage: 'url(/warehouse.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="mb-12 flex flex-col items-center relative z-10">
          <img src="/banana-logo.svg" alt="Banana Picker" className="h-30 mb-8" />
          <p className="text-2xl text-[#FFC107] mb-8">Intelligent Warehouse Automation</p>
          <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto">
            Revolutionize your fruit distribution with our advanced robotic picking and packaging system
          </p>
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

      {/* Sales Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Transform Your Warehouse Operations</h2>
          <p className="text-2xl text-[#FFC107] mb-6">Advanced Robotic Automation for Fruit Distribution</p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Increase efficiency, reduce costs, and improve product quality with our intelligent warehouse automation system
          </p>
          <a
            href="/sales/contact"
            className="inline-block px-8 py-4 bg-[#FFEB3B] text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition"
          >
            Request a Demo
          </a>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#FFC107]">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">10x Faster Processing</h3>
            <p className="text-gray-600">Automate your picking and packaging process to handle significantly more orders per day</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#666666]">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold mb-3">60% Labor Cost Reduction</h3>
            <p className="text-gray-600">Reduce manual labor costs while maintaining high quality standards and consistency</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-3">99.9% Accuracy</h3>
            <p className="text-gray-600">Eliminate picking errors and improve customer satisfaction with precision automation</p>
          </div>
        </div>

        {/* Case Study / Stats */}
        <div className="bg-gradient-to-r from-[#666666] to-gray-700 text-white rounded-lg p-12 mt-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Proven Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-5xl font-bold text-[#FFC107]">500+</p>
              <p className="text-lg">Warehouses Automated</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-400">2M+</p>
              <p className="text-lg">Orders Processed Daily</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-[#FFC107]">98%</p>
              <p className="text-lg">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-400">$2B+</p>
              <p className="text-lg">Operational Savings</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="text-2xl mb-2">🤖</p>
              <h4 className="font-bold text-lg mb-2">Intelligent Robots</h4>
              <p className="text-gray-600">AI-powered picking robots with advanced vision systems</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="text-2xl mb-2">📊</p>
              <h4 className="font-bold text-lg mb-2">Real-time Analytics</h4>
              <p className="text-gray-600">Complete visibility into warehouse operations and performance</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="text-2xl mb-2">🔧</p>
              <h4 className="font-bold text-lg mb-2">Easy Integration</h4>
              <p className="text-gray-600">Seamless integration with existing warehouse systems</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="text-2xl mb-2">📞</p>
              <h4 className="font-bold text-lg mb-2">24/7 Support</h4>
              <p className="text-gray-600">Round-the-clock technical support and maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#666666] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Warehouse?</h3>
          <p className="text-lg mb-8">Join hundreds of successful companies using Banana Picker</p>
          <a
            href="/sales/contact"
            className="inline-block px-8 py-4 bg-[#FFEB3B] text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#666666] text-white text-center py-6 mt-16">
        <p>&copy; 2026 Banana Picker. Automated Warehouse Solutions.</p>
      </footer>
    </div>
  );
}
