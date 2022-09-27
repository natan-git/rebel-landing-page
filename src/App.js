import "./App.css";
import React, { Fragment } from "react";
import items from "./data.json";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import OurStory from "./Components/OurStory";
import WildWine from "./Components/WildWine";
import OurWines from "./Components/OurWines";
import Cta from "./Components/Cta";
import Contact from "./Components/Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="outer-wrapper">
        <div className="wrapper">
          <Hero />
          <OurStory />
          <WildWine />
          <OurWines items={items} />
          <Cta />
          <Contact />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
