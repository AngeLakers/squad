'use client'
import * as React from "react";
import {Page_profile_card} from "@/ui/profile/Page_profile_card";
import styled from "styled-components";
import {ProfileDataType} from "@/ui/talent-profile-card";
const Container = styled.div`

  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 13.5rem;
  box-sizing: border-box;
  text-align: left;
  font-size: 1.88rem;
  color: #fff;
  font-family: Inter;
    
        `;



const mockProfileData: ProfileDataType = {
    rate: "$90/h",
    availability: "Immediately",
    hoursToCommit: "40h / week",
    location: "Sydney AU, GMT+11",
    workingHours: "8:30 AM - 4:30 PM",
    overlap: "7 hours",
    experience: "5 years",
    languages: {
        English: "Native",
        French: "Intermediate",
    },
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/your-profile/",
        email: "mailto:your.email@example.com",
        twitter: "https://twitter.com/your-profile",
    },
};

export default function Home() {
  return <Container>
    <Page_profile_card data={mockProfileData} name={"james"} time={"2019 - 2020"}  role="Developer"
                       description="JLorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum aliquet amet, turpis vivamus neque. Sagittis, odio venenatis non porttitor massa sapien turpis tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu accumsan sagittis cum id imperdiet urna, elit. Sed cursus et sagittis, sit. "
                       avatars={[
                           "/static/images/avatar/1.jpg",
                           "/static/images/avatar/2.jpg",
                           "/static/images/avatar/3.jpg",
                       ]}></Page_profile_card>

  </Container>

}
