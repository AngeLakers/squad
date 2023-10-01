import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import {Icon, SvgIcon, Typography} from "@mui/material";
import Box from "@mui/material/Box";


const StyledCard = styled(Card)`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  border: 1px solid #e5e7eb;

  gap: 1rem;
  width: 32.375rem;
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
  position: relative;
`;


const BalanceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Percentage = styled.div`
  background-color: #e5e7eb;
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
`;

const StyledBox = styled(Box)`
  width: 25%;
  box-shadow: 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);
  position: relative;
  border-radius: 0.5rem;
  background-color: #fff;
  border: 1px solid #e5e7eb;
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

const StyledIcon = styled(Icon)`
  background-image: url('/images/image_smile.png');
  background-size: cover;
  width: 2.5rem;
  height: 2.5rem;
`;

const StyledScoreBackground = styled.div`
  position: relative;
  border-radius: 1rem;
  background-color: #039855;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 1rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
`;

const ScoreTypography = styled(Typography)`
  position: relative;
  line-height: 2rem;
  font-weight: 600;


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
                <img src={imageURL} alt="Time Icon" style={{ width: "100%", height: "100%" }} />
                <span style={textStyle}>{children}</span>
            </div>
        );
    } else {
        return (
            <div style={containerStyle}>
                <img src={imageURL} alt="Time Icon" style={{ width: "100%", height: "100%" }} />
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
`;


const BalanceBox: React.FC<BalanceBoxProps> = ({time, currentBalance, percentage}) => {
    return (
        <StyledBalanceBox>
            <TimeIcon time={time}>
                {time}h
            </TimeIcon>
            <BalanceInfo>
                <BalanceTypography >
                    <TextPart1>Current Balance</TextPart1>
                    <TextPart2>${currentBalance}</TextPart2>
                </BalanceTypography>
                <Percentage>{percentage}</Percentage>

            </BalanceInfo>
        </StyledBalanceBox>
    );
};


const SatisfactionBox: React.FC<{ score: number }> = ({score}) => {
    return (
        <StyledBox>
            <StyledIcon/>
            <StyledScoreBackground>
                <ScoreTypography variant="h6">{score} </ScoreTypography>
            </StyledScoreBackground>
        </StyledBox>
    );
};


interface LiveProjectCardProps {
    title: string;
    memberCount: number;
}

interface BalanceBoxProps {
    time: number;
    currentBalance: number;
    percentage: number;
}


const LiveProjectCard: React.FC<LiveProjectCardProps> = ({title, memberCount}) => {
    return (
        <StyledCard>
            <StyledCardHeader
                title={<StyledCardTitle>{title}</StyledCardTitle>}
                subheader={<StyledCardMemberCount>{memberCount} Members</StyledCardMemberCount>}
            />
            <StyledCardContent>
                <DateTypography variant="subtitle1">Feb 01 - 07</DateTypography>
                <Box display="flex" gap="1rem" width="100%" height="100%">
                    <BalanceBox time={12} currentBalance={5000} percentage={75}/>
                    <SatisfactionBox score={4.5}/>
                </Box>
            </StyledCardContent>

        </StyledCard>
    );
}

export default LiveProjectCard;