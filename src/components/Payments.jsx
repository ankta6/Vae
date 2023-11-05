import React from "react";
import "./Pay.css";
const Payments = () => {
  return (
    <div>
      <div className="order">
        <b>Order Summery</b>
        <p>
          Subtotal <span>$27.44</span>
        </p>
        <p>
          Tax <span>$2.00</span>
        </p>

        <p>
          Shipping <span>$3.99</span>
        </p>

        <p>
          Total<span>$33.43</span>
        </p>

        <button
          style={{
            backgroundColor: " rgb(34, 72, 34)",
            color: "white",
            border: "2px",
            marginRight: "22px",
            borderRadius: "5px",
            padding: "2px",
            width: "210px",
            marginTop: "65px",
          }}
        >
          Continue to payment
        </button>
      </div>
    </div>
  );
};

export default Payments;
