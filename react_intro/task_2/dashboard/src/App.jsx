import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button>OK</button>
      </form>
    </div>
  );
}

export default App;
