import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Bell } from 'lucide-react';
import Navigation from '../components/Navigation';
import GlassCard from '../components/GlassCard';
import { mockEvents } from '../data/mockData';

const EventsPage: React.FC = () => {
  const [filter, setFilter] = useState('upcoming');
  
  return (
    <div className="min-h-screen bg-dark-950 lg:pl-20">
      <Navigation />
      
      {/* Header */}
      <header className="sticky top-0 bg-dark-950/80 backdrop-blur-xl border-b border-dark-800 px-4 py-4 z-40">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Campus Events</h1>
            <p className="text-dark-400">Stay updated with college activities</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                filter === 'upcoming'
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-400 hover:text-white'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                filter === 'past'
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-800 text-dark-400 hover:text-white'
              }`}
            >
              Past
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 max-w-6xl mx-auto">
        {/* Featured Event */}
        <GlassCard className="p-6 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl" />
          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block px-3 py-1 bg-accent-500/20 text-accent-400 text-sm font-medium rounded-lg mb-2">
                  Featured Event
                </span>
                <h2 className="text-2xl font-bold text-white mb-2">Tech Fest 2024</h2>
                <p className="text-dark-300">The biggest technology festival of the year</p>
              </div>
              <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium rounded-xl hover:scale-[1.02] transition-all">
                RSVP Now
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary-400" />
                <span className="text-white">March 15, 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-accent-400" />
                <span className="text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-green-400" />
                <span className="text-white">Main Auditorium</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-dark-400" />
                <span className="text-dark-300">234 attending</span>
              </div>
              <span className="text-dark-500">•</span>
              <span className="text-dark-300">Organized by Tech Club</span>
            </div>
          </div>
        </GlassCard>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <GlassCard key={event.id} hover className="overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
                <p className="text-dark-300 text-sm mb-4 leading-relaxed">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-primary-400" />
                    <span className="text-dark-300 text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent-400" />
                    <span className="text-dark-300 text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-green-400" />
                    <span className="text-dark-300 text-sm">{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-dark-400" />
                    <span className="text-dark-400 text-sm">{event.attendees} attending</span>
                  </div>
                  <button className="p-2 bg-primary-500/20 hover:bg-primary-500/30 text-primary-400 rounded-lg transition-colors">
                    <Bell className="w-4 h-4" />
                  </button>
                </div>

                <button className="w-full mt-4 py-2 bg-dark-800 hover:bg-dark-700 text-white font-medium rounded-xl transition-colors">
                  View Details
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* No Events Message */}
        {mockEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-dark-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No events found</h3>
            <p className="text-dark-400">Check back later for upcoming events</p>
          </div>
        )}
      </div>

      {/* Mobile padding for bottom nav */}
      <div className="h-20 lg:hidden" />
    </div>
  );
};

export default EventsPage;