'use client'

import styled from "styled-components";
import {Box, Card, CardContent, List, Stack, Typography} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import {EditButton, ProfileDataType} from "@/ui/talent-profile-card";
import {
    ProfileListItem,
    ProfileListItemContentValue,
    ProfileListItemTitle, ProfileListProps1,
    SocialMediaContainer
} from "@/ui/profile/ProfileList";
import Link from "next/link";
import {EmailSVG, LinkedInSVG, TwitterSVG} from "@/ui/svgs";
import {BiMessageSquareDetail} from "react-icons/bi";
import Avatar from "@mui/material/Avatar";

const StyledCard = styled(Card)`

  width: 100%;
  position: relative;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  border: 1px solid #f9fafb;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: 1.88rem;
  color: #fff;
  font-family: Inter;
`;

const Header = styled(Box)`
  width: 100%;
  position: relative;
  background-color: #0b0f00;
  display: flex;
  flex-direction: row;
  //align-items: flex-start;
  //justify-content: flex-start;
  text-align: left;
  font-size: 1.88rem;
  color: #fff;
  font-family: Inter;

  justify-content: space-between;
  align-items: center;



`;


const UserDetail = styled(Box)`
  //width: 100%;
  position: relative;
  background-color: #0b0f00;
  height: 11.5rem;
  overflow: hidden;
  //flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  text-align: left;
  font-size: 1.88rem;
  color: #fff;
  font-family: Inter;

  flex-grow: 1;


`;

const UserGraphic = styled(Box)`


  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 500px;
  min-width: 418px;
  position: relative;
  background-color: #0b0f00;
  //width: 100%;
  height: 11.5rem;
  overflow: hidden;
  //flex-shrink: 0;
  text-align: left;
  font-size: 1rem;
  color: #fff;
  font-family: Inter;


  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/Half-cycle.svg');
  background-position: right center;
`;

const TextBox = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
  text-align: left;
  font-size: 1.88rem;
  color: #fff;
  font-family: Inter;
`;

const NameText = styled(Typography)`


  position: relative;
  font-size: 1.88rem;
  line-height: 2.38rem;
  font-weight: 500;
  font-family: Inter;
  color: #fff;
  text-align: left;
`;


const TimeText = styled(Typography)`

  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: Inter;
  color: #fff;
  text-align: left;

`;

const ShareButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: green;

`;

const  Detail = styled(Box)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  text-align: left;
  font-size: 1.13rem;
  color: #111927;
  font-family: Inter;
  
    `;

const Experience = styled.div`
  position: relative;
  width: 16rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.75rem;
  text-align: left;
  font-size: 1.13rem;
  color: #111927;
  font-family: Inter;

  
`;



const RightContent = styled(Box)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  text-align: left;
  font-size: 1.13rem;
  color: #111927;
  font-family: Inter;
  flex: 1;
        `;

const Discovery = styled.div`
  height: 100%;
  position: relative;
  border-right: 1px solid #eaecf0;
  box-sizing: border-box;
  flex: 0; /* 不允许它增长或缩小 */
  width: 1px;
        `;

const Description = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  text-align: left;
  font-size: 1.13rem;
  color: #111927;
  font-family: Inter;
  font-weight: 600;
            `;

const AboutTitle = styled(Typography)`
  flex: 1;
  width: 100%;
  position: relative;
  font-size: 1.13rem;
  line-height: 1.75rem;
  font-weight: 500;
  font-family: Inter;
  color: #111927;
  text-align: left;
  display: inline-block;
                `;


const AboutText = styled(Typography)`
  width: 100%;
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-family: Inter;
  color: #4d5761;
  text-align: left;
  display: inline-block;
                `;


interface PageProfileCardProps {
   name: string;
   time: string;
   role: string;
    data: ProfileDataType;
    description: string;
    avatars: string[];

}

export const Page_profile_card : React.FC<PageProfileCardProps> = ({data,name , time    ,role
,description   ,avatars  }) => {
    return (
        <StyledCard>
            <Header>
                <UserDetail>

                    <TextBox>
                        <NameText variant="body2">{name}</NameText>
                        <TimeText variant="body2">{time}</TimeText>


                    </TextBox>

                </UserDetail>

                <UserGraphic>
                    <ShareButton>
                        <img src="/profile-icon/share-green.svg" alt="Share"/>
                    </ShareButton>
                </UserGraphic>
            </Header>
            <CardContent>
                <Detail>
                    <Experience>
                    <ProfileListItem>
                        <ProfileListItemTitle>My Role
                            </ProfileListItemTitle>

                        <ProfileListItemContentValue>
                            {role}
                        </ProfileListItemContentValue>
                    </ProfileListItem>
                    <ProfileListItem>
                        <ProfileListItemTitle>Links to the project
                          </ProfileListItemTitle>
                        <SocialMediaContainer>
                            <Link href={data.socialLinks.linkedin}>
                                <LinkedInSVG/>
                            </Link>
                            <Link href={data.socialLinks.email}>
                                <EmailSVG/>
                            </Link>
                            <Link href={data.socialLinks.twitter}>
                                <TwitterSVG/>
                            </Link>
                        </SocialMediaContainer>
                    </ProfileListItem>
                    </Experience>
                    <Discovery> </Discovery>
                    <RightContent>
                        <Description>
                        <AboutTitle variant="body1">Description</AboutTitle>
                        <AboutText variant="body2"> {description}
                        </AboutText>
                        </Description>

                        <Description>
                            <AboutTitle variant="body1">Squad members</AboutTitle>

                            <Stack direction="row" spacing={2}>
                                {avatars.map((avatar, index) => (
                                    <Avatar key={index} alt={`Avatar ${index + 1}`} src={avatar} />
                                ))}
                            </Stack>
                        </Description>

                    </RightContent>


                </Detail>


            </CardContent>



        </StyledCard>
    )
}