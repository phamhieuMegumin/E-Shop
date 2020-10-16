import React from "react";
import "./FeatureProduct.css";
import ListItems from "./ListItems";
function FeatureProduct() {
  return (
    <div className="feature-products">
      <div>
        <div className="feature-title">
          <div>
            <h4>Best Seller</h4>
            <h1>FEATURED PRODUCTS</h1>
            <p>
              Open sans 14px Lorem ipsum dolor sit amet, consectetur adipisicing
              elit,eiusmod tempor incididunt aliqua.
            </p>
          </div>
        </div>
      </div>

      <ListItems />
    </div>
  );
}

export default FeatureProduct;
