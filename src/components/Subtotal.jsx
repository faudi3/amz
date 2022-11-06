import React from "react";
import "../styles/subtotal.css";
import { useStateValue } from "../Store/StateProvider";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const TotalPrice = () => {
    let sum = 0;
    basket.forEach((item) => (sum += item.price));
    return sum;
  };
  return (
    <div className={"subtotal"}>
      <h3 className={"subtotal__text"}>
        Subtotal ( {basket.length} items ) : <strong>${TotalPrice()}</strong>
      </h3>
      <button className={"subtotal__btn"}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
