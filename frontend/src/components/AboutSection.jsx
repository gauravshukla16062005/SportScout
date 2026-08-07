import { motion } from "framer-motion";
import {
  Trophy,
  Target,
  Eye,
  Sparkles,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    number: "1000+",
    label: "Athletes Analyzed",
  },
  {
    number: "98%",
    label: "AI Accuracy",
  },
  {
    number: "6",
    label: "Supported Sports",
  },
  {
    number: "24/7",
    label: "AI Availability",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070707] py-28"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-600/40 bg-red-600/10 px-6 py-3">

            <Sparkles
              size={18}
              className="text-red-500"
            />

            <span className="text-sm uppercase tracking-[4px] text-white">

              About SportsScout

            </span>

          </div>

          <h2 className="text-5xl leading-none md:text-7xl">

            Revolutionizing

            <span className="block text-red-600">

              Sports Analytics

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            SportsScout combines Artificial Intelligence,
            Computer Vision and Pose Estimation to help athletes
            unlock their true potential through data-driven analysis.

          </p>

        </motion.div>

        {/* Content */}

        <div className="grid items-center gap-20 lg:grid-cols-2">
                  {/* LEFT SIDE */}

                  <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Main Circle */}

            <div className="relative flex h-[500px] w-[500px] items-center justify-center rounded-full border border-red-500/20 bg-gradient-to-br from-red-600/10 via-black to-black">

              {/* Glow */}

              <div className="absolute h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[90px]" />

              {/* Center Icon */}

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-red-600 shadow-[0_0_45px_rgba(220,38,38,.45)]"
              >

                <Trophy
                  size={70}
                  className="text-white"
                />

              </motion.div>

              {/* Card 1 */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute left-0 top-12 rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-xl"
              >

                <BrainCircuit
                  className="mb-3 text-red-500"
                  size={34}
                />

                <h3 className="text-2xl text-white">

                  AI Powered

                </h3>

                <p className="mt-2 text-gray-400">

                  Explainable AI Engine

                </p>

              </motion.div>

              {/* Card 2 */}

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                }}
                className="absolute right-0 bottom-12 rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-xl"
              >

                <Target
                  className="mb-3 text-red-500"
                  size={34}
                />

                <h3 className="text-2xl text-white">

                  Accuracy

                </h3>

                <p className="mt-2 text-gray-400">

                  98% Performance Score

                </p>

              </motion.div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h2 className="text-5xl leading-none text-white">

              Building The Future

              <span className="mt-2 block text-red-600">

                Of Athlete Intelligence

              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">

              SportsScout leverages Artificial Intelligence,
              Computer Vision, Pose Estimation and Biomechanics
              to evaluate athlete performance with precision.

              Our platform transforms ordinary sports videos
              into meaningful insights, helping athletes,
              coaches and academies make smarter decisions.

            </p>

            {/* Cards */}

            <div className="mt-10 space-y-5">
                              {/* Mission */}

              <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">

<div className="flex items-start gap-5">

  <div className="rounded-2xl bg-red-600 p-4">

    <Target size={28} className="text-white" />

  </div>

  <div>

    <h3 className="text-3xl text-white">

      Our Mission

    </h3>

    <p className="mt-3 leading-8 text-gray-400">

      Empower athletes with AI-driven performance insights
      that improve technique, accelerate growth and unlock
      hidden potential using objective data instead of
      subjective judgement.

    </p>

  </div>

</div>

</div>

{/* Vision */}

<div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">

<div className="flex items-start gap-5">

  <div className="rounded-2xl bg-red-600 p-4">

    <Eye size={28} className="text-white" />

  </div>

  <div>

    <h3 className="text-3xl text-white">

      Our Vision

    </h3>

    <p className="mt-3 leading-8 text-gray-400">

      Build the world's most trusted AI sports intelligence
      platform where every athlete receives personalized,
      explainable and unbiased performance evaluation.

    </p>

  </div>

</div>

</div>

</div>

{/* Statistics */}

<div className="mt-12 grid grid-cols-2 gap-5">

{stats.map((item) => (

<motion.div
  key={item.label}
  whileHover={{
    y: -6,
    scale: 1.03,
  }}
  className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-xl"
>

  <h3 className="text-5xl font-bold text-red-500">

    {item.number}

  </h3>

  <p className="mt-3 text-sm uppercase tracking-[3px] text-gray-400">

    {item.label}

  </p>

</motion.div>

))}

</div>

{/* Features */}

<div className="mt-12 space-y-4">

{[
"AI Powered Performance Assessment",
"Computer Vision & Pose Estimation",
"Biomechanics Based Analysis",
"Personalized Performance Reports",
].map((feature) => (

<div
  key={feature}
  className="flex items-center gap-4"
>

  <CheckCircle2
    size={22}
    className="text-red-500"
  />

  <span className="text-lg text-gray-300">

    {feature}

  </span>

</div>

))}            </div>

</motion.div>

</div>

{/* Bottom CTA */}

<motion.div
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="relative mt-24 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-red-950/40 via-black to-black p-10 lg:p-16"
>

{/* Glow */}

<div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]" />

<div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

  {/* Left */}

  <div className="max-w-3xl">

    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-600/30 bg-red-600/10 px-5 py-3">

      <BrainCircuit
        size={18}
        className="text-red-500"
      />

      <span className="text-sm uppercase tracking-[4px] text-red-300">

        Next Generation Sports Intelligence

      </span>

    </div>

    <h2 className="text-5xl leading-none text-white md:text-6xl">

      Ready To Experience

      <span className="mt-2 block text-red-600">

        AI Powered Scouting?

      </span>

    </h2>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

      Join the future of sports talent assessment with intelligent
      performance analysis, biomechanics tracking and personalized
      athlete recommendations powered by Artificial Intelligence.

    </p>

  </div>

  {/* Right */}

  <motion.button
    whileHover={{
      scale: 1.05,
    }}
    whileTap={{
      scale: 0.95,
    }}
    className="rounded-full bg-red-600 px-10 py-5 text-lg font-semibold uppercase tracking-[2px] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_40px_rgba(220,38,38,.45)]"
  >

    Explore Platform

  </motion.button>

</div>

</motion.div>
</div>
</section>
);
}