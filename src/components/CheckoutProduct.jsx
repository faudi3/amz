import React from "react";
import "../styles/checkoutproduct.css";
import { useStateValue } from "../Store/StateProvider";
const CheckoutProduct = ({ id, image, title, price, rating, ind }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };
  return (
    <div className={"checkoutProduct"}>
      <img src={image} alt={""} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className={"checkoutProduct__title"}>{title}</p>
        <p className={"checkoutProduct__price"}>${price}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <button
          className={"checkoutProduct__button"}
          onClick={removeFromBasket}
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
