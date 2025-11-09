import React, { useState } from "react";
import PropTypes from "prop-types";

function Login({ logIn, email = "", password = "" }) {
  const [userEmail, setUserEmail] = useState(email);
  const [userPassword, setUserPassword] = useState(password);
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleChangeEmail = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    setEnableSubmit(value !== "" && userPassword.length >= 8);
  };

  const handleChangePassword = (e) => {
    const value = e.target.value;
    setUserPassword(value);
    setEnableSubmit(userEmail !== "" && value.length >= 8);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(userEmail, userPassword);
  };

  return (
    <section className="Login">
      <h2>Log in to continue</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={userEmail} onChange={handleChangeEmail} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={userPassword} onChange={handleChangePassword} />
        </div>
        <input type="submit" value="OK" disabled={!enableSubmit} />
      </form>
    </section>
  );
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
};

export default Login;
