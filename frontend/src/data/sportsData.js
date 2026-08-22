import football from "../assets/images/football.jpg";
import cricket from "../assets/images/cricket.jpg";
import badminton from "../assets/images/badminton.jpg";
import tennis from "../assets/images/tennis.jpg";
import volleyball from "../assets/images/volleyball.jpg";
import swimming from "../assets/images/swimming.jpg";

export const sportsData = [
  {
    id: 1,
    slug: "football",
    title: "Football",
    image: football,
    color: "from-green-500 to-emerald-700",
    description:
      "Analyze dribbling, sprint speed, passing accuracy, shooting mechanics and overall field performance using AI-powered computer vision.",
    features: [
      "Sprint Speed",
      "Passing Accuracy",
      "Ball Control",
      "Shooting",
    ],
    assessment: "Available",
  },

  {
    id: 2,
    slug: "cricket",
    title: "Cricket",
    image: cricket,
    color: "from-blue-500 to-cyan-700",
    description:
      "Evaluate batting stance, bowling action, reaction time, balance and footwork with biomechanical AI analysis.",
    features: [
      "Batting",
      "Bowling",
      "Reaction Time",
      "Footwork",
    ],
    assessment: "Available",
  },

  {
    id: 3,
    slug: "badminton",
    title: "Badminton",
    image: badminton,
    color: "from-red-500 to-rose-700",
    description:
      "AI evaluates smash power, agility, movement, footwork and player posture using pose estimation.",
    features: [
      "Agility",
      "Smash Power",
      "Footwork",
      "Movement",
    ],
    assessment: "Available",
  },

  {
    id: 4,
    slug: "tennis",
    title: "Tennis",
    image: tennis,
    color: "from-yellow-500 to-orange-700",
    description:
      "Track swing mechanics, serve accuracy, movement efficiency and body coordination.",
    features: [
      "Serve",
      "Backhand",
      "Forehand",
      "Movement",
    ],
    assessment: "Available",
  },

  {
    id: 5,
    slug: "volleyball",
    title: "Volleyball",
    image: volleyball,
    color: "from-violet-500 to-purple-700",
    description:
      "Assess jump height, spike technique, blocking posture and player coordination.",
    features: [
      "Spike",
      "Jump",
      "Block",
      "Coordination",
    ],
    assessment: "Available",
  },

  {
    id: 6,
    slug: "swimming",
    title: "Swimming",
    image: swimming,
    color: "from-sky-500 to-blue-800",
    description:
      "Analyze stroke efficiency, breathing pattern, body alignment and lap consistency.",
    features: [
      "Stroke",
      "Breathing",
      "Speed",
      "Technique",
    ],
    assessment: "Coming Soon",
  },
];