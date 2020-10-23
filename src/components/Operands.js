import React from 'react';
import CalulatorButton from './CalculatorButton';

import { BINARY_OP } from '../constants';

export default ({onOpClick}) => (
  <div className="op-container">
    {
      BINARY_OP.map((op) => 
        <CalulatorButton key={op} data={op} handleClick={onOpClick}>
          {op}
        </CalulatorButton>
      )
    }
  </div>
)
