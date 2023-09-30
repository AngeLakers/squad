"use client";
import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import PopupComponent from "./popup";

const BlackColor = "#000000";
const LightPurple = "#D1C4E9";
const DeepPurple = "#673AB7";

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
}

const RadioButton = styled.div<RadioButtonProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${(props) => (props.isSelected ? BlackColor : "lightgray")};
    cursor: pointer;
    height: 112px;
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

interface NextButtonProps {
  active: boolean;
}

const NextButton = styled.button<NextButtonProps>`
    padding: 10px 25px;
    border-radius: 8px;
    border: none;
    color: white;
    cursor: pointer;
    float: right;
    bottom: 20px;
    right: 20px;
    background-color: ${(props) => (props.active ? DeepPurple : LightPurple)};
`;

interface SquadCustomProps {
    closeModal: () => void;
    title: string;
    description: string;
    options: string[];
    icons?: React.ReactNode[];
    link?: (selectedOption: string) => string;
}

const SquadCustom: React.FC<SquadCustomProps> = ({
    closeModal,
    title,
    description,
    options,
    icons,
    link,
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
      <PopupComponent onClose={closeModal} minWidth="612px">
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
        />
        <Divider />
        <Link href={selectedOption && link ? link(selectedOption) : "#"}>
          <NextButton active={!!selectedOption} onClick={(e) => {
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
      </ModalContent>
      </PopupComponent>
    );
  };

  interface RadioButtonGroupProps {
      options: string[];
      selectedOption: string | null;
      onChange: (selected: string) => void;
      icons?: React.ReactNode[]; 
  }

  const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
      options,
      icons,
      selectedOption,
      onChange,
  }) => {
    return (
        <RadioButtonGroupDiv optionsLength={options.length}>
            {options.map((option, index) => (
              <RadioButton
                key={option}
                isSelected={selectedOption === option}
                onClick={() => onChange(option)}
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
