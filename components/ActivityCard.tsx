"use client";

import { motion } from "framer-motion";

export default function ActivityCard() {

  const activity = [
    1, 2, 4, 3, 1, 2, 3,
    3, 1, 2, 3, 4, 1, 2,
    2, 4, 1, 3, 2, 4, 1,
    3, 2, 4, 1, 2, 3, 4,
    1, 2, 3, 4, 2, 3, 4,
  ];

  const shades = [
    "bg-zinc-800",
    "bg-green-500/30",
    "bg-green-500/50",
    "bg-green-500/70",
    "bg-green-500",
  ];

  return (
        <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15,
        }}
        className="
        h-full
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-6
        "
        >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Learning Activity
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Last 5 weeks
        </p>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {activity.map((level, index) => (
          <div
            key={index}
            className={`
              h-5
              w-5
              rounded-md
              transition-all
              ${shades[level]}
            `}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between text-xs text-zinc-500">
        <span>Less</span>

        <div className="flex gap-2">
          {shades.map((shade, i) => (
            <div
              key={i}
              className={`h-3 w-3 rounded ${shade}`}
            />
          ))}
        </div>

        <span>More</span>
      </div>
    </motion.section>
  );
}