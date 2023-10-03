'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {Application} from "@/ui/Application"
import {Topbar1} from '@/ui/Topbar1'
import {Wallet} from "@/ui/Wallet"
import {Community} from"@/ui/Community"
import {Community2} from"@/ui/Community2"
import {Header} from '@/ui/Header'
import styled from 'styled-components';
const Display=styled.div`
display: flex;
margin-left: 150px;
margin-top: 50px;
`;
export default function Home() {
  return (
    <>
    <Topbar1></Topbar1>
    <Header></Header>
    <Application></Application>
     <Wallet></Wallet>
    < Display>
     <Community> </Community>
    </Display>
    <Display>
    <Community2>  </Community2>
      </Display>

</>



  )
}
