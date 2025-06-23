import React, { useState } from 'react';
import { MessageSquare, Heart, Laugh, HandHeart, Send, TrendingUp, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import { mockConfessions } from '../data/mockData';

const ConfessionPage: React.FC = () => {
  const [newConfession, setNewConfession] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const handleSubmitConfession = (e: React.FormEvent) => {
    e.preventDefault();
    if (newConfession.trim()) {
      // In a real app, this would submit to backend
      setNewConfession('');
      // Show success message
    }
  };

  const getReactionIcon = (type: string) => {
    switch (type) {
      case 'like': return Heart;
      case 'laugh': return Laugh;
      case 'support': return HandHeart;
      default: return Heart;
    }
  };

  const sortedConfessions = [...mockConfessions].sort((a, b) => {
    if (sortBy === 'trending') {
      const totalA = a.reactions.like + a.reactions.laugh + a.reactions.support;
      const totalB = b.reactions.like + b.reactions.laugh + b.reactions.support;
      return totalB - totalA;
    }
    return 0; // Keep original order for 'recent'
  });

  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Campus Confessions</h1>
            <p className="text-dark-400">Share your thoughts anonymously</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSortBy('recent')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                sortBy === 'recent'
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-400 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4 inline mr-1" />
              Recent
            </button>
            <button
              onClick={() => setSortBy('trending')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                sortBy === 'trending'
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-400 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4 inline mr-1" />
              Trending
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 max-w-3xl mx-auto">
        {/* New Confession Form */}
        <GlassCard className="p-6 mb-8" glow>
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-white font-semibold mb-1">Share a confession</h2>
              <p className="text-dark-400 text-sm">Your identity will remain completely anonymous</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmitConfession}>
            <textarea
              value={newConfession}
              onChange={(e) => setNewConfession(e.target.value)}
              placeholder="What's on your mind? Share your thoughts anonymously..."
              className="w-full h-32 p-4 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 resize-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              maxLength={500}
            />
            
            <div className="flex items-center justify-between mt-4">
              <span className="text-dark-500 text-sm">
                {newConfession.length}/500 characters
              </span>
              <button
                type="submit"
                disabled={!newConfession.trim()}
                className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Post Anonymously
              </button>
            </div>
          </form>
        </GlassCard>

        {/* Confessions Feed */}
        <div className="space-y-6">
          {sortedConfessions.map((confession) => (
            <GlassCard key={confession.id} hover className="p-6">
              <p className="text-white leading-relaxed mb-6 text-lg">{confession.content}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  {Object.entries(confession.reactions).map(([type, count]) => {
                    const IconComponent = getReactionIcon(type);
                    const colors = {
                      like: 'hover:text-red-400',
                      laugh: 'hover:text-yellow-400',
                      support: 'hover:text-green-400'
                    };
                    
                    return (
                      <button
                        key={type}
                        className={`flex items-center space-x-2 text-dark-400 ${colors[type as keyof typeof colors]} transition-colors group`}
                      >
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{count}</span>
                      </button>
                    );
                  })}
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-dark-500 text-sm">{confession.timestamp}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Anonymous" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Anonymous Disclaimer */}
        <GlassCard className="p-4 mt-8">
          <div className="text-center">
            <p className="text-dark-400 text-sm">
              🔒 All confessions are completely anonymous. Your identity is never stored or tracked.
            </p>
          </div>
        </GlassCard>
      </div>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default ConfessionPage;