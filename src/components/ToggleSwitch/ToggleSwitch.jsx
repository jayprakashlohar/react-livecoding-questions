import { useState } from "react";
import PropTypes from "prop-types";

const ToggleSwitch = ({ initialState, label, callback }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    callback(newState);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "30%",
          margin: "auto",
          marginTop: "5px",
        }}
      >
        <label>{label}</label>
        <div
          style={{
            width: "60px",
            height: "30px",
            borderRadius: "15px",
            backgroundColor: isOn ? "#4caf50" : "#ccc",
            cursor: "pointer",
            marginLeft: "20px",
          }}
          onClick={handleToggle}
        >
          <div
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              backgroundColor: "#ffff",
              transform: isOn ? "translateX(30px)" : "translateX(0)",
              transition: "transform 0.3s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

ToggleSwitch.propTypes = {
  initialState: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ToggleSwitch;
