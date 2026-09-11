import { motion } from "framer-motion";

export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`rounded-full bg-red-600 px-8 py-4 text-white font-semibold uppercase tracking-[2px] transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,.4)] ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}