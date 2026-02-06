export default function SalesContact() {
  return (
    <div className="min-h-screen bg-[#FFEB3B]">
      {/* Navigation */}
      <nav className="bg-[var(--machine-grey)] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl logo hover:opacity-80 transition">
            Banana Picker
          </a>
          <div className="flex gap-6 items-center">
            <a href="/#sales" className="hover:text-[var(--banana-yellow)] transition">Solutions</a>
            <a href="/#pricing" className="hover:text-[var(--banana-yellow)] transition">Pricing</a>
            <a href="/#contact" className="hover:text-[var(--banana-yellow)] transition font-semibold">Contact</a>
            <span className="text-[var(--banana-yellow)]">🤝 Partner</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">Our team is ready to discuss your warehouse automation needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
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

        {/* Contact Form */}
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

        {/* Social Proof */}
        <div className="bg-[var(--machine-grey)] text-white rounded-lg p-8 mt-12 text-center">
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

      {/* Footer */}
      <footer className="bg-[var(--dark-grey)] text-white text-center py-6 mt-12">
        <p>&copy; 2026 Banana Picker. Automated Warehouse Solutions.</p>
      </footer>
    </div>
  );
}
