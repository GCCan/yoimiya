import React, { useState } from 'react';
import { Search, Globe, Chrome, Shield } from 'lucide-react';
import { SEARCH_ENGINES } from '../constants';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [engineIndex, setEngineIndex] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    window.location.href = `${SEARCH_ENGINES[engineIndex].url}${encodeURIComponent(query)}`;
  };

  const toggleEngine = () => {
    setEngineIndex((prev) => (prev + 1) % SEARCH_ENGINES.length);
  };

  const CurrentIcon = () => {
    switch (SEARCH_ENGINES[engineIndex].name) {
        case 'Google': return <Chrome size={20} className="text-slate-400 dark:text-slate-400" />;
        case 'Bing': return <Globe size={20} className="text-blue-500 dark:text-blue-400" />;
        case 'DuckDuckGo': return <Shield size={20} className="text-orange-500 dark:text-orange-400" />;
        default: return <Search size={20} className="text-slate-400 dark:text-slate-400" />;
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 relative z-20">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400 dark:text-slate-400 group-focus-within:text-brand dark:group-focus-within:text-brand-light transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-12 pr-12 py-4 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand/50 dark:focus:ring-brand-light/50 focus:bg-white dark:focus:bg-slate-900/70 transition-all shadow-lg shadow-slate-200/50 dark:shadow-black/20"
          placeholder={`Search with ${SEARCH_ENGINES[engineIndex].name}...`}
          autoFocus
        />
        <button
          type="button"
          onClick={toggleEngine}
          className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer hover:scale-110 transition-transform"
          title="Switch Search Engine"
        >
          <CurrentIcon />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;