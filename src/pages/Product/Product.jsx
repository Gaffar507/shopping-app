import React, { useState, useEffect } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./product.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Redux/useReducer";
import { useParams } from "react-router-dom";
import { productData } from "../../assets/productData";
import { closeBtn } from "../../Redux/useReducer";

const Product = () => {
  const dispatch = useDispatch();
  const openCart = useSelector((state) => state.cart.openCart);
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const itemId = parseInt(useParams().id);
  const data = productData.find((item) => item.id === itemId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="product"
      onClick={() => `${openCart ? dispatch(closeBtn()) : ""}`}
    >
      {/* left side */}
      <div className="left">
        <div className="img-box">
          <img src={data.images[0]} alt="product" onClick={() => setIndex(0)} />
          <img src={data.images[1]} alt="product" onClick={() => setIndex(1)} />
        </div>

        <div className="main-img">
          <img src={data.images[index]} alt="product" />
        </div>
      </div>

      {/* right side */}
      <div className="right">
        <h2>{data.title}</h2>
        <span className="price">${data.price}</span>
        <span className="title-info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          quaerat inventore architecto beatae velit quod laudantium eligendi
          exercitationem cumque, quae eius fugit quidem fuga repellat.
        </span>

        <div className="buttons">
          <button
            onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => setQuantity(quantity === 5 ? 5 : quantity + 1)}
          >
            +
          </button>
        </div>

        <button
          className="add-cart"
          onClick={() =>
            dispatch(
              addCart({
                id: data.id,
                img: data.images[0],
                des: data.des,
                price: data.price,
                quantity: quantity,
                title: data.title,
              })
            )
          }
        >
          <AddShoppingCartIcon style={{ width: "15px" }} /> Add to cart
        </button>

        <div className="wish-list">
          <span>
            <FavoriteBorderIcon style={{ width: "15px" }} /> Add to wish list
          </span>
          <span>
            <BalanceIcon style={{ width: "15px" }} /> add to Compare
          </span>
        </div>

        <div className="product-details">
          <div className="details">
            <span>Vendor: Polo</span>
            <span>Product Type: T-shirt</span>
            <span>Tag: T-shirt, Women, Top</span>
          </div>
          <hr />
          <div className="info">
            <span>Description</span>
            <hr />
            <span>Additional information</span>
            <hr />
            <span>FAq</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
