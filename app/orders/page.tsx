export default function OrdersPage() {
  const orders = [
    { id: 'ORD-001', customer: 'Fresh Market Co', quantity: 50, status: 'in-progress', boxes: 3 },
    { id: 'ORD-002', customer: 'Fruity Imports Ltd', quantity: 100, status: 'pending', boxes: 6 },
    { id: 'ORD-003', customer: 'Tropical Foods Inc', quantity: 75, status: 'completed', boxes: 5 },
    { id: 'ORD-004', customer: 'Quality Grocers', quantity: 35, status: 'in-progress', boxes: 2 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-[#ffeaa7] text-black';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100';
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
        <h2 className="text-3xl font-bold mb-2">Customer Orders</h2>
        <p className="text-gray-600 mb-6">Manage and track active picking orders</p>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-[var(--machine-grey)] text-white">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Order ID</th>
                <th className="px-6 py-3 text-left font-semibold">Customer</th>
                <th className="px-6 py-3 text-left font-semibold">Quantity (lbs)</th>
                <th className="px-6 py-3 text-left font-semibold">Boxes</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[var(--machine-grey)]">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.quantity}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-[var(--light-grey)] rounded text-center font-semibold">
                      {order.boxes}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded font-semibold ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1).replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[var(--banana-yellow)] hover:underline font-semibold">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[var(--banana-yellow)]">
            <p className="text-gray-600 text-sm font-semibold">TOTAL ORDERS</p>
            <p className="text-3xl font-bold text-[var(--machine-grey)]">{orders.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <p className="text-gray-600 text-sm font-semibold">COMPLETED</p>
            <p className="text-3xl font-bold text-green-600">{orders.filter(o => o.status === 'completed').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[var(--banana-yellow)]">
            <p className="text-gray-600 text-sm font-semibold">IN PROGRESS</p>
            <p className="text-3xl font-bold text-[var(--banana-yellow)]">{orders.filter(o => o.status === 'in-progress').length}</p>
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
