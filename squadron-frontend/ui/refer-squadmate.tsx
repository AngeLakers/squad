import React, {useState}from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomTextarea from "./customtextarea";
import CustomButton from "./custom-button";
import InvitationSentPopup from "./invitation-sent-popup";
//import { useEffect } from "react";

import {
  basewhite,
  gray200,
  gray300,
  gray600,
  gray700,
  primary600,
  regularFontSize,
  titleFontSize,
  regularFontWeight,
  mediumFontWeight,
  regularLineHeight,
  largeLineHeight,
  titleFontWeight,
} from "@/styles/reuseParams";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

`;

const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    gap: 8px; 
    
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 18px;
    line-height: ${largeLineHeight};
`;

const Description = styled.div`
    color: ${gray600};
    font-weight: ${regularFontWeight};
    font-size: ${regularFontSize};
    line-height: ${regularLineHeight};
`;

const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
`;

const PopupBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px 24px 0px 24px;
    gap: 40px;
    width: 100%;  
   
`;

const BodyForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`;

const InputLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #384250; 
`;

const CustomInput = styled.input`
    padding: 10px 14px;
    border: 1px solid #d2d6db;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
`;


const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const RadioWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #384250; 
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;


const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  appearance: none;

  border-radius: 50%;

  border: 1px solid #d2d6db;

  position: relative;

  &:checked {
    border: 1px solid #3f580f;
    background-color: #f4ffc7;
  }

  &:checked::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    background: #0b0f00;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;

const PopupFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding:32px 0px 0px 0px;
    
`;


const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 24px 24px 24px;
    gap: 12px;
`;

interface ReferSquadmateProps {
  onClose: () => void;
}

const ReferSquadmatePopup: React.FC<ReferSquadmateProps> = ({ onClose }) => {

  const [isInvitationSentPopupOpen, setIsInvitationSentPopupOpen] = useState(false);
  const handleSendInvitationClick = () => {
    setIsInvitationSentPopupOpen(true);
    // onClose(); 
};


  return (
    <>
        <PopupComponent onClose={onClose} width="424px">
          <Container>
            <PopupHeader>
              <Title>Role Invitation</Title>
              <Description>Blablablabla</Description>
            </PopupHeader>
            
            <Divider />
            
            <PopupBody>
              {/* todo: add icons in custom input */}
              
                <BodyForm>
                  <InputContainer>
                      <InputLabel>Full name</InputLabel>
                      <CustomInput
                          
                          type="text"
                          />
                  </InputContainer>
                  <InputContainer>
                      <InputLabel>Email</InputLabel>
                      <CustomInput
                          placeholder="Email"
                          type="email"
                      />
                  </InputContainer>
                  <InputContainer>
                      <InputLabel>LinkedIn (optional)</InputLabel>
                      <CustomInput
                          placeholder="Role"
                          type="text"
                      />
                  </InputContainer>
                </BodyForm>

                <CheckBoxContainer>
                    <InputLabel>Have you delivered a similar project with them previously?</InputLabel>
                    <RadioWrapper>
                        <RadioInput type="radio" name="radio" id="yes" />
                        <label htmlFor="yes">Yes</label>
                    </RadioWrapper>
                    <RadioWrapper>
                        <RadioInput type="radio" name="radio" id="no" />
                        <label htmlFor="no">No</label>
                    </RadioWrapper>
                </CheckBoxContainer>

            </PopupBody>
                
            <PopupFooter>
                <ButtonContainer>
                  <CustomButton
                    label="Cancel"
                    backgroundColor="#FFFFFF"
                    textColor="#384250"
                    borderColor="#D2D6DB" 
                    width="182px"
                    onClick={onClose}
                  />
                  <CustomButton
                    label="Sent Invitation"
                    backgroundColor="#4B48EC"
                    textColor="#FFFFFF"
                    borderColor="#4B48EC"
                    width="182px"
                    onClick={handleSendInvitationClick} 
                  />         
                </ButtonContainer>
            </PopupFooter>
          </Container>
        </PopupComponent>

        {isInvitationSentPopupOpen && (
        <InvitationSentPopup
          onClose={() => setIsInvitationSentPopupOpen(false)}
        />
      )}
    </>
  );
};

export default ReferSquadmatePopup;
