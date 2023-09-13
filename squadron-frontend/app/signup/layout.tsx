"use client";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Squadron",
  description: "Squadron frontend",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
