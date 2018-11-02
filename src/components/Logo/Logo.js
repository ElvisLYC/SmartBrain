import React from 'react';
import Tilt from 'react-tilt'
import smart from './smart.png'

const Logo = () => {
  return(
    <div className = 'ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner">
          <img style= {{paddingTop: '10px'}} alt='logo' src={smart}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo; //exposing Navigation.js to other module
