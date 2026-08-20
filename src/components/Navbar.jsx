// src/components/Navbar.jsx
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/admin.css";

function Navbar() {
  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();              // clears state + localStorage
    navigate("/login");    // redirect
  };

  return (
    <nav className="navbar">
      <h2>🛠 Indian Tools</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            {/* ADMIN LINKS */}
            {user?.role === "admin" && (
              <>
                <Link to="/admin/add">Add Product</Link>
                <Link to="/admin/products">Manage Products</Link>
              </>
            )}

            <span>👋 {user?.name}</span>
            <button className="logout-btn" onClick={handleLogout}>
  Logout
</button>

          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;






