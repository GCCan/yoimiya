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
        case 'Google': return <Chrome size={20} className="text-gray-400" />;
        case 'Bing': return <Globe size={20} className="text-blue-400" />;
        case 'DuckDuckGo': return <Shield size={20} className="text-orange-400" />;
        default: return <Search size={20} className="text-gray-400" />;
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 relative z-20">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-12 pr-12 py-4 bg-glass backdrop-blur-md border border-glass-border rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-gray-900/40 transition-all shadow-lg"
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