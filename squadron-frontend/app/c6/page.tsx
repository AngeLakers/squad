'use client'
import * as React from 'react';
import { useState } from 'react';
import Image from "next/image";
import LaunchMissionPopup from "@/ui/launch-mission";
import launchMissionImage from "@/public/launch-mission.png";
import CustomButton from '@/ui/custom-button';
import Invoices, { InvoiceData } from '@/ui/invoices'; 

export default function CreateProjectComponent() {
    const [launchMissionPopupOpen, setlaunchMissionPopupOpen] = useState(false);

    const invoiceData: InvoiceData[] = [
      {
        dateIssued: '31/11/2022',
        no: '#01',
        amountDue: '$4535',
        amountPaid: '$4535',
        status: 'paid',
        paidOn: '01/12/2022',
      },
      {
        dateIssued: '31/11/2022',
        no: '#02',
        amountDue: '$4535',
        amountPaid: '$4535',
        status: 'past due',
        paidOn: '01/12/2022',
      },
    ];


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
    <div><Invoices data={invoiceData} /></div>

    </div>
  );
}
