import React, { useContext } from "react";
import "./Footer.css";
import AppContext from "../Context/context";

export default function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className="App-footer">
      <p>
        Copyright {new Date().getFullYear()} - Holberton School
      </p>
      {user && user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </div>
  );
}
