import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, MessageSquare, Loader2 } from 'lucide-react';
import { generateResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '0', role: 'model', text: 'Hi! I\'m XBoard AI. How can I help you today?', timestamp: Date.now() }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await generateResponse(input);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      // Error handled in service
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-brand hover:bg-brand-dark rounded-full shadow-lg shadow-brand/30 hover:scale-110 transition-transform z-50 group border-2 border-white"
      >
        <Sparkles className="text-white h-6 w-6 group-hover:rotate-12 transition-transform" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] flex flex-col bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden ring-1 ring-black/5">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="font-semibold text-sm text-slate-800">XBoard AI</span>
        </div>
        <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-slate-700 transition-colors"
        >
            <X size={18} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-brand text-white rounded-br-none' 
                    : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
                }`}
            >
                {msg.text}
            </div>
          </div>
        ))}
        {loading && (
             <div className="flex justify-start">
                <div className="bg-slate-100 border border-slate-200 p-3 rounded-2xl rounded-bl-none">
                    <Loader2 size={16} className="animate-spin text-slate-400" />
                </div>
             </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-slate-50 border-t border-slate-200">
        <form onSubmit={handleSend} className="relative">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask support..."
                className="w-full bg-white border border-slate-200 rounded-lg pl-4 pr-10 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-sm"
            />
            <button 
                type="submit"
                disabled={loading || !input.trim()}
                className="absolute right-2 top-2 p-1.5 text-slate-400 hover:text-brand disabled:opacity-50 transition-colors"
            >
                <Send size={16} />
            </button>
        </form>
      </div>
    </div>
  );
};

export default GeminiWidget;