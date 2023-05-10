import React from "react";
import "./footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="sb_footer-links">
        <div className="sb_footer section_padding">
          <div className="sb_footer-links-div">
            <span className="footer-logo">MindConnect</span>
            <span className="footer-span"></span>
          </div>
          <div className="sb_footer-below">
            <p className="sb_footer-rights">
              All rights reserved. &copy;2023 HR MindConnect.
            </p>
            <div>
              <p>
                By creating an account you agree to our Terms and Conditions, Privacy Policies, and Security Settings.
              </p>
            </div>
            <div className="sb_footer-links-div">
              <InstagramIcon />
              <TwitterIcon />
              <YouTubeIcon />
              <p className="sb_footer-email">info@mindconnect.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
