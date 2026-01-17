import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Indian Tools
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Contact">Contact Us</Link>
        <Link to="/Cart">Cart</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;


