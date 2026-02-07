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
      <h2 className="text-xl text-gray-400 font-light mb-2">{getGreeting()}, User</h2>
      <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter drop-shadow-2xl font-mono">
        {formatTime(time)}
      </h1>
      <p className="text-lg text-gray-400 mt-2 font-medium tracking-wide uppercase">
        {formatDate(time)}
      </p>
    </div>
  );
};

export default Clock;