import React from "react";
import instaLogo from "../images/instaLogo.png";
import fbLogo from "../images/fbLogo.svg";
const SocialMediaLinks: React.FC = () => {
  return (
    <div className="position-fixed social_media_button text-center justify-content-center align-items-center d-lg-flex d-none">
      <ul className="list-unstyled">
        <li>
          <img className="img-fluid" src={instaLogo} alt="" />
        </li>
        <li className="mt-3">
          <img className="img-fluid" src={fbLogo} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
