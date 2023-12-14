// src/components/Calculator.js
import React, { useState } from 'react';
//import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleCalculate = () => {
    try {
      // Use the Function constructor to safely evaluate the expression
      const calculate = new Function('return ' + expression);
      setResult(calculate().toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleBackspace = () => {
    setExpression((prevExpression) =>
      prevExpression.substring(0, prevExpression.length - 1)
    );
  };

  return (
    <div className="calculator">
      <input type="text" value={expression} readOnly />
      <br />
      <button onClick={() => handleButtonClick('1')}>1</button>
      <button onClick={() => handleButtonClick('2')}>2</button>
      <button onClick={() => handleButtonClick('3')}>3</button>
      <button onClick={() => handleButtonClick('+')}>+</button>
      <br />
      <button onClick={() => handleButtonClick('4')}>4</button>
      <button onClick={() => handleButtonClick('5')}>5</button>
      <button onClick={() => handleButtonClick('6')}>6</button>
      <button onClick={() => handleButtonClick('-')}>-</button>
      <br />
      <button onClick={() => handleButtonClick('7')}>7</button>
      <button onClick={() => handleButtonClick('8')}>8</button>
      <button onClick={() => handleButtonClick('9')}>9</button>
      <button onClick={() => handleButtonClick('*')}>*</button>
      <br />
      <button onClick={() => handleButtonClick('0')}>0</button>
      <button onClick={() => handleButtonClick('.')}>.</button>
      <button onClick={handleCalculate} className="double">
        =
      </button>
      <button onClick={() => handleButtonClick('/')}>/</button>
      <br />
      <button onClick={handleClear} className="double">
        Clear
      </button>
      <button onClick={handleBackspace} className="operator">
        ←
      </button>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default Calculator;
