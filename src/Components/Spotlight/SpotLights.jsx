import React from "react";
import './SpotLight.css';
import SpotCards from "./SpotCards";

function SpotLights() {
  return (
    <div className="spotlight">
      <div className="imageWrapper">
        <img src="./src/assets/images/image 1.jpg" alt="Spotlight" className="spotImage" />
      </div>
      <div className="SpotContent">
        <div className="SpotHead">
          <h1>Passion For Better Medicine</h1>
        </div>
        <div className="spotpara">
          <p>
            Lorem ipsum r pellentesque sem amet. Vitae, nec aliquaVitae, nec
            aliquam at ornare pellentesque sed. Vitollicitudin tincidunt fusce
            placerat tortor
          </p>
        </div>
        <div className="SpotCardsMain">
          <SpotCards img={'./src/assets/images/Group 94.jpg'} content='100% Customer Satisfaction'/>
          <SpotCards img={'./src/assets/images/Group 95.jpg'} content='Help and Acess is Our Mission'/>
          <SpotCards  img={'./src/assets/images/Group 96.jpg'} content='100% Quality Laboratory Products' />
        </div>
        <div className="spotEnd">
          <p>Lorem ipsum dolor sit ameonse</p>
          <button>DOWNLOAD BROCHURE</button>
        </div>
      </div>
    </div>
  );
}

export default SpotLights;

// import React from "react";
// import './SpotLight.css'
// import SpotCards from "./SpotCards";

// function SpotLights() {
//   return (
//     <div className="spotlight">
//       <div className="SpotHead">
//         <h1>Passion For Better Medicine</h1>
//       </div>
//       <div className="spotpara">
//         <p>
//           Lorem ipsum r pellentesque sem amet. Vitae, nec aliquaVitae, nec
//           aliquam at ornare pellentesque sed. Vitollicitudin tincidunt fusce
//           placerat tortor
//         </p>
//       </div>
//       <div className="SpotCardsMain">
//         <SpotCards img={'./src/assets/images/Group 94.jpg'} content='100% Customer Satisfaction'/>
//         <SpotCards img={'./src/assets/images/Group 95.jpg'} content='Help and Acess is Our Mission'/>
//         <SpotCards  img={'./src/assets/images/Group 96.jpg'} content='100% Quality Laboratory Products' />
//       </div>
    
//       <div className="spotEnd">
//         <p>Lorem ipsum dolor sit ameonse</p>
//         <button>DOWNLOAD BROUCHER</button>
//       </div>
//     </div>
//   );
// }

// export default SpotLights;
