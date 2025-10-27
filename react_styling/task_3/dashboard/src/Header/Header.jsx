import React from "react";
import logo from "../assets/holberton-logo.jpg";

function Header() {
  return (
    <header className="flex items-center gap-4 border-b-4 border-[var(--main-color)] p-4">
      <img src={logo} alt="Holberton Logo" className="h-20 w-20" />
      <h1 className="text-4xl font-bold text-[var(--main-color)]">
        School dashboard
      </h1>
    </header>
  );
}

export default Header;
