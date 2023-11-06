import React from "react";
import CustomCard from "../custom-card";

export default function AboutYou() {
    return (
        <>
            <CustomCard title="Profile picture & header" secondaryTitle="Update your photo and personal details here."
                children={"child"} />
            <CustomCard title="Bio" secondaryTitle="Write a short introduction."
                children={"child"} />
            <CustomCard title="Personal Questions" secondaryTitle="Update your photo and personal details here."
                children={"child"} />
            <CustomCard title="Social Skills" secondaryTitle="Blablablabal"
                children={"child"} />
        </>
    )
}