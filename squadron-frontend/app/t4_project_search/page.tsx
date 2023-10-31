'use client'
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { Metadata } from 'next';
import { SideNav } from '@/ui/side-nav';
import { gray900, xlargeFontSize, mediumFontWeight, xxlargeLineHeight, gray300, mediumFontSize, xxlargeFontSize, xxxlargeLineHeight } from '@/styles/reuseParams';
import { TopNav } from '@/ui/top-nav';
import TitleAndFilter from '@/ui/title-and-filter';
import { ClockSVG, CoinsSVG, LargeClockSVG, LocationSVG, PeopleSVG, ProjectLogo2SVG, ProjectLogo3SVG, ToolsSVG } from '@/ui/svgs';
import RoleSkillDropdownFilter from '@/ui/filter-dropdown-role-and-skills';
import RateDropdownFilter from '@/ui/filter-dropdown-rate';
import LocationFilter from '@/ui/filter-dropdown-locaion';
import SquadCard from "@/ui/squad-card";
import CommitmentDropdownFilter from '@/ui/filter-dropdown-commitment';
import axios from 'axios';
// export const metadata: Metadata = {
//     title: 'Squadron',
//     description: 'Squadron frontend',
// };
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F9FAFB;
    width: 100%;
    gap: 32px;
    min-height: 100vh;
`;
const ProjectsAndFilterContainer = styled.div`
    padding: 0 32px 0 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    height: fit-content;
    margin-top: 72px;
`

export default function Home() {
    const continentsData = {
        Aisa: ['China', 'India', 'Japan', 'Korea', 'Thailand', 'Vietnam'],
        Europe: ['Germany', 'France', 'Italy', 'Spain', 'UK'],
        Africa: ['Egypt', 'Kenya', 'Nigeria', 'South Africa'],
        Americas: ['Canada', 'Mexico', 'USA'],
        Oceania: ['Australia', 'New Zealand'],
    }
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
        }, {
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
        },
        {
            filterName: 'Rate',
            slot: <CoinsSVG />,
            containerWidth: '328px',
            containerHeight: 'fit-content',
            children: (
                <RateDropdownFilter />
            )
        }, {
            filterName: 'Location',
            slot: <LocationSVG />,
            containerWidth: '389px',
            containerHeight: 'fit-content',
            children: (
                <LocationFilter
                    items={Object.entries(continentsData).map(([continent, countries]) => ({ continent, countries }))}
                />
            )
        }, {
            filterName: 'Commitment',
            slot: <ClockSVG />,
            containerWidth: '296px',
            containerHeight: 'fit-content',
            children: (
                <CommitmentDropdownFilter></CommitmentDropdownFilter>
            )
        }
    ];

    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const handleFilterClick = (filterName: string) => {
        setActiveFilter(prev => (prev === filterName ? null : filterName));
    };

    return (
        <>
            <SideNav />
            <Container>
                {/* <TopNav /> */}
                <ProjectsAndFilterContainer>
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
                        activeFilter={activeFilter}
                        onFilterClick={handleFilterClick}
                    />
                    <SquadCard
                        badgeTitles={['E-commerce', 'MVP']}
                        squadTitle='MVP for Serverless E-commerce Return Portal'
                        squadSubTitle='Stir'
                        squadDescription='We are helping e-commerce to be more profitable and sustainable by processing, analysing and reselling returns and overstock through our software and logistics platform. We need a passionate team to build the beta version of our SaaS Customer Returns...'
                        icon={<img src='icon/projectLogo.svg' />}
                        type='project'
                        data={[
                            "Product Manager",
                            "Front End Developer",
                            "Back End Developer",
                            "UX Designer",
                        ]}
                    />
                    <SquadCard
                        badgeTitles={['Creator Economy', 'Feature Development']}
                        squadTitle='New Product Development for Creator Revenue Share Platform'
                        squadSubTitle='Company'
                        squadDescription='First up, we are tweaking the financial infrastructure we have built. We have a product called "Splits" - what agencies use to share revenue. We ll be building new features on top of that and need additional engineers and a designer to help us build'
                        icon={<ProjectLogo2SVG />}
                        type='project'
                        data={[
                            "Product Manager",
                            "Front End Developer",
                            "Back End Developer",
                            "UX Designer",
                        ]}
                    />
                    <SquadCard
                        badgeTitles={['Food & Beverage', 'D2C', 'Mobile App', 'Label', 'Label']}
                        squadTitle={'Mobile App for Specialty Beverage Enthusiasts '}
                        squadSubTitle={'untappd'}
                        squadDescription='For all the wine snobs and craft beer connoisseurs like us, we’re building Untappd - a mobile app that lets people share and discover their favourite blends, brands and venues with their friends, while earning badges and rewards for exploring beverages of different styles and countries. ...'
                        icon={<ProjectLogo3SVG />}
                        type='project'
                        data={[
                            "Product Manager",
                            "iOS Developer",
                            "Android Developer",
                            "UX Designer",
                            "UI Designer"
                        ]}
                    />
                </ProjectsAndFilterContainer>
            </Container>


        </>
    )
}
