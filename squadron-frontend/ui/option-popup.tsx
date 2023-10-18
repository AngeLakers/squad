"use client";
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import PopupComponent from "./popup";

const BlackColor = "#000000";
const LightPurple = "#D1C4E9";
const DeepPurple = "#673AB7";
const LightBlue = "#A1A3F5";
const DeepBlue = "#4B48EC";

const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 24px 24px 24px 24px;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
    color: #101828;
`;

const Description = styled.div`
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #475467;
`;

const Divider = styled.hr`
    width: 100%;
    height: 1px;
    background-color: lightgray;
    border: none;
    margin: 24px 0;
`;

const RadioButtonGroupDiv = styled.div<{ optionsLength: number }>`
    display: grid;
    grid-template-columns: ${(props) =>
      props.optionsLength <= 3
        ? `repeat(${props.optionsLength}, 1fr)`
        : "1fr 1fr 1fr"};
    gap: 10px;
`;

interface RadioButtonProps {
    isSelected: boolean;
    fontSize?: '14px' | '24px';
    fontWeight?: '500' | '600';
}

const RadioButton = styled.div<RadioButtonProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.fontSize || '14px'};
    font-weight: ${(props) => props.fontWeight || '500'};
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${(props) => (props.isSelected ? BlackColor : "lightgray")};
    cursor: pointer;
`;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    & > div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #ccfc34;
    }
`;

const LoginPromptContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LoginLink = styled.a`
    color: #1B18E4;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
`;

const LoginText = styled.span`
    color: #4D5761;
    font-weight: 400;
    font-size: 14px;
    margin-right: 5px;
`;

const ActionRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
`;

const HelperDiv = styled.div`
    width: auto;
`;

interface NextButtonProps {
    active: boolean;
    useBlueTheme?: boolean;
}

const NextButton = styled.button<NextButtonProps>`
    padding: 10px 25px;
    border-radius: 8px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: ${(props) => 
      props.active 
          ? (props.useBlueTheme ? DeepBlue : DeepPurple) 
          : (props.useBlueTheme ? LightBlue : LightPurple)
  };
`;

interface SquadCustomProps {
    closeModal: () => void;
    title: string;
    description: string;
    options: string[];
    icons?: React.ReactNode[];
    link?: (selectedOption: string) => string;
    fontSize?: '14px' | '24px';
    fontWeight?: '500' | '600'; 
    width?: string;
    useBlueTheme?: boolean;
    showLoginPrompt?: boolean;
    onLoginClick?: () => void;
}

const SquadCustom: React.FC<SquadCustomProps> = ({
    closeModal,
    title,
    description,
    options,
    icons,
    link,
    fontSize, 
    fontWeight,
    width,
    useBlueTheme,
    showLoginPrompt = false,
    onLoginClick,
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
      <PopupComponent onClose={closeModal} minWidth="600px" maxHeightPercent={0.3} width={width}>
      <ModalContent>
        <div>
          {" "}
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Divider />
        </div>

        <RadioButtonGroup
          options={options}
          icons={icons}
          selectedOption={selectedOption}
          onChange={setSelectedOption}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
        <Divider />
        <ActionRow>
        {showLoginPrompt ? ( 
          <LoginPromptContainer>
            <LoginText>Already have an account?</LoginText>
            <LoginLink 
              onClick={(e) => {
                e.preventDefault(); 
                if(onLoginClick) {
                  onLoginClick(); 
                }
              }}
            >
              Log in
            </LoginLink>
          </LoginPromptContainer>
          ) : (
            <HelperDiv />
          )}

        <Link href={selectedOption && link ? link(selectedOption) : "#"}>
          <NextButton active={!!selectedOption} useBlueTheme={useBlueTheme} onClick={(e) => {
              if (!selectedOption) {
                e.preventDefault();
              } else {
                closeModal();
              }
            }}
          >
            Next
          </NextButton>
        </Link>
        </ActionRow>
      </ModalContent>
      </PopupComponent>
    );
  };

  interface RadioButtonGroupProps {
      options: string[];
      selectedOption: string | null;
      onChange: (selected: string) => void;
      icons?: React.ReactNode[]; 
      fontSize?: '14px' | '24px';
      fontWeight?: '500' | '600';
  }

  const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
      options,
      icons,
      selectedOption,
      onChange,
      fontSize,
      fontWeight,
  }) => {
    return (
        <RadioButtonGroupDiv optionsLength={options.length}>
            {options.map((option, index) => (
              <RadioButton
                key={option}
                isSelected={selectedOption === option}
                onClick={() => onChange(option)}
                fontSize={fontSize}
                fontWeight={fontWeight}
              >
                <Circle>{selectedOption === option && <div />}</Circle>
                {icons && icons[index]}
                {option}
              </RadioButton>
            ))}
        </RadioButtonGroupDiv>
        );
      };

export default SquadCustom;
