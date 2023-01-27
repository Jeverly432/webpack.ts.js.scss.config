import React from "react";
import "../styles/background.scss";

const Background = () => {
  return (
    <>
      <div className="border-left-right-linecenter"></div>
      <div className="border-linehorizont"></div>
      <div className="divider"></div>
      <div className="circle"></div>
      <div className="container-history">
        <div className="history-vector">

        </div>
        <div className="history-date">
            Исторические <br/> даты
        </div>
      </div>
    </>
  );
};

export default Background;
