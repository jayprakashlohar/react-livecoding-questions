import { useEffect,useState  } from "react";

const useThrottle = (value,delay ) => {
  const [throttleValue, setThrottleValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setThrottleValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return throttleValue;
};

export default useThrottle;

