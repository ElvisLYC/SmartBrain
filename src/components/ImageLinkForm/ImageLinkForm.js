import React from 'react';

const ImageLinkForm = () => {
  return(
    <div className = 'ma4 mt0'>
      <p className='f3'>
        {'This SmartBrain will detect faces in your pictures. Come on and give it a try!'}
      </p>
      <div className='center'>
        <input className='f4 pa2 w-70 center' type='tex' />
        <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
      </div>
    </div>
  );
}

export default ImageLinkForm; //exposing Navigation.js to other module