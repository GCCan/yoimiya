import React, { useState, useEffect } from 'react';
import { Cpu, Database, Activity, Wifi } from 'lucide-react';

const StatusWidget: React.FC = () => {
  const [cpu, setCpu] = useState(12);
  const [ram, setRam] = useState(45);
  const [net, setNet] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpu(prev => Math.min(100, Math.max(5, prev + (Math.random() * 10 - 5))));
      setRam(prev => Math.min(100, Math.max(20, prev + (Math.random() * 5 - 2.5))));
      setNet(prev => Math.max(1, Math.floor(prev + (Math.random() * 10 - 5))));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 hidden xl:block w-64 z-30">
        <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-xl p-4 shadow-xl shadow-slate-200/50 dark:shadow-black/30 transition-colors duration-300">
            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Activity size={14} className="text-emerald-500" /> System Status
            </h4>
            
            <div className="space-y-5">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand/10 dark:bg-brand/15 rounded-lg text-brand dark:text-brand-light">
                        <Cpu size={18} />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-slate-600 dark:text-slate-400 font-medium">CPU Load</span>
                            <span className="font-mono text-brand dark:text-brand-light font-bold">{cpu.toFixed(0)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-brand transition-all duration-500" style={{ width: `${cpu}%` }}></div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 dark:bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
                        <Database size={18} />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-slate-600 dark:text-slate-400 font-medium">Memory</span>
                            <span className="font-mono text-purple-600 dark:text-purple-400 font-bold">{ram.toFixed(0)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 dark:bg-purple-400 transition-all duration-500" style={{ width: `${ram}%` }}></div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                        <Wifi size={18} />
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-slate-600 dark:text-slate-400 font-medium">Ping</span>
                            <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">{net}ms</span>
                        </div>
                        <div className="flex gap-0.5 mt-1">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className={`h-1.5 flex-1 rounded-sm ${i <= 4 ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StatusWidget;