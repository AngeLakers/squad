"use client"

import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import {Icon, SvgIcon, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {useRouter} from "next/navigation";


const StyledCard = styled(Card)`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  border: 1px solid #e5e7eb;
  flex-shrink: 0;
 
  gap: 1rem;
  width: 32rem;
  height: 21.25rem;
  border-radius: 0.75rem;
  flex-direction: column;



`;
const StyledCardHeader = styled(CardHeader)`
  width: 100%;

  position: relative;
  background-color: #0b0f00;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.5rem !important;
  box-sizing: border-box;
  gap: 1rem;
  text-align: left;
  font-size: 1.25rem;
  color: #fff;


  background-image: url('/Lines.svg');

  background-repeat: no-repeat;
  background-position: right center;
  background-size: auto 100%;
`;

const StyledCardTitle = styled.span`
  width: 100%;
  position: relative;
  font-size: 1.25rem;
  line-height: 1.88rem;
  font-weight: 600;
  color: #fff;
  text-align: left;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 1.88rem;
`;
const StyledCardMemberCount = styled.span`
  position: relative;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: #d0fc4a;
  text-align: left;
  margin-bottom: 1rem !important;
`;


const StyledCardContent = styled(CardContent)`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 1.5rem 1.5rem;
  box-sizing: border-box;
  //gap: 1rem;
  text-align: left;
  font-size: 0.88rem;
  color: #6c737f;
`;

const DateTypography = styled(Typography)`
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-weight: 500;

  color: #6c737f;
  text-align: left;
  margin-bottom: 1rem !important;
`;


const StyledBalanceBox = styled(Box)`

  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  border: 1px solid #e5e7eb;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 0.88rem;
  color: #6c737f;
  height: 100%;
  flex: 1;
  width: 100%;
`;




const BalanceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

const Percentage = styled.div`

  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  border-radius: 1rem;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding: 0.13rem 0.5rem ;
  box-sizing: border-box;
  mix-blend-mode: multiply;
  text-align: center;
  font-size: 0.75rem;
  color: #384250;
  gap: 0.25rem;

  ${props => props.isActive && `
  
  
        position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  border-radius: 1rem;

  mix-blend-mode: multiply;
  text-align: center;
  font-size: 0.75rem;

      
      
        background-color: #ecfdf3;
     
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding: 0.13rem 0.5rem ;
        box-sizing: border-box;
       font-weight: 600;
   
        color: #027a48;
    `}




`;


interface StyledBoxProps {
    isInteractive?: boolean;
}

const StyledBox = styled(Box)<StyledBoxProps>`
  width: 25%;
  box-shadow: ${(props) => (props.isInteractive ? '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)' : 'none')};
  position: relative;
  border-radius: 0.5rem;
  background-color: #fff;
  border: ${(props) => (props.isInteractive ? '1px solid #e5e7eb' : 'none')};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  text-align: center;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

type StyledIconProps = {
    score: number;
};
export const StyledIcon = styled(Icon)<StyledIconProps>`
  background-image: url(${props => {
    if (props.score >= 4.0 && props.score <= 5.0) return '/images/image_smile.png';
    if (props.score >= 3.0 && props.score < 4.0) return '/images/image_nofeeling.png';
    if (props.score > 0 && props.score < 3.0) return '/images/image_sad.png';
    return '/images/image_smile.png';  // some default image
}});
  background-size: cover;
  width: 2.5rem;
  height: 2.5rem;
`;

interface ScoreBackgroundProps {
    score: number;
}
export const StyledScoreBackground = styled.div<ScoreBackgroundProps>`
  
  position: relative;
  border-radius: 1rem;
  background-color: ${({ score }) => {
    if (score >= 4.0 && score <= 5.0) return '#039855';
    if (score >= 3.0 && score < 4.0) return '#F79009';
    if (score > 0 && score < 3.0) return '#D92D20';
    return '#f3f4f6'; // default color if score is 0 or out of expected range
}};
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  margin-top: 0.75rem;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  font-size: 1.5rem;

`;

export const ScoreTypography = styled(Typography)`
  margin:0;
  position: relative;
  line-height: 2rem;
  font-weight: 600;
  color: #fff;


`;
const TimeIcon: React.FC<{ time: number }> = ({time, children}) => {
    const isSVG = time !== 0;
    const imageURL = isSVG
        ? "/timetracking-green-cycle.png"
        : "/icon/timetracking-void-cycle.svg";

    const containerStyle = {
        width: "6.875rem",
        height: "6.875rem",
        marginRight: "1.5rem",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '1.5rem',
        lineHeight: '2rem',
        fontWeight: 600,
        fontFamily: 'Inter',
        color: '#111927',
        textAlign: 'center'
    };

    if (isSVG) {
        return (
            <div style={containerStyle}>
                <img src={imageURL} alt="Time Icon" style={{width: "100%", height: "100%"}}/>
                <span style={textStyle}>{children}</span>
            </div>
        );
    } else {
        return (
            <div style={containerStyle}>
                <img src={imageURL} alt="Time Icon" style={{width: "100%", height: "100%"}}/>
                <span style={textStyle}>{children}</span>
            </div>
        );
    }
};

const TextPart1 = styled.span`
  position: relative;
  font-size: 0.88rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: #6c737f;
  display: block;
  vertical-align: top;
`;

const TextPart2 = styled.span`
  position: relative;
  font-size: 2.25rem;
  letter-spacing: -0.02em;
  line-height: 2.75rem;
  font-weight: 600;
  color: #111927;
  display: inline-block;
  vertical-align: top;
`;

const BalanceTypography = styled(Typography)`
  text-align: left;
  margin-bottom: 1rem !important;
`;




const BalanceBox: React.FC<BalanceBoxProps> = ({time, currentBalance, percentage}) => {
    return (
        <StyledBalanceBox>
            <TimeIcon time={time}>
                {time}h
            </TimeIcon>
            <BalanceInfo>
                <BalanceTypography>
                    <TextPart1>Current Balance</TextPart1>
                    <TextPart2>${currentBalance}</TextPart2>
                </BalanceTypography>
                <Percentage isActive={time !== 0}>
                    {time !== 0 &&
                        <img src="/icon/arrow-up.svg" alt="Increase"  />}

                    {time === 0 ? '--%' : `${percentage}%`}
                </Percentage>

            </BalanceInfo>
        </StyledBalanceBox>
    );
};


export const SatisfactionBox: React.FC<{ isInteractive?: boolean, score: number }> = ({ isInteractive = true, score, children }) => {


    const router  =  useRouter();


    const handleClick = () => {
        if (isInteractive) {
            router.push('/homescreen/pulse_survey');
            console.log('Box clicked');
        }
    }


    return (

        <StyledBox  isInteractive  onClick={handleClick}>
            {score !== 0 && <StyledIcon score={score} />}
            <StyledScoreBackground score={score}>

                <ScoreTypography variant="h6">{score === 0 ? '--' : score.toFixed(1)} </ScoreTypography>
            </StyledScoreBackground>
        </StyledBox>
    );
};


interface LiveProjectCardProps {
    title: string;
    memberCount: number;
    balanceInfo: BalanceBoxProps;
    score: number;
}

interface BalanceBoxProps {
    time: number;
    currentBalance: number;
    percentage: number;
}


const LiveProjectCard: React.FC<LiveProjectCardProps> = ({title, memberCount, score, balanceInfo}) => {
    return (
        <StyledCard>
            <StyledCardHeader
                title={<StyledCardTitle>{title}</StyledCardTitle>}
                subheader={<StyledCardMemberCount>{memberCount} Members</StyledCardMemberCount>}
            />
            <StyledCardContent>
                <DateTypography variant="subtitle1">Feb 01 - 07</DateTypography>
                <Box display="flex" gap="1rem" width="100%" height="100%">
                    <BalanceBox time={balanceInfo.time} currentBalance={balanceInfo.currentBalance}
                                percentage={balanceInfo.percentage}/>
                    <SatisfactionBox score={score}/>
                </Box>
            </StyledCardContent>

        </StyledCard>
    );
}

export default LiveProjectCard;