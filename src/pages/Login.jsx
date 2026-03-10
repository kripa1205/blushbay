function Login({ setLoggedIn }) {
  return (
    <div className="login">
      <h2>Welcome to BlushBay</h2>
      <p>Minimal • Elegant • Timeless</p>

      <input placeholder="Email" />
      <input placeholder="Password" type="password" />

      <button onClick={() => setLoggedIn(true)}>
        Login
      </button>
    </div>
  );
}

export default Login;
