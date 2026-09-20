import { useEffect, useState } from 'react';
const target = new Date('2026-12-18T00:00:00');
const getTime = () => { const diff = Math.max(0, target - new Date()); return { days: Math.floor(diff / 86400000), hours: Math.floor(diff / 3600000) % 24, minutes: Math.floor(diff / 60000) % 60, seconds: Math.floor(diff / 1000) % 60 }; };
export function useCountdown() { const [time, setTime] = useState(getTime); useEffect(() => { const id = setInterval(() => setTime(getTime()), 1000); return () => clearInterval(id); }, []); return time; }
