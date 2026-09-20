import { motion } from 'framer-motion';
import { useCountdown } from '../hooks/useCountdown';
export default function Countdown({ compact = false }) { const time = useCountdown(); return <div className={compact ? 'countdown compact' : 'countdown'}>{Object.entries(time).map(([label,value]) => <div className="count-unit" key={label}><motion.strong key={value} initial={{ opacity: .35, y: -8 }} animate={{ opacity: 1, y: 0 }}>{String(value).padStart(2,'0')}</motion.strong><span>{label}</span></div>)}</div>; }
