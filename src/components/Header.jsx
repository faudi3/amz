import React from "react";
import "../styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../Store/StateProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const Header = () => {
  const [{ basket, user }] = useStateValue();
  const handleAuth = () => {
    if (user) {
      const res = signOut(auth);
    }
  };
  return (
    <div className={"header"}>
      <Link to={"/"}>
        <img
          className="header__logo"
          src={"http://pngimg.com/uploads/amazon/amazon_PNG11.png"}
        />
      </Link>
      <div className="header__search">
        <input className={"header__searchInput"} type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className={"Link"} to={!user && "/login"}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link className={"Link"} to={"/checkout"}>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className={"header__optionLineTwo header__basketCount"}>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
