import React from "react";
import "../Style/Button.css";
import { motion } from "framer-motion/dist/framer-motion";

const Button = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
