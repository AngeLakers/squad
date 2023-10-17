'use client'
import * as React from 'react';
import { useState } from 'react';
import Image from "next/image";
import LaunchMissionPopup from "@/ui/launch-mission";
import launchMissionImage from "@/public/launch-mission.png";
import CustomButton from '@/ui/custom-button';

export default function CreateProjectComponent() {
    const [launchMissionPopupOpen, setlaunchMissionPopupOpen] = useState(false);


  return (
    <div>
      <CustomButton label="Start project" preset="default" onClick={() => setlaunchMissionPopupOpen(true)}/>

      {launchMissionPopupOpen && (
        <LaunchMissionPopup
        onClose={() => setlaunchMissionPopupOpen(false)}
        title="Project started"
        description="We recommend to start booking a call with each one of your team to blablablablaal"
        confirmButtonText="Let's go!"
        onClick={() => window.location.href='/c4/proj_hub'}
        icon={
          <Image
            key="launchMissionImage"
            src={launchMissionImage}
            alt="Launch Mission Icon"
            width="80"
            height="80"
          />
        }
      />
    )}
    </div>
  );
}
