import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';
import {Avatar, AvatarGroup, Grid, IconButton} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const StyledCard = styled(Card)`
  width: 1008px;
  height: 396px;
  margin: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`;
const CardContentStyled = styled(CardContent)`
  padding: 24px;
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #ddd;
`;

const Label = styled.span`
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 4px;
  border-radius: 12px;
  margin-right: 10px;
`;

const AvatarGrid = styled(Grid)`
  margin-top: 5px;
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
  font-size: 12px;
`;
const CompanyDescription = styled(Typography)`
  flex-grow: 1;
  margin-right: 2px; 
  font-size: 12px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${props => (props.expanded ? 'none' : '3')};
  -webkit-box-orient: vertical;
  transition: height 0.3s ease-out;
`;

const SeeMoreButton = styled(Button)`
  margin-top: 5px;
  font-size: 12px;
  flex-shrink: 0; // 
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
  font-size: 16px;
`;

const RoleTag = styled.div`
  background-color: lightblue;
  color: darkblue;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 12px;
  font-size: 14px;
`;
const SquadmatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start
`;

const OpenRolesTitleContainer = styled.div`
  display: ${props => (props.expanded ? 'block' : 'none')};
`;


const ProjectCard = ({projectName, projectDescription, projectLink, labels, openRoles, squadmates}) => {
    const [expanded, setExpanded] = useState(false);
    const [titleExpanded, setTitleExpanded] = useState(false);
    const [showStar, setShowStar] = useState(true);
    const [height, setHeight] = useState('auto');
    const [showVisibilityOff, setShowVisibilityOff] = useState(true); //
    const descriptionRef = useRef(null);
    const truncatedDescription = expanded ? projectDescription : projectDescription.substring(0, 50) + '...';

    const shouldShowSeeMore = projectDescription.length > 50;

    const handleSeeMoreClick = () => {
        setExpanded(!expanded);
    };

    const handleTitleExpandClick = () => {
        setTitleExpanded(!titleExpanded);
    };

    useEffect(() => {
        if (descriptionRef.current) {
            setHeight(`${descriptionRef.current.scrollHeight}px`);
        }
    }, [expanded]);


    return (
        <StyledCard>
            <HeaderRow>
                <div>
                    {labels.map((labels, index) => (
                        <Label key={index}>{labels}</Label>
                    ))}
                </div>
                <div>

                    <IconButton>
                        <ShareIcon/>
                    </IconButton>
                    {showStar && (
                        <IconButton>
                            <StarIcon/>
                        </IconButton>
                    )}
                    {showVisibilityOff && (
                        <IconButton>
                            <VisibilityOffIcon/>
                        </IconButton>
                    )}
                    <StyledButton variant="contained" href={projectLink} target="_blank">
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
                    <CompanyDescription ref={descriptionRef} style={{ height }}>
                        {truncatedDescription}
                    </CompanyDescription>
                    <SeeMoreButton onClick={handleSeeMoreClick}>
                        {expanded ? 'See Less' : 'See More'}
                    </SeeMoreButton>
                </DescriptionRow>

                <OpenRolesContainer>
                    <div>
                        <OpenRolesHeader variant="h6">
                            Open Roles ({openRoles.length})
                        </OpenRolesHeader>
                        <RoleTagsContainer>
                            {openRoles.map((role, index) => (
                                <RoleTag key={index}>
                                    {role}
                                </RoleTag>
                            ))}
                        </RoleTagsContainer>
                    </div>
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


                <Button onClick={handleTitleExpandClick}>
                    {titleExpanded ? 'See Less' : 'See More'}
                </Button>

                <OpenRolesTitleContainer expanded={titleExpanded}>
                    <Typography variant="body2">
                        This is the expanded Open Roles title section.
                    </Typography>
                </OpenRolesTitleContainer>


                {/*<OpenRolesSection>*/}
                {/*    <Typography variant="h6">Open Roles</Typography>*/}
                {/*    {openRoles.map((role, index) => (*/}
                {/*        <OpenRole key={index} variant="body2">*/}
                {/*            {role}*/}
                {/*        </OpenRole>*/}
                {/*    ))}*/}
                {/*</OpenRolesSection>*/}


            </CardContentStyled>

        </StyledCard>
    )
        ;
};


export default ProjectCard;