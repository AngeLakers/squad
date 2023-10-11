import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {Button, Paper, Stack} from '@mui/material';
import styled from 'styled-components';
import React from "react";

const Containertable = styled(TableContainer)`
  width: 1040px;

`;
const Title = styled.div`
  margin-top: 50px;
  font-size: 20px;

  margin-bottom: 30px;

`;

const StyledAvatarGroup = styled(AvatarGroup)`
  & .MuiAvatar-root {
    width: 30px;
    height: 30px;
  }

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const StyledTableCell = styled(TableCell)`
  color: var(--primary-700, #1B18E4);
  font-family: 'Inter';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 70px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);



`;
const NavigateButton = styled.button`

  color: black;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: 1px solid #d2d6db;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem; // Adjust padding as per your requirement
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; // Adjust hover color as per your requirement
  }
`;

function createData(
    name: string,
    project: string,
    role: string,
    teammateimage: string,
    image: string,
) {
    return {project, role, teammateimage, image, name};
}

const rows = [
    createData('Spotify', 'SurveySwap', 'Front-End Engineer', '/images/16.png', '/images/spotify.png'),
    createData('Stripe', 'SurveySwap', 'Front-End Engineer', '/images/16.png', '/images/stripe.png'),
    createData('Figma', 'SurveySwap', 'Front-End Engineer', '/images/16.png', '/images/figma.png'),
];

export function Hometable() {

    return (
        <div>
                <Title>
                    My applications
                </Title>


            <Containertable component={Paper}>
                <Table>
                    <TableHead>


                        <TableRow>
                            <TableCell>Transaction</TableCell>
                            <TableCell>Project</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Team mates</TableCell>

                        </TableRow>


                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (

                            <TableRow key={row.project}>
                                <TableCell style={{position: 'relative'}}>
                                    <img src={row.image}/>
                                    <StyledSpan>
                                        {row.name}
                                    </StyledSpan>

                                </TableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.project}
                                </StyledTableCell>

                                <TableCell>
                                    <Chip size="small" icon={<PermIdentityOutlinedIcon style={{color: '#026AA2'}}/>}
                                          label={row.role} style={{backgroundColor: '#A0E7F8', color: '#026AA2'}}
                                    />

                                </TableCell>
                                <TableCell sx={{position: 'relative'}}>
                                    <StyledAvatarGroup max={4}>
                                        <Avatar src={row.teammateimage}/>
                                        <Avatar src={row.teammateimage}/>
                                        <Avatar src={row.teammateimage}/>
                                        <Avatar src={row.teammateimage}/>
                                        <Avatar src={row.teammateimage}/>
                                    </StyledAvatarGroup>

                                </TableCell>

                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={3}/>
                            <TableCell style={{textAlign: 'right'}}>
                                <Button size="small" style={{textTransform: 'none', color: '#1B18E4'}}>
                                    View al
                                </Button>
                            </TableCell>
                        </TableRow>


                    </TableBody>
                </Table>
            </Containertable>
        </div>


    )
}