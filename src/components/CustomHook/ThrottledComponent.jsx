import { useState } from "react";
import useThrottle from "./useThrottle";

const ThrottledComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const throttleValue = useThrottle(inputValue, 500);

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <div>
        <h2>Throttled Input</h2>
        <h3>Throtted : {throttleValue}</h3>
        <input
          type="text"
          value={inputValue}
          placeholder="Type..."
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default ThrottledComponent;


