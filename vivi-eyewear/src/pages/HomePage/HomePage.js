import React from "react";
import "./HomePage.scss";
import Hero from "../../components/Hero/Hero.js";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.js";
import Intro from "../../components/Intro/Intro.js";
import LatestProducts from "../../components/LatestProducts/LatestProducts.js";
import FindGlasses from "../../components/FindGlasses/FindGlasses.js";
import StoresLocation from "../../components/StoresLocation/StoresLocation.js";

const HomePage = () => {
  return (
    <div className="d-flex flex-column justify-content-evenly gap-3">
      <Hero></Hero>
      <div className="d-flex flex-column gap-3 my-3 ">
        <Intro></Intro>
        <FeaturedProducts></FeaturedProducts>
        <LatestProducts></LatestProducts>
        <FindGlasses></FindGlasses>
        <StoresLocation></StoresLocation>
      </div>
    </div>
  );
};
export default HomePage;
