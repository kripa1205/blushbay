import ProductCard from "../components/ProductCard";

function Shop({ products, cart, addToCart, increaseQty, decreaseQty }) {
  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      ))}
    </div>
  );
}

export default Shop;
