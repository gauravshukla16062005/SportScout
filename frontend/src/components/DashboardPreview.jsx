import { motion } from "framer-motion";
import {
  Trophy,
  BrainCircuit,
  Activity,
  TrendingUp,
  Target,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";

const trendData = [
  { month: "Jan", score: 62 },
  { month: "Feb", score: 68 },
  { month: "Mar", score: 72 },
  { month: "Apr", score: 79 },
  { month: "May", score: 84 },
  { month: "Jun", score: 92 },
];

const radarData = [
  {
    subject: "Speed",
    value: 95,
  },
  {
    subject: "Power",
    value: 88,
  },
  {
    subject: "Accuracy",
    value: 98,
  },
  {
    subject: "Agility",
    value: 93,
  },
  {
    subject: "Balance",
    value: 86,
  },
];

const metrics = [
  {
    title: "Speed",
    value: 95,
  },
  {
    title: "Agility",
    value: 93,
  },
  {
    title: "Power",
    value: 88,
  },
  {
    title: "Accuracy",
    value: 98,
  },
];

const recommendations = [
  "Improve knee flexion while sprinting",
  "Maintain shoulder alignment",
  "Increase reaction speed drills",
  "Enhance balance during landing",
];

export default function DashboardPreview() {
  return (
    <section
      id="dashboard-preview"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-red-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-600/40 bg-red-600/10 px-6 py-3">

            <BrainCircuit
              size={18}
              className="text-red-500"
            />

            <span className="text-sm uppercase tracking-[4px] text-white">

              AI Dashboard Preview

            </span>

          </div>

          <h2 className="text-5xl leading-none md:text-7xl">

            Smart Athlete

            <span className="block text-red-600">

              Performance Dashboard

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Real-time AI analytics powered by Computer Vision,
            Pose Estimation and Machine Learning.

          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3"></div>
                {/* LEFT COLUMN */}

                <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >

          {/* Athlete Card */}

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

            <div className="flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-[0_0_35px_rgba(220,38,38,.45)]">

                <Trophy size={38} />

              </div>

              <div>

                <h3 className="text-3xl text-white">

                  Aryan Sharma

                </h3>

                <p className="mt-2 text-gray-400">

                  Football Athlete

                </p>

              </div>

            </div>

            <div className="mt-8 space-y-4">

              <div className="flex justify-between">

                <span className="text-gray-400">

                  Assessment

                </span>

                <span className="text-green-400">

                  Completed

                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">

                  AI Confidence

                </span>

                <span className="text-red-500">

                  98%

                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">

                  Sport

                </span>

                <span className="text-white">

                  Football

                </span>

              </div>

            </div>

          </div>

          {/* Overall Score */}

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-red-600/20 to-black p-8">

            <div className="flex items-center gap-4">

              <Activity
                className="text-red-500"
                size={28}
              />

              <h3 className="text-3xl text-white">

                Overall Score

              </h3>

            </div>

            <div className="mt-8 text-center">

              <h1 className="text-8xl font-bold text-red-500">

                98

              </h1>

              <p className="mt-3 uppercase tracking-[5px] text-gray-400">

                AI Rating

              </p>

            </div>

          </div>

        </motion.div>

        {/* CENTER */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl lg:col-span-2"
        >

          <div className="mb-8 flex items-center justify-between">

            <h3 className="text-3xl text-white">

              Performance Trend

            </h3>

            <TrendingUp className="text-red-500" />

          </div>

          <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" />

                <XAxis
                  dataKey="month"
                  stroke="#9ca3af"
                />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#dc2626"
                  strokeWidth={4}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

        </motion.div>

        {/* Bottom Cards */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="lg:col-span-3 grid gap-8 lg:grid-cols-2"
        >

          {/* Radar Chart */}

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

            <div className="mb-8 flex items-center gap-4">

              <Target
                size={26}
                className="text-red-500"
              />

              <h3 className="text-3xl text-white">

                Skill Distribution

              </h3>

            </div>

            <div className="h-[320px]">

              <ResponsiveContainer width="100%" height="100%">

                <RadarChart data={radarData}>

                  <PolarGrid />

                  <PolarAngleAxis
                    dataKey="subject"
                    stroke="#fff"
                  />

                  <Radar
                    dataKey="value"
                    stroke="#dc2626"
                    fill="#dc2626"
                    fillOpacity={0.45}
                  />

                </RadarChart>

              </ResponsiveContainer>

            </div>

          </div>

          {/* Metrics */}

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

            <div className="mb-8 flex items-center gap-4">

              <Activity
                size={26}
                className="text-red-500"
              />

              <h3 className="text-3xl text-white">

                Performance Metrics

              </h3>

            </div>

            <div className="space-y-8">

              {metrics.map((item) => (

                <div key={item.title}>

                  <div className="mb-2 flex justify-between">

                    <span className="text-white">

                      {item.title}

                    </span>

                    <span className="text-red-500">

                      {item.value}%

                    </span>

                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-white/10">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${item.value}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                      }}
                      className="h-full rounded-full bg-red-600"
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>

        </motion.div>
                {/* Recommendations & Recent Assessment */}

                <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 grid gap-8 lg:grid-cols-2 lg:col-span-3"
        >
          {/* AI Recommendations */}

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

            <div className="mb-8 flex items-center gap-4">

              <BrainCircuit
                size={26}
                className="text-red-500"
              />

              <h3 className="text-3xl text-white">

                AI Recommendations

              </h3>

            </div>

            <div className="space-y-5">

              {recommendations.map((item) => (

                <motion.div
                  key={item}
                  whileHover={{
                    x: 8,
                  }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-5"
                >

                  <CheckCircle2
                    size={22}
                    className="text-green-400"
                  />

                  <span className="text-gray-300">

                    {item}

                  </span>

                </motion.div>

              ))}

            </div>

          </div>

          {/* Recent Assessment */}

          <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-red-950/30 to-black p-8">

            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-3xl text-white">

                  Latest Assessment

                </h3>

                <p className="mt-2 text-gray-400">

                  Generated by AI Engine

                </p>

              </div>

              <ArrowUpRight
                size={34}
                className="text-red-500"
              />

            </div>

            <div className="mt-10 space-y-6">

              <div className="flex justify-between">

                <span className="text-gray-400">

                  Overall Score

                </span>

                <span className="text-2xl font-bold text-red-500">

                  98%

                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">

                  AI Confidence

                </span>

                <span className="text-green-400">

                  Excellent

                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">

                  Movement Quality

                </span>

                <span className="text-white">

                  Elite

                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-gray-400">

                  Injury Risk

                </span>

                <span className="text-yellow-400">

                  Low

                </span>

              </div>

            </div>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="mt-10 w-full rounded-full bg-red-600 py-4 text-lg font-semibold uppercase tracking-[2px] transition hover:bg-red-700"
            >

              Download Full Report

            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}