import React from "react";
import Fooddetailpage from "./Fooddetailpage";
import Footer from "../../Components/Footer";
import { pizzainfo, sandwichinfo } from "../../Constraints/Index";

const Food = () => {
  return (
    <div>
      <Fooddetailpage pizzainfo={pizzainfo} sandwichinfo={sandwichinfo} />
    </div>
  );
};

export default Food;
