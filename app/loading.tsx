export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">

        {/* Sidebar Skeleton */}
        <aside className="hidden md:block w-64 border-r border-zinc-800 p-6">
          <div className="h-8 w-28 rounded bg-zinc-900 animate-pulse mb-10" />

          <div className="space-y-4">
            <div className="h-12 rounded-xl bg-zinc-900 animate-pulse" />
            <div className="h-12 rounded-xl bg-zinc-900 animate-pulse" />
            <div className="h-12 rounded-xl bg-zinc-900 animate-pulse" />
            <div className="h-12 rounded-xl bg-zinc-900 animate-pulse" />
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="animate-pulse">

            {/* Hero */}
            <div className="mb-6 h-72 rounded-3xl bg-zinc-900" />

            {/* Stats */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-32 rounded-3xl bg-zinc-900" />
              <div className="h-32 rounded-3xl bg-zinc-900" />
              <div className="h-32 rounded-3xl bg-zinc-900" />
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <div className="h-56 rounded-3xl bg-zinc-900" />
              <div className="h-56 rounded-3xl bg-zinc-900" />
              <div className="h-56 rounded-3xl bg-zinc-900" />
              <div className="h-56 rounded-3xl bg-zinc-900" />
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}