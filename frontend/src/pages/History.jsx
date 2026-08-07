import { motion } from "framer-motion";
import {
  History,
  Trophy,
  Calendar,
  Search,
  Eye,
  Download,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";

const historyData = [
  {
    id: 1,
    sport: "Badminton",
    score: "92%",
    date: "07 Aug 2026",
  },
  {
    id: 2,
    sport: "Football",
    score: "88%",
    date: "05 Aug 2026",
  },
  {
    id: 3,
    sport: "Cricket",
    score: "90%",
    date: "02 Aug 2026",
  },
];

export default function HistoryPage() {
  return (
    <section className="min-h-screen bg-[#050505] px-8 py-10 text-white">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-7xl"
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-5xl font-bold">

              Upload History

            </h1>

            <p className="mt-3 text-gray-400">

              View all previously analyzed sports videos.

            </p>

          </div>

          <div className="rounded-full bg-red-600 p-5">

            <History size={38} />

          </div>

        </div>

        {/* Search */}

        <div className="mt-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search by sport..."
            className="w-full bg-transparent outline-none"
          />

        </div>

        {/* Stats */}

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">

            <Upload
              size={35}
              className="text-red-500"
            />

            <h2 className="mt-5 text-4xl font-bold">

              3

            </h2>

            <p className="mt-2 text-gray-400">

              Total Uploads

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">

            <Trophy
              size={35}
              className="text-yellow-500"
            />

            <h2 className="mt-5 text-4xl font-bold">

              92%

            </h2>

            <p className="mt-2 text-gray-400">

              Best Score

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">

            <Calendar
              size={35}
              className="text-green-500"
            />

            <h2 className="mt-5 text-4xl font-bold">

              07 Aug

            </h2>

            <p className="mt-2 text-gray-400">

              Last Upload

            </p>

          </div>

        </div>

        {/* History Cards */}

        <div className="mt-12 space-y-6">
        {historyData.map((item) => (

<motion.div
  key={item.id}
  whileHover={{
    y: -5,
    scale: 1.01,
  }}
  className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
>

  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <h2 className="text-3xl font-bold">

        {item.sport}

      </h2>

      <p className="mt-3 text-gray-400">

        Uploaded on {item.date}

      </p>

    </div>

    <div className="flex items-center gap-8">

      <div>

        <p className="text-sm uppercase tracking-[3px] text-gray-400">

          Score

        </p>

        <h3 className="mt-2 text-4xl font-bold text-red-500">

          {item.score}

        </h3>

      </div>

      <Link to="/report">

        <button className="flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700">

          <Eye size={20} />

          View Report

        </button>

      </Link>

      <button className="flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:bg-white/10">

        <Download size={20} />

        Download

      </button>

    </div>

  </div>

</motion.div>

))}

<div className="mt-14 text-center">

<Link to="/dashboard">

  <button className="rounded-full bg-red-600 px-10 py-4 text-lg font-semibold transition hover:bg-red-700">

    Back to Dashboard

  </button>

</Link>

</div>
        </div>
        </motion.div>

</section>
);
}