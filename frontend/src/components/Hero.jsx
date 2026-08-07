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
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}

      <img
        src={heroImage}
        alt="SportsScout"
        className="absolute inset-0 h-full w-full object-cover object-center scale-105"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75"></div>

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-red-950/30"></div>

      {/* Red Glow */}

      <div className="absolute -top-60 -left-40 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[150px]"></div>

      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-700/20 blur-[120px]"></div>

      {/* Main Container */}

      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* LEFT */}

        <div className="max-w-3xl">

          {/* AI Badge */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-600/60 bg-black/40 px-6 py-3 backdrop-blur-xl"
          >
            <Sparkles className="text-red-500" size={18} />

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
            designed to evaluate athletes using Computer Vision, Pose
            Estimation, Biomechanics and Explainable AI.
            <br />
            <br />
            Upload your sports performance video and receive an intelligent
            analysis report within minutes.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <button className="group flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,.45)]">

              Start Assessment

              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />

            </button>

            <button className="group flex items-center gap-3 rounded-full border border-white/50 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black">

              <PlayCircle size={22} />

              Watch Demo

            </button>

          </motion.div>
                    {/* Hero Statistics */}

                    <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-4"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-red-500">1000+</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                Athletes
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-red-500">98%</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                AI Accuracy
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-red-500">08</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                Sports
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-4xl font-bold text-red-500">01</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">
                Live Assessment
              </p>
            </div>
          </motion.div>

        </div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:flex h-full w-[40%] items-center justify-center"
        >
          {/* Top Card */}

          <div className="absolute top-40 right-10 rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="rounded-full bg-red-600 p-3">

                <Target size={20} />

              </div>

              <div>

                <h3 className="text-xl font-bold">98%</h3>

                <p className="text-sm text-gray-400">
                  Prediction Accuracy
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
                  Badminton
                </h3>

                <p className="text-sm text-gray-400">
                  Available Now
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
          <div className="flex flex-col items-center">

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

          </div>
        </motion.div>

      </div>
    </section>
  );
}