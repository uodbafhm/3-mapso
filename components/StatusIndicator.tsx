
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getCurrentStatus, getStatusLabel } from '../utils/status';

const StatusIndicator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(getCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setIsOpen(getCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
      <motion.div 
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]' : 'bg-rose-400'}`} 
      />
      <span className={`text-[10px] font-bold ${isOpen ? 'text-emerald-400' : 'text-rose-400'}`}>
        {getStatusLabel(isOpen)}
      </span>
    </div>
  );
};

export default StatusIndicator;
