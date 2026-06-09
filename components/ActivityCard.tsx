export default function ActivityCard() {
  return (
    <div className="rounded-3xl bg-zinc-900 p-6 border border-zinc-800">
      <h2 className="font-semibold mb-4">
        Learning Activity
      </h2>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => {
          const shades = [
            "bg-green-500/20",
            "bg-green-500/40",
            "bg-green-500/60",
            "bg-green-500/80",
          ];

          return (
            <div
              key={i}
              className={`h-4 w-4 rounded ${
                shades[i % 4]
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}