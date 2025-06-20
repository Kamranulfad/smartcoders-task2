import React from "react";
import { FaSearch } from "react-icons/fa";
import "./home.css"; 
import Slidebar from '../slidebar/Slidebar';
import NearbyCars from "../nearByCar/NearByCar";
import BestSellingCar from "../bestsellingcar.css/BestsellingCar";
import TopCar from "../TopCar.js/TopCar";
import CarNews from "../carnews/CarNews";

const Home = () => {
  return (
    <>
    <section className="hero">
      <h1 className="hero-title">Let's find your perfect car</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Describe what you're looking for"
          className="search-input"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <div className="hero-buttons">
        <button className="hero-btn">Shop New</button>
        <button className="hero-btn">Shop Used</button>
      </div>
    </section>
    <Slidebar/>
    <NearbyCars/>
    <BestSellingCar/>
    <TopCar/>
    <CarNews/>
    </>
  );
};

export default Home;
