import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShareIcon from '@mui/icons-material/Share';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    AvatarGroup,
    Chip,
    Collapse,
    Grid,
    IconButton
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const StyledCard = styled(Card)`
  width: 63rem; /* 1008px / 16 = 63rem */
  margin: 0.625rem; /* 10px / 16 = 0.625rem */
  padding: 0.375rem; /* 5px / 16 = 0.3125rem */
  box-sizing: border-box;

  border-radius: 0.75rem; /* 12px / 16 = 0.75rem */
  background-color: #fff;
  border: 0.0625rem solid #e5e7eb; /* 1px / 16 = 0.0625rem */
  color: #384250;
  font-family: Inter;
  min-width: 63rem;
  max-width: 63rem;
  overflow-y: auto;
  max-height: 27rem;

`;

const CardContentStyled = styled(CardContent)`
  padding: 1.5rem; /* 24px / 16 = 1.5rem */
`;

const StyledIconButton = styled(IconButton)`
  position: relative;
  border-radius: 0.5rem; /* 8px / 16 = 0.5rem */
  background-color: #fff;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0.625rem; /* 10px / 16 = 0.625rem */
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  position: relative;
  border-radius: 0.5rem; /* 8px / 16 = 0.5rem */
  background-color: #fff;
  box-shadow: 0px 0.0625rem 0.125rem rgba(16, 24, 40, 0.05); /* 1px / 16 = 0.0625rem, 2px / 16 = 0.125rem */
  border: 0.0625rem solid #d2d6db; /* 1px / 16 = 0.0625rem */
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  padding: 0.625rem 1rem; /* 10px / 16 = 0.625rem, 16px / 16 = 1rem */
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 0.875rem; /* 14px / 16 = 0.875rem */
  color: #384250;
  margin-left: 1.5rem; /* 24px / 16 = 1.5rem */
  font-family: Inter;
  font-weight: 600;

  &:hover {
    background-color: #0056b3;
  }
`;


const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem; /* 24px / 16 = 1.5rem */
  border-bottom: 0.0625rem solid #f3f4f6; /* 1px / 16 = 0.0625rem */
  position: relative;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  text-align: center;
  font-size: 0.875rem; /* 14px / 16 = 0.875rem */
  color: #384250;
  font-family: Inter;
`;

const Label = styled.span`
  background-color: #f1f1f1;
  padding: 0.3125rem 0.625rem; /* 5px / 16 = 0.3125rem, 10px / 16 = 0.625rem */
  border-radius: 0.75rem; /* 12px / 16 = 0.75rem */
  margin-right: 0.625rem; /* 10px / 16 = 0.625rem */
  font-size: 0.875rem; /* 14px / 16 = 0.875rem */
  line-height: 1.25rem; /* 20px / 16 = 1.25rem */
  font-weight: 500;
  font-family: Inter;
  color: #384250;
  text-align: center;
`;

const AvatarGrid = styled(Grid)`
  margin-top: 0.3125rem;
`;

const CompanyName = styled(Typography)`
  font-weight: normal;
  color: gray;
`;

const ProjectName = styled(Typography)`

  font-weight: bold;
`;

const DescriptionRow = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 0.875rem; /* 14px / 16 = 0.875rem */
`;

const SeeMoreButton = styled(Button)`
  margin-top: 0.3125rem; /* 5px / 16 = 0.3125rem */
  font-size: 0.875rem; /* 14px / 16 = 0.875rem */
  font-weight: 600;
  color: #4b48ec;

`;

const OpenRolesContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;


`;
const RoleTagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const OpenRolesHeader = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;

`;


const StyledChip = styled(Chip)`
  margin: 0.3125rem !important; /* 5px / 16 = 0.3125rem */
  border-radius: 0.25rem !important; /* 4px / 16 = 0.25rem */
  font-size: 0.875rem !important; /* 14px / 16 = 0.875rem */
  position: relative;
  width: auto !important;
  font-weight: bold;
  background-color: #e0f2fe !important;
  display: flex;
  flex-direction: row;
  padding: 0.25rem 0.75rem 0.25rem 0.625rem; /* 4px / 16 = 0.25rem, 12px / 16 = 0.75rem, 10px / 16 = 0.625rem */
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-start;
  //mix-blend-mode: multiply;
  text-align: center;
  color: #0056b3 !important;
\`  ;

`;


const RoleTag: React.FC<RoleTagProps> = ({role}) => {
    return (
        <StyledChip
            label={role}
            avatar={<Avatar src="/public/profile-icon/user-03.svg"/>}
            variant="filled"
            color="primary"


        />
    );
};


const SquadmatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  align-items: flex-start;
`;


const ExpandableText: React.FC<ExpandableSectionProps> = ({text}) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const truncatedText = expanded ? text : text.substring(0, 100) + '...';

    return (

        <ExpandableContainer>
            <Typography variant="body1">
                {truncatedText}
            </Typography>
            <SeeMoreButton onClick={handleToggle} variant="text">
                {expanded ? 'See Less' : 'See More'}
            </SeeMoreButton>
        </ExpandableContainer>
    );
};

const ExpandableContainer = styled('div')`
  display: flex;
  align-items: baseline;
`;


const StyledAccordion = styled(Accordion)`
  box-shadow: none !important;
  width: 100%;
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  &.Mui-expanded {
    min-height: 3rem;
  }

  .MuiAccordionSummary-content {
    margin: 0;

    &.Mui-expanded {
      margin: 0;
    }
  }
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  margin-left: 0.5rem;
`;

const ExpandableSection = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <StyledAccordion expanded={expanded}>
            <StyledAccordionSummary onClick={handleExpandClick}>
                <Typography variant="body2" display="inline">See more</Typography>
                <StyledExpandMoreIcon/>
            </StyledAccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    This is the expanded Open Roles title section.
                </Typography>
            </AccordionDetails>
        </StyledAccordion>
    );
};

interface ExpandableSectionProps {
    text: string;
}

interface Squadmate {
    avatarUrl: string;
}

interface RoleTagProps {
    role: string;
}

interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectLink: string;
    labels: string[];
    openRoles: string[];
    squadmates: Squadmate[];
    status?: boolean;
}


const ProjectCard = ({
                         projectName,
                         projectDescription,
                         projectLink,
                         labels,
                         openRoles,
                         squadmates,
                         status = true
                     }: ProjectCardProps
) => {
    const [expanded, setExpanded] = useState(false);
    const [titleExpanded, setTitleExpanded] = useState(false);
    const [showStar, setShowStar] = useState(status);
    const [showVisibilityOff, setShowVisibilityOff] = useState(status);
    const truncatedDescription = expanded ? projectDescription : projectDescription.substring(0, 50) + '...';

    const shouldShowSeeMore = projectDescription.length > 50;

    const handleSeeMoreClick = () => {
        setExpanded(!expanded);
    };

    const handleTitleExpandClick = () => {
        setTitleExpanded(!titleExpanded);
    };


    return (
        <StyledCard>
            <HeaderRow>
                <div>
                    {labels.map((labels, index) => (
                        <Label key={index}>{labels}</Label>
                    ))}
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>

                    <StyledIconButton>
                        <img src="/profile-icon/share.svg " alt="Share"/>

                    </StyledIconButton>
                    {showStar && (
                        <StyledIconButton>
                            <img src="/profile-icon/star.svg " alt="Star"/>
                        </StyledIconButton>
                    )}
                    {showVisibilityOff && (
                        <StyledIconButton>
                            <img src="/profile-icon/eye.svg " alt="Visablity"/>
                        </StyledIconButton>
                    )}
                    <StyledButton variant="contained"
                                  href={projectLink}
                                  target="_blank">
                        View
                    </StyledButton>
                </div>
            </HeaderRow>
            <CardContentStyled>
                <AvatarGrid container spacing={2}>
                    <Grid item>
                        <Avatar alt="Company Logo" src="/path/to/company-logo.jpg"/>
                    </Grid>
                    <Grid item xs={8}>
                        <CompanyName variant="h6">
                            Company Name
                        </CompanyName>
                        <ProjectName variant="subtitle1">
                            {projectName}
                        </ProjectName>
                    </Grid>
                </AvatarGrid>
                <DescriptionRow>
                    <ExpandableText text={projectDescription}/>
                </DescriptionRow>

                <OpenRolesContainer>
                    {status ? (
                        <div className={"open_role"}>
                            <OpenRolesHeader variant="h6">
                                Open Roles ({openRoles.length})
                            </OpenRolesHeader>
                            <RoleTagsContainer>
                                {openRoles.map((role, index) => (
                                    <RoleTag key={index} role={role}>
                                    </RoleTag>
                                ))}
                            </RoleTagsContainer>
                        </div>
                    ) : (
                        <div className={"placeholder"}></div>
                    )}
                    <div>
                        <SquadmatesContainer>
                            <OpenRolesHeader variant="h6">
                                Squadmates
                            </OpenRolesHeader>
                            <AvatarGroup max={4}>
                                {squadmates.map((squadmates, index) => (
                                    <Avatar key={index} src={squadmates.avatarUrl}/>
                                ))}
                            </AvatarGroup>
                        </SquadmatesContainer>
                    </div>
                </OpenRolesContainer>


                <ExpandableSection/>


            </CardContentStyled>

        </StyledCard>
    )
        ;
};


export default ProjectCard;