import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import "../styles/admin.css";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  const load = async () => {
    try {
      const res = await axios.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const del = async (id) => {
    try {
      // ✅ UPDATED DELETE ROUTE
      await axios.delete(`/products/${id}`);

      // Refresh after delete
      load();

      // 🔥 Notify other pages
      window.dispatchEvent(new Event("refresh-products"));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-title">Admin Products</h2>

      {products.map((p) => (
        <div key={p._id} className="product-row">
          <div>
            <span className="product-name">{p.name}</span> -{" "}
            <span className="product-price">₹{p.price}</span>
          </div>

          <button
            className="delete-btn"
            onClick={() => del(p._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}