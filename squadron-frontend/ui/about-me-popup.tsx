import React, {useState}from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomTextarea from "./customtextarea";
import CustomButton from "./custom-button";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 5% 5%;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2%;
`;

const Description = styled.p`
    margin-bottom: 3%;
    color: #4D5761;
`;

const Divider = styled.hr`
    width: 100%; 
    margin-bottom: 3%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputRow = styled.div`
    display: flex;
    justify-content: space-between; 
    width: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    & > button:not(:last-child) {
      margin-right: 8px;
    }
    margin-top: 5%;
    width: 100%;
`;

interface AboutMeProps {
  onClose: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({ onClose }) => {
  const [textAreaContent, setTextAreaContent] = useState("");
  
  //todo: get the current about me content from the backend
  const handleUpdateClick = () => {
    console.log(textAreaContent);
    onClose();
  };

  return (
    <PopupComponent onClose={onClose} minWidth="640px" minHeight="367px">
      <Container>
        <Title>About me</Title>
        <Description>Description of this screen</Description>
        <Divider />
        <InputRow>
        <InputContainer>
            <CustomTextarea 
              label="About me"
              borderStyle="1px solid #D2D6DB" 
              width="640px" 
              height="118px" 
              showHintText={false}       
              />
        </InputContainer>
        </InputRow> 
        <ButtonContainer>
          <CustomButton
            label="Cancel"
            backgroundColor="#FFFFFF"
            textColor="#384250"
            borderColor="#D2D6DB" 
            onClick={onClose}
          />
          <CustomButton
            label="Update"
            backgroundColor="#4B48EC"
            textColor="#FFFFFF"
            borderColor="#4B48EC"
            onClick={handleUpdateClick} 
          />         
        </ButtonContainer>
      </Container>
    </PopupComponent>
  );
};

export default AboutMe;
