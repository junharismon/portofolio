import React, { useContext } from 'react';
import './Works.css';
import Amazon from '../../img/amazon.png';
import Nodejs from '../../img/nodejs.png';
import Reactpng from '../../img/reactjs.png';
import Reduxpng from '../../img/reduxjs.jpeg';
import Mongologo from '../../img/mongologo.jpeg';
import JSlogo from '../../img/jslogo.png';
import Vuelogo from '../../img/vuelogo.png';
import Sequelizelogo from '../../img/sequelizelogo.png';
import Postgrelogo from '../../img/postgrelogo.png';
import Jquerylogo from '../../img/jquerylogo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
const Works = () => {
  // context

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span>Works for All these</span>
          <span>Brands & Clients</span>
          <spane>
            I am an enthusiastic, responsible, and hard-working Full-stack developer.
            <br />
            I have a high desire to learn in web and mobile application development.
            <br />
            I can work well in a team environment and on my own initiative.
            <br />
            I have the ability to use Node.js and Express for Back-End,
            <br />
            also in React and Vue for Front-End.
          </spane>
          <a href="https://drive.google.com/file/d/1ecY4-ljHT_kk5HcOPoVmLqnMmJv6R8mz/view?usp=sharing" target="blank">
            <button className="button s-button">Download CV </button>
          </a>
          <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div initial={{ rotate: 45 }} whileInView={{ rotate: 0 }} viewport={{ margin: '-40px' }} transition={{ duration: 3.5, type: 'spring' }} className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Reduxpng} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Reactpng} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={JSlogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Vuelogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Nodejs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Sequelizelogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Postgrelogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Mongologo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Jquerylogo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
