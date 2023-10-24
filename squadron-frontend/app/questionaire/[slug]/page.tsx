"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Questionare1 from "@/ui/questionaire1";
import Questionare4 from "@/ui/questionaire4";

type ComponentMap = {
  [key: string]: JSX.Element | null;
};

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  const componentMap: ComponentMap = {
    "/questionaire/1": <Questionare1 />,
    "/questionaire/4": <Questionare4 />,
  };

  const selectedComponent = componentMap[pathname] || null;

  return selectedComponent;
}
