import React from "react";

export default function Header({ user, logOut }) {
  return (
    <header>
      <img src="/holberton-logo.jpg" alt="Holberton logo" />
      <h1>School dashboard</h1>
      {user.isLoggedIn && (
        <div>
          <p>Welcome {user.email}</p>
          <button onClick={logOut}>Logout</button>
        </div>
      )}
    </header>
  );
}
