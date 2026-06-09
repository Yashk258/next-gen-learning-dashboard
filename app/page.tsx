import { supabase } from "@/lib/supabase";

import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";
import StatsCard from "@/components/StatsCard";
import StaggerItem from "@/components/StaggerItem";

import {
  BookOpen,
  Clock3,
  Flame,
} from "lucide-react";

export default async function Home() {
  const {
    data: courses,
    error,
  } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-red-400">
        Failed to load courses.
      </main>
    );
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-6 pb-24 md:pb-6">
        <div className="grid grid-cols-12 gap-6">

          {/* Hero */}
          <div className="col-span-12 lg:col-span-8">
            <HeroCard />
          </div>

          {/* Activity */}
          <div className="col-span-12 lg:col-span-4 lg:row-span-2">
            <ActivityCard />
          </div>

          {/* Stats */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <StatsCard
                title="Active Courses"
                value="4"
                icon={<BookOpen size={20} />}
              />

              <StatsCard
                title="Learning Hours"
                value="68h"
                icon={<Clock3 size={20} />}
              />

              <StatsCard
                title="Current Streak"
                value="15"
                icon={<Flame size={20} />}
              />

            </div>
          </div>

          {/* Courses */}
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {courses?.map((course) => (
                <CourseCard
                  key={course.id}
                  title={course.title}
                  progress={course.progress}
                  icon_name={course.icon_name}
                />
              ))}

            </div>
          </div>

        </div>
      </main>

      <MobileNav />
    </div>
  );
}