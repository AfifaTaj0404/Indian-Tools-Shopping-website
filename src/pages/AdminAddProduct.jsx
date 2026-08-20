import React, { useState } from "react";
import axios from "../utils/axiosInstance";
import "../styles/admin.css";

export default function AdminAddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const submit = async () => {
    if (!name || !price || !image) {
      alert("Please fill all fields");
      return;
    }

    try {
      // ✅ UPDATED ROUTE
      await axios.post("/products", {
        name,
        price,
        image,
      });

      alert("✅ Product added successfully");

      // 🔥 Tell other components to refresh
      window.dispatchEvent(new Event("refresh-products"));

      setName("");
      setPrice("");
      setImage("");
    } catch (err) {
      console.error(err);
      alert("❌ Error adding product");
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Add Product</h2>

      <div className="admin-form">
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Image name (example: drill.jpg)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        {/* ✅ IMAGE PREVIEW */}
        {image && (
          <div style={{ marginTop: "10px" }}>
            <p>Preview:</p>
            <img
              src={`/${image}`}
              alt="preview"
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
              }}
              onError={(e) => (e.target.style.display = "none")}
            />
          </div>
        )}

        <button onClick={submit}>Add</button>
      </div>
    </div>
  );
}




