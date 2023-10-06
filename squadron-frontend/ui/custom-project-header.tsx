"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ShareIcon from '@mui/icons-material/Share';
import CustomButton from './custom-button';
import {
    gray900,
    mediumFontSize,
    titleFontSize,
    xxlargeFontSize,
    regularFontWeight,
    mediumFontWeight,
    mediumLineHeight,
    largeLineHeight,
    xxxlargeLineHeight,
    fontFamily,
    regularLetterSpacing
} from "@/styles/reuseParams";

const TitleAndAvatarSlot = styled.div`
    align-items: center;
    flex: 0 0 auto;
    gap: 8px;
    position: relative;
    display:flex;
`
const CustomProjectHeaderContainer = styled.div<{ bgColor?: string }>`
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 24px;
    justify-content: space-between;
    padding: 24px 32px;
    position: relative;
    width: 100%;
    background-color: ${({ bgColor }) => bgColor || 'transparent'};
`
const ButtonSlot = styled.div`
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 8px;
    top: 24px
    position: relative;
`
const HeaderLogoContainer = styled.div`
    height: 96px;
    position: relative;
    width: 96px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const HeaderTitleContainer = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 12px;
    position: relative;
`
const HeaderTitle = styled.div`
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    position: relative;
`
const Titles = styled.div`
    color: white;
    flex: 1;
    font-family: ${fontFamily};
    font-size: ${titleFontSize}
    font-weight: ${mediumFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${largeLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
`
const ProjectName = styled.div`
    color: white;
    flex: 1;
    font-family: ${fontFamily};
    font-size: ${xxlargeFontSize};
    font-weight: ${mediumFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${xxxlargeLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
`
const ProjectPostDate = styled.div`
    color: white;
    font-family: ${fontFamily};
    font-size: ${mediumFontSize};
    font-weight: ${regularFontWeight};
    letter-spacing: ${regularLetterSpacing};
    line-height: ${mediumLineHeight};
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
`
interface CustomProjectHeaderProps {
    backgroundImage?: string; // Prop for background image

}

interface ButtonProp {
    isVisible: boolean;
    text?: string;
    textColor?: string;
    backgroundColor?: string;
    onClick?: () => void; // Optional click handler
    href?: string;
}

interface IconProps {
    isVisible: boolean;
    color?: string;
    onClick?: () => void; // Optional click handler
}

interface CustomProjectHeaderProps {
    backgroundImage?: string;
    backgroundColor?: string;
    avatarHeight?: string;
    avatarWidth?: string;
    avatarImagePath?: string;
    title1?: string;
    title2?: string;
    title3?: string;
    button?: ButtonProp;
    shareIcon?: IconProps;
    starIcon?: IconProps;
}

const CustomProjectHeader: React.FC<CustomProjectHeaderProps> = ({
    backgroundImage,
    backgroundColor,
    avatarImagePath,
    avatarHeight,
    avatarWidth,
    title1,
    title2,
    title3,
    button,
    shareIcon,
    starIcon,
}) => {
    const [isStarFilled, setIsStarFilled] = useState(false);

    const handleStarClick = () => {
        setIsStarFilled(!isStarFilled);
        starIcon?.onClick?.();
    };
    return (
        <CustomProjectHeaderContainer style={{ backgroundImage: `url(${backgroundImage})` } } bgColor={backgroundColor}>
            <TitleAndAvatarSlot>
                <HeaderLogoContainer>
                    <img src={avatarImagePath} alt="avatar" height={avatarHeight} width={avatarWidth} />
                </HeaderLogoContainer>
                <HeaderTitleContainer>
                    <HeaderTitle>
                        <Titles>{title1}</Titles>
                        <ProjectName>{title2}</ProjectName>
                        <ProjectPostDate>{title3}</ProjectPostDate>
                    </HeaderTitle>
                </HeaderTitleContainer>
            </TitleAndAvatarSlot>
            {/* <ButtonSlot>
                <ShareIcon style={{ color: '#A0D909' }} />
                <div onClick={handleClick}>
                    {isStarFilled ? <StarIcon style={{ color: '#A0D909' }} /> : <StarBorderIcon style={{ color: '#A0D909' }} />}
                </div>
                <a href=" ">
                    <CustomButton label="Apply as squad" preset="default" />
                </a>
            </ButtonSlot> */}
            <ButtonSlot>
                {shareIcon?.isVisible && <ShareIcon style={{ color: shareIcon.color }} onClick={shareIcon.onClick} />}
                {starIcon?.isVisible && (
                    <div onClick={handleStarClick}>
                        {isStarFilled ? 
                            <StarIcon style={{ color: starIcon.color }} /> : 
                            <StarBorderIcon style={{ color: starIcon.color }} />
                        }
                    </div>
                )}
                {button?.isVisible && (
                    <a href={button.href || "#"}>
                    <CustomButton label={button.text || ''} preset="default" backgroundColor = {button.backgroundColor} textColor={button.textColor} onClick={button.onClick} />
                </a>
                
                )}
            </ButtonSlot>
        </CustomProjectHeaderContainer>
    );
};
export default CustomProjectHeader;