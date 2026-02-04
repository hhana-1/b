export default function UserOrders() {
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
        return 'bg-[#FFF59D] text-black';
      case 'pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100';
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
            <a href="/user/orders" className="hover:text-[#FFC107] transition font-semibold">Orders</a>
            <a href="/user/robots" className="hover:text-[#FFC107] transition">Robots</a>
            <span className="text-[#FFC107]">👤 User</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-2 text-[#666666]">Your Active Orders</h2>
        <p className="text-gray-800 mb-6">Manage and track your banana picking orders</p>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#666666] text-white">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Order ID</th>
                <th className="px-6 py-3 text-left font-semibold">Destination</th>
                <th className="px-6 py-3 text-left font-semibold">Quantity (lbs)</th>
                <th className="px-6 py-3 text-left font-semibold">Boxes</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-[#666666]">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4">{order.quantity}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 bg-[#FFF59D] rounded text-center font-semibold text-black">
                      {order.boxes}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded font-semibold ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1).replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#FFC107] hover:underline font-semibold">
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
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#FFC107]">
            <p className="text-gray-600 text-sm font-semibold">TOTAL ORDERS</p>
            <p className="text-3xl font-bold text-[#666666]">{orders.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <p className="text-gray-600 text-sm font-semibold">COMPLETED</p>
            <p className="text-3xl font-bold text-green-600">{orders.filter(o => o.status === 'completed').length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-[#FFC107]">
            <p className="text-gray-600 text-sm font-semibold">IN PROGRESS</p>
            <p className="text-3xl font-bold text-[#FFC107]">{orders.filter(o => o.status === 'in-progress').length}</p>
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
