import React from "react";
import { Link } from "react-router-dom";
import { FaGasPump, FaCogs, FaCarSide } from "react-icons/fa";
import CarSection from "../carSection/carSection";
import "./nearByCar.css";

const cars = [
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Mercedes Benz 2016",
    variant: "C class | Black",
    price: "$94,000",
    features: ["Petrol", "Manual", "Coupe"],
  },
  {
    image: "https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_640.jpg",
    title: "Toyota Camrey 2021",
    variant: "Dark Gray Variant",
    price: "$22,000",
    features: ["Hybrid", "Manual", "Coupe"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym13JTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "BMW M4 Blue 2016",
    variant: "Coupe 2016",
    price: "$72,000",
    features: ["Petrol", "Manual", "Coupe"],
  },
];

const NearbyCars = () => {
  return (
      <CarSection
      title="NearBy Car"
      viewAllLink="/all-cars"
      cars={cars}
   />
    // <div className="nearby-container">
    //   <div className="section-header">
    //     <h2>Nearby Car</h2>
    //     <Link to="/all-cars">View All ➜</Link>
    //   </div>
    //   <div className="car-list">
    //     {cars.map((car, index) => (
    //       <div className="car-card" key={index}>
    //         <img src={car.image} alt={car.title} />
    //         <div className="car-info">
    //           <h4>{car.title}</h4>
    //           <div className="variant-price">
    //             <p className="variant">{car.variant}</p>
    //             <span className="price">{car.price}</span>
    //           </div>
    //           <hr className="separator" />

    //           <div className="features">
    //             {car.features.map((feature, i) => {
    //               let icon;

    //               switch (feature.toLowerCase()) {
    //                 case "petrol":
    //                   icon = <FaGasPump />;
    //                   break;
    //                 case "manual":
    //                   icon = <FaCogs />;
    //                   break;
    //                 case "coupe":
    //                   icon = <FaCarSide />;
    //                   break;
    //                 default:
    //                   icon = <FaCarSide />;
    //               }

    //               return (
    //                 <Link
    //                   key={i}
    //                   to={`/features/${feature
    //                     .toLowerCase()
    //                     .replace(/\s+/g, "-")}`}
    //                   className="feature-link">
    //                   <span className="nearby-icon">{icon}</span>
    //                   {feature}
    //                 </Link>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default NearbyCars;
