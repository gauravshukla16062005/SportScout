import { motion } from "framer-motion";
import { ArrowRight, Camera, Sparkles } from "lucide-react";

import football from "../assets/images/football.jpg";
import cricket from "../assets/images/cricket.jpg";
import badminton from "../assets/images/badminton.jpg";
import tennis from "../assets/images/tennis.jpg";
import volleyball from "../assets/images/volleyball.jpg";
import swimming from "../assets/images/swimming.jpg";

const gallery = [
  {
    title: "Football",
    image: football,
  },
  {
    title: "Cricket",
    image: cricket,
  },
  {
    title: "Badminton",
    image: badminton,
  },
  {
    title: "Tennis",
    image: tennis,
  },
  {
    title: "Volleyball",
    image: volleyball,
  },
  {
    title: "Swimming",
    image: swimming,
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#060606] py-28"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-600/40 bg-red-600/10 px-6 py-3">

            <Camera
              size={18}
              className="text-red-500"
            />

            <span className="text-sm uppercase tracking-[4px] text-white">

              Athlete Gallery

            </span>

          </div>

          <h2 className="text-5xl leading-none md:text-7xl">

            Performance

            <span className="block text-red-600">

              In Action

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Explore athletes across different sports and discover
            how SportsScout analyzes movement, posture and
            performance using AI.

          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"></div>
        {gallery.map((item, index) => (

<motion.div
  key={item.title}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.7,
    delay: index * 0.1,
  }}
  whileHover={{
    y: -12,
  }}
  className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
>

  {/* Image */}

  <div className="relative h-[430px] overflow-hidden">

    <img
      src={item.image}
      alt={item.title}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
    />

    {/* Overlay */}

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

    {/* AI Badge */}

    <div className="absolute left-5 top-5 rounded-full border border-red-500/30 bg-red-600/20 px-4 py-2 backdrop-blur-xl">

      <div className="flex items-center gap-2">

        <Sparkles
          size={15}
          className="text-red-500"
        />

        <span className="text-xs uppercase tracking-[3px] text-white">

          AI Ready

        </span>

      </div>

    </div>

    {/* Bottom */}

    <div className="absolute bottom-0 left-0 right-0 p-8">

      <h3 className="text-5xl leading-none text-white">

        {item.title}

      </h3>

      <p className="mt-4 text-gray-300">

        AI Powered Athlete Analysis

      </p>

      <motion.button
        whileHover={{
          x: 5,
        }}
        className="mt-8 flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[2px] transition hover:bg-red-700"
      >

        Explore

        <ArrowRight size={18} />

      </motion.button>

    </div>

  </div>

  {/* Border Glow */}

  <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-red-500/0 transition-all duration-500 group-hover:border-red-500/40" />

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

  <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-red-600/20 blur-[140px]" />

  <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

    {/* Left */}

    <div className="max-w-3xl">

      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-600/30 bg-red-600/10 px-5 py-3">

        <Sparkles
          size={18}
          className="text-red-500"
        />

        <span className="text-sm uppercase tracking-[4px] text-red-300">

          AI Sports Analysis

        </span>

      </div>

      <h2 className="text-5xl leading-none text-white md:text-6xl">

        Ready To Join

        <span className="mt-2 block text-red-600">

          The Next Generation?

        </span>

      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

        Upload your sports performance video and let SportsScout
        analyze every movement using Artificial Intelligence,
        Computer Vision and Pose Estimation.

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

      Start Assessment

    </motion.button>

  </div>

</motion.div>

</div>

</section>
);
}