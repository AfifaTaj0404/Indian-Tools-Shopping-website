import { useState, useEffect } from "react";

function Products({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: "Hammer", price: 250 },
      { id: 2, name: "Screwdriver", price: 150 },
      { id: 3, name: "Drill Machine", price: 3500 },
    ]);
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;




