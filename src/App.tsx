import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import GeminiWidget from './components/GeminiWidget';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check local storage or system preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen w-full relative overflow-x-hidden transition-colors duration-500 ease-in-out ${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} selection:bg-brand selection:text-white`}>
      
      {/* Background Ambience - Adapts to Theme */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden transition-opacity duration-700">
        {isDark ? (
           /* Dark Mode Aurora */
           <>
            <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,hsla(253,16%,7%,1)_0,transparent_50%),radial-gradient(at_50%_0%,hsla(225,39%,15%,1)_0,transparent_50%),radial-gradient(at_100%_0%,hsla(339,49%,15%,1)_0,transparent_50%)]" />
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px] mix-blend-screen" />
           </>
        ) : (
           /* Light Mode Subtle Gradients */
           <>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px]" />
           </>
        )}
      </div>

      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero />
        <Features />
      </main>

      {/* AI Widget */}
      <GeminiWidget />
      
      <footer className="relative z-10 py-10 border-t border-slate-200 dark:border-white/5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-center transition-colors duration-300">
        <p className="text-slate-500 dark:text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Xboard. Open Source Project by <a href="https://github.com/cedar2025" className="text-brand hover:underline font-medium">cedar2025</a>.
        </p>
      </footer>
    </div>
  );
};

export default App;