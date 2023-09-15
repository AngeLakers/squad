

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




const Card1 = styled(Card)`
  width: 400px;
  margin-left: 150px;

`;




export function Cardrefer() {
  return (
    // <ThemeProvider theme={theme}>
     
      
          <Card1>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Refer a friend
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius facilisis arcu viverra elit pretium.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card1>

          
      
    // </ThemeProvider>
  );
};


