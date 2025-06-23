import React, { useState } from 'react';
import { Users, Clock, Utensils, Volume2, Sparkles, Heart, X, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import { mockUsers } from '../data/mockData';

const RoommateMatch: React.FC = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({
    sleepTime: '',
    diet: '',
    cleanliness: '',
    studyHours: '',
    noiseLevel: '',
    guests: ''
  });

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowQuiz(false);
    // In a real app, this would calculate matches based on quiz answers
  };

  // Mock compatibility calculation
  const calculateCompatibility = (user: any) => {
    return Math.floor(Math.random() * 30) + 70; // 70-100% range
  };

  const matches = mockUsers
    .filter(user => user.lookingFor === 'Flatmate')
    .map(user => ({
      ...user,
      compatibility: calculateCompatibility(user)
    }))
    .sort((a, b) => b.compatibility - a.compatibility);

  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Roommate Matching</h1>
            <p className="text-dark-400">Find your perfect roommate with AI compatibility</p>
          </div>
          <button
            onClick={() => setShowQuiz(true)}
            className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:scale-[1.02] transition-all flex items-center"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Take Quiz
          </button>
        </div>
      </header>

      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Info Banner */}
        <GlassCard className="p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold mb-2">Smart Roommate Matching</h2>
              <p className="text-dark-300 leading-relaxed">
                Our AI algorithm matches you with compatible roommates based on lifestyle preferences, 
                study habits, and personality traits. Take the compatibility quiz to get better matches!
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Matches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((user) => (
            <GlassCard key={user.id} className="p-6 relative overflow-hidden">
              {/* Compatibility Badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                  user.compatibility >= 90 ? 'bg-green-500/20 text-green-400' :
                  user.compatibility >= 80 ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-orange-500/20 text-orange-400'
                }`}>
                  {user.compatibility}% Match
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex items-start space-x-4 mb-4">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold text-lg">{user.name}</h3>
                  <p className="text-dark-400 text-sm">{user.branch} • {user.year}</p>
                  <p className="text-dark-300 text-sm mt-1">{user.bio}</p>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-primary-400" />
                  <span className="text-dark-300 text-sm">Sleeps at {user.roomPrefs.sleepTime}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="w-4 h-4 text-accent-400" />
                  <span className="text-dark-300 text-sm">{user.roomPrefs.diet}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-4 h-4 text-green-400" />
                  <span className="text-dark-300 text-sm">{user.roomPrefs.cleanliness} cleanliness</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Volume2 className="w-4 h-4 text-blue-400" />
                  <span className="text-dark-300 text-sm">Studies in {user.roomPrefs.studyHours}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button className="flex-1 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-medium rounded-xl transition-colors flex items-center justify-center">
                  <Check className="w-4 h-4 mr-1" />
                  Like
                </button>
                <button className="flex-1 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-medium rounded-xl transition-colors flex items-center justify-center">
                  <X className="w-4 h-4 mr-1" />
                  Pass
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {matches.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-dark-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No matches found</h3>
            <p className="text-dark-400">Take the compatibility quiz to find better matches!</p>
          </div>
        )}
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <GlassCard className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Roommate Compatibility Quiz</h2>
                <button
                  onClick={() => setShowQuiz(false)}
                  className="text-dark-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleQuizSubmit} className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-3">What time do you usually sleep?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['9:30 PM', '10:30 PM', '11:30 PM', '12:30 AM'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setQuizAnswers({...quizAnswers, sleepTime: time})}
                        className={`p-3 rounded-xl border transition-all ${
                          quizAnswers.sleepTime === time
                            ? 'border-primary-500 bg-primary-500/20 text-primary-400'
                            : 'border-dark-600 text-dark-300 hover:border-dark-500'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Dietary preference?</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Vegetarian', 'Non-Vegetarian', 'Vegan', 'No Preference'].map((diet) => (
                      <button
                        key={diet}
                        type="button"
                        onClick={() => setQuizAnswers({...quizAnswers, diet})}
                        className={`p-3 rounded-xl border transition-all ${
                          quizAnswers.diet === diet
                            ? 'border-primary-500 bg-primary-500/20 text-primary-400'
                            : 'border-dark-600 text-dark-300 hover:border-dark-500'
                        }`}
                      >
                        {diet}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Cleanliness level?</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Low', 'Medium', 'High'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setQuizAnswers({...quizAnswers, cleanliness: level})}
                        className={`p-3 rounded-xl border transition-all ${
                          quizAnswers.cleanliness === level
                            ? 'border-primary-500 bg-primary-500/20 text-primary-400'
                            : 'border-dark-600 text-dark-300 hover:border-dark-500'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all"
                >
                  Find My Matches
                </button>
              </form>
            </div>
          </GlassCard>
        </div>
      )}

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default RoommateMatch;