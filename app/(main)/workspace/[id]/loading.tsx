import { Loader2 } from "lucide-react";

export default function WorkspaceLoading() {
  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      {/* Workspace Header Skeleton */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-white/6 bg-background px-4">
        <div className="flex items-center gap-3">
          <div className="size-6 rounded-md bg-white/10 animate-pulse" />
          <div className="h-5 w-40 rounded bg-white/10 animate-pulse" />
        </div>

        {/* View Switcher Skeleton */}
        <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/3 p-1">
          <div className="h-7 w-20 rounded bg-white/10" />
          <div className="h-7 w-16 rounded bg-white/5" />
          <div className="h-7 w-18 rounded bg-white/5" />
        </div>

        {/* Right Actions Skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-20 rounded-md bg-white/5" />
          <div className="h-8 w-16 rounded-md bg-white/5" />
          <div className="h-8 w-8 rounded-md bg-white/10" />
        </div>
      </header>

      {/* Split Panels Skeleton */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Doc Panel Skeleton */}
        <div className="w-[40%] border-r border-white/6 p-8 pt-12 space-y-4 animate-pulse">
          <div className="h-8 w-2/3 rounded-md bg-white/10" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-5/6 rounded bg-white/5" />
          <div className="h-4 w-3/4 rounded bg-white/5" />
          <div className="pt-6 space-y-2">
            <div className="h-5 w-1/3 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/5" />
            <div className="h-4 w-4/5 rounded bg-white/5" />
          </div>
        </div>

        {/* Right Canvas Panel Skeleton */}
        <div className="flex flex-1 items-center justify-center bg-black/20">
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <Loader2 className="size-6 animate-spin text-primary/70" />
            <span className="text-xs">Loading workspace...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

