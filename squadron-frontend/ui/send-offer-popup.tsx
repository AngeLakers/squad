import React, {ReactNode, useState} from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomButton from "./custom-button";
import portraitAImage from "@/public/portraitA.png";
import Image from "next/image";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 24px 24px 0 24px;
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 4px;
`;

const Description = styled.p`
    margin-bottom: 24px;
    color: #475467;
    font-size: 14px;
`;

const Divider = styled.hr`
    width: 100%; 
    margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 12px;
    padding: 0 0 24px 0;
    width: 100%;
`;

const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
    width:100%;
`;

const ImageDiv = styled.div`
    background-color: #F3F4F6;
    display: flex;
    align-items: center;
    padding: 8px;
    border: 1px solid #F3F4F6;
    width:100%;
    height: 64px;
    margin-bottom: 20px;
`;

const InfoDiv = styled.div`
    width:100%;
`;

const NameDiv = styled.div`
    margin-left:12px;
`;

const TextDetail = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    text-align: right;
    margin-bottom: 16px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`;

const CheckboxLabel = styled.label`
    margin-left: 8px;
    color: #384250;
    font-size: 14px;
    font-weight: 500;
`;

interface SendOfferProps {
    onClose: () => void;
    image?: React.ReactNode;
    name?: string;
    role?: string;
    commitment?: string;
    hourlyRate?: string;
    project?: string;
    client?: string;
    sendOfferLink?: string;
}

const SendOfferPopup: React.FC<SendOfferProps> = ({ 
    onClose,
    image = <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" width="48" height="48"/>,
    name = "Patricia Montero", 
    role = "Product Manager",
    commitment = "40h/week", 
    hourlyRate = "$85/h", 
    project = "Serverless Return Portal",
    client = "Stir" ,
    sendOfferLink,
 }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  }

  return (
    <PopupComponent onClose={onClose} width="35%" minWidth="400px">
      <Container>
        <Title>Send Offer</Title>
        <Description>Confirm details of your offer below</Description>
        <Divider />
        <DetailDiv>
          <ImageDiv>
            {image}
            <NameDiv>{name}</NameDiv>
          </ImageDiv>
          <InfoDiv>
            <TextDetail><span>Role:</span> <span>{role}</span></TextDetail>
            <TextDetail><span>Commitment:</span> <span>{commitment}</span></TextDetail>
            <TextDetail><span>Hourly rate:</span> <span>{hourlyRate}</span></TextDetail>
            <TextDetail><span>Project:</span> <span>{project}</span></TextDetail>
            <TextDetail><span>Client:</span> <span>{client}</span></TextDetail>
          </InfoDiv>
        </DetailDiv>
        <Divider />
        <CheckboxContainer>
          <input type="checkbox" id="signContract" onChange={handleCheckboxChange} />
          <CheckboxLabel>Click here to sign the contract</CheckboxLabel>
        </CheckboxContainer>
        <Divider />
        <ButtonContainer>
          <a href={sendOfferLink}>
            <CustomButton label="Send Offer" preset="default" borderColor="#D0D5DD" padding="10px 16px" hoverColor="none" backgroundColor={isChecked ? 'black' : '#D2D6DB'} textColor= 'white' width="100%"/>
            </a>
          <CustomButton label="Cancel" preset="default" padding="10px 16px" backgroundColor="white" textColor="#344054" hoverColor="none" borderColor="#D0D5DD" onClick={onClose}/>
        </ButtonContainer>
      </Container>
    </PopupComponent>
  )
};

export default SendOfferPopup;