"use client";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { MainNav } from "@/ui/main-nav";
import { Divider } from "@mui/material";
import styled from "styled-components";

export const metadata: Metadata = {
  title: "Squadron",
  description: "Squadron frontend",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
