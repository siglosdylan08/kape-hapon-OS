import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getHealthStatus } from "@/lib/health";

export const metadata: Metadata = { title: "Application health" };
export const dynamic = "force-dynamic";

export default function HealthPage() {
  const health = getHealthStatus();
  return (
    <section aria-labelledby="health-title" className="max-w-2xl">
      <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phase 1 · Runtime</p>
      <h1 id="health-title" className="font-brand text-3xl font-bold text-primary sm:text-4xl">Application health</h1>
      <p className="mt-5 leading-relaxed text-muted-foreground">This page confirms that the application can render. It does not establish database connectivity, authentication, or operational readiness.</p>
      <dl className="mt-8 divide-y divide-border rounded-lg border border-border bg-card px-6">
        <div className="flex flex-wrap justify-between gap-3 py-5"><dt>Application process</dt><dd className="flex items-center gap-2 font-medium text-primary"><CheckCircle2 aria-hidden="true" className="size-4" />{health.status === "ok" ? "Responding" : health.status}</dd></div>
        <div className="flex flex-wrap justify-between gap-3 py-5"><dt>Database connectivity</dt><dd className="text-muted-foreground">Not checked · future phase</dd></div>
      </dl>
      <p className="mt-5 text-sm text-muted-foreground">Machine-readable liveness: <Link className="underline underline-offset-4" href="/api/health">/api/health</Link></p>
      <Button asChild variant="outline" className="mt-8"><Link href="/"><ArrowLeft aria-hidden="true" />Back to home</Link></Button>
    </section>
  );
}
