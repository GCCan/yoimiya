import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import type { LinkItem } from '../types';
import { DEFAULT_LINKS } from '../constants';
import { Plus, X } from 'lucide-react';

const DynamicIcon = ({ name, color, size = 24 }: { name: string; color: string; size?: number }) => {
  const IconComponent = (Icons as any)[name] || Icons.Link;
  return <IconComponent size={size} style={{ color }} />;
};

const LinkGrid: React.FC = () => {
  const [links, setLinks] = useState<LinkItem[]>(DEFAULT_LINKS);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('xboard_links');
    if (saved) {
      try {
        setLinks(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse links");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('xboard_links', JSON.stringify(links));
  }, [links]);

  const handleDelete = (id: string) => {
    setLinks(links.filter(l => l.id !== id));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(!newTitle || !newUrl) return;

    const newItem: LinkItem = {
      id: Date.now().toString(),
      title: newTitle,
      url: newUrl.startsWith('http') ? newUrl : `https://${newUrl}`,
      icon: 'Globe',
      color: '#ffffff'
    };
    
    setLinks([...links, newItem]);
    setShowModal(false);
    setNewTitle('');
    setNewUrl('');
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-400 text-sm font-semibold tracking-wider uppercase">Quick Access</h3>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          {isEditing ? 'Done' : 'Edit'}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {links.map((link) => (
          <div key={link.id} className="relative group">
            <a
              href={isEditing ? undefined : link.url}
              className={`flex flex-col items-center justify-center p-6 bg-glass border border-glass-border rounded-xl hover:bg-glass-hover hover:border-white/20 transition-all duration-300 backdrop-blur-sm cursor-pointer ${isEditing ? 'animate-pulse' : 'hover:-translate-y-1'}`}
              onClick={(e) => isEditing && e.preventDefault()}
            >
              <div className="mb-3 p-3 bg-white/5 rounded-full shadow-inner">
                <DynamicIcon name={link.icon} color={link.color} />
              </div>
              <span className="text-sm font-medium text-gray-200 truncate w-full text-center">{link.title}</span>
            </a>
            
            {isEditing && (
              <button
                onClick={() => handleDelete(link.id)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition-colors z-10"
              >
                <X size={12} />
              </button>
            )}
          </div>
        ))}

        <button
          onClick={() => setShowModal(true)}
          className="flex flex-col items-center justify-center p-6 bg-glass border border-dashed border-glass-border rounded-xl hover:bg-glass-hover hover:border-white/30 transition-all duration-300 text-gray-500 hover:text-white"
        >
          <Plus size={32} strokeWidth={1.5} />
          <span className="text-sm mt-2 font-medium">Add Link</span>
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 w-full max-w-md shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Add Shortcut</h2>
            <form onSubmit={handleAdd}>
              <div className="mb-4">
                <label className="block text-xs text-gray-400 mb-1">Title</label>
                <input 
                  type="text" 
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="e.g. My Server"
                  autoFocus
                />
              </div>
              <div className="mb-6">
                <label className="block text-xs text-gray-400 mb-1">URL</label>
                <input 
                  type="text" 
                  value={newUrl}
                  onChange={e => setNewUrl(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="https://example.com"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 rounded-lg text-sm bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkGrid;