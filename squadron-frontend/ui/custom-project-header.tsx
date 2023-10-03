"use client"
import React, { useState } from 'react';
import styled from 'styled-components';

const TitleAndAvatarSlot = styled.div`
    align-items: center;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
    display:flex;
`
const CustomProjectHeaderContainer = styled.div`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 24px;
    justify-content: space-between;
    padding: 24px 32px;
    position: relative;
    width: 100%;
`
const ButtonSlot = styled.div`
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    top: 24px
    position: relative;
`
interface CustomProjectHeaderProps {
    backgroundImage?: string; // Prop for background image
    titleAndAvatarContent?: React.ReactNode; // Prop for TitleAndAvatarSlot content
    buttonContent?: React.ReactNode; // Prop for ButtonSlot content
}
const CustomProjectHeader: React.FC<CustomProjectHeaderProps> = ({
    backgroundImage,
    titleAndAvatarContent,
    buttonContent,
}) => {
    return (
        <CustomProjectHeaderContainer style={{ backgroundImage: `url(${backgroundImage})` }}>
            <TitleAndAvatarSlot>
                {titleAndAvatarContent || null} {/* Insert content or fallback to null */}
            </TitleAndAvatarSlot>
            <ButtonSlot>
                {buttonContent || null} {/* Insert content or fallback to null */}
            </ButtonSlot>
        </CustomProjectHeaderContainer>
    );
};
export default CustomProjectHeader;