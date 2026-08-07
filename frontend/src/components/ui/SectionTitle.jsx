import { motion } from "framer-motion";

export default function SectionTitle({
  badge,
  title,
  highlight,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mb-20 max-w-3xl text-center"
    >
      <div className="mb-6 inline-flex rounded-full border border-red-600/30 bg-red-600/10 px-6 py-3">
        <span className="text-sm uppercase tracking-[4px] text-red-300">
          {badge}
        </span>
      </div>

      <h2 className="text-5xl md:text-7xl leading-none">
        {title}

        <span className="block text-red-600 mt-2">
          {highlight}
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}