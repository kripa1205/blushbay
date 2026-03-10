import React from "react";
import products from "../data/Products";
import ProductCard from "../components/ProductCard";

const Home = ({ setPage, cart, addToCart, increaseQty, decreaseQty }) => {
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      
      <section className="hero">
        <div className="hero-content">
          <h1>BlushBay</h1>
          <p>Soft tones. Calm living.</p>
         <span> <button onClick={() => setPage("shop")}>
            Shop Now
          </button> </span> 
        </div>
      </section>

      
      <section className="featured">
        <h2>Featured Products</h2>

        <div className="featured-grid">
          {featuredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              cart={cart}
              addToCart={addToCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
