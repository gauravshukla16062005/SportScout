import { motion } from "framer-motion";
import {
  Upload,
  Trophy,
  Medal,
  History,
  User,
  Settings,
  LogOut,
  BarChart3,
  Activity,
  Bell,
  Search,
  Brain,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Total Uploads",
    value: "3",
    icon: Upload,
    color: "bg-blue-500",
  },
  {
    title: "Average Score",
    value: "90%",
    icon: Trophy,
    color: "bg-yellow-500",
  },
  {
    title: "Best Score",
    value: "92%",
    icon: Medal,
    color: "bg-green-500",
  },
  {
    title: "Sports Played",
    value: "3",
    icon: Activity,
    color: "bg-red-500",
  },
];

const recentUploads = [
  {
    sport: "Badminton",
    score: "92%",
    date: "Today",
  },
  {
    sport: "Football",
    score: "88%",
    date: "Yesterday",
  },
  {
    sport: "Cricket",
    score: "90%",
    date: "2 Days Ago",
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white">

      {/* Sidebar */}

      <aside className="w-72 border-r border-white/10 bg-black/80 backdrop-blur-xl">

        <div className="border-b border-white/10 p-8">

          <h1 className="text-3xl font-bold">
            SPORTSSCOUT
          </h1>

          <p className="mt-2 text-xs uppercase tracking-[4px] text-red-500">
            AI Dashboard
          </p>

        </div>

        <nav className="space-y-3 p-6">

          <Link
            to="/dashboard"
            className="flex items-center gap-4 rounded-2xl bg-red-600 px-5 py-4"
          >
            <BarChart3 size={22} />
            Dashboard
          </Link>

          <Link
            to="/upload/badminton"
            className="flex items-center gap-4 rounded-2xl px-5 py-4 hover:bg-white/10"
          >
            <Upload size={22} />
            Upload Video
          </Link>

          <Link
            to="/history"
            className="flex items-center gap-4 rounded-2xl px-5 py-4 hover:bg-white/10"
          >
            <History size={22} />
            History
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-4 rounded-2xl px-5 py-4 hover:bg-white/10"
          >
            <User size={22} />
            Profile
          </Link>

          <button className="flex w-full items-center gap-4 rounded-2xl px-5 py-4 hover:bg-white/10">
            <Settings size={22} />
            Settings
          </button>

        </nav>

        <div className="absolute bottom-6 left-6 right-6">

          <button className="flex w-full items-center gap-4 rounded-2xl bg-red-600 px-5 py-4">
            <LogOut size={22} />
            Logout
          </button>

        </div>

      </aside>

      {/* Main */}

      <main className="flex-1 p-10">

        <div className="mb-10 flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-3 text-gray-400">
              Track your AI sports performance and recent uploads.
            </p>

          </div>

          <div className="flex items-center gap-5">

            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">

              <Search size={18} />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none"
              />

            </div>

            <button className="rounded-full border border-white/10 p-4 hover:bg-white/10">
              <Bell size={20} />
            </button>

          </div>

        </div>

        <Link to="/upload/badminton">

          <button className="mb-10 rounded-full bg-red-600 px-8 py-4 font-semibold hover:bg-red-700">
            Upload New Video
          </button>

        </Link>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm uppercase tracking-[3px] text-gray-400">
                      {item.title}
                    </p>

                    <h2 className="mt-4 text-5xl font-bold">
                      {item.value}
                    </h2>

                  </div>

                  <div className={`${item.color} rounded-2xl p-4`}>
                    <Icon size={30} />
                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">

{/* Performance Summary */}

<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <div className="mb-8 flex items-center gap-3">

    <TrendingUp
      size={30}
      className="text-red-500"
    />

    <h2 className="text-3xl font-bold">
      Performance Summary
    </h2>

  </div>

  <div className="space-y-7">

    {[
      { name: "Speed", value: 91, color: "bg-red-500" },
      { name: "Agility", value: 89, color: "bg-blue-500" },
      { name: "Balance", value: 93, color: "bg-green-500" },
      { name: "Footwork", value: 88, color: "bg-yellow-500" },
    ].map((skill) => (

      <div key={skill.name}>

        <div className="mb-2 flex justify-between">

          <span>{skill.name}</span>

          <span>{skill.value}%</span>

        </div>

        <div className="h-3 rounded-full bg-zinc-800">

          <div
            className={`h-3 rounded-full ${skill.color}`}
            style={{ width: `${skill.value}%` }}
          />

        </div>

      </div>

    ))}

  </div>

</div>

{/* Recent Uploads */}

<div className="rounded-3xl border border-white/10 bg-white/5 p-8">

  <h2 className="mb-8 text-3xl font-bold">

    Recent Uploads

  </h2>

  <div className="space-y-5">

    {recentUploads.map((item, index) => (

      <motion.div
        key={index}
        whileHover={{ scale: 1.02 }}
        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-5"
      >

        <div>

          <h3 className="text-xl font-semibold">

            {item.sport}

          </h3>

          <p className="mt-2 text-gray-400">

            {item.date}

          </p>

        </div>

        <div className="text-right">

          <p className="text-3xl font-bold text-red-500">

            {item.score}

          </p>

        </div>

      </motion.div>

    ))}

  </div>

</div>

</div>
<div className="mt-12 grid gap-8 lg:grid-cols-2">

{/* AI Recommendation */}

<motion.div
  whileHover={{ y: -5 }}
  className="rounded-3xl border border-red-500/20 bg-red-600/10 p-8"
>

  <div className="mb-6 flex items-center gap-3">

    <Brain
      size={30}
      className="text-red-500"
    />

    <h2 className="text-3xl font-bold">
      AI Recommendation
    </h2>

  </div>

  <p className="leading-8 text-gray-300">

    Based on your latest assessment, your balance and body
    coordination are excellent. Focus on explosive speed,
    reaction time and footwork drills to increase your overall
    AI score beyond 95%.

  </p>

</motion.div>

{/* Quick Actions */}

<motion.div
  whileHover={{ y: -5 }}
  className="rounded-3xl border border-white/10 bg-white/5 p-8"
>

  <h2 className="mb-8 text-3xl font-bold">

    Quick Actions

  </h2>

  <div className="grid gap-4">

    <Link to="/upload/badminton">

      <button className="flex w-full items-center gap-4 rounded-2xl bg-red-600 px-6 py-5 font-semibold hover:bg-red-700">

        <Upload size={22} />

        Upload New Video

      </button>

    </Link>

    <Link to="/history">

      <button className="flex w-full items-center gap-4 rounded-2xl border border-white/10 px-6 py-5 hover:bg-white/10">

        <History size={22} />

        Upload History

      </button>

    </Link>

    <Link to="/report">

      <button className="flex w-full items-center gap-4 rounded-2xl border border-white/10 px-6 py-5 hover:bg-white/10">

        <Trophy size={22} />

        Latest Report

      </button>

    </Link>

  </div>

</motion.div>

</div>

</main>

</div>

);

}