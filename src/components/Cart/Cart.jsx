import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import "./cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, resetCart } from "../../Redux/useReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2 className="title">Products in your cart</h2>
      <div className="products-bucket">
        {products
          ? products.map((item, index) => (
              <div key={index} className="cart">
                <img src={item.img} alt="product" />
                <div className="details">
                  <p>{item.title}</p>

                  <span className="des">{item.des?.substring(0, 70)}...</span>

                  <span className="price">
                    {item.quantity} X ${item.price}
                  </span>
                </div>
                <button
                  className="btn delete"
                  onClick={() => dispatch(removeCart(item.id))}
                >
                  {<DeleteOutlineIcon style={{ width: "20px" }} />}
                </button>
              </div>
            ))
          : ""}
      </div>

      <div className="total">
        <span>Sub Total :</span>
        <span>{totalPrice()}$</span>
      </div>

      <button className="proceed">Proceed to checkout</button>

      <button className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </button>
    </div>
  );
};

export default Cart;
