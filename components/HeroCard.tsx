"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-8
      "
    >
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative flex items-center justify-between">

        <div>
          <p className="text-zinc-400">
            Good Evening
          </p>

          <h1 className="mt-2 text-5xl font-bold">
            Yash 👋
          </h1>

          <p className="mt-4 max-w-md text-zinc-400">
            You're making excellent progress this week.
          </p>

          <button
            className="
            mt-6
            rounded-xl
            bg-violet-600
            px-5
            py-3
            font-medium
            "
          >
            Continue Learning
          </button>
        </div>

        <div className="hidden md:block text-right">
          <p className="text-zinc-400">
            Weekly Goal
          </p>

          <h2 className="text-5xl font-bold">
            72%
          </h2>

          <p className="text-sm text-green-400">
            +12% from last week
          </p>
        </div>

      </div>
    </motion.article>
  );
}