import React from "react";
import "./Footer.css";
import footerImg from "../../assets/images/footerImg.jpg"
function Footer() {
  return (
    <div className="footer">
      <div className="footBadgeDiv">
        <div className="footbadge">
          <img
            src={footerImg}
            alt=""
          />
        </div>
        <h3 className="footH3">Vestibulum ante ipsum primis in faucibus</h3>
        <h1 className="footH1 ">Vestibulum ante ipsum primis in faucibus</h1>
        <p className="footP">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vis
          id tellus non leo porta ultricies efficitur non nunc. Suspendisse
          venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae
          faucibus lacus ante vel diam. Sed lectus purus, lobortis eu aDonec
          velit neque, auctor sit amet aliquam vis id tellus non leo porta
          ultricies efficitlique
        </p>
      </div>
      <div className="footMapDiv">
        <h1>12+</h1>
        <p>Years Of Industry Experience</p>
        <h1>756+</h1>
        <p>Happy And Satisfied Customers</p>
      </div>
    </div>
  );
}

export default Footer;
