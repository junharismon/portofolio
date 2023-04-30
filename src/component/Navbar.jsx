import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

export function Navbar() {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Jun Harismon</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
          </ul>
        </div>
        <a href="https://drive.google.com/file/d/1ecY4-ljHT_kk5HcOPoVmLqnMmJv6R8mz/view?usp=sharing" target="blank">
          <button className="button n-button">Download CV</button>
        </a>
      </div>
    </div>
  );
}
