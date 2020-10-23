import React from 'react';
import CalulatorButton from './CalculatorButton';

import { NUMBERS } from '../constants';

export default ({onNumberClick, clearResult, getResult}) => (
  <div className="grid-container">
    {
      NUMBERS.map((num) =>
        <CalulatorButton key={num} data={num} handleClick={onNumberClick}>{num}</CalulatorButton>
      )
    }
    <CalulatorButton data="clear" handleClick={clearResult}>clear</CalulatorButton>
    <CalulatorButton data="0" handleClick={onNumberClick}>0</CalulatorButton>
    <CalulatorButton data="=" handleClick={getResult}>=</CalulatorButton>
  </div>
);
