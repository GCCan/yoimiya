import React from 'react';
import { ArrowRight, Zap, CheckCircle2, Globe2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Network Badge: High contrast for Light Mode, Glowing for Dark Mode */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-teal-900 dark:bg-brand/10 dark:border-brand/20 dark:text-brand-light text-xs font-semibold mb-8 animate-fade-in-down shadow-sm dark:shadow-[0_0_10px_rgba(44,107,116,0.2)] transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-600 opacity-75 dark:bg-brand-light"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600 dark:bg-brand-light"></span>
            </span>
            Network Operational
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 drop-shadow-sm dark:drop-shadow-md leading-[1.1] animate-fade-in-up transition-colors duration-300">
            Explore the <br />
            {/* Gradient Text adapts: Darker teal for light mode, Neon for dark mode */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-brand to-teal-800 dark:from-teal-300 dark:via-cyan-300 dark:to-white dark:drop-shadow-[0_0_25px_rgba(45,212,191,0.3)]">
              Limitless World
            </span>
          </h1>
          
          <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-100 transition-colors duration-300 font-medium dark:font-normal">
            Premium global network acceleration. Experience low latency gaming, 4K streaming, and secure browsing with Yoimiya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up delay-200">
            <a 
              href="/register"
              className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-white rounded-lg font-bold transition-all shadow-xl shadow-brand/20 dark:shadow-[0_0_20px_rgba(44,107,116,0.4)] flex items-center justify-center gap-2 group border border-transparent dark:hover:border-brand-light/50"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-slate-200 rounded-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2 shadow-sm dark:shadow-none"
            >
              Dashboard
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-sm text-slate-600 dark:text-slate-500 animate-fade-in-up delay-300 transition-colors duration-300 font-medium">
             <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand dark:text-brand-light" /> <span>99.9% Uptime</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand dark:text-brand-light" /> <span>Instant Setup</span>
             </div>
          </div>
        </div>

        {/* Right Content - Connectivity Visual */}
        <div className="flex-1 w-full max-w-lg animate-fade-in-up delay-300">
            <div className="relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl rounded-xl border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-300/50 dark:shadow-none overflow-hidden ring-1 ring-slate-900/5 dark:ring-black/50 transition-colors duration-300">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-slate-900/50">
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                        <Globe2 size={16} className="text-brand dark:text-brand-light" /> Global Connectivity
                    </span>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs text-emerald-700 dark:text-emerald-500 font-bold font-mono">ONLINE</span>
                    </div>
                </div>
                
                {/* Node List */}
                <div className="p-2">
                    {[
                        { name: 'Tokyo Premium 01', ping: '32ms', load: 45, region: 'JP' },
                        { name: 'Hong Kong CN2', ping: '18ms', load: 62, region: 'HK' },
                        { name: 'Los Angeles GIA', ping: '145ms', load: 28, region: 'US' },
                        { name: 'Singapore Direct', ping: '48ms', load: 35, region: 'SG' },
                    ].map((node, i) => (
                        <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors group cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300 group-hover:text-brand dark:group-hover:text-white group-hover:border-brand/30 dark:group-hover:border-brand/50 transition-colors">
                                    {node.region}
                                </div>
                                <div>
                                    <div className="text-sm text-slate-800 dark:text-slate-300 font-bold group-hover:text-brand dark:group-hover:text-brand-light transition-colors">{node.name}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-500 font-medium">IEPL Optimized</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-mono text-emerald-700 dark:text-emerald-400 font-bold">{node.ping}</div>
                                <div className="text-xs text-slate-500 dark:text-slate-600 flex items-center justify-end gap-1 font-medium">
                                    <Zap size={10} /> {node.load}% Load
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Speedtest Graphic */}
                <div className="px-5 py-4 bg-white/50 dark:bg-slate-900/50 border-t border-slate-200/50 dark:border-white/5">
                    <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-2 font-bold">
                        <span>Current Speed</span>
                        <span>850 Mbps</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand to-brand-light w-[85%] rounded-full shadow-[0_0_10px_rgba(44,107,116,0.3)] dark:shadow-[0_0_15px_rgba(94,234,212,0.3)]"></div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;