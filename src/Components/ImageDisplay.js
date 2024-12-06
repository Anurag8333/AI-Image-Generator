import React from 'react';
import { Download } from './Download';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <div className="m-5 flex flex-col justify-items-center items-center">
      {imageUrl ? (
       <div className='flex flex-col items-center'> <img src={imageUrl} alt="Generated" className="h-full w-full rounded" />
        <Download imageUrl={imageUrl}/></div>
      ) : (
        <p>No image generated yet.</p>
      )}
    </div>
  );
};

export default ImageDisplay;
