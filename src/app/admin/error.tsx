"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function AdminError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => console.error("Admin page error", error), [error]);
  return (
    <div className="grid min-h-[65vh] place-items-center bg-slate-50 p-6 text-center">
      <div className="card max-w-lg p-8">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-red-50 text-red-600"><AlertTriangle /></span>
        <h2 className="mt-5 text-2xl font-black">Admin Center needs to reload</h2>
        <p className="muted mt-2">Your session is safe. Retry to reconnect the admin workspace.</p>
        <button onClick={reset} className="btn btn-primary mt-6"><RefreshCw size={17} />Retry Admin Center</button>
      </div>
    </div>
  );
}
