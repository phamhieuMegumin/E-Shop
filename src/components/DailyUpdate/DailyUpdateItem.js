import React from "react";

function DailyUpdateItem(props) {
  const { data } = props;
  return (
    <div className="update-item">
      <div className="update-item-container">
        <div className="update-item-box-img">
          <a href=" # ">
            <img src={data.imgURL}></img>
          </a>
        </div>

        <div className="date-update">
          <span>{data.date}</span>
        </div>
      </div>
      <div className="update-item-content">
        <a href=" # ">{data.title}</a>
        <p>{data.content}</p>
        <a href=" # ">Read More</a>
      </div>
    </div>
  );
}

export default DailyUpdateItem;
