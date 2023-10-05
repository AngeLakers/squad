'use client';

import ProjectCard from "@/ui/profile/ProjectCard";
import ReviewCard from "@/ui/profile/Reviews";

import * as React from 'react';
import Button from '@mui/material/Button';
import CardWrapper from "@/ui/profile/card-wrapper";
import ProfileCard from "@/ui/profile/ProfileCard";


export default function Home() {
    return (
      <div>



          <ProfileCard
              avatarUrl="https://example.com/avatar.jpg"
              name="John Doe"
              address="123 Main St, Cityville"
              number_projects_completed={5}
              number_Hired={3}
              aboutText="Hello! I am John, a freelance developer."
          />

          <CardWrapper title="Open Project" width="100vh" flexDirection="row" scrollable={65}>

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


/>  <ProjectCard
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

          </CardWrapper >



              <CardWrapper title="Completed Project" width="100vh" flexDirection="row" scrollable={65}>
                  <ProjectCard
                      projectName="My Awesome Project2"
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
                      status={false}


                  />

                  <ProjectCard
                      projectName="My Awesome Project4"
                      projectDescription="This is a descriptiofffffffffffffffffffffffffffffffffffffffffffffffffffffff f."
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
              </CardWrapper>





          <CardWrapper title={"Reviews"} showSeeAll={true} width={"100vh"} flexDirection={"row"} scrollable={23}>
          <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP1"} />
            <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP2"} />
            <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP3"} />
            <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP4"} />
            <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP5"} />
            <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP6"} />
            <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP7"} />
            <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP8"} />
          </CardWrapper>
      </div>






    )
}
