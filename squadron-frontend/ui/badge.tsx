'use client'
import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';


type BadgeProps = {
    text: string;
    textColor?: string;
    iconUrl?: string;
    borderColor?: string;
    borderThickness?: string;
    backgroundColor?: string;
};

const BadgeDiv = styled.div<BadgeProps>`
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
    margin: 0 8px;
    border: ${(props) => props.borderThickness || '1px'} solid ${(props) => props.borderColor || '#4d5761'};
    background-color: ${(props) => props.backgroundColor || 'white'};
    color: ${(props) => props.textColor || '#4d5761'};
`;

const SkillAvatar = styled.img`
    border-radius: 8px;
    height: 16px;
    width: 16px;
    margin-right: 8px;
`;


export function Badge (props: BadgeProps) {
    return (
        <BadgeDiv {...props}>
            {props.iconUrl && <SkillAvatar src={props.iconUrl} />}
            <Typography variant="body2">{props.text}</Typography>
        </BadgeDiv>
    )
}