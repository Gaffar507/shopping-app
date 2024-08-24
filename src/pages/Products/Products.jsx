import React, { useState, useEffect } from "react";
import Lists from "../../components/Lists/Lists";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeBtn } from '../../Redux/useReducer'
import "./products.scss";

const Products = () => {
  const dispatch = useDispatch();
  const openCart = useSelector((state)=>state.cart.openCart);
  const cardId = parseInt(useParams().id);
  const [maxPrice, setMaxprice] = useState(1000);
  const [sort, setSort] = useState();
  const [category, setCategory] = useState();

  const changeValue = (e) => {
    setMaxprice(e.target.value);
  };

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="products"  onClick={()=>`${openCart?dispatch(closeBtn()) :''}`}>
      <div className="wrapper">
        {/* menu section */}
        <div className="menu">
          <div className="menu-wrapper">

          <div className="category">
            <h3>Product Categories</h3>
            <div className="item">
              <input
                type="checkbox"
                name="item"
                id="1"
                value="shoes"
                onChange={(e) => setCategory(e.target.value)}
                />
              <label htmlFor="1"> Shoes</label>
            </div>
            <div className="item">
              <input
                type="checkbox"
                name="item"
                id="2"
                value="skirts"
                onChange={(e) => setCategory(e.target.value)}
                />
              <label htmlFor="2"> Skirts</label>
            </div>
            <div className="item">
              <input
                type="checkbox"
                name="item"
                id="3"
                value="coats"
                onChange={(e) => setCategory(e.target.value)}
                />
              <label htmlFor="3"> Coats</label>
            </div>
          </div>

          <div className="filter">
            <h3>Filter by price</h3>
            <div className="item">
              <label htmlFor="item">0</label>
              <input
                type="range"
                name="item"
                min={0}
                max={1000}
                value={maxPrice}
                onChange={(e) => changeValue(e)}
                />
              <label htmlFor="item">{maxPrice}</label>
            </div>
          </div>

          <div className="sort">
            <h3>Sort by</h3>
            <div className="item">
              <input
                type="radio"
                name="item"
                id="item"
                value="asc"
                onChange={(e) => setSort(e.target.value)}
                />
              <label htmlFor="asc"> Price (Lowest first)</label>
            </div>
            <div className="item">
              <input
                type="radio"
                name="item"
                id="item"
                value="des"
                onChange={(e) => setSort(e.target.value)}
                />
              <label htmlFor="des"> Price (Hightest first)</label>
            </div>
          </div>
          </div>
        </div>

        {/* right section */}
        <div className="items">
          <div className="banner-img">
            <img src="/images/girl.jpg" alt="girl" />
          </div>
          <Lists
            cardId={cardId}
            sort={sort}
            maxPrice={maxPrice}
            category={category}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
