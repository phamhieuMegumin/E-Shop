import React, { useState } from "react";
import "./Items.css";
function Items(props) {
  const { listItem } = props;
  // const newList = listItem;
  const [isHover, setIsHover] = useState(false);
  const handleMouseOver = () => {
    setIsHover(true);
  };
  const handleMouseOut = () => {
    setIsHover(false);
  };
  return (
    <>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="item-container"
      >
        <div className="card-content">
          <div className="item">
            <div className="feature-item-img-box">
              <img
                src={isHover ? listItem.photoURL : listItem.photoURL_Hover}
              ></img>
            </div>
            <span>{listItem.type}</span>
            <div className="line"></div>
            <div className="item-name">
              <a href=" # ">{listItem.name}</a>
            </div>
            <div className="star-group">
              <span>
                <img src="img/star.png" alt="star-img"></img>
              </span>
              <span>
                <img src="img/star.png" alt="star-img"></img>
              </span>
              <span>
                <img src="img/star.png" alt="star-img"></img>
              </span>
              <span>
                <img src="img/star.png" alt="star-img"></img>
              </span>
              <span>
                <img src="img/star.png" alt="star-img"></img>
              </span>
            </div>
            <div className="button-items-group">
              <div>
                <div className="heart-icon">
                  <i className="far fa-heart"></i>
                </div>
                <a href=" # ">
                  Select Options<i className="fas fa-check"></i>
                </a>
                <div className="heart-icon">
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
