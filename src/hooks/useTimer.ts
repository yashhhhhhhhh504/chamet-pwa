import { useState, useEffect } from 'react';

const useTimer = (initialSeconds = 30, onTimerEnd = () => {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timerInterval);
        onTimerEnd();
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, [seconds, onTimerEnd]);

  const resetTimer = () => {
    setSeconds(initialSeconds);
  };

  return {
    seconds,
    resetTimer,
  };
};

export { useTimer };
