import React from 'react';
import banner from '../assets/IMG.png';
import '../styles/Banner.css';

function Banner() {
  return (
    <div className="banner-container">
      <img src={banner} alt="banner" className="bannerImg" />
      <div className='bannerTextContainer'>
        <p className='bannerText'>Chez vous, partout et ailleurs</p>
      </div>
    </div>
  );
}

export default Banner;