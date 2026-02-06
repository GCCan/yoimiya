import React from 'react';
import { LogIn, UserPlus, Menu } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo / Icon - Using Brand Teal */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-slate-700 shadow-lg shadow-brand/20 text-white">
             <span className="font-mono font-bold text-xl">Y</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800 font-sans">Yoimiya</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.title} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="/login" 
            className="hidden md:flex items-center gap-2 px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <LogIn size={16} />
            <span>Login</span>
          </a>
          {/* Register Button matches the Login button from the screenshot */}
          <a 
            href="/register" 
            className="hidden md:flex items-center gap-2 px-6 py-2 bg-brand hover:bg-brand-dark text-white rounded-md transition-all text-sm font-bold shadow-md shadow-brand/10"
          >
            <UserPlus size={16} />
            <span>Register</span>
          </a>
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;