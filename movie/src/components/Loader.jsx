import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="wrapper">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      {/* <span>No content yet ... </span> */}
    </div>
  );
};

export default Loader;
