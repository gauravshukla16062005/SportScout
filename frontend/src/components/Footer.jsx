import { motion } from "framer-motion";

import {
  Trophy,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const quickLinks = [
  "Home",
  "Sports",
  "About",
  "Dashboard",
  "Contact",
];

const sports = [
  "Football",
  "Cricket",
  "Badminton",
  "Tennis",
  "Volleyball",
  "Swimming",
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] pt-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                  {/* Brand */}

                  <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600">

                <Trophy size={28} className="text-white" />

              </div>

              <div>

                <h2 className="text-3xl text-white">

                  SPORTSSCOUT

                </h2>

                <p className="text-xs uppercase tracking-[4px] text-gray-500">

                  AI Talent Assessment

                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-gray-400">

              SportsScout is an AI-powered sports talent assessment platform
              helping athletes improve performance using Computer Vision,
              Pose Estimation and Explainable AI.

            </p>

            <div className="mt-8 flex gap-4">

              {[Github, Linkedin, Instagram].map((Icon, index) => (

                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all hover:border-red-500 hover:bg-red-600 hover:text-white"
                >

                  <Icon size={20} />

                </motion.a>

              ))}

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="mb-8 text-3xl text-white">

              Quick Links

            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (

                <a
                  key={item}
                  href="#"
                  className="block text-gray-400 transition hover:text-red-500"
                >

                  {item}

                </a>

              ))}

            </div>

          </motion.div>

          {/* Sports */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="mb-8 text-3xl text-white">

              Sports

            </h3>

            <div className="space-y-4">

              {sports.map((item) => (

                <p
                  key={item}
                  className="cursor-pointer text-gray-400 transition hover:text-red-500"
                >

                  {item}

                </p>

              ))}

            </div>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >

            <h3 className="mb-8 text-3xl text-white">

              Contact

            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <Mail className="mt-1 text-red-500" />

                <span className="text-gray-400">

                  support@sportscout.ai

                </span>

              </div>

              <div className="flex items-start gap-4">

                <Phone className="mt-1 text-red-500" />

                <span className="text-gray-400">

                  +91 98765 43210

                </span>

              </div>

              <div className="flex items-start gap-4">

                <MapPin className="mt-1 text-red-500" />

                <span className="text-gray-400">

                  Chennai, Tamil Nadu, India

                </span>

              </div>

            </div>

          </motion.div>
          </div>

{/* Newsletter */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="mt-24 rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
>

  <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

    <div>

      <h2 className="text-4xl text-white">

        Stay Updated

      </h2>

      <p className="mt-3 max-w-xl text-gray-400">

        Get the latest AI sports insights, feature updates and
        performance analytics directly in your inbox.

      </p>

    </div>

    <div className="flex w-full max-w-xl gap-4">

      <input
        type="email"
        placeholder="Enter your email..."
        className="flex-1 rounded-full border border-white/10 bg-black px-6 py-4 text-white outline-none focus:border-red-500"
      />

      <button
        className="rounded-full bg-red-600 px-8 py-4 font-semibold uppercase tracking-[2px] transition hover:bg-red-700"
      >

        Subscribe

      </button>

    </div>

  </div>

</motion.div>

{/* Bottom */}

<div className="mt-16 border-t border-white/10 py-8">

  <div className="flex flex-col items-center justify-between gap-5 text-center text-gray-500 md:flex-row">

    <p>

      © 2026 SportsScout. All Rights Reserved.

    </p>

    <p>

      Built with ❤️ using React, Framer Motion & AI

    </p>

  </div>

</div>

</div>

</footer>
);
}