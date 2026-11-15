"use client";

import { CloudCheck, Loader2 } from "lucide-react";
import { useWorkspaceEditors } from "@/components/WorkspaceEditorsContext";

export function SaveStatusIndicator() {
  const { saveStatus } = useWorkspaceEditors();

  if (saveStatus === "idle") return null;

  return (
    <div
      className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs transition-all duration-200 border border-white/5 bg-white/3"
      title={saveStatus === "saving" ? "Saving changes to cloud..." : "All changes saved"}
    >
      {saveStatus === "saving" ? (
        <>
          <Loader2 className="size-3.5 animate-spin text-muted-foreground" />
          <span className="hidden sm:inline text-muted-foreground text-[11px]">Saving...</span>
        </>
      ) : (
        <>
          <CloudCheck className="size-3.5 text-emerald-400" />
          <span className="hidden sm:inline text-emerald-400/90 text-[11px] font-medium">Saved</span>
        </>
      )}
    </div>
  );
}

