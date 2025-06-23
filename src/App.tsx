import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ExplorePage from './pages/ExplorePage';
import ConfessionPage from './pages/ConfessionPage';
import RoommateMatch from './pages/RoommateMatch';
import TeacherFeedback from './pages/TeacherFeedback';
import EventsPage from './pages/EventsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950 text-white font-inter">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/confessions" element={<ConfessionPage />} />
          <Route path="/roommate-match" element={<RoommateMatch />} />
          <Route path="/teacher-feedback" element={<TeacherFeedback />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/profile/:id?" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;