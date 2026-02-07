import React from 'react';
import { LogIn, UserPlus, Menu, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 shadow-sm dark:shadow-black/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo / Icon */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-brand-dark shadow-lg shadow-brand/20 dark:shadow-[0_0_15px_rgba(44,107,116,0.4)] text-white border border-transparent dark:border-white/10">
             <span className="font-mono font-bold text-xl">Y</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-sans transition-colors">Yoimiya</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.title} 
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-brand dark:text-slate-300 dark:hover:text-brand-light transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/10 rounded-full transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="https://ss.yoimiya.org/#/login" 
            className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-semibold text-slate-700 hover:text-brand dark:text-slate-300 dark:hover:text-white transition-colors"
          >
            <LogIn size={16} />
            <span>Login</span>
          </a>
          <a 
            href="https://ss.yoimiya.org/#/register" 
            className="hidden md:flex items-center gap-2 px-6 py-2 bg-brand hover:bg-brand-dark dark:hover:bg-brand-light text-white rounded-lg transition-all text-sm font-bold shadow-lg shadow-brand/20 dark:shadow-[0_0_20px_rgba(44,107,116,0.3)] border border-transparent hover:border-brand-light/50"
          >
            <UserPlus size={16} />
            <span>Register</span>
          </a>
          <button className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;