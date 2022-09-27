import React from "react";
import "../Style/ProductPage.css";
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    // borderRadius: 50,ss
    marginBottom: 15,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  };

  const labelStyles = {
    fontSize: "1rem",
    color: "black",
    fontWeight: "normal",
    margin: "5px",
  };

  return (
    <div style={containerStyles} className="progress-container-clip-path">
      <div className="transition-all-browsers" style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
