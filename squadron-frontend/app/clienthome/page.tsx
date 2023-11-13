"use client";
import React, { useRef } from "react";
import { useState } from 'react';
import Image from "next/image";
import styled from "styled-components";
import CustomButton from "@/ui/custom-button";
import HomeImageSrc from "@/public/t1-homescreen.png";
import { ComplexHeader } from "@/ui/complex-header";
import SquadCustom from "@/ui/option-popup";
import customizeImage from '../../public/customize.png';
import worldWideWebImage from '../../public/world-wide-web.png';
import mobilePhoneImage from '../../public/mobile-phone.png';
import marketingImage from '../../public/marketing.png';
import growthImage from '../../public/growth.png';
import dataImage from '../../public/data.png';
import TalentClientImage from "@/public/talent-client.png";
import {
  ArrowLeftGreySVG,
  ArrowLeftSVG,
  ArrowRightGreySVG,
  ArrowRightSVG,
  CopySVG,
  CrossSVG,
  EmailSVG,
  HomeStarSVG,
  LinkedInSVG,
  ProjectLogo3SVG,
  ShareSVG,
  StarSVG,
  TwitterSVG,
} from "@/ui/svgs";
import { Application } from "@/ui/Application";
import SquadCard from "@/ui/squad-card";
import LiveProjectCard from "@/ui/liveproject-card";
import { Ste } from "@/ui/Ste";
import { Ste2 } from "@/ui/Ste2";

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e7eb;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0px 8px 0px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  gap: 56px;
  padding: 40px 32px 40px 32px;
  max-width: 1200px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const WelcomeHeading = styled.div`
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const ViewButtonTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ViewButtonText = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 4px;
  letter-spacing: 0em;
  text-align: left;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const SectionHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SectionHeaderButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const SectionHeading = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const ApplicationCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0px 24px 0px;
  gap: 24px;
`;

const ApplicationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 352px;
  gap: 16px;
`;

const ApplicationCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ApplicationCardInfoHeading = styled.div`
  color: #111927;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;
const ApplicationCardInfoContent = styled.div`
  color: #4d5761;
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`;

const SquadCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  gap: 24px;
  overflow-x: hidden;
`;

const SquadCardContainer = styled.div`
  width: 615px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 64px;
  border-radius: 12px;
  padding: 24px 40px 24px 40px;
  height: 274px;
`;

const WalletCard = styled(Card)`
  background-color: #0b0f00;
  color: #ffffff;
  flex: 1;
`;

const SustainabilityCard = styled(Card)`
  background-color: #d0fc4a;
  color: #111818;
  flex: 1;
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardLeftInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardRightInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const CardLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 22px;
`;

const CardImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const CardHeading = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;

const WalletHeading = styled(CardHeading)`
  color: #dafb6a;
`;

const CardNumber = styled.div`
  font-family: Inter;
  font-size: 30px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
`;

const CardDescription = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;

const ReferCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 24px;
  width: 408px;
  height: 274px;
  background-color: #ffffff;
`;

const BlankCardHeading = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const BlankCardDescription = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;

const WalletCardDescription = styled(BlankCardDescription)`
  width: 328px;
`;

const ReferCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const BlankCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ReferCardSocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

const ReferCardLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border: 1px solid #d2d6db;
`;

const ReferCardLink = styled.input`
  :disabled {
    background-color: #f9fafb;
    color: #6c737f;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    border-radius: 8px;
    padding: 8px 12px 8px 12px;
    flex: 1;
  }
`;

const ReferCardCopyButton = styled.button`
  border-left: 1px solid #d2d6db;
  padding: 10px 16px 10px 16px;
`;

const CommunityCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  height: 274px;
  flex: 1;
`;

const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eaecf0;
`;

const AvatarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1.5px solid #ffffff;
  margin-left: -6px;
  &:first-child {
    margin-left: 0;
  }
`;

const Avatars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StoryCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background-color: #ffffff;
`;

const StoryCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
`;

const StoryCardHeading = styled.div`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const StoryCardHeadingButton = styled.button`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #1b18e4;
`;

const StoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;
`;

const StoryCardMainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
`;

const StoryCardMainImage = styled.img`
  width: 312px;
  height: 160px;
  border-radius: 8px;
`;

const StoryCardSubImage = styled.img`
  width: 192px;
  height: 147px;
  border-radius: 8px;
`;

const StoryCardFeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StoryCardFeaturedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StoryCardFeaturedInfo = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4b48ec;
`;

const StoryCardInfoHeading = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #111927;
`;

const StoryCardInfoDescription = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #4d5761;
`;
const StoryCardSubContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
`;

const StoryCardSmallCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex: 1;
`;

const StoryCardSubContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StoryCardSubContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const SectionHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

const TemplateLibrary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const HeadingDescription = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #384250;
`;

const LibraryHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TemplateRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
`;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 8px;
  height: 222px;
  flex: 1;
  background-image: url("templatebackground.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  justify-content: flex-end;
`;

const TemplateHeading = styled.div`
  color: #ffffff;
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;

const TemplateInfo = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

const ScrollCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  gap: 24px;
  overflow-x: hidden;
`;

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const icons = [
    <Image src={customizeImage} alt="Custom Icon" width="32" height="32" />,
    <Image src={worldWideWebImage} alt="Web Platform Icon" width="32" height="32" />,
    <Image src={mobilePhoneImage} alt="Mobile Phone Icon" width="32" height="32" />,
    <Image src={marketingImage} alt="Marketing Website Icon" width="32" height="32" />,
    <Image src={growthImage} alt="Growth Icon" width="32" height="32" />,
    <Image src={dataImage} alt="Data Icon" width="32" height="32" />
  ];
  const squadsInFormationRef = useRef<HTMLDivElement | null>(null);
  const liveSquadsRef = useRef<HTMLDivElement | null>(null);
  const handleSquadScroll = (
    direction: string,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const container = ref.current;
    if (container) {
      const scrollAmount = 530;
      const currentScroll = container.scrollLeft;
      container.scrollTo({
        top: 0,
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <HomeContainer>
      <HeadingContainer>
        <Header>
          <WelcomeHeading>Hi, Stir 👋</WelcomeHeading>
          <ButtonContainer>
            <CustomButton
              preset="default"
              icon={<CrossSVG />}
              label={"Create project"}
              onClick={() => setModalOpen(true)}
            />
          </ButtonContainer>
        </Header>
        <Divider />
      </HeadingContainer>
      <ContentContainer>
        <SectionContainer>
          <SectionHeaderContainer>
            <SectionHeadingContainer>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="#FDB022" />
              </svg>
              <SectionHeading>Squads in Formation</SectionHeading>
            </SectionHeadingContainer>
            <SectionHeaderButtonContainer>
              <CustomButton
                preset="outlined"
                label={<ArrowLeftGreySVG />}
                onClick={() => handleSquadScroll("left", squadsInFormationRef)}
              />
              <CustomButton
                preset="outlined"
                label={<ArrowRightGreySVG />}
                onClick={() => handleSquadScroll("right", squadsInFormationRef)}
              />
            </SectionHeaderButtonContainer>
          </SectionHeaderContainer>
          <ScrollCardsContainer ref={squadsInFormationRef}>
            <Ste2 /> <Ste /> <Ste />
          </ScrollCardsContainer>
        </SectionContainer>
        <SectionContainer>
          <SectionHeaderContainer>
            <SectionHeadingContainer>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="#32D583" />
              </svg>

              <SectionHeading>Live Squads</SectionHeading>
            </SectionHeadingContainer>
            <SectionHeaderButtonContainer>
              <CustomButton
                preset="outlined"
                label={<ArrowLeftGreySVG />}
                onClick={() => handleSquadScroll("left", liveSquadsRef)}
              />
              <CustomButton
                preset="outlined"
                label={<ArrowRightGreySVG />}
                onClick={() => handleSquadScroll("right", liveSquadsRef)}
              />
            </SectionHeaderButtonContainer>
          </SectionHeaderContainer>
          <ScrollCardsContainer ref={liveSquadsRef}>
            <LiveProjectCard
              title="MVP for Serverless E-commerce..."
              memberCount={4}
              balanceInfo={{
                time: 120,
                currentBalance: 15360,
                percentage: 3.7,
              }}
              score={4.9}
            />
            <LiveProjectCard
              title="MVP for Serverless E-commerce..."
              memberCount={4}
              balanceInfo={{
                time: 120,
                currentBalance: 15360,
                percentage: 3.7,
              }}
              score={4.9}
            />
            <LiveProjectCard
              title="MVP for Serverless E-commerce..."
              memberCount={4}
              balanceInfo={{
                time: 120,
                currentBalance: 15360,
                percentage: 3.7,
              }}
              score={4.9}
            />
          </ScrollCardsContainer>
        </SectionContainer>
        <TemplateLibrary>
          <LibraryHeadingContainer>
            <SectionHeading>Template Library</SectionHeading>
            <HeadingDescription>
              Learn how market leading businesses have used Squadron to achieve
              their missions and customise your own squad in just a few clicks.
            </HeadingDescription>
          </LibraryHeadingContainer>
          <TemplateRow>
            <Template>
              <TemplateHeading>
                Alice: DeFi App Reinventing Finance at Scale
              </TemplateHeading>
              <TemplateInfo>UX Designer UI Designer +6</TemplateInfo>
              <Avatars>
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
              </Avatars>
            </Template>
            <Template>
              <TemplateHeading>
                Alice: DeFi App Reinventing Finance at Scale
              </TemplateHeading>
              <TemplateInfo>UX Designer UI Designer +6</TemplateInfo>
              <Avatars>
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
              </Avatars>
            </Template>
            <Template>
              <TemplateHeading>
                Alice: DeFi App Reinventing Finance at Scale
              </TemplateHeading>
              <TemplateInfo>UX Designer UI Designer +6</TemplateInfo>
              <Avatars>
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
              </Avatars>
            </Template>
          </TemplateRow>
          <TemplateRow>
            <Template>
              <TemplateHeading>
                Alice: DeFi App Reinventing Finance at Scale
              </TemplateHeading>
              <TemplateInfo>UX Designer UI Designer +6</TemplateInfo>
              <Avatars>
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
              </Avatars>
            </Template>
            <Template>
              <TemplateHeading>
                Alice: DeFi App Reinventing Finance at Scale
              </TemplateHeading>
              <TemplateInfo>UX Designer UI Designer +6</TemplateInfo>
              <Avatars>
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
              </Avatars>
            </Template>
            <Template>
              <TemplateHeading>
                Alice: DeFi App Reinventing Finance at Scale
              </TemplateHeading>
              <TemplateInfo>UX Designer UI Designer +6</TemplateInfo>
              <Avatars>
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
              </Avatars>
            </Template>
          </TemplateRow>
        </TemplateLibrary>
        <CardsContainer>
          <WalletCard>
            <CardImageContainer>
              <img src="walletbackground.png" />
            </CardImageContainer>
            <WalletHeading>Wallet</WalletHeading>
            <CardInfoContainer>
              <CardLeftInfo>
                <CardLogoContainer>
                  <img src="walletlogo.png" />
                  <CardNumber>540</CardNumber>
                </CardLogoContainer>
                <CardDescription>points available</CardDescription>
              </CardLeftInfo>
              <CardRightInfo>
                <div>
                  <CardNumber>0</CardNumber>
                  <CardDescription>in escrow</CardDescription>
                </div>
                <div>
                  <CardNumber>210</CardNumber>
                  <CardDescription>via referrals</CardDescription>
                </div>
              </CardRightInfo>
            </CardInfoContainer>
          </WalletCard>
          <SustainabilityCard>
            <CardImageContainer>
              <img src="sustainabilitybackground.png" />
            </CardImageContainer>
            <CardHeading>Sustainability</CardHeading>
            <CardInfoContainer>
              <CardLeftInfo>
                <CardLogoContainer>
                  <img src="sustainabilitylogo.png" />
                  <CardNumber>373.3</CardNumber>
                </CardLogoContainer>
                <CardDescription>
                  tonnes of CO2e removed from the atmosphere
                </CardDescription>
              </CardLeftInfo>
              <CardRightInfo>
                <div>
                  <CardNumber>186.7</CardNumber>
                  <CardDescription>annual emissions</CardDescription>
                </div>
                <div>
                  <CardNumber>7</CardNumber>
                  <CardDescription>actions taken</CardDescription>
                </div>
              </CardRightInfo>
            </CardInfoContainer>
          </SustainabilityCard>
        </CardsContainer>
        <StoryCard>
          <StoryCardHeadingContainer>
            <StoryCardHeading>
              Stories, tips and tools to inspire your best work.
            </StoryCardHeading>
            <StoryCardHeadingButton>View all</StoryCardHeadingButton>
          </StoryCardHeadingContainer>
          <StoryCardContainer>
            <StoryCardMainContentContainer>
              <StoryCardFeaturedContainer>
                <StoryCardFeaturedContent>
                  <StoryCardFeaturedInfo>Featured</StoryCardFeaturedInfo>
                  <StoryCardInfoHeading>
                    Hire Smarter, Not Harder: How Cloud-Based Squads Can Help
                    You Thrive In A Volatile Market
                  </StoryCardInfoHeading>
                  <StoryCardInfoDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius facilisis arcu viverra elit pretium.Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. Varius facilisis arcu
                    viverra elit pretium.
                  </StoryCardInfoDescription>
                </StoryCardFeaturedContent>
              </StoryCardFeaturedContainer>
              <StoryCardMainImage src="home1.png" />
            </StoryCardMainContentContainer>
            <Divider />
            <StoryCardSubContentContainer>
              <StoryCardSmallCardContainer>
                <StoryCardSubImage src="home2.png" />
                <StoryCardSubContent>
                  <StoryCardSubContentInfo>
                    <StoryCardInfoHeading>
                      Why We Were Destined To Power the Innovator Economy
                    </StoryCardInfoHeading>
                    <StoryCardInfoDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Varius facilisis arcu viverra elit pretium adsasd
                    </StoryCardInfoDescription>
                  </StoryCardSubContentInfo>
                  <div>
                    <CustomButton preset="outlined" label={"Read more"} />
                  </div>
                </StoryCardSubContent>
              </StoryCardSmallCardContainer>
              <StoryCardSmallCardContainer>
                <StoryCardSubImage src="home3.png" />
                <StoryCardSubContent>
                  <StoryCardSubContentInfo>
                    <StoryCardInfoHeading>
                      Just Laid Off? Here&apos;s How To Bounce Back Stronger
                      Than Ever
                    </StoryCardInfoHeading>
                    <StoryCardInfoDescription>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Varius facilisis arcu viverra elit pretium adsasd
                    </StoryCardInfoDescription>
                  </StoryCardSubContentInfo>
                  <div>
                    <CustomButton preset="outlined" label={"Read more"} />
                  </div>
                </StoryCardSubContent>
              </StoryCardSmallCardContainer>
            </StoryCardSubContentContainer>
          </StoryCardContainer>
        </StoryCard>
      </ContentContainer>
      {isModalOpen && (
        <SquadCustom
          closeModal={() => {
            setModalOpen(false);
          }}
          title={"Squad Presets"}
          description={
            "Select a preset to see recommended role appear, or build your custom squad from scratch. Don’t worry, you can always add or remove roles in the next step."
          }
          options={["Custom", "Web Platform", "Mobile App",
            "Marketing Website", "Growth", "Data"]}
          icons={icons}
          link={(selectedOption) => selectedOption === "Custom" ? "/c4/proj_detail_custom" : "/c4/proj_detail_preset"}
        />
      )}
    </HomeContainer>
  );
}
