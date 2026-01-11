import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Contact from "./pages/Contact";

function App() {
  // 🔹 Cart state (GLOBAL)
  const [cartItems, setCartItems] = useState([]);

  // 🔹 useEffect to track cart changes
  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar cartCount={cartItems.length} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={
              <Products
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />

          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} />}
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;




