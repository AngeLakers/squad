"use client"


import {Application} from "@/ui/Application"
import { Topbar1 } from "@/ui/Topbar1"
import {Wallet} from "@/ui/Wallet"
import {Community} from"@/ui/Community"
import {Community2} from"@/ui/Community2"
import {Header2} from "@/ui/Header2"
import {Ste} from "@/ui/Ste"
import {Ste2} from "@/ui/Ste2"
import {Perk2} from "@/ui/Perk2"
import { Divider } from '@mui/material';
import styled from "styled-components"
import Layout from "./layout"
import CardWrapper from "@/ui/card-wrapper";
import LiveProjectCard from "@/ui/Livep";
import SquadCard from "@/ui/squad-card2";




const Display=styled.div`
display: flex;
margin-top: 50px;
align-items: center;
justify-content: center;
flex-direction: row;
`;

const Displayy=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
`;

const Displayyy=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width:567px;
margin-top: 50px;
margin-left:280px;
`;
const T = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
margin-bottom:10px;
`;

const Titlec =  styled.div`
color: var(--gray-900, #111927);

font-family: Inter;
font-size: 24px;
font-style: normal; 
font-weight: 500;
line-height: 32px;
margin-left:150px;

`;

const  Titlea = styled.div`

   display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
  

const Svgo=styled.svg`
margin-right:10px;
`;


export default function Homepage() {
  return (
    <>
   {/* <Displayy>
    <Topbar1></Topbar1>
    </Displayy> */}

    {/* <Layout> */}

    < Displayy>
    <Header></Header>
    </Displayy>

    {/* <Application></Application> */}

    < Displayy>
    <T>
<Divider sx={{ width:1130}} />
</T>
</Displayy>




<Titlea>
<Titlec> 

<Svgo width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="8" fill="#FDB022"/>
</Svgo>
Squads in Formation
  </Titlec>
  </Titlea>

    < Displayy>
    <Ste/> <Ste2/>
    </Displayy>


    < Displayy>
    <CardWrapper title="Live projects" showLogo={true} width="70rem" flexDirection="row" scrollable={34}>
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 0,
                       currentBalance:0,
                       percentage: 75
                   }}
                   score={0}
               />
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 12,
                       currentBalance: 1680,
                       percentage: 3.7,
                   }}
                   score={4.5}
               />

               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 0,
                       currentBalance:0,
                       percentage: 75
                   }}
                   score={0}
               />
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 12,
                       currentBalance: 1680,
                       percentage: 3.7,
                   }}
                   score={4.5}
               />
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 0,
                       currentBalance:0,
                       percentage: 75
                   }}
                   score={0}
               />
               <LiveProjectCard
                   title="MVP for Serverless E-commerce..."
                   memberCount={5}
                   balanceInfo={{
                       time: 12,
                       currentBalance: 1680,
                       percentage: 3.7,
                   }}
                   score={4.5}
               />
           </CardWrapper>
           </Displayy>

    < Displayy>

    <Perk2/>
    </Displayy>

    < Displayy>
    <Wallet></Wallet>
    </Displayy>
   


    < Display>
     <Community/>
    </Display>

    <Display>
    <Community2/> 
    </Display>
    {/* </Layout> */}

</>



  )
}









// "use client"

// import {Application} from "@/pages/ui/Application"
// import { Topbar1 } from "@/pages/ui/Topbar1"
// import {Wallet} from "@/pages/ui/Wallet"
// import {Community} from"@/pages/ui/Community"
// import {Community2} from"@/pages/ui/Community2"
// import {Header} from "@/pages/ui/Header"
// import {Ste} from "@/pages/ui/Ste"
// import {Ste2} from "@/pages/ui/Ste2"
// import {Perk2} from "@/pages/ui/Perk2"
// import { Divider } from '@mui/material';
// import styled from "styled-components"
// import Layout from "./layout"
// import { Hometable } from "./ui/Hometable"
// import SquadCard from "@/pages/ui/squad-card";
// const Display=styled.div`
// display: flex;
// margin-top: 50px;
// align-items: center;
// justify-content: center;
// flex-direction: row;
// `;

// const Displayy=styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: row;
// `;
// const Displayyy=styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: row;
// width:567px;
// margin-top: 30px;
// margin-bottom: 50px;
// margin-left:150px;
// `;

// const T = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: row;
// margin-bottom:10px;
// `;

// const Titlec =  styled.div`
// color: var(--gray-900, #111927);

// font-family: Inter;
// font-size: 24px;
// font-style: normal; 
// font-weight: 500;
// line-height: 32px;
// margin-left:150px;
// `;

// const Svgo=styled.svg`
// margin-right:10px;
// `;


// export  default function Home() {
//   return (
//     <>
 

//     <Layout>

//     < Displayy>
//     <Header></Header>
//     </Displayy>
//     {/* < Displayy> */}
//     <Application></Application>
//     {/* </Displayy> */}
//     {/* <T>
// <Divider sx={{ width:1130}} />
// </T> */}
//     {/* < Displayy>
//     <Hometable/>
//     </Displayy>
//     <br/> */}

// <Titlec> 

// {/* <Svgo width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <circle cx="8" cy="8" r="8" fill="#FDB022"/>
// </Svgo> */}
// Newest matches
//   </Titlec>

//     {/* < Displayy>
//     <Ste/> <Ste2/>
//     </Displayy> */}

// {/* 
//     < Displayy>

//     <Perk2/>
//     </Displayy> */}


// < Displayyy>


//    <SquadCard
//                         badgeTitles={['E-commerce', 'MVP']}
//                         squadTitle='Name of the project'
//                         squadSubTitle='Stir'
//                         squadDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, na...'
//                         icon={<img src='https://s3-alpha-sig.figma.com/img/1dee/cc01/e5a8e10689abf5afcef62f37a9e78f64?Expires=1699833600&Signature=pJSJiuH9VAmfWKpruKL45yshriM2yANsPWQaPq8pKO0NzoTbnegeQ0oYCCj725-G6ckxRj8SXc2AbCNJjM8pkA-kYaeDsi5NcMuItIxr4g37tTHGdAA0JDSR~98Y9poR3uWa3Y5EvAoZXcLT5Zu-YA8aj98zBm4KMuxRdNn4xyiON5QPJ8GgZEQGtz258M5QE9Iqti4450YNDgXA4MGTpdqYh63eB9lR4sWGW9Lt-BLDnKXyBkQZmvpDTB1B07E~gvGSx3BS6wfwe49eS4CEFlCGfjPfaVpDVgLR~befG8c47IEJrwqvO-rFwKOQCmn~-lOymvh56Q9W1CXC0KN~Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />}
//                         type='project'
//                         data={[
//                             "Product Manager",
//                             "Front End Developer",
          
      
//                         ]}
//                     />


// {/* <SquadCard
//                         badgeTitles={['E-commerce', 'MVP']}
//                         squadTitle='Name of the project'
//                         squadSubTitle='Stir'
//                         squadDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium hendrerit habitant sapien. Vestibulum vel morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, nam faucibus. morbi aliquet elit accumsan, na...'
//                         icon={<img src='https://s3-alpha-sig.figma.com/img/1dee/cc01/e5a8e10689abf5afcef62f37a9e78f64?Expires=1699833600&Signature=pJSJiuH9VAmfWKpruKL45yshriM2yANsPWQaPq8pKO0NzoTbnegeQ0oYCCj725-G6ckxRj8SXc2AbCNJjM8pkA-kYaeDsi5NcMuItIxr4g37tTHGdAA0JDSR~98Y9poR3uWa3Y5EvAoZXcLT5Zu-YA8aj98zBm4KMuxRdNn4xyiON5QPJ8GgZEQGtz258M5QE9Iqti4450YNDgXA4MGTpdqYh63eB9lR4sWGW9Lt-BLDnKXyBkQZmvpDTB1B07E~gvGSx3BS6wfwe49eS4CEFlCGfjPfaVpDVgLR~befG8c47IEJrwqvO-rFwKOQCmn~-lOymvh56Q9W1CXC0KN~Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />}
//                         type='project'
//                         data={[
//                             "Product Manager",
//                             "Front End Developer",
//                         ]}
//                     /> */}

// </Displayyy>







//     < Displayy>
//     <Wallet></Wallet>
//     </Displayy>


//     < Display>
//      <Community/>
//     </Display>

//     <Display>
//     <Community2/> 
//     </Display>
//     </Layout>

// </>



//   )
// }










