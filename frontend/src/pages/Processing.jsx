import { motion } from "framer-motion";
import {
  UploadCloud,
  ScanLine,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Processing() {
  const navigate = useNavigate();
  const { sport } = useParams();

  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Uploading Video",
      icon: UploadCloud,
    },
    {
      title: "Extracting Frames",
      icon: ScanLine,
    },
    {
      title: "AI Pose Detection",
      icon: Brain,
    },
    {
      title: "Generating Report",
      icon: CheckCircle2,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);

          setTimeout(() => {
            navigate("/report");
          }, 1500);

          return prev;
        }

        return prev + 1;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl rounded-[35px] border border-white/10 bg-white/[0.04] p-12 backdrop-blur-xl"
      >

        <h1 className="text-center text-5xl font-bold">

          SportsScout AI

        </h1>

        <p className="mt-5 text-center text-lg text-gray-400">

          Processing your

          <span className="mx-2 font-semibold capitalize text-red-500">

            {sport}

          </span>

          performance video...

        </p>

        <div className="mt-14 space-y-8">
        {steps.map((item, index) => {

const Icon = item.icon;

return (

  <motion.div
    key={item.title}
    initial={{ opacity: 0, x: -30 }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      delay: index * 0.2,
    }}
    className={`flex items-center justify-between rounded-3xl border p-6 transition-all duration-500 ${
      step >= index
        ? "border-red-500 bg-red-600/10"
        : "border-white/10 bg-white/[0.03]"
    }`}
  >

    <div className="flex items-center gap-5">

      <div
        className={`rounded-2xl p-4 ${
          step >= index
            ? "bg-red-600"
            : "bg-zinc-800"
        }`}
      >

        <Icon size={28} />

      </div>

      <div>

        <h2 className="text-2xl font-semibold">

          {item.title}

        </h2>

        <p className="mt-1 text-gray-400">

          {step > index
            ? "Completed"
            : step === index
            ? "Processing..."
            : "Waiting..."}

        </p>

      </div>

    </div>

    {step > index && (

      <CheckCircle2
        size={30}
        className="text-green-400"
      />

    )}

  </motion.div>

);

})}

<div className="mt-12">

<div className="h-4 overflow-hidden rounded-full bg-zinc-800">

  <motion.div
    animate={{
      width: `${(step + 1) * 25}%`,
    }}
    transition={{
      duration: 0.8,
    }}
    className="h-full rounded-full bg-red-600"
  />

</div>

<p className="mt-4 text-center text-gray-400">

  {(step + 1) * 25}% Completed

</p>

</div>
{steps.map((item, index) => {

const Icon = item.icon;

return (

  <motion.div
    key={item.title}
    initial={{ opacity: 0, x: -40 }}
    animate={{
      opacity: 1,
      x: 0,
    }}
    transition={{
      delay: index * 0.2,
    }}
    className={`flex items-center justify-between rounded-3xl border p-6 transition-all duration-500 ${
      step >= index
        ? "border-red-500 bg-red-600/10"
        : "border-white/10 bg-white/[0.03]"
    }`}
  >

    <div className="flex items-center gap-5">

      <div
        className={`rounded-2xl p-4 ${
          step >= index
            ? "bg-red-600"
            : "bg-zinc-800"
        }`}
      >

        <Icon
          size={28}
          className="text-white"
        />

      </div>

      <div>

        <h2 className="text-2xl font-semibold">

          {item.title}

        </h2>

        <p className="mt-2 text-gray-400">

          {step > index
            ? "Completed"
            : step === index
            ? "Processing..."
            : "Waiting..."}

        </p>

      </div>

    </div>

    {step > index && (

      <CheckCircle2
        size={30}
        className="text-green-400"
      />

    )}

  </motion.div>

);

})}

<div className="mt-12">

<div className="h-4 overflow-hidden rounded-full bg-zinc-800">

  <motion.div
    animate={{
      width: `${(step + 1) * 25}%`,
    }}
    transition={{
      duration: 0.7,
    }}
    className="h-full rounded-full bg-red-600"
  />

</div>

<p className="mt-4 text-center text-lg text-gray-400">

  {(step + 1) * 25}% Completed

</p>

</div>

<div className="mt-12 rounded-3xl border border-red-500/20 bg-red-600/10 p-8">

<h2 className="text-2xl font-semibold text-red-400">

  AI Engine Running

</h2>

<p className="mt-4 leading-8 text-gray-300">

  SportsScout AI is extracting frames,
  estimating body pose, evaluating biomechanics,
  calculating performance metrics and preparing
  your personalized athlete report.

</p>

</div>

        </div>
        </motion.div>

</section>
);
}