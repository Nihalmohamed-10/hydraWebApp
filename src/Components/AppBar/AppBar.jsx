import React, { useState } from "react";
import "./AppBar.css";

function AppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="appbar">
      <div className="appbarLogo">
        <img src="/images/Group 2 (1) 1.png" alt="img" />
      </div>

      <div className={`appbarList ${isMenuOpen ? "show" : ""}`}>
        <div><a href="">Home</a></div>
        <div><a href="">About Us</a></div>
        <div><a href="">Products</a></div>
        <div><a href="">Service</a></div>
        <div><a href="">Partners</a></div>
        <div><a href="">Blog</a></div>
        <div><a href="">Contacts</a></div>
      </div>

      <div className="appBarContacts">
        <div className="appbarIcon">
          <img src="./src/assets/images/Group 85.png" alt="" />
        </div>
        <div className="Contact">
          <div>+971 61245741</div>
          <div>support@hydrauae.com</div>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default AppBar;


// import React from "react";
// import "./AppBar.css";
// function AppBar() {
//   return (
//     <div className="appbar">
//       <div className="appbarLogo">
//         <img src="./src/assets/images/Group 2 (1) 1.png" alt="img" />
//       </div>
//       <div className="appbarList">
//         <div><a href="">Home</a></div>
//         <div><a href="">About Us</a></div>
//         <div><a href="">products</a></div>
//         <div><a href="">Service</a></div>
//         <div><a href="">Partners</a></div>
//         <div><a href="">Blog</a></div>
//         <div><a href="">Contacts</a></div>
//       </div>
//       <div className="appBarContacts">
//         <div className="appbarIcon">
//             <img src="./src/assets/images/Group 85.png" alt="" />
//         </div>
//         <div className="Contact">
//           <div>+971 61245741</div>
//           <div>support@hydrauae.com</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AppBar;
