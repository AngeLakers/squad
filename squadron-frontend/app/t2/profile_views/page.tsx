"use client"
import * as React from "react";
import Button from "@mui/material/Button";
import SmallProjectCard from "@/ui/profile/SmallProjectCard";
import CardWrapper from "@/ui/profile/card-wrapper";

export default function Home() {
    return (
          <div>

              <CardWrapper title={"Worked in"} width={"100vh"} flexDirection={"row"} scrollable={25.5}>
                  <SmallProjectCard
                      title="My Project"
                      year="2023"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />

                  <SmallProjectCard
                      title="My Project"
                      year="2023"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />
                  <SmallProjectCard
                      title="My Project0"
                      year="2022"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />
                  <SmallProjectCard
                      title="My Project1"
                      year="2023"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />
                  <SmallProjectCard
                      title="My Project2"
                      year="2023"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda"
                      avatars={[
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                          { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                          { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      ]}
                  />
                  <SmallProjectCard
                  title="My Project3"
                  year="2023"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus adsjaldjalskjda asda11111111111111111111111111111111111"
                  avatars={[
                      { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                      { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                      { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                      { alt: "Remy Sharp", src: "/static/images/avatar/avatar1.jpg" },
                      { alt: "Travis Howard", src: "/static/images/avatar/avatar2.jpg" },
                  ]}
              />


              </CardWrapper>

              </div>

    )

}
