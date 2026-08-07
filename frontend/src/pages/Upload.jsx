import { motion } from "framer-motion";
import {
  UploadCloud,
  ArrowLeft,
  FileVideo,
  CheckCircle,
  Info,
} from "lucide-react";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

export default function Upload() {
    const navigate = useNavigate();

  const { sport } = useParams();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFile = (e) => {

    if (e.target.files.length > 0) {

      setSelectedFile(e.target.files[0]);

    }

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

          <div className="rounded-full border border-red-500/30 bg-red-600/10 px-5 py-2">

            <span className="uppercase tracking-[3px] text-red-400">

              {sport}

            </span>

          </div>

        </div>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <h1 className="text-6xl font-bold">

            Upload

            <span className="text-red-600">

              {" "}

              {sport}

            </span>

            {" "}Performance Video

          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">

            Upload your performance video and let SportsScout AI
            analyze your movement, biomechanics and overall
            athletic performance.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="mt-14 grid gap-10 lg:grid-cols-3">

          {/* Upload Card */}

          <div className="lg:col-span-2 rounded-[30px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">

            <h2 className="mb-8 text-3xl font-semibold">

              Upload Video

            </h2>

            <label
              htmlFor="video"
              className="flex h-[350px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-red-500/30 transition hover:border-red-500 hover:bg-red-600/5"
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
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="mt-8 rounded-3xl border border-green-500/20 bg-green-500/10 p-6"
>

  <div className="flex items-center gap-5">

    <CheckCircle
      size={35}
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

<button
  onClick={() => navigate(`/processing/${sport}`)}
  className="mt-10 w-full rounded-full bg-red-600 py-5 text-lg font-semibold transition hover:bg-red-700"
>
  Upload & Analyze
</button>
</div>

{/* Right Panel */}

<div className="space-y-8">

{/* Supported Formats */}

<div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

<h2 className="mb-6 text-2xl font-semibold">

  Supported Formats

</h2>

<div className="space-y-4">

  {["MP4", "MOV", "AVI", "MKV"].map((item) => (

    <div
      key={item}
      className="flex items-center gap-4"
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

</div>

{/* AI Tips */}

<div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">

<div className="mb-5 flex items-center gap-3">

  <Info
    size={26}
    className="text-red-500"
  />

  <h2 className="text-2xl font-semibold">

    AI Recording Tips

  </h2>

</div>

<ul className="space-y-4 text-gray-400">

  <li>• Record in good lighting.</li>

  <li>• Keep full body visible.</li>

  <li>• Camera should remain stable.</li>

  <li>• Upload original HD quality video.</li>

  <li>• Perform only one athlete at a time.</li>

</ul>

</div>

{/* Coming Soon */}

<div className="rounded-[30px] border border-red-500/20 bg-red-600/10 p-8">

<h3 className="text-2xl font-semibold text-red-400">

  🚀 AI Processing

</h3>

<p className="mt-4 leading-8 text-gray-300">

  In the next step this page will connect directly
  with our Python AI backend, perform pose estimation,
  biomechanics analysis and automatically generate
  an athlete performance report.

</p>

</div>

</div>

</div>

</div>

</section>

);

}