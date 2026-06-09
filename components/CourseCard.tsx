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

  const lessonsLeft = Math.max(
    1,
    Math.floor((100 - progress) / 5)
  );

  return (
        <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
            scale: 1.02,
            y: -2,
        }}
        transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 300,
            damping: 20,
        }}
        className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        min-h-[220px]
        hover:border-violet-500/40
        hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]
        "
        >
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-5">
          <div className="rounded-xl bg-violet-500/10 p-2">
            <Icon
              size={22}
              className="text-violet-400"
            />
          </div>

          <h3 className="font-semibold text-xl">
            {title}
          </h3>
        </div>

        <div className="mb-4">
          <div className="h-2 rounded-full bg-zinc-700 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 1,
              }}
              className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-violet-500
              to-blue-500
              "
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-zinc-400">
            {progress}% Complete
          </p>

          <span className="text-sm text-zinc-500">
            {lessonsLeft} lessons left
          </span>
        </div>
      </div>
    </motion.article>
  );
}