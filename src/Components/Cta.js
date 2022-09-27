import React, { useState } from "react";
import "../Style/Cta.css";
import CtaIcon from "../Assets/assets-03.svg";
import { motion } from "framer-motion/dist/framer-motion";
import QuizApp from "./QuizApp";
const OurWines = (props) => {
  // Modal logic
  const [isOpenModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <section className="cta-container">
      <div className="cta-inner">
        <img className="cta-icon" src={CtaIcon} />
        <h2 className="cta-heading">WHICH WINE ARE YOU?</h2>
        <p className="cta-sub">Let's find your perfect match</p>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="btn"
          onClick={toggleModal}
        >
          TELL ME
        </motion.div>
      </div>
      {isOpenModal && <QuizApp handler={toggleModal} />}
    </section>
  );
};

export default OurWines;
