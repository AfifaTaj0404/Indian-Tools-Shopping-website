import { useContext, useState, useEffect, useCallback } from "react";
import { CartContext } from "../context/CartContext";
import "./Products.css";

function Products() {

  const { addToCart } = useContext(CartContext);

  const [showPopup, setShowPopup] = useState(false);

  const [popupMsg, setPopupMsg] = useState("");

  const products = [
    { id: 1, name: "Drill Machine", price: 2500, image: "/src/assets/drill.jpg" },
    { id: 2, name: "Hammer", price: 500, image: "/src/assets/hammer.jpg" },
    { id: 3, name: "Angle Grinder", price: 3200, image: "/src/assets/grinder.jpg" },
    { id: 4, name: "Electric Screwdriver", price: 1800, image: "/src/assets/screwdriver.jpg" }
  ];

  const handleAddToCart = useCallback((product) => {
    addToCart(product);
    setPopupMsg(`${product.name} added to cart`); 
  }, [addToCart]);

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
        {products.map(product => (
          <div className="product-card" key={product.id}>

            <img src={product.image} alt={product.name} />

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













