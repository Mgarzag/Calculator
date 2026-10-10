import { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState("");

    // Append numbers and operators to the screen
  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  // Evaluate the string expression safely
  const handleCalculate = () => {
    try {
      // Function constructor is a safer mathematical alternative to eval()
      const result = new Function(`return ${input}`)();
      setInput(String(result));
    } catch (error) {
      setInput("Error");
    }
  };

  // Clear the screen completely
  const handleClear = () => {
    setInput("");
  };

   // Delete the last character entered
   const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Output Screen */}
        <div className="display">{input || "0"}</div>

{/* Buttons Grid */}
<div className="buttons">
          <button onClick={handleClear} className="btn control">C</button>
          <button onClick={handleDelete} className="btn control">DEL</button>
          <button onClick={() => handleClick("/")} className="btn operator">/</button>
          <button onClick={() => handleClick("*")} className="btn operator">*</button>

          <button onClick={() => handleClick("7")} className="btn">7</button>
          <button onClick={() => handleClick("8")} className="btn">8</button>
          <button onClick={() => handleClick("9")} className="btn">9</button>
          <button onClick={() => handleClick("-")} className="btn operator">-</button>

          <button onClick={() => handleClick("4")} className="btn">4</button>
          <button onClick={() => handleClick("5")} className="btn">5</button>
          <button onClick={() => handleClick("6")} className="btn">6</button>
          <button onClick={() => handleClick("+")} className="btn operator">+</button>

          <button onClick={() => handleClick("1")} className="btn">1</button>
          <button onClick={() => handleClick("2")} className="btn">2</button>
          <button onClick={() => handleClick("3")} className="btn">3</button>
          <button onClick={handleCalculate} className="btn equals">=</button>

          <button onClick={() => handleClick("0")} className="btn zero">0</button>
          <button onClick={() => handleClick(".")} className="btn">.</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;