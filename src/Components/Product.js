import React, { useState, useEffect } from "react";
import "../Style/Product.css";
import ProductPage from "./ProductPage";
import hamdaniBlob from "../Assets/blobs/blob-2.svg";
import { motion } from "framer-motion/dist/framer-motion";

const Product = (props) => {
  // Modal logic
  const [isOpenModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <div className="product-container">
      <div className={`product-container-inner ${props.product.name}`}>
        <h1 className="wine-name">{props.product.name}</h1>
        <img
          className="wine-img"
          src={require("../Assets/animals/" + props.product.imgUrl)}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae.
        </p>
      </div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="product-btn"
        onClick={toggleModal}
      >
        READ MORE
      </motion.div>
      {isOpenModal && (
        <ProductPage handler={toggleModal} product={props.product} />
      )}
      {props.product.name === "hamdani" && (
        <img className="hamdani-blob" src={hamdaniBlob} />
      )}
    </div>
  );
};

export default Product;
