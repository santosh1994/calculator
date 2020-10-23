import React from 'react';

export default ({handleClick, data, children}) => (
  <div 
    className="key-button" 
    onClick={() => {handleClick(data)}}>
      {children}
  </div>
);
