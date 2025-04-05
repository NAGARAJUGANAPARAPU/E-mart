import React from "react";
import Ac from "../components/Ac";
import Books from "../components/Books";
import Computers from "../components/Computers";
import Fridge from "../components/Fridge";
import Furniture from "../components/Furniture";
import Kitchen from "../components/Kitchen";
import MensWear from "../components/MensWear";
import WomenWear from "../components/WomenWear";
import Tv from "../components/Tv";
import Watch from "../components/Watch";
import Mobiles from "../components/Mobiles";
import Speakers from "../components/Speakers";
import Footer from "../components/Footer";

function Products() {
  return (
    <div>
      <Computers />
      <Books />
      <Mobiles />
      <Ac />
      <Fridge />
      <Speakers />
      <Furniture />
      <Kitchen />
      <MensWear />
      <WomenWear />
      <Tv />
      <Watch />
      <Footer />
    </div>
  );
}

export default Products;
