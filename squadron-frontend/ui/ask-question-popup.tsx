import React, {ReactNode, useState} from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomButton from "./custom-button";
import portraitAImage from "@/public/portraitA.png";
import Image from "next/image";
import CustomTextarea from "./customtextarea";

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

const faqs = [
    { question: "Can I change my plan later?", answer: "answer 1" },
    { question: "What is your cancellation policy?", answer: "answer 2" },
    { question: "Can other info be added to an invoice?", answer: "answer 3" },
    { question: "How does billing work?", answer: "answer 4" },
    { question: "How do I change my account email?", answer: "answer 5" },
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;//maybe change to center
    justify-content: center;
    width: 100%;
    
`;

const PopupHeader = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 24px 24px 24px 24px;
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

const ContentText = styled.div`
    font-width: 500;
    font-size: 16px;
    line-height: 24px;

`;

const PopupBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 32px 24px 32px 24px;
    gap: 24px;
   
    overflow-y: auto;
    max-height: 600px;
`;

const AskConent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    gap: 16px;
    
`;

const ImageDiv = styled.div`
    background-color: #F3F4F6;
    display: flex;
    align-items: center;
    padding: 8px 24px 8px 8px;
    border: 1px solid #F3F4F6;
    width:100%;
    height: 72px;
    border-radius: 8px;
`;

const NameDiv = styled.div`
    display: flex;
    margin-left:12px;
    flex-direction: column;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    & > button:not(:last-child) {
    margin-right: 12px;
    }
    width: 100%;
`;

const HintText = styled.div`
    align-self: flex-end;
`;
const Divider = styled.hr`
    width: 100%; 
`;

const DividerWithText = styled.div`
    position: relative;
    width: 100%;
    text-align: center;

    &::before, &::after {
        content: '';
        background-color: #E5E7EB; 
        height: 1px;
        width: 50%;
        vertical-align: middle;
        display: inline-block;
    }

    &::before {
        right: 0.5rem;
        margin-left: -50%;
    }

    &::after {
        left: 0.5rem;
        margin-right: -50%;
    }

    span {
        font-size: 14px;
        position: relative;
        z-index: 1;
        text-color: #4D5761;
        padding: 0 0.5rem;
    }
`;


const QuestionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    
    gap: 16px;
   
`;

const FAQitemWarp = styled.div<{ isOpen: boolean }>`
    background-color: ${({ isOpen }) => (isOpen ? "#F9FAFB" : "white")};    
    display: flex;
    flex-direction: column;
    align-items: space-between;
    width: 100%;
    padding: 16px 32px 8px 32px;
    border-radius: 16px;
    
     
`;
const FAQHeader = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    width: 100%; 
    margin-bottom: 8px;
    
`;

const FAQContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 80%;
    
`;


interface AskQuestionProps {
    onClose: () => void;
    image?: React.ReactNode;
    name?: string;
    role?: string;
}

const AskQuestionPopup: React.FC<AskQuestionProps> = ({ 
    onClose,
    image = <Image key="portraitAImage" src={portraitAImage} alt="portraitA Icon" width="48" height="48"/>,
    name = "Patricia Montero", 
    role = "Product Manager", 
 }) => {
    
    const initialState: Record<number, boolean> = {};
    faqs.forEach((_, index) => {
        initialState[index] = false;
    });

    const [faqOpen, setFaqOpen] = useState(initialState);


  return (
    <PopupComponent onClose={onClose} 
    width='792px'
    
    
    >
      <Container>
        <PopupHeader>
            <Title>Ask a question</Title>
            <Description>Ask blablabla a question or check their FAQ </Description>
        </PopupHeader>
        <Divider/>
        <PopupBody>
            <AskConent>
                <ImageDiv>
                    {image}
                    <NameDiv> 
                        <span style={{ fontSize: 'smaller', color: 'grey' }}>{name}</span>
                        <span>{role}</span>
                    </NameDiv>
                </ImageDiv>
                <CustomTextarea 
                    label="Ask a question"
                    borderStyle="1px solid #D2D6DB" 
                    width="100%" 
                    height="80%" 
                    showHintText={false}       
                />
                <ButtonContainer>
                    <CustomButton
                        label="Cancel"
                        backgroundColor="#FFFFFF"
                        textColor="#384250"
                        borderColor="#D2D6DB" 
                        onClick={onClose}
                    />
                    <CustomButton
                        label="Send question"
                        backgroundColor="#4B48EC"
                        textColor="#FFFFFF"
                        borderColor="#4B48EC"
                        //onClick=send questions
                    />         
                </ButtonContainer> 
                <HintText>
                    <Description>
                    You will receive a response to your question in your email
                    </Description>
                </HintText>
            </AskConent>
            
            <DividerWithText>
                <span>Or</span>
            </DividerWithText>

            <ContentText>FAQ</ContentText>
    
            <QuestionContent>
                {faqs.map((faqItem, index) => (
                    <React.Fragment key={index}>
                        <FAQitemWarp isOpen={faqOpen[index]}>
                            <FAQHeader>
                                <ContentText>{faqItem.question}</ContentText>
                                <button onClick={() => setFaqOpen({ ...faqOpen, [index]: !faqOpen[index] })}>
                                    {faqOpen[index] ? 
                                        <img src={`/icon/minus-circle.svg`} alt="Minus Icon" /> : 
                                        <img src={`/icon/plus-circle.svg`} alt="Plus Icon" />
                                    }
                                </button>
                            </FAQHeader>
                            <FAQContent>
                                {faqOpen[index] && <Description>{faqItem.answer}</Description>}
                            </FAQContent>
                        </FAQitemWarp>

                    </React.Fragment>
                ))}
            </QuestionContent>
        </PopupBody>
      </Container>
    </PopupComponent>
  )
};

export default AskQuestionPopup;