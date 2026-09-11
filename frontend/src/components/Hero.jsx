import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  ChevronDown,
  Trophy,
  Target,
  Sparkles,
} from "lucide-react";

import heroImage from "../assets/images/hero-bg.jpg";

export default function Hero() {
  const scrollToSports = () => {
    document
      .getElementById("sports")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}

      <img
        src={heroImage}
        alt="SportsScout AI athlete assessment"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-center"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-red-950/30" />

      {/* Red Glow */}

      <div className="absolute -left-40 -top-60 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-700/20 blur-[120px]" />

      {/* Main Container */}

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-6 py-32 lg:px-10">

        {/* LEFT */}

        <div className="max-w-3xl">

          {/* AI Badge */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-600/60 bg-black/40 px-6 py-3 backdrop-blur-xl"
          >
            <Sparkles
              className="text-red-500"
              size={18}
            />

            <span className="text-sm uppercase tracking-[5px] text-white">
              AI Powered Sports Platform
            </span>

          </motion.div>

          {/* Main Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-6xl font-bold leading-[0.9] text-white md:text-7xl lg:text-9xl"
          >
            DISCOVER

            <br />

            YOUR{" "}

            <span className="text-red-600">
              SPORTS
            </span>

            <br />

            POTENTIAL
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-gray-300"
          >
            SportsScout is an AI-powered sports talent assessment platform
            designed to analyze athlete performance using Computer Vision,
            Pose Estimation and biomechanics-based analysis.
          </motion.p>
                    {/* Buttons */}

                    <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <motion.button
              type="button"
              onClick={scrollToSports}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]"
            >
              Start Assessment

              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </motion.button>

            <button
              type="button"
              disabled
              className="flex cursor-not-allowed items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg font-semibold text-gray-500 backdrop-blur-md"
            >
              <PlayCircle size={22} />

              Demo Coming Soon
            </button>
          </motion.div>

          {/* Platform Features */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-red-500">
                AI
              </h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                Video Analysis
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-red-500">
                CV
              </h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                Computer Vision
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-red-500">
                POSE
              </h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                Movement Analysis
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-red-500">
                AI
              </h2>

              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                Performance Report
              </p>
            </div>
          </motion.div>

        </div>
                {/* RIGHT SIDE */}

                <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden h-full w-[40%] items-center justify-center lg:flex"
        >
          {/* Top Card */}

          <div className="absolute right-10 top-40 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-red-600 p-3">

                <Target size={20} />

              </div>

              <div>

                <h3 className="text-xl font-bold">
                  AI Analysis
                </h3>

                <p className="text-sm text-gray-400">
                  Video-Based Assessment
                </p>

              </div>

            </div>

          </div>

          {/* Bottom Card */}

          <div className="absolute bottom-40 left-0 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-red-600 p-3">

                <Trophy size={20} />

              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Multi-Sport
                </h3>

                <p className="text-sm text-gray-400">
                  Assessment Platform
                </p>

              </div>

            </div>

          </div>

        </motion.div>
                {/* Scroll Indicator */}

                <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, 12, 0],
          }}
          transition={{
            delay: 1,
            duration: 1.8,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <button
            type="button"
            onClick={scrollToSports}
            className="flex flex-col items-center"
          >
            <span className="mb-3 text-xs uppercase tracking-[5px] text-gray-400">
              Scroll
            </span>

            <div className="flex h-14 w-8 items-start justify-center rounded-full border border-white/40 p-1">
              <motion.div
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
                className="h-3 w-3 rounded-full bg-red-600"
              />
            </div>

            <ChevronDown
              size={22}
              className="mt-3 text-red-500"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
}