export default function SalesPricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$50K',
      period: 'one-time',
      description: 'Perfect for small warehouses',
      features: [
        'Up to 2 Robots',
        'Basic Dashboard',
        'Email Support',
        'Monthly Updates',
      ],
    },
    {
      name: 'Professional',
      price: '$150K',
      period: 'one-time',
      description: 'Most popular choice',
      features: [
        'Up to 6 Robots',
        'Advanced Dashboard',
        'Priority Support',
        'Real-time Analytics',
        'Weekly Updates',
        'Integration Support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact',
      description: 'For large-scale operations',
      features: [
        'Unlimited Robots',
        'Custom Solutions',
        'Dedicated Support Team',
        'Advanced AI Features',
        'Real-time Analytics',
        'Custom Integrations',
        'On-site Training',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFEB3B]">
      {/* Navigation */}
      <nav className="bg-[var(--machine-grey)] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl logo hover:opacity-80 transition">
            Banana Picker
          </a>
          <div className="flex gap-6 items-center">
            <a href="/sales" className="hover:text-[var(--banana-yellow)] transition">Solutions</a>
            <a href="/sales/pricing" className="hover:text-[var(--banana-yellow)] transition font-semibold">Pricing</a>
            <a href="/sales/contact" className="hover:text-[var(--banana-yellow)] transition">Contact</a>
            <span className="text-[var(--banana-yellow)]">🤝 Partner</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your warehouse needs</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 ${
                plan.highlighted
                  ? 'bg-[var(--banana-yellow)] text-black border-4 border-[var(--machine-grey)]'
                  : 'bg-white'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-[var(--machine-grey)] text-white py-2 text-center font-bold">
                  🏆 MOST POPULAR
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-black/70' : 'text-gray-600'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <p className="text-5xl font-bold">{plan.price}</p>
                  <p className={`text-sm ${plan.highlighted ? 'text-black/70' : 'text-gray-600'}`}>
                    {plan.period === 'contact' ? 'Contact for details' : `${plan.period} setup`}
                  </p>
                </div>

                <button
                  className={`w-full py-3 rounded font-bold mb-6 transition ${
                    plan.highlighted
                      ? 'bg-[var(--machine-grey)] text-white hover:bg-gray-700'
                      : 'bg-[var(--machine-grey)] text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <span className="mr-2">✓</span>
                      <span className={`text-sm ${plan.highlighted ? 'text-black' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow p-8 mt-12">
          <h3 className="text-2xl font-bold mb-6">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-lg">Hardware</h4>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Intelligent Picking Robots</li>
                <li>✓ Central Control Station</li>
                <li>✓ Network Infrastructure</li>
                <li>✓ Safety Equipment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">Software & Services</h4>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Cloud Dashboard</li>
                <li>✓ Mobile App</li>
                <li>✓ Professional Installation</li>
                <li>✓ Staff Training</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold mb-2">What's the ROI timeline?</h4>
              <p className="text-gray-600">Most clients see ROI within 18-24 months through reduced labor costs and increased efficiency.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold mb-2">Do you offer financing?</h4>
              <p className="text-gray-600">Yes! We work with leading financial partners to offer flexible payment plans.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold mb-2">How long is implementation?</h4>
              <p className="text-gray-600">Typically 4-8 weeks depending on warehouse size and complexity.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold mb-2">What about maintenance?</h4>
              <p className="text-gray-600">All plans include regular maintenance and software updates. Extended support available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--machine-grey)] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-4">Have Questions?</h3>
          <p className="text-lg mb-8">Let's talk about which plan is right for your business</p>
          <a
            href="/sales/contact"
            className="inline-block px-8 py-4 bg-[var(--banana-yellow)] text-black font-bold text-lg rounded-lg hover:bg-yellow-500 transition"
          >
            Contact Sales
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--dark-grey)] text-white text-center py-6 mt-12">
        <p>&copy; 2026 Banana Picker. Automated Warehouse Solutions.</p>
      </footer>
    </div>
  );
}
