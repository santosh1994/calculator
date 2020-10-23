import React, { useState } from 'react';
import Display from './Display';
import Numbers from './Numbers';
import Operands from './Operands';
import Scientific from './Scientific';
import {round} from '../utils';

import { OP_TO_FUNC_MAP } from '../constants';

export default () => {
  let [operand1, setOperand1 ] = useState('0');
  let [operand2, setOperand2 ] = useState('0');
  let [showOp2, setShowOp2 ] = useState(false);
  let [operator, setOperator ] = useState('');

  const onNumberClick = (num) => {
    if (operator) {
      operand2 === '0' ? setOperand2(num) : setOperand2(operand2 + num);
      setShowOp2(true);
    } else {
      operand1 === '0' ? setOperand1(num) : setOperand1(operand1 + num);
      setShowOp2(false);
    }
  };

  const onOpClick = (op) => {
    operand2 !== '0' && getResult();
    setOperator(op);
  };

  const getResult = () => {
    const res = String(
      round(OP_TO_FUNC_MAP[operator](Number(operand1), Number(operand2)), 2)
    );
    setOperand1(res);
    resetCommont();
  }

  const clearResult = () => {
    setOperand1('0');
    resetCommont();
  }

  const resetCommont = () => {
    setOperator('');
    setShowOp2(false);
    setOperand2('0');
  }

  const singleOperand = (op) => {
    let res = String(round(OP_TO_FUNC_MAP[op](Number(operand1)), 2));
    setOperand1(res);
    resetCommont();
  }

  return (
    <div className="calculator">
      <Display result={showOp2 ? operand2 : operand1}/>
      <Scientific 
        singleOperand={singleOperand}/>
      <div className="calulator-pad">
        <Numbers onNumberClick={onNumberClick} clearResult={clearResult} getResult={getResult}/>
        <Operands onOpClick={onOpClick}/>
      </div>
    </div>
  );
}