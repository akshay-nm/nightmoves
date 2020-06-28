import React from 'react';

const OverlaySettings = ({ width, height, onWidthChange, onHeightChange }) => {
  return (
    <div className='container'>
      <p className='block uppercase tracking-wide text-gray-800 font-bold mb-2'>Overlay</p>
      <div className='flex flex-wrap mb-2'>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >width</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='in px' value={width} onChange={event => onWidthChange(event.target.value)} />
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >height</label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder='in px' value={height} onChange={event => onHeightChange(event.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default OverlaySettings;