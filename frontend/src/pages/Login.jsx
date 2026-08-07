import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import GlassCard from "../components/ui/GlassCard";

export default function Login() {
    const navigate = useNavigate();

    const location = useLocation();
    
    const { login } = useAuth();
    
    const from = location.state?.from?.pathname || "/dashboard"; 
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-red-700/10 blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md"
      >

        <GlassCard className="p-10">

          {/* Logo */}

          <div className="mb-10 text-center">

            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-[0_0_35px_rgba(220,38,38,.45)]">

              <Trophy
                size={40}
                className="text-white"
              />

            </div>

            <h1 className="text-5xl text-white">

              SPORTSSCOUT

            </h1>

            <p className="mt-3 text-gray-400">

              Welcome Back to AI Athlete Assessment

            </p>

          </div>

          {/* Login Form */}

          <div className="space-y-6">
          <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm text-gray-400">

                <input
                  type="checkbox"
                  className="accent-red-600"
                />

                Remember me

              </label>

              <button className="text-sm text-red-400 transition hover:text-red-300">

                Forgot Password?

              </button>

            </div>

            <Button className="w-full">

              Login

            </Button>

            {/* Divider */}

            <div className="relative py-2">

              <div className="absolute inset-0 flex items-center">

                <div className="w-full border-t border-white/10" />

              </div>

              <div className="relative flex justify-center">

                <span className="bg-[#050505] px-4 text-sm text-gray-500">

                  OR CONTINUE WITH

                </span>

              </div>

            </div>

            {/* Google */}

            <button className="w-full rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-white transition-all duration-300 hover:border-red-500 hover:bg-red-600/10">

              Continue with Google

            </button>

          </div>

          {/* Register */}

          <div className="mt-10 border-t border-white/10 pt-8 text-center">

            <p className="text-gray-400">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-semibold text-red-500 transition hover:text-red-400"
              >

                Create Account

              </Link>

            </p>

          </div>

        </GlassCard>

        {/* Back */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 transition hover:text-red-500"
          >

            ← Back to Home

          </Link>

        </motion.div>

      </motion.div>
    
    </section>
  );
}
        