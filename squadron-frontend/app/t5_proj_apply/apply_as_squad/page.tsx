'use client'
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { SimpleHeader } from "@/ui/simple-header";
import StepHeading from "@/ui/step-heading";
import Heading from "@/ui/heading";
import CardLayout from "@/ui/layout-card";
import RatioButtonsTable from "@/ui/ratio-buttons-table";
import Footer from "@/ui/footer";

const MockrolesData = [
    {
      label: "Front-End Engineer",
      info: {
        title: "Front-End Engineer",
        rate: "30$-50$ /h",
        hoursPerWeek: "20-25h /week",
        location: "Amsterdam, NL",
        availability: "20/12/23",
      },
    },
    {
      label: "Back-End Engineer1",
      info: {
        title: "Back-End Engineer1",
        rate: "30$-50$ /h",
        hoursPerWeek: "20-25h /week",
        location: "Amsterdam, NL",
        availability: "20/12/23",
      },
    },
    {
      label: "Back-End Engineer2",
      info: {
        title: "Back-End Engineer2",
        rate: "30$-50$ /h",
        hoursPerWeek: "20-25h /week",
        location: "Amsterdam, NL",
        availability: "20/12/23",
      },
    },
    {
      label: "Back-End Engineer3",
      info: {
        title: "Back-End Engineer3",
        rate: "30$-50$ /h",
        hoursPerWeek: "20-25h /week",
        location: "Amsterdam, NL",
        availability: "20/12/23",
      },
    },
    {
      label: "Back-End Engineer4",
      info: {
        title: "Back-End Engineer4",
        rate: "30$-50$ /h",
        hoursPerWeek: "20-25h /week",
        location: "Amsterdam, NL",
        availability: "20/12/23",
      },
    },
  ];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    `;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #F3F4F6;
    padding: 48px;
    `;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    `;


export default function Home() {

  const [isRoleSelected, setRoleSelected] = useState(false);
  
  const handleRoleSelect = () => {
    setRoleSelected(true);
  };

    return (
        <Container>
            <SimpleHeader />
            <StepHeading
                progress={33}
                step={"Step 01/03"}
                heading={"Select your role"}
    
            />
            <ContentContainer>
                <CardContainer>
                <CardLayout
                    titleComponent={
                        <Heading
                        title={"Select your role"}
                        description={
                            "Before you add the rest of the team, select your role and fill up your details"
                        }
                        />
                    }
                    content={
                        <RatioButtonsTable 
                          roles={MockrolesData}
                          onSelectRole={handleRoleSelect}
                          ></RatioButtonsTable>
                    }
                    />
                </CardContainer>
            </ContentContainer>
            <Footer 
                leftButtonLabel="Cancel"
                rMiddleButtonLabel="Save as draft"
                rRightButtonLabel="Next"
                isRLeftButtonVisible={false}
                isButtonDisabled={!isRoleSelected}
                rightLink="application_apply"
            
            />
        </Container>
    );
}