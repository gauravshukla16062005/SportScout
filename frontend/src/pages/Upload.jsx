import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UploadCloud,
  ArrowLeft,
  FileVideo,
  CheckCircle,
  Info,
  X,
  Play,
  AlertCircle,
} from "lucide-react";

const MAX_FILE_SIZE = 500 * 1024 * 1024;

const SUPPORTED_FORMATS = [
  "video/mp4",
  "video/quicktime",
  "video/x-msvideo",
  "video/x-matroska",
];

export default function Upload() {
  const navigate = useNavigate();
  const { sport } = useParams();

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    return () => {
      if (videoPreview) {
        URL.revokeObjectURL(videoPreview);
      }
    };
  }, [videoPreview]);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";

    const sizes = ["Bytes", "KB", "MB", "GB"];
    const index = Math.floor(Math.log(bytes) / Math.log(1024));

    return `${(bytes / Math.pow(1024, index)).toFixed(2)} ${
      sizes[index]
    }`;
  };

  const validateAndSelectFile = (file) => {
    setError("");

    if (!file) return;

    const isSupported =
      SUPPORTED_FORMATS.includes(file.type) ||
      /\.(mp4|mov|avi|mkv)$/i.test(file.name);

    if (!isSupported) {
      setError(
        "Please select a valid video file: MP4, MOV, AVI, or MKV."
      );
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Video size must be less than 500 MB.");
      return;
    }

    if (videoPreview) {
      URL.revokeObjectURL(videoPreview);
    }

    const previewUrl = URL.createObjectURL(file);

    setSelectedFile(file);
    setVideoPreview(previewUrl);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      validateAndSelectFile(file);
    }

    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      validateAndSelectFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleRemoveFile = () => {
    if (videoPreview) {
      URL.revokeObjectURL(videoPreview);
    }

    setSelectedFile(null);
    setVideoPreview(null);
    setError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      setError("Please select a video before continuing.");
      return;
    }

    navigate(`/processing/${sport}`, {
      state: {
        videoFile: selectedFile,
        videoName: selectedFile.name,
        videoSize: selectedFile.size,
        sport,
      },
    });
  };

  return (
    <section className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10"></div>
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
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Upload{" "}
            <span className="text-red-600">{sport}</span>{" "}
            Performance Video
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
            Upload your performance video and prepare it for SportsScout AI
            analysis.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">

          {/* Left Upload Panel */}
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-6 sm:p-10 lg:col-span-2">

            <h2 className="mb-8 text-3xl font-semibold">
              Upload Video
            </h2>

            {!selectedFile ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={handleChooseFile}
                className={`flex h-[340px] cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed transition ${
                  isDragging
                    ? "border-red-500 bg-red-500/10"
                    : "border-red-500/30 hover:border-red-500 hover:bg-red-500/5"
                }`}
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

                <p className="mt-3 text-sm text-gray-500">
                  Maximum file size: 500 MB
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-black/30"
              >
                {/* Video Preview */}
                <div className="relative aspect-video w-full bg-black">
                  <video
                    src={videoPreview}
                    controls
                    className="h-full w-full object-contain"
                  />

                  <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm text-white backdrop-blur-md">
                    <Play size={15} className="text-red-400" />
                    Video Preview
                  </div>
                </div>
                                {/* Selected File Details */}
                                <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/10">
                      <CheckCircle
                        size={28}
                        className="text-green-400"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-lg font-semibold">
                        {selectedFile.name}
                      </h3>

                      <p className="mt-1 text-sm text-gray-400">
                        {formatFileSize(selectedFile.size)}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handleChooseFile}
                      className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-red-500 hover:text-white"
                    >
                      Change
                    </button>

                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="flex items-center gap-2 rounded-full border border-red-500/30 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                    >
                      <X size={16} />
                      Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              id="video"
              type="file"
              accept=".mp4,.mov,.avi,.mkv,video/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-300"
              >
                <AlertCircle size={20} className="shrink-0" />

                <p className="text-sm">
                  {error}
                </p>
              </motion.div>
            )}
          </div>
                    {/* Right Panel */}
                    <div className="space-y-8">

{/* Supported Formats */}
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

{/* AI Recording Tips */}
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
    <li>• Record the full body of the player.</li>
    <li>• Keep the camera stable.</li>
    <li>• Record in good lighting conditions.</li>
    <li>• Make sure the player stays inside the frame.</li>
    <li>• Recommended resolution: 720p or above.</li>
  </ul>
</div>

{/* Continue Button */}
<button
  type="button"
  onClick={handleAnalyze}
  disabled={!selectedFile}
  className={`w-full rounded-full py-5 text-lg font-semibold transition ${
    selectedFile
      ? "bg-red-600 hover:bg-red-700"
      : "cursor-not-allowed bg-zinc-800 text-gray-500"
  }`}
>
  Continue to Analysis
</button>

{/* Backend Ready Information */}
<div className="rounded-[30px] border border-red-500/20 bg-red-500/10 p-8">
  <h2 className="mb-4 text-2xl font-bold text-red-400">
    AI Analysis
  </h2>

  <p className="leading-8 text-gray-300">
    Your selected video is ready to be sent to the analysis
    pipeline. Analysis progress and performance results will be
    provided by the SportsScout backend.
  </p>
</div>

</div>
</div>
</section>
);
}