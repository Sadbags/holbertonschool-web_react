import "./Login.css";

// Login renders the login form with email and password inputs.
function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" />

      <button type="submit">OK</button>
    </div>
  );
}

export default Login;
