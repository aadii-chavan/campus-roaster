import React, { useState } from 'react';
import { Trophy, Medal, Crown, TrendingUp, Eye, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import { mockLeaderboard, mockUsers } from '../data/mockData';

const LeaderboardPage: React.FC = () => {
  const [category, setCategory] = useState('overall');

  const categories = [
    { id: 'overall', name: 'Overall', icon: Trophy },
    { id: 'views', name: 'Profile Views', icon: Eye },
    { id: 'projects', name: 'Project Likes', icon: Heart },
    { id: 'trending', name: 'Weekly Rising', icon: TrendingUp }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Medal className="w-6 h-6 text-amber-600" />;
      default: return <span className="text-lg font-bold text-dark-400">#{rank}</span>;
    }
  };

  const getRankBackground = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30';
      case 2: return 'from-gray-400/20 to-slate-500/20 border-gray-400/30';
      case 3: return 'from-amber-600/20 to-orange-500/20 border-amber-600/30';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Leaderboard</h1>
            <p className="text-dark-400">Top performing students this week</p>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 max-w-4xl mx-auto">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                category === cat.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {mockLeaderboard.slice(0, 3).map((user, index) => {
            const actualRank = user.rank;
            const podiumOrder = [1, 0, 2]; // Second place in middle for visual hierarchy
            const displayIndex = podiumOrder.indexOf(index);
            
            return (
              <div
                key={user.rank}
                className={`${
                  actualRank === 1 ? 'md:order-2' : 
                  actualRank === 2 ? 'md:order-1' : 'md:order-3'
                }`}
              >
                <GlassCard className={`p-6 text-center relative bg-gradient-to-br ${getRankBackground(actualRank)}`}>
                  <div className="mb-4">
                    {getRankIcon(actualRank)}
                  </div>
                  
                  <div className="w-20 h-20 mx-auto mb-4 relative">
                    <img 
                      src={mockUsers.find(u => u.name === user.name)?.avatar || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400`}
                      alt={user.name}
                      className="w-full h-full rounded-2xl object-cover"
                    />
                    <div className="absolute -top-2 -right-2 text-2xl">
                      {user.badge}
                    </div>
                  </div>
                  
                  <h3 className="text-white font-semibold text-lg mb-1">{user.name}</h3>
                  <p className="text-dark-400 text-sm mb-2">{user.branch}</p>
                  <div className="text-2xl font-bold text-primary-400">{user.points}</div>
                  <p className="text-dark-500 text-sm">points</p>
                </GlassCard>
              </div>
            );
          })}
        </div>

        {/* Full Leaderboard */}
        <GlassCard className="overflow-hidden">
          <div className="p-6 border-b border-dark-700">
            <h2 className="text-xl font-semibold text-white">Full Rankings</h2>
          </div>
          
          <div className="divide-y divide-dark-700">
            {mockLeaderboard.map((user, index) => (
              <div key={user.rank} className="p-6 flex items-center space-x-4 hover:bg-dark-800/30 transition-colors">
                <div className="flex items-center justify-center w-12">
                  {user.rank <= 3 ? getRankIcon(user.rank) : (
                    <span className="text-lg font-bold text-dark-400">#{user.rank}</span>
                  )}
                </div>
                
                <img 
                  src={mockUsers.find(u => u.name === user.name)?.avatar || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400`}
                  alt={user.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                
                <div className="flex-1">
                  <h3 className="text-white font-medium">{user.name}</h3>
                  <p className="text-dark-400 text-sm">{user.branch}</p>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-bold text-primary-400">{user.points}</div>
                  <p className="text-dark-500 text-sm">points</p>
                </div>
                
                <div className="text-2xl">{user.badge}</div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <GlassCard className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">+245</div>
            <p className="text-dark-400 text-sm">Weekly Growth</p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <Eye className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">12.4k</div>
            <p className="text-dark-400 text-sm">Total Views</p>
          </GlassCard>
          
          <GlassCard className="p-6 text-center">
            <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">892</div>
            <p className="text-dark-400 text-sm">Total Likes</p>
          </GlassCard>
        </div>
      </div>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default LeaderboardPage;