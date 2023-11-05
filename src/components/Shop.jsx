import React from "react";
import Tomato from "../imgs/tomato.jpg";
import Onion from "../imgs/onion.jpg";
import Adrak from "../imgs/Adrak.jpg";
import "./Shop.css";
import Payments from "./Payments";

const Shop = () => {
  return (
    <div className="shop">
      <div className="items">
        <img src={Tomato} alt="img" />
        <div className="box">
          <p>Tomato</p>
          <span>$5.99/ lb</span>
          <span style={{ marginLeft: "183px", color: "rgb(34, 72, 34)" }}>
            $5.99
          </span>
          <button
            style={{
              borderRadius: "7px",
              backgroundColor: "white",
              color: "grey",
              width: "50px",
              border: "none",
            }}
          >
            1 lb
          </button>
        </div>
      </div>

      <div className="items">
        <img src={Adrak} alt="img" />
        <div className="box">
          <p>Organic Ginger</p>
          <span>$5.99/ lb</span>
          <span style={{ marginLeft: "196px", color: "rgb(34, 72, 34)" }}>
            $5.99
          </span>
          <button
            style={{
              borderRadius: "7px",
              backgroundColor: "white",
              color: "grey",
              width: "50px",
              border: "none",
            }}
          >
            0.5b
          </button>
        </div>
      </div>

      <div className="items">
        <img src={Onion} alt="img" style={{ height: "55px" }} />
        <div className="box">
          <p>Onion</p>
          <span>$5.99/ lb</span>
          <span style={{ marginLeft: "183px", color: "rgb(34, 72, 34)" }}>
            $5.99
          </span>
          <button
            style={{
              borderRadius: "7px",
              backgroundColor: "white",
              color: "grey",
              width: "50px",
              border: "none",
            }}
          >
            5 b 
          </button>
        </div>
      </div>
      <Payments />
    </div>
  );
};

export default Shop;
