import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ButtonWishlist.scss";

const ButtonWishlist = () => {
  const [isWished, setIsWished] = useState(false);

  const handleToggleWishlist = () => {
    setIsWished((prevIsWished) => !prevIsWished);
  };

  return (
    <button
      className={`add-to-wishlist-button ${isWished ? "active" : ""}`}
      onClick={handleToggleWishlist}
    >
      <i
        className={`bi ${
          isWished ? "bi-heart-fill" : "bi-heart"
        } icon-wishlist`}
      ></i>
    </button>
  );
};

export default ButtonWishlist;
