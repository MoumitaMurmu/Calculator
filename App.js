import React, { useState } from 'react';

import './App.css';

function App() {
  
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleNum1Change = (event) => {
      setNum1(event.target.value);
    };

    const handleNum2Change = (event) => {
      setNum2(event.target.value);
    };

    const validateInputs = () => {
      
      if (!num1) {
        setError('Error : Num1 cannot be empty');
        return false;
      }
      else if (!num2) {
        setError('Error : Num2 cannot be empty');
        return false;
      }
      else if (!num1 || !num2) {
        setError('Both input fields are required');
        return false;
      }
  
      if (isNaN(num1) || isNaN(num2)) {
        setError('Inputs should be numbers');
        return false;
      }
  
      setError(null);
      return true;
    };

    const handleAddition = () => {
      if (!validateInputs()) return;
      setResult(parseFloat(num1) + parseFloat(num2));
    };
  
    const handleSubtraction = () => {
      if (!validateInputs()) return;
      setResult(parseFloat(num1) - parseFloat(num2));
    };
  
    const handleMultiplication = () => {
      if (!validateInputs()) return;
      setResult(parseFloat(num1) * parseFloat(num2));
    };

    const handleDivision = () => {
      if (!validateInputs()) return;
      if (parseFloat(num2) === 0) {
        setError('Cannot divide by 0');
        return;
      }
      setResult(parseFloat(num1) / parseFloat(num2));
    };
  
  return (
   <div className="App">
   <h1>React Calculator</h1>
    <div>
      <input className="input-section1" type="text" placeholder="Num1" value={num1} onChange={handleNum1Change} /><br/>
      <input className="input-section2" type="text" placeholder="Num2" value={num2} onChange={handleNum2Change} />
    </div>
    <div className="btn">
      <button id="btn1" className="button" onClick={handleAddition}>+</button>
      <button id="btn2" className="button" onClick={handleSubtraction}>-</button>
      <button id="btn3" className="button" onClick={handleMultiplication}>*</button>
      <button id="btn4" className="button" onClick={handleDivision}>/</button>
    </div>
    {error && <div style={{ color: 'red' }}>{error}</div>}
      {result && (
        <div style={{ color: 'green' }}>
          <p style={{color:'white'}}>Result = {result}</p> <br/>
          Success: Your result is shown above!
        </div>
      )}
   </div>
  );
}

export default App;
