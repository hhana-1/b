export default function SalesHome() {
  return (
    <div className="min-h-screen bg-[#FFEB3B]">
      {/* Navigation */}
      <nav className="bg-[#666666] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl logo hover:opacity-80 transition">
            Banana Picker
          </a>
          <div className="flex gap-6 items-center">
            <a href="/sales" className="hover:text-[#FFC107] transition font-semibold">Solutions</a>
            <a href="/sales/pricing" className="hover:text-[#FFC107] transition">Pricing</a>
            <a href="/sales/contact" className="hover:text-[#FFC107] transition">Contact</a>
            <span className="text-[#FFC107]">🤝 Partner</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-gray-900">Transform Your Warehouse Operations</h2>
          <p className="text-2xl text-[#FFC107] mb-6">Advanced Robotic Automation for Fruit Distribution</p>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Increase efficiency, reduce costs, and improve product quality with our intelligent warehouse automation system
          </p>
          <a
            href="/sales/contact"
            className="inline-block px-8 py-4 bg-[var(--banana-yellow)] text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition"
          >
            Request a Demo
          </a>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[var(--banana-yellow)]">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-3">10x Faster Processing</h3>
            <p className="text-gray-600">Automate your picking and packaging process to handle significantly more orders per day</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[var(--machine-grey)]">
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
        <div className="bg-gradient-to-r from-[var(--machine-grey)] to-gray-700 text-white rounded-lg p-12 mt-12">
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
            className="inline-block px-8 py-4 bg-[var(--banana-yellow)] text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#666666] text-white text-center py-6 mt-12">
        <p>&copy; 2026 Banana Picker. Automated Warehouse Solutions.</p>
      </footer>
    </div>
  );
}
