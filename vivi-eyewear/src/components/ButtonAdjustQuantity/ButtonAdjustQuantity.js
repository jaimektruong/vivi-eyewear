import React, { useState } from "react";
import "./ButtonAdjustQuantity.scss";

const ButtonAdjustQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : prevQuantity
    );
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="adjust-quantity-container d-flex justify-content-around">
      <button className="adjust-quantity-btn" onClick={handleDecrement}>
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button className="adjust-quantity-btn" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default ButtonAdjustQuantity;
