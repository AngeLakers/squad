import React, {useState}from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomTextarea from "./customtextarea";
import CustomButton from "./custom-button";
import { TrashSVG } from "./svgs";
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
    padding: 24px 24px 16px 24px;
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
    overflow-y: auto;
   
`;

const BodyForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
`;
const LanguageForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
    gap: 16px;
    width: 100%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 40%;
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

const DeleteButton = styled.button`
    display: flex;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    margin-left: auto;
    margin-top:5%;
   
`;

const AddButton = styled.button`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #4B48EC;
    border: none;
    outline: none;
    cursor: pointer;
`;

const PopupFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding:32px 0px 0px 0px; 
`;


const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0px 24px 24px 24px;
    gap: 12px;
`;

interface LanguageProps {
  onClose: () => void;
}

const LanguagePopup: React.FC<LanguageProps> = ({ onClose }) => {
    const [formInputs, setFormInputs] = useState([
        { language: '', level: '' }
    ]);

    const addInput = () => {
        setFormInputs([...formInputs, { language: '', level: '' }]);
    };

    const deleteInput = (index: number) => {
        const newFormInputs = [...formInputs];
        newFormInputs.splice(index, 1);
        setFormInputs(newFormInputs);
    };
    

  return (
    <>
        <PopupComponent onClose={onClose} width="432px" maxHeightPercent={0.1}>
          <Container>
            <PopupHeader>
              <Title>Language</Title>
              <Description>Intro of this screen</Description>
            </PopupHeader>
            
            <Divider />
            
            <PopupBody>
                <BodyForm>
                    <LanguageForm>
                        {formInputs.map((input, index: number) => (
                            <FormContainer key={index}> 
                                <InputContainer>
                                    <InputLabel>Language</InputLabel>
                                    <CustomInput 
                                        type="language"
                                        value={input.language}
                                        onChange={e => {
                                            const newFormInputs = [...formInputs];
                                            newFormInputs[index].language = e.target.value;
                                            setFormInputs(newFormInputs);
                                        }}
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <InputLabel>Level</InputLabel>
                                    <CustomInput
                                        type="level"
                                        value={input.level}
                                        onChange={e => {
                                            const newFormInputs = [...formInputs];
                                            newFormInputs[index].level = e.target.value;
                                            setFormInputs(newFormInputs);
                                        }}
                                    />
                                </InputContainer>  
                                <DeleteButton onClick={() => deleteInput(index)}>
                                    <TrashSVG />
                                </DeleteButton>
                            </FormContainer>
                        ))}
                    </LanguageForm>
                    <AddButton onClick={addInput}>
                        + Add another
                    </AddButton>
                </BodyForm>
            </PopupBody>
                
            <PopupFooter>
                <ButtonContainer>
                  <CustomButton
                    label="Cancel"
                    preset="outlined"
                    hoverColor={gray200}
                    textColor={gray700}
                    borderColor={gray300}         
                    onClick={onClose}
                  />
                  <CustomButton
                    label="Update"
                    preset="default"
                    onClick={onClose} 
                  />         
                </ButtonContainer>
            </PopupFooter>
          </Container>
        </PopupComponent>

        
    </>
  );
};

export default LanguagePopup;
