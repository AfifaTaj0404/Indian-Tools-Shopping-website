import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminAddProduct from "./pages/AdminAddProduct";
import AdminProducts from "./pages/AdminProducts";

import Notifications from "./components/Notifications";
import { CartProvider } from "./context/CartContext";

function App() {

  // 🔥 Load WebSocket ONLY for users
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "user") {
      import("./utils/socket")
        .then(() => {
          console.log("🟢 User WebSocket loaded");
        })
        .catch((err) => {
          console.error("❌ Socket load error:", err);
        });
    } else {
      console.log("🛑 Admin detected — socket not loaded");
    }
  }, []);

  return (
    <CartProvider>
      <div className="app-container">
        <Navbar />

        {/* 🔔 Notifications */}
        <Notifications />

        <main className="main-content">
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Routes */}
            <Route path="/admin/add" element={<AdminAddProduct />} />
            <Route path="/admin/products" element={<AdminProducts />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;











