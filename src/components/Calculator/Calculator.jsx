import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
    const [value1, setValue1] = useState("");
      const [value2, setValue2] = useState("");

  return (
    <>
      <div>
        <h2>Custom Calculator</h2>
        <h4>{result}</h4>
        <input
          type="number"
          placeholder="Enter value1"
          value={value1}
          onChange={(e) => setValue1(+e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter value2"
          value={value2}
          onChange={(e) => setValue2(+e.target.value)}
        />
      </div>
      <div className="calBtn">
        <button onClick={() => setResult(value1 + value2)}>+</button>
        <button onClick={() => setResult(value1 - value2)}>-</button>
        <button onClick={() => setResult(value1 * value2)}>*</button>
        <button onClick={() => setResult(value1 / value2)}>/</button>
      </div>
    </>
  );
};

export default Calculator;
