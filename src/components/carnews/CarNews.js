// src/components/CarNews.js

import React from 'react';
import './carnews.css';

const CarNews = () => {
  return (
    <section className="car-news">
      <div className="news-content">
        <h2>CAR NEWS</h2>
        <p>
          More than 5000 car owners are selling and effectively renting on Topcar.
          Register to become our partner today to increase your monthly income.
        </p>
        <div className="news-buttons">
          <button className="btn register-btn">Register</button>
          <button className="btn post-btn">Post news</button>
        </div>
      </div>
    </section>
  );
};

export default CarNews;
