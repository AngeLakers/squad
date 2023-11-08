'use client';
import * as React from 'react';
import ApplicationSent from '@/ui/result-confirm';
import { SimpleHeader } from "@/ui/simple-header";
import Footer from '@/ui/footer';
import styled from "styled-components";

const UniqueProfile: React.FC = () => {
    return (
      <div>
        <SimpleHeader />
        <ApplicationSent
            iconName='love'
            titleText="Your porject is now live!"
            subtitleText="Talent will now be able to view and apply to your mission. It will take up to 72 hours for your first squads to be suggested."
            showButton1={false}
            showButton2={false}
            showNewDiv={true}
        />
        <Footer 
                leftButtonLabel="Back"
                leftLink=""
                LeftButtonStyle="outlined"
                rRightButtonLabel="Home"
                rightLink=""
                isRLeftButtonVisible={false}
                isRMiddleButtonVisible={false}
                isButtonDisabled={false}  
            />
      </div>
    );
  }

  export default UniqueProfile;