import { useEffect, useState } from "react";

/**
 * @function useTimer
 * @param {Number} duration Duration of the timer in second.
 * @param {Function} onEnd Function called at the end of the timer.
 */
export default function useTimer(duration = 0, onEnd = Function.prototype) {
  const [timer, setTimer] = useState(duration);

  useEffect(() => {
    const end = Date.now() + duration * 1e3;
    const interval = setInterval(() => {
      const remaining = Math.ceil((end - Date.now()) / 1e3);
      if (remaining > 0) {
        setTimer(remaining);
      } else {
        setTimer(0);
        onEnd();
        clearInterval(interval);
      }
    }, 1e3);
    return () => {
      clearInterval(interval);
    };
  }, [duration, onEnd]);

  return timer;
}
