import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner.css";
function Banner() {
  const [imgList, setImgList] = useState([
    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.jpg",
  ]);
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        {imgList.map((img, index) => {
          return (
            <div key={index} className="img-box">
              <img src={img} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Banner;
