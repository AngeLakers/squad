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




export default function Home() {
    return (


<div>




          {/*<ProfileCard*/}
          {/*    avatarUrl="https://randomuser.me/api/portraits/men/45.jpg"*/}
          {/*    name="John Doe"*/}
          {/*    address="123 Main St"*/}
          {/*    number_projects_completed= {10}*/}
          {/*    number_Hired={5}*/}
          {/*    aboutText="Lorem ipsum dolor sit amet..."*/}
          {/*/>*/}




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



                  <ReviewCard name={"Chris Paul"} role={"Basketball player"} text={"AKA CP1"} />



          </div>




    )
}
