function Navbar({ setPage, cartCount, setLoggedIn }) {
  return (
    <nav className="navbar">
      <h2 className="logo">BlushBay</h2>

      <ul>
        <li onClick={() => setPage("home")}>Home</li>
        <li onClick={() => setPage("shop")}>Shop</li>
        <li onClick={() => setPage("cart")}>Cart ({cartCount})</li>
        <li onClick={() => setLoggedIn(false)}>Logout</li>
      </ul>
    </nav>
  );
}

export default Navbar;
