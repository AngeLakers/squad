'use client'
import { Paper,Stack,IconButton,Badge} from '@mui/material';
import styled from 'styled-components';


const Wallet1 = styled.div`
display: flex;
`;

const Paper4 = styled(Paper)`
  width: 540px;
  height: 240px;
  margin-left: 150px;
  background-image: url("/images/05.png");
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid #e0e0e0;
`;

const Paper5 = styled(Paper)`
  width: 540px;
  height: 240px;
  margin-left: 50px;
  background-image: url("/images/06.png");
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid #e0e0e0;
`;

export function Wallet() {
    return (
         <>
        <Wallet1>
        <Paper variant="outlined" style={paperStyle4}/>
        <Paper variant="outlined" style={paperStyle5}/>
        </Wallet1>
        </>
    )}