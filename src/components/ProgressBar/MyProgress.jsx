
import ProgressBar from "./ProgressBar";

const MyProgress = () => {
  const handleProgressComplete = () => {
    console.log("Progress Completed!");
  };

  return (
    <div>
      <ProgressBar
        progress={50}
        direction="horizontal"
        onProgressComplete={handleProgressComplete}
      />
      <ProgressBar
        progress={75}
        direction="vertical"
        onProgressComplete={handleProgressComplete}
      />
    </div>
  );
};

export default MyProgress;

