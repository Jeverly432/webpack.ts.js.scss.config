import React, { useState } from "react";
import Background from "./components/Background";
import SlideOne from "./components/SlideOne";
import SlideSecond from "./components/SlideSecond";
import "./styles/style.scss";

const App = () => {
  const [state, setState]: any = useState(1);


  return (
    <div className="app-wrapper">
      <Background />
      <SlideOne />
      <div className="slideone-container-taps">
        <div className="slideone-container-taps-numbers">
          <p className="slideone-container-taps-numbers-p1">06</p>
          <p className="slideone-container-taps-numbers-p2">/</p>
          <p className="slideone-container-taps-numbers-p3">0{state}</p>
          <div className="slideone-container-taps-numbers-container">
            <div onClick={()=>setState(state>1 ? state-1:state-0)} className="slideone-container-taps-numbers-min">{"<"}</div>
            <div onClick={()=>setState(state<6 ? state+1:state+0)} className="slideone-container-taps-numbers-max">{">"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
