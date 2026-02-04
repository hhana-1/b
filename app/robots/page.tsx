export default function RobotsPage() {
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
        return 'bg-[#ffeaa7] text-black border-l-4 border-[var(--banana-yellow)]';
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[var(--machine-grey)] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            Banana Picker
          </h1>
          <div className="flex gap-6">
            <a href="/" className="hover:text-[var(--banana-yellow)] transition">Home</a>
            <a href="/orders" className="hover:text-[var(--banana-yellow)] transition">Orders</a>
            <a href="/robots" className="hover:text-[var(--banana-yellow)] transition">Robots</a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2">Robot Fleet Management</h2>
        <p className="text-gray-600 mb-6">Monitor and manage all picking robots in the warehouse</p>

        {/* Robot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {robots.map((robot) => (
            <div
              key={robot.id}
              className={`bg-white rounded-lg shadow-md p-6 ${getStatusBadge(robot.status)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{robot.name}</h3>
                  <p className="text-sm text-gray-600">{robot.id}</p>
                </div>
                <div className={`w-4 h-4 rounded-full ${getStatusDot(robot.status)}`}></div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-semibold">Status:</span>
                  <span className="capitalize">{robot.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Uptime:</span>
                  <span>{robot.uptime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Last Maintenance:</span>
                  <span>{robot.lastMaintenance}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-semibold">Current Task:</span>
                  <span className="bg-[var(--machine-grey)] text-white px-2 py-1 rounded text-sm">
                    {robot.currentTask}
                  </span>
                </div>
              </div>

              <button className="w-full mt-4 bg-[var(--machine-grey)] text-white py-2 rounded hover:bg-gray-700 transition font-semibold">
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-gray-600 text-sm font-semibold">TOTAL ROBOTS</p>
            <p className="text-3xl font-bold text-[var(--machine-grey)]">{robots.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-gray-600 text-sm font-semibold">ACTIVE</p>
            <p className="text-3xl font-bold text-green-600">{robots.filter(r => r.status === 'active').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-gray-600 text-sm font-semibold">IDLE</p>
            <p className="text-3xl font-bold text-[var(--banana-yellow)]">{robots.filter(r => r.status === 'idle').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <p className="text-gray-600 text-sm font-semibold">MAINTENANCE</p>
            <p className="text-3xl font-bold text-red-600">{robots.filter(r => r.status === 'maintenance').length}</p>
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
