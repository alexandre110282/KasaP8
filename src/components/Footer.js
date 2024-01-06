import React from 'react';
import '../styles/Footer.css'
import footerlogo from '../assets/Footer-Logo.png'

function Footer() {
  return (
    <footer>
      
        <img src={footerlogo} alt="footerlogo" className="footer-logo" />

    </footer>
  );
}

export default Footer;