import { motion } from "framer-motion";
import {
  Upload,
  ScanFace,
  Activity,
  BrainCircuit,
  BarChart3,
  FileText,
  ChevronDown,
  Sparkles,
} from "lucide-react";

const pipeline = [
  {
    icon: Upload,
    title: "Upload Video",
    desc: "Athlete uploads a sports performance video.",
  },
  {
    icon: ScanFace,
    title: "Computer Vision",
    desc: "Frames are extracted and key body landmarks are detected.",
  },
  {
    icon: Activity,
    title: "Pose Estimation",
    desc: "Joint positions and movement patterns are analyzed.",
  },
  {
    icon: BrainCircuit,
    title: "AI Analysis",
    desc: "Machine Learning evaluates technique and biomechanics.",
  },
  {
    icon: BarChart3,
    title: "Performance Score",
    desc: "AI calculates strengths, weaknesses and ratings.",
  },
  {
    icon: FileText,
    title: "Final Report",
    desc: "Detailed report with recommendations is generated.",
  },
];

export default function AIPipeline() {
  return (
    <section
      id="pipeline"
      className="relative overflow-hidden bg-black py-28"
    >

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
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

              AI Processing Pipeline

            </span>

          </div>

          <h2 className="text-5xl leading-none md:text-7xl">

            How Our

            <span className="block text-red-600">

              AI Works

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">

            SportsScout combines Computer Vision, Pose Estimation,
            Biomechanics and Explainable AI to analyze athlete performance.

          </p>

        </motion.div>

        {/* Pipeline */}

        <div className="relative"></div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center">

{pipeline.map((step, index) => {

  const Icon = step.icon;

  return (

    <motion.div
      key={step.title}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="relative mb-10 w-full max-w-3xl"
    >

      {/* Card */}

      <motion.div
        whileHover={{
          scale: 1.02,
          y: -5,
        }}
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl transition-all duration-500 hover:border-red-500/40"
      >

        {/* Glow */}

        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-600/10 blur-[80px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center">

          {/* Step Number */}

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white shadow-[0_0_30px_rgba(220,38,38,.35)]">

            {index + 1}

          </div>

          {/* Icon */}

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-600/10 text-red-500">

            <Icon size={30} />

          </div>

          {/* Content */}

          <div className="flex-1">

            <h3 className="text-3xl text-white">

              {step.title}

            </h3>

            <p className="mt-3 text-lg leading-8 text-gray-400">

              {step.desc}

            </p>

          </div>

        </div>

      </motion.div>
                        {/* Connector */}

                        {index !== pipeline.length - 1 && (

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{
    delay: 0.4,
  }}
  className="my-6 flex justify-center"
>

  <motion.div
    animate={{
      y: [0, 8, 0],
    }}
    transition={{
      duration: 1.8,
      repeat: Infinity,
    }}
  >

    <ChevronDown
      size={40}
      className="text-red-500"
    />

  </motion.div>

</motion.div>

)}

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

          <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-red-600/20 blur-[140px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

            {/* Left */}

            <div className="max-w-3xl">

              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-600/30 bg-red-600/10 px-5 py-3">

                <BrainCircuit
                  size={18}
                  className="text-red-500"
                />

                <span className="text-sm uppercase tracking-[4px] text-red-300">

                  Explainable Artificial Intelligence

                </span>

              </div>

              <h2 className="text-5xl leading-none text-white md:text-6xl">

                Every Prediction

                <span className="block text-red-600">

                  Backed By AI

                </span>

              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

                Our AI doesn't just generate scores. It explains posture,
                movement efficiency, biomechanics, strengths, weaknesses and
                personalized improvement recommendations for every athlete.

              </p>

            </div>

            {/* Right */}

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="rounded-full bg-red-600 px-10 py-5 text-lg font-semibold uppercase tracking-[2px] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_40px_rgba(220,38,38,.45)]"
            >
              Learn More
            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}