import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleInc = () => {
        setCount(count+1)
    }
       const handleDec = () => {
         setCount(count - 1);
       };
  return (
    <>
      <div className="counterDiv">
        <h1>Count: {count}</h1>
        <button onClick={handleInc}>INC</button>
        <button disabled={count < 1} onClick={handleDec}>DEC</button>
      </div>
    </>
  );
};

export default Counter;
