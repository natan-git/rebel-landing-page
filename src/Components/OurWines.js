import React from "react";
import "../Style/OurWines.css";
import Product from "./Product";
import OurWinesHeading from "../Assets/page-heading/our-wine-heading.svg";
import OurWinesHeadingMobile from "../Assets/wine-heading/our-wines-mobile.svg";
const OurWines = (props) => {
  return (
    <section className="our-wines-container">
      <img className="our-wine-heading" src={OurWinesHeading} />
      <img className="our-wine-heading-mobile" src={OurWinesHeadingMobile} />
      <div className="items-list-container">
        {props.items.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default OurWines;
