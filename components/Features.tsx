import React from 'react';
import * as Icons from 'lucide-react';
import { FEATURES } from '../constants';
import { FeatureItem } from '../types';

const FeatureCard: React.FC<FeatureItem> = ({ title, description, icon }) => {
  const IconComponent = (Icons as any)[icon] || Icons.Star;
  
  return (
    <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 group">
      <div className="w-12 h-12 bg-brand-light text-brand rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-300">
        <IconComponent size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Built for Scale</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
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