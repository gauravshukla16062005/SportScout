import { motion } from "framer-motion";
import {
  Trophy,
  Gauge,
  Zap,
  Activity,
  Footprints,
  Brain,
  Download,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const iconMap = {
  speed: Zap,
  agility: Activity,
  balance: Gauge,
  footwork: Footprints,
};

export default function Report() {
  const location = useLocation();

  /*
    Future backend integration:

    The backend should navigate or provide report data in a structure
    similar to this:

    {
      analysisId: "...",
      sport: "badminton",
      status: "completed",
      overallScore: 87,
      summary: "...",
      metrics: [
        {
          key: "speed",
          title: "Speed",
          value: 91
        }
      ],
      suggestions: [],
      strengths: [],
      improvements: [],
      downloadUrl: "..."
    }

    The frontend does not create any scores or recommendations.
  */

  const reportData = location.state?.reportData || null;

  const hasReport =
    reportData &&
    reportData.status === "completed";

  const getMetricIcon = (metric) => {
    const key =
      metric.key?.toLowerCase() ||
      metric.title?.toLowerCase() ||
      "";

    return iconMap[key] || Activity;
  };

  const getMetricValue = (value) => {
    if (
      value === undefined ||
      value === null
    ) {
      return null;
    }

    return Number(value);
  };

  return (
    <section className="min-h-screen bg-[#050505] px-6 py-10 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-7xl"
      >
        {/* Header */}

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              AI Performance Report
            </h1>

            <p className="mt-3 text-gray-400">
              SportsScout AI Assessment Summary
            </p>

            {reportData?.sport && (
              <p className="mt-2 capitalize text-red-400">
                Sport: {reportData.sport}
              </p>
            )}
          </div>

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600">
            <Trophy size={40} />
          </div>
        </div>
                {/* No Report Available */}
                {!hasReport && (
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-red-500/10">
                <AlertCircle
                  size={32}
                  className="text-red-400"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold">
                  No Analysis Report Available
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-gray-400">
                  No completed analysis result is currently available for this
                  report. Performance scores, metrics, strengths, and
                  recommendations will appear here after the SportsScout backend
                  completes the analysis.
                </p>
              </div>

            </div>

            <Link
              to="/dashboard"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              <ArrowLeft size={20} />
              Back to Dashboard
            </Link>

          </div>
        )}

        {/* Completed Report */}
        {hasReport && (
          <>
            {/* Overall Score */}
            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10">

              <h2 className="text-2xl font-semibold">
                Overall AI Score
              </h2>

              <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-center">

                <div className="flex h-40 w-40 shrink-0 items-center justify-center rounded-full border-8 border-red-600 text-5xl font-bold sm:text-6xl">
                  {reportData.overallScore !== undefined &&
                  reportData.overallScore !== null
                    ? `${reportData.overallScore}%`
                    : "N/A"}
                </div>

                <div>
                  <p className="text-lg text-gray-300">
                    {reportData.summary ||
                      "No summary was provided by the analysis backend."}
                  </p>

                  {reportData.analysisId && (
                    <p className="mt-4 text-sm text-gray-500">
                      Analysis ID: {reportData.analysisId}
                    </p>
                  )}
                </div>

              </div>

            </div>

            {/* Skill Metrics */}
            <div className="mt-10">

              <h2 className="text-3xl font-bold">
                Performance Metrics
              </h2>

              {Array.isArray(reportData.metrics) &&
              reportData.metrics.length > 0 ? (

                <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                  {reportData.metrics.map((metric) => {
                    const Icon = getMetricIcon(metric);
                    const value = getMetricValue(metric.value);

                    return (
                      <motion.div
                        key={metric.key || metric.title}
                        whileHover={{
                          y: -8,
                          scale: 1.02,
                        }}
                        className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
                      >

                        <div className="flex items-center justify-between">

                          <div className="rounded-2xl bg-red-600 p-4">
                            <Icon
                              size={30}
                              className="text-white"
                            />
                          </div>

                          <span className="text-4xl font-bold">
                            {value !== null
                              ? value
                              : "N/A"}
                          </span>

                        </div>

                        <h3 className="mt-6 text-2xl font-semibold">
                          {metric.title || "Unnamed Metric"}
                        </h3>

                        {value !== null && (
                          <div className="mt-5 h-3 overflow-hidden rounded-full bg-zinc-800">
                            <div
                              style={{
                                width: `${Math.max(
                                  0,
                                  Math.min(value, 100)
                                )}%`,
                              }}
                              className="h-full rounded-full bg-red-600"
                            />
                          </div>
                        )}

                      </motion.div>
                    );
                  })}

                </div>

              ) : (

                <p className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-gray-400">
                  No performance metrics were provided by the analysis backend.
                </p>

              )}

            </div>
                        {/* AI Suggestions */}
                        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-8">

<div className="flex items-center gap-4">

  <Brain
    size={36}
    className="text-red-500"
  />

  <h2 className="text-3xl font-bold">
    AI Suggestions
  </h2>

</div>

{Array.isArray(reportData.suggestions) &&
reportData.suggestions.length > 0 ? (

  <ul className="mt-8 space-y-5 text-lg text-gray-300">

    {reportData.suggestions.map(
      (suggestion, index) => (

        <li
          key={`${suggestion}-${index}`}
          className="flex items-start gap-3"
        >

          <CheckCircle2
            size={22}
            className="mt-1 shrink-0 text-green-400"
          />

          <span>
            {suggestion}
          </span>

        </li>

      )
    )}

  </ul>

) : (

  <p className="mt-6 text-gray-400">
    No AI suggestions were provided by the analysis backend.
  </p>

)}

</div>

{/* Strengths and Improvements */}
<div className="mt-12 grid gap-8 lg:grid-cols-2">

{/* Strengths */}
<div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8">

  <div className="flex items-center gap-3">

    <CheckCircle2
      size={30}
      className="text-green-400"
    />

    <h2 className="text-2xl font-bold text-green-400">
      Strengths
    </h2>

  </div>

  {Array.isArray(reportData.strengths) &&
  reportData.strengths.length > 0 ? (

    <ul className="mt-6 space-y-4 text-gray-300">

      {reportData.strengths.map(
        (strength, index) => (

          <li
            key={`${strength}-${index}`}
            className="flex items-start gap-3"
          >

            <CheckCircle2
              size={20}
              className="mt-1 shrink-0 text-green-400"
            />

            <span>
              {strength}
            </span>

          </li>

        )
      )}

    </ul>

  ) : (

    <p className="mt-6 text-gray-400">
      No strengths were provided by the analysis backend.
    </p>

  )}

</div>

{/* Areas to Improve */}
<div className="rounded-3xl border border-red-500/30 bg-red-500/10 p-8">

  <div className="flex items-center gap-3">

    <XCircle
      size={30}
      className="text-red-400"
    />

    <h2 className="text-2xl font-bold text-red-400">
      Areas to Improve
    </h2>

  </div>

  {Array.isArray(reportData.improvements) &&
  reportData.improvements.length > 0 ? (

    <ul className="mt-6 space-y-4 text-gray-300">

      {reportData.improvements.map(
        (improvement, index) => (

          <li
            key={`${improvement}-${index}`}
            className="flex items-start gap-3"
          >

            <XCircle
              size={20}
              className="mt-1 shrink-0 text-red-400"
            />

            <span>
              {improvement}
            </span>

          </li>

        )
      )}

    </ul>

  ) : (

    <p className="mt-6 text-gray-400">
      No improvement areas were provided by the analysis backend.
    </p>

  )}

</div>

</div>
            {/* AI Summary */}
            <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.04] p-8">

              <h2 className="text-3xl font-bold">
                AI Summary
              </h2>

              <p className="mt-6 text-lg leading-9 text-gray-300">
                {reportData.summary ||
                  "No AI summary was provided by the analysis backend."}
              </p>

            </div>

            {/* Action Buttons */}
            <div className="mt-14 flex flex-wrap gap-6">

              {reportData.downloadUrl ? (

                <a
                  href={reportData.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-700"
                >
                  <Download size={22} />

                  Download Report
                </a>

              ) : (

                <button
                  disabled
                  className="flex cursor-not-allowed items-center gap-3 rounded-full bg-gray-700 px-8 py-4 font-semibold text-gray-400"
                >
                  <Download size={22} />

                  Report Download Unavailable
                </button>

              )}

              <Link to="/dashboard">

                <button className="flex items-center gap-3 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10">

                  <ArrowLeft size={22} />

                  Back to Dashboard

                </button>

              </Link>

            </div>

          </>
        )}

      </motion.div>
    </section>
  );
}