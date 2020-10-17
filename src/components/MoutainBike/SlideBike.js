import React from "react";
import Slider from "react-slick";
import { DATA } from "../../constants/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SlideBike() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slide-bike-item">
      <div>
        <Slider {...settings}>
          {DATA.map((item) => {
            const sale = item.isSale;
            if (item.type === "Mountain Bike")
              return (
                <div className="item-slide" key={item.id}>
                  <div className="item-slide-content">
                    <div className="item-name slide-item-name">
                      <a href=" # ">{item.name}</a>{" "}
                    </div>

                    <div className="item-price">
                      <span
                        style={
                          sale && {
                            textDecoration: "line-through",
                            color: "#777",
                            fontSize: 16,
                          }
                        }
                      >{`${item.price}$`}</span>
                      {sale && (
                        <span>
                          {`${item.price - (item.price * item.isSale) / 100}$`}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="item-slide-box">
                    <a href=" # ">
                      <img src={item.photoURL}></img>
                    </a>
                  </div>
                </div>
              );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SlideBike;
