export function formatTime(hours: number, minutes: number, seconds: number): string {
  const pad = (num: number): string => num.toString().padStart(2, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}