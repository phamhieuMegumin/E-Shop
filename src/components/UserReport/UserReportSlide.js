import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const imgSrc = require("img/banner1.jpg");
function UserReportSlide() {
  const [slideSize, setSlideSize] = useState(2);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideSize,
    slidesToScroll: slideSize,
  };
  const setWidth = () => {
    if (window.innerWidth < 1080) {
      setSlideSize(1);
    } else setSlideSize(2);
  };
  window.addEventListener("resize", setWidth);

  return (
    <div>
      <Slider {...settings}>
        <div className="user-slider-container">
          <div className="user-slide-wrap">
            <div className="user-slider-img-box">
              <img src="img/user1.jpg"></img>
            </div>
            <div className="user-slider-content-box">
              <div className="user-slider-content">
                <h3>Anissa Rose</h3>
                <h4>Ui/Ux Designer</h4>
                <p>
                  “Create premium quality images to showcase your poster frame
                  presentations, website headers, Etsy, Instagram, Facebook or
                  Behance projects by just dragging.”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-slider-container">
          <div className="user-slide-wrap">
            <div className="user-slider-img-box">
              <img src="img/user2.jpg"></img>
            </div>
            <div className="user-slider-content-box">
              <div className="user-slider-content">
                <h3>Maria Mia</h3>
                <h4>Front-End Developer</h4>
                <p>
                  “Create premium quality images to showcase your poster frame
                  presentations, website headers, Etsy, Instagram, Facebook or
                  Behance projects by just dragging.”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="user-slider-container">
          <div className="user-slide-wrap">
            <div className="user-slider-img-box">
              <img src="img/user3.jpg"></img>
            </div>
            <div className="user-slider-content-box">
              <div className="user-slider-content">
                <h3>Roberto Nickson</h3>
                <h4>Back-End Developer</h4>
                <p>
                  “Create premium quality images to showcase your poster frame
                  presentations, website headers, Etsy, Instagram, Facebook or
                  Behance projects by just dragging.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default UserReportSlide;
