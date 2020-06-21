import React from 'react';

const CameraSettings = ({isVisible, size, x, y, onIsVisibleChange, onSizeChange, onXChange, onYChange}) => {
  return (
    <div className='container'>
      <strong>Camera</strong>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" checked={isVisible} onChange={event => onIsVisibleChange(event.target.checked)} id="isCameraVisibleSwitch"/>
        <label className="custom-control-label" htmlFor="isCameraVisibleSwitch">Camera Visible</label>
      </div>
      {isVisible? (
        <div className='form-group row'>
          <div className='col'>
            <label>size</label>
            <input type="range" className="form-control-range" value={size} min='0' max='100' step='1' onChange={event => onSizeChange(event.target.value)} />
          </div>
          <div className='col'>
            <label>x</label>
            <input type="range" className="form-control-range" value={x} min='0' max='100' step='1' onChange={event => onXChange(event.target.value)} />
          </div>
          <div className='col'>
            <label>y</label>
            <input type="range" className="form-control-range" value={y} min='0' max='100' step='1' onChange={event => onYChange(event.target.value)} />
          </div>
        </div>
      ):''}
      
    </div>
  );
};

export default CameraSettings;