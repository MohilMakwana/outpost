export default function WorkspacesLoading() {
  return (
    <div className="p-8">
      {/* Header Skeleton */}
      <div className="mb-6 flex items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="h-4 w-24 rounded bg-white/5" />
          <div className="h-8 w-44 rounded bg-white/10" />
        </div>
        <div className="h-9 w-36 rounded-md bg-white/10" />
      </div>

      {/* Kanban Board Columns Skeleton */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 animate-pulse">
        {["Planning", "In Progress", "In Review", "Done"].map((col) => (
          <div key={col} className="flex flex-col rounded-lg bg-white/3 p-2">
            <div className="flex items-center justify-between px-2 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                {col}
              </span>
              <div className="h-4 w-5 rounded bg-white/5" />
            </div>
            <div className="flex min-h-60 flex-col gap-2 pt-2">
              {[1, 2].map((card) => (
                <div
                  key={card}
                  className="flex h-36 flex-col justify-between rounded-md bg-muted/60 p-3.5 border border-white/5"
                >
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 rounded bg-white/10" />
                    <div className="h-3 w-full rounded bg-white/5" />
                    <div className="h-3 w-1/2 rounded bg-white/5" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="h-3 w-20 rounded bg-white/5" />
                    <div className="size-5 rounded-full bg-white/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

