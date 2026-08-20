import "../styles/admin.css";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <div className="admin-sidebar">
        <h2>🛠 Indian Tools</h2>
        <p className="admin-subtitle">Admin Panel</p>

        <Link to="/admin/products">Manage Products</Link>
        <Link to="/admin/users">View Users</Link>
        <Link to="/admin/orders">Manage Orders</Link>
      </div>

      {/* Main Content */}
      <div className="admin-content">
        <h1>Welcome Admin</h1>
        <p>
          From here you can manage your products, users and orders.
        </p>

        <div className="admin-cards">
          <div className="admin-card">
            <h3>Products</h3>
            <p>Add, edit or delete products.</p>
            <Link to="/admin/products" className="primary-btn">
              Go to Products
            </Link>
          </div>

          <div className="admin-card">
            <h3>Users</h3>
            <p>View all registered users.</p>
            <Link to="/admin/users" className="primary-btn">
              Go to Users
            </Link>
          </div>

          <div className="admin-card">
            <h3>Orders</h3>
            <p>Manage customer orders.</p>
            <Link to="/admin/orders" className="primary-btn">
              Go to Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
