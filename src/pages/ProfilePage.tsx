import React from 'react';
import { Edit, MapPin, Calendar, Code, Trophy, Eye, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import { mockUsers } from '../data/mockData';

const ProfilePage: React.FC = () => {
  // Using first user as current user profile
  const user = mockUsers[0];

  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">My Profile</h1>
            <p className="text-dark-400">Manage your campus presence</p>
          </div>
          <Link
            to="/edit-profile"
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-colors flex items-center"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Profile
          </Link>
        </div>
      </header>

      <div className="px-4 py-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Profile Card */}
            <GlassCard className="p-8">
              <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-32 h-32 rounded-3xl object-cover mx-auto md:mx-0"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-white mb-2">{user.name}</h1>
                  <div className="flex items-center justify-center md:justify-start space-x-2 text-dark-400 mb-3">
                    <Code className="w-4 h-4" />
                    <span>{user.branch} • {user.year}</span>
                  </div>
                  <p className="text-dark-300 leading-relaxed mb-4">{user.bio}</p>
                  
                  <div className="flex items-center justify-center md:justify-start space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-medium">{user.profileViews}</span>
                      <span className="text-dark-500 text-sm">views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-white font-medium">{user.projects}</span>
                      <span className="text-dark-500 text-sm">projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Skills Section */}
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {user.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-xl font-medium hover:bg-primary-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Interests Section */}
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Interests</h2>
              <div className="flex flex-wrap gap-3">
                {user.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent-500/20 text-accent-400 rounded-xl font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Clubs & Activities */}
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Clubs & Activities</h2>
              <div className="space-y-3">
                {user.clubs.map((club, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-dark-200">{club}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Achievements */}
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Achievements</h2>
              <div className="space-y-3">
                {user.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-dark-200">{achievement}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column - Stats & Status */}
          <div className="space-y-6">
            {/* Looking For */}
            <GlassCard className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Currently Looking For</h3>
              <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-xl font-medium">
                {user.lookingFor}
              </span>
            </GlassCard>

            {/* Profile Stats */}
            <GlassCard className="p-6">
              <h3 className="text-white font-semibold mb-4">Profile Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-dark-300">Profile Views</span>
                  <span className="text-white font-medium">{user.profileViews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-300">Projects</span>
                  <span className="text-white font-medium">{user.projects}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-300">Achievements</span>
                  <span className="text-white font-medium">{user.achievements.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-300">Club Memberships</span>
                  <span className="text-white font-medium">{user.clubs.length}</span>
                </div>
              </div>
            </GlassCard>

            {/* Badges */}
            <GlassCard className="p-6">
              <h3 className="text-white font-semibold mb-4">Badges</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Trophy className="w-6 h-6 text-yellow-400" />
                  </div>
                  <p className="text-xs text-dark-400">Achiever</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Eye className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-xs text-dark-400">Popular</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Code className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-xs text-dark-400">Coder</p>
                </div>
              </div>
            </GlassCard>

            {/* Quick Actions */}
            <GlassCard className="p-6">
              <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/edit-profile"
                  className="block w-full py-2 bg-primary-500/20 hover:bg-primary-500/30 text-primary-400 text-center rounded-xl transition-colors"
                >
                  Edit Profile
                </Link>
                <button className="w-full py-2 bg-accent-500/20 hover:bg-accent-500/30 text-accent-400 rounded-xl transition-colors">
                  Share Profile
                </button>
                <button className="w-full py-2 bg-dark-700 hover:bg-dark-600 text-white rounded-xl transition-colors">
                  View Analytics
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default ProfilePage;