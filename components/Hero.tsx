import React from 'react';
import { ArrowRight, Zap, CheckCircle2, Globe2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8 animate-fade-in-down shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Network Operational
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-[1.1] animate-fade-in-up">
            Explore the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cyan-700 to-slate-700">
              Limitless World
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-100">
            Premium global network acceleration. Experience low latency gaming, 4K streaming, and secure browsing with Yoimiya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-fade-in-up delay-200">
            <a 
              href="/register"
              className="w-full sm:w-auto px-8 py-4 bg-brand hover:bg-brand-dark text-white rounded-lg font-semibold transition-all shadow-lg shadow-brand/25 flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 rounded-lg font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
            >
              Dashboard
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-sm text-slate-500 animate-fade-in-up delay-300">
             <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand" /> <span>99.9% Uptime</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand" /> <span>Instant Setup</span>
             </div>
          </div>
        </div>

        {/* Right Content - Connectivity Visual */}
        <div className="flex-1 w-full max-w-lg animate-fade-in-up delay-300">
            <div className="relative bg-white rounded-xl border border-slate-200 shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
                    <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                        <Globe2 size={16} className="text-brand" /> Global Connectivity
                    </span>
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs text-emerald-600 font-bold font-mono">ONLINE</span>
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
                        <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors group cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-light border border-cyan-100 flex items-center justify-center text-xs font-bold text-brand">
                                    {node.region}
                                </div>
                                <div>
                                    <div className="text-sm text-slate-800 font-medium group-hover:text-brand transition-colors">{node.name}</div>
                                    <div className="text-xs text-slate-500">IEPL Optimized</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-mono text-emerald-600 font-medium">{node.ping}</div>
                                <div className="text-xs text-slate-400 flex items-center justify-end gap-1">
                                    <Zap size={10} /> {node.load}% Load
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Speedtest Graphic */}
                <div className="px-5 py-4 bg-slate-50 border-t border-slate-100">
                    <div className="flex justify-between text-xs text-slate-500 mb-2 font-medium">
                        <span>Current Speed</span>
                        <span>850 Mbps</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand to-cyan-500 w-[85%] rounded-full shadow-sm"></div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;