function ProductCard({ product, cart, addToCart, increaseQty, decreaseQty }) {
  const cartItem = cart.find(item => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹ {product.price}</p>

      {!cartItem ? (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      ) : (
        <div className="qty-control">
          <button onClick={() => decreaseQty(product.id)}>-</button>
          <span>{cartItem.qty}</span>
          <button onClick={() => increaseQty(product.id)}>+</button>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
