import { motion } from "framer-motion";
import {
  User,
  Mail,
  ShieldCheck,
  History,
  Settings,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  const userName =
    user?.name ||
    user?.fullName ||
    null;

  const userEmail =
    user?.email ||
    null;

  return (
    <section className="min-h-screen bg-[#050505] px-6 py-10 text-white">

      <div className="mx-auto max-w-5xl">

        {/* Back Button */}

        <Link
          to="/dashboard"
          className="inline-flex items-center gap-3 text-gray-400 transition hover:text-red-500"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10"
        >

          <h1 className="text-4xl font-bold sm:text-5xl">
            My Profile
          </h1>

          <p className="mt-3 text-gray-400">
            Manage your SportsScout account and profile information.
          </p>

          {/* Profile Header */}

          <div className="mt-10 rounded-[30px] border border-white/10 bg-white/[0.04] p-8 sm:p-10">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-red-600">
                <User size={42} />
              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  {userName || "Profile Information Unavailable"}
                </h2>

                <p className="mt-2 text-gray-400">
                  {userEmail || "Email information unavailable"}
                </p>

              </div>

            </div>

          </div>
                    {/* Account Information */}

                    <div className="mt-8 grid gap-6 md:grid-cols-2">

<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">

  <div className="flex items-center gap-4">

    <div className="rounded-2xl bg-red-500/10 p-4">
      <User
        size={28}
        className="text-red-400"
      />
    </div>

    <div>
      <p className="text-sm uppercase tracking-[2px] text-gray-500">
        Full Name
      </p>

      <p className="mt-2 text-xl font-semibold">
        {userName || "Not available"}
      </p>
    </div>

  </div>

</div>

<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">

  <div className="flex items-center gap-4">

    <div className="rounded-2xl bg-red-500/10 p-4">
      <Mail
        size={28}
        className="text-red-400"
      />
    </div>

    <div className="min-w-0">
      <p className="text-sm uppercase tracking-[2px] text-gray-500">
        Email Address
      </p>

      <p className="mt-2 truncate text-xl font-semibold">
        {userEmail || "Not available"}
      </p>
    </div>

  </div>

</div>

</div>

{/* Account Status */}

<div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8">

<div className="flex items-start gap-5">

  <div className="rounded-2xl bg-red-500/10 p-4">
    <ShieldCheck
      size={30}
      className="text-red-400"
    />
  </div>

  <div>

    <h2 className="text-2xl font-semibold">
      Account Status
    </h2>

    <p className="mt-3 leading-7 text-gray-400">
      Account and authentication information will be managed through
      the SportsScout authentication backend. Profile details shown
      on this page are taken from the active user session.
    </p>

  </div>

</div>

</div>
          {/* Quick Actions */}

          <div className="mt-8 grid gap-6 md:grid-cols-2">

            <Link
              to="/history"
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-red-500/40 hover:bg-red-500/[0.04]"
            >

              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-red-500/10 p-4 transition group-hover:bg-red-600">
                  <History
                    size={30}
                    className="text-red-400 group-hover:text-white"
                  />
                </div>

                <div>

                  <h2 className="text-2xl font-semibold">
                    Assessment History
                  </h2>

                  <p className="mt-2 text-gray-400">
                    View your previous sports video analyses and reports.
                  </p>

                </div>

              </div>

            </Link>

            <Link
              to="/dashboard"
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-red-500/40 hover:bg-red-500/[0.04]"
            >

              <div className="flex items-center gap-5">

                <div className="rounded-2xl bg-red-500/10 p-4 transition group-hover:bg-red-600">
                  <Settings
                    size={30}
                    className="text-red-400 group-hover:text-white"
                  />
                </div>

                <div>

                  <h2 className="text-2xl font-semibold">
                    Dashboard
                  </h2>

                  <p className="mt-2 text-gray-400">
                    Upload a new performance video and start an AI assessment.
                  </p>

                </div>

              </div>

            </Link>

          </div>

          {/* Missing User Data Message */}

          {!user && (

            <div className="mt-8 flex gap-4 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">

              <AlertCircle
                size={28}
                className="shrink-0 text-yellow-400"
              />

              <div>

                <h3 className="text-lg font-semibold text-yellow-300">
                  User Information Not Loaded
                </h3>

                <p className="mt-2 leading-7 text-gray-300">
                  No active user information is currently available. Once the
                  authentication backend is connected, the logged-in user's
                  profile details will automatically appear here.
                </p>

              </div>

            </div>

          )}

        </motion.div>
      </div>
    </section>
  );
}