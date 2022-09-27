import React, { useState, useEffect } from "react";

import ReactDOM from "react-dom";
import "../Style/ProductPage.css";
import ProgressBar from "./ProgressBar";

const ProductPage = (props) => {
  const [completed, setCompleted] = useState([
    { bgcolor: "#EF67AA", completed: "0" },
    { bgcolor: "#F62A20", completed: "0" },
    { bgcolor: "#F2F91C", completed: "0" },
    { bgcolor: "#7ECB9E", completed: "0" },
  ]);
  useEffect(() => {
    setCompleted([
      { bgcolor: "#EF67AA", completed: props.product.bars.sweet },
      { bgcolor: "#F62A20", completed: props.product.bars.beater },
      { bgcolor: "#F2F91C", completed: props.product.bars.sour },
      { bgcolor: "#7ECB9E", completed: props.product.bars.salty },
    ]);
  }, []);
  const flavours = ["Sweet", "Beater", "Sour", "Salty"];

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className="modal">
          <div className="product-page-container">
            <div className="mockup-container">
              <img
                className="mockup"
                src={require("../Assets/mockups/" + props.product.mockupUrl)}
              ></img>
            </div>
            <div className="info">
              <img
                className="wine-heading"
                src={require("../Assets/wine-heading/" +
                  props.product.headingUrl)}
              ></img>
              <p>{props.product.description}</p>
              {completed.map((item, idx) => (
                <>
                  <span className="flavours">{flavours[idx]}</span>
                  <ProgressBar
                    key={idx}
                    bgcolor={item.bgcolor}
                    completed={item.completed}
                  />
                </>
              ))}
            </div>
          </div>
          <p className="exit-btn" onClick={props.handler}>
            GO BACK
          </p>
        </div>,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};
export default ProductPage;
