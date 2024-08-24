import React from "react";
import "./home.scss";
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import { closeBtn } from '../../Redux/useReducer'

const Home = () => {
  const dispatch = useDispatch();
  const openCart = useSelector((state)=>state.cart.openCart);
  return <div className="home" onClick={()=>`${openCart?dispatch(closeBtn()) :''}`}>
    <Slider/>
    <FeaturedProducts type={'Featured'}/>
    <Categories/>
    <FeaturedProducts type={'Trending'}/>
    <Contact/>
  </div>;
};

export default Home;
