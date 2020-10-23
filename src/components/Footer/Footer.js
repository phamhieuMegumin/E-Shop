import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <div className="footer-info-box">
            <a href=" # ">RIDESTYLE</a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="info-list">
              <li>
                <i className="fas fa-phone-alt"></i>1-688-123-44567
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>690 South Meadow Dr.
                Meadville, PA 16335
              </li>
              <li>
                <i className="far fa-envelope"></i>Support@domain.com
              </li>
            </ul>
          </div>
          <div className="about-us">
            <h3>ABOUT US</h3>
            <ul className="about-list">
              <li>
                <a href=" # ">About Us</a>
              </li>
              <li>
                <a href=" # ">Contact Us</a>
              </li>
              <li>
                <a href=" # ">Blog</a>
              </li>
              <li>
                <a href=" # ">Order History</a>
              </li>
              <li>
                <a href=" # ">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="customer-service">
            <h3>Customer Service</h3>
            <ul className="about-list">
              <li>
                <a href=" # ">Shipping Policy</a>
              </li>
              <li>
                <a href=" # ">Compensation First</a>
              </li>
              <li>
                <a href=" # ">Delivery Information</a>
              </li>
              <li>
                <a href=" # ">F.A.Q.'s</a>
              </li>
              <li>
                <a href=" # ">Careers</a>
              </li>
            </ul>
          </div>
          <div className="new-sletter">
            <h3>New Sletter</h3>
            <div className="footer-email-box">
              <input type="email" placeholder="Enter Your Email"></input>
              <button type="submit">Subscribe</button>
            </div>
            <div className="footer-email-content">
              <p>
                Sign up get 20% sale off for first time, Get all the latest
                deals and special offers, first.
              </p>
              <div className="footer-follow-group">
                <h3>Follow Us</h3>
                <ul>
                  <li>
                    <a href=" # ">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" # ">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" # ">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href=" # ">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
