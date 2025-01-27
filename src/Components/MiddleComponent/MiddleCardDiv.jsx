import React from "react";
import './Middle.css'
import MiddleCard from "./MiddleCard";
function MiddleCardDiv() {
  return (
    <div className="MiddleCardDiv ">
      <div className="MiddleCardDivh1">
        <p>Vestibulum ante ipsum primis in faucibus</p>
      </div>
      <div className="MiddleCardDivp">
        <p>
          Not only will this reduce the probability of crime happening on your
          property, it will reduce or eliminate any liability
        </p>
      </div>
      <div>
        <MiddleCard/>
      </div>
      <div className="justEveryThing">
        <div >
          <p className="justEveryThingp">Just everything you need</p>
          <p className="Download2022">Download 2022 Brochure</p>
        </div>
        <div className="arrowbtn">
          <img src="./src/assets/images/vector.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MiddleCardDiv;
