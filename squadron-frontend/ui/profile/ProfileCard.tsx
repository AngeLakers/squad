import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Card, CardContent, Box, SvgIcon, IconButton, Typography, Avatar} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkIcon from '@mui/icons-material/Work';
import FrameTickSVG from 'public/profile-icon/Frame-Tick.svg';
import ShareIcon from "@mui/icons-material/Share";

const StyledCard = styled(Card)`
  width: 63rem;
  height: auto;
  border-radius: 0.75rem;
  background-color: #fff;
  border: 0.0625rem solid #e5e7eb;

  font-family: Inter;

  margin-left: 13rem;
  position: relative;
  
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  font-size: 30px;


  
  
`;

const Header = styled(Box)`
  width: 63rem;
  height: 11.5rem;
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: space-between;
`;

const UserDetail = styled(Box)`
  width: 100%;
  height: 8.5rem;
  margin: 1.5rem 0;
  padding: 1.5rem 2rem;
  background-color: black;
  display: flex;
  align-items: center;
`;


const StyledAvatar = styled(Avatar)`
  width: 8.5rem;
  height: 8.5rem;
`;

const TextBox = styled(Box)`
  width: 12.625rem;
  height: 4.625rem;
  margin: 1.5rem;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const NameText = styled(Typography)`
  font-size: 1.875rem;
  line-height: 2.375rem;
  font-weight: 500;
  color: #fff;
`;

const StyledIconButton = styled(IconButton)`
  font-size: 1rem;
`;

const VerifiedIcon = styled(CheckCircleIcon)`
  color: green;
  margin-left: 0.5rem;
`;

const AddressText = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
`;

const LocationIcon = styled(LocationOnIcon)`
  font-size: 1.5rem;
  color: white;
  margin-right: 0.5rem;
`;

const UserGraphic = styled(Box)`
  width: 100%;
  height: 11.5rem;
  background-color: black;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ShareButton = styled(Box)`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  color: green;
`;

const Detail = styled(Box)`
  padding: 1.5rem 2rem;
  width: 60.5rem;
  height: 19.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SocialLink = styled(Box)`
  width: 15.8125rem;
  height: 14.5rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  gap: 3rem;
`;

const DivisoryLane = styled(Box)`
  width: 0.125rem;
  height: 19.5rem;
  background-color: purple;
`;

const NameAndIcon = styled(Box)`
  width: 7.5rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Text = styled(Typography)`
  width: 7.5rem;
  height: 1.75rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #101828;
`;

const SocialMedia = styled(Box)`
  width: 7.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TitlePart = styled(Box)`
  width: 14.8125rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-color: #f9fafb;
  color: #4d5761;
  font-family: Inter;
`;

const TitleText = styled(Typography)`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: #4d5761;
  margin: 0.5rem;
`;

const EndText = styled(Typography)`
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-left: 0.375rem;
  width: 100%;
  color: #6c737f;
  display: inline-block;
`;

const SeeProjects = styled('span')`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  color: #4b48ec;
`;

const RightContent = styled(Box)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  width: 40.6875rem;
  height: 19.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.125rem;
  color: #111927;
  font-family: Inter;
`;

const AboutTitle = styled(Typography)`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  color: #111927;
  width: 37.25rem;
`;

const AboutText = styled(Typography)`
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #4d5761;
  display: inline-block;
`;

interface ProfileCardProps {
    name: string;
    address: string;
    number_projects_completed: number;
    number_Hired: number;
    aboutText: string;
    avatarUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
                                                     avatarUrl,
                                                     name,
                                                     address,
                                                     number_projects_completed,
                                                     number_Hired,
                                                     aboutText
                                                 }) => {
    return (
        <StyledCard>
            <Header>
                <UserDetail>
                    <StyledAvatar src={avatarUrl}/>

                    <TextBox>
                        <Box display="flex" alignItems="center">
                            <NameText variant="body2">{name}</NameText>
                            <VerifiedIcon/>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <LocationIcon/>
                            <AddressText variant="body2">{address}</AddressText>
                        </Box>
                    </TextBox>


                </UserDetail>

                <UserGraphic>
                    <ShareButton>
                        <ShareIcon fontSize="small"/>
                    </ShareButton>
                </UserGraphic>
            </Header>
            <CardContent>
                <Detail>
                    <SocialLink>
                        <NameAndIcon>
                            <Text variant="body1">Social Links</Text>
                            <SocialMedia>
                                <LinkedInIcon fontSize="small"/>
                                <MailOutlineIcon fontSize="small"/>
                                <TwitterIcon fontSize="small"/>
                            </SocialMedia>
                        </NameAndIcon>
                        <Title>
                            <TitlePart>
                                <StyledIconButton>
                                    <img src="/profile-icon/check-green.svg " alt="check-green"/>
                                </StyledIconButton>
                                <TitleText>{number_projects_completed}</TitleText>
                                <EndText>projects completed <br/>
                                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <SeeProjects>See more projects</SeeProjects>
                                    </a>
                                </EndText>
                            </TitlePart>
                            <TitlePart>
                                <StyledIconButton>
                                    <img src="/profile-icon/icon-hired.svg " alt="Hired
                               "/>
                                </StyledIconButton>
                                <TitleText>{number_Hired}</TitleText>
                                <EndText>Hired</EndText>
                            </TitlePart>
                        </Title>
                    </SocialLink>
                    <DivisoryLane/>

                    <RightContent>
                        <AboutTitle variant="body1">About</AboutTitle>
                        <AboutText variant="body2"> {aboutText}
                        </AboutText>
                    </RightContent>
                </Detail>
            </CardContent>
        </StyledCard>
    );
};

export default ProfileCard;
