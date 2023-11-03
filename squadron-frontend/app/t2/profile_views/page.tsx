"use client"
import * as React from "react";
import Button from "@mui/material/Button";
import SmallProjectCard from "@/ui/profile/SmallProjectCard";
import CardWrapper from "@/ui/profile/card-wrapper";
import Edited_ProfileCard from "@/ui/profile/edited_profile_card";
import {ProfileDataType} from "@/ui/talent-profile-card";
import Experience_Card, {ExperienceContainer} from "@/ui/profile/Experience_Card";
import ExperienceCard from "@/ui/profile/Experience_Card";
import styled from "styled-components";


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

const PageContainer = styled.div`
 gap: 3rem;
  display: flex;
  flex-direction: column;


`;
export default function Home() {
    return (
          <PageContainer>
              <Edited_ProfileCard jobTitle={"Motion Engineer"} name={"james"} address={"James"} number_projects_completed={1} number_Hired={2} aboutText={"gg2sssssssssssssssssssssss sssss22222222222222sssssssssssss ssssssssssssssssssssssssssssss ssssssssssss sssssssssssssss11111111111111 1111111111111111 1111111111 1111111 1111111111"} avatarUrl={""} data={mockProfileData}
              edited_status={true}   skills={["skill 1", "skill 2"]}
                                  tools={["tool 1", "tool 2", "tool 3"]}></Edited_ProfileCard>

              <ExperienceContainer>
                  <ExperienceCard
                      jobTitle="Software Engineer"
                      direction="Frontend"
                      avatarUrl="/google.svg"
                      companyName="Tech Co."
                      timePeriod="June 2020 - Present"
                      description="Working on creating innovative solutions using React and TypeScript 11111 and 322222222."
                  />

                  <ExperienceCard
                      jobTitle="Software Engineer"
                      direction="Frontend"
                      avatarUrl="/google.svg"
                      companyName="Tech Co."
                      timePeriod="June 2020 - Present"
                      description="Working on creating innovative solutions using React and TypeScript 11111 and 322222222."
                  />
                  <ExperienceCard
                      jobTitle="Software Engineer"
                      direction="Frontend"
                      avatarUrl="/google.svg"
                      companyName="Tech Co."
                      timePeriod="June 2020 - Present"
                      description="Working on creating innovative solutions using React and TypeScript 11111 and 322222222."
                  />
                  <ExperienceCard
                      jobTitle="Software Engineer"
                      direction="Frontend"
                      avatarUrl="/google.svg"
                      companyName="Tech Co."
                      timePeriod="June 2020 - Present"
                      description="Working on creating innovative solutions using React and TypeScript 11111 and 322222222."
                  />
                  <ExperienceCard
                      jobTitle="Software Engineer"
                      direction="Frontend"
                      avatarUrl="/google.svg"
                      companyName="Tech Co."
                      timePeriod="June 2020 - Present"
                      description="Working on creating innovative solutions using React and TypeScript 11111 and 322222222."
                  />
                  <ExperienceCard
                      jobTitle="Software Engineer"
                      direction="Frontend"
                      avatarUrl="/google.svg"
                      companyName="Tech Co."
                      timePeriod="June 2020 - Present"
                      description="Working on creating innovative solutions using React and TypeScript 11111 and 322222222."
                  />
              </ExperienceContainer>
              <CardWrapper title={"Worked in"} width={"63rem"} flexDirection={"row"} scrollable={25.5}>
                  <SmallProjectCard
                      title="My Project"
                      year="2023"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />

                  <SmallProjectCard
                      title="My Project"
                      year="2023"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />
                  <SmallProjectCard
                      title="My Project0"
                      year="2022"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />
                  <SmallProjectCard
                      title="My Project1"
                      year="2023"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />
                  <SmallProjectCard
                      title="My Project2"
                      year="2023"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />
                  <SmallProjectCard
                  title="My Project3"
                  year="2023"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda11111111111111111111111111111111111"
                  avatars={[
                      { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                      { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                      { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                      { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                  ]}
              />



              </CardWrapper>


          </PageContainer>

    )

}
