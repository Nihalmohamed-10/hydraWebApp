import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Equipments from "./Equipments";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LabEquipments() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabData = [
    { label: "Laboratory Equipments", content: <Equipments /> },
    { label: "Laboratory Instruments", content: <Equipments /> },
    { label: "Food & Beverage Analysis", content: <Equipments /> },
    { label: "Laboratory Glassware", content: <Equipments /> },
    { label: "Laboratory Plasticware", content:<Equipments /> },
    { label: "Water Treatment Equipment", content: <Equipments /> },
    { label: "Microbiological Consumables", content: <Equipments /> },
  ];

  return (
    <Box className="tab" sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {tabData.map((tab, index) => (
            <Tab key={index} className="tabs" label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabData.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}


// import React from 'react'

// function LabEquipments({content}) {
//   return (
//     <div className='labequipments'>
//         <p>
//             {content}
//         </p>
//     </div>
//   )
// }

// export default LabEquipments