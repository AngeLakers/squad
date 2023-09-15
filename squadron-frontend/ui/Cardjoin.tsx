'use client'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, PaletteColorOptions,Paper } from '@mui/material';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import styled from 'styled-components';
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';



const Card2 = styled(Card)`
  width: 680px;
  margin-left: 150px;
`;

const AvatarG = styled(AvatarGroup)`
  margin-right: 550px;
`;

const Btn1 = styled(Button)`
  margin-top: 50px;
`;

export function Cardjoin() {
  return (
    
     
      
    <Card2>
    <CardContent>
      <Typography variant="h6" component="div">
        Join Community
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.
      </Typography>
      <Divider />

      <AvatarG max={3}>
        <Avatar alt="Remy Sharp" src="/images/01.png" />
        <Avatar alt="Travis Howard" src="/images/01.png" />
        <Avatar alt="Cindy Baker" src="/images/01.png" />
        <Avatar alt="Agnes Walker" src="/images/01.png" />
      </AvatarG>
    </CardContent>
    <CardActions>
      {/* <Btn1 variant="contained" color="violet">
        Violet
      </Btn1> */}
      <Btn1 variant="outlined">
      Outlined
      </Btn1>
    </CardActions>
  </Card2>
          
      
    
  );
};
