import { useEffect, useMemo, useState } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { getSession, getProgress, saveProgress } from './lib/storage';
import { watchlist } from './data/watchlist';
import Layout from './components/Layout';
import Auth from './pages/Auth';
import Home from './pages/Home';
import WatchList from './pages/WatchList';
import Analytics from './pages/Analytics';
function Protected({children,username}) { return username ? children : <Navigate to="/login" replace/>; }
export default function App() { const [username,setUsername]=useState(getSession()); const [progress,setProgress]=useState({}); const location=useLocation(); const navigate=useNavigate(); useEffect(()=>{if(username)setProgress(getProgress(username));},[username]); const toggle=(id)=>setProgress(prev=>{const next={...prev,[id]:!prev[id]}; saveProgress(username,next); return next;}); const stats=useMemo(()=>{const must=watchlist.filter(x=>x.category==='must');const done=must.filter(x=>progress[x.id]).length;const remaining=must.filter(x=>!progress[x.id]).reduce((a,x)=>a+x.runtimeMinutes,0)/60;return {done,total:must.length,percent:must.length?Math.round(done/must.length*100):0,remainingHours:remaining};},[progress]); return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:.2}}>{username?<Layout username={username}><Routes><Route path="/" element={<Home username={username} stats={stats} onContinue={()=>navigate('/watch-list')}/>}/><Route path="/watch-list" element={<WatchList items={watchlist} progress={progress} onToggle={toggle}/>}/><Route path="/analytics" element={<Analytics username={username} items={watchlist} progress={progress}/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></Layout>:<Routes><Route path="/login" element={<Auth onLogin={setUsername}/>}/><Route path="*" element={<Navigate to="/login" replace/>}/></Routes>}</motion.div></AnimatePresence>; }
