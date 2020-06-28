import React from 'react';

const CameraSettings = ({isVisible, size, x, y, onIsVisibleChange, onSizeChange, onXChange, onYChange}) => {
  return (
    <div className='container'>
      <strong>Camera</strong>
      <button 
        className={isVisible? "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded": "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"}
        onClick={onIsVisibleChange(!isVisible)} >
        {isVisible? 'Camera is visible': 'Camera is disabled'}
      </button>
      {isVisible? (
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label>size</label>
            <input type="range" className="py-3 px-4" value={size} min='0' max='100' step='1' onChange={event => onSizeChange(event.target.value)} />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label>x</label>
            <input type="range" className="py-3 px-4" value={x} min='0' max='100' step='1' onChange={event => onXChange(event.target.value)} />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label>y</label>
            <input type="range" className="py-3 px-4" value={y} min='0' max='100' step='1' onChange={event => onYChange(event.target.value)} />
          </div>
        </div>
      ):''}
      
    </div>
  );
};

export default CameraSettings;