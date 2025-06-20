import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./topcar.css";
import cars from './Cars';
const TopCar = () => {
  const [filter, setFilter] = useState("All");

  const filteredCars =
    filter === "All" ? cars : cars.filter((car) => car.type === filter);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="top-cars-slider">
      <div className="section-header">
        <h2>Top Cars</h2>
        <select
          className="filter-dropdown"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter</option>
          <option value="All">All</option>
          <option value="EV">EV</option>
          <option value="Petrol">Petrol</option>
        </select>
      </div>

      <Slider {...settings} className="slider-container">
        {filteredCars.map((car, i) => (
          <div className="car-slide" key={i}>
          <img src={car.image} alt={car.title} />
            <div className="car-caption">
              <h4>{car.title}</h4>
              <p>{car.variant}</p>
            </div>
          </div>
        ))}
      </Slider>
      <button className="loading-btn"> Load More</button>
    </section>
  );
};

export default TopCar;
