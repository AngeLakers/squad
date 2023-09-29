'use client';
import * as React from 'react';
import ApplicationSent from '@/ui/result-confirm';
import { SimpleHeader } from "@/ui/simple-header";
import styled from "styled-components";

const ProjectLive: React.FC = () => {
    return (
      <div>
        <SimpleHeader />
        <ApplicationSent
            iconName='love'
            titleText="Your porject is now live!"
            subtitleText="Talent will now be able to view and apply to your mission. It will take up to 72 hours for your first squads to be suggested."
            button1Text="See project"
            showButton2={true}
            showNewDiv={true}
            button1Link="/c4/proj_hub"
            button2Text="Home"
            button1Style={{
                width: '384px',
                height: 'auto',
                padding: '10px 18px',
                borderRadius: '8px',
                border: '1px solid #4B48EC',
                boxShadow: '0px 1px 2px 0px #1018280D',
                background: '#4B48EC',
                color: '#FFFFFF',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                textAlign: 'center'
            }}
            button2Style={{
                width: '384px',
                height: 'auto',
                padding: '10px 18px',
                borderRadius: '8px',
                border: '1px solid #D2D6DB',
                background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #D2D6DB, #D2D6DB)',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '24px',
                letterSpacing: '0em',
                color: 'black',
                textAlign: 'center'
            }}
        />
      </div>
    );
  }

  export default ProjectLive;