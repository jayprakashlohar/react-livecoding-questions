import { useState } from "react";

const ChangeColor = () => {
  const [color, setColor] = useState("white");
  const [inputColor, setInputColor] = useState("");

  const btn = ["red", "black", "green", "blue", "yellow"];

  const handleColorChange = () => {
    setColor(inputColor);
    setInputColor("");
  };

  return (
    <>
      <div>
        <div
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid black",
            backgroundColor: `${color}`,
          }}
        >
          Welcome
        </div>
        <input
          type="text"
          placeholder="Type color name..."
          value={inputColor}
          onChange={(e) => setInputColor(e.target.value)}
        />
        <button onClick={handleColorChange}>Set Color</button>
        {btn.map((ele) => (
          <button onClick={() => setColor(ele)} key={ele}>
            {ele}
          </button>
        ))}
      </div>
    </>
  );
};

export default ChangeColor;
