import React from "react";
import { Link } from "react-router-dom";
import { FaGasPump, FaCogs, FaCarSide } from "react-icons/fa";
import "./carSection.css"; // Your existing styling file

const CarSection = ({ title, viewAllLink, cars }) => {
  const getFeatureIcon = (feature) => {
    switch (feature.toLowerCase()) {
      case "petrol":
        return <FaGasPump />;
      case "manual":
        return <FaCogs />;
      case "coupe":
        return <FaCarSide />;
      default:
        return <FaCarSide />;
    }
  };

  return (
    <div className="nearby-container">
      <div className="section-header">
        <h2>{title}</h2>
        <Link to={viewAllLink}>View All ➜</Link>
      </div>
      <div className="car-list">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.title} />
            <div className="car-info">
              <h4>{car.title}</h4>
              <div className="variant-price">
                <p className="variant">{car.variant}</p>
                <span className="price">{car.price}</span>
              </div>
              <hr className="separator" />
              <div className="features">
                {car.features.map((feature, i) => (
                  <Link
                    key={i}
                    to={`/features/${feature.toLowerCase().replace(/\s+/g, "-")}`}
                    className="feature-link"
                  >
                    <span className="best-icon">{getFeatureIcon(feature)}</span>
                    {feature}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSection;
