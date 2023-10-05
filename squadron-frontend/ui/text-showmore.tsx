import styled from "styled-components";
import React, { useState } from "react";

interface TextProps {
  fontSize: string;
  fontColor: string;
  lineHeight: string;
  fontWeight: number;
}

const Text = styled.div<TextProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  color: ${({ fontColor }) => fontColor};
  overflow: hidden;
`;

const ShowMoreButton = styled.button<TextProps>`
  background-color: transparent;
  border: none;
  color: #4b48ec;
  padding-left: 3px;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  &:hover {
    text-decoration: underline;
  }
`;

interface ShowMoreTextProps extends TextProps {
  text: string;
  showMoreLength: number;
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({
  text,
  showMoreLength,
  fontSize,
  fontColor,
  lineHeight,
  fontWeight,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongAnswer = text.length > showMoreLength;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const shownText =
    isLongAnswer && !isExpanded ? text.substring(0, showMoreLength) : text;

  return (
    <Text
      fontSize={fontSize}
      fontColor={fontColor}
      lineHeight={lineHeight}
      fontWeight={fontWeight}
    >
      {shownText}
      {!isExpanded && isLongAnswer && <span>...</span>}
      {isLongAnswer && (
        <ShowMoreButton
          fontSize={fontSize}
          fontColor={fontColor}
          lineHeight={lineHeight}
          fontWeight={fontWeight}
          onClick={toggleExpanded}
        >
          {isExpanded ? "See Less" : "See More"}
        </ShowMoreButton>
      )}
    </Text>
  );
};

export default ShowMoreText;
