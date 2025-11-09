import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email || "",
      password: props.password || "",
      enableSubmit: false,
    };
  }

  handleChangeEmail = (e) => {
    const email = e.target.value;
    this.setState({ email }, this.validateForm);
  };

  handleChangePassword = (e) => {
    const password = e.target.value;
    this.setState({ password }, this.validateForm);
  };

  validateForm = () => {
    const { email, password } = this.state;
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= 8;
    this.setState({ enableSubmit: isValidEmail && isValidPassword });
  };

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  };

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <section className="Login">
        <h2>Log in to continue</h2>
        <form onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
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

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
};

Login.defaultProps = {
  email: "",
  password: "",
};

export default Login;
