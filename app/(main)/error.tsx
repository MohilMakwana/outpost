"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Workspace Application Error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-center">
      <div className="size-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-4">
        <AlertCircle className="size-6" />
      </div>

      <h2 className="text-xl font-semibold tracking-tight">Something went wrong</h2>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {error.message || "An unexpected error occurred while loading this workspace page."}
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Button onClick={() => reset()} variant="default" className="gap-2">
          <RefreshCw className="size-4" />
          Try again
        </Button>
        <Button asChild variant="outline">
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

