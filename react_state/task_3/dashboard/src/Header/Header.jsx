// src/Header/Header.jsx
import React, { useContext } from "react";
import logo from "../assets/holberton-logo.jpg";
import AppContext from "../Context/context";

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 border-b-4 border-[var(--main-color)] p-4 text-center sm:text-left">
        <img
          src={logo}
          alt="Holberton Logo"
          className="h-20 w-20 mx-auto sm:mx-0"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--main-color)]">
          School dashboard
        </h1>
      </header>

      {user?.isLoggedIn && (
        <section id="logoutSection" className="p-4 text-center sm:text-left">
          Welcome <strong>{user.email}</strong>{" "}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              logOut();
            }}
            className="text-[var(--main-color)] underline"
          >
            (logout)
          </a>
        </section>
      )}
    </>
  );
}

export default Header;
