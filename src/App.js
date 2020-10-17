import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import InfoBanner from "./components/InfoBanner/InfoBanner";
import BannerCart from "./components/Cards/BannerCart";
import FeatureProduct from "./components/featureProduct/FeatureProduct";
import MoutainBike from "./components/MoutainBike/MoutainBike";
import NewProduct from "./components/NewProduct/NewProduct";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <InfoBanner />
      <BannerCart />
      <FeatureProduct />
      <MoutainBike />
      <NewProduct />
    </div>
  );
}

export default App;
