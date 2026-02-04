export default function UserRobots() {
  const robots = [
    { id: 'ROBOT-001', name: 'Picker Alpha', status: 'active', uptime: '98%', lastMaintenance: '2026-02-01', currentTask: 'ORD-001' },
    { id: 'ROBOT-002', name: 'Picker Beta', status: 'idle', uptime: '95%', lastMaintenance: '2026-01-28', currentTask: 'None' },
    { id: 'ROBOT-003', name: 'Picker Gamma', status: 'maintenance', uptime: '92%', lastMaintenance: '2026-02-03', currentTask: 'N/A' },
    { id: 'ROBOT-004', name: 'Picker Delta', status: 'active', uptime: '99%', lastMaintenance: '2026-02-02', currentTask: 'ORD-004' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-l-4 border-green-500';
      case 'idle':
        return 'bg-[#FFF59D] text-black border-l-4 border-[#FFC107]';
      case 'maintenance':
        return 'bg-red-100 text-red-800 border-l-4 border-red-500';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'idle':
        return 'bg-yellow-500';
      case 'maintenance':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#FFEB3B]">
      {/* Navigation */}
      <nav className="bg-[#666666] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl logo hover:opacity-80 transition">
            Banana Picker
          </a>
          <div className="flex gap-6 items-center">
            <a href="/user/dashboard" className="hover:text-[#FFC107] transition">Dashboard</a>
            <a href="/user/orders" className="hover:text-[#FFC107] transition">Orders</a>
            <a href="/user/robots" className="hover:text-[#FFC107] transition font-semibold">Robots</a>
            <span className="text-[#FFC107]">👤 User</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2 text-[#666666]">Your Robot Fleet</h2>
        <p className="text-gray-800 mb-6">Monitor and manage your warehouse robots</p>

        {/* Robot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {robots.map((robot) => (
            <div
              key={robot.id}
              className={`bg-white rounded-lg shadow-md p-6 ${getStatusBadge(robot.status)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#666666]">{robot.name}</h3>
                  <p className="text-sm text-gray-600">{robot.id}</p>
                </div>
                <div className={`w-4 h-4 rounded-full ${getStatusDot(robot.status)}`}></div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-[#666666]">Status:</span>
                  <span className="capitalize">{robot.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#666666]">Uptime:</span>
                  <span>{robot.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-[#666666]">Last Maintenance:</span>
                  <span>{robot.lastMaintenance}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold text-[#666666]">Current Task:</span>
                  <span className="bg-[#666666] text-white px-2 py-1 rounded text-sm">
                    {robot.currentTask}
                  </span>
                </div>
              </div>

              <button className="w-full mt-4 bg-[#666666] text-white py-2 rounded hover:bg-gray-700 transition font-semibold">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-gray-600 text-sm font-semibold">TOTAL ROBOTS</p>
            <p className="text-3xl font-bold text-[#666666]">{robots.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-gray-600 text-sm font-semibold">ACTIVE</p>
            <p className="text-3xl font-bold text-green-600">{robots.filter(r => r.status === 'active').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-gray-600 text-sm font-semibold">IDLE</p>
            <p className="text-3xl font-bold text-[#FFC107]">{robots.filter(r => r.status === 'idle').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-gray-600 text-sm font-semibold">MAINTENANCE</p>
            <p className="text-3xl font-bold text-red-600">{robots.filter(r => r.status === 'maintenance').length}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#666666] text-white text-center py-6 mt-12">
        <p>&copy; 2026 Banana Picker. Automated Warehouse Solutions.</p>
      </footer>
    </div>
  );
}
