import React from "react";
import './Middle.css'
import MiddleCardDiv from "./MiddleCardDiv";
function Middle() {
  return (
    <div className="middle">
      <div className="MiddleHead">
        <div className="Vestibulum">
          <p className="Middlep">Vestibulum ante ipsum primis in faucibus</p>
          <h1 className="Middleh1">Vestibulum ante    ipsum primis in faucibus</h1>
        </div>
        <div className="Middlepara">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praei
            lectus eros, varius. Eu, tristique augue mam porttitor pellentesque
            sem amet. Vitae, nec aliquaVitae, nec aliquam at ornare pellentesque
            sed. Vitollicitudin tincidunt fusce placerat tortor, in nulla ut ac
            velit enim orci ac. Pellentesque urna malesuam at ornare
            pellentesque sed. Vitollicitudin tincidunt fuc velit enim orci ac.
            Pellentesque urna malesuada risus.
          </p>
        </div>
      </div>
      <MiddleCardDiv/>
    </div>
  );
}

export default Middle;
