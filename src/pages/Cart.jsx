function Cart({ cart, removeFromCart, cleartcart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    alert(" Order placed successfully! Thank you for shopping with BlushBay.");
    cleartcart();
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>₹ {item.price} × {item.qty}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹ {total}</h3>
          <button className="order-btn" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
