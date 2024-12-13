import { useState, useEffect } from 'react';

export function useCountdown(initialHours = 24) {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        const totalSeconds = current.hours * 3600 + current.minutes * 60 + current.seconds - 1;
        
        if (totalSeconds < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}