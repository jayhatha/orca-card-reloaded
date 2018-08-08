import React from 'react';

const Footer = props => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <a className="footer-link" href="#">FAQ</a>
        <a className="footer-link" href="#">Help</a>
        <a className="footer-link" href="#">Contact</a>
        <a className="footer-link" href="http://www.soundtransit.org/Trip-Planner">Trip Planner</a>
      </div>
      <div class="languages">
        <a className="lang" href="http://www.soundtransit.org/sites/default/files/orca_chinese.pdf" lang="zh">中文</a>
        <a className="lang" href="http://www.soundtransit.org/sites/default/files/orca_korean.pdf" lang="ko">한국</a>
        <a className="lang" href="http://www.soundtransit.org/sites/default/files/orca_russian.pdf" lang="ru">Русский</a>
        <a className="lang" href="http://www.soundtransit.org/sites/default/files/orca_spanish.pdf" lang="es">Español</a>
        <a className="lang" href="http://www.soundtransit.org/sites/default/files/orca_tagalog.pdf" lang="tl">Tagalog</a>
        <a className="lang" href="http://www.soundtransit.org/sites/default/files/orca_vietnamese.pdf" lang="vi">Tiếng việt</a><br/>
      </div>
      <div className="footer-bottom">
        <div>
          <a className="" href="#">Terms of Use</a>
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