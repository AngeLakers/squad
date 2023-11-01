import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const rotateCircle = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const CircleContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 1.5px solid #F3F4F6;
`;

const RotatingBorder = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-radius: 50%;
    transform-origin: center;
    animation: ${rotateCircle} 5s linear infinite;
`;


const TextContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
`;


type TimerProps = {
    initialSeconds?: number;
    onTimeEnd?: () => void; 
};

const CountdownTimer: React.FC<TimerProps> = ({ initialSeconds = 60, onTimeEnd }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        if (seconds > 0) {
          const timeout = setTimeout(() => setSeconds(seconds - 1), 1000);
          return () => clearTimeout(timeout);
        } else {
          onTimeEnd && onTimeEnd();
        }
      }, [seconds, onTimeEnd]);

    

    return (
        <CircleContainer>
            <RotatingBorder />
            <TextContent>
                {seconds}s
            </TextContent>
        </CircleContainer>
    );
};

export default CountdownTimer;
