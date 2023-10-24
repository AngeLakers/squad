"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Questionare1 from "@/ui/questionaire1";

type ComponentMap = {
  [key: string]: JSX.Element | null;
};

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  const componentMap: ComponentMap = {
    "/questionaire/1": <Questionare1 />,
  };

  const selectedComponent = componentMap[pathname] || null;

  return selectedComponent;
}
