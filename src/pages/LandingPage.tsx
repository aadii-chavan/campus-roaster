import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Users, 
  MessageSquare, 
  Star, 
  Calendar,
  Trophy,
  Heart,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Anonymous Confessions",
      description: "Share your thoughts anonymously and connect with peers who understand your college journey.",
      gradient: "from-primary-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Smart Roommate Matching",
      description: "Find your perfect roommate using our AI-powered compatibility algorithm.",
      gradient: "from-accent-500 to-red-500"
    },
    {
      icon: Star,
      title: "Faculty Reviews",
      description: "Get honest, AI-sanitized feedback about professors and courses from fellow students.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Trophy,
      title: "Campus Leaderboards",
      description: "Compete with peers and showcase your achievements across various categories.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Calendar,
      title: "Events & Activities",
      description: "Never miss important campus events and activities. RSVP and stay updated.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Heart,
      title: "Campus Pulse",
      description: "Stay connected with real-time campus updates and anonymous interactions.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-950 to-accent-900/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium mb-6 group hover:bg-primary-500/20 transition-all duration-300">
              <Sparkles className="w-4 h-4 mr-2 animate-spin-slow group-hover:animate-pulse" />
              Welcome to the Future of College Networking
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-primary-200 to-accent-400 bg-clip-text text-transparent mb-6">
              VIT CAMPUS
              <br />
              <span className="text-accent-400 inline-flex items-center">
                ROASTER
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 ml-4 text-accent-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
              The ultimate platform for VIT students to connect, collaborate, and thrive together. 
              Experience networking like never before with AI-powered matching and anonymous interactions.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link
              to="/login"
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow flex items-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
            </Link>
            
            <Link
              to="/dashboard"
              className="group px-8 py-4 bg-dark-800/50 backdrop-blur-sm border border-dark-600 text-white font-semibold rounded-2xl hover:border-primary-500/50 hover:scale-105 transition-all duration-300 flex items-center"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse group-hover:text-accent-400 transition-all duration-300" />
              Explore Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center animate-float">
                <Star className="w-8 h-8 text-white animate-spin-slow" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-accent-400 inline-flex items-center">
                Campus Roaster
                <Heart className="w-8 h-8 ml-2 text-red-400 animate-pulse" />
              </span>?
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Designed specifically for Indian college students with features that matter most to your academic and social life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in group">
                <div className="relative bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <feature.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-dark-300 leading-relaxed group-hover:text-dark-200 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-dark-900/50 to-dark-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Trophy className="w-8 h-8 text-yellow-400 mr-3 animate-bounce" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Built for Modern <span className="text-primary-400">College Life</span>
                </h3>
              </div>
              
              <div className="space-y-6">
                {[
                  { text: "Connect with like-minded peers across all departments", icon: Users },
                  { text: "Find the perfect roommate with compatibility matching", icon: Heart },
                  { text: "Share and discover anonymous confessions safely", icon: MessageSquare },
                  { text: "Get honest reviews about faculty and courses", icon: Star },
                  { text: "Never miss important campus events and activities", icon: Calendar },
                  { text: "Compete on leaderboards and earn recognition", icon: Trophy }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                    <benefit.icon className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:animate-pulse transition-all duration-300" />
                    <span className="text-dark-200 group-hover:text-white transition-colors duration-300">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl p-1 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-500">
                <div className="bg-dark-900 rounded-3xl p-8 group-hover:bg-dark-800/90 transition-all duration-300">
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <Zap className="w-16 h-16 text-accent-400 mx-auto animate-pulse group-hover:animate-bounce transition-all duration-300" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">Instant Impact</h4>
                    <p className="text-dark-300 group-hover:text-dark-200 transition-colors duration-300">
                      Join thousands of VIT students already using Campus Roaster to enhance their college experience.
                    </p>
                    <div className="flex justify-center space-x-4 mt-6">
                      <div className="w-3 h-3 bg-primary-400 rounded-full animate-bounce" />
                      <div className="w-3 h-3 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-primary-400 animate-spin-slow" />
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              <Sparkles className="w-8 h-8 text-accent-400 animate-spin-slow" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-accent-400 inline-flex items-center">
              College Experience
              <Trophy className="w-8 h-8 ml-2 text-yellow-400 animate-bounce" style={{ animationDelay: '0.3s' }} />
            </span>?
          </h3>
          <p className="text-xl text-dark-300 mb-8">
            Your account is already created using your VIT email. Just login and start connecting!
          </p>
          
          <Link
            to="/login"
            className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold text-lg rounded-2xl hover:scale-105 transition-all duration-300 animate-pulse-glow relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center">
              <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse" />
              Access Your Account
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
            </span>
          </Link>
          
          <div className="flex justify-center space-x-6 mt-8">
            <div className="flex items-center space-x-2 text-dark-400">
              <Users className="w-5 h-5 animate-pulse" />
              <span className="text-sm">5000+ Students</span>
            </div>
            <div className="flex items-center space-x-2 text-dark-400">
              <Star className="w-5 h-5 animate-bounce" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-dark-400">
              <Heart className="w-5 h-5 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="text-sm">Loved by VIT</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;