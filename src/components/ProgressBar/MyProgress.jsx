
// import ProgressBar from "./ProgressBar";

// const MyProgress = () => {
//   const handleProgressComplete = () => {
//     console.log("Progress Completed!");
//   };

//   return (
//     <div>
//       <ProgressBar
//         progress={50}
//         direction="horizontal"
//         onProgressComplete={handleProgressComplete}
//       />
//       <ProgressBar
//         progress={75}
//         direction="vertical"
//         onProgressComplete={handleProgressComplete}
//       />
//     </div>
//   );
// };

// export default MyProgress;

import ProgressBar from "./ProgressBar";

function MyProgress() {
  return (
    <div className="App">
      <h3 className="heading">Progress Bar</h3>
      <ProgressBar bgcolor="orange" progress="30" height={30} />
      <ProgressBar bgcolor="red" progress="60" height={30} />
      <ProgressBar bgcolor="#99ff66" progress="50" height={30} />
      <ProgressBar bgcolor="#ff00ff" progress="85" height={30} />
      <ProgressBar bgcolor="#99ccff" progress="95" height={30} />
    </div>
  );
}

export default MyProgress;
