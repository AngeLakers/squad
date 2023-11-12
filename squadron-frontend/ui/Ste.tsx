import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";
import { Divider } from "@mui/material";
import { useState } from "react";

const Btn = styled.button`
  background-color: #66ff33;
  border-radius: 8px;
  border: none;
  height: 50px;
  margin-left: 350px;
  margin-top: 10px;
  position: absolute;
  z-index: 1000;
  width: 100px;
  top: 130px;
`;

const T = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

// 注销absolute
const CarouselProjects = styled.div`
  height: 308px;
  left: 0;

  top: 72px;
  // width: 1128px;
  margin-bottom: 30px;
`;

const ProjectForming = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 1px 2px #1018280f, 0px 1px 3px #1018281a;
  height: 308px;
  // left: 115px;
  overflow: hidden;
  position: relative;
  width: 520px;
  top: 10px;
`;

const Top = styled.div`
  background-color: #0b0f00;
  height: 76px;
  left: 0;
  overflow: hidden;
  // position: absolute;
  top: 0;
  width: 520px;
`;

const OverlapGroup = styled.div`
  height: 366px;
  left: 24px;
  position: relative;
  top: -116px;
  width: 727px;
`;

const Body = styled.div`
  height: 28px;
  left: 0;
  position: absolute;
  top: 140px;
  width: 226px;
`;

const Frame = styled.div`
  height: 28px;
`;

const DivWrapper = styled.div`
  height: 28px;
  position: relative;
  width: 171px;
`;

const Text2 = styled.p`
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 18px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: 28px;
  position: absolute;
  white-space: nowrap;
`;

const TextWrapper3 = styled.span`
  color: #ffffff;
  font-family: "Inter", Helvetica;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
`;

const Line = styled.img`
  height: 366px;
  left: 85px;
  position: absolute;
  top: 0;
  width: 366px;
`;

const Line2 = styled.img`
  height: 366px;
  left: 150px;
  position: absolute;
  top: 0;
  width: 366px;
`;

const Line3 = styled.img`
  height: 366px;
  left: 215px;
  position: absolute;
  top: 0;
  width: 366px;
`;

const Line4 = styled.img`
  height: 366px;
  left: 280px;
  position: absolute;
  top: 0;
  width: 366px;
`;

const Line5 = styled.img`
  height: 366px;
  left: 361px;
  position: absolute;
  top: 0;
  width: 366px;
`;

const Frame2 = styled.div`
  height: 232px;
  left: 0;
  position: absolute;
  top: 76px;
  width: 520px;
`;

const Frame3 = styled.div`
  height: 184px;
  left: 24px;
  position: absolute;
  top: 24px;
  width: 16px;
`;

const MaterialSymbols = styled.img`
  height: 16px;
  left: 0;
  position: absolute;
  top: 12px;
  width: 16px;
`;

const Line6 = styled.img`
  height: 32px;
  left: 8px;
  position: absolute;
  top: 28px;
  width: 1px;
`;

const MaterialSymbols2 = styled.img`
  height: 16px;
  left: 0;
  position: absolute;
  top: 60px;
  width: 16px;
`;

const MaterialSymbols3 = styled.img`
  height: 16px;
  left: 0;
  position: absolute;
  top: 108px;
  width: 16px;
`;

const MaterialSymbols4 = styled.img`
  height: 16px;
  left: 0;
  position: absolute;
  top: 156px;
  width: 16px;
`;

const Line7 = styled.img`
  height: 32px;
  left: 8px;
  position: absolute;
  top: 76px;
  width: 1px;
`;

const Ellipse = styled.div`
  background-color: #fff9eb;
  border-radius: 8px;
  height: 16px;
  left: 0;
  position: absolute;
  top: 12px;
  width: 16px;
`;
const Ellipse1 = styled.div`
  background-color: #fff9eb;
  border-radius: 8px;
  height: 16px;
  left: 0;
  position: absolute;
  top: 60px;
  width: 16px;
`;

const Ellipse2 = styled.div`
  background-color: #fff9eb;
  border-radius: 8px;
  height: 16px;
  left: 0;
  position: absolute;
  top: 108px;
  width: 16px;
`;

const Line8 = styled.img`
  height: 32px;
  left: 8px;
  position: absolute;
  top: 124px;
  width: 1px;
`;

const Ellipse3 = styled.div`
  background-color: #d2d6db;
  border-radius: 8px;
  height: 16px;
  left: 0;
  position: absolute;
  top: 156px;
  width: 16px;
`;

const Ellipse4 = styled.div`
  background-color: #d2d6db;
  border-radius: 8px;
  height: 16px;
  left: 0;
  position: absolute;
  top: 108px;
  width: 16px;
`;

const Ellipse5 = styled.div`
  background-color: #fff9eb;
  border-radius: 8px;
  height: 16px;
  left: 0;
  position: absolute;
  top: 156px;
  width: 16px;
`;
const Ellipse6 = styled.div`
  background-color: #d2d6db;
  border-radius: 8px;
  height: 16px;
  left: 0;
  position: absolute;
  top: 12px;
  width: 16px;
`;
const Ellipse7 = styled.div`
  background-color: #d2d6db;
  border-radius: 8px;
  height: 16px;
  left: 0;
  position: absolute;
  top: 60px;
  width: 16px;
`;

const Frame4 = styled.div`
  height: 224px;
  left: 48px;
  position: absolute;
  top: 24px;
  width: 448px;
`;

const Frame5 = styled.div`
  background-color: #feefc6;
  border-radius: 8px;
  height: 40px;
  left: 0;
  position: absolute;
  top: 0;
  width: 448px;
`;

const SpanWrapper2 = styled.p`
  color: #4d5761;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 400;
  left: 16px;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  white-space: nowrap;
`;

const TextWrapper4 = styled.span`
  color: #4d5761;
  font-family: "Inter", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
`;

const ChevronRight = styled.img`
  height: 24px;
  left: 408px;
  position: absolute;
  top: 8px;
  width: 24px;
`;

const HiringWrapper = styled.div`
  background-color: #f3f4f6;
  border-radius: 8px;
  height: 40px;
  left: 0;
  position: absolute;
  top: 144px;
  width: 448px;
`;

const CollectingWrapper = styled.div`
  background-color: #feefc6;
  border-radius: 8px;
  height: 40px;
  left: 0;
  position: absolute;
  top: 48px;
  width: 448px;
`;

const Frame6 = styled.div`
  background-color: #feefc6;
  border-radius: 8px;
  height: 40px;
  left: 0;
  position: absolute;
  top: 96px;
  width: 448px;
`;

const Titlec = styled.div`
  color: var(--gray-900, #111927);

  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const D = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export function Ste() {
  const [stepsStatus, setStepsStatus] = useState([
    "completed",
    "completed",
    "in-progress",
    "not-started",
  ]);
  return (
    <>
      {/* <Titlec> 
Squads in Formation
  </Titlec> */}

      <CarouselProjects>
        <ProjectForming>
          <Top>
            <OverlapGroup>
              <Body>
                <Frame>
                  <DivWrapper>
                    <Text2>
                      <TextWrapper3>Name of the project</TextWrapper3>
                    </Text2>
                  </DivWrapper>
                </Frame>
              </Body>
              <Line2
                alt="Line"
                src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-178-6@2x.png"
              />
              <Line3
                alt="Line"
                src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-178-6@2x.png"
              />
              {}

              <Line4
                alt="Line"
                src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-180-6@2x.png"
              />

              {/* {showButton && <Btn onClick={handleButtonClick} >Search Project</Btn>} */}

              <Line5
                alt="Line"
                src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-181-3@2x.png"
              />
            </OverlapGroup>
          </Top>

          <Frame2>
            <Frame3>
              {stepsStatus[0] === "completed" ? (
                <>
                  <MaterialSymbols
                    alt="Completed"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/material-symbols-check-circle-rounded-4@2x.png"
                  />{" "}
                  <Line6
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-182-3@2x.png"
                  />
                </>
              ) : stepsStatus[0] === "in-progress" ? (
                <>
                  <Ellipse />
                  <Line6
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"
                  />
                </>
              ) : (
                <>
                  <Ellipse6 />{" "}
                  <Line6
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"
                  />
                </>
              )}

              {/* {stepsStatus[0] === "completed" && (<><MaterialSymbols alt="Completed" src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/material-symbols-check-circle-rounded-4@2x.png" /> <Line6 alt="Line" src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-182-3@2x.png"/></>)} */}
              {stepsStatus[1] === "completed" ? (
                <>
                  <MaterialSymbols2
                    alt="Completed"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/material-symbols-check-circle-rounded-4@2x.png"
                  />{" "}
                  <Line7
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-182-3@2x.png"
                  />{" "}
                </>
              ) : stepsStatus[1] === "in-progress" ? (
                <>
                  <Ellipse1 />{" "}
                  <Line7
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"
                  />
                </>
              ) : (
                <>
                  <Ellipse7 />{" "}
                  <Line7
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"
                  />
                </>
              )}

              {/* {stepsStatus[2] === "in-progress" && (<><Ellipse2 />  <Line8 alt="Line" src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"/> </>)}   */}
              {/* {stepsStatus[2] === "completed" && (<> <MaterialSymbols3 alt="Completed" src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/material-symbols-check-circle-rounded-4@2x.png"/> <Line8 alt="Line" src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"/> </>)}   */}

              {stepsStatus[2] === "completed" ? (
                <>
                  {" "}
                  <MaterialSymbols3
                    alt="Completed"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/material-symbols-check-circle-rounded-4@2x.png"
                  />{" "}
                  <Line8
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"
                  />{" "}
                </>
              ) : stepsStatus[2] === "in-progress" ? (
                <>
                  <Ellipse2 />{" "}
                  <Line8
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"
                  />{" "}
                </>
              ) : (
                <>
                  <Ellipse4 />{" "}
                  <Line8
                    alt="Line"
                    src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/line-184-3@2x.png"
                  />{" "}
                </>
              )}

              {stepsStatus[3] === "not-started" ? (
                <Ellipse3 />
              ) : stepsStatus[3] === "completed" ? (
                <MaterialSymbols4
                  alt="Completed"
                  src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/material-symbols-check-circle-rounded-4@2x.png"
                />
              ) : (
                <Ellipse5 />
              )}
            </Frame3>
            <Frame4>
              <Frame5
                style={{
                  backgroundColor:
                    stepsStatus[0] === "completed"
                      ? "#feefc6"
                      : stepsStatus[0] === "in-progress"
                      ? "#feefc6"
                      : "#f3f4f6",
                }}
              >
                <SpanWrapper2>
                  <TextWrapper4>Project Details</TextWrapper4>
                </SpanWrapper2>
                <ChevronRight
                  alt="Chevron right"
                  src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/chevron-right-10@2x.png"
                />
              </Frame5>
              <CollectingWrapper
                style={{
                  backgroundColor:
                    stepsStatus[1] === "completed"
                      ? "#feefc6"
                      : stepsStatus[1] === "in-progress"
                      ? "#feefc6"
                      : "#f3f4f6",
                }}
              >
                <SpanWrapper2>
                  <TextWrapper4>Collecting Applicants</TextWrapper4>
                </SpanWrapper2>
              </CollectingWrapper>
              <Frame6
                style={{
                  backgroundColor:
                    stepsStatus[2] === "in-progress"
                      ? "#feefc6"
                      : stepsStatus[2] === "completed"
                      ? "#feefc6"
                      : "#f3f4f6",
                }}
              >
                <SpanWrapper2>
                  <TextWrapper4>Reviewing Applications</TextWrapper4>
                </SpanWrapper2>

                <ChevronRight
                  alt="Chevron right"
                  src="https://cdn.animaapp.com/projects/652e101fa7335b45aa6388ca/releases/652e1188ebc8f085b8091452/img/chevron-right-10@2x.png"
                />
              </Frame6>
              <HiringWrapper
                style={{
                  backgroundColor:
                    stepsStatus[3] === "in-progress"
                      ? "#feefc6"
                      : stepsStatus[3] === "completed"
                      ? "#feefc6"
                      : "#f3f4f6",
                }}
              >
                <SpanWrapper2>
                  <TextWrapper4>Hiring</TextWrapper4>
                </SpanWrapper2>
              </HiringWrapper>
            </Frame4>
          </Frame2>
        </ProjectForming>
      </CarouselProjects>

      {/* {showButton && <Btn onClick={handleButtonClick} >Search Project</Btn>} */}
    </>
  );
}
