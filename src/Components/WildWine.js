import React from "react";
import "../Style/WildWine.css";
import wildWine from "../Assets/page-heading/wild-wine-heading.svg";
import wildWineImg from "../Assets/wiled-wine-img.svg";

// ICONS
import natural from "../Assets/icons/natural.png";
import HandPicked from "../Assets/icons/hand-picked.png";
import LowSulfites from "../Assets/icons/low-sulfites.png";
import NaturalYeast from "../Assets/icons/natural-yeast.png";
import Unfiltered from "../Assets/icons/unfiltered.png";

const Hero = () => {
  return (
    <div className="wild-wine-container">
      <div className="wild-wine-container__inner">
        <img
          className="wile-wine-heading"
          src={wildWine}
          alt="wile wine heading"
        />
        <h2>
          Natural / Wild wine is a type of wine made in small batches from
          <br />
          sustainably farmed grapes with minimal intervention in the cellar.
          <br />
          Natural wine is made with native yeasts as well as being bottled
          unfined and
          <br />
          unfiltered. No or minimal sulfites are added.
          <br />
          <span>And yes, it is your new favorite type of wine!</span>
        </h2>

        <div className="icons-box">
          <div className="icon-box">
            <img src={natural} />
            <p>Natural</p>
          </div>
          <div className="icon-box">
            <img src={HandPicked} />
            <p>Hand Picked</p>
          </div>
          <div className="icon-box">
            <img src={LowSulfites} />
            <p>Low Sulfites</p>
          </div>
          <div className="icon-box">
            <img src={NaturalYeast} />
            <p>Natural Yeast</p>
          </div>
          <div className="icon-box">
            <img src={Unfiltered} />
            <p>Unfiltered</p>
          </div>
        </div>
      </div>

      <img
        className="wild-wine-img show-only-on-desktop"
        src={wildWineImg}
        alt="wild Wine Img"
      />
    </div>
  );
};

export default Hero;
