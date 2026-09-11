import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import { sportsData } from "../data/sportsData";

export default function SportsSection() {
  return (
    <section
      id="sports"
      className="relative overflow-hidden bg-[#050505] py-28"
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-600/40 bg-red-600/10 px-6 py-3">

            <Sparkles
              size={18}
              className="text-red-500"
            />

            <span className="text-sm uppercase tracking-[4px] text-white">
              AI Supported Sports
            </span>

          </div>

          <h2 className="text-5xl leading-none md:text-7xl">
            Choose Your

            <span className="block text-red-600">
              Favourite Sport
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Upload your sports performance video and let our AI evaluate
            posture, movement, agility and sport-specific skills using
            Computer Vision and Pose Estimation.
          </p>

        </motion.div>

        {/* Sports Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {sportsData.map((sport, index) => (

            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500"
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <img
                  src={sport.image}
                  alt={sport.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Badge */}

                <div
                  className={`absolute left-5 top-5 rounded-full bg-gradient-to-r ${sport.color} px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-white`}
                >

                  <div className="flex items-center gap-2">

                    <BrainCircuit size={15} />

                    {sport.assessment}

                  </div>

                </div>

                {/* Sport Name */}

                <div className="absolute bottom-6 left-6">

                  <h3 className="text-5xl leading-none text-white">
                    {sport.title}
                  </h3>

                </div>

              </div>

              {/* Content */}

              <div className="p-7">

                <p className="leading-8 text-gray-400">
                  {sport.description}
                </p>

                {/* Features */}

                <div className="mt-7 flex flex-wrap gap-3">

                  {sport.features.map((feature) => (

                    <span
                      key={feature}
                      className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[2px] text-red-300 transition-all duration-300 hover:bg-red-600 hover:text-white"
                    >
                      {feature}
                    </span>

                  ))}

                </div>

                {/* Bottom */}

                <div className="mt-8 flex justify-end">

                  {sport.assessment === "Available" ? (

                    <Link to={`/upload/${sport.slug}`}>

                      <motion.button
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[2px] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,.35)]"
                      >

                        Start Assessment

                        <ArrowRight
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />

                      </motion.button>

                    </Link>

                  ) : (

                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[2px] text-gray-500"
                    >
                      Coming Soon
                    </button>

                  )}

                </div>

              </div>

              {/* Hover Border */}

              <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-red-500/0 transition-all duration-500 group-hover:border-red-500/40" />

              {/* Bottom Glow */}

              <div className="pointer-events-none absolute -bottom-28 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-600/20 blur-[80px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-24 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-red-950/40 via-black to-black p-10 lg:p-16"
        >

          {/* Glow */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Left */}

            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-600/30 bg-red-600/10 px-5 py-3">

                <Sparkles
                  size={18}
                  className="text-red-500"
                />

                <span className="text-sm uppercase tracking-[4px] text-red-300">
                  AI Powered Assessment
                </span>

              </div>

              <h2 className="text-5xl leading-none text-white md:text-6xl">

                Ready To Become

                <span className="block text-red-600">
                  The Next Champion?
                </span>

              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                Let SportsScout analyze your performance using Artificial
                Intelligence, Pose Estimation and Computer Vision to discover
                your strengths and unlock your full athletic potential.
              </p>

            </div>

            {/* Right */}

            <a href="#sports">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group flex items-center gap-4 rounded-full bg-red-600 px-10 py-5 text-lg font-semibold uppercase tracking-[2px] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_35px_rgba(220,38,38,.45)]"
              >

                Start Assessment

                <ChevronRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </motion.button>

            </a>

          </div>

        </motion.div>

      </div>

    </section>
  );
}