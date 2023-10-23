"use client";
import React from "react";
import {Avatar, Card, CardContent, Grid, Typography} from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Card)`
  padding: 1rem;
  width: 21rem;  
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 21rem;


  border-radius: 0.75rem;  /* 12px / 16 = 0.75rem */
  background-color: #fff;
  border: 0.0625rem solid #e5e7eb;  /* 1px / 16 = 0.0625rem */
  color: #384250;
  font-family: Inter;
`;

const StyledCardContent = styled(CardContent)`
  
`;

const StyledAvatar = styled(Avatar)`
  width: 3.75rem;  
  height: 3.75rem;  
`;


const StyledTypography = styled(Typography)`
  &.name {
    font-weight: bold;
  }
  &.role {
    color: gray;
  }
  &.text {
    margin-top: 0.625rem;  // 从 10px 改为 0.625rem
  }
`;

interface ReviewCardProps {
    name: string;
    role: string;
    text: string;
}
const ReviewCard : React.FC<ReviewCardProps>  = ({name, role, text}) => {
    return (
        <StyledCard >
        <StyledCardContent>
            <Grid container spacing={2}>
                <Grid item>
                    <StyledAvatar alt={name} src="/path/to/avatar.jpg" />
                </Grid>
                <Grid item xs={8}>
                    <StyledTypography variant="h6" className="name">
                        {name}
                    </StyledTypography>
                    <StyledTypography variant="subtitle1" className="role">
                        {role}
                    </StyledTypography>
                </Grid>
            </Grid>
            <StyledTypography variant="body1" paragraph className="text">
                {text}
            </StyledTypography>
        </StyledCardContent>
    </StyledCard>
    );
};

export default ReviewCard;