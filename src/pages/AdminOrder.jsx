import "../styles/admin.css";

function AdminOrders() {
  // Temporary dummy data (later from backend)
  const orders = [
    {
      id: 1,
      user: "Afifa",
      total: 2500,
      status: "Pending",
    },
    {
      id: 2,
      user: "Rahul",
      total: 1800,
      status: "Delivered",
    },
    {
      id: 3,
      user: "Sana",
      total: 3200,
      status: "Shipped",
    },
  ];

  return (
    <div className="admin-content">
      <h1>Manage Orders</h1>
      <p>All customer orders</p>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User</th>
            <th>Total (₹)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.user}</td>
              <td>₹{order.total}</td>
              <td>
                <span className={`status ${order.status.toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
              <td>
                <button className="primary-btn">View</button>
                <button className="danger-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrders;
