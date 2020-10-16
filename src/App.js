import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import BannerCart from "./components/Cards/BannerCart";
import FeatureProduct from "./components/featureProduct/FeatureProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <InfoBanner />
      <BannerCart />
      <FeatureProduct />
    </div>
  );
}

export default App;
