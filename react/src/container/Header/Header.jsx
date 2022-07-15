import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex ">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info "
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello! My name is </p>
            <h1 className="head-text">Maribelle</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">“And, when you want something, all the universe conspires in helping you to achieve it.” </p>
          <p>― Paulo Coelho, <i>The Alchemist</i></p>
  
        </div>
        
        <div className="tag-cmp app__flex">
          <p className="p-text">Support me by buying my piano compositions <a href="https://music.maribellechu.com" target="_blank" rel="noreferrer">here</a></p>
  
        </div>

        {/* <div className="bottom-arrow">
          <span>↙</span><br></br>
          <span>↤</span><br></br>
          <span>↖</span><br></br>
        </div> */}

      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img "
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.tth, images.tjhsst, images.dove].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
