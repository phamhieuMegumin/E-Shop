import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="logo">Ridestyle</div>
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>Shop</li>
          <li>Vendors</li>
          <li>Blog</li>
          <li>contact us</li>
          <li>about</li>
        </ul>
      </nav>
      <div className="group-function">
        <ul>
          <li>
            <i className="fas fa-search"></i>
          </li>
          <li>
            <i className="far fa-user"></i>
          </li>
          <li>
            <i className="fas fa-shopping-cart"></i>
            <span>1</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
