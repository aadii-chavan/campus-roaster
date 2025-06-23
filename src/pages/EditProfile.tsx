import React, { useState } from 'react';
import { Save, ArrowLeft, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import { mockUsers } from '../data/mockData';

const EditProfile: React.FC = () => {
  const user = mockUsers[0];
  
  const [formData, setFormData] = useState({
    name: user.name,
    bio: user.bio,
    branch: user.branch,
    year: user.year,
    lookingFor: user.lookingFor,
    skills: [...user.skills],
    interests: [...user.interests],
    clubs: [...user.clubs]
  });

  const [newSkill, setNewSkill] = useState('');
  const [newInterest, setNewInterest] = useState('');
  const [newClub, setNewClub] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const handleAddInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      setFormData({
        ...formData,
        interests: [...formData.interests, newInterest.trim()]
      });
      setNewInterest('');
    }
  };

  const handleRemoveInterest = (interestToRemove: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter(interest => interest !== interestToRemove)
    });
  };

  const handleAddClub = () => {
    if (newClub.trim() && !formData.clubs.includes(newClub.trim())) {
      setFormData({
        ...formData,
        clubs: [...formData.clubs, newClub.trim()]
      });
      setNewClub('');
    }
  };

  const handleRemoveClub = (clubToRemove: string) => {
    setFormData({
      ...formData,
      clubs: formData.clubs.filter(club => club !== clubToRemove)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to backend
    console.log('Saving profile:', formData);
  };

  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="p-2 hover:bg-dark-800 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white">Edit Profile</h1>
              <p className="text-dark-400">Update your campus information</p>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:scale-[1.02] transition-all flex items-center"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </button>
        </div>
      </header>

      <div className="px-4 py-6 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Basic Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Looking For</label>
                <select
                  value={formData.lookingFor}
                  onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                  className="w-full p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  <option value="Project Partner">Project Partner</option>
                  <option value="Flatmate">Flatmate</option>
                  <option value="Study Buddy">Study Buddy</option>
                  <option value="Friend">Friend</option>
                  <option value="Nothing">Nothing</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Branch</label>
                <input
                  type="text"
                  value={formData.branch}
                  onChange={(e) => setFormData({...formData, branch: e.target.value})}
                  className="w-full p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Year</label>
                <select
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: e.target.value})}
                  className="w-full p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
            </div>
            
            <div className="mt-6">
              <label className="block text-white font-medium mb-2">Bio</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full h-32 p-4 bg-dark-800/50 border border-dark-600 rounded-xl text-white resize-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                placeholder="Tell us about yourself..."
              />
            </div>
          </GlassCard>

          {/* Skills */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Skills & Technologies</h2>
            
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSkill())}
                placeholder="Add a skill..."
                className="flex-1 p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <button
                type="button"
                onClick={handleAddSkill}
                className="p-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-500/20 text-primary-400 rounded-xl"
                >
                  <span>{skill}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveSkill(skill)}
                    className="text-primary-300 hover:text-primary-100 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Interests */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Interests</h2>
            
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={newInterest}
                onChange={(e) => setNewInterest(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddInterest())}
                placeholder="Add an interest..."
                className="flex-1 p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <button
                type="button"
                onClick={handleAddInterest}
                className="p-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {formData.interests.map((interest, index) => (
                <span
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 bg-accent-500/20 text-accent-400 rounded-xl"
                >
                  <span>{interest}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveInterest(interest)}
                    className="text-accent-300 hover:text-accent-100 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Clubs */}
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Clubs & Activities</h2>
            
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={newClub}
                onChange={(e) => setNewClub(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddClub())}
                placeholder="Add a club or activity..."
                className="flex-1 p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
              />
              <button
                type="button"
                onClick={handleAddClub}
                className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {formData.clubs.map((club, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-dark-800/30 rounded-xl"
                >
                  <span className="text-white">{club}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveClub(club)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>
        </form>
      </div>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default EditProfile;