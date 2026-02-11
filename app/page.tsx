export default function Home() {
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
      <nav className="shadow-lg sticky top-0 z-50 bg-[#666666] mt-0 mb-6 pb-6">
        <div className="nav-container max-w-7xl mx-auto px-4 flex flex-col items-start gap-0 relative bg-[#666666]">
          <div className="flex w-full items-center justify-between py-4">
            <div className="nav-logo-wrapper flex justify-start">
              <a href="/" className="hover:opacity-80 transition opacity-100 logo text-3xl text-[#FFC107]">
                Banana Picker
              </a>
            </div>
            <a
              href="/user/dashboard"
              className="px-6 h-12 bg-black text-[#FFC107] font-bold rounded-xl border border-black hover:bg-gray-800 hover:text-[#FFC107] transition-colors duration-300 inline-flex items-center justify-center text-center text-base whitespace-nowrap mr-[1em]"
            >
              User Dashboard
            </a>
          </div>
          <div className="-mt-2 flex flex-nowrap w-full justify-start text-base font-semibold text-white whitespace-nowrap border-t border-b border-white/30 divide-x divide-white/30 bg-black">
            <a
              href="/#sales"
              className="text-white cursor-pointer px-4 py-2 border-l border-white/30 transition-colors duration-300 hover:bg-[#FFC107] hover:text-black"
            >
              Solutions
            </a>
            <a
              href="/#pricing"
              className="text-white cursor-pointer px-4 py-2 transition-colors duration-300 hover:bg-[#FFC107] hover:text-black"
            >
              Pricing
            </a>
            <a
              href="/#contact"
              className="text-white cursor-pointer px-4 py-2 border-r border-white/30 transition-colors duration-300 hover:bg-[#FFC107] hover:text-black"
            >
              Contact
            </a>
            <span className="ml-auto w-px bg-white/30 self-stretch" aria-hidden="true"></span>
          </div>
        </div>
      </nav>

      {/* Hero Text */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-6 text-center">
        <p className="text-3xl text-black mb-4 font-extrabold">Intelligent Warehouse Automation</p>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-10 text-center">
        <p className="text-lg text-black max-w-3xl mx-auto">
          Revolutionize your fruit distribution with our advanced robotic picking and packaging system
        </p>
      </section>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-[186px] pb-[30px] mt-6 text-center flex flex-col items-center justify-end relative" style={{backgroundImage: 'url(/warehouse.png)', backgroundSize: 'cover', backgroundPosition: 'center 65%'}}>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-auto relative z-20">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#FFC107]">
            <div className="text-5xl mb-4">
              <img src="/munya.svg" alt="munja" className="inline w-12 h-12 align-middle" />
            </div>
            <h3 className="text-2xl font-bold mb-3">10x Faster Processing</h3>
            <p className="text-gray-600">Automate your picking and packaging process to handle significantly more orders per day</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#666666]">
             <div className="text-xl mb-4">
              <img src="/pouch.svg" alt="moneypouch" className="inline w-12 h-12 align-middle" />
            </div>
            <h3 className="text-2xl font-bold mb-3">60% Labor Cost Reduction</h3>
            <p className="text-gray-600">Reduce manual labor costs while maintaining high quality standards and consistency</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-500">
            <div className="text-5xl mb-4">
              <img src="/quality.svg" alt="Quality" className="inline w-12 h-12 align-middle" />
            </div>
            <h3 className="text-2xl font-bold mb-3">99.9% Accuracy</h3>
            <p className="text-gray-600">Eliminate picking errors and improve customer satisfaction with precision automation</p>
          </div>
        </div>
      </section>


      {/* Sales Content Section */}
      <section id="sales" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-black">Transform Your Warehouse Operations</h2>
          <p className="text-2xl text-[#FFC107] mb-6">Advanced Robotic Automation for Fruit Distribution</p>
          <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
            Increase efficiency, reduce costs, and improve product quality with our intelligent warehouse automation system
          </p>
          <a
            href="/sales/contact"
            className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-white hover:text-black transition"
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
        <div className="bg-gradient-to-r from-[#666666] to-gray-700 text-black rounded-lg p-12 mt-12">
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

      {/* Pricing */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Simple, Transparent Pricing</h2>
          <p className="text-xl text-black">Choose the perfect plan for your warehouse needs</p>
        </div>

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
                <div className="bg-[var(--machine-grey)] text-black py-2 text-center font-bold">
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
                      ? 'bg-[var(--machine-grey)] text-black hover:bg-gray-700'
                      : 'bg-[var(--machine-grey)] text-black hover:bg-gray-700'
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

        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center text-black">Frequently Asked Questions</h3>
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

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-black">Get In Touch</h2>
          <p className="text-xl text-black">Our team is ready to discuss your warehouse automation needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-4xl mb-4">📞</p>
            <h3 className="font-bold text-lg mb-2">Phone</h3>
            <p className="text-gray-600 mb-2">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-500">Mon-Fri, 8am-6pm EST</p>
          </div>

          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-4xl mb-4">📧</p>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-gray-600 mb-2">contact@banana-picker.com</p>
            <p className="text-sm text-gray-500">Response within 24 hours</p>
          </div>

          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-4xl mb-4">📍</p>
            <h3 className="font-bold text-lg mb-2">Address</h3>
            <p className="text-gray-600 mb-2">123 Tech Drive, Silicon Valley, CA 94025</p>
            <p className="text-sm text-gray-500">Visit us anytime</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-12">
          <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[var(--banana-yellow)]"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[var(--banana-yellow)]"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">Company</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[var(--banana-yellow)]"
                placeholder="Your Company Name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[var(--banana-yellow)]"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[var(--banana-yellow)]"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">Warehouse Size</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[var(--banana-yellow)]">
                <option>Select warehouse size</option>
                <option>Small (1,000-5,000 sq ft)</option>
                <option>Medium (5,000-20,000 sq ft)</option>
                <option>Large (20,000-100,000 sq ft)</option>
                <option>Enterprise (100,000+ sq ft)</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">How can we help?</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[var(--banana-yellow)] h-32"
                placeholder="Tell us about your warehouse automation needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[var(--banana-yellow)] text-black font-bold rounded hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-[var(--machine-grey)] text-black rounded-lg p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Why Choose Banana Picker?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-[var(--banana-yellow)]">500+</p>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-400">20+</p>
              <p>Years Industry Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[var(--banana-yellow)]">24/7</p>
              <p>Technical Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#666666] text-black py-12 mt-12">
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
      <footer className="bg-[#666666] text-black text-center py-6 mt-16">
        <p>&copy; 2026 Banana Picker. Automated Warehouse Solutions.</p>
      </footer>
    </div>
  );
}
