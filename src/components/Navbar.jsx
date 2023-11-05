import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>VaeKon</h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Shops</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Who">Who we are</Link>
        </li>
        <li className="navbar-item">
          <Link to="/Newstand">Newstand</Link>
        </li>
        <li className="navbar-item">
          <Link to="/MyProfile">MyProfile</Link>
        </li>
        <button
          style={{
            backgroundColor: "rgb(34, 72, 34)",
            color: "white",
            border: "2px",
            marginRight: "12px",
            widht: "12px",
            borderRadius: "5px",
          }}
        >
          Basket(3)
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
