import React from "react";
import "./NewProduct.css";
import { NEW_PRODUCT } from "../../constants/data";

import Items from "../featureProduct/Items";
function NewProduct() {
  return (
    <div className="new-product feature-title">
      <div className="new-product-title">
        <h4>Ride In Style</h4>
        <h1>NEW PRODUCTS</h1>
      </div>
      <div className="new-product-container">
        <div className="new-product-list">
          {NEW_PRODUCT.map((item) => {
            return <Items listItem={item} key={item.id} />;
          })}
        </div>

        <div className="new-product-banner">
          <img src="img/banner.jpg"></img>
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
