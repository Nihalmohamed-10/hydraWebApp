import React from "react";
import Equipment from "./Equipment.json";
import "./Section3.css";
function Equipments() {
  return (
    <div className="Equipment">
      {Equipment.map((item, index) => (
        <div key={index} className="equipmentDIV">
          <div className="equipImg">
            <img src={item.img} alt="img" />
          </div>
          <div className="equipP">
            <p>{item.content}</p>
          </div>
          <div className="equipbtn">
            <button>{item.btnContent}</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Equipments;
