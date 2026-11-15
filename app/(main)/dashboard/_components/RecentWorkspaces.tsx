"use client";

import { useState } from "react";
import { MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { deleteWorkspace } from "@/actions/workspace";
import { useFetch } from "@/hooks/use-fetch";
import { WorkspaceCard, type WorkspaceCardData } from "@/components/WorkspaceCard";
import { WorkspaceDialog } from "@/components/WorkspaceDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export function RecentWorkspaces({ workspaces }: { workspaces: WorkspaceCardData[] }) {
  const [selected, setSelected] = useState<WorkspaceCardData | null>(null);
  const [openDialog, setOpenDialog] = useState<"edit" | "delete" | null>(null);
  const { fn: deleteWorkspaceFn, loading: isDeleting } = useFetch(deleteWorkspace);

  const openFor = (workspace: WorkspaceCardData, dialog: "edit" | "delete") => {
    setSelected(workspace);
    setOpenDialog(dialog);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selected) return;
    await deleteWorkspaceFn(selected.id);
    setOpenDialog(null);
  };

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {workspaces.map((workspace) => (
          <WorkspaceCard
            key={workspace.id}
            workspace={workspace}
            showStatus
            actions={
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Workspace options"
                    className="absolute top-2 right-2 size-7 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100"
                  >
                    <MoreHorizontal className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onSelect={() => openFor(workspace, "edit")}>
                    <Pencil className="size-4" />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    variant="destructive"
                    onSelect={() => openFor(workspace, "delete")}
                  >
                    <Trash2 className="size-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            }
          />
        ))}
      </div>

      {selected && (
        <WorkspaceDialog
          workspace={selected}
          open={openDialog === "edit"}
          onOpenChange={(open) => !open && setOpenDialog(null)}
        />
      )}

      <AlertDialog open={openDialog === "delete"} onOpenChange={(open) => !open && setOpenDialog(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete &ldquo;{selected?.name}&rdquo;?</AlertDialogTitle>
            <AlertDialogDescription>
              This permanently deletes the workspace, including its doc and canvas. It can&apos;t be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={handleDelete} disabled={!!isDeleting}>
              {isDeleting ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
