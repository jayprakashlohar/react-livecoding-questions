import { useEffect, useState } from "react";

const Timer = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer;
    if (start) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [start]);

  const reset = () => {
    setTime(0);
    setStart(false);
  };

  return (
    <>
      <div>
        <h2>Timer : {time}</h2>
        <button onClick={() => setStart(true)}>START</button>
        <button onClick={reset}>RESET</button>
        <button onClick={() => setStart(false)}>STOP</button>
      </div>
    </>
  );
};

export default Timer;
