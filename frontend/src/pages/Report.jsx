import { motion } from "framer-motion";
import {
  Trophy,
  Gauge,
  Zap,
  Activity,
  Footprints,
  Brain,
  Download,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

const scores = [
  {
    title: "Speed",
    value: 91,
    color: "bg-red-500",
    icon: Zap,
  },
  {
    title: "Agility",
    value: 89,
    color: "bg-blue-500",
    icon: Activity,
  },
  {
    title: "Balance",
    value: 93,
    color: "bg-green-500",
    icon: Gauge,
  },
  {
    title: "Footwork",
    value: 88,
    color: "bg-yellow-500",
    icon: Footprints,
  },
];

export default function Report() {
  return (
    <section className="min-h-screen bg-[#050505] px-8 py-10 text-white">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-7xl"
      >

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-bold">

              AI Performance Report

            </h1>

            <p className="mt-3 text-gray-400">

              SportsScout AI Assessment Summary

            </p>

          </div>

          <div className="rounded-full bg-red-600 p-5">

            <Trophy size={40} />

          </div>

        </div>

        {/* Overall Score */}

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-10">

          <h2 className="text-2xl font-semibold">

            Overall AI Score

          </h2>

          <div className="mt-8 flex items-center gap-10">

            <div className="flex h-40 w-40 items-center justify-center rounded-full border-8 border-red-600 text-6xl font-bold">

              92%

            </div>

            <div>

              <p className="text-lg text-gray-300">

                Excellent athletic performance.

              </p>

              <p className="mt-3 text-gray-400">

                Your movement quality, balance and agility are
                above average.

              </p>

            </div>

          </div>

        </div>

        {/* Skill Scores */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {scores.map((item) => {

const Icon = item.icon;

return (

  <motion.div
    key={item.title}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
  >

    <div className="flex items-center justify-between">

      <div
        className={`${item.color} rounded-2xl p-4`}
      >

        <Icon
          size={30}
          className="text-white"
        />

      </div>

      <span className="text-4xl font-bold">

        {item.value}

      </span>

    </div>

    <h3 className="mt-6 text-2xl font-semibold">

      {item.title}

    </h3>

    <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">

      <div
        style={{
          width: `${item.value}%`,
        }}
        className={`${item.color} h-full rounded-full`}
      />

    </div>

  </motion.div>

);

})}

{/* AI Suggestions */}

<div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-8">

<div className="flex items-center gap-4">

  <Brain
    size={36}
    className="text-red-500"
  />

  <h2 className="text-3xl font-bold">

    AI Suggestions

  </h2>

</div>

<ul className="mt-8 space-y-5 text-lg text-gray-300">

  <li>

    ✅ Improve knee bend while landing.

  </li>

  <li>

    ✅ Increase reaction speed during movement.

  </li>

  <li>

    ✅ Improve lateral footwork consistency.

  </li>

  <li>

    ✅ Maintain better body balance after jumps.

  </li>

</ul>

</div>

{/* Strengths */}

<div className="mt-12 grid gap-8 lg:grid-cols-2">

<div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8">

  <h2 className="text-2xl font-bold text-green-400">

    Strengths

  </h2>

  <ul className="mt-6 space-y-4 text-gray-300">

    <li>✔ Excellent balance</li>

    <li>✔ Good movement control</li>

    <li>✔ Stable posture</li>

    <li>✔ Strong athletic coordination</li>

  </ul>

</div>
<div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8">

<h2 className="text-2xl font-bold text-red-400">

  Areas to Improve

</h2>

<ul className="mt-6 space-y-4 text-gray-300">

  <li>• Improve explosive acceleration.</li>

  <li>• Reduce reaction time during direction changes.</li>

  <li>• Increase lower body strength.</li>

  <li>• Improve landing mechanics.</li>

</ul>

</div>

</div>

{/* Action Buttons */}

<div className="mt-14 flex flex-wrap gap-6">

<button className="flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700">

<Download size={22} />

Download Report

</button>

<Link to="/dashboard">

<button className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10">

  <ArrowLeft size={22} />

  Back to Dashboard

</button>

</Link>

</div>

{/* AI Summary */}

<div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-8">

<h2 className="text-3xl font-bold">

AI Summary

</h2>

<p className="mt-6 text-lg leading-9 text-gray-300">

Based on the uploaded performance video, SportsScout AI
estimates that the athlete demonstrates excellent balance,
above-average agility, and consistent body control.
The next improvement areas include reaction speed,
explosive movement, and efficient foot placement during
high-intensity actions.

</p>

</div>
        </div>
        </motion.div>

</section>
);
}