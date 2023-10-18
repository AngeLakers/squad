import React from "react";
import {SimpleHeader} from "@/ui/simple-header";
import HorizontalTabs from "@/ui/horizontal-tabs";
import {Hometable2} from "@/ui/Hometable2";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
       <div>
        <SimpleHeader />
           {children}
        </div >
    );
}