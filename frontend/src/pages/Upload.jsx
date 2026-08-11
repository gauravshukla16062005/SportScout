import { useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UploadCloud,
  ArrowLeft,
  FileVideo,
  CheckCircle,
  Info,
} from "lucide-react";

export default function Upload() {
  const navigate = useNavigate();
  const { sport } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFile = (e) => {
    if (!e.target.files.length) return;

    const file = e.target.files[0];

    setSelectedFile(file);
    setUploading(true);
    setProgress(0);

    let value = 0;

    const interval = setInterval(() => {
      value += 5;

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          navigate(`/processing/${sport}`);
        }, 700);
      }
    }, 150);
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white">

      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Top */}

        <div className="mb-10 flex items-center justify-between">

          <Link
            to="/dashboard"
            className="flex items-center gap-3 text-gray-400 transition hover:text-red-500"
          >
            <ArrowLeft size={20} />

            Back to Dashboard
          </Link>

          <div className="rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2">

            <span className="uppercase tracking-[3px] text-red-400">
              {sport}
            </span>

          </div>

        </div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-6xl font-bold">

            Upload{" "}

            <span className="text-red-600">

              {sport}

            </span>{" "}

            Performance Video

          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">

            Upload your performance video and let SportsScout AI
            analyze your movement, posture and overall athlete
            performance.

          </p>

        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">

          {/* Left */}

          <div className="lg:col-span-2 rounded-[30px] border border-white/10 bg-white/5 p-10">

            <h2 className="mb-8 text-3xl font-semibold">

              Upload Video

            </h2>

            <label
              htmlFor="video"
              className="flex h-[340px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-red-500/30 transition hover:border-red-500 hover:bg-red-500/5"
            >

              <UploadCloud
                size={80}
                className="text-red-500"
              />

              <h3 className="mt-8 text-3xl font-semibold">

                Drag & Drop

              </h3>

              <p className="mt-3 text-gray-400">

                or click to browse files

              </p>

              <input
  ref={fileInputRef}
  id="video"
  type="file"
  accept="video/*"
  className="hidden"
  onChange={handleFile}
/>
            </label>
                        {/* Selected File */}

                        {selectedFile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 rounded-3xl border border-green-500/20 bg-green-500/10 p-6"
              >
                <div className="flex items-center gap-5">

                  <CheckCircle
                    size={38}
                    className="text-green-400"
                  />

                  <div>

                    <h3 className="text-xl font-semibold">
                      {selectedFile.name}
                    </h3>

                    <p className="mt-1 text-gray-400">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>

                  </div>

                </div>
              </motion.div>
            )}

            {/* Upload Progress */}

            {uploading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 rounded-3xl border border-red-500/20 bg-red-500/10 p-6"
              >

                <div className="mb-3 flex items-center justify-between">

                  <span className="font-semibold">
                    Uploading Video...
                  </span>

                  <span className="font-bold text-red-400">
                    {progress}%
                  </span>

                </div>

                <div className="h-3 w-full rounded-full bg-zinc-800">

                  <motion.div
                    className="h-3 rounded-full bg-red-600"
                    animate={{
                      width: `${progress}%`,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  />

                </div>

                <p className="mt-3 text-sm text-gray-400">

                  Preparing your video for AI analysis...

                </p>

              </motion.div>
            )}

          </div>

          {/* Right Panel */}

          <div className="space-y-8">

            <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">

              <h2 className="mb-6 text-2xl font-bold">

                Supported Formats

              </h2>

              {["MP4", "MOV", "AVI", "MKV"].map((item) => (

                <div
                  key={item}
                  className="mb-5 flex items-center gap-4"
                >

                  <FileVideo
                    size={24}
                    className="text-red-500"
                  />

                  <span className="text-lg">
                    {item}
                  </span>

                </div>

              ))}

            </div>
                        {/* AI Tips */}

                        <div className="rounded-[30px] border border-white/10 bg-white/5 p-8">

<div className="mb-6 flex items-center gap-3">

  <Info
    size={28}
    className="text-red-500"
  />

  <h2 className="text-2xl font-bold">
    AI Recording Tips
  </h2>

</div>

<ul className="space-y-4 text-gray-300">

  <li>
    • Record the full body of the player.
  </li>

  <li>
    • Keep the camera stable.
  </li>

  <li>
    • Record in good lighting conditions.
  </li>

  <li>
    • Make sure the player stays inside the frame.
  </li>

  <li>
    • Recommended resolution: 720p or above.
  </li>

</ul>

</div>

{/* Upload Button */}

<button
disabled={uploading}
onClick={() => navigate(`/processing/${sport}`)}
className={`w-full rounded-full py-5 text-lg font-semibold transition ${
  uploading
    ? "cursor-not-allowed bg-gray-700"
    : "bg-red-600 hover:bg-red-700"
}`}
>

{uploading
  ? "Uploading..."
  : "Upload & Analyze"}

</button>

{/* Coming Soon */}

<div className="rounded-[30px] border border-red-500/20 bg-red-500/10 p-8">

<h2 className="mb-4 text-2xl font-bold text-red-400">

  🚀 AI Processing

</h2>

<p className="leading-8 text-gray-300">

  In the next version this page will connect
  directly with the SportsScout AI backend.
  Your uploaded video will automatically be
  analyzed using YOLO, ByteTrack and RTMPose
  to generate a detailed athlete performance
  report.

</p>

</div>

</div>

</div>
</div>

</section>
);
}