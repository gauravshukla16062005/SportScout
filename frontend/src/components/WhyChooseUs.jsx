import { motion } from "framer-motion";

import {
  BrainCircuit,
  Camera,
  BarChart3,
  Trophy,
  Zap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Explainable AI",
    desc: "Transparent AI predictions with detailed reasoning behind every assessment.",
  },
  {
    icon: Camera,
    title: "Computer Vision",
    desc: "Advanced body tracking using state-of-the-art pose estimation.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    desc: "Performance reports with strengths, weaknesses and improvement areas.",
  },
  {
    icon: Trophy,
    title: "Multi Sport",
    desc: "Football, Cricket, Badminton, Tennis, Volleyball and Swimming.",
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    desc: "Fast AI powered processing for instant athlete evaluation.",
  },
  {
    icon: ShieldCheck,
    title: "98% Accuracy",
    desc: "Reliable AI models trained for sports performance assessment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[#070707] py-28"
    >
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-red-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-600/40 bg-red-600/10 px-6 py-3">

            <Sparkles
              size={18}
              className="text-red-500"
            />

            <span className="text-sm uppercase tracking-[4px] text-white">

              Why SportsScout

            </span>

          </div>

          <h2 className="text-5xl leading-none md:text-7xl">

            Why Athletes

            <span className="block text-red-600">

              Choose Us

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Experience the future of sports talent assessment powered by
            Artificial Intelligence, Computer Vision and Explainable AI.

          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item,index)=>{

            const Icon=item.icon;

            return(
                <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40"
              >
                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-600/10 blur-[90px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-red-600/10 text-red-500 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">

                  <Icon size={38} />

                </div>

                {/* Title */}

                <h3 className="text-4xl leading-none text-white">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-6 leading-8 text-gray-400">

                  {item.desc}

                </p>

                {/* Bottom Line */}

                <div className="mt-8 h-[2px] w-12 rounded-full bg-red-600 transition-all duration-500 group-hover:w-full" />

              </motion.div>
                          );

                        })}
              
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
              
                        <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-red-600/20 blur-[140px]" />
              
                        <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
              
                          {/* Left */}
              
                          <div className="max-w-3xl">
              
                            <h2 className="text-5xl leading-none text-white md:text-6xl">
              
                              Trusted By
              
                              <span className="block text-red-600">
              
                                Future Champions
              
                              </span>
              
                            </h2>
              
                            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              
                              SportsScout combines Artificial Intelligence, Computer Vision,
                              Pose Estimation and Explainable AI to help athletes understand
                              their strengths, identify weaknesses and continuously improve
                              their performance.
              
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
              
                            Explore Features
              
                          </motion.button>
              
                        </div>
              
                      </motion.div>
              
                    </div>
              
                  </section>
                );
              }