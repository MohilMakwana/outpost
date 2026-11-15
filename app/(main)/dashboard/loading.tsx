export default function DashboardLoading() {
  return (
    <div className="p-8">
      {/* Prompt Hero Skeleton */}
      <section className="mx-auto mb-14 w-full max-w-4xl px-6 py-10 text-center animate-pulse">
        <div className="mx-auto h-9 w-72 rounded-md bg-white/10" />
        <div className="mx-auto mt-3 h-4 w-96 rounded-md bg-white/5" />

        <div className="mx-auto mt-7 max-w-3xl rounded-3xl border border-white/10 bg-card/50 p-4">
          <div className="h-14 w-full rounded bg-white/5" />
          <div className="mt-3 flex items-center justify-between">
            <div className="h-3 w-36 rounded bg-white/5" />
            <div className="size-8 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="mx-auto mt-4 flex max-w-3xl justify-center gap-2">
          <div className="h-7 w-48 rounded-full bg-white/5" />
          <div className="h-7 w-40 rounded-full bg-white/5" />
          <div className="h-7 w-44 rounded-full bg-white/5" />
        </div>
      </section>

      {/* Recent Workspaces Skeleton */}
      <section className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="h-3 w-20 rounded bg-white/5" />
            <div className="h-6 w-36 rounded bg-white/10" />
          </div>
          <div className="h-8 w-32 rounded-md bg-white/10" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex h-36 flex-col justify-between rounded-md bg-muted/60 p-3.5 border border-white/5">
              <div className="space-y-2">
                <div className="h-4 w-3/4 rounded bg-white/10" />
                <div className="h-3 w-full rounded bg-white/5" />
              </div>
              <div className="flex items-center justify-between pt-2">
                <div className="h-3 w-20 rounded bg-white/5" />
                <div className="size-5 rounded-full bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

