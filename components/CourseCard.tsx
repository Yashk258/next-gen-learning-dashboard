"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Palette,
  Sparkles,
} from "lucide-react";

type Props = {
  title: string;
  progress: number;
  icon_name: string;
};

const icons = {
  Code,
  Rocket,
  Palette,
  Sparkles,
};

export default function CourseCard({
  title,
  progress,
  icon_name,
}: Props) {
  const Icon =
    icons[icon_name as keyof typeof icons] || Code;

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
      rounded-3xl
      bg-zinc-900
      p-6
      border
      border-zinc-800
      hover:border-violet-500/50
      hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]
      "
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon
          size={24}
          className="text-violet-400"
        />

        <h3 className="font-semibold text-xl">
          {title}
        </h3>
      </div>

      <div className="mt-4 h-2 bg-zinc-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 1,
          }}
          className="
          h-full
          bg-gradient-to-r
          from-violet-500
          to-blue-500
          rounded-full
          "
        />
      </div>

      <p className="mt-3 text-zinc-400">
        {progress}% Complete
      </p>
    </motion.div>
  );
}