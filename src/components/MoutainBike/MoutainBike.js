import React from "react";
import "./MoutainBike.css";
import SlideBike from "./SlideBike";

function MoutainBike() {
  return (
    <div className="moutain-bike-cotainer">
      <div className="item-img-box moutain-box">
        <img src="img/bg4.jpg" alt="bicycleImg"></img>
        <div className="card-title">
          <h4>Product of trending</h4>
          <h1>
            MOUTAIN BIKE
            <br />
            SALE 50%
          </h1>
          <div className="button-card">
            <a href=" # ">
              <span>Browse Shop</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="slide-bike-container">
        <SlideBike />
      </div>
    </div>
  );
}

export default MoutainBike;
