import Link from "next/link";
import { Coffee } from "lucide-react";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-50 rounded-md bg-primary px-4 py-3 text-primary-foreground focus:not-sr-only">Skip to content</a>
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10">
          <Link href="/" aria-label="Kape Hapon OS home" className="flex min-h-11 items-center gap-3 rounded-md text-primary">
            <Coffee aria-hidden="true" className="size-7" />
            <span className="font-brand text-lg font-bold">Kape Hapon <span className="font-sans text-xs tracking-widest">OS</span></span>
          </Link>
          <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">Phase 1 · Foundation</span>
        </div>
      </header>
      <main id="main-content" tabIndex={-1} className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:px-10 sm:py-24">{children}</main>
      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">Built with care. Made for Kape Hapon.</footer>
    </div>
  );
}
