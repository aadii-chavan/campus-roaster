import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Search, 
  MessageSquare, 
  Users, 
  Star, 
  Calendar,
  Trophy,
  User,
  Heart,
  MessageCircle,
  Sparkles
} from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Home' },
    { path: '/explore', icon: Search, label: 'Explore' },
    { path: '/confessions', icon: MessageSquare, label: 'Confessions' },
    { path: '/roommate-match', icon: Users, label: 'Roommate' },
    { path: '/teacher-feedback', icon: Star, label: 'Reviews' },
    { path: '/events', icon: Calendar, label: 'Events' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-screen w-20 bg-dark-900/80 backdrop-blur-xl border-r border-dark-700 flex-col items-center py-6 z-50">
        <div className="mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="flex flex-col space-y-4 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'text-dark-400 hover:text-white hover:bg-dark-800'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <div className="absolute left-full ml-3 px-2 py-1 bg-dark-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-dark-900/90 backdrop-blur-xl border-t border-dark-700 px-4 py-2 z-50">
        <div className="flex justify-around items-center">
          {navItems.slice(0, 5).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center p-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-primary-400'
                    : 'text-dark-400'
                }`
              }
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;