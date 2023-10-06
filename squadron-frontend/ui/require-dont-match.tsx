import * as React from "react";
import { useState } from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import { ReactNode } from 'react';
import CustomButton from "./custom-button";
import RequiredMissingPopup from "./required-missing-popup";
import LocationMissingPopup from "./location-missing-popup";
import Spain from "../public/Spain.png";

import {
    basewhite,
    borderColor,
    boxShadow,
    gray600,
    gray900,
    primary600,
    regularFontSize,
    mediumFontSize,
    titleFontSize,
    xxlargeFontSize,
    regularFontWeight,
    mediumFontWeight,
    regularLineHeight,
    mediumLineHeight,
    largeLineHeight,
    xxxlargeLineHeight,
    fontFamily,
    regularLetterSpacing,
    warning600,
    titleFontWeight
} from "@/styles/reuseParams";


const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 12px;
`;
const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 16px 24px;
    gap: 4px;
`
const PopupBody = styled.div`
    padding: 0px 24px 0px 24px;
    overflow-y: auto;
    width: 100%;
    
`

const Title = styled.div`
    font-weight: ${titleFontWeight};
    font-size: ${titleFontSize};
    line-height: ${largeLineHeight};
    margin-top: 2%;
`;
const TitleDiscrption = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
    margin-top: 2%;

`
const ProfileItem = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 72px;
    width: 100%;
    padding: 0px 24px 0px 0px;
`
const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const ItemName = styled.div`
    font-weight: ${mediumFontWeight};
    font-size: ${mediumFontSize};
    line-height: ${mediumLineHeight};
`
const ItemShortDescrip = styled.div`
    color: #B42318;
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`
const ArrowIconButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
`
const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const PopupFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px;
    gap: 12px;       
    width: 100%;
    margin-top: 8px;
  
`;

const openNewPopup = () => {
    alert("open new popup");
}


interface RequireDontMatchProps {
    onClose: () => void;
    showDivider?: boolean;
    icon?: ReactNode;
}

const RequireDontMatchPopup: React.FC<RequireDontMatchProps> = ({
    onClose,
    showDivider = true,
    icon,
}) => {
    const [isSkillMissingPopupOpen, setSkillMissingPopupOpen] = useState(false);
    const [isToolMissingPopupOpen, setToolMissingPopupOpen] = useState(false);
    const [isLocationMissingPopupOpen, setLocationMissingPopupOpen] =
    useState(false);
    {/*to do:
    1. change the ItemshortDescrip to the real number and make it parameterized
    2. change 'update' to parameterized
    */}
    
    return (
        <>
            <PopupComponent onClose={onClose}
                width="27.8%"
                minWidth="400px"
                maxHeightPercent={0.3}
            >
                <ContentContainer>
                    <PopupHeader>
                        <Title>Blablabla missing</Title>
                        <TitleDiscrption>Some of the mandatory requirements do not match your profile</TitleDiscrption>
                    </PopupHeader>
                    
                    <PopupBody>
                        <ProfileItem>
                            <ItemContainer>
                                <ItemName>Skills required</ItemName>
                                <ItemShortDescrip>3 skills missing</ItemShortDescrip>
                            </ItemContainer>
                            <ArrowIconButtonContainer>
                                <CustomButton 
                                    label = 'Update'
                                    preset="text"
                                    textColor="#1B18E4"
                                    fontSize="14px"
                                    onClick={() => setSkillMissingPopupOpen(true)}
                                />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                        {showDivider && <Divider />}
                        <ProfileItem>
                            <ItemContainer>
                                <ItemName>Tools required</ItemName>
                                <ItemShortDescrip>2 tools missing</ItemShortDescrip>
                            </ItemContainer>
                            <ArrowIconButtonContainer>
                                <CustomButton 
                                    label = 'Update'
                                    preset="text"
                                    textColor="#1B18E4"
                                    fontSize="14px"
                                    onClick={() => setToolMissingPopupOpen(true)}
                                />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                        {showDivider && <Divider />}
                        <ProfileItem>
                            <ItemContainer>
                                <ItemName>Location</ItemName>
                                <ItemShortDescrip>The location is restricted to one country</ItemShortDescrip>
                            </ItemContainer>
                            <ArrowIconButtonContainer>
                            <CustomButton 
                                    label = 'Update'
                                    preset="text"
                                    textColor="#1B18E4"
                                    fontSize="14px"
                                    onClick={() => setLocationMissingPopupOpen(true)}
                                />
                            </ArrowIconButtonContainer>
                        </ProfileItem>
                        {showDivider && <Divider />}
                    </PopupBody>
                    
                    <PopupFooter>
                        <ButtonContainer>
                            <CustomButton
                                label="Cancel"
                                backgroundColor="#FFFFFF"
                                width="170px"
                                height="44px"
                                textColor="#384250"
                                borderColor="#D2D6DB" 
                                padding="10px 18px 10px 18px"
                                onClick={onClose}
                            />
                            <a href="/t5_proj_apply/application_apply">
                                <CustomButton
                                    label="Apply"
                                    backgroundColor="#4B48EC"
                                    width="170px"
                                    height="44px"
                                    textColor="#FFFFFF"
                                    borderColor="#4B48EC"
                                    padding="10px 18px 10px 18px"
                                    onClick={onClose}
                                />
                            </a>    
                        </ButtonContainer>
                    </PopupFooter>
                </ContentContainer>
            </PopupComponent>
            {isSkillMissingPopupOpen && (
        <RequiredMissingPopup onClose={() => setSkillMissingPopupOpen(false)} 
          badges={[
          { label: "Label", preset: "outlined_grey" },
          { label: "UX Design", preset: "outlined_grey" },
          ]}
          title="Required Skills Missing"
          description="Text and supporting text"
          noRequiredButtonLabel="I don't have these skills"
          addRequiredButtonLabel="Add skills"
        />
      )}
      {isToolMissingPopupOpen && (
        <RequiredMissingPopup onClose={() => setToolMissingPopupOpen(false)} 
          badges={[
          { label: "Tool", preset: "outlined_grey", icon: <img alt="photoshop logo" src="/photoshop.png" /> },
          { label: "Tool", preset: "outlined_grey", icon: <img alt="photoshop logo" src="/photoshop.png" /> },
          ]}
          title="Required Tools Missing"
          description="Text and supporting text"
          noRequiredButtonLabel="I don't use these tools"
          addRequiredButtonLabel="Add tools"
        />
      )}
      {isLocationMissingPopupOpen && (
        <LocationMissingPopup 
          onClose={() => setLocationMissingPopupOpen(false)} 
          title="Title about location mismatch"
          description="Text and supporting text"
          noRequiredButtonLabel="I don't live here"
          addRequiredButtonLabel="update my locations"
          imgSrc={Spain}  
          imgText="Barcelona"  
          imgDescription="Spain" 
        />
      )}

        </>
    );
};

export default RequireDontMatchPopup;
