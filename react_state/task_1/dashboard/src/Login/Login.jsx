import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
      isLoggedIn: false,
    };

    // 🔗 Enlazamos métodos
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  // ✅ Verifica si el email y la password son válidos
  validateForm(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPasswordValid = password.length >= 8;

    return isEmailValid && isPasswordValid;
  }

  // ✅ Maneja cambio del email
  handleChangeEmail(event) {
    const email = event.target.value;
    const { password } = this.state;
    this.setState({
      email,
      enableSubmit: this.validateForm(email, password),
    });
  }

  // ✅ Maneja cambio del password
  handleChangePassword(event) {
    const password = event.target.value;
    const { email } = this.state;
    this.setState({
      password,
      enableSubmit: this.validateForm(email, password),
    });
  }

  // ✅ Maneja envío del formulario
  handleLoginSubmit(event) {
    event.preventDefault(); // ❌ evita recargar la página
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <section className="Login">
        <h2>Log in to continue</h2>
        <form onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            type="submit"
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </section>
    );
  }
}

export default Login;
