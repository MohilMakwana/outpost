"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Editor } from "tldraw";
import type { BlockNoteEditor } from "@blocknote/core";

type SaveStatus = "saved" | "saving" | "idle";

// Shares the live canvas (tldraw) and doc (BlockNote) editors with header UI that lives outside
// their panels — the agent chat panel drives the canvas, and the Share dialog exports both.
// Each editor is null while its panel isn't mounted (e.g. the Document-only view has no canvas).
const WorkspaceEditorsContext = createContext<{
  canvasEditor: Editor | null;
  setCanvasEditor: (editor: Editor | null) => void;
  docEditor: BlockNoteEditor | null;
  setDocEditor: (editor: BlockNoteEditor | null) => void;
  saveStatus: SaveStatus;
  setSaveStatus: (status: SaveStatus) => void;
} | null>(null);

export function WorkspaceEditorsProvider({ children }: { children: ReactNode }) {
  const [canvasEditor, setCanvasEditor] = useState<Editor | null>(null);
  const [docEditor, setDocEditor] = useState<BlockNoteEditor | null>(null);
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");

  return (
    <WorkspaceEditorsContext.Provider
      value={{
        canvasEditor,
        setCanvasEditor,
        docEditor,
        setDocEditor,
        saveStatus,
        setSaveStatus,
      }}
    >
      {children}
    </WorkspaceEditorsContext.Provider>
  );
}

export function useWorkspaceEditors() {
  const ctx = useContext(WorkspaceEditorsContext);
  if (!ctx) throw new Error("useWorkspaceEditors must be used within a WorkspaceEditorsProvider");
  return ctx;
}
