import React from "react";
import "./Section3.css";
import LabEquipments from "./LabEquipments";
// import Equipments from "./Equipments";

function Section3() {
  return (
    <div className="section3 wrapper ">
      <p className="section3p">Vestibulum ante ipsum primis in faucibus</p>
      <p className="section3h1">Vestibulum ante ipsum primis in faucibus</p>

      <div className="Lab wrapper">
        <LabEquipments />
        {/* <LabEquipments content={"Laboratory Equipments"} />
        <LabEquipments content={"Laboratory Instruments"} />
        <LabEquipments content={"Laboratory Analysis"} />
        <LabEquipments content={"Laboratory Glassware"} />
        <LabEquipments content={"Laboratory plasticware"} />
        <LabEquipments content={"water treatment Equipments"} />
        <LabEquipments content={"Laboratory Equipments"} /> */}
      </div>
      {/* <Equipments /> */}
      <div className="discover">
        <p>Discover our complete product list</p>

        <button>VIEW ALL PRODUCTS</button>
      </div>
    </div>
  );
}

export default Section3;

// import React from "react";
// import "./Section3.css";
// import LabEquipments from "./LabEquipments";
// import Equipments from "./Equipments";

// function Section3() {
//   return (
//     <div className="section3 wrapper ">
//       <p className="section3p">Vestibulum ante ipsum primis in faucibus</p>
//       <p className="section3h1">Vestibulum ante ipsum primis in faucibus</p>
//       <div className="Lab wrapper">
//         <LabEquipments content={"Laboratory Equipments"} />
//         <LabEquipments content={"Laboratory Instruments"} />
//         <LabEquipments content={"Laboratory Analysis"} />
//         <LabEquipments content={"Laboratory Glassware"} />
//         <LabEquipments content={"Laboratory plasticware"} />
//         <LabEquipments content={"water treatment Equipments"} />
//         <LabEquipments content={"Laboratory Equipments"} />
//       </div>
//       <Equipments />
//       <div className="discover">
//         <p>Discover our complete product list</p>

//         <button>VIEW ALL PRODUCTS</button>
//       </div>
//     </div>
//   );
// }

// export default Section3;
