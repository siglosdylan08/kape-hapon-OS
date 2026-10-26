import Link from "next/link";
import { ArrowUpRight, Layers3, ShieldCheck, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const foundations = [
  { icon: Layers3, title: "A considered foundation", description: "Clear architecture and reusable components, ready for the next approved phase." },
  { icon: ShieldCheck, title: "Security by design", description: "Server-enforced access and branch isolation are requirements for future protected workflows." },
  { icon: HeartHandshake, title: "One shared standard", description: "Accessible, consistent interfaces shaped around the Kape Hapon experience." },
];

export default function Home() {
  return (
    <>
      <section aria-labelledby="welcome-title" className="max-w-3xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Kape Hapon Operating System</p>
        <h1 id="welcome-title" className="font-brand text-4xl font-bold leading-tight tracking-tight text-primary sm:text-6xl">Different branches,<br />same Kape Hapon experience.</h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">A thoughtful foundation for the people, places, and everyday moments behind every cup.</p>
        <p className="mt-5 text-sm text-muted-foreground">Application foundation only. Operational modules are not enabled.</p>
        <Button asChild className="mt-8"><Link href="/health">View application health <ArrowUpRight aria-hidden="true" /></Link></Button>
      </section>
      <section aria-label="Foundation principles" className="mt-20 grid gap-5 md:grid-cols-3">
        {foundations.map(({ icon: Icon, title, description }) => (
          <article key={title} className="rounded-lg border border-border bg-card p-7 text-card-foreground">
            <Icon aria-hidden="true" className="mb-6 size-6 text-primary" />
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
