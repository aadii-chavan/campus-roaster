import React, { useState } from 'react';
import { Search, Filter, MapPin, Code, Palette, Wrench, Heart, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import { mockUsers } from '../data/mockData';

const ExplorePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedLookingFor, setSelectedLookingFor] = useState('All');

  const branches = ['All', 'Computer Science', 'Information Technology', 'Mechanical Engineering', 'Electronics'];
  const years = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year'];
  const lookingForOptions = ['All', 'Project Partner', 'Flatmate', 'Study Buddy', 'Friend'];

  const getBranchIcon = (branch: string) => {
    switch (branch) {
      case 'Computer Science':
      case 'Information Technology':
        return Code;
      case 'Mechanical Engineering':
        return Wrench;
      default:
        return Code;
    }
  };

  const filteredUsers = mockUsers.filter(user => {
    return (
      (searchTerm === '' || user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       user.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (selectedBranch === 'All' || user.branch === selectedBranch) &&
      (selectedYear === 'All' || user.year === selectedYear) &&
      (selectedLookingFor === 'All' || user.lookingFor === selectedLookingFor)
    );
  });

  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Explore Students</h1>
            <p className="text-dark-400">Discover and connect with your peers</p>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        {/* Search and Filters */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid gap-4 mb-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Search students, skills, interests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-dark-400" />
                <span className="text-dark-400 text-sm">Filters:</span>
              </div>
              
              <select
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
                className="px-3 py-1.5 bg-dark-800 border border-dark-600 rounded-lg text-white text-sm focus:border-primary-500"
              >
                {branches.map(branch => (
                  <option key={branch} value={branch}>{branch}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-1.5 bg-dark-800 border border-dark-600 rounded-lg text-white text-sm focus:border-primary-500"
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <select
                value={selectedLookingFor}
                onChange={(e) => setSelectedLookingFor(e.target.value)}
                className="px-3 py-1.5 bg-dark-800 border border-dark-600 rounded-lg text-white text-sm focus:border-primary-500"
              >
                {lookingForOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-dark-400 mb-6">
            Found {filteredUsers.length} student{filteredUsers.length !== 1 ? 's' : ''}
          </p>

          {/* Student Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => {
              const BranchIcon = getBranchIcon(user.branch);
              
              return (
                <GlassCard key={user.id} hover className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg">{user.name}</h3>
                      <div className="flex items-center space-x-2 text-dark-400 mb-2">
                        <BranchIcon className="w-4 h-4" />
                        <span className="text-sm">{user.branch}</span>
                      </div>
                      <span className="inline-block px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-lg">
                        {user.year}
                      </span>
                    </div>
                  </div>

                  <p className="text-dark-300 text-sm mb-4 leading-relaxed">{user.bio}</p>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-white font-medium text-sm mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                      {user.skills.length > 3 && (
                        <span className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-lg">
                          +{user.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Looking For */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-accent-400" />
                      <span className="text-accent-400 text-sm font-medium">{user.lookingFor}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-dark-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs">{user.profileViews}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-dark-700">
                    <button className="w-full py-2 bg-primary-500/20 hover:bg-primary-500/30 text-primary-400 font-medium rounded-xl transition-colors">
                      View Profile
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-dark-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No students found</h3>
              <p className="text-dark-400">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default ExplorePage;