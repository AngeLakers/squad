'use client'
import React, {ReactElement, useState} from 'react';
import styled from 'styled-components';
import {Box, CardContent} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import CustomButton from "@/ui/custom-button";
import AddExperiencePopup from "@/ui/complete-profile-addexperience-popup";
import DeleteExperiencePopup from "@/ui/delete-experience-popup";

const StyledCard = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;


  text-align: left;
  font-size: 1rem;
  color: #111927;
  font-family: Inter;

  justify-content: space-between;

  background-color: white;


 
  
`;

const JobSection = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
  position: relative;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: 1rem;
  color: #111927;
  font-family: Inter;

  margin-right: 8rem;
 white-space: nowrap;
  
`;

const JobTitle = styled.div`
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  font-family: Inter;
  color: #111927;
  text-align: left;
`;

const Direction = styled.div`
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-family: Inter;
  color: #4d5761;
  text-align: left;
`;

const ContentSection = styled.div`
  display: flex;

  width: 100%;
  position: relative;

 
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
  text-align: left;
  font-size: 1.13rem;
  color: #111927;
  font-family: Inter;
 
`;

const Avatar = styled.img`
  position: relative;
  width: 3rem;
  height: 3rem;
  
  
`;



const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;  // stack children vertically
  align-items: start;      // align children to the start (left for LTR languages)
`;

const CompanyName = styled.div`
  position: relative;
  font-size: 1.13rem;
  line-height: 1.75rem;
  font-family: Inter;
  color: #111927;
  text-align: left;
`;

const TimePeriod = styled.small`
 
  width: 100%;
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-family: Inter;
  color: #4d5761;
  text-align: left;
  display: inline-block;
`;

const Description = styled.p`
margin-top: 1rem;
  width: 100%;
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-family: Inter;
  color: #4d5761;
  text-align: left;
  display: inline-block;

  min-width: 33rem;
`;



const ButtonSection = styled.div`
    display: flex;
  position: relative;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  text-align: left;
  font-size: 0.88rem;
  color: #1b18e4;
  font-family: Inter;

  margin-left: 4rem;
  
  
`;

const EditButton = styled.button`
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-weight: 600;
  font-family: Inter;
  color: #1b18e4;
  text-align: left;
`;

const DeleteButton = styled.button`
  position: relative;
  width: 100%;
  height: 1rem;
  overflow: hidden;
  flex-shrink: 0;
`;



interface ExperienceCardProps {
    jobTitle: string;
    direction: string;
    avatarUrl: string;
    companyName: string;
    timePeriod: string;
    description: string;
    edited_status?: boolean;
    delete_status?: boolean;
}



const ExperienceCard: React.FC<ExperienceCardProps> = ({
                                                           jobTitle,
                                                           direction,
                                                           avatarUrl,
                                                           companyName,
                                                           timePeriod,
                                                           description,
    edited_status = true,delete_status = true
                                                       }) => {

    const [isDeleteExperiencePopupOpen, setDeleteExperiencePopupOpen] = useState(false);
    const [isEditExperiencePopupOpen, setEditExperiencePopupOpen] = useState(false);

    return (
      <StyledCard>

          <JobSection>
              <JobTitle>{jobTitle}</JobTitle>
              <Direction>{direction}</Direction>
          </JobSection>
          <ContentSection>
              <Avatar src={avatarUrl} alt="Company Logo" />
              <CompanyInfo>
                  <CompanyName>{companyName}</CompanyName>
                  <TimePeriod>{timePeriod}</TimePeriod>
                  <Description>{description}</Description>
              </CompanyInfo>
          </ContentSection>

          <ButtonSection>
              <EditButton onClick={() => setEditExperiencePopupOpen(true)}>Edit</EditButton>
              <DeleteButton  onClick={() => setDeleteExperiencePopupOpen(true)}> <img src="/profile-icon/x-close.svg" alt="Delete" /></DeleteButton>
          </ButtonSection>
          {isEditExperiencePopupOpen && (
              <AddExperiencePopup
                  title='Edit Experience'
                  onClose={() => setEditExperiencePopupOpen(false)}
              />
          )}
          {isDeleteExperiencePopupOpen && (
              <DeleteExperiencePopup
                  onClose={() => setDeleteExperiencePopupOpen(false)}
              />
          )}
          </StyledCard>


);
}

const Container = styled.div`
  width:63rem;
  position: relative;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  border: 1px solid #f9fafb;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem 2rem;
  gap: 2rem;
  text-align: left;
  font-size: 1.25rem;
  color: #111927;
  font-family: Inter;
margin-left: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;



 
  width: 100%;
 
`;
const DivisoryLine = styled.div`
  width: 100%;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 0.06rem;
  flex-shrink: 0;

`;

const Title = styled.h2`
 
  position: relative;
  font-size: 1.25rem;
  line-height: 1.88rem;
  font-weight: 600;
  font-family: Inter;
  color: #111927;
  text-align: left;
`;

const AddButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4CAF50;  // 您可以选择您喜欢的颜色
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;

const Divider = styled.hr`
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid #ddd;
`;

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

interface ExperienceContainerProps {
children: ReactElement<ExperienceCardProps>[] | ReactElement<ExperienceCardProps>;
};

export const ExperienceContainer: React.FC<ExperienceContainerProps> = ({ children }) => {

    const [isCompleteExperiencePopupOpen, setCompleteExperiencePopupOpen] =
        useState(false);
    return (
        <Container>
            <Header>
                <Title>Experience</Title>

                <CustomButton label={"Add more"} preset="default" backgroundColor="#4B48EC"
                              textColor="#FFFFFF" onClick={() => setCompleteExperiencePopupOpen(true)}/>
            </Header>
            <DivisoryLine />
            <CardSection>
                {children}
            </CardSection>
            {isCompleteExperiencePopupOpen && (
                <AddExperiencePopup
                  title='Add Experience'
                  onClose={() => setCompleteExperiencePopupOpen(false)}
                />
            )}
        </Container>
    );
};



export default ExperienceCard;