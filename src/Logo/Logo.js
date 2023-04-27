import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brains.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="tilt br2 shadow-2 pa3" style={{ height: '150px', width: '150px' }}>
        <div>
          <img style={{paddingTop: '5px'}} src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
