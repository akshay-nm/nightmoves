import React from 'react';

const OverlaySettings = ({ width, height, onWidthChange, onHeightChange }) => {
  return (
    <div className='container'>
      <strong>Overlay</strong>
      <div className='form-group row'>
        <div className='col'>
          <label>width</label>
          <input className='form-control' placeholder='in px' value={width} onChange={event => onWidthChange(event.target.value)} />
        </div>
        <div className='col'>
          <label>height</label>
          <input className='form-control' placeholder='in px' value={height} onChange={event => onHeightChange(event.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default OverlaySettings;