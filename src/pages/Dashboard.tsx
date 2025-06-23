import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Zap, 
  TrendingUp, 
  Users, 
  Calendar,
  Trophy,
  Star,
  ArrowRight,
  Eye
} from 'lucide-react';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import { mockConfessions, mockUsers, mockNotifications } from '../data/mockData';

const Dashboard: React.FC = () => {
  const quickActions = [
    { title: 'Explore Students', icon: Users, path: '/explore', color: 'from-blue-500 to-cyan-500' },
    { title: 'Events', icon: Calendar, path: '/events', color: 'from-green-500 to-emerald-500' },
    { title: 'Leaderboard', icon: Trophy, path: '/leaderboard', color: 'from-yellow-500 to-orange-500' },
    { title: 'My Profile', icon: Star, path: '/profile', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Campus Feed</h1>
            <p className="text-dark-400">Stay connected with your VIT community</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-3 h-3 bg-accent-500 rounded-full absolute -top-1 -right-1 animate-pulse" />
              <div className="w-10 h-10 bg-dark-800 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-400" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 lg:flex">
        {/* Main Feed */}
        <main className="flex-1 px-4 py-6 max-w-2xl mx-auto lg:mx-0">
          {/* Quick Actions Grid */}
          <section className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.path}
                  className="group"
                >
                  <GlassCard hover className="p-4 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-medium text-sm">{action.title}</p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </section>

          {/* Confessions Feed */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Campus Confessions</h2>
              <Link 
                to="/confessions" 
                className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center"
              >
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {mockConfessions.slice(0, 3).map((confession) => (
                <GlassCard key={confession.id} hover className="p-6">
                  <p className="text-white mb-4 leading-relaxed">{confession.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-2 text-dark-400 hover:text-red-400 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm">{confession.reactions.like}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-dark-400 hover:text-blue-400 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">{confession.reactions.support}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-dark-400 hover:text-green-400 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    <span className="text-dark-500 text-sm">{confession.timestamp}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>

          {/* Trending Profiles */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Trending Students</h2>
              <Link 
                to="/explore" 
                className="text-primary-400 hover:text-primary-300 text-sm font-medium flex items-center"
              >
                Explore More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid gap-4">
              {mockUsers.slice(0, 2).map((user) => (
                <Link key={user.id} to={`/profile/${user.id}`}>
                  <GlassCard hover className="p-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={user.avatar} 
                        alt={user.name}
                        className="w-12 h-12 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{user.name}</h3>
                        <p className="text-dark-400 text-sm">{user.branch} • {user.year}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1 text-dark-500">
                            <Eye className="w-4 h-4" />
                            <span className="text-xs">{user.profileViews}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-dark-500">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-xs">{user.projects} projects</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-lg">
                          {user.lookingFor}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </section>
        </main>

        {/* Right Sidebar - Campus Pulse */}
        <aside className="hidden lg:block w-80 px-6 py-6 border-l border-dark-800">
          <div className="sticky top-24">
            <h2 className="text-lg font-semibold text-white mb-4">Campus Pulse</h2>
            
            <GlassCard className="p-4 mb-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-medium mb-1">Profile Views</h3>
                <p className="text-2xl font-bold text-primary-400">247</p>
                <p className="text-dark-400 text-sm">This week</p>
              </div>
            </GlassCard>
            
            <div className="space-y-3">
              {mockNotifications.map((notification) => (
                <GlassCard key={notification.id} className="p-3">
                  <p className="text-white text-sm mb-1">{notification.message}</p>
                  <p className="text-dark-500 text-xs">{notification.timestamp}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default Dashboard;