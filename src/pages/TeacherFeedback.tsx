import React, { useState } from 'react';
import { Star, Send, Sparkles, Copy, Download, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';

const TeacherFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [teacherName, setTeacherName] = useState('');
  const [subject, setSubject] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate AI processing
    const simulatedAIOutput = `Based on my experience in ${subject} with Professor ${teacherName}, I found the teaching methodology to be quite effective. The course structure was well-organized and the concepts were explained clearly. The professor demonstrated strong subject knowledge and was approachable for doubts and clarifications. 

The assignments and projects provided good practical exposure to the theoretical concepts covered in class. However, there could be some improvement in the pace of covering topics to ensure all students can follow along comfortably.

Overall, I would recommend this course to fellow students who are interested in gaining a solid foundation in ${subject}. The professor's teaching style is engaging and the course content is relevant to current industry standards.`;
    
    setAiOutput(simulatedAIOutput);
    setShowOutput(true);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const mockReviews = [
    {
      id: 1,
      subject: "Data Structures",
      professor: "Dr. Sharma",
      rating: 4.5,
      content: "Excellent teaching methodology with practical examples. The professor explains complex concepts in a very understandable manner.",
      semester: "Fall 2023"
    },
    {
      id: 2,
      subject: "Machine Learning",
      professor: "Prof. Patel",
      rating: 4.2,
      content: "Good course content and relevant projects. The professor is knowledgeable and provides helpful feedback on assignments.",
      semester: "Spring 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Faculty Reviews</h1>
            <p className="text-dark-400">Share honest feedback with AI assistance</p>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 max-w-4xl mx-auto">
        {/* AI Feedback Form */}
        <GlassCard className="p-6 mb-8" glow>
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-white font-semibold mb-1">AI-Powered Feedback</h2>
              <p className="text-dark-400 text-sm">Write your raw thoughts, and our AI will help make them professional and constructive</p>
            </div>
          </div>

          <form onSubmit={handleSubmitFeedback} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">Professor Name</label>
                <input
                  type="text"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  placeholder="Dr. Smith / Prof. Patel"
                  className="w-full p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Data Structures, Machine Learning..."
                  className="w-full p-3 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Your Raw Feedback</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your honest thoughts about the professor and teaching style. Don't worry about being too polite - our AI will help refine it!"
                className="w-full h-40 p-4 bg-dark-800/50 border border-dark-600 rounded-xl text-white placeholder-dark-400 resize-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!feedback.trim() || !teacherName.trim() || !subject.trim()}
              className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Professional Review
            </button>
          </form>
        </GlassCard>

        {/* AI Output */}
        {showOutput && (
          <GlassCard className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-semibold text-lg">AI-Generated Professional Review</h3>
              <div className="flex space-x-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-2 bg-dark-800 hover:bg-dark-700 text-white rounded-lg transition-colors flex items-center"
                >
                  {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
                <button className="px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </button>
              </div>
            </div>
            
            <div className="p-4 bg-dark-800/30 rounded-xl border border-dark-700">
              <p className="text-dark-200 leading-relaxed whitespace-pre-line">{aiOutput}</p>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="px-6 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 font-medium rounded-xl transition-colors">
                Submit Review
              </button>
            </div>
          </GlassCard>
        )}

        {/* Recent Reviews */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Recent Reviews</h3>
          <div className="space-y-4">
            {mockReviews.map((review) => (
              <GlassCard key={review.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-white font-medium text-lg">{review.subject}</h4>
                    <p className="text-dark-400">Professor: {review.professor}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{review.rating}</span>
                    </div>
                    <span className="px-2 py-1 bg-primary-500/20 text-primary-400 text-xs rounded-lg">
                      {review.semester}
                    </span>
                  </div>
                </div>
                
                <p className="text-dark-200 leading-relaxed">{review.content}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default TeacherFeedback;