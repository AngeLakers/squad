'use client'
import '@/styles/globals.css';
import { useState } from 'react';
import styled from 'styled-components';
import type { Metadata } from 'next';
import { SideNav } from '@/ui/side-nav';
import { gray900, xlargeFontSize, mediumFontWeight, xxlargeLineHeight, gray300, mediumFontSize, xxlargeFontSize, xxxlargeLineHeight } from '@/styles/reuseParams';
import { TopNav } from '@/ui/top-nav';
import TitleAndFilter from '@/ui/title-and-filter';
import {PeopleSVG, ToolsSVG} from '@/ui/svgs';
import RoleSkillDropdownFilter from '@/ui/filter-dropdown-role-and-skills';
// export const metadata: Metadata = {
//     title: 'Squadron',
//     description: 'Squadron frontend',
// };
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F9FAFB;
  min-height: 100vh;
  width: 100%;
`;

export default function Home() {
    const categories = ['Tech', 'Design', 'Marketing'];
    const items = {
        'Tech': ['JavaScript', 'Python', 'React', 'Node.js'],
        'Design': ['Photoshop', 'Illustrator', 'Sketch', 'Figma'],
        'Marketing': ['SEO', 'SEM', 'PPC', 'Content Marketing']
    };

    const SkillsCategories = ['JavaScript', 'Python', 'React', 'Node.js', 'Photoshop', 'Illustrator', 'Sketch', 'Figma', 'SEO', 'SEM', 'PPC', 'Content Marketing'];
    const SkillsIems = {
        'JavaScript': ['JavaScript'],
        'Python': ['Python'],
        'React': ['React'],
        'Node.js': ['Node.js'],
        'Photoshop': ['Photoshop'],
        'Illustrator': ['Illustrator'],
        'Sketch': ['Sketch'],
        'Figma': ['Figma'],
        'SEO': ['SEO'],
        'SEM': ['SEM'],
        'PPC': ['PPC'],
        'Content Marketing': ['Content Marketing']
    }
    const handleItemSelect = (item: string) => {
        console.log(`Selected item: ${item}`);
    };
    const filters = [
        {
            filterName: 'Role',
            slot: <PeopleSVG />,
            containerWidth: '496px',
            containerHeight: 'fit-content',
            children: (
                <RoleSkillDropdownFilter
                    categories={categories}
                    items={items}
                    onItemSelect={handleItemSelect}
                    inputHeight='44px'
                    inputWidth='100%'
                    inputTextSize={mediumFontSize}
                    inputTextWeight={mediumFontWeight}
                />
            )
        },
        // 
        {
            filterName: 'Skills',
            slot: <ToolsSVG />,
            containerWidth: '496px',
            containerHeight: 'fit-content',
            children: (
                <RoleSkillDropdownFilter
                    categories={SkillsCategories}
                    items={SkillsIems}
                    onItemSelect={handleItemSelect}
                    inputHeight='44px'
                    inputWidth='100%'
                    inputTextSize={mediumFontSize}
                    inputTextWeight={mediumFontWeight}
                />
            )
        }
    ];

    return (
        <>
            <SideNav />
            <Container>
                <TopNav />
                <TitleAndFilter 
                    
                    filterTitle="Search projects"
                    titleFontSize={xxlargeFontSize}
                    titleFontWeight={mediumFontWeight}
                    titleLineHeight={xxxlargeLineHeight}
                    borderColor={gray300}
                    inputHeight='44px'
                    inputWidth='100%'
                    inputTextColor={gray900}
                    inputTextSize={mediumFontSize}
                    inputTextWeight={mediumFontWeight}
                    placeholder='Search by name'
                    
                    filters={filters}
                    // filterName='Role'
                    // slot={<PeopleSVG />}
                    // containerWidth='496px'
                    // containerHeight='fit-content'
                    // children={
                    //     <RoleSkillDropdownFilter
                    //         categories={categories}
                    //         items={items}
                    //         onItemSelect={handleItemSelect}
                    //         inputHeight='44px'
                    //         inputWidth='100%'
                    //         inputTextSize={mediumFontSize}
                    //         inputTextWeight={mediumFontWeight}
                    //     />
                    // }
                    
                />
            </Container>
        </>
    )
}
