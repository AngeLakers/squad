"use client";
import * as React from "react";
import styled from "styled-components";
import StepHeading from "./step-heading";
import Image from 'next/image';
import ProductImage from '@/public/product.png';
import DesignImage from '@/public/design.png';
import EngineeringImage from '@/public/engineering.png';
import MarketingImage from '@/public/marketing.png';
import StrategyImage from '@/public/strategy.png';
import ContentImage from '@/public/content.png';
import { useState } from 'react';

const QuestionnaireContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 12% 0px 12%;
  gap: 64px;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const QuestionTitle = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
`;

type SquareProps = {
    isSelected?: boolean;
  };

const Square = styled.div<SquareProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 24px 29px;
  gap: 8px;
  border: 1px solid #D2D6DB;
  background-color: ${props => props.isSelected ? '#F4FFC7' : 'white'};
  cursor: pointer;
  transition: background-color 0.3s;
`;

const SquareText = styled.div<SquareProps>`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.isSelected ? '#3F580F' : '#111927'};
`;

const OptionContainer = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    cursor: pointer;
    color: #384250;
    font-size: 14px;
    font-weight: 400;
`;

type CheckboxProps = {
    checked?: boolean;
  } ;


const Checkbox = styled.span<CheckboxProps>`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid ${props => props.checked ? '#3F580F' : '#D2D6DB'};
    background-color: ${props => props.checked ? '#F4FFC7' : 'white'};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
`;

const InnerCircle = styled.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #0B0F00;
`;

const NotSureYetOption = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #384250;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default function Questionnaire3T() {
  const [selectedBox, setSelectedBox] = useState("");

  const handleBoxClick = (boxName: string) => {
    setSelectedBox(boxName);
  };

  const options = [
    { name: "Product", image: ProductImage },
    { name: "Design", image: DesignImage },
    { name: "Engineering", image: EngineeringImage },
    { name: "Marketing", image: MarketingImage },
    { name: "Strategy", image: StrategyImage },
    { name: "Content", image: ContentImage }
  ];
  return (
    <QuestionnaireContainer>
      <StepHeading step={"Step 03/07"} heading={"What are you looking for"} progress={43} />
      <QuestionContainer>
        <Question>
          <QuestionTitle>What do you need help with?</QuestionTitle>
          <GridContainer>
            {options.map(option => (
              <Square key={option.name} onClick={() => handleBoxClick(option.name)} isSelected={selectedBox === option.name}>
                <Image src={option.image} alt={option.name} />
                <SquareText isSelected={selectedBox === option.name}>{option.name}</SquareText>
              </Square>
            ))}
          </GridContainer>
          <NotSureYetOption onClick={() => handleBoxClick("Not Sure yet")}>
            <Checkbox checked={selectedBox === "Not Sure yet"}>
              {selectedBox === "Not Sure yet" && <InnerCircle />}
            </Checkbox>
            Not Sure yet
          </NotSureYetOption>
        </Question>
      </QuestionContainer>
    </QuestionnaireContainer>
  );
}
  
  
  
  
  