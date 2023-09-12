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
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const Description = styled.div`
  margin-bottom: 20px;
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: lightgray;
  border: none;
  margin: 15px 0;
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
  height: 80px;
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
  padding: 10px 20px;
  border-radius: 5px;
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
  link: string;
}

const SquadCustom: React.FC<SquadCustomProps> = ({
  closeModal,
  title,
  description,
  options,
  link,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <PopupComponent onClose={closeModal}>
    <ModalContent>
      <div>
        {" "}
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Divider />
      </div>

      <RadioButtonGroup
        options={options}
        selectedOption={selectedOption}
        onChange={setSelectedOption}
      />
      <Divider />
      <Link href={link}>
        <NextButton active={!!selectedOption} onClick={() => closeModal()}>
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
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <RadioButtonGroupDiv optionsLength={options.length}>
      {options.map((option) => (
        <RadioButton
          key={option}
          isSelected={selectedOption === option}
          onClick={() => onChange(option)}
        >
          <Circle>{selectedOption === option && <div />}</Circle>
          {option}
        </RadioButton>
      ))}
    </RadioButtonGroupDiv>
  );
};

export default SquadCustom;
