import React from "react";
// import { Link } from "react-router-dom";
// import { FaGasPump, FaCogs, FaCarSide } from "react-icons/fa";
import CarSection from "../carSection/carSection"

const cars = [
  {
    image:
      "https://cdn.pixabay.com/photo/2018/05/20/23/36/mercedes-3417100_640.jpg",
    title: "Mercedes Benz 2016",
    variant: "C class | Black",
    price: "$94,000",
    features: ["Petrol", "Manual", "Coupe"],
  },
  {
    image: "https://cdn.pixabay.com/photo/2022/06/07/16/22/drift-7248723_640.jpg",
    title: "Toyota Camrey 2021",
    variant: "Dark Gray Variant",
    price: "$22,000",
    features: ["Hybrid", "Manual", "Coupe"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJtdyUyMGNhcnN8ZW58MHx8MHx8fDA%3D",
    title: "BMW M4 Blue 2016",
    variant: "Coupe 2016",
    price: "$72,000",
    features: ["Petrol", "Manual", "Coupe"],
  },
];

const BestSellingCar = () => {
  return(
  <CarSection
      title="Best Selling Car"
      viewAllLink="/all-cars"
      cars={cars}
   />
  )
};

export default BestSellingCar;
