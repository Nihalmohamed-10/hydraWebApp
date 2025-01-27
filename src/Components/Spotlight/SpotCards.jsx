import React from "react";
import './SpotLight.css'
function SpotCards({img, content}) {
  return (
    <div className="SpotCards">
      <div>
        <img src={img} alt="img" />
      </div>
      <div className="spotcardPara">
        <p>
          {content}
        </p>
      </div>
    </div>
  );
}

export default SpotCards;
