import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="item">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="product"
          />
          <button className="btn">
            <Link to={"/products/1"}>SALE</Link>
          </button>
        </div>

        <div className="item">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="product"
          />
          <button className="btn">
            <Link to={"/products/1"}>WOMEN</Link>
          </button>
        </div>
      </div>


      <div className="col">
        <div className="item">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="product"
          />
          <button className="btn">
            <Link to={"/products/1"}>NEW SEASON</Link>
          </button>
        </div>
      </div>

      <div className="col col-2">
        <div className="row">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="product"
            />
            <button className="btn">
              <Link to={"/products/1"}>MEN</Link>
            </button>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="product"
            />
            <button className="btn">
              <Link to={"/products/1"}>ACCESSORIES</Link>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="product"
            />
            <button className="btn">
              <Link to={"/products/1"}>SHOES</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
