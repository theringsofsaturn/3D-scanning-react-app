import { useState } from "react";
import whiteLogo from "./assets/white-logo.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://thrid.eu" target="_blank">
          <img src={whiteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo thrid" alt="Thrid logo" />
        </a>
      </div>
      <h1>Website under construction</h1>
      <div className="card"></div>
    </>
  );
}

export default App;
