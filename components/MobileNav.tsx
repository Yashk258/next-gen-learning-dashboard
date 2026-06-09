"use client";

import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

export default function MobileNav() {
  return (
    <nav
      className="
      fixed
      bottom-0
      left-0
      right-0
      z-50
      border-t
      border-zinc-800
      bg-zinc-950/95
      backdrop-blur
      md:hidden
      "
    >
      <div className="flex items-center justify-around py-3">
        <button className="flex flex-col items-center gap-1 text-violet-400">
          <LayoutDashboard size={20} />
          <span className="text-xs">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-zinc-400">
          <BookOpen size={20} />
          <span className="text-xs">Courses</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-zinc-400">
          <BarChart3 size={20} />
          <span className="text-xs">Stats</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-zinc-400">
          <Settings size={20} />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </nav>
  );
}