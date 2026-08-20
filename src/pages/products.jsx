import { useContext, useState, useEffect, useCallback } from "react";
import { CartContext } from "../context/CartContext";
import axios from "../utils/axiosInstance";
import "../utils/socket";   // ✅ IMPORTANT: this loads WebSocket
import "./Products.css";

function Products() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");

  // 🔥 Fetch products
  const fetchProducts = () => {
    axios.get("/products").then((res) => {
      setProducts(res.data);
    });
  };

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Listen for refresh event from WebSocket
  useEffect(() => {
    const handler = () => {
      console.log("🔄 Refresh event received");
      fetchProducts();
    };

    window.addEventListener("refresh-products", handler);

    return () => {
      window.removeEventListener("refresh-products", handler);
    };
  }, []);

  const handleAddToCart = useCallback(
    (product) => {
      addToCart(product);
      setPopupMsg(`${product.name} added to cart`);
      setShowPopup(true);
    },
    [addToCart]
  );

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="products-container">
      <h1>Products</h1>

      {showPopup && <div className="popup">{popupMsg}</div>}

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              src={`/${product.image}`}
              alt={product.name}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
              }}
            />

            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
















