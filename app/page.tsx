import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";

export default async function Home() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <HeroCard />
          </div>

          <ActivityCard />

          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              icon_name={course.icon_name}
            />
          ))}
        </div>
      </main>
    </div>
  );
}