import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-dark-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Alert Message */}
        {showAlert && (
          <div className="mb-6 animate-slide-up">
            <GlassCard className="p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium mb-1">Account Ready!</p>
                  <p className="text-dark-300 text-sm leading-relaxed">
                    Your account has been created using your VIT email (e.g., firstname.lastname24@vit.edu). 
                    Use the default password or reset it below.
                  </p>
                </div>
                <button 
                  onClick={() => setShowAlert(false)}
                  className="text-dark-400 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Login Form */}
        <GlassCard className="p-8" glow>
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-dark-300">Access your VIT Campus Roaster account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">VIT Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-dark-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="firstname.lastname24@vit.edu"
                  className="w-full pl-12 pr-4 py-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center animate-pulse-glow"
              >
                Access Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>

              <button
                type="button"
                className="w-full py-3 bg-dark-800/50 border border-dark-600 text-white font-medium rounded-xl hover:border-primary-500/50 transition-all"
              >
                Reset Password
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-dark-700 text-center">
            <p className="text-dark-400">
              New to Campus Roaster?{' '}
              <Link to="/" className="text-primary-400 hover:text-primary-300 font-medium">
                Learn More
              </Link>
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default LoginPage;