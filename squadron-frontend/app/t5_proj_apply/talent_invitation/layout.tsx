import "@/styles/globals.css";
import type { Metadata } from "next";
import { SideNav } from "@/ui/side-nav";
import { TopNav } from "@/ui/top-nav";

export const metadata: Metadata = {
  title: "Squadron",
  description: "Squadron frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
