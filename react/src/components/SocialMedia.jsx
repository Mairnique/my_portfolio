import React from 'react';
// import { BsInstagram } from 'react-icons/bs';
import { FaSpotify, FaFile, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://open.spotify.com/" rel="noreferrer" target="_blank">
        <FaSpotify /></a>
    </div>
    <div>
      <a href="https://drive.google.com/file/d/12bpkr5zCXj5FdFSLGaCv-JN8Udub7c4y/view?usp=sharing" rel="noreferrer" target="_blank">
        <FaFile /></a>
    </div>
    <div>
      <a href="https://linkedin.com/in/maribellechu/" rel="noreferrer" target="_blank">
        < FaLinkedinIn /></a>
    </div>
  </div>
);

export default SocialMedia;
