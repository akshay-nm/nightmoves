import React from 'react';

const CameraSettings = ({isVisible, size, x, y, onIsVisibleChange, onSizeChange, onXChange, onYChange}) => {
  return (
    <div className='container'>
      <p className='block uppercase tracking-wide text-gray-800 font-bold mb-2'>Camera</p>
      <button 
        className={isVisible? 
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 mb-2 border border-blue-700 rounded" :
          "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mb-2 border border-blue-500 hover:border-transparent rounded"}
        onClick={() => onIsVisibleChange(!isVisible)} >
        {isVisible? 'Camera is visible': 'Camera is disabled'}
      </button>
      {isVisible? (
        <div className='flex flex-wrap mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >size</label>
            <input type="range" className="rounded-lg overflow-hidden appearance-none bg-blue-200 h-3 w-128" value={size} min='0' max='100' step='1' onChange={event => onSizeChange(event.target.value)} />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >x</label>
            <input type="range" className="rounded-lg overflow-hidden appearance-none bg-blue-200 h-3 w-128" value={x} min='0' max='100' step='1' onChange={event => onXChange(event.target.value)} />
          </div>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >y</label>
            <input type="range" className="rounded-lg overflow-hidden appearance-none bg-blue-200 h-3 w-128" value={y} min='0' max='100' step='1' onChange={event => onYChange(event.target.value)} />
          </div>
        </div>
      ):''}
      
    </div>
  );
};

export default CameraSettings;