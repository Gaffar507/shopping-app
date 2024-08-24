import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({ id, title, oldPrice, price, images, isNew }) => {
  const checkTitle = (title) => {
    if (title.length >= "20") {
      return `${title.substring(0, 15)}..`;
    }
    return title;
  };

  return (
    <div className="card">
      <div className="img-container">
        <Link to={`/product/${id}`} className="images">
          <img src={images[0]} alt="product" className="first-img" />
          <img src={images[1]} alt="product" className="second-img" />
        </Link>
        {isNew ? <span className="new">New Season</span> : ""}
      </div>
      <div className="details">
        <Link to={`/product/${id}`} className="title">
          {checkTitle(title)}
        </Link>
        <div className="price">
          <span className="oldPrice">{oldPrice}$</span>
          <span>{price}$</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
