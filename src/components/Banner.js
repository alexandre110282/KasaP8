import React from 'react';
import banner from '../assets/IMG.png';
import '../styles/Banner.css'

function Banner(){
    return(
        <img src={banner} alt="banner" className="banner" />
    );
}

export default Banner