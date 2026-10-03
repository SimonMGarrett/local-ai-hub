import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-WORK Project Ledger",
  description: "Current projects, tasks and assets from the AI-WORK hub.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
