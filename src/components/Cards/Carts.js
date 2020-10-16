import React from "react";
import "./Cards.css";
function Carts() {
  return (
    <div className="items-bicycle">
      <div className="item-img-box">
        <img src="img/item1.jpg" alt="bicycleImg"></img>
        <div className="card-title">
          <h4>New Bikes</h4>
          <h1>
            ROAD BIKE
            <br />
            NEW
            <br />
            STYLE
          </h1>
          <div className="button-card">
            <a href=" # ">
              <span>Browse Shop</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="item-img-box">
        <img src="img/item2.jpg" alt="bicycleImg"></img>
        <div className="card-title">
          <h4>New Bikes</h4>
          <h1>
            ROAD BIKE
            <br />
            NEW
            <br />
            STYLE
          </h1>
          <div className="button-card">
            <a href=" # ">
              <span>Browse Shop</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="item-img-box">
        <img src="img/item3.jpg" alt="bicycleImg"></img>
        <div className="card-title">
          <h4>New Bikes</h4>
          <h1>
            ROAD BIKE
            <br />
            NEW
            <br />
            STYLE
          </h1>
          <div className="button-card">
            <a href=" # ">
              <span>Browse Shop</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
