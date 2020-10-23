import React, { useState } from 'react';
import CalulatorButton from './CalculatorButton';

export default ({singleOperand}) => {
  let [scientific, setScientific ] = useState(false);
  let toggleScientific = () => setScientific(!scientific);
  return (
    <div className="calulator-pad">
      {
        scientific && (
          <div className="grid-container">
            <CalulatorButton data="square" handleClick={singleOperand}>X<sup>2</sup></CalulatorButton>
            <CalulatorButton data="root" handleClick={singleOperand}>√</CalulatorButton>
            <CalulatorButton data="negate" handleClick={singleOperand}>+/-</CalulatorButton>
          </div>
        )
      }
      <div className="op-container switch-scientific">
        <div className="key-button" onClick={toggleScientific}>
          {scientific ? 'Basic' : 'Sceintific'}
        </div>
      </div>
    </div>
  )
}
