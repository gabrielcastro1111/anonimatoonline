import React from 'react';
import { Clock } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { formatTime } from '../utils/time';

export function CountdownTimer() {
  const timeLeft = useCountdown();
  const time = formatTime(timeLeft.hours, timeLeft.minutes, timeLeft.seconds);
  
  // Split time string into numbers and separators
  const [hours, minutes, seconds] = time.split(':');

  return (
    <div className="flex items-center justify-center space-x-2 text-2xl font-bold bg-[#0A0A0A] px-6 py-3 rounded-lg border border-[#333333]">
      <Clock className="w-6 h-6 text-[#FF0000]" />
      <div className="flex items-center text-[#FF0000] drop-shadow-[0_0_10px_rgba(255,0,0,0.3)]">
        <span>{hours}</span>
        <span className="mx-1">:</span>
        <span>{minutes}</span>
        <span className="mx-1">:</span>
        <span>{seconds}</span>
      </div>
    </div>
  );
}