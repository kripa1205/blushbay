import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import products from "./data/Products"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter(item => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  if (!loggedIn) return <Login setLoggedIn={setLoggedIn} />;

  const cleartcart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar setPage={setPage} cartCount={cart.length} setLoggedIn={setLoggedIn} />

      {page === "home" && (
        <Home
          products={products}
          cart={cart}
          addToCart={addToCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          setPage={setPage}
        />
      )}

      {page === "shop" && (
        <Shop
          products={products}
          cart={cart}
          addToCart={addToCart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
        />
      )}

      {page === "cart" && (
        <Cart cart={cart} removeFromCart={removeFromCart} cleartcart={cleartcart}  />
      )}

      <Footer />
    </>
  );
}

export default App;
