export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-10 text-violet-400">
        LearnX
      </h2>

      <nav className="space-y-4">
        <div className="p-3 rounded-xl bg-violet-600 font-medium">
          Dashboard
        </div>

        <div className="p-3 rounded-xl hover:bg-zinc-800 transition">
          Courses
        </div>

        <div className="p-3 rounded-xl hover:bg-zinc-800 transition">
          Analytics
        </div>

        <div className="p-3 rounded-xl hover:bg-zinc-800 transition">
          Settings
        </div>
      </nav>
    </aside>
  );
}