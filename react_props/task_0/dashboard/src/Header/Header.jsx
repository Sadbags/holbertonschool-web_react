import react from "react";
import holberton_logo from "../assets/holberton-logo.jpg";
import "./Header.css";

function Header() {
    return (
        <div className="App-header">
        <img src={holberton_logo} />
        <h1>School dashboard</h1>
        </div>
    );
}