import React from "react";
import "../Style/Hero.css";
import heroHeading from "../Assets/page-heading/hero-heading.svg";
import btnIcon from "../Assets/hero-btn-icon.svg";
import btnIconMobile from "../Assets/arrow-down.svg";
import { motion } from "framer-motion/dist/framer-motion";

const Hero = () => {
  return (
    <div className="slide hero-container">
      <div className="hero-continer-inner">
        <motion.img
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-heading"
          src={heroHeading}
          alt="hero heading"
        />
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hero-btn"
        >
          <p>rock & scroll</p>
          <img className="show-only-on-desktop" src={btnIcon} alt="btn icon" />
          <img
            className="show-only-on-mobile mobile-arrow"
            src={btnIconMobile}
            alt="btn icon"
          />
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
