import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does SportsScout analyze athlete performance?",
    answer:
      "SportsScout uses Artificial Intelligence, Computer Vision and Pose Estimation to evaluate athlete movements, biomechanics and overall sports performance from uploaded videos.",
  },
  {
    question: "Which sports are currently supported?",
    answer:
      "Currently SportsScout supports Football, Cricket, Badminton, Tennis, Volleyball and Swimming, with additional sports planned in future updates.",
  },
  {
    question: "How accurate is the AI assessment?",
    answer:
      "Our AI models are designed to provide highly reliable performance analysis using advanced machine learning techniques and explainable AI.",
  },
  {
    question: "Can coaches use SportsScout?",
    answer:
      "Yes. Coaches can use SportsScout to analyze player performance, compare progress over time and identify areas that require improvement.",
  },
  {
    question: "Will I receive a performance report?",
    answer:
      "Yes. Every completed assessment generates a detailed AI report including scores, strengths, weaknesses and improvement recommendations.",
  },
];

export default function FAQ() {

  const [active, setActive] = useState(null);

  return (

    <section
      id="faq"
      className="relative overflow-hidden bg-[#070707] py-28"
    >

      {/* Glow */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-red-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-20 text-center"
        >

          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-600/40 bg-red-600/10 px-6 py-3">

            <HelpCircle
              size={18}
              className="text-red-500"
            />

            <span className="text-sm uppercase tracking-[4px] text-white">

              Frequently Asked Questions

            </span>

          </div>

          <h2 className="text-5xl leading-none md:text-7xl">

            Got

            <span className="block text-red-600">

              Questions?

            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

            Everything you need to know about SportsScout,
            AI assessment and athlete performance analytics.

          </p>

        </motion.div>

        <div className="space-y-6"></div>
        {faqs.map((item, index) => {

const isOpen = active === index;

return (

  <motion.div
    key={index}
    layout
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
    }}
    className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl"
  >

    {/* Question */}

    <button
      onClick={() =>
        setActive(isOpen ? null : index)
      }
      className="flex w-full items-center justify-between px-8 py-7 text-left transition hover:bg-white/[0.03]"
    >

      <span className="pr-8 text-xl font-semibold text-white">

        {item.question}

      </span>

      <motion.div
        animate={{
          rotate: isOpen ? 180 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="text-red-500"
      >

        {isOpen ? (
          <Minus size={24} />
        ) : (
          <Plus size={24} />
        )}

      </motion.div>

    </button>

    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
          }}
        >

          <div className="border-t border-white/10 px-8 py-6">

            <p className="leading-8 text-gray-400">

              {item.answer}

            </p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  </motion.div>

);

})}
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

  <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-red-600/20 blur-[120px]" />

  <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

    {/* Left */}

    <div className="max-w-3xl">

      <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-red-600/30 bg-red-600/10 px-5 py-3">

        <HelpCircle
          size={18}
          className="text-red-500"
        />

        <span className="text-sm uppercase tracking-[4px] text-red-300">

          Need More Help?

        </span>

      </div>

      <h2 className="text-5xl leading-none text-white md:text-6xl">

        Still Have

        <span className="mt-2 block text-red-600">

          Questions?

        </span>

      </h2>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">

        Our AI experts are here to help. Contact us anytime and we'll
        guide you through SportsScout, AI assessment and athlete
        performance analytics.

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

      Contact Us

    </motion.button>

  </div>

</motion.div>

</div>

</section>
);
}