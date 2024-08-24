import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { closeBtn } from '../../Redux/useReducer'
const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const openCart = useSelector((state)=>state.cart.openCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length !== 0) {
    dispatch(closeBtn(true))
    }
  }, [products]);

  return (
    <div className="navbar">
      <div className="wrapper">
        {/* left side */}
        <div className="left">
          <div className="item">
            <img src="/images/en.png" alt="language" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item-categories">
            <Link to={"/products/1"}>Men</Link>
            <Link to={"/products/2"}>Women</Link>
            <Link to={"products/3"}>Children</Link>
            <Link to={"products/4"}>Accessories</Link>
          </div>
        </div>

        {/* center side */}
        <div className="center">
          <Link to={"/"}>LAMASTORE</Link>
        </div>

        {/* right side */}
        <div className="right">
          <div className="links">
            <Link>Homepage</Link>
            <Link>About</Link>
            <Link to={''}>Contact</Link>
            <Link>Stores</Link>
          </div>

          <div className="icons">
            <button className="icon">
              <SearchIcon />
            </button>
            <button className="icon">
              <PersonOutlineIcon />
            </button>
            <button className="icon">
              <FavoriteBorderIcon />
            </button>
            <button
              className="cart-icon"
              onClick={() => dispatch(closeBtn())}
            >
              <ShoppingCartIcon />
              <span>{products.length}</span>
            </button>
          </div>
          {openCart ? <Cart /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
