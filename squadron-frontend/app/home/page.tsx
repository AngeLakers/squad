"use client";
import React, { useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import CustomButton from "@/ui/custom-button";
import HomeImageSrc from "@/public/t1-homescreen.png";
import { ComplexHeader } from "@/ui/complex-header";
import SquadCustom from "@/ui/option-popup";
import TalentClientImage from "@/public/talent-client.png";
import {
  ArrowLeftGreySVG,
  ArrowLeftSVG,
  ArrowRightGreySVG,
  ArrowRightSVG,
  CopySVG,
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1.5px solid #ffffff;
  margin-left: -10px;
  &:first-child {
    margin-left: 0;
  }
`;

const Avatars = styled.div`
  display: flex;
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

export default function Home() {
  const squadCardsRef = useRef<HTMLDivElement | null>(null);

  const handleSquadScroll = (direction: string) => {
    const container = squadCardsRef.current;
    if (container) {
      const scrollAmount = 510;
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
          <WelcomeHeading>Hi, Taylor</WelcomeHeading>
          <ButtonContainer>
            <CustomButton
              preset="yellow"
              icon={<HomeStarSVG />}
              label={
                <ViewButtonTextContainer>
                  <ViewButtonText>5/5</ViewButtonText>
                  <ViewButtonText>View all reviews</ViewButtonText>
                </ViewButtonTextContainer>
              }
            />
            <CustomButton
              preset="outlined"
              icon={<ShareSVG />}
              label={"Refer Talent"}
            />
          </ButtonContainer>
        </Header>
        <Divider />
      </HeadingContainer>
      <ContentContainer>
        <SectionContainer>
          <SectionHeaderContainer>
            <SectionHeading>My applications</SectionHeading>
            <SectionHeaderButtonContainer>
              <CustomButton preset="outlined" label={<ArrowLeftGreySVG />} />
              <CustomButton preset="outlined" label={<ArrowRightGreySVG />} />
            </SectionHeaderButtonContainer>
          </SectionHeaderContainer>
          <ApplicationCard>
            <ApplicationCardContainer>
              <img src="cloudsearch.png" width={"152px"} height={"118px"} />
              <ApplicationCardInfoContainer>
                <ApplicationCardInfoHeading>
                  No applications
                </ApplicationCardInfoHeading>
                <ApplicationCardInfoContent>
                  You haven’t applied any role yet. Start searching for projects
                </ApplicationCardInfoContent>
              </ApplicationCardInfoContainer>
            </ApplicationCardContainer>
            <CustomButton preset="outlined" label={"Search projects"} />
          </ApplicationCard>
        </SectionContainer>
        <SectionContainer>
          <SectionHeaderContainer>
            <SectionHeading>Newest matches</SectionHeading>
            <SectionHeaderButtonContainer>
              <CustomButton
                preset="outlined"
                label={<ArrowLeftGreySVG />}
                onClick={() => handleSquadScroll("left")}
              />
              <CustomButton
                preset="outlined"
                label={<ArrowRightGreySVG />}
                onClick={() => handleSquadScroll("right")}
              />
            </SectionHeaderButtonContainer>
          </SectionHeaderContainer>
          <SquadCardsContainer ref={squadCardsRef}>
            <SquadCardContainer>
              <SquadCard
                badgeTitles={["Food & Beverage"]}
                squadTitle={"Mobile App for Specialty Beverage Enthusiasts "}
                squadSubTitle={"untappd"}
                squadDescription="For all the wine snobs and craft beer connoisseurs like us, we’re building Untappd - a mobile app that lets people share and discover their favourite blends, brands and venues with their friends, while earning badges and rewards for exploring beverages of different styles and countries. ..."
                icon={<ProjectLogo3SVG />}
                type="project"
                data={[
                  "Product Manager",
                  "iOS Developer",
                  "Android Developer",
                  "UX Designer",
                  "UI Designer",
                ]}
              />
            </SquadCardContainer>
            <SquadCardContainer>
              <SquadCard
                badgeTitles={["Food & Beverage"]}
                squadTitle={"Mobile App for Specialty Beverage Enthusiasts "}
                squadSubTitle={"untappd"}
                squadDescription="For all the wine snobs and craft beer connoisseurs like us, we’re building Untappd - a mobile app that lets people share and discover their favourite blends, brands and venues with their friends, while earning badges and rewards for exploring beverages of different styles and countries. ..."
                icon={<ProjectLogo3SVG />}
                type="project"
                data={[
                  "Product Manager",
                  "iOS Developer",
                  "Android Developer",
                  "UX Designer",
                  "UI Designer",
                ]}
              />
            </SquadCardContainer>
            <SquadCardContainer>
              <SquadCard
                badgeTitles={["D2C", "D2C"]}
                squadTitle={"Mobile App for Specialty Beverage Enthusiasts "}
                squadSubTitle={"untappd"}
                squadDescription="For all the wine snobs and craft beer connoisseurs like us, we’re building Untappd - a mobile app that lets people share and discover their favourite blends, brands and venues with their friends, while earning badges and rewards for exploring beverages of different styles and countries. ..."
                icon={<ProjectLogo3SVG />}
                type="project"
                data={[
                  "Product Manager",
                  "iOS Developer",
                  "Android Developer",
                  "UX Designer",
                  "UI Designer",
                ]}
              />
            </SquadCardContainer>
            <SquadCardContainer>
              <SquadCard
                badgeTitles={["D2C"]}
                squadTitle={"Mobile App for Specialty Beverage Enthusiasts "}
                squadSubTitle={"untappd"}
                squadDescription="For all the wine snobs and craft beer connoisseurs like us, we’re building Untappd - a mobile app that lets people share and discover their favourite blends, brands and venues with their friends, while earning badges and rewards for exploring beverages of different styles and countries. ..."
                icon={<ProjectLogo3SVG />}
                type="project"
                data={[
                  "Product Manager",
                  "iOS Developer",
                  "Android Developer",
                  "UX Designer",
                  "UI Designer",
                ]}
              />
            </SquadCardContainer>
            <SquadCardContainer>
              <SquadCard
                badgeTitles={["D2C"]}
                squadTitle={"Mobile App for Specialty Beverage Enthusiasts "}
                squadSubTitle={"untappd"}
                squadDescription="For all the wine snobs and craft beer connoisseurs like us, we’re building Untappd - a mobile app that lets people share and discover their favourite blends, brands and venues with their friends, while earning badges and rewards for exploring beverages of different styles and countries. ..."
                icon={<ProjectLogo3SVG />}
                type="project"
                data={[
                  "Product Manager",
                  "iOS Developer",
                  "Android Developer",
                  "UX Designer",
                  "UI Designer",
                ]}
              />
            </SquadCardContainer>
          </SquadCardsContainer>
        </SectionContainer>
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
        <CardsContainer>
          <ReferCard>
            <ReferCardContentContainer>
              <BlankCardInfoContainer>
                <BlankCardHeading>Refer a friend</BlankCardHeading>
                <WalletCardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius facilisis arcu viverra elit pretium.
                </WalletCardDescription>
              </BlankCardInfoContainer>
              <ReferCardLinkContainer>
                <ReferCardLink value="www.squadronexamplelink.com" disabled />
                <ReferCardCopyButton>
                  <CopySVG />
                </ReferCardCopyButton>
              </ReferCardLinkContainer>
            </ReferCardContentContainer>
            <ReferCardSocialContainer>
              <CustomButton preset="avatar" label={<LinkedInSVG />} />
              <CustomButton preset="avatar" label={<EmailSVG />} />
              <CustomButton preset="avatar" label={<TwitterSVG />} />
            </ReferCardSocialContainer>
          </ReferCard>
          <CommunityCard>
            <BlankCardInfoContainer>
              <BlankCardHeading>Join Community</BlankCardHeading>
              <BlankCardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                facilisis arcu viverra elit pretium.
              </BlankCardDescription>
            </BlankCardInfoContainer>
            <CardDivider />
            <AvatarsContainer>
              <Avatars>
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
                <Avatar src="portraitA.png" />
              </Avatars>
              <BlankCardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </BlankCardDescription>
            </AvatarsContainer>
            <div>
              <CustomButton preset="default" label={"Join Community"} />
            </div>
          </CommunityCard>
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
    </HomeContainer>
  );
}
