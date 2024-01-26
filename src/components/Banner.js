import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Banner.scss';

function Banner(props) {
  return (
    <div className="banner-container">
      <img src={props.image} alt="banner" className="bannerImg" />
      <div className='bannerText'>
        {props.showText && <p >Chez vous, partout et ailleurs</p>}
      </div>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  showText: PropTypes.bool, // Ajoutez la prop showText comme un booléen facultatif
};

export default Banner;