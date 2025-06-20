import React from "react";
import "./slidebar.css";
import Slider from "react-slick";

const carData = [
  {title: "Hyundai",logo:'https://api.goldenautoent.com/uploads/Hyundai_18a1d3446c.png'},
  {title: "Mercedes",logo:'https://api.goldenautoent.com/uploads/mercedes_benz_1d229414a2.png'},
  {title: "Tesla",logo:'https://api.goldenautoent.com/uploads/tesla_f5cd6e8423.png'},
  {title: "BMWC",logo:'https://api.goldenautoent.com/uploads/bmw_1c2a135062.png'},
  {title: "Toyota",logo:'https://api.goldenautoent.com/uploads/toyota_813e3dca73.png'},
];

const settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  cssEase: "linear",
  arrows: false, // <-- hides left/right arrows
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
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


const SliderBar = () => {
   return (
    <div className="parent-container">
    <div className="brand-container">
      <div className="brand-heading">
        <h3>Brands</h3>
      </div>

      <div className="car-container">
      <Slider {...settings} className="slider">
        {carData?.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-child">
              <img src={item.logo} alt={item.title} className="brand-logo" />
              <div className="cart-title">{item.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      
    </div>
    </div>
    
  );
};

export default SliderBar;
