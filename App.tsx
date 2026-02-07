import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import GeminiWidget from './components/GeminiWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-slate-900 selection:bg-brand-light selection:text-brand-dark">
      {/* Background Ambience - Subtle sky/tarmac tones */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-50/50 rounded-full blur-[100px]" />
      </div>

      <Header />
      
      <main className="relative z-10">
        <Hero />
        <Features />
      </main>

      {/* Persistent Widgets */}
      <GeminiWidget />
      
      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-slate-200 bg-white/50 backdrop-blur-sm text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Xboard. Open Source Project by <a href="https://github.com/cedar2025" className="text-brand hover:underline font-medium">cedar2025</a>.
        </p>
      </footer>
    </div>
  );
};

export default App;