
import React from "react";
import FiltersShop from "../components/FIltersShop";
import ShopServices from "../components/Services";
import HeroBanner from "../components/HeroBanner";
import Home from "../components/salam";


const ShopThemplate = () => {

  return (
    <div>
      <HeroBanner/>
      <FiltersShop/>
      <ShopServices/>
    </div>
  );
};

export default ShopThemplate;
