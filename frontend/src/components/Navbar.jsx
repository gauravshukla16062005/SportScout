import { useEffect, useState } from "react";
import { Menu, X, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "Sports", path: "#sports" },
  { title: "Dashboard", path: "/dashboard" },
  { title: "About", path: "#about" },
  { title: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 shadow-[0_0_30px_rgba(220,38,38,.45)]">
              <Trophy size={24} />
            </div>

            <div>
              <h2 className="text-2xl tracking-wider text-white">
                SPORTSSCOUT
              </h2>

              <p className="text-xs uppercase tracking-[4px] text-gray-400">
                AI Talent Assessment
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">

          {navLinks.map((item) =>

            item.path.startsWith("#") ? (

              <a
                key={item.title}
                href={item.path}
                className="relative text-sm uppercase tracking-[3px] text-white transition hover:text-red-500 group"
              >
                {item.title}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>

              </a>

            ) : (

              <Link
                key={item.title}
                to={item.path}
                className="relative text-sm uppercase tracking-[3px] text-white transition hover:text-red-500 group"
              >
                {item.title}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-red-600 transition-all duration-300 group-hover:w-full"></span>

              </Link>

            )

          )}

          <Link
            to="/login"
            className="text-sm uppercase tracking-[3px] text-white transition hover:text-red-500"
          >
            Login
          </Link>

          <Link to="/login">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[2px] transition hover:bg-red-700"
            >
              Start Assessment
            </motion.button>

          </Link>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden"
          >

            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8">

              {navLinks.map((item) =>

                item.path.startsWith("#") ? (

                  <a
                    key={item.title}
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg uppercase tracking-[3px] text-white hover:text-red-500"
                  >
                    {item.title}
                  </a>

                ) : (

                  <Link
                    key={item.title}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg uppercase tracking-[3px] text-white hover:text-red-500"
                  >
                    {item.title}
                  </Link>

                )

              )}

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-lg uppercase tracking-[3px] text-white hover:text-red-500"
              >
                Login
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                <button className="w-full rounded-full bg-red-600 py-4 font-semibold uppercase tracking-[2px] hover:bg-red-700">
                  Start Assessment
                </button>
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}