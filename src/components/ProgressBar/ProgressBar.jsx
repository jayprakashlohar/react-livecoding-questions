// import { useEffect, useState } from "react";
// import propTypes from "prop-types"

// const ProgressBar = ({ progress, direction, onProgressComplete }) => {
//   const [currentProgress, setCurrentProgress] = useState(0);

//   useEffect(() => {
//     setCurrentProgress(progress);
//     if (progress === 100) {
//       onProgressComplete();
//     }
//   }, [progress, onProgressComplete]);

//   const getProgressBarStyles = () => {
//     if (direction === "vertical") {
//       return {
//         height: "100%",
//         width: "10px",
//         backgroundColor: "#ddd",
//         borderRadius: "5px",
//       };
//     } else {
//       return {
//         width: "100%",
//         height: "10px",
//         backgroundColor: "#ddd",
//         borderRadius: "5px",
//       };
//     }
//   };

//   const getProgressFillStyles = () => {
//     if (direction === "vertical") {
//       return {
//         height: `${currentProgress}%`,
//         backgroundColor: "#4caf50",
//         borderRadius: "5px",
//       };
//     } else {
//       return {
//         width: `${currentProgress}%`,
//         backgroundColor: "#4caf50",
//         borderRadius: "5px",
//       };
//     }
//   };

//   return (
//     <div style={getProgressBarStyles()}>
//       <div style={getProgressFillStyles()}></div>
//     </div>
//   );
// };

// ProgressBar.propTypes = {
//   progress: propTypes.number,
//   direction: propTypes.string,
//   onProgressComplete:propTypes.func
// };
// export default ProgressBar;

import propTypes from "prop-types"
const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    marginTop:"20px"
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  height: propTypes.number,
  progress: propTypes.string,
  bgcolor: propTypes.string,
};

export default ProgressBar;
