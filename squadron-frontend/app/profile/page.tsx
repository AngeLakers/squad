"use client";
import React, {Profiler} from "react";
import {Avatar, Card, CardContent, Grid, Typography} from "@mui/material";
import styled from "styled-components";
import ReviewCard from "@/ui/profile/Reviews";
import ProjectCard from "@/ui/profile/ProjectCard";
import ProfileCard from "@/ui/profile/ProfileCard";
import WrapperWithNavigation from "@/ui/profile/WrapperWithNavigation";
import CardWrapper from "@/ui/profile/card-wrapper";
import LiveProjectCard from "@/ui/liveproject-card";


const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(16, 24, 40, 0.06);
  overflow-x: hidden;
`;


export default function Home() {
    return (

          <ParentContainer>


                  <CardWrapper title="Live projects">
                      <LiveProjectCard
                          title="MVP for Serverless E-commerce..."
                          memberCount={5}
                          balanceInfo={{
                              time: 0,
                              currentBalance:0,
                              percentage: 75
                          }}
                          score={0}
                      />
                      <LiveProjectCard
                          title="MVP for Serverless E-commerce..."
                          memberCount={5}
                          balanceInfo={{
                              time: 12,
                              currentBalance: 1680,
                              percentage: 3.7,
                          }}
                          score={4.5}
                      />

                      <LiveProjectCard
                          title="MVP for Serverless E-commerce..."
                          memberCount={6}
                          balanceInfo={{
                              time: 0,
                              currentBalance:0,
                              percentage: 75
                          }}
                          score={0}
                      />
                      <LiveProjectCard
                          title="MVP for Serverless E-commerce..."
                          memberCount={3}
                          balanceInfo={{
                              time: 12,
                              currentBalance:2000,
                              percentage: 4.7,
                          }}
                          score={4.5}
                      />

                      <LiveProjectCard
                          title="MVP for Serverless E-commerce..."
                          memberCount={5}
                          balanceInfo={{
                              time: 0,
                              currentBalance:0,
                              percentage: 75
                          }}
                          score={0}
                      />
                      <LiveProjectCard
                          title="MVP for Serverless E-commerce..."
                          memberCount={8}
                          balanceInfo={{
                              time: 12,
                              currentBalance:2000,
                              percentage: 4.7,
                          }}
                          score={4.5}
                      />

                      <LiveProjectCard
                          title="MVP for Serverless E-commerce..."
                          memberCount={7}
                          balanceInfo={{
                              time: 0,
                              currentBalance:0,
                              percentage: 75
                          }}
                          score={0}
                      />
                  </CardWrapper>


          <ProfileCard
              avatarUrl="https://randomuser.me/api/portraits/men/45.jpg"
              name="John Doe"
              address="123 Main St"
              number_projects_completed= {10}
              number_Hired={5}
              aboutText="Lorem ipsum dolor sit amet..."
          />




          <WrapperWithNavigation title="Opened projects">
              <ProjectCard
                  projectName="My Awesome Project0"
                  projectDescription="This is a description of my awesome project ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f
          ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f."
                  projectLink="https://github.com/my-awesome-project"
                  labels={['New', 'Featured', 'Popular']}
                  openRoles={['Developer', 'Designer', 'Product Manager']}
                  squadmates={[{avatarUrl: 'https://example.com/avatar1.jpg'},
                      {avatarUrl: 'https://example.com/avatar2.jpg'},
                      {avatarUrl: 'https://example.com/avatar3.jpg'},
                      {avatarUrl: 'https://example.com/avatar4.jpg'},
                      {avatarUrl: 'https://example.com/avatar5.jpg'},]}


              />
              <ProjectCard
                  projectName="My Awesome Project1"
                  projectDescription="This is a description of my awesome project ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f
          ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f."
                  projectLink="https://github.com/my-awesome-project"
                  labels={['New', 'Featured', 'Popular']}
                  openRoles={['Developer', 'Designer', 'Product Manager']}
                  squadmates={[{avatarUrl: 'https://example.com/avatar1.jpg'},
                      {avatarUrl: 'https://example.com/avatar2.jpg'},
                      {avatarUrl: 'https://example.com/avatar3.jpg'},
                      {avatarUrl: 'https://example.com/avatar4.jpg'},
                      {avatarUrl: 'https://example.com/avatar5.jpg'},]}



              />
              <ProjectCard
                  projectName="My Awesome Project2"
                  projectDescription="This is a description of my awesome project ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f
         ffffffffffffffffffffffffffffffffffffffffff f."
                  projectLink="https://github.com/my-awesome-project"
                  labels={['New', 'Featured', 'Popular']}
                  openRoles={['Developer', 'Designer', 'Product Manager']}
                  squadmates={[{avatarUrl: 'https://example.com/avatar1.jpg'},
                      {avatarUrl: 'https://example.com/avatar2.jpg'},
                      {avatarUrl: 'https://example.com/avatar3.jpg'},
                      {avatarUrl: 'https://example.com/avatar4.jpg'},
                      {avatarUrl: 'https://example.com/avatar5.jpg'},]}


              />
              <ProjectCard
                  projectName="My Awesome Project3"
                  projectDescription="This is a description of my awesome project ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f
          ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f."
                  projectLink="https://github.com/my-awesome-project"
                  labels={['New', 'Featured', 'Popular']}
                  openRoles={['Developer', 'Designer', 'Product Manager']}
                  squadmates={[{avatarUrl: 'https://example.com/avatar1.jpg'},
                      {avatarUrl: 'https://example.com/avatar2.jpg'},
                      {avatarUrl: 'https://example.com/avatar3.jpg'},
                      {avatarUrl: 'https://example.com/avatar4.jpg'},
                      {avatarUrl: 'https://example.com/avatar5.jpg'},]}


              />
          </WrapperWithNavigation>
              <WrapperWithNavigation title="Completed projects">
                  <ProjectCard
                      projectName="My Awesome Project0"
                      projectDescription="This is a description of my awesome project ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f
          ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f."
                      projectLink="https://github.com/my-awesome-project"
                      labels={['New', 'Featured', 'Popular']}
                      openRoles={['Developer', 'Designer', 'Product Manager']}
                      squadmates={[{avatarUrl: 'https://example.com/avatar1.jpg'},
                          {avatarUrl: 'https://example.com/avatar2.jpg'},
                          {avatarUrl: 'https://example.com/avatar3.jpg'},
                          {avatarUrl: 'https://example.com/avatar4.jpg'},
                          {avatarUrl: 'https://example.com/avatar5.jpg'},]}
                      status={false}



                  />
                  <ProjectCard
                      projectName="My Awesome Project1"
                      projectDescription="This is a description of my awesome project ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f
          ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f."
                      projectLink="https://github.com/my-awesome-project"
                      labels={['New', 'Featured', 'Popular']}
                      openRoles={['Developer', 'Designer', 'Product Manager']}
                      squadmates={[{avatarUrl: 'https://example.com/avatar1.jpg'},
                          {avatarUrl: 'https://example.com/avatar2.jpg'},
                          {avatarUrl: 'https://example.com/avatar3.jpg'},
                          {avatarUrl: 'https://example.com/avatar4.jpg'},
                          {avatarUrl: 'https://example.com/avatar5.jpg'},]}
                      status={false}


                  />
                  <ProjectCard
                      projectName="My Awesome Project2"
                      projectDescription="This is a description of my awesome project ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f
         ffffffffffffffffffffffffffffffffffffffffff f."
                      projectLink="https://github.com/my-awesome-project"
                      labels={['New', 'Featured', 'Popular']}
                      openRoles={['Developer', 'Designer', 'Product Manager']}
                      squadmates={[{avatarUrl: 'https://example.com/avatar1.jpg'},
                          {avatarUrl: 'https://example.com/avatar2.jpg'},
                          {avatarUrl: 'https://example.com/avatar3.jpg'},
                          {avatarUrl: 'https://example.com/avatar4.jpg'},
                          {avatarUrl: 'https://example.com/avatar5.jpg'},]}


                  />
                  <ProjectCard
                      projectName="My Awesome Project3"
                      projectDescription="This is a description of my awesome project ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f
          ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff f."
                      projectLink="https://github.com/my-awesome-project"
                      labels={['New', 'Featured', 'Popular']}
                      openRoles={['Developer', 'Designer', 'Product Manager']}
                      squadmates={[{avatarUrl: 'https://example.com/avatar1.jpg'},
                          {avatarUrl: 'https://example.com/avatar2.jpg'},
                          {avatarUrl: 'https://example.com/avatar3.jpg'},
                          {avatarUrl: 'https://example.com/avatar4.jpg'},
                          {avatarUrl: 'https://example.com/avatar5.jpg'},]}


                  />
              </WrapperWithNavigation>

              <WrapperWithNavigation title="Reviews">
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP1"} />
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP2"} />
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP3"} />
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP4"} />
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP5"} />
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP6"} />


                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP7"} />
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP8"} />
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP9"} />
                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP10"} />

              </WrapperWithNavigation>
          </ParentContainer>




    )
}
