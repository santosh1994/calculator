import React from 'react';

export default ({result, nextOp}) => (
  <div className={`display-container ${nextOp ? 'next-op' : ''}`}>
    {result}
  </div>
);
