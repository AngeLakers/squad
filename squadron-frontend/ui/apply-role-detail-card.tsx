import React from 'react';
import { Divider } from '@mui/material';
import styled from 'styled-components';
import { Badge } from './badge';
import {
  fontFamily, regularLetterSpacing,
  gray200, gray600, gray900, primary600,
  largeFontSize, mediumFontSize, titleFontSize, regularFontSize,
  mediumLineHeight, xlargeLineHeight, largeLineHeight, regularLineHeight,
  mediumFontWeight, titleFontWeight, regularFontWeight,
} from "@/styles/reuseParams"

const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0px 1px 2px #1018280f, 0px 1px 3px #1018281a;
  width: 100%;
  position: relative;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
`;
const RoleDetailBodyContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  position: relative;
  width: 100%;
`
const RoleDetailCardLeftContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  border-right: 1.5px solid ${gray200};
`

const RoleDetailCardLeft = styled.div`
  align-items: flex-start;
  background-color: #f8f9fb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  position: relative;
  width: 90%;
`
const CompanyDetail = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  padding: 4% 0;
`
const RoleSection = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
  padding: 5% 0;
  border-top: 1.5px solid ${gray200};
`
const CompanyLogoAndName = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
`
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8efef;
  border-radius: 28px;
  height: 56px;
  position: relative;
  width: 56px;
  overflow: hidden;
`
const CompanyAvatar = styled.div`
    height: 50px;
    object-fit: cover;
    position: absolute;
    width: 50px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`
const CompanyAndProjectNameContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  position: relative;
  width: calc(100% - 48px);
`
const Frame3 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
`
const CompanyName = styled.div`
  align-self: stretch;
  color: ${gray900};
  flex: 1;
  font-family: ${fontFamily};
  font-size: ${titleFontSize};
  font-weight: ${mediumFontWeight};
  letter-spacing: ${regularLetterSpacing};
  line-height: ${largeLineHeight};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Web = styled.div`
  align-self: stretch;
  color: ${gray600};
  font-size: ${mediumFontSize};
  font-weight: ${regularFontWeight};
  height: 24px;
  letter-spacing: ${regularLetterSpacing};
  line-height: ${mediumLineHeight};
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const TimeEstimate = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`

const RelatedItemName = styled.div`
  color: ${gray900};
  font-size: ${mediumFontSize};
  font-weight: ${mediumFontWeight};
  letter-spacing: ${regularLetterSpacing};
  line-height: ${mediumLineHeight};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
`

const RelatedItemValue = styled.div`
  color: ${gray600};
  font-size: ${mediumFontSize};
  font-weight: ${regularFontWeight};
  letter-spacing: ${regularLetterSpacing};
  line-height: ${mediumLineHeight};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
`
const BudgetHoursLocationContainer = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  position: relative;
  width: 100%;
`

const RelatedItemNameIconContainer = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 7px;
  position: relative;
  max-width: calc(100% - 48px);
`
const LocationLinks = styled.div`
  color: ${primary600};
  font-size: ${mediumFontSize};
  font-weight: ${regularFontWeight};
  letter-spacing: ${regularLetterSpacing};
  line-height: ${mediumLineHeight};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
`
const RoleDetailCardRightContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: right;
`
const RoleDiscriptionSkill = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  width: 90%;
`
const Div3 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
`
const RoleDescriptionContainer = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
  padding: 3% 0;  
`
const DiscriptionText = styled.div`
  align-self: stretch;
  color: ${gray600};
  font-size: ${regularFontSize};
  font-weight: ${regularFontWeight};
  letter-spacing: ${regularLetterSpacing};
  line-height: ${regularLineHeight};
  position: relative;
`
const RequiredSkills = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
`

const SkillToolText = styled.div`
  color: ${gray900};
  font-size: ${regularFontSize};
  font-weight: ${mediumFontWeight};
  letter-spacing: ${regularLetterSpacing};
  line-height: ${regularLineHeight}};
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`
const BadgeContainer = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  position: relative;
`

const RoleDetailTitle = styled.h1`
  font-family: ${fontFamily};
  font-style: normal;
  font-weight: ${titleFontWeight};
  font-size: ${largeFontSize};
  line-height: ${xlargeLineHeight};
  color: ${gray900};
  margin-bottom: 20px;
`;

const RoleDetail: React.FC = () => {
  return (
    <Container>
      <RoleDetailTitle>Role Details</RoleDetailTitle>
      <Divider />
      <RoleDetailBodyContainer>
        <RoleDetailCardLeftContainer>
          <RoleDetailCardLeft>
            <CompanyDetail>
              <ImageWrapper>
                <CompanyAvatar>
                  <img src="/icon/projectLogo.svg" alt="logo" />
                </CompanyAvatar>
              </ImageWrapper>
              <CompanyAndProjectNameContainer>
                <CompanyName>Google</CompanyName>
                <Web>MVP for Serverless E-commerce Return Portal</Web>
              </CompanyAndProjectNameContainer>
            </CompanyDetail>
            <Divider />
            <RoleSection>
              <TimeEstimate>
                <RelatedItemName>Role required</RelatedItemName>
                <RelatedItemValue>Product Manager</RelatedItemValue>
              </TimeEstimate>
              <BudgetHoursLocationContainer>
                <RelatedItemName>Start date</RelatedItemName>
                <RelatedItemValue>Feb 1, 2023</RelatedItemValue>
              </BudgetHoursLocationContainer>
            </RoleSection>
            <Divider />
            <RoleSection>
              <BudgetHoursLocationContainer>
                <RelatedItemNameIconContainer>
                  <img src="/icon/coins.svg" alt="coin" />
                  <RelatedItemName>Client’s budget</RelatedItemName>
                </RelatedItemNameIconContainer>
                <RelatedItemValue>$80-$90 /h</RelatedItemValue>
              </BudgetHoursLocationContainer>
            </RoleSection>
            <Divider />
            <RoleSection>
              <BudgetHoursLocationContainer>
                <RelatedItemNameIconContainer>
                  <img src="/icon/clock.svg" alt="clock" />
                  <RelatedItemName>Hours</RelatedItemName>
                </RelatedItemNameIconContainer>
                <RelatedItemValue>40 h/week</RelatedItemValue>
              </BudgetHoursLocationContainer>
            </RoleSection>
            <Divider />
            <RoleSection>
              <BudgetHoursLocationContainer>
                <RelatedItemNameIconContainer>
                  <img src="/icon/locationPin.svg" alt="location" />
                  <RelatedItemName>Location</RelatedItemName>
                </RelatedItemNameIconContainer>
                <LocationLinks>See locations</LocationLinks>
              </BudgetHoursLocationContainer>
            </RoleSection>
          </RoleDetailCardLeft>
        </RoleDetailCardLeftContainer>
        <RoleDetailCardRightContainer>
          <RoleDiscriptionSkill>
            <Div3>
              <RoleDescriptionContainer>
                <RelatedItemName>Role Description</RelatedItemName>
                <DiscriptionText>This is discription of the role This is discription of the role This is discription of the role This is discription of the role This is discription of the role  </DiscriptionText>
              </RoleDescriptionContainer>
            </Div3>
            <Div3>
              <RequiredSkills>
                <SkillToolText>Skills</SkillToolText>
                <BadgeContainer>
                  <Badge
                    text='React'
                    textColor='#475467'
                    borderColor='#475467'
                    borderThickness='1px'
                  />
                </BadgeContainer>

              </RequiredSkills>
              <RequiredSkills>
                <SkillToolText>Recommended Skills</SkillToolText>
                <BadgeContainer>
                  <Badge
                    text='Java'
                    textColor='#475467'
                    borderColor='#475467'
                    borderThickness='1px'
                  />
                </BadgeContainer>
              </RequiredSkills>
              <RequiredSkills>
                <SkillToolText>Tools</SkillToolText>
                <BadgeContainer>
                  <Badge
                    text='Java'
                    textColor='#475467'
                    borderColor='#475467'
                    borderThickness='1px'
                    iconUrl='/icon/toolLogoSample.svg'
                  />
                </BadgeContainer>
              </RequiredSkills>

            </Div3>


          </RoleDiscriptionSkill>
        </RoleDetailCardRightContainer>
      </RoleDetailBodyContainer>
    </Container>
  );
}

export default RoleDetail;
