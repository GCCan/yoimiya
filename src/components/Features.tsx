import React from 'react';
import * as Icons from 'lucide-react';
import { FEATURES } from '../constants';
import type { FeatureItem } from '../types';

const FeatureCard: React.FC<FeatureItem> = ({ title, description, icon }) => {
  const IconComponent = (Icons as any)[icon] || Icons.Star;
  
  return (
    <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/30 backdrop-blur-md border border-slate-200 dark:border-white/5 hover:border-brand/40 dark:hover:border-brand/40 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 group hover:shadow-xl hover:shadow-brand/10 dark:hover:shadow-[0_0_30px_rgba(44,107,116,0.1)]">
      <div className="w-12 h-12 bg-brand/10 dark:bg-slate-900/80 border border-brand/20 dark:border-white/10 text-brand dark:text-brand-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white dark:group-hover:border-brand/30 dark:group-hover:text-white transition-all duration-300 shadow-sm dark:shadow-lg">
        <IconComponent size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">{title}</h3>
      <p className="text-slate-700 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors font-medium dark:font-normal">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">Built for Scale</h2>
          <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto text-lg transition-colors font-medium dark:font-normal">
            Everything you need to manage your infrastructure efficiently, securely, and reliably.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <FeatureCard 
              key={idx} 
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;