"use client"
import * as React from "react";
import Button from "@mui/material/Button";
import SmallProjectCard from "@/ui/profile/SmallProjectCard";
import CardWrapper from "@/ui/profile/card-wrapper";
import Edited_ProfileCard from "@/ui/profile/edited_profile_card";
import {ProfileDataType} from "@/ui/talent-profile-card";


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
    return (
          <div>
              <Edited_ProfileCard jobTitle={"Motion Engineer"} name={"james"} address={"James"} number_projects_completed={1} number_Hired={2} aboutText={"gg"} avatarUrl={""} data={mockProfileData}
              edited_status={true}></Edited_ProfileCard>
              <CardWrapper title={"Worked in"} width={"100vh"} flexDirection={"row"} scrollable={25.5}>
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

              </div>

    )

}
