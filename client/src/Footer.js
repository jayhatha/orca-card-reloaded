import React from 'react';

const Footer = props => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <a className="footer-link" href="#">FAQ</a>
        <a className="footer-link" href="#">Help</a>
        <a className="footer-link" href="#">Contact</a>
        <a className="footer-link" href="#">Trip Planner</a>
      </div>
      <div className="footer-bottom">
        <div>
          <a className="" href="#">Terms of Use</a>&nbsp;&nbsp;&nbsp;
          <a className="" href="#">Privacy Policy</a>
        </div>
        <div className="rights-reserved">
          <p>2018 GA | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;