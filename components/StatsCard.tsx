"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
}

export default function StatsCard({
  title,
  value,
  icon,
}: StatsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-5
      transition-all
      hover:border-violet-500/30
      hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
            {icon}
          </div>

          <span className="text-4xl font-bold">
            {value}
          </span>
        </div>

        <p className="mt-5 text-sm text-zinc-400">
          {title}
        </p>
      </div>
    </motion.article>
  );
}