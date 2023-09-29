'use client'
import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SquadCustom from "@/ui/option-popup";
import Image from 'next/image';
import customizeImage from '../../public/customize.png';
import worldWideWebImage from '../../public/world-wide-web.png';
import mobilePhoneImage from '../../public/mobile-phone.png';
import marketingImage from '../../public/marketing.png';
import growthImage from '../../public/growth.png';
import dataImage from '../../public/data.png';

export default function CreateProjectComponent() {
  const [isModalOpen, setModalOpen] = useState(false);

  const icons = [
    <Image src={customizeImage} alt="Custom Icon" width="32" height="32" />,
    <Image src={worldWideWebImage} alt="Web Platform Icon" width="32" height="32" />,
    <Image src={mobilePhoneImage} alt="Mobile Phone Icon" width="32" height="32" />,
    <Image src={marketingImage} alt="Marketing Website Icon" width="32" height="32" />,
    <Image src={growthImage} alt="Growth Icon" width="32" height="32" />,
    <Image src={dataImage} alt="Data Icon" width="32" height="32" />
  ];

  return (
    <div>
      <Button variant="outlined" onClick={() => setModalOpen(true)}>Create project</Button>

      {isModalOpen && (
        <SquadCustom
          closeModal={() => {
            setModalOpen(false);
          }}
          title={"Squad Presets"}
          description={
            "Select a preset to see recommended role appear, or build your custom squad from scratch. Don’t worry, you can always add or remove roles in the next step."
          }
          options={["Custom", "Web Platform", "Mobile App",
            "Marketing Website", "Growth", "Data"]}
          icons={icons}
          link={"/c4/proj_detail"}
        />
      )}
    </div>
  );
}
