import type { Metadata } from "next";
import "@fontsource/comfortaa/latin-600.css";
import "@fontsource/comfortaa/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@/styles/globals.css";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: { default: "Kape Hapon OS", template: "%s | Kape Hapon OS" },
  description: "The application foundation for a consistent Kape Hapon experience across branches.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
