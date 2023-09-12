import "@/styles/globals.css";
import type { Metadata } from "next";
import { MainNav } from "@/ui/main-nav";
import { Divider } from "@mui/material";

export const metadata: Metadata = {
  title: "Squadron",
  description: "Squadron frontend",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <MainNav />
      <Divider />
      <div>{children}</div>
    </div>
  );
}
