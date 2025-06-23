export const mockUsers = [
  {
    id: 1,
    name: "Arjun Sharma",
    email: "arjun.sharma22@vit.edu",
    branch: "Computer Science",
    year: "3rd Year",
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["React", "Node.js", "Python", "Machine Learning"],
    interests: ["Gaming", "Photography", "Coding"],
    clubs: ["Coding Club", "Photography Society"],
    lookingFor: "Project Partner",
    bio: "Passionate full-stack developer with interest in AI/ML",
    projects: 12,
    profileViews: 245,
    achievements: ["Hackathon Winner", "Dean's List"],
    roomPrefs: {
      sleepTime: "11 PM",
      diet: "Vegetarian",
      cleanliness: "High",
      studyHours: "Evening"
    }
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel23@vit.edu",
    branch: "Information Technology",
    year: "2nd Year",
    avatar: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["UI/UX", "Figma", "JavaScript", "React"],
    interests: ["Design", "Art", "Music"],
    clubs: ["Design Club", "Music Society"],
    lookingFor: "Flatmate",
    bio: "Creative designer passionate about user experience",
    projects: 8,
    profileViews: 189,
    achievements: ["Design Competition Winner"],
    roomPrefs: {
      sleepTime: "10:30 PM",
      diet: "Vegetarian",
      cleanliness: "Very High",
      studyHours: "Morning"
    }
  },
  {
    id: 3,
    name: "Rahul Kumar",
    email: "rahul.kumar21@vit.edu",
    branch: "Mechanical Engineering",
    year: "4th Year",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    skills: ["CAD", "3D Modeling", "Project Management"],
    interests: ["Robotics", "Sports", "Innovation"],
    clubs: ["Robotics Club", "Sports Committee"],
    lookingFor: "Study Buddy",
    bio: "Final year mechanical engineer with robotics passion",
    projects: 15,
    profileViews: 312,
    achievements: ["Project Excellence Award", "Sports Captain"],
    roomPrefs: {
      sleepTime: "12 AM",
      diet: "Non-Vegetarian",
      cleanliness: "Medium",
      studyHours: "Late Night"
    }
  }
];

export const mockConfessions = [
  {
    id: 1,
    content: "I have a crush on someone from the computer science department but I'm too shy to approach them 💕",
    timestamp: "2 hours ago",
    reactions: { like: 23, laugh: 2, support: 45 },
    anonymous: true
  },
  {
    id: 2,
    content: "The new cafeteria food is actually really good! Finally some decent meals on campus 🍕",
    timestamp: "4 hours ago",
    reactions: { like: 67, laugh: 12, support: 8 },
    anonymous: true
  },
  {
    id: 3,
    content: "Sometimes I feel like I chose the wrong branch. Anyone else feeling lost about their career path?",
    timestamp: "6 hours ago",
    reactions: { like: 15, laugh: 1, support: 89 },
    anonymous: true
  }
];

export const mockEvents = [
  {
    id: 1,
    title: "Tech Fest 2024",
    description: "Annual technology festival with competitions, workshops, and exhibitions",
    date: "2024-03-15",
    time: "9:00 AM",
    location: "Main Auditorium",
    organizer: "Tech Club",
    attendees: 234,
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Cultural Night",
    description: "Showcase of diverse cultural performances by students",
    date: "2024-03-20",
    time: "6:00 PM",
    location: "Open Theatre",
    organizer: "Cultural Committee",
    attendees: 156,
    image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export const mockLeaderboard = [
  { rank: 1, name: "Arjun Sharma", branch: "CSE", points: 2450, badge: "🏆" },
  { rank: 2, name: "Priya Patel", branch: "IT", points: 2340, badge: "🥈" },
  { rank: 3, name: "Rahul Kumar", branch: "MECH", points: 2230, badge: "🥉" },
  { rank: 4, name: "Sneha Singh", branch: "ECE", points: 2180, badge: "⭐" },
  { rank: 5, name: "Amit Gupta", branch: "CSE", points: 2150, badge: "⭐" }
];

export const mockNotifications = [
  {
    id: 1,
    message: "Someone from 3rd Year IT viewed your profile",
    timestamp: "5 minutes ago",
    type: "profile_view"
  },
  {
    id: 2,
    message: "Your project received 3 new likes",
    timestamp: "1 hour ago",
    type: "like"
  },
  {
    id: 3,
    message: "New confession posted in your feed",
    timestamp: "2 hours ago",
    type: "confession"
  }
];