"use client";

import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
      rounded-3xl
      p-8
      bg-gradient-to-br
      from-violet-900/40
      via-blue-900/20
      to-zinc-900
      border
      border-violet-500/20
      backdrop-blur-xl
      "
    >
      <h1 className="text-5xl font-bold">
        Welcome Back, Yash 👋
      </h1>

      <p className="mt-4 text-zinc-400 text-lg">
        🔥 15 Day Learning Streak
      </p>
    </motion.div>
  );
}