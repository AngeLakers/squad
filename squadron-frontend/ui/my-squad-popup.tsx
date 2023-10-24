import React, {useState} from "react";
import PopupComponent from "./popup";
import styled from "styled-components";
import CustomTextarea from "./customtextarea";
import CustomButton from "./custom-button";
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
import {ScoreTypography, StyledScoreBackground} from "@/ui/liveproject-card";
import Image from "next/image";
import InvitationSentPopup from "@/ui/invitation-sent-popup";


const QuestionContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  margin-top: 2rem;
  gap: 1rem;
`;

const QuestionText = styled.p`
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: Inter;
  color: #384250;
  text-align: left;
  display: inline-block;


`;


const OptionsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;


const Option = styled(StyledScoreBackground)`
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)}; 
    cursor: pointer;
    transition: opacity 0.3s ease;
  flex-grow: 1;
  justify-content: center;

    &:hover {
        opacity: 1;
    }
`;


const QuestionComponent = ({question, options}) => {
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    return(
    <QuestionContainer>
        <QuestionText>{question}</QuestionText>
        <OptionsContainer>
            {options.map((option, index) => (
                <Option
                    score={option.score}
                    key={index}
                    isSelected={index === selectedOptionIndex}
                    onClick={() => setSelectedOptionIndex(index)}
                >
                    <ScoreTypography variant="h6">
                        {Math.floor(option.score).toFixed(1)}
                    </ScoreTypography>
                </Option>
            ))}
        </OptionsContainer>
    </QuestionContainer>
    );
};

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
  padding: 24px 24px 0px 24px;
  gap: 16px;
  margin-bottom: 24px;
`;

const PopupBody = styled.div`
  padding: 16px 24px 0px 24px;
  gap: 20px;
  overflow-y: auto;
  width: 100%;

`;

const PopupFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 32px 0px 0px 0px;

`;

const Title = styled.div`
  padding:  1.5rem 0px 0px 0px;
  font-weight: 600;
  font-size: 18px;
  line-height: ${largeLineHeight};
  text-align: left;
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
const Icon = styled.div`
    margin-top: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  & > button:not(:last-child) {
    margin-right: 12px;
  }

  width: 100%;
  padding: 0px 1.5rem 1.5rem 1.5rem;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 24px;
`;

interface AboutMeProps {
    onClose: () => void;
    onSubmit: () => void ;
}

export const Mysquad: React.FC<AboutMeProps> = ({onClose}) => {
    const [textAreaContent, setTextAreaContent] = useState("");


    //todo: get the current about me content from the backend
    const handleSubmitClick = () => {
        console.log(textAreaContent);
        onClose();
    };
    const question = "How would you rate your squad these past 2 weeks?";
    const options = [
        {score: 1.0},
        {score: 2.0},
        {score: 3.0},
        {score: 4.0},
        {score: 5.0}
    ];


    return (
        <PopupComponent onClose={onClose}
                        width="30rem"
                        maxHeightPercent={0.1}>
            <Container>
                <PopupHeader>
                    <Title>Squad pulse rating</Title>
                    <Description>The squad pulse gives your the opportunity to rate your team every two weeks,
                        to help us flag any rising issues,
                        get ahead of resourcing needs, and recognize squad members for good performance. </Description>
                </PopupHeader>
                <Divider/>

                <PopupBody>

                    <QuestionComponent question={question} options={options}/>

                    <CustomTextarea
                        label="What would you like your squad to do differently to improve your experience?"
                        borderStyle="1px solid #D2D6DB"
                        width="100%"
                        height="80%"
                        showHintText={true}
                    />
                </PopupBody>
                <Divider/>

                <PopupFooter>
                    <ButtonContainer>
                        <CustomButton
                            label="Cancel"
                            backgroundColor="#FFFFFF"
                            textColor="#384250"
                            borderColor="#D2D6DB"
                            width="50%"
                            onClick={onClose}
                        />
                        <CustomButton
                            label="Update"
                            backgroundColor="#111927"
                            textColor="#FFFFFF"
                            borderColor="#4B48EC"
                            width="50%"
                            onClick={() => handleSubmitClick()}
                        />
                    </ButtonContainer>
                </PopupFooter>
            </Container>

        </PopupComponent>
    );
};

interface SquadPulseSubmittedProps {
    onClose: () => void;
}
export const SquadPulseSubmittedPopup: React.FC<SquadPulseSubmittedProps> = ({
                                                                onClose,

                                                            }) => {
    return (
        <PopupComponent
            onClose={onClose}
            width="400px"
            maxHeightPercent={0.1}
        >
            <ContentContainer>
                <Icon><Image src={`/icon/check.svg`} alt="Check" width={48} height={48} /></Icon>
                <Title>Squad pulse submitted</Title>


            </ContentContainer>
        </PopupComponent>
    );
};
