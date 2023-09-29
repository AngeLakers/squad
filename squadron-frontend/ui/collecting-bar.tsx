import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 12vh;
    box-sizing: border-box;
    border: 1px solid #ebebed;
    border-radius: 20px;
    padding: 2% 3%; 
    background-color:#f8fbfc;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
`;

const BarHeader = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 0.9em;
`;

const BarSubHeader = styled.p`
    margin: 0;
    font-size: 0.8em;
`;

const ReviewButton = styled.button`
    padding: 1% 2%;
    border-radius: 5px;
    background-color: #ecebff;
    color: #ffffff;
`;

const CollectingBar: React.FC = () => {
    return (
        <BarContainer>
            <TextContainer>
                <BarHeader>We are collecting the best talent for your team</BarHeader>
                <BarSubHeader>We'll let you know when it's ready to review</BarSubHeader>
            </TextContainer>
            <ReviewButton>Review Application</ReviewButton>
        </BarContainer>
    );
}

export default CollectingBar;

