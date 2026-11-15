"use client";

import dynamic from "next/dynamic";

function DocSkeleton() {
  return (
    <div className="mx-auto max-w-3xl space-y-4 p-8 pt-12 animate-pulse">
      <div className="h-8 w-2/3 rounded-md bg-white/10" />
      <div className="h-4 w-full rounded-md bg-white/5" />
      <div className="h-4 w-5/6 rounded-md bg-white/5" />
      <div className="h-4 w-4/6 rounded-md bg-white/5" />
      <div className="pt-4 space-y-2">
        <div className="h-5 w-1/3 rounded-md bg-white/10" />
        <div className="h-4 w-full rounded-md bg-white/5" />
        <div className="h-4 w-3/4 rounded-md bg-white/5" />
      </div>
    </div>
  );
}

// BlockNote's editor touches `window` during creation, so it can't run during Next's SSR pass.
// ssr: false only works from within a client boundary, hence this thin wrapper module —
// server components (the workspace and shared pages) import from here instead.
export const DocEditor = dynamic(() => import("@/components/DocEditor").then((m) => m.DocEditor), {
  ssr: false,
  loading: () => <DocSkeleton />,
});

export const DocViewer = dynamic(() => import("@/components/DocViewer").then((m) => m.DocViewer), {
  ssr: false,
  loading: () => <DocSkeleton />,
});
