import React from "react";
import "../Style/OurStory.css";
import Button from "../Components/Button";
import ourStoryHeading from "../Assets/page-heading/our-story.svg";
import ourStoryImg from "../Assets/assets-01.svg";

const OurStory = () => {
  return (
    <section className="slide our-story-container">
      <div className="text-box">
        <img
          className="our-story-heading"
          src={ourStoryHeading}
          alt="our story heading"
        />
        <div className="text-box-inner">
          <p>
            Rebel Winery was established in 2016 in Hebron, Israel. <br />
            It all started from a huge love for grapes and nature, and over time
            became an ideology. We believe in change in winery industry by
            making it in old traditional ways and putting real grape tastes
            first.
          </p>
          <span>
            Rebel Winery grows grapes in biodynamic organic agriculture and
            produces natural wines. Our collection of 5 natural wine, all made
            of Israeli local grapes, will blow your mind away.
          </span>
          <Button>READ MORE</Button>
        </div>
      </div>
      <div className="imgs-box">
        <img src={ourStoryImg} alt="our story image" />
      </div>
    </section>
  );
};

export default OurStory;
