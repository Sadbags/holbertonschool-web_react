import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx"; // 👈 ruta correcta
import "./main.css"; // si tienes estilos globales, aquí puedes importarlos

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
