import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Gitub from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>Junharismon99@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/junharismon_/" target="blank">
            <Insta color="white" size={'3rem'} />
          </a>
          <a href="https://www.linkedin.com/in/jun-harismon-5b8282184/" target="blank">
            <Linkedin color="white" size={'3rem'} />
          </a>
          <a href="https://github.com/junharismon" target="blank">
            <Gitub color="white" size={'3rem'} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
