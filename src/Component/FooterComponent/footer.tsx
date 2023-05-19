import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="container">
       <div className="mind-connect">
        <span className="mindconnect-title">MindConnect</span> 
        <p className="line"></p>
      </div>
      <div className="footer">
        <div className="all-rights">
          <p className="text">All rights reserved. &copy 2023 HR MindConnect</p>
        </div>
        <div className="all-rights">
          <p className="text">By creating an account you agree to our <span className="sub">Terms and conditions. Privacy Policies </span> and <span className="sub">Security Settings</span></p>
        </div>
        <div className="icons">
          <div className="icon-real">
            <InstagramIcon className="social-media" />
            <TwitterIcon className="social-media" />
            <YouTubeIcon className="social-media" />
          </div>
        <p className="text">info@mindconnect.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

  