'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {Application} from "@/ui/Application"
import { Topbar1 } from "@/ui/Topbar1"
import {Wallet} from "@/ui/Wallet"
import {Community} from"@/ui/Community"
import {Community2} from"@/ui/Community2"
import {Header} from "@/ui/Header"
import Layout from "@/app/homescreen/layout"
import styled from "styled-components"
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


export default function Home() {
  return (
    <>
      <Layout>

    < Displayy>
    <Header></Header>
    </Displayy>

    <Application></Application>

    < Displayy>
    <Wallet></Wallet>
    </Displayy>


    < Display>
     <Community> </Community>
    </Display>

    <Display>
    <Community2>  </Community2>
    </Display>
    </Layout>

</>



  )
}
