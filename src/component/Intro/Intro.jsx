import React, { useContext } from 'react';
import './Intro.css';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import jun from '../../img/Jun.png';
import glassesimoji from '../../img/glassesimoji.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloatinDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: 'spring' };

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>Hi! I Am</span>
          <span>Jun Harismon</span>
          <span>Fullstack Javascript</span>
        </div>
        <Link to="works" smooth={true} spy={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/junharismon" target="blank">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/jun-harismon-5b8282184/" target="blank">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/junharismon_/" target="blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={jun} alt="" />
        <motion.img initial={{ left: '-36%' }} whileInView={{ left: '-24%' }} transition={transition} src={glassesimoji} alt="" />

        <motion.div initial={{ top: '36%', left: '74%' }} whileInView={{ left: '58%' }} transition={transition} className="floating-div">
          <FloatinDiv img={crown} text1="Frontend" text2="Developer" />
        </motion.div>

        <motion.div initial={{ left: '15rem', top: '27rem' }} whileInView={{ left: '8rem' }} transition={transition} className="floating-div">
          <FloatinDiv img={thumbup} text1="Backend" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
