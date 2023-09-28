import React from 'react';
import styled from 'styled-components';

const OuterContainer = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;     
    height: 100vh;           
`;

const Container = styled.div`
    width: 592px;
    height: 401px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;   
    align-items: center;
    justify-content: center;
    gap: 16px;   
`;

const TitleSubtitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;   
`;

const Title = styled.p`
    font-family: Inter;
    font-size: 30px;
    font-weight: 600;
    line-height: 38px;
    text-align: center;
    color: #111927;
    margin: 0;  // Remove default margin
`;

const Subtitle = styled.p`
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: #4D5761;
    margin: 0;  // Remove default margin
`;

const Frame7105 = styled.div`
    width: 384px;
    gap: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
`;

const Button1 = styled.button`
    /*width: 384px;
    height: auto;
    padding: 10px 18px;
    border-radius: 8px;
    border: 1px solid #4B48EC;
    box-shadow: 0px 1px 2px 0px #1018280D;
    background: #4B48EC;
    color: #FFFFFF;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center; */
`;

const Button2 = styled.button`
    /*width: 384px;
    height: auto;
    padding: 10px 18px;
    border-radius: 8px;
    border: 1px solid #D2D6DB;
    background: linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #D2D6DB, #D2D6DB);
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    color: #384250;
    text-align: center;*/
`;

type FeaturedIconProps = {
    bgColor?: string;
    iconName?: string;
};

const FeaturedIcon = styled.div<FeaturedIconProps>`
    background-color: ${({ bgColor }) => bgColor || '#D0FC4A'};
    width: 56px;
    height: 56px;
    padding: 14px;
    border-radius: 28px;
    img {
        width: 100%;
        height: 100%;
    }
`;

type Props = {
    featuredIconBgColor?: string;
    iconName?: string;
    titleText?: string;
    subtitleText?: string;
    button1Text?: string;
    button2Text?: string;
    button1Style?: React.CSSProperties;
    button2Style?: React.CSSProperties;
    showButton1?: boolean;
    showButton2?: boolean;
};

const ApplicationSent: React.FC<Props> = ({
    featuredIconBgColor,
    iconName = 'love',
    titleText = "title",
    subtitleText = "subtitle",
    button1Text = "New Button1 Text",
    button2Text = "New Button2 Text",
    button1Style,
    button2Style,
    showButton1 = true,
    showButton2 = false,
}) => (
    <OuterContainer>
        <Container>
            <Top>
                <FeaturedIcon bgColor={featuredIconBgColor}>
                    <img src={`/icon/${iconName}.svg`} alt="project" />
                </FeaturedIcon>
                <TitleSubtitle>
                    <Title>{titleText}</Title>
                    <Subtitle>{subtitleText}</Subtitle>
                </TitleSubtitle>
            </Top>
            <Frame7105>
            {showButton1 && <Button1 style={button1Style}>{button1Text}</Button1>}
            {showButton2 && <Button2 style={button2Style}>{button2Text}</Button2>}
            </Frame7105>
        </Container>
    </OuterContainer>
);

export default ApplicationSent;
