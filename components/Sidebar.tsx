"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Courses",
    icon: BookOpen,
  },
  {
    label: "Analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const [active, setActive] =
    useState("Dashboard");

  return (
    <aside
      className="
        hidden
        md:flex
        md:w-20
        lg:w-64
        flex-col
        border-r
        border-zinc-800
        bg-zinc-950
        p-4
        lg:p-6
        "
    >
        <h2 className="mb-10 text-center font-bold text-violet-400">
        <span className="hidden lg:block text-2xl">
            LearnX
        </span>

        <span className="lg:hidden text-xl">
            LX
        </span>
        </h2>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() =>
                setActive(item.label)
              }
              className="
                relative
                flex
                w-full
                items-center
                justify-center
                lg:justify-start
                gap-3
                rounded-xl
                px-4
                py-3
                "
            >
              {active === item.label && (
                <motion.div
                  layoutId="active-nav"
                  className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-violet-600
                  "
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}

              <Icon
                size={18}
                className="relative z-10"
              />

            <span
            className="
            hidden
            lg:block
            relative
            z-10
            font-medium
            "
            >
            {item.label}
            </span>
            </button>
          );
        })}
      </nav>

     <div className="mt-auto hidden lg:block">
        <div
          className="
          rounded-2xl
          border
          border-zinc-800
          bg-zinc-900
          p-4
          "
        >
          <p className="text-sm text-zinc-400">
            Learning Goal
          </p>

          <p className="mt-2 text-2xl font-bold">
            72%
          </p>
        </div>
      </div>
    </aside>
  );
}