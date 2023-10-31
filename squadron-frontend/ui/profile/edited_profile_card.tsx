"use client";

import React from "react";
import {Avatar, Box, Card, CardContent, Icon, IconButton, Typography} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "styled-components";
import CustomButton from "@/ui/custom-button";
import {EditButton, ProfileDataType, ProfileList} from "@/ui/talent-profile-card";

const StyledCard = styled(Card)`
  width: 63rem;
  height: auto;
  border-radius: 0.75rem;
  background-color: #fff;
  border: 0.0625rem solid #e5e7eb;


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
  margin-left: 2rem;
  margin-top: 3rem;




`;

const Header = styled(Box)`
  width: 63rem;
  height: auto;
  display: flex;
  align-items: center;
  background-color: black;
  justify-content: space-between;



`;

const UserDetail = styled(Box)`
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1;
  position: relative;
  
  background-color: black;
  height: 11.5rem;
  
  //overflow: hidden;
  flex-shrink: 0;

  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  text-align: left;
  font-size: 1.13rem;
  color: #fff;
  font-family: Inter;
`;


const StyledAvatar = styled(Avatar)`
  width: 8.5rem;
  height: 8.5rem;


`;

const TextBox = styled(Box)`


  display: flex;
  flex-direction: column;
  justify-content: space-between;


  width: 100%;

  gap: 0.25rem;
  text-align: left;
  font-size: 1.13rem;
  color: #fff;
  font-family: Inter;



`;

const NameText = styled(Typography)`
 
  flex-shrink: 0;
  position: relative;
  font-size: 1.88rem;
  line-height: 2.38rem;
  font-weight: 600;
  font-family: Inter;
  color: #fff;
  text-align: left;
`;

const JobTitleText = styled(Typography)`
  position: relative;
  font-size: 1.13rem;
  line-height: 1.75rem;
  font-weight: 500;
  font-family: Inter;
  color: #fff;
  text-align: left;
  flex-shrink: 0;
`;

const VerifiedIcon = styled(Icon)`
  color: green;
  margin-left: 0.5rem;
  width: 1.5rem;

  height: 1.5rem;
  overflow: hidden;
  flex-shrink: 0;
  
  
  background-image: url('/profile-icon/Frame-Tick.svg ');

`;

const AddressText = styled(Typography)`
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;

  position: relative;
 

  text-align: left;
  padding-top: 0.5rem !important;
`;

const LocationIcon = styled(Icon)`
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
  color: white;
  margin-right: 0.5rem;
  background-image: url('/profile-icon/Frame-location.svg')

 
`;

const UserGraphic = styled(Box)`
  width: 100%;
height: 11.5rem;
  background-color: black;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('/Lines.svg');


  background-position: right center;

`;

const ButtonArea = styled(Box)`
  width: auto;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  


  display: flex;
  flex-direction: row;
  align-items: center; 
  gap: 1rem; 
    
` ;


const ShareButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  color: green;

`;

const Detail = styled(Box)`
  padding: 1.5rem 2rem;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;


  position: relative;

  flex-direction: row;
 

  box-sizing: border-box;
  gap: 4rem;
  text-align: left;
  font-size: 1.13rem;
  color: #111927;
  font-family: Inter;
  & > :first-child {
    margin-left: 2rem;
  }
`;



const VerticalDivider = styled.div`
  height: 100%;
  position: relative;
  border-right: 1px solid #eaecf0;
  box-sizing: border-box;
  width: 100%;
`;


const RightContent = styled(Box)`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  width:100%;
  height: auto;
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

const HorizontalDiv = styled.div`
  display: flex;
  align-items: center; 
  gap: 0.5rem;
`;

interface ProfileCardProps {
    name: string;
    address: string;
    number_projects_completed: number;
    number_Hired: number;
    aboutText: string;
    avatarUrl: string;
    jobTitle: string;
    edited_status?: boolean;
    data: ProfileDataType;

}
const SvgWithText= () => {
    return(
        <HorizontalDiv>
        <img src="/profile-icon/edit.svg" alt="My SVG Icon" />
        <p>Edit cover</p>
        </HorizontalDiv>
    )
}

const Edited_ProfileCard: React.FC<ProfileCardProps> = ({
                                                            avatarUrl,
                                                            name,
                                                            address,
                                                            aboutText,
                                                            jobTitle, edited_status= false,
                                                            data

                                                        }) => {
    function handleButtonClick(experience: string) {
        
    }

    return (
        <StyledCard>
            <Header>
                <UserDetail>
                    <StyledAvatar src={avatarUrl}/>

                    <TextBox>
                        <Box display="flex" alignItems="center">
                            <JobTitleText variant="body2">{jobTitle}</JobTitleText>
                        </Box>
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
                    <ButtonArea>
                    <ShareButton>
                        <img src="/profile-icon/share-green.svg" alt="Share"/>
                    </ShareButton>
                        {edited_status && <CustomButton label={<SvgWithText/>} preset="default" backgroundColor="#D0FC4A" textColor="#384250" />}

                    </ButtonArea>

                </UserGraphic>
            </Header>
            <CardContent>
                <Detail>
                    <ProfileList data={data} status={edited_status}/>
                    <VerticalDivider />

                    <RightContent>
                        <AboutTitle variant="body1">About  {edited_status && (
                            <EditButton onClick={() => handleButtonClick('experience')}>
                                <img src="/profile-icon/edit-01.svg" alt="Icon Description"/>
                                <span>Edit</span>
                            </EditButton>
                        )} </AboutTitle>
                        <AboutText variant="body2"> {aboutText}
                        </AboutText>
                    </RightContent>
                </Detail>
            </CardContent>
        </StyledCard>
    );
};
export default Edited_ProfileCard;