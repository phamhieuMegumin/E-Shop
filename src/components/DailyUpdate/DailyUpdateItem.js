import React from "react";

function DailyUpdateItem() {
  return (
    <div className="update-item">
      <div className="update-item-container">
        <div className="update-item-box-img">
          <a href=" # ">
            <img src="img/update.jpg"></img>
          </a>
        </div>

        <div className="date-update">
          <span>20 APR 2017</span>
        </div>
      </div>
      <div className="update-item-content">
        <a href=" # ">New bike set-up instruction</a>
        <p>
          Parturient in potenti id rutrum duis torquent parturient sceler isque
          sit vestibulum a posuere scelerisque viverra urna. Egestas tristique
          sceler...
        </p>
        <a href=" # ">Read More</a>
      </div>
    </div>
  );
}

export default DailyUpdateItem;
