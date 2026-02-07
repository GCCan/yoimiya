import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center select-none">
      <h2 className="text-xl text-slate-500 dark:text-slate-400 font-light mb-2 transition-colors">{getGreeting()}, User</h2>
      <h1 className="text-7xl md:text-9xl font-bold text-slate-900 dark:text-white tracking-tighter drop-shadow-sm dark:drop-shadow-2xl font-mono transition-colors">
        {formatTime(time)}
      </h1>
      <p className="text-lg text-slate-500 dark:text-slate-400 mt-2 font-medium tracking-wide uppercase transition-colors">
        {formatDate(time)}
      </p>
    </div>
  );
};

export default Clock;