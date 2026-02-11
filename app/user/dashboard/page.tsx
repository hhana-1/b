export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="bg-[#666666] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl logo hover:opacity-80 transition">
            Banana Picker
          </a>
          <div className="flex gap-6 items-center">
            <a href="/user/dashboard" className="hover:text-[#FFC107] transition font-semibold">Dashboard</a>
            <a href="/user/orders" className="hover:text-[#FFC107] transition">Orders</a>
            <a href="/user/robots" className="hover:text-[#FFC107] transition">Robots</a>
            <span className="text-[#FFC107]">👤 User</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-4 text-white">Welcome to Your Dashboard</h2>
        <p className="text-2xl text-gray-200 mb-8">Manage your banana picking operations in real-time</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-[#FFC107]">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Active Orders</h3>
            <p className="text-gray-300 mb-4">View and manage current picking orders</p>
            <a href="/user/orders" className="inline-block bg-[#FFC107] text-black px-6 py-2 rounded hover:bg-yellow-400 transition font-semibold">
              View Orders
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-[#666666]">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Robot Status</h3>
            <p className="text-gray-300 mb-4">Monitor robot health and performance</p>
            <a href="/user/robots" className="inline-block bg-[#666666] text-white px-6 py-2 rounded hover:bg-gray-700 transition font-semibold">
              Check Status
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-[#FFC107]">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-2xl font-bold mb-2 text-white">Statistics</h3>
            <p className="text-gray-300 mb-4">View performance metrics and analytics</p>
            <button className="inline-block bg-[#FFC107] text-black px-6 py-2 rounded hover:bg-yellow-400 transition font-semibold">
              Analytics
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-gray-800 rounded-lg shadow p-6">
            <p className="text-gray-300 text-sm font-semibold">TODAY'S ORDERS</p>
            <p className="text-5xl font-bold text-[#FFC107]">12</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow p-6">
            <p className="text-gray-300 text-sm font-semibold">ACTIVE ROBOTS</p>
            <p className="text-5xl font-bold text-green-600">4</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow p-6">
            <p className="text-gray-300 text-sm font-semibold">EFFICIENCY</p>
            <p className="text-5xl font-bold text-white">98%</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow p-6">
            <p className="text-gray-300 text-sm font-semibold">BOXES PACKED</p>
            <p className="text-5xl font-bold text-blue-600">342</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#666666] text-white text-center py-6 mt-16">
        <p>&copy; 2026 Banana Picker. Automated Warehouse Solutions.</p>
      </footer>
    </div>
  );
}
