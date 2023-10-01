import React from "react";
import styled from "styled-components";

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const HeadingTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const HeadingDescription = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;

interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <HeadingContainer>
      <HeadingTitle>{title}</HeadingTitle>
      <HeadingDescription>{description}</HeadingDescription>
    </HeadingContainer>
  );
};

export default Heading;
