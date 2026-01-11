function Cart({ cartItems }) {
  return (
    <div>
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <p>No items added to cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;



